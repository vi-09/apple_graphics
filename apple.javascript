var BASE_COLOR = new Color(170,30,5);
var BASE_COLOR_LIGHTER = new Color(176,50,42);
var BASE_COLOR_EVEN_LIGHTER = new Color(195,74,55);
var BASE_COLOR_LIGHTEST = new Color(203,84,66);
var STEM_BASE_COLOR = new Color(50,9,9);
var DARKEST_SHADOW = new Color(102,20,0);
var LIGHTER_SHADOW = new Color(139,24,24);
var RIM_LIGHT = new Color(230,197,180);
var FADED_RIM_LIGHT = new Color(202,173,158);
var BLEND_HIGHLIGHT = new Color(182,63,55);

function start(){
    shadow();
    base();
    rimLight();
    blendShadow2();
    shadow1();
    blendShadow();
    light1();
    light2();
    light3();
    var rimLight2 = new Oval(3,17);
    rimLight2.setPosition(80,90);
    rimLight2.setColor(RIM_LIGHT);
    rimLight2.rotate(18);
    add(rimLight2);
    var rimLight3 = new Oval(6,13);
    rimLight3.setPosition(87,93);
    rimLight3.setColor(RIM_LIGHT);
    rimLight3.rotate(15);
    add(rimLight3);
    stemBase();
    stemBaseRimLight();
}
function shadow(){
    var hardShadow = new Oval(120,30);
    hardShadow.setPosition(180,160);
    hardShadow.setColor(Color.black);
    hardShadow.rotate(-3);
    add(hardShadow);
}
function light3(){
    var lastHighlight = new Oval(25,35);
    lastHighlight.setPosition(85,95);
    lastHighlight.setColor(BASE_COLOR_LIGHTEST);
    lastHighlight.rotate(10);
    add(lastHighlight);
}
function blendShadow2(){
    var blendShadow5 = new Oval(30,80);
    blendShadow5.setPosition(165,123);
    blendShadow5.setColor(LIGHTER_SHADOW);
    blendShadow5.rotate(10);
    add(blendShadow5);   
}
function blendShadow(){
    var blendShadow1 = new Oval(40,10);
    blendShadow1.setPosition(160,73);
    blendShadow1.setColor(LIGHTER_SHADOW);
    blendShadow1.rotate(40);
    add(blendShadow1);

    var blendShadow2 = new Oval(40,20);
    blendShadow2.setPosition(100,73);
    blendShadow2.setColor(LIGHTER_SHADOW);
    blendShadow2.rotate(-25);
    add(blendShadow2);
    
    var blendShadow3 = new Oval(40,10);
    blendShadow3.setPosition(153,157);
    blendShadow3.setColor(LIGHTER_SHADOW);
    blendShadow3.rotate(-35);
    add(blendShadow3);    
    
    var blendShadow4 = new Oval(40,8);
    blendShadow4.setPosition(97,163);
    blendShadow4.setColor(LIGHTER_SHADOW);
    blendShadow4.rotate(30);
    add(blendShadow4);    
}
//Second Layer of Highlight
function light2(){
    var highlight1 = new Oval(33,50);
    highlight1.setPosition(87,95);
    highlight1.setColor(BASE_COLOR_EVEN_LIGHTER);
    highlight1.rotate(20);
    add(highlight1);
    
    var highlight2 = new Oval(46,26);
    highlight2.setPosition(123,97);
    highlight2.setColor(BLEND_HIGHLIGHT);
    highlight2.rotate(-25);
    add(highlight2);

    var highlight3 = new Oval(63,40);
    highlight3.setPosition(100,105);
    highlight3.setColor(BASE_COLOR_EVEN_LIGHTER);
    highlight3.rotate(-20);
    add(highlight3);
}
//Rim Light on Stem
function stemBaseRimLight(){
    var stemBaseLight = new Rectangle(2,18);
    stemBaseLight.setPosition(114,58);
    stemBaseLight.rotate(-6);
    stemBaseLight.setColor(FADED_RIM_LIGHT);
    add(stemBaseLight);
    
    var stemBaseLight2 = new Rectangle(1,11);
    stemBaseLight2.setPosition(115,48);
    stemBaseLight2.rotate(10);
    stemBaseLight2.setColor(FADED_RIM_LIGHT);
    add(stemBaseLight2);
    
    var stemBaseLight3 = new Rectangle(1,12);
    stemBaseLight3.setPosition(119,37);
    stemBaseLight3.rotate(25);
    stemBaseLight3.setColor(RIM_LIGHT);
    add(stemBaseLight3);
}
//Rimlight of Apple
function rimLight(){
    var rimLight1 = new Oval(50,90);
    rimLight1.setPosition(90,110);
    rimLight1.setColor(RIM_LIGHT);
    add(rimLight1);
    var rimLight5 = new Oval(70,80);
    rimLight5.setPosition(127,117);
    rimLight5.setColor(FADED_RIM_LIGHT);
    add(rimLight5);
}
//Color of apple
function shadow1(){
    var lightShadow1 = new Oval(55,90);
    lightShadow1.setPosition(147,120);
    lightShadow1.setColor(BASE_COLOR);
    lightShadow1.rotate(20);
    add(lightShadow1);

    var lightShadow2 = new Oval(80,35);
    lightShadow2.setPosition(107,142);
    lightShadow2.setColor(BASE_COLOR);
    lightShadow2.rotate(30);
    add(lightShadow2);    
    
    var lightShadow3 = new Oval(50,20);
    lightShadow3.setPosition(142,70);
    lightShadow3.setColor(BASE_COLOR);
    lightShadow3.rotate(20);
    add(lightShadow3);  
    
    var lightShadow4 = new Oval(80,55);
    lightShadow4.setPosition(107,135);
    lightShadow4.setColor(BASE_COLOR);
    lightShadow4.rotate(45);
    add(lightShadow4);   
}
//First layer of Highlight
function light1(){
    var softlight1 = new Arc(20, 17, 180, 0);
    softlight1.setPosition(96,86);
    softlight1.setColor(BASE_COLOR_LIGHTER);
    add(softlight1);

    var softlight2 = new Oval(50, 73);
    softlight2.setPosition(92,109);
    softlight2.setColor(BLEND_HIGHLIGHT);
    softlight2.rotate(-5);
    add(softlight2);    
    
    var softlight3 = new Arc(15, 10, 113, 0);
    softlight3.setPosition(134,73);
    softlight3.setColor(BASE_COLOR_LIGHTER);
    softlight3.rotate(-13);
    add(softlight3);    

    var softlight4 = new Oval(60, 83);
    softlight4.setPosition(125,115);
    softlight4.setColor(BASE_COLOR_LIGHTER);
    softlight4.rotate(35);
    add(softlight4);    
}
//Base Colour of Stem
function stemBase(){
    var stemBase = new Rectangle(5,18);
    stemBase.setPosition(114,58);
    stemBase.rotate(-6);
    stemBase.setColor(STEM_BASE_COLOR);
    add(stemBase);
    
    var stemBase2 = new Rectangle(4,11);
    stemBase2.setPosition(115,48);
    stemBase2.rotate(10);
    stemBase2.setColor(STEM_BASE_COLOR);
    add(stemBase2);
    
    var stemBase3 = new Rectangle(3.25,12);
    stemBase3.setPosition(119,37);
    stemBase3.rotate(25);
    stemBase3.setColor(STEM_BASE_COLOR);
    add(stemBase3);
}
//Darkest Shadow(Base of apple)
function base(){
    var head = new Oval(70,85);
    head.setPosition(100,100);
    head.rotate(15);
    head.setColor(DARKEST_SHADOW);
    add(head);
    
    var head2 = new Oval(70,110);
    head2.setPosition(100,120);
    head2.rotate(-15);
    head2.setColor(DARKEST_SHADOW);
    add(head2);

    var head3 = new Oval(105,85);
    head3.setPosition(130,100);
    head3.rotate(-20);
    head3.setColor(DARKEST_SHADOW);
    add(head3);
    
    var head4 = new Oval(105,123);
    head4.setPosition(133,115);
    head4.rotate(15);
    head4.setColor(DARKEST_SHADOW);
    add(head4);
}
