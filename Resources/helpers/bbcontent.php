<?php

/*
 * Copyright (c) 2011-2013 Lp digital system
 *
 * This file is part of BackBee5.
 *
 * BackBee5 is free software: you can redistribute it and/or modify
 * it under the terms of the GNU General Public License as published by
 * the Free Software Foundation, either version 3 of the License, or
 * (at your option) any later version.
 *
 * BackBee5 is distributed in the hope that it will be useful,
 * but WITHOUT ANY WARRANTY; without even the implied warranty of
 * MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
 * GNU General Public License for more details.
 *
 * You should have received a copy of the GNU General Public License
 * along with BackBee5. If not, see <http://www.gnu.org/licenses/>.
 */

namespace BackBee\Renderer\Helper;

use BackBee\ClassContent\AClassContent;
use BackBee\ClassContent\ContentSet;
use BackBee\Renderer\ARenderer;

use Symfony\Component\Security\Core\Exception\AuthenticationCredentialsNotFoundException;

/**
 * Helper providing HTML attributes to online-edited content
 *
 * @category    BackBee
 * @package     BackBee\Renderer
 * @subpackage  Helper
 * @copyright   Lp digital system
 * @author      e.chau <eric.chau@lp-digital.fr>
 */
class bbcontent extends AHelper
{
    /**
     * array that contains
     * @var array
     */
    private $attributes;

    /**
     * the classcontent we are processing to get its attributes as string
     * @var AClassContent
     */
    private $content;

    /**
     * [$options description]
     * @var array
     */
    private $options;

    /**
     * bbcontent helper constructor
     * @param ARenderer $renderer
     */
    public function __construct(ARenderer $renderer)
    {
        parent::__construct($renderer);

        $this->reset();
    }

    /**
     * Return HTML formatted attribute for provided content
     * @param  AClassContent $content the content we want to generate its HTML attribute; if $content is null, we
     *                                get the current object setted on current renderer
     * @return string
     */
    public function __invoke(AClassContent $content = null, array $options = [])
    {
        $result = '';

        if ($this->isGranted()) {
            $this->content = $content?: $this->getRenderer()->getObject();
            $this->options = $options;

            $result = $this->generateAttributesString();

            $this->reset();
        }

        return $result;
    }

    /**
     * [isGranted description]
     * @return boolean [description]
     */
    private function isGranted()
    {
        $security_context = $this->getRenderer()->getApplication()->getSecurityContext();
        $result = false;

        try {
            $result = (
                null !== $this->getRenderer()->getApplication()->getBBUserToken()
                && (
                    true === $security_context->isGranted('sudo')
                    || null === $security_context->getACLProvider()
                    || true === $security_context->isGranted('VIEW', $this->content)
                )
            );
        } catch (AuthenticationCredentialsNotFoundException $e) { /* Nothing to do */ }

        return $result;
    }

    /**
     * [reset description]
     * @return [type] [description]
     */
    private function reset()
    {
        $this->attributes = [
            'class'              => ['bb-content'],
            'draggable'          => null,
            'dropzone'           => null,
            'data-bb-identifier' => null
        ];

        $this->content = null;
        $this->options = [];
    }

    /**
     * [computeAttributes description]
     * @return [type] [description]
     */
    private function generateAttributesString()
    {
        $this->computeClassAttribute();
        $this->computeDragAndDropAttributes();
        $this->computeIdentifierAttribute();

        return $this->getAttributesString();
    }

    /**
     * Computes classcontent drag and drop attributes and set it to attributes property array
     */
    private function computeClassAttribute()
    {
        $classes = isset($this->options['class']) ? $this->options['class'] : null;
        if (null !== $classes) {
            $this->attributes['class'] = array_merge(
                $this->attributes['class'],
                is_array($classes) ? $classes : explode(' ', $classes)
            );
        }
    }

    /**
     * Computes classcontent drag and drop attributes and set it to attributes property array
     */
    private function computeDragAndDropAttributes()
    {
        $valid = false;
        if ($this->content instanceof ContentSet) {
            $this->attributes['dropzone'] = isset($this->options['dropzone']) ? $this->options['dropzone'] : true;
            $valid = true === $this->attributes['dropzone'];
        }

        $is_element = strpos(AClassContent::CLASSCONTENT_BASE_NAMESPACE . 'Element\\', get_class($this->content));
        $is_contentset = get_class($this->content) === AClassContent::CLASSCONTENT_BASE_NAMESPACE . 'ContentSet';
        if (false === $is_element && false === $is_contentset) {
            $this->attributes['draggable'] = isset($this->options['draggable']) ? $this->options['draggable'] : true;
            $valid = true === $this->attributes['draggable'];
        }

        if ($valid) {
            $this->attributes['class'][] = 'bb-dnd';
        }
    }

    /**
     * Computes classcontent identifier attribute and set it to attributes property array
     */
    private function computeIdentifierAttribute()
    {
        $data = $this->content->jsonSerialize();
        $this->attributes['data-bb-identifier'] = str_replace('\\', '/', $data['type']) . '(' . $data['uid'] . ')';
    }

    /**
     * [getAttributesString description]
     * @return string
     */
    private function getAttributesString()
    {
        $result = '';

        $this->attributes['class'] = implode(' ', $this->attributes['class']);
        foreach ($this->attributes as $key => $value) {
            if (null !== $value) {
                $result .= " $key=\"" . (is_bool($value) ? ($value ? 'true' : 'false') : $value) . '"';
            }
        }

        return $result;
    }
}
