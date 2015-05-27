/*jslint */
/*global AdobeEdge: false, window: false, document: false, console:false, alert: false */
(function (compId) {

    "use strict";
    var im='./resources/layouts/error/images',
        aud='media/',
        vid='media/',
        js='./resources/layouts/error/js/',
        fonts = {
        },
        opts = {
            'gAudioPreloadPreference': 'auto',
            'gVideoPreloadPreference': 'auto'
        },
        resources = [
        ],
        scripts = [
            js+"jquery-2.0.3.min.js",
            js+"jquery.parallax.min.js"
        ],
        symbols = {
            "stage": {
                version: "5.0.1",
                minimumCompatibleVersion: "5.0.0",
                build: "5.0.1.386",
                scaleToFit: "none",
                centerStage: "none",
                resizeInstances: false,
                content: {
                    dom: [
                        {
                            id: 'scene',
                            type: 'rect',
                            rect: ['0%', '0%', '100%', '100%', 'auto', 'auto'],
                            overflow: 'visible',
                            fill: ["rgba(102,197,251,1.00)"],
                            stroke: [0,"rgba(0,0,0,1)","none"],
                            c: [
                            {
                                id: 'nuage_05_btn',
                                symbolName: 'nuage_05_btn',
                                type: 'rect',
                                rect: ['100%', '100%', '200', '90', 'auto', 'auto'],
                                userClass: "layer"
                            },
                            {
                                id: 'nuage_02_btn',
                                symbolName: 'nuage_02_btn',
                                type: 'rect',
                                rect: ['100%', '100%', '200', '41', 'auto', 'auto'],
                                userClass: "layer"
                            },
                            {
                                id: 'nuage_04_btn',
                                symbolName: 'nuage_04_btn',
                                type: 'rect',
                                rect: ['100%', '100%', '151', '53', 'auto', 'auto'],
                                userClass: "layer"
                            },
                            {
                                id: 'nuage_03_btn',
                                symbolName: 'nuage_03_btn',
                                type: 'rect',
                                rect: ['100%', '100%', '150', '28', 'auto', 'auto'],
                                userClass: "layer"
                            },
                            {
                                id: 'nuage_01_btn',
                                symbolName: 'nuage_01_btn',
                                type: 'rect',
                                rect: ['39.7%', '15.4%', '290', '82', 'auto', 'auto'],
                                userClass: "layer"
                            },
                            {
                                id: 'mountain_02_btn',
                                symbolName: 'mountain_02_btn',
                                type: 'rect',
                                rect: ['-230px', '0px', '1458', '274', 'auto', 'auto'],
                                userClass: "layer",
                                filter: [0, 0, 1, 1, 0, 0, 0, 0, "rgba(0,0,0,0)", 0, 0, 0]
                            },
                            {
                                id: 'mountain_01_btn',
                                symbolName: 'mountain_01_btn',
                                type: 'rect',
                                rect: ['-230px', '0px', '1458', '276', 'auto', 'auto'],
                                userClass: "layer"
                            },
                            {
                                id: 'bee_btn',
                                symbolName: 'bee_btn',
                                type: 'rect',
                                rect: ['100%', '100%', '189', '214', 'auto', 'auto'],
                                userClass: "layer",
                                transform: [[],[],[],['0.89264','0.89264']]
                            },
                            {
                                id: 'dev_btn',
                                symbolName: 'dev_btn',
                                type: 'rect',
                                rect: ['100%', '100%', '400', '370', 'auto', 'auto'],
                                userClass: "layer",
                                transform: [[],[],[],['0.89264','0.89264']]
                            },
                            {
                                id: 'herbe_btn',
                                symbolName: 'herbe_btn',
                                type: 'rect',
                                rect: ['100%', '100%', '699', '84', 'auto', 'auto'],
                                userClass: "layer",
                                filter: [0, 0, 1, 1, 0, 0, 0, 0, "rgba(0,0,0,0)", 0, 0, 0]
                            },
                            {
                                id: 'bt_back',
                                symbolName: 'bt_back',
                                type: 'rect',
                                rect: ['971', '463', '149', '36', 'auto', 'auto'],
                                cursor: 'pointer'
                            }]
                        }
                    ],
                    style: {
                        '${Stage}': {
                            isStage: true,
                            rect: ['null', 'null', '1140px', '519px', 'auto', 'auto'],
                            overflow: 'hidden',
                            fill: ["rgba(102,197,251,1.00)"]
                        }
                    }
                },
                timeline: {
                    duration: 52000,
                    autoPlay: true,
                    data: [
                        [
                            "eid184",
                            "top",
                            0,
                            0,
                            "linear",
                            "${nuage_05_btn}",
                            '10.44%',
                            '10.44%'
                        ],
                        [
                            "eid239",
                            "top",
                            0,
                            0,
                            "linear",
                            "${nuage_03_btn}",
                            '5.01%',
                            '5.01%'
                        ],
                        [
                            "eid286",
                            "left",
                            0,
                            0,
                            "linear",
                            "${dev_btn}",
                            '48.45%',
                            '48.45%'
                        ],
                        [
                            "eid153",
                            "left",
                            0,
                            0,
                            "linear",
                            "${nuage_03_btn}",
                            '10.1%',
                            '10.1%'
                        ],
                        [
                            "eid228",
                            "top",
                            0,
                            0,
                            "linear",
                            "${mountain_01_btn}",
                            '280px',
                            '280px'
                        ],
                        [
                            "eid144",
                            "top",
                            0,
                            0,
                            "linear",
                            "${nuage_01_btn}",
                            '15.41%',
                            '15.41%'
                        ],
                        [
                            "eid178",
                            "scaleX",
                            0,
                            0,
                            "linear",
                            "${nuage_02_btn}",
                            '1',
                            '1'
                        ],
                        [
                            "eid252",
                            "scaleX",
                            0,
                            0,
                            "linear",
                            "${dev_btn}",
                            '0.89264',
                            '0.89264'
                        ],
                        [
                            "eid248",
                            "scaleX",
                            0,
                            0,
                            "linear",
                            "${bee_btn}",
                            '0.89264',
                            '0.89264'
                        ],
                        [
                            "eid150",
                            "top",
                            0,
                            0,
                            "linear",
                            "${nuage_04_btn}",
                            '39.69%',
                            '39.69%'
                        ],
                        [
                            "eid285",
                            "top",
                            0,
                            0,
                            "linear",
                            "${dev_btn}",
                            '15.63%',
                            '15.63%'
                        ],
                        [
                            "eid143",
                            "left",
                            0,
                            0,
                            "linear",
                            "${nuage_01_btn}",
                            '39.67%',
                            '39.67%'
                        ],
                        [
                            "eid250",
                            "left",
                            0,
                            0,
                            "linear",
                            "${bee_btn}",
                            '35.47%',
                            '35.47%'
                        ],
                        [
                            "eid249",
                            "scaleY",
                            0,
                            0,
                            "linear",
                            "${bee_btn}",
                            '0.89264',
                            '0.89264'
                        ],
                        [
                            "eid222",
                            "left",
                            0,
                            0,
                            "linear",
                            "${mountain_01_btn}",
                            '-230px',
                            '-230px'
                        ],
                        [
                            "eid180",
                            "left",
                            0,
                            0,
                            "linear",
                            "${nuage_02_btn}",
                            '6.29%',
                            '6.29%'
                        ],
                        [
                            "eid237",
                            "top",
                            0,
                            0,
                            "linear",
                            "${herbe_btn}",
                            '92.1%',
                            '92.1%'
                        ],
                        [
                            "eid149",
                            "left",
                            0,
                            0,
                            "linear",
                            "${nuage_04_btn}",
                            '10.09%',
                            '10.09%'
                        ],
                        [
                            "eid188",
                            "left",
                            0,
                            0,
                            "linear",
                            "${herbe_btn}",
                            '5.96%',
                            '5.96%'
                        ],
                        [
                            "eid179",
                            "scaleY",
                            0,
                            0,
                            "linear",
                            "${nuage_02_btn}",
                            '1',
                            '1'
                        ],
                        [
                            "eid223",
                            "left",
                            0,
                            0,
                            "linear",
                            "${mountain_02_btn}",
                            '-230px',
                            '-230px'
                        ],
                        [
                            "eid251",
                            "top",
                            0,
                            0,
                            "linear",
                            "${bee_btn}",
                            '38.63%',
                            '38.63%'
                        ],
                        [
                            "eid182",
                            "top",
                            0,
                            0,
                            "linear",
                            "${nuage_02_btn}",
                            '13.1%',
                            '13.1%'
                        ],
                        [
                            "eid253",
                            "scaleY",
                            0,
                            0,
                            "linear",
                            "${dev_btn}",
                            '0.89264',
                            '0.89264'
                        ],
                        [
                            "eid183",
                            "left",
                            0,
                            0,
                            "linear",
                            "${nuage_05_btn}",
                            '69.3%',
                            '69.3%'
                        ]
                    ]
                }
            },
            "herbe_btn": {
                version: "5.0.1",
                minimumCompatibleVersion: "5.0.0",
                build: "5.0.1.386",
                scaleToFit: "none",
                centerStage: "none",
                resizeInstances: false,
                content: {
                    dom: [
                        {
                            rect: ['0px', '0px', '699px', '84px', 'auto', 'auto'],
                            id: 'grass2',
                            type: 'image',
                            fill: ['rgba(0,0,0,0)', im+'/grass.svg', '0px', '0px']
                        }
                    ],
                    style: {
                        '${symbolSelector}': {
                            rect: [null, null, '699px', '84px']
                        }
                    }
                },
                timeline: {
                    duration: 0,
                    autoPlay: true,
                    data: [

                    ]
                }
            },
            "dev_btn": {
                version: "5.0.1",
                minimumCompatibleVersion: "5.0.0",
                build: "5.0.1.386",
                scaleToFit: "none",
                centerStage: "none",
                resizeInstances: false,
                content: {
                    dom: [
                        {
                            id: 'panneau_anim',
                            symbolName: 'panneau_anim',
                            rect: ['149px', '14px', '246', '196', 'auto', 'auto'],
                            type: 'rect'
                        },
                        {
                            id: 'bras_anim',
                            symbolName: 'bras_anim',
                            rect: ['25px', '89px', '51', '110', 'auto', 'auto'],
                            type: 'rect'
                        },
                        {
                            id: 'body',
                            type: 'image',
                            rect: ['56px', '49px', '135px', '311px', 'auto', 'auto'],
                            fill: ['rgba(0,0,0,0)', im+'/body.svg', '0px', '0px']
                        },
                        {
                            id: 'oeil_gauche',
                            symbolName: 'oeil',
                            rect: ['71px', '105px', '37', '37', 'auto', 'auto'],
                            type: 'rect'
                        },
                        {
                            id: 'oeil_droit',
                            symbolName: 'oeil',
                            rect: ['132px', '108px', '37', '37', 'auto', 'auto'],
                            type: 'rect'
                        }
                    ],
                    style: {
                        '${symbolSelector}': {
                            isStage: 'true',
                            rect: [undefined, undefined, '400px', '370px']
                        }
                    }
                },
                timeline: {
                    duration: 52000,
                    autoPlay: true,
                    data: [
                        [
                            "eid292",
                            "top",
                            0,
                            0,
                            "linear",
                            "${oeil_droit}",
                            '108px',
                            '108px'
                        ],
                        [
                            "eid294",
                            "top",
                            0,
                            0,
                            "linear",
                            "${body}",
                            '49px',
                            '49px'
                        ],
                        [
                            "eid291",
                            "left",
                            0,
                            0,
                            "linear",
                            "${oeil_droit}",
                            '132px',
                            '132px'
                        ],
                        [
                            "eid293",
                            "left",
                            0,
                            0,
                            "linear",
                            "${body}",
                            '56px',
                            '56px'
                        ],
                        [
                            "eid289",
                            "left",
                            0,
                            0,
                            "linear",
                            "${oeil_gauche}",
                            '71px',
                            '71px'
                        ],
                        [
                            "eid296",
                            "top",
                            0,
                            0,
                            "linear",
                            "${bras_anim}",
                            '89px',
                            '89px'
                        ],
                        [
                            "eid290",
                            "top",
                            0,
                            0,
                            "linear",
                            "${oeil_gauche}",
                            '105px',
                            '105px'
                        ],
                        [
                            "eid295",
                            "left",
                            0,
                            0,
                            "linear",
                            "${bras_anim}",
                            '25px',
                            '25px'
                        ]
                    ]
                }
            },
            "bee_btn": {
                version: "5.0.1",
                minimumCompatibleVersion: "5.0.0",
                build: "5.0.1.386",
                scaleToFit: "none",
                centerStage: "none",
                resizeInstances: false,
                content: {
                    dom: [
                        {
                            rect: ['-3', '36', '100', '119', 'auto', 'auto'],
                            id: 'ailes_anim',
                            symbolName: 'ailes_anim',
                            type: 'rect'
                        },
                        {
                            transform: [[], [], [], ['-1']],
                            id: 'ailes_animCopy',
                            symbolName: 'ailes_anim',
                            rect: ['88px', '33px', '100', '119', 'auto', 'auto'],
                            type: 'rect'
                        },
                        {
                            rect: ['30px', '5px', '138px', '213px', 'auto', 'auto'],
                            id: 'body_bee',
                            type: 'image',
                            fill: ['rgba(0,0,0,0)', im+'/body_bee.svg', '0px', '0px']
                        },
                        {
                            rect: ['59px', '74px', null, null, 'auto', 'auto'],
                            id: 'oeil_droit',
                            symbolName: 'oeil',
                            type: 'rect'
                        },
                        {
                            rect: ['120px', '74px', null, null, 'auto', 'auto'],
                            id: 'oeil_gauche',
                            symbolName: 'oeil',
                            type: 'rect'
                        },
                        {
                            rect: ['52', '74', '12', '21', 'auto', 'auto'],
                            id: 'goutte_anim',
                            symbolName: 'goutte_anim',
                            type: 'rect'
                        },
                        {
                            rect: ['52', '134', '14', '41', 'auto', 'auto'],
                            id: 'patte_anim',
                            symbolName: 'patte_anim',
                            type: 'rect'
                        }
                    ],
                    style: {
                        '${symbolSelector}': {
                            rect: [null, null, '189px', '214px']
                        }
                    }
                },
                timeline: {
                    duration: 5819,
                    autoPlay: true,
                    data: [

                    ]
                }
            },
            "nuage_03_btn": {
                version: "5.0.1",
                minimumCompatibleVersion: "5.0.0",
                build: "5.0.1.386",
                scaleToFit: "none",
                centerStage: "none",
                resizeInstances: false,
                content: {
                    dom: [
                        {
                            type: 'image',
                            id: 'cloud_03',
                            rect: ['48px', '0', '58px', '21px', 'auto', 'auto'],
                            fill: ['rgba(0,0,0,0)', im+'/cloud_03.svg', '0px', '0px']
                        }
                    ],
                    style: {
                        '${symbolSelector}': {
                            rect: [null, null, '150px', '28px']
                        }
                    }
                },
                timeline: {
                    duration: 22000,
                    autoPlay: true,
                    data: [
                        [
                            "eid169",
                            "height",
                            0,
                            0,
                            "linear",
                            "${cloud_03}",
                            '21px',
                            '21px'
                        ],
                        [
                            "eid170",
                            "width",
                            0,
                            0,
                            "linear",
                            "${cloud_03}",
                            '58px',
                            '58px'
                        ],
                        [
                            "eid137",
                            "left",
                            0,
                            22000,
                            "linear",
                            "${cloud_03}",
                            '0px',
                            '48px'
                        ]
                    ]
                }
            },
            "nuage_02_btn": {
                version: "5.0.1",
                minimumCompatibleVersion: "5.0.0",
                build: "5.0.1.386",
                scaleToFit: "none",
                centerStage: "none",
                resizeInstances: false,
                content: {
                    dom: [
                        {
                            type: 'image',
                            id: 'cloud_02',
                            rect: ['108px', '0', '91px', '41px', 'auto', 'auto'],
                            fill: ['rgba(0,0,0,0)', im+'/cloud_02.svg', '0px', '0px']
                        }
                    ],
                    style: {
                        '${symbolSelector}': {
                            rect: [null, null, '200px', '41px']
                        }
                    }
                },
                timeline: {
                    duration: 22000,
                    autoPlay: true,
                    data: [
                        [
                            "eid133",
                            "left",
                            0,
                            22000,
                            "linear",
                            "${cloud_02}",
                            '0px',
                            '108px'
                        ]
                    ]
                }
            },
            "nuage_01_btn": {
                version: "5.0.1",
                minimumCompatibleVersion: "5.0.0",
                build: "5.0.1.386",
                scaleToFit: "none",
                centerStage: "none",
                resizeInstances: false,
                content: {
                    dom: [
                        {
                            type: 'image',
                            id: 'cloud_012',
                            rect: ['-120px', '7px', '197px', '73px', 'auto', 'auto'],
                            fill: ['rgba(0,0,0,0)', im+'/cloud_01.svg', '0px', '0px']
                        }
                    ],
                    style: {
                        '${symbolSelector}': {
                            rect: [null, null, '290px', '82px']
                        }
                    }
                },
                timeline: {
                    duration: 22000,
                    autoPlay: true,
                    data: [
                        [
                            "eid127",
                            "left",
                            0,
                            22000,
                            "linear",
                            "${cloud_012}",
                            '-120px',
                            '93px'
                        ]
                    ]
                }
            },
            "nuage_04_btn": {
                version: "5.0.1",
                minimumCompatibleVersion: "5.0.0",
                build: "5.0.1.386",
                scaleToFit: "none",
                centerStage: "none",
                resizeInstances: false,
                content: {
                    dom: [
                        {
                            rect: ['0px', '0', '151px', '53px', 'auto', 'auto'],
                            id: 'cloud_04',
                            type: 'image',
                            fill: ['rgba(0,0,0,0)', im+'/cloud_04.svg', '0px', '0px']
                        }
                    ],
                    style: {
                        '${symbolSelector}': {
                            rect: [null, null, '151px', '53px']
                        }
                    }
                },
                timeline: {
                    duration: 18000,
                    autoPlay: true,
                    data: [
                        [
                            "eid140",
                            "left",
                            0,
                            18000,
                            "linear",
                            "${cloud_04}",
                            '0px',
                            '70px'
                        ]
                    ]
                }
            },
            "nuage_05_btn": {
                version: "5.0.1",
                minimumCompatibleVersion: "5.0.0",
                build: "5.0.1.386",
                scaleToFit: "none",
                centerStage: "none",
                resizeInstances: false,
                content: {
                    dom: [
                        {
                            rect: ['0px', '0', '152px', '90px', 'auto', 'auto'],
                            id: 'cloud_06',
                            type: 'image',
                            fill: ['rgba(0,0,0,0)', im+'/cloud_06.svg', '0px', '0px']
                        }
                    ],
                    style: {
                        '${symbolSelector}': {
                            rect: [null, null, '200px', '90px']
                        }
                    }
                },
                timeline: {
                    duration: 23000,
                    autoPlay: true,
                    data: [
                        [
                            "eid187",
                            "left",
                            0,
                            23000,
                            "linear",
                            "${cloud_06}",
                            '0px',
                            '60px'
                        ]
                    ]
                }
            },
            "mountain_01_btn": {
                version: "5.0.1",
                minimumCompatibleVersion: "5.0.0",
                build: "5.0.1.386",
                scaleToFit: "none",
                centerStage: "none",
                resizeInstances: false,
                content: {
                    dom: [
                        {
                            rect: ['-208px', '250px', '1458px', '276px', 'auto', 'auto'],
                            id: 'mountain_01_btn',
                            type: 'image',
                            fill: ['rgba(0,0,0,0)', im+'/moutain_01.svg', '0px', '0px']
                        }
                    ],
                    style: {
                        '${symbolSelector}': {
                            rect: [null, null, '1458px', '276px']
                        }
                    }
                },
                timeline: {
                    duration: 0,
                    autoPlay: true,
                    data: [

                    ]
                }
            },
            "mountain_02_btn": {
                version: "5.0.1",
                minimumCompatibleVersion: "5.0.0",
                build: "5.0.1.386",
                scaleToFit: "none",
                centerStage: "none",
                resizeInstances: false,
                content: {
                    dom: [
                        {
                            rect: ['-120px', '250px', '1458px', '274px', 'auto', 'auto'],
                            id: 'mountain_01_btn',
                            type: 'image',
                            fill: ['rgba(0,0,0,0)', im+'/moutain_02.svg', '0px', '0px']
                        }
                    ],
                    style: {
                        '${symbolSelector}': {
                            rect: [null, null, '1458px', '274px']
                        }
                    }
                },
                timeline: {
                    duration: 0,
                    autoPlay: true,
                    data: [

                    ]
                }
            },
            "oeil": {
                version: "5.0.1",
                minimumCompatibleVersion: "5.0.0",
                build: "5.0.1.386",
                scaleToFit: "none",
                centerStage: "none",
                resizeInstances: false,
                content: {
                    dom: [
                        {
                            rect: ['0px', '0px', '37px', '37px', 'auto', 'auto'],
                            id: 'oeil_blanc',
                            type: 'image',
                            fill: ['rgba(0,0,0,0)', im+'/oeil_blanc.svg', '0px', '0px']
                        },
                        {
                            rect: ['13px', '23px', '11px', '11px', 'auto', 'auto'],
                            id: 'oeil_pupille',
                            type: 'image',
                            fill: ['rgba(0,0,0,0)', im+'/oeil_pupille.svg', '0px', '0px']
                        }
                    ],
                    style: {
                        '${symbolSelector}': {
                            rect: [null, null, '37px', '37px']
                        }
                    }
                },
                timeline: {
                    duration: 5819,
                    autoPlay: true,
                    data: [
                        [
                            "eid325",
                            "top",
                            4000,
                            590,
                            "easeInQuint",
                            "${oeil_pupille}",
                            '23px',
                            '13px'
                        ],
                        [
                            "eid327",
                            "top",
                            5430,
                            389,
                            "linear",
                            "${oeil_pupille}",
                            '13px',
                            '23px'
                        ],
                        [
                            "eid324",
                            "left",
                            4000,
                            590,
                            "easeInQuint",
                            "${oeil_pupille}",
                            '13px',
                            '25px'
                        ],
                        [
                            "eid323",
                            "left",
                            5430,
                            389,
                            "linear",
                            "${oeil_pupille}",
                            '25px',
                            '13px'
                        ]
                    ]
                }
            },
            "bras_anim_01": {
                version: "5.0.1",
                minimumCompatibleVersion: "5.0.0",
                build: "5.0.1.386",
                scaleToFit: "none",
                centerStage: "none",
                resizeInstances: false,
                content: {
                    dom: [
                        {
                            id: 'bras_anim',
                            symbolName: 'bras_anim',
                            type: 'rect',
                            rect: ['0', '93', '51', '110', 'auto', 'auto']
                        },
                        {
                            id: 'bras_02',
                            type: 'image',
                            rect: ['124px', '18px', '246px', '196px', 'auto', 'auto'],
                            fill: ['rgba(0,0,0,0)', im+'/bras_02.svg', '0px', '0px']
                        },
                        {
                            id: 'body',
                            type: 'image',
                            rect: ['31px', '53px', '135px', '311px', 'auto', 'auto'],
                            fill: ['rgba(0,0,0,0)', im+'/body.svg', '0px', '0px']
                        },
                        {
                            id: 'oeil_gauche',
                            symbolName: 'oeil',
                            type: 'rect',
                            rect: ['46', '109', '37', '37', 'auto', 'auto']
                        },
                        {
                            id: 'oeil_droit',
                            symbolName: 'oeil',
                            type: 'rect',
                            rect: ['107px', '112px', '37', '37', 'auto', 'auto']
                        }
                    ],
                    style: {
                        '${symbolSelector}': {
                            rect: [null, null, 'auto', 'auto']
                        }
                    }
                },
                timeline: {
                    duration: 52000,
                    autoPlay: true,
                    data: [
                        [
                            "eid267",
                            "top",
                            0,
                            0,
                            "linear",
                            "${oeil_droit}",
                            '112px',
                            '112px'
                        ],
                        [
                            "eid266",
                            "left",
                            0,
                            0,
                            "linear",
                            "${oeil_droit}",
                            '107px',
                            '107px'
                        ]
                    ]
                }
            },
            "bras_anim": {
                version: "5.0.1",
                minimumCompatibleVersion: "5.0.0",
                build: "5.0.1.386",
                scaleToFit: "none",
                centerStage: "none",
                resizeInstances: false,
                content: {
                    dom: [
                        {
                            type: 'image',
                            id: 'bras_01',
                            rect: ['0px', '0px', '51px', '110px', 'auto', 'auto'],
                            transform: [[], [], [], [], ['88.2352%', '92.424%']],
                            fill: ['rgba(0,0,0,0)', im+'/bras_01.svg', '0px', '0px']
                        }
                    ],
                    style: {
                        '${symbolSelector}': {
                            rect: [null, null, '51px', '110px']
                        }
                    }
                },
                timeline: {
                    duration: 52000,
                    autoPlay: true,
                    data: [
                        [
                            "eid305",
                            "rotateZ",
                            2000,
                            764,
                            "linear",
                            "${bras_01}",
                            '0deg',
                            '-19deg'
                        ],
                        [
                            "eid310",
                            "rotateZ",
                            2764,
                            736,
                            "linear",
                            "${bras_01}",
                            '-19deg',
                            '0deg'
                        ],
                        [
                            "eid311",
                            "rotateZ",
                            3500,
                            764,
                            "linear",
                            "${bras_01}",
                            '0deg',
                            '-19deg'
                        ],
                        [
                            "eid312",
                            "rotateZ",
                            4264,
                            736,
                            "linear",
                            "${bras_01}",
                            '-19deg',
                            '0deg'
                        ],
                        [
                            "eid278",
                            "rotateZ",
                            17886,
                            21114,
                            "linear",
                            "${bras_01}",
                            '0deg',
                            '-36deg'
                        ],
                        [
                            "eid279",
                            "rotateZ",
                            39000,
                            13000,
                            "linear",
                            "${bras_01}",
                            '-36deg',
                            '0deg'
                        ],
                        [
                            "eid275",
                            "originX",
                            39000,
                            0,
                            "linear",
                            "${bras_01}",
                            '88.2352%',
                            '88.2352%'
                        ],
                        [
                            "eid276",
                            "originY",
                            39000,
                            0,
                            "linear",
                            "${bras_01}",
                            '92.424%',
                            '92.424%'
                        ]
                    ]
                }
            },
            "panneau_anim": {
                version: "5.0.1",
                minimumCompatibleVersion: "5.0.0",
                build: "5.0.1.386",
                scaleToFit: "none",
                centerStage: "none",
                resizeInstances: false,
                content: {
                    dom: [
                        {
                            rect: ['0px', '0px', '246px', '196px', 'auto', 'auto'],
                            id: 'bras_02',
                            transform: [[], [], [], [], ['2.7101%', '91.4966%']],
                            type: 'image',
                            fill: ['rgba(0,0,0,0)', im+'/bras_02.svg', '0px', '0px']
                        },
                        {
                            type: 'rect',
                            id: 'numero',
                            symbolName: 'numero',
                            transform: [[], [], [], [], ['-39.1892%', '121.0937%']],
                            rect: ['66', '25', '148', '128', 'auto', 'auto']
                        }
                    ],
                    style: {
                        '${symbolSelector}': {
                            isStage: 'true',
                            rect: [undefined, undefined, '246px', '196px']
                        }
                    }
                },
                timeline: {
                    duration: 5000,
                    autoPlay: true,
                    data: [
                        [
                            "eid297",
                            "left",
                            0,
                            0,
                            "linear",
                            "${bras_02}",
                            '0px',
                            '0px'
                        ],
                        [
                            "eid313",
                            "rotateZ",
                            2000,
                            764,
                            "linear",
                            "${bras_02}",
                            '0deg',
                            '-19deg'
                        ],
                        [
                            "eid314",
                            "rotateZ",
                            2764,
                            736,
                            "linear",
                            "${bras_02}",
                            '-19deg',
                            '0deg'
                        ],
                        [
                            "eid315",
                            "rotateZ",
                            3500,
                            764,
                            "linear",
                            "${bras_02}",
                            '0deg',
                            '-19deg'
                        ],
                        [
                            "eid316",
                            "rotateZ",
                            4264,
                            736,
                            "linear",
                            "${bras_02}",
                            '-19deg',
                            '0deg'
                        ],
                        [
                            "eid298",
                            "top",
                            0,
                            0,
                            "linear",
                            "${bras_02}",
                            '0px',
                            '0px'
                        ],
                        [
                            "eid440",
                            "rotateZ",
                            2000,
                            764,
                            "linear",
                            "${numero}",
                            '0deg',
                            '-20deg'
                        ],
                        [
                            "eid441",
                            "rotateZ",
                            2764,
                            736,
                            "linear",
                            "${numero}",
                            '-20deg',
                            '0deg'
                        ],
                        [
                            "eid442",
                            "rotateZ",
                            3500,
                            764,
                            "linear",
                            "${numero}",
                            '0deg',
                            '-20deg'
                        ],
                        [
                            "eid443",
                            "rotateZ",
                            4264,
                            736,
                            "linear",
                            "${numero}",
                            '-20deg',
                            '0deg'
                        ]
                    ]
                }
            },
            "patte_anim": {
                version: "5.0.1",
                minimumCompatibleVersion: "5.0.0",
                build: "5.0.1.386",
                scaleToFit: "none",
                centerStage: "none",
                resizeInstances: false,
                content: {
                    dom: [
                        {
                            rect: ['0px', '0px', '14px', '41px', 'auto', 'auto'],
                            id: 'patte',
                            transform: [[], [], [], [], ['48.2142%', '16.4634%']],
                            type: 'image',
                            fill: ['rgba(0,0,0,0)', im+'/patte.svg', '0px', '0px']
                        }
                    ],
                    style: {
                        '${symbolSelector}': {
                            rect: [null, null, '14px', '41px']
                        }
                    }
                },
                timeline: {
                    duration: 4000,
                    autoPlay: true,
                    data: [
                        [
                            "eid332",
                            "rotateZ",
                            2500,
                            500,
                            "easeInCubic",
                            "${patte}",
                            '0deg',
                            '204deg'
                        ],
                        [
                            "eid335",
                            "rotateZ",
                            3500,
                            308,
                            "easeOutCubic",
                            "${patte}",
                            '204deg',
                            '0deg'
                        ]
                    ]
                }
            },
            "goutte_anim": {
                version: "5.0.1",
                minimumCompatibleVersion: "5.0.0",
                build: "5.0.1.386",
                scaleToFit: "none",
                centerStage: "none",
                resizeInstances: false,
                content: {
                    dom: [
                        {
                            type: 'image',
                            id: 'goutte',
                            opacity: '0',
                            rect: ['0px', '37px', '12px', '21px', 'auto', 'auto'],
                            fill: ['rgba(0,0,0,0)', im+'/goutte.svg', '0px', '0px']
                        }
                    ],
                    style: {
                        '${symbolSelector}': {
                            rect: [null, null, '12px', '21px']
                        }
                    }
                },
                timeline: {
                    duration: 4000,
                    autoPlay: true,
                    data: [
                        [
                            "eid343",
                            "opacity",
                            0,
                            0,
                            "easeOutCubic",
                            "${goutte}",
                            '0',
                            '0'
                        ],
                        [
                            "eid342",
                            "opacity",
                            1000,
                            0,
                            "easeOutCubic",
                            "${goutte}",
                            '0',
                            '1'
                        ],
                        [
                            "eid341",
                            "opacity",
                            2592,
                            908,
                            "easeOutCubic",
                            "${goutte}",
                            '1',
                            '0'
                        ],
                        [
                            "eid338",
                            "top",
                            1000,
                            1592,
                            "easeOutCubic",
                            "${goutte}",
                            '0px',
                            '37px'
                        ]
                    ]
                }
            },
            "ailes_anim": {
                version: "5.0.1",
                minimumCompatibleVersion: "5.0.0",
                build: "5.0.1.386",
                scaleToFit: "none",
                centerStage: "none",
                resizeInstances: false,
                content: {
                    dom: [
                        {
                            rect: ['13px', '64px', '87px', '55px', 'auto', 'auto'],
                            id: 'aile_02',
                            transform: [[], ['15'], [], [], ['96.2643%', '38.6363%']],
                            type: 'image',
                            fill: ['rgba(0,0,0,0)', im+'/aile_02.svg', '0px', '0px']
                        },
                        {
                            rect: ['0px', '0px', '98px', '98px', 'auto', 'auto'],
                            id: 'aile_01',
                            transform: [[], [], [], [], ['91.5816%', '90.3061%']],
                            type: 'image',
                            fill: ['rgba(0,0,0,0)', im+'/aile_01.svg', '0px', '0px']
                        }
                    ],
                    style: {
                        '${symbolSelector}': {
                            rect: [null, null, '100px', '119px']
                        }
                    }
                },
                timeline: {
                    duration: 1500,
                    autoPlay: true,
                    data: [
                        [
                            "eid355",
                            "rotateZ",
                            500,
                            127,
                            "easeInCubic",
                            "${aile_01}",
                            '0deg',
                            '-15deg'
                        ],
                        [
                            "eid358",
                            "rotateZ",
                            627,
                            123,
                            "easeInCubic",
                            "${aile_01}",
                            '-15deg',
                            '0deg'
                        ],
                        [
                            "eid391",
                            "rotateZ",
                            764,
                            116,
                            "easeInCubic",
                            "${aile_01}",
                            '0deg',
                            '-15deg'
                        ],
                        [
                            "eid392",
                            "rotateZ",
                            880,
                            120,
                            "easeInCubic",
                            "${aile_01}",
                            '-15deg',
                            '0deg'
                        ],
                        [
                            "eid395",
                            "rotateZ",
                            1013,
                            114,
                            "easeInCubic",
                            "${aile_01}",
                            '0deg',
                            '-15deg'
                        ],
                        [
                            "eid396",
                            "rotateZ",
                            1127,
                            123,
                            "easeInCubic",
                            "${aile_01}",
                            '-15deg',
                            '0deg'
                        ],
                        [
                            "eid397",
                            "rotateZ",
                            1260,
                            114,
                            "easeInCubic",
                            "${aile_01}",
                            '0deg',
                            '-15deg'
                        ],
                        [
                            "eid398",
                            "rotateZ",
                            1374,
                            126,
                            "easeInCubic",
                            "${aile_01}",
                            '-15deg',
                            '0deg'
                        ],
                        [
                            "eid386",
                            "rotateZ",
                            500,
                            127,
                            "easeInCubic",
                            "${aile_02}",
                            '0deg',
                            '15deg'
                        ],
                        [
                            "eid387",
                            "rotateZ",
                            627,
                            123,
                            "easeInCubic",
                            "${aile_02}",
                            '15deg',
                            '0deg'
                        ],
                        [
                            "eid393",
                            "rotateZ",
                            764,
                            116,
                            "easeInCubic",
                            "${aile_02}",
                            '0deg',
                            '15deg'
                        ],
                        [
                            "eid394",
                            "rotateZ",
                            880,
                            120,
                            "easeInCubic",
                            "${aile_02}",
                            '15deg',
                            '0deg'
                        ],
                        [
                            "eid399",
                            "rotateZ",
                            1013,
                            114,
                            "easeInCubic",
                            "${aile_02}",
                            '0deg',
                            '15deg'
                        ],
                        [
                            "eid400",
                            "rotateZ",
                            1127,
                            123,
                            "easeInCubic",
                            "${aile_02}",
                            '15deg',
                            '0deg'
                        ],
                        [
                            "eid401",
                            "rotateZ",
                            1260,
                            114,
                            "easeInCubic",
                            "${aile_02}",
                            '0deg',
                            '15deg'
                        ],
                        [
                            "eid402",
                            "rotateZ",
                            1374,
                            126,
                            "easeInCubic",
                            "${aile_02}",
                            '15deg',
                            '0deg'
                        ]
                    ]
                }
            },
            "numero": {
                version: "5.0.1",
                minimumCompatibleVersion: "5.0.0",
                build: "5.0.1.386",
                scaleToFit: "none",
                centerStage: "none",
                resizeInstances: false,
                content: {
                    dom: [
                        {
                            rect: ['20px', '27px', 'auto', 'auto', 'auto', 'auto'],
                            transform: [[], ['30']],
                            id: 'Text',
                            text: errorCode,
                            font: ['Verdana, Geneva, sans-serif', [60, 'px'], 'rgba(255,255,255,1.00)', '700', 'none', '', 'break-word', 'nowrap'],
                            type: 'text'
                        }
                    ],
                    style: {
                        '${symbolSelector}': {
                            isStage: 'true',
                            rect: [undefined, undefined, '148px', '128px']
                        }
                    }
                },
                timeline: {
                    duration: 0,
                    autoPlay: false,
                    data: [

                    ]
                }
            },
            "bt_back": {
                version: "5.0.1",
                minimumCompatibleVersion: "5.0.0",
                build: "5.0.1.386",
                scaleToFit: "none",
                centerStage: "none",
                resizeInstances: false,
                content: {
                    dom: [
                        {
                            id: 'bt',
                            type: 'image',
                            rect: ['0px', '0px', '149px', '36px', 'auto', 'auto'],
                            fill: ['rgba(0,0,0,0)', im+'/bt.svg', '0px', '0px']
                        },
                        {
                            rect: ['15px', '9px', 'auto', 'auto', 'auto', 'auto'],
                            font: ['Arial, Helvetica, sans-serif', [16, 'px'], 'rgba(255,255,255,1)', '400', 'none solid rgb(255, 255, 255)', 'normal', 'break-word', 'nowrap'],
                            id: 'Text2',
                            text: 'BACK TO HOME',
                            align: 'left',
                            type: 'text'
                        }
                    ],
                    style: {
                        '${symbolSelector}': {
                            isStage: 'true',
                            rect: [undefined, undefined, '149px', '36px']
                        }
                    }
                },
                timeline: {
                    duration: 0,
                    autoPlay: true,
                    data: [

                    ]
                }
            }
        };

    AdobeEdge.registerCompositionDefn(compId, symbols, fonts, scripts, resources, opts);

    if (!window.edge_authoring_mode) AdobeEdge.getComposition(compId).load("./resources/layouts/error/js/error_edgeActions.js");
})("EDGE-332018913");
