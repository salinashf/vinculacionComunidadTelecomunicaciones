
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
        return value + "v" //String.fromCharCode(0x0041);
};
var  formatFrecuencia = function (value) {
    return value +  "kHz"//String.fromCharCode(0x3390);

};
var  formatDesviacion = function (value) {
    return value + String.fromCharCode(0x03c3); ///&sigma;

};

function limpiarControles( value ) {
    if (value.is("input")){
        return value.val().replace(/Hz|m|kHz|v/g, "");
    }
    return value.text().replace(/Hz|m|kHz|v/g, "");
}

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

var confAmpI={
    "displayPrevious":true,
    "fgColor":"#19a712",
    "inputColor":"#fe081c",
    "thickness":.2,
    "width":50,
    "height":50,
    'format': formatAmplitud,
    'release': null
};
var confAmpQ={
    "displayPrevious":true,
    "fgColor":"#4c39a7",
    "inputColor":"#fe081c",
    "thickness":.2,
    "width":50,
    "height":50,
    'format': formatAmplitud,
    'release': null
};

var confBitC0L = {
    "displayPrevious":true,
    "fgColor":"#b12536",
    "inputColor":"#2efe1c",
    "thickness":.2,
    "width":50,
    "height":50,
    "step":0.5,
    "min" :0,
    "max" :20,
    'release': null
};

var confBitC1L = {
    "displayPrevious":true,
    "fgColor":"#d8bd2d",
    "inputColor":"#2efe1c",
    "thickness":.2,
    "width":50,
    "height":50,
    "min" :0,
    "max" :20,
    "step":0.5,
    'release': null
};
