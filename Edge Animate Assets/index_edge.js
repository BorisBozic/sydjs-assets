/**
 * Adobe Edge: symbol definitions
 */
(function($, Edge, compId){
//images folder
var im='images/';

var fonts = {};
var opts = {
    'gAudioPreloadPreference': 'auto',

    'gVideoPreloadPreference': 'auto'
};
var resources = [
];
var symbols = {
"stage": {
    version: "4.0.0",
    minimumCompatibleVersion: "4.0.0",
    build: "4.0.0.359",
    baseState: "Base State",
    scaleToFit: "both",
    centerStage: "horizontal",
    initialState: "Base State",
    gpuAccelerate: false,
    resizeInstances: false,
    content: {
            dom: [
            {
                id: 'bg-dark',
                type: 'rect',
                rect: ['0px', '0px','641px','1136px','auto', 'auto'],
                fill: ["rgba(192,192,192,1)",[270,[['rgba(36,50,61,1.00)',0],['rgba(36,38,43,1.00)',100]]]],
                stroke: [0,"rgba(0,0,0,1)","none"]
            },
            {
                id: 'btn-rsvp-yes',
                type: 'rect',
                rect: ['0px', '1136px','auto','auto','auto', 'auto']
            },
            {
                id: 'text-dates',
                display: 'none',
                type: 'rect',
                rect: ['136', '477','auto','auto','auto', 'auto']
            },
            {
                id: 'sym-logo',
                type: 'rect',
                rect: ['206', '484','auto','auto','auto', 'auto']
            },
            {
                id: 'btn-talks',
                type: 'rect',
                rect: ['540', '86','auto','auto','auto', 'auto']
            },
            {
                id: 'btn-alarm',
                type: 'rect',
                rect: ['40', '80','auto','auto','auto', 'auto']
            },
            {
                id: '_view-about',
                type: 'rect',
                rect: ['0', '-1136','auto','auto','auto', 'auto']
            },
            {
                id: '_view-talks',
                type: 'rect',
                rect: ['527px', '0px','auto','auto','auto', 'auto']
            },
            {
                id: 'alert-notify',
                type: 'rect',
                rect: ['51', '418','auto','auto','auto', 'auto']
            },
            {
                id: '_cal-add',
                type: 'rect',
                rect: ['0px', '1136px','auto','auto','auto', 'auto']
            }],
            symbolInstances: [
            {
                id: 'btn-alarm',
                symbolName: 'btn-alarm',
                autoPlay: {

                }
            },
            {
                id: '_view-about',
                symbolName: 'view-about',
                autoPlay: {

                }
            },
            {
                id: 'sym-logo',
                symbolName: 'sym-logo',
                autoPlay: {

                }
            },
            {
                id: '_cal-add',
                symbolName: 'cal-add',
                autoPlay: {

                }
            },
            {
                id: 'alert-notify',
                symbolName: 'alert-notify',
                autoPlay: {

                }
            },
            {
                id: 'btn-talks',
                symbolName: 'btn-talks',
                autoPlay: {

                }
            },
            {
                id: '_view-talks',
                symbolName: 'view-talks',
                autoPlay: {

                }
            },
            {
                id: 'btn-rsvp-yes',
                symbolName: 'btn-rsvp',
                autoPlay: {

                }
            },
            {
                id: 'text-dates',
                symbolName: 'text-dates',
                autoPlay: {

                }
            }
            ]
        },
    states: {
        "Base State": {
            "${_btn-talks}": [
                ["transform", "rotateZ", '0deg'],
                ["style", "opacity", '0']
            ],
            "${__cal-add}": [
                ["style", "top", '1136px'],
                ["style", "left", '0px']
            ],
            "${_bg-dark}": [
                ["style", "top", '0px'],
                ["style", "height", '1136px'],
                ["gradient", "background-image", [270,[['rgba(36,50,61,1.00)',0],['rgba(36,38,43,1.00)',100]]]],
                ["style", "left", '0px'],
                ["style", "width", '641px']
            ],
            "${_text-dates}": [
                ["style", "display", 'none'],
                ["style", "opacity", '0'],
                ["style", "top", '507px']
            ],
            "${_Stage}": [
                ["color", "background-color", 'rgba(230,230,230,1.00)'],
                ["style", "width", '640px'],
                ["style", "height", '1136px'],
                ["style", "overflow", 'hidden']
            ],
            "${__view-talks}": [
                ["style", "top", '1136px'],
                ["style", "left", '0px']
            ],
            "${_btn-rsvp-yes}": [
                ["style", "top", '1136px']
            ],
            "${_btn-alarm}": [
                ["style", "opacity", '0']
            ]
        }
    },
    timelines: {
        "Default Timeline": {
            fromState: "Base State",
            toState: "",
            duration: 1000,
            autoPlay: true,
            timeline: [
                { id: "eid291", tween: [ "transform", "${_btn-talks}", "rotateZ", '0deg', { fromValue: '0deg'}], position: 800, duration: 0, easing: "easeInQuad" },
                { id: "eid292", tween: [ "transform", "${_btn-talks}", "rotateZ", '0deg', { fromValue: '0deg'}], position: 1000, duration: 0, easing: "easeInQuad" },
                { id: "eid320", tween: [ "style", "${_text-dates}", "top", '557px', { fromValue: '507px'}], position: 600, duration: 200, easing: "easeInQuad" },
                { id: "eid315", tween: [ "style", "${_text-dates}", "display", 'none', { fromValue: 'none'}], position: 0, duration: 0, easing: "easeInQuad" },
                { id: "eid316", tween: [ "style", "${_text-dates}", "display", 'block', { fromValue: 'none'}], position: 600, duration: 0, easing: "easeInQuad" },
                { id: "eid276", tween: [ "style", "${_btn-talks}", "opacity", '1', { fromValue: '0'}], position: 800, duration: 200, easing: "easeInQuad" },
                { id: "eid267", tween: [ "style", "${_btn-rsvp-yes}", "top", '996px', { fromValue: '1136px'}], position: 600, duration: 200, easing: "easeOutQuad" },
                { id: "eid354", tween: [ "style", "${_btn-alarm}", "opacity", '1', { fromValue: '0'}], position: 800, duration: 200, easing: "easeInQuad" },
                { id: "eid318", tween: [ "style", "${_text-dates}", "opacity", '1', { fromValue: '0'}], position: 600, duration: 200, easing: "easeInQuad" }            ]
        }
    }
},
"btn-addToCal": {
    version: "4.0.0",
    minimumCompatibleVersion: "4.0.0",
    build: "4.0.0.359",
    baseState: "Base State",
    scaleToFit: "none",
    centerStage: "none",
    initialState: "Base State",
    gpuAccelerate: false,
    resizeInstances: false,
    content: {
            dom: [
                {
                    rect: ['0px', '0px', '394px', '92px', 'auto', 'auto'],
                    borderRadius: ['48px 48px', '48px 48px', '48px 48px', '48px 48px'],
                    id: 'RoundRect',
                    stroke: [2, 'rgba(96,216,255,1.00)', 'solid'],
                    type: 'rect',
                    fill: ['rgba(96,216,255,0.00)']
                },
                {
                    font: ['Arial, Helvetica, sans-serif', 33, 'rgba(96,216,255,1.00)', '100', 'none', ''],
                    type: 'text',
                    align: 'center',
                    id: 'TextCopy3',
                    opacity: 1,
                    text: 'Add to calendar',
                    rect: ['29.2%', '29.2%', 'auto', 'auto', 'auto', 'auto']
                },
                {
                    id: 'icon-cal',
                    type: 'image',
                    rect: ['40px', '23px', '47px', '47px', 'auto', 'auto'],
                    fill: ['rgba(0,0,0,0)', 'images/icon-cal.svg', '0px', '0px']
                }
            ],
            symbolInstances: [
            ]
        },
    states: {
        "Base State": {
            "${_icon-cal}": [
                ["style", "height", '47px'],
                ["style", "top", '23px'],
                ["style", "left", '40px'],
                ["style", "width", '47px']
            ],
            "${_TextCopy3}": [
                ["style", "top", '29.21%'],
                ["style", "text-align", 'center'],
                ["style", "font-weight", '100'],
                ["color", "color", 'rgba(96,216,255,1.00)'],
                ["style", "opacity", '1'],
                ["style", "left", '29.15%'],
                ["style", "font-size", '33px']
            ],
            "${_RoundRect}": [
                ["color", "background-color", 'rgba(96,216,255,0.00)'],
                ["style", "border-top-left-radius", [48,48], {valueTemplate:'@@0@@px @@1@@px'} ],
                ["style", "border-bottom-right-radius", [48,48], {valueTemplate:'@@0@@px @@1@@px'} ],
                ["style", "border-style", 'solid'],
                ["style", "border-width", '2px'],
                ["style", "top", '0px'],
                ["style", "border-bottom-left-radius", [48,48], {valueTemplate:'@@0@@px @@1@@px'} ],
                ["color", "border-color", 'rgba(96,216,255,1.00)'],
                ["style", "border-top-right-radius", [48,48], {valueTemplate:'@@0@@px @@1@@px'} ],
                ["style", "left", '0px']
            ],
            "${symbolSelector}": [
                ["style", "height", '96px'],
                ["style", "width", '398px']
            ]
        }
    },
    timelines: {
        "Default Timeline": {
            fromState: "Base State",
            toState: "",
            duration: 0,
            autoPlay: false,
            timeline: [
            ]
        }
    }
},
"btn-rsvp": {
    version: "4.0.0",
    minimumCompatibleVersion: "4.0.0",
    build: "4.0.0.359",
    baseState: "Base State",
    scaleToFit: "none",
    centerStage: "none",
    initialState: "Base State",
    gpuAccelerate: false,
    resizeInstances: false,
    content: {
            dom: [
                {
                    rect: ['0px', '0px', '319px', '140px', 'auto', 'auto'],
                    id: 'yes',
                    stroke: [0, 'rgba(0,0,0,1)', 'none'],
                    type: 'rect',
                    fill: ['rgba(96,216,255,1.00)']
                },
                {
                    rect: ['0px', '52px', '319px', '34px', 'auto', 'auto'],
                    font: ['Arial, Helvetica, sans-serif', 34, 'rgba(0,0,0,1)', 'normal', 'none', ''],
                    id: 'label-attending',
                    text: 'Attending',
                    align: 'center',
                    type: 'text'
                },
                {
                    rect: ['321px', '0px', '320px', '140px', 'auto', 'auto'],
                    id: 'no',
                    stroke: [0, 'rgba(0,0,0,1)', 'none'],
                    type: 'rect',
                    fill: ['rgba(96,216,255,1.00)']
                },
                {
                    rect: ['0px', '52px', '319px', '34px', 'auto', 'auto'],
                    font: ['Arial, Helvetica, sans-serif', 34, 'rgba(0,0,0,1)', 'normal', 'none', ''],
                    id: 'label-not-attending',
                    text: 'Not Attending',
                    align: 'center',
                    type: 'text'
                },
                {
                    id: 'icon-close-yes',
                    type: 'image',
                    rect: ['551px', '50px', '39px', '39px', 'auto', 'auto'],
                    fill: ['rgba(0,0,0,0)', 'images/icon-close.svg', '0px', '0px']
                },
                {
                    id: 'icon-close-no',
                    type: 'image',
                    rect: ['49px', '50px', '39px', '39px', 'auto', 'auto'],
                    fill: ['rgba(0,0,0,0)', 'images/icon-close.svg', '0px', '0px']
                },
                {
                    display: 'none',
                    type: 'rect',
                    rect: ['372', '-183', 'auto', 'auto', 'auto', 'auto'],
                    id: 'btn-addToCal'
                }
            ],
            symbolInstances: [
            {
                id: 'btn-addToCal',
                symbolName: 'btn-addToCal',
                autoPlay: {

               }
            }            ]
        },
    states: {
        "Base State": {
            "${_label-not-attending}": [
                ["style", "top", '52px'],
                ["style", "text-align", 'center'],
                ["style", "width", '320px'],
                ["style", "height", '34px'],
                ["style", "opacity", '1'],
                ["style", "left", '322px'],
                ["style", "font-size", '34px']
            ],
            "${_yes}": [
                ["style", "top", '0px'],
                ["style", "-webkit-transform-origin", [0,100], {valueTemplate:'@@0@@% @@1@@%'} ],
                ["style", "-moz-transform-origin", [0,100],{valueTemplate:'@@0@@% @@1@@%'}],
                ["style", "-ms-transform-origin", [0,100],{valueTemplate:'@@0@@% @@1@@%'}],
                ["style", "msTransformOrigin", [0,100],{valueTemplate:'@@0@@% @@1@@%'}],
                ["style", "-o-transform-origin", [0,100],{valueTemplate:'@@0@@% @@1@@%'}],
                ["style", "height", '140px'],
                ["color", "background-color", 'rgba(96,216,255,1)'],
                ["style", "left", '0px'],
                ["style", "width", '319px']
            ],
            "${_label-attending}": [
                ["style", "top", '52px'],
                ["style", "text-align", 'center'],
                ["style", "font-size", '34px'],
                ["style", "height", '34px'],
                ["style", "opacity", '1'],
                ["style", "left", '0px'],
                ["style", "width", '319px']
            ],
            "${_no}": [
                ["style", "top", '0px'],
                ["color", "background-color", 'rgba(96,216,255,1)'],
                ["style", "height", '140px'],
                ["style", "-webkit-transform-origin", [50,50], {valueTemplate:'@@0@@% @@1@@%'} ],
                ["style", "-moz-transform-origin", [50,50],{valueTemplate:'@@0@@% @@1@@%'}],
                ["style", "-ms-transform-origin", [50,50],{valueTemplate:'@@0@@% @@1@@%'}],
                ["style", "msTransformOrigin", [50,50],{valueTemplate:'@@0@@% @@1@@%'}],
                ["style", "-o-transform-origin", [50,50],{valueTemplate:'@@0@@% @@1@@%'}],
                ["style", "left", '321px'],
                ["style", "width", '320px']
            ],
            "${symbolSelector}": [
                ["style", "height", '140px'],
                ["style", "width", '640px']
            ],
            "${_btn-addToCal}": [
                ["style", "top", '-223px'],
                ["style", "opacity", '0'],
                ["style", "left", '121px'],
                ["style", "display", 'none']
            ],
            "${_icon-close-no}": [
                ["style", "top", '50px'],
                ["style", "height", '39px'],
                ["transform", "scaleY", '0.5'],
                ["transform", "rotateZ", '45deg'],
                ["transform", "scaleX", '0.5'],
                ["style", "opacity", '0'],
                ["style", "left", '49px'],
                ["style", "width", '39px']
            ],
            "${_icon-close-yes}": [
                ["style", "top", '50px'],
                ["transform", "scaleX", '0.5'],
                ["transform", "scaleY", '0.5'],
                ["transform", "rotateZ", '45deg'],
                ["style", "height", '39px'],
                ["style", "opacity", '0'],
                ["style", "left", '551px'],
                ["style", "width", '39px']
            ]
        }
    },
    timelines: {
        "Default Timeline": {
            fromState: "Base State",
            toState: "",
            duration: 800,
            autoPlay: false,
            timeline: [
                { id: "eid263", tween: [ "style", "${_label-not-attending}", "width", '500px', { fromValue: '320px'}], position: 400, duration: 200, easing: "easeOutQuad" },
                { id: "eid266", tween: [ "style", "${_label-not-attending}", "width", '320px', { fromValue: '500px'}], position: 600, duration: 200, easing: "easeOutQuad" },
                { id: "eid140", tween: [ "color", "${_yes}", "background-color", 'rgba(114,240,132,1.00)', { animationColorSpace: 'RGB', valueTemplate: undefined, fromValue: 'rgba(96,216,255,1)'}], position: 0, duration: 200, easing: "easeOutQuad" },
                { id: "eid179", tween: [ "color", "${_yes}", "background-color", 'rgba(96,216,255,1.00)', { animationColorSpace: 'RGB', valueTemplate: undefined, fromValue: 'rgba(114,240,132,1)'}], position: 200, duration: 200, easing: "easeOutQuad" },
                { id: "eid187", tween: [ "color", "${_yes}", "background-color", 'rgba(241,119,99,1.00)', { animationColorSpace: 'RGB', valueTemplate: undefined, fromValue: 'rgba(96,216,255,1)'}], position: 400, duration: 198, easing: "easeOutQuad" },
                { id: "eid199", tween: [ "color", "${_yes}", "background-color", 'rgba(96,216,255,1.00)', { animationColorSpace: 'RGB', valueTemplate: undefined, fromValue: 'rgba(241,119,99,1)'}], position: 598, duration: 202, easing: "easeOutQuad" },
                { id: "eid295", tween: [ "style", "${_btn-addToCal}", "left", '121px', { fromValue: '121px'}], position: 200, duration: 0, easing: "easeOutQuad" },
                { id: "eid254", tween: [ "style", "${_label-attending}", "left", '-30px', { fromValue: '0px'}], position: 400, duration: 100, easing: "easeOutQuad" },
                { id: "eid255", tween: [ "style", "${_label-attending}", "left", '0px', { fromValue: '-30px'}], position: 700, duration: 100, easing: "easeOutQuad" },
                { id: "eid207", tween: [ "style", "${_icon-close-yes}", "opacity", '1', { fromValue: '0'}], position: 100, duration: 100, easing: "easeOutQuad" },
                { id: "eid214", tween: [ "style", "${_icon-close-yes}", "opacity", '0', { fromValue: '1'}], position: 200, duration: 100, easing: "easeOutQuad" },
                { id: "eid166", tween: [ "style", "${_no}", "left", '502px', { fromValue: '321px'}], position: 0, duration: 200, easing: "easeOutQuad" },
                { id: "eid174", tween: [ "style", "${_no}", "left", '320px', { fromValue: '502px'}], position: 200, duration: 200, easing: "easeOutQuad" },
                { id: "eid186", tween: [ "style", "${_no}", "left", '140px', { fromValue: '321px'}], position: 400, duration: 198, easing: "easeOutQuad" },
                { id: "eid203", tween: [ "style", "${_no}", "left", '321px', { fromValue: '140px'}], position: 598, duration: 202, easing: "easeOutQuad" },
                { id: "eid211", tween: [ "transform", "${_icon-close-yes}", "scaleY", '1', { fromValue: '0.5'}], position: 100, duration: 100, easing: "easeOutQuad" },
                { id: "eid245", tween: [ "style", "${_label-attending}", "font-size", '34px', { fromValue: '34px'}], position: 0, duration: 0, easing: "easeOutQuad" },
                { id: "eid236", tween: [ "style", "${_label-attending}", "opacity", '1', { fromValue: '1'}], position: 0, duration: 0, easing: "easeOutQuad" },
                { id: "eid235", tween: [ "style", "${_label-attending}", "opacity", '0', { fromValue: '1'}], position: 400, duration: 100, easing: "easeOutQuad" },
                { id: "eid248", tween: [ "style", "${_label-attending}", "opacity", '1', { fromValue: '0'}], position: 700, duration: 100, easing: "easeOutQuad" },
                { id: "eid246", tween: [ "style", "${_label-not-attending}", "font-size", '34px', { fromValue: '34px'}], position: 0, duration: 0, easing: "easeOutQuad" },
                { id: "eid213", tween: [ "transform", "${_icon-close-yes}", "rotateZ", '0deg', { fromValue: '45deg'}], position: 100, duration: 100, easing: "easeOutQuad" },
                { id: "eid215", tween: [ "transform", "${_icon-close-yes}", "rotateZ", '-45deg', { fromValue: '0deg'}], position: 200, duration: 100, easing: "easeOutQuad" },
                { id: "eid256", tween: [ "style", "${_label-not-attending}", "left", '352px', { fromValue: '322px'}], position: 0, duration: 100, easing: "easeOutQuad" },
                { id: "eid258", tween: [ "style", "${_label-not-attending}", "left", '320px', { fromValue: '352px'}], position: 300, duration: 100, easing: "easeInQuad" },
                { id: "eid262", tween: [ "style", "${_label-not-attending}", "left", '140px', { fromValue: '320px'}], position: 400, duration: 200, easing: "easeOutQuad" },
                { id: "eid265", tween: [ "style", "${_label-not-attending}", "left", '321px', { fromValue: '140px'}], position: 600, duration: 200, easing: "easeOutQuad" },
                { id: "eid226", tween: [ "transform", "${_icon-close-no}", "rotateZ", '0deg', { fromValue: '45deg'}], position: 500, duration: 100, easing: "easeOutQuad" },
                { id: "eid227", tween: [ "transform", "${_icon-close-no}", "rotateZ", '-45deg', { fromValue: '0deg'}], position: 600, duration: 100, easing: "easeOutQuad" },
                { id: "eid303", tween: [ "style", "${_btn-addToCal}", "opacity", '1', { fromValue: '0'}], position: 100, duration: 100, easing: "easeOutQuad" },
                { id: "eid301", tween: [ "style", "${_btn-addToCal}", "opacity", '0', { fromValue: '1'}], position: 200, duration: 100, easing: "easeOutQuad" },
                { id: "eid225", tween: [ "transform", "${_icon-close-no}", "scaleY", '1', { fromValue: '0.5'}], position: 500, duration: 100, easing: "easeOutQuad" },
                { id: "eid343", tween: [ "style", "${_btn-addToCal}", "display", 'none', { fromValue: 'none'}], position: 0, duration: 0, easing: "easeOutQuad" },
                { id: "eid341", tween: [ "style", "${_btn-addToCal}", "display", 'block', { fromValue: 'none'}], position: 100, duration: 0, easing: "easeOutQuad" },
                { id: "eid342", tween: [ "style", "${_btn-addToCal}", "display", 'none', { fromValue: 'block'}], position: 300, duration: 0, easing: "easeOutQuad" },
                { id: "eid257", tween: [ "style", "${_label-not-attending}", "opacity", '0', { fromValue: '1'}], position: 0, duration: 100, easing: "easeOutQuad" },
                { id: "eid259", tween: [ "style", "${_label-not-attending}", "opacity", '1', { fromValue: '0'}], position: 300, duration: 100, easing: "easeInQuad" },
                { id: "eid209", tween: [ "transform", "${_icon-close-yes}", "scaleX", '1', { fromValue: '0.5'}], position: 100, duration: 100, easing: "easeOutQuad" },
                { id: "eid138", tween: [ "style", "${_yes}", "width", '500px', { fromValue: '319px'}], position: 0, duration: 200, easing: "easeOutQuad" },
                { id: "eid177", tween: [ "style", "${_yes}", "width", '319px', { fromValue: '500px'}], position: 200, duration: 200, easing: "easeOutQuad" },
                { id: "eid184", tween: [ "style", "${_yes}", "width", '138px', { fromValue: '319px'}], position: 400, duration: 198, easing: "easeOutQuad" },
                { id: "eid200", tween: [ "style", "${_yes}", "width", '319px', { fromValue: '138px'}], position: 598, duration: 202, easing: "easeOutQuad" },
                { id: "eid167", tween: [ "color", "${_no}", "background-color", 'rgba(114,240,132,1.00)', { animationColorSpace: 'RGB', valueTemplate: undefined, fromValue: 'rgba(96,216,255,1)'}], position: 0, duration: 200, easing: "easeOutQuad" },
                { id: "eid176", tween: [ "color", "${_no}", "background-color", 'rgba(96,216,255,1.00)', { animationColorSpace: 'RGB', valueTemplate: undefined, fromValue: 'rgba(114,240,132,1)'}], position: 200, duration: 200, easing: "easeOutQuad" },
                { id: "eid188", tween: [ "color", "${_no}", "background-color", 'rgba(241,119,99,1.00)', { animationColorSpace: 'RGB', valueTemplate: undefined, fromValue: 'rgba(96,216,255,1)'}], position: 400, duration: 198, easing: "easeOutQuad" },
                { id: "eid201", tween: [ "color", "${_no}", "background-color", 'rgba(96,216,255,1.00)', { animationColorSpace: 'RGB', valueTemplate: undefined, fromValue: 'rgba(241,119,99,1)'}], position: 598, duration: 202, easing: "easeOutQuad" },
                { id: "eid228", tween: [ "style", "${_label-attending}", "width", '500px', { fromValue: '319px'}], position: 0, duration: 200, easing: "easeOutQuad" },
                { id: "eid229", tween: [ "style", "${_label-attending}", "width", '319px', { fromValue: '500px'}], position: 200, duration: 200, easing: "easeOutQuad" },
                { id: "eid223", tween: [ "style", "${_icon-close-no}", "opacity", '1', { fromValue: '0'}], position: 500, duration: 100, easing: "easeOutQuad" },
                { id: "eid224", tween: [ "style", "${_icon-close-no}", "opacity", '0', { fromValue: '1'}], position: 600, duration: 100, easing: "easeOutQuad" },
                { id: "eid165", tween: [ "style", "${_no}", "width", '138px', { fromValue: '320px'}], position: 0, duration: 200, easing: "easeOutQuad" },
                { id: "eid175", tween: [ "style", "${_no}", "width", '320px', { fromValue: '138px'}], position: 200, duration: 200, easing: "easeOutQuad" },
                { id: "eid185", tween: [ "style", "${_no}", "width", '500px', { fromValue: '320px'}], position: 400, duration: 198, easing: "easeOutQuad" },
                { id: "eid202", tween: [ "style", "${_no}", "width", '320px', { fromValue: '500px'}], position: 598, duration: 202, easing: "easeOutQuad" },
                { id: "eid222", tween: [ "transform", "${_icon-close-no}", "scaleX", '1', { fromValue: '0.5'}], position: 500, duration: 100, easing: "easeOutQuad" }            ]
        }
    }
},
"btn-rsvp-no": {
    version: "4.0.0",
    minimumCompatibleVersion: "4.0.0",
    build: "4.0.0.359",
    baseState: "Base State",
    scaleToFit: "none",
    centerStage: "none",
    initialState: "Base State",
    gpuAccelerate: false,
    resizeInstances: false,
    content: {
            dom: [
                {
                    rect: ['-180px', '0px', '320px', '140px', 'auto', 'auto'],
                    id: 'rec-large',
                    stroke: [0, 'rgba(0,0,0,1)', 'none'],
                    type: 'rect',
                    fill: ['rgba(96,216,255,1.00)']
                },
                {
                    rect: ['-458px', '0px', '138px', '140px', 'auto', 'auto'],
                    id: 'rec-sml',
                    stroke: [0, 'rgba(0,0,0,1)', 'none'],
                    type: 'rect',
                    fill: ['rgba(96,216,255,1.00)']
                }
            ],
            symbolInstances: [
            ]
        },
    states: {
        "Base State": {
            "${_rec-sml}": [
                ["style", "top", '0px'],
                ["color", "background-color", 'rgba(96,216,255,1.00)'],
                ["style", "height", '140px'],
                ["style", "-webkit-transform-origin", [0,0], {valueTemplate:'@@0@@% @@1@@%'} ],
                ["style", "-moz-transform-origin", [0,0],{valueTemplate:'@@0@@% @@1@@%'}],
                ["style", "-ms-transform-origin", [0,0],{valueTemplate:'@@0@@% @@1@@%'}],
                ["style", "msTransformOrigin", [0,0],{valueTemplate:'@@0@@% @@1@@%'}],
                ["style", "-o-transform-origin", [0,0],{valueTemplate:'@@0@@% @@1@@%'}],
                ["style", "left", '-458px'],
                ["style", "width", '138px']
            ],
            "${_rec-large}": [
                ["style", "top", '0px'],
                ["style", "-webkit-transform-origin", [100,100], {valueTemplate:'@@0@@% @@1@@%'} ],
                ["style", "-moz-transform-origin", [100,100],{valueTemplate:'@@0@@% @@1@@%'}],
                ["style", "-ms-transform-origin", [100,100],{valueTemplate:'@@0@@% @@1@@%'}],
                ["style", "msTransformOrigin", [100,100],{valueTemplate:'@@0@@% @@1@@%'}],
                ["style", "-o-transform-origin", [100,100],{valueTemplate:'@@0@@% @@1@@%'}],
                ["color", "background-color", 'rgba(96,216,255,1.00)'],
                ["style", "bottom", 'auto'],
                ["style", "height", '140px'],
                ["style", "right", 'auto'],
                ["style", "left", '0px'],
                ["style", "width", '320px']
            ],
            "${symbolSelector}": [
                ["style", "height", '140px'],
                ["style", "width", '320px']
            ]
        }
    },
    timelines: {
        "Default Timeline": {
            fromState: "Base State",
            toState: "",
            duration: 300,
            autoPlay: false,
            timeline: [
                { id: "eid163", tween: [ "color", "${_rec-large}", "background-color", 'rgba(241,119,99,1.00)', { animationColorSpace: 'RGB', valueTemplate: undefined, fromValue: 'rgba(96,216,255,1.00)'}], position: 0, duration: 300, easing: "easeOutQuad" },
                { id: "eid164", tween: [ "color", "${_rec-sml}", "background-color", 'rgba(241,119,99,1.00)', { animationColorSpace: 'RGB', valueTemplate: undefined, fromValue: 'rgba(96,216,255,1.00)'}], position: 0, duration: 300, easing: "easeOutQuad" },
                { id: "eid160", tween: [ "style", "${_rec-sml}", "left", '-320px', { fromValue: '-458px'}], position: 0, duration: 300, easing: "easeOutQuad" },
                { id: "eid156", tween: [ "style", "${_rec-large}", "width", '500px', { fromValue: '320px'}], position: 0, duration: 300, easing: "easeOutQuad" },
                { id: "eid158", tween: [ "style", "${_rec-large}", "left", '-180px', { fromValue: '0px'}], position: 0, duration: 300, easing: "easeOutQuad" }            ]
        }
    }
},
"view-about": {
    version: "4.0.0",
    minimumCompatibleVersion: "4.0.0",
    build: "4.0.0.359",
    baseState: "Base State",
    scaleToFit: "none",
    centerStage: "none",
    initialState: "Base State",
    gpuAccelerate: false,
    resizeInstances: false,
    content: {
            dom: [
                {
                    id: 'view-about',
                    type: 'image',
                    rect: ['0px', '0px', '640px', '1136px', 'auto', 'auto'],
                    fill: ['rgba(0,0,0,0)', 'images/view-about.jpg', '0px', '0px']
                }
            ],
            symbolInstances: [
            ]
        },
    states: {
        "Base State": {
            "${_view-about}": [
                ["style", "left", '0px'],
                ["style", "top", '0px']
            ],
            "${symbolSelector}": [
                ["style", "height", '1136px'],
                ["style", "width", '640px']
            ]
        }
    },
    timelines: {
        "Default Timeline": {
            fromState: "Base State",
            toState: "",
            duration: 200,
            autoPlay: false,
            timeline: [
                { id: "eid102", tween: [ "style", "${_view-about}", "top", '1136px', { fromValue: '0px'}], position: 0, duration: 200, easing: "easeOutQuad" }            ]
        }
    }
},
"view-talks": {
    version: "4.0.0",
    minimumCompatibleVersion: "4.0.0",
    build: "4.0.0.359",
    baseState: "Base State",
    scaleToFit: "none",
    centerStage: "none",
    initialState: "Base State",
    gpuAccelerate: false,
    resizeInstances: false,
    content: {
            dom: [
                {
                    id: 'view-talks',
                    type: 'image',
                    rect: ['0px', '0px', '640px', '1136px', 'auto', 'auto'],
                    fill: ['rgba(0,0,0,0)', 'images/view-talks.jpg', '0px', '0px']
                }
            ],
            symbolInstances: [
            ]
        },
    states: {
        "Base State": {
            "${symbolSelector}": [
                ["style", "height", '1136px'],
                ["style", "width", '640px']
            ],
            "${_view-talks}": [
                ["style", "left", '0px'],
                ["style", "top", '0px']
            ]
        }
    },
    timelines: {
        "Default Timeline": {
            fromState: "Base State",
            toState: "",
            duration: 200,
            autoPlay: false,
            timeline: [
                { id: "eid103", tween: [ "style", "${_view-talks}", "top", '-1136px', { fromValue: '0px'}], position: 0, duration: 200, easing: "easeOutQuad" }            ]
        }
    }
},
"btn-talks": {
    version: "4.0.0",
    minimumCompatibleVersion: "4.0.0",
    build: "4.0.0.359",
    baseState: "Base State",
    scaleToFit: "none",
    centerStage: "none",
    initialState: "Base State",
    gpuAccelerate: false,
    resizeInstances: false,
    content: {
            dom: [
                {
                    id: 'icon-talks',
                    type: 'image',
                    rect: ['0px', '0px', '60px', '46px', 'auto', 'auto'],
                    fill: ['rgba(0,0,0,0)', 'images/icon-talks.svg', '0px', '0px']
                }
            ],
            symbolInstances: [
            ]
        },
    states: {
        "Base State": {
            "${_icon-talks}": [
                ["style", "height", '46px'],
                ["style", "top", '0px'],
                ["style", "left", '0px'],
                ["style", "width", '60px']
            ],
            "${symbolSelector}": [
                ["style", "height", '46px'],
                ["style", "width", '60px']
            ]
        }
    },
    timelines: {
        "Default Timeline": {
            fromState: "Base State",
            toState: "",
            duration: 0,
            autoPlay: true,
            timeline: [
            ]
        }
    }
},
"alert-notify": {
    version: "4.0.0",
    minimumCompatibleVersion: "4.0.0",
    build: "4.0.0.359",
    baseState: "Base State",
    scaleToFit: "none",
    centerStage: "none",
    initialState: "Base State",
    gpuAccelerate: false,
    resizeInstances: false,
    content: {
            dom: [
                {
                    transform: [[0, 0], [], [], ['0.5', '0.5']],
                    id: 'alert-notify',
                    type: 'image',
                    rect: ['-270px', '-150px', '1080px', '600px', 'auto', 'auto'],
                    fill: ['rgba(0,0,0,0)', 'images/alert-notify.png', '0px', '0px']
                }
            ],
            symbolInstances: [
            ]
        },
    states: {
        "Base State": {
            "${symbolSelector}": [
                ["style", "height", '300px'],
                ["style", "width", '540px']
            ],
            "${_alert-notify}": [
                ["style", "top", '-150px'],
                ["transform", "scaleY", '0.1'],
                ["transform", "scaleX", '0.1'],
                ["style", "opacity", '0'],
                ["style", "left", '-270px']
            ]
        }
    },
    timelines: {
        "Default Timeline": {
            fromState: "Base State",
            toState: "",
            duration: 100,
            autoPlay: false,
            timeline: [
                { id: "eid133", tween: [ "style", "${_alert-notify}", "opacity", '1', { fromValue: '0'}], position: 0, duration: 100, easing: "easeOutQuad" },
                { id: "eid137", tween: [ "transform", "${_alert-notify}", "scaleY", '0.5', { fromValue: '0.1'}], position: 0, duration: 100, easing: "easeOutQuad" },
                { id: "eid135", tween: [ "transform", "${_alert-notify}", "scaleX", '0.5', { fromValue: '0.1'}], position: 0, duration: 100, easing: "easeOutQuad" }            ]
        }
    }
},
"text-dates": {
    version: "4.0.0",
    minimumCompatibleVersion: "4.0.0",
    build: "4.0.0.359",
    baseState: "Base State",
    scaleToFit: "none",
    centerStage: "none",
    initialState: "Base State",
    gpuAccelerate: false,
    resizeInstances: false,
    content: {
            dom: [
                {
                    id: 'date',
                    type: 'group',
                    rect: ['0px', '0px', '375', '215', 'auto', 'auto'],
                    c: [
                    {
                        font: ['Arial, Helvetica, sans-serif', 24, 'rgba(255,255,255,1.00)', '100', 'none', ''],
                        type: 'text',
                        align: 'center',
                        id: 'Text',
                        opacity: 0.5,
                        text: 'NEXT MEETUP IN',
                        rect: ['22.4%', '0.1%', 'auto', 'auto', 'auto', 'auto']
                    },
                    {
                        font: ['Arial, Helvetica, sans-serif', 36, 'rgba(255,255,255,1.00)', '300', 'none', ''],
                        type: 'text',
                        id: 'TextCopy2',
                        text: 'Wed, 16 April 2014',
                        align: 'center',
                        rect: ['8.6%', '80.5%', 'auto', 'auto', 'auto', 'auto']
                    },
                    {
                        font: ['Arial, Helvetica, sans-serif', 90, 'rgba(255,255,255,1.00)', '700', 'none', ''],
                        type: 'text',
                        id: 'TextCopy',
                        text: '17 DAYS',
                        align: 'center',
                        rect: ['-0.1%', '27.1%', 'auto', 'auto', 'auto', 'auto']
                    }]
                }
            ],
            symbolInstances: [
            ]
        },
    states: {
        "Base State": {
            "${_Text}": [
                ["style", "top", '0.13%'],
                ["style", "text-align", 'center'],
                ["color", "color", 'rgba(255,255,255,1.00)'],
                ["style", "font-weight", '100'],
                ["style", "left", '22.4%'],
                ["style", "opacity", '0.5']
            ],
            "${_TextCopy2}": [
                ["style", "top", '80.48%'],
                ["style", "text-align", 'center'],
                ["color", "color", 'rgba(255,255,255,1.00)'],
                ["style", "font-weight", '300'],
                ["style", "left", '8.65%'],
                ["style", "font-size", '36px']
            ],
            "${symbolSelector}": [
                ["style", "height", '215px'],
                ["style", "width", '375px']
            ],
            "${_TextCopy}": [
                ["style", "top", '27.1%'],
                ["style", "text-align", 'center'],
                ["color", "color", 'rgba(255,255,255,1.00)'],
                ["style", "font-weight", '700'],
                ["style", "left", '-0.08%'],
                ["style", "font-size", '90px']
            ],
            "${_date}": [
                ["style", "left", '0px'],
                ["style", "top", '0px']
            ]
        }
    },
    timelines: {
        "Default Timeline": {
            fromState: "Base State",
            toState: "",
            duration: 300,
            autoPlay: false,
            timeline: [
                { id: "eid308", tween: [ "style", "${_date}", "top", '-90px', { fromValue: '0px'}], position: 0, duration: 150, easing: "easeOutQuad" },
                { id: "eid312", tween: [ "style", "${_date}", "top", '0px', { fromValue: '-90px'}], position: 150, duration: 150, easing: "easeOutQuad" }            ]
        }
    }
},
"alert-login": {
    version: "4.0.0",
    minimumCompatibleVersion: "4.0.0",
    build: "4.0.0.359",
    baseState: "Base State",
    scaleToFit: "none",
    centerStage: "none",
    initialState: "Base State",
    gpuAccelerate: false,
    resizeInstances: false,
    content: {
            dom: [
                {
                    id: 'alert-login',
                    type: 'image',
                    rect: ['0px', '0px', '640px', '1136px', 'auto', 'auto'],
                    fill: ['rgba(0,0,0,0)', 'images/alert-login.jpg', '0px', '0px']
                }
            ],
            symbolInstances: [
            ]
        },
    states: {
        "Base State": {
            "${_alert-login}": [
                ["style", "top", '0px'],
                ["style", "opacity", '0'],
                ["style", "left", '0px']
            ],
            "${symbolSelector}": [
                ["style", "height", '1136px'],
                ["style", "width", '640px']
            ]
        }
    },
    timelines: {
        "Default Timeline": {
            fromState: "Base State",
            toState: "",
            duration: 200,
            autoPlay: false,
            timeline: [
                { id: "eid325", tween: [ "style", "${_alert-login}", "opacity", '1', { fromValue: '0'}], position: 0, duration: 200, easing: "easeOutQuad" }            ]
        }
    }
},
"cal-add": {
    version: "4.0.0",
    minimumCompatibleVersion: "4.0.0",
    build: "4.0.0.359",
    baseState: "Base State",
    scaleToFit: "none",
    centerStage: "none",
    initialState: "Base State",
    gpuAccelerate: false,
    resizeInstances: false,
    content: {
            dom: [
                {
                    id: 'cal-add',
                    type: 'image',
                    rect: ['0px', '0px', '640px', '1136px', 'auto', 'auto'],
                    fill: ['rgba(0,0,0,0)', 'images/cal-add.jpg', '0px', '0px']
                }
            ],
            symbolInstances: [
            ]
        },
    states: {
        "Base State": {
            "${_cal-add}": [
                ["style", "left", '0px'],
                ["style", "top", '0px']
            ],
            "${symbolSelector}": [
                ["style", "height", '1136px'],
                ["style", "width", '640px']
            ]
        }
    },
    timelines: {
        "Default Timeline": {
            fromState: "Base State",
            toState: "",
            duration: 200,
            autoPlay: false,
            timeline: [
                { id: "eid340", tween: [ "style", "${_cal-add}", "top", '-1136px', { fromValue: '0px'}], position: 0, duration: 200 }            ]
        }
    }
},
"sym-logo": {
    version: "4.0.0",
    minimumCompatibleVersion: "4.0.0",
    build: "4.0.0.359",
    baseState: "Base State",
    scaleToFit: "none",
    centerStage: "none",
    initialState: "Base State",
    gpuAccelerate: false,
    resizeInstances: false,
    content: {
            dom: [
                {
                    transform: [[0, 0], [], [], ['0.5', '0.5']],
                    rect: ['-115px', '-358px', '462px', '338px', 'auto', 'auto'],
                    id: 'logo',
                    opacity: 1,
                    type: 'image',
                    fill: ['rgba(0,0,0,0)', 'images/logo.png', '0px', '0px']
                }
            ],
            symbolInstances: [
            ]
        },
    states: {
        "Base State": {
            "${_logo}": [
                ["style", "top", '-84px'],
                ["transform", "scaleY", '0.5'],
                ["transform", "scaleX", '0.5'],
                ["style", "opacity", '1'],
                ["style", "left", '-115px']
            ],
            "${symbolSelector}": [
                ["style", "height", '169px'],
                ["style", "width", '231px']
            ]
        }
    },
    timelines: {
        "Default Timeline": {
            fromState: "Base State",
            toState: "",
            duration: 800,
            autoPlay: true,
            timeline: [
                { id: "eid321", tween: [ "style", "${_logo}", "top", '-84px', { fromValue: '-84px'}], position: 0, duration: 0, easing: "easeInQuad" },
                { id: "eid314", tween: [ "style", "${_logo}", "top", '-358px', { fromValue: '-84px'}], position: 500, duration: 300, easing: "easeInQuad" }            ]
        }
    }
},
"btn-alarm": {
    version: "4.0.0",
    minimumCompatibleVersion: "4.0.0",
    build: "4.0.0.359",
    baseState: "Base State",
    scaleToFit: "none",
    centerStage: "none",
    initialState: "Base State",
    gpuAccelerate: false,
    resizeInstances: false,
    content: {
            dom: [
                {
                    rect: ['0px', '0px', '47px', '53px', 'auto', 'auto'],
                    id: 'icon-alarm',
                    opacity: 1,
                    type: 'image',
                    fill: ['rgba(0,0,0,0)', 'images/icon-alarm.svg', '0px', '0px']
                }
            ],
            symbolInstances: [
            ]
        },
    states: {
        "Base State": {
            "${_icon-alarm}": [
                ["style", "top", '0px'],
                ["style", "height", '53px'],
                ["transform", "scaleY", '1'],
                ["transform", "rotateZ", '0deg'],
                ["transform", "scaleX", '1'],
                ["style", "opacity", '1'],
                ["style", "left", '0px'],
                ["style", "width", '47px']
            ],
            "${symbolSelector}": [
                ["style", "height", '53px'],
                ["style", "width", '47px']
            ]
        }
    },
    timelines: {
        "Default Timeline": {
            fromState: "Base State",
            toState: "",
            duration: 0,
            autoPlay: false,
            timeline: [
            ]
        }
    }
}
};


Edge.registerCompositionDefn(compId, symbols, fonts, resources, opts);

/**
 * Adobe Edge DOM Ready Event Handler
 */
$(window).ready(function() {
     Edge.launchComposition(compId);
});
})(jQuery, AdobeEdge, "EDGE-25008638");
