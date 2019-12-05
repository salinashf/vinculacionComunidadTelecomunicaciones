
function RADIANS(degrees) {
    var pi = Math.PI;
    return degrees * (pi / 180);
}

function SIN(value) {
    return Math.sin(value);
}
function COS(value) {
    return Math.cos(value);
}

var  formatAmplitud = function (value) {
        return value + "m" //String.fromCharCode(0x0041);
};
var  formatFrecuencia = function (value) {
    return value +  "Hz"//String.fromCharCode(0x3390);

};
var  formatDesviacion = function (value) {
    return value + String.fromCharCode(0x03c3); ///&sigma;

};
var confAmpPortadora ={
    "displayPrevious":true,
    "fgColor":"#1da780",
    "inputColor":"#fe081c",
    "thickness":.2,
    "width":50,
    "height":50,
    'format': formatAmplitud,
    'release': null
};
var confFrecPortadora ={
    "displayPrevious":true,
    "fgColor":"#d8bd2d",
    "inputColor":"#fe081c",
    "thickness":.2,
    "width":50,
    "height":50,
    'format': formatFrecuencia,
    'release': null
};
var confDesvPortadora ={
    "displayPrevious":true,
    "fgColor":"#d86b39",
    "inputColor":"#fe081c",
    "thickness":.2,
    "width":50,
    "height":50,
    'format': formatDesviacion,
    'release': null
};



//######################
var confAmpModuladora ={
    "displayPrevious":true,
    "fgColor":"#35ecfe",
    "inputColor":"#fe081c",
    "thickness":.2,
    "width":50,
    "height":50,
    'format': formatAmplitud,
    'release': null
};
var confFrecModuladora ={
    "displayPrevious":true,
    "fgColor":"#23b3fe",
    "inputColor":"#fe081c",
    "thickness":.2,
    "width":50,
    "height":50,
    'format': formatFrecuencia,
    'release': null
};

