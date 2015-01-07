<?php

/*
 * Copyright (c) 2011-2015 Lp digital system
 *
 * This file is part of BackBee.
 *
 * BackBee is free software: you can redistribute it and/or modify
 * it under the terms of the GNU General Public License as published by
 * the Free Software Foundation, either version 3 of the License, or
 * (at your option) any later version.
 *
 * BackBee is distributed in the hope that it will be useful,
 * but WITHOUT ANY WARRANTY; without even the implied warranty of
 * MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
 * GNU General Public License for more details.
 *
 * You should have received a copy of the GNU General Public License
 * along with BackBee. If not, see <http://www.gnu.org/licenses/>.
 */

namespace BackBuilder\Bundle\ToolbarBundle\Tests\Controller;

use BackBuilder\Bundle\ToolbarBundle\Controller\ConfigController;
use BackBuilder\Bundle\ToolbarBundle\Plugin\PluginManager;
use BackBuilder\Config\Config;
use BackBuilder\DependencyInjection\Container;

use Symfony\Component\DependencyInjection\Definition;

/**
 * ConfigController tests
 *
 * @author e.chau <eric.chau@lp-digital.fr>
 *
 * @coversDefaultClass \BackBuilder\Bundle\ToolbarBundle\Controller\ConfigController
 */
class ConfigControllerTest extends \PHPUnit_Framework_TestCase
{
    /**
     * @var ConfigController
     */
    private $controller;

    /**
     * @var PluginManager
     */
    private $plugin_manager;

    /**
     * {@inheritdoc}
     */
    public function setUp()
    {
        $definition = new Definition('BackBuilder\Bundle\ToolbarBundle\Tests\Plugin\TestPlugin');;
        $container = new Container();
        $container->setDefinition('test_plugin', $definition->addTag(PluginManager::PLUGIN_SERVICE_TAG));
        $this->plugin_manager = new PluginManager($container);
        $this->controller = new ConfigController(new Config(__DIR__), $this->plugin_manager);
    }

    /**
     * {@inheritdoc}
     */
    public function tearDown()
    {
        $this->controller = null;
        $this->plugin_manager = null;
    }

    public function testGetAction()
    {
        $response = $this->controller->getAction();
        $this->assertInstanceOf('Symfony\Component\HttpFoundation\JsonResponse', $response);
        $this->assertEquals(json_encode($this->plugin_manager->getPluginConfiguration()), $response->getContent());
    }
}
