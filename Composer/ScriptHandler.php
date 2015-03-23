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

namespace BackBee\Bundle\ToolbarBundle\Composer;

use Symfony\Component\Filesystem\Filesystem;
use Symfony\Component\Filesystem\Exception\IOExceptionInterface;

/**
 * This script is used to move the BbCoreJs repository to his correct place
 *
 * @category  BackBee
 * @package   BackBee\Bundle\ToolbarBundle
 * @copyright Lp digital system
 * @author    Mickaël Andrieu <mickael.andrieu@lp-digital.fr>
 */
class ScriptHandler
{
    /**
     * Move Javascript client to ``Resources/toolbar`` folder
     */
    public static function moveClient()
    {
        $filesystem = new Filesystem();
        $filesystem->mirror(self::getVendorPath(), self::getToolbarPath());
    }

    /**
     * path to RootDir
     */
    private static function getRootDir()
    {
        return __DIR__.DIRECTORY_SEPARATOR.'..';
    }
    /**
     * path to BbCoreJS vendor
     */
    private static function getVendorPath()
    {
        return self::getRootDir().DIRECTORY_SEPARATOR.'vendor'.DIRECTORY_SEPARATOR.'backbee'.DIRECTORY_SEPARATOR.'BbCoreJs';
    }

    /**
     * path to Toolbar folder
     */
    private static function getToolbarPath()
    {
        return self::getRootDir().DIRECTORY_SEPARATOR.'Resources'.DIRECTORY_SEPARATOR .'toolbar'.DIRECTORY_SEPARATOR;
    }
}
