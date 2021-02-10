function initialize(){

    var svg = Snap("#svg");
    svg.selectAll("*").remove();
}

function sleep(milliseconds) {

    const date = Date.now();
    let currentDate = null;
    do {
        currentDate = Date.now();
    } while (currentDate - date < milliseconds);
}

function paintBubble(){

    for(let i = 0; i < buttonsArray.length; i++){

        if(i === index){
            document.getElementById(buttonsArray[i]).style.background = 'blue';
        }else{
            document.getElementById(buttonsArray[i]).style.background = '#4CAF50';
        }
    }
}

function highlightCodeLine(lineIndex){

    var el = document.getElementById("highlightRect");

    if(el != null){
        el.remove();
    }

    var SVGRect = document.getElementById("codeLine" + lineIndex).getBBox();
    var rect = s.rect(-750, SVGRect.y, 1000, SVGRect.height );
    rect.attr({
        id: 'highlightRect',
        fill: '#17d4cb',
        stroke: '#17d4cb',
        fillOpacity: 0.7,
        opacity: 0.7,
        strokeOpacity: 0})
}

function nextEvent(){

    if(index < pageArray.length -1){
        index = index + 1;
        paintBubble();
        eval(pageArrayAnimated[index]);
    }
}

function previousEvent(){

    if(index > 0){
        index = index - 1;
        var newIndex = index;
        document.getElementById("topic").innerText = headerArray[index];
        initialize();
        paintBubble();

        for(let i = 0; i <= newIndex; i++){
            if(i === newIndex){
                eval(pageArrayAnimated[i]);
                break;
            }
            eval(pageArray[i]);
        }
    }
}

function forwardEvent(){

    for(let i = index; i < pageArray.length; i++){
        eval(pageArray[i]);
    }
    index = pageArray.length - 1;
    paintBubble();
}

function backEvent(){

    button1(true,true);
}

function button1(isDirectCall, isAnimated){

    index = 0;
    var animationDuration = 0;
    paintBubble();

    if(isDirectCall){
        initialize();
        for(let i = 0; i <= index; i++){
            if(i === index){
                eval(pageArrayAnimated[i]);
                break;
            }
            eval(pageArray[i]);
        }
        return;
    }

    if(isAnimated){
        animationDuration = 1000;
    }

    s.attr({ viewBox: "0 0 600 1000"})

    var header = s.text(0, 100, "Memory Allocation In Java");
    header.attr({
        'class': 'removable', 'fill' : 'blue',  'stroke': 'blue', 'stroke-width': 0.2, 'font-size':50
    });

    var rect1 = s.rect(-350, 150, 500, 700, 20);

    var rect1Text = s.text(-210, 300, "Stack Memory");
    rect1Text.attr({
        'class': 'removable', 'fill' : 'blue',  'stroke': 'blue', 'stroke-width': 0.2, 'font-size':40
    });

    var rectangle1 = s.group(rect1, rect1Text);

    var rect2 = s.rect(410, 150, 500, 700, 20);
    var rect2Text = s.text(550, 300, "Heap Memory");

    rect2Text.attr({
        'class': 'removable', 'fill' : 'blue',  'stroke': 'blue', 'stroke-width': 0.2, 'font-size':40
    });

    var rectangle2 = s.group(rect2, rect2Text);
    var rectangles = s.group(rectangle1, rectangle2);

    rectangles.attr({
        'class' : 'removable',
        fill: 'lightblue',
        stroke: 'lightblue',
        strokeOpacity: .3,
        strokeWidth: 10
    });
}

function button2(isDirectCall, isAnimated){

    index = 1;
    var newIndex = index;
    var animationDuration = 0;
    paintBubble();

    if(isDirectCall){
        initialize();
        for(let i = 0; i <= newIndex; i++){
            if(i === newIndex){
                eval(pageArrayAnimated[i]);
                break;
            }
            eval(pageArray[i]);
        }
        return;
    }

    if(isAnimated){
        animationDuration = 1000;
    }

    var line = s.line(-350, 350, -350, 350);

    line.attr({
        stroke: "#000",
        strokeWidth: 2
    });

    line.animate({x2: 150}, animationDuration);

    var line1 = "* Primitive Data Types";
    var line2 = "* Reference Variables";
    var line3 = "* LIFO Principle";
    var line4 = "* Smaller In Size";
    var line5 = "* Faster Access";
    var line6 = "* Allocated Memory Cannot Be Changed";

    var header = s.text(-1000, 400, line1);
    var header2 = s.text(-1000, 440, line2);
    var header3 = s.text(-1000, 480, line3);
    var header4 = s.text(-1000, 520, line4);
    var header5 = s.text(-1000, 560, line5);
    var header6 = s.text(-1000, 600, line6);

    header.attr({
        'fill' : 'black',  'stroke': 'blue', 'stroke-width': 0.2, 'font-size':28
    });
    header2.attr({
        'fill' : 'black',  'stroke': 'blue', 'stroke-width': 0.2, 'font-size':28
    });
    header3.attr({
        'fill' : 'black',  'stroke': 'blue', 'stroke-width': 0.2, 'font-size':28
    });
    header4.attr({
        'fill' : 'black',  'stroke': 'blue', 'stroke-width': 0.2, 'font-size':28
    });
    header5.attr({
        'fill' : 'black',  'stroke': 'blue', 'stroke-width': 0.2, 'font-size':28
    });
    header6.attr({
        'fill' : 'black',  'stroke': 'blue', 'stroke-width': 0.2, 'font-size':28
    });

    header.animate({x:-330}, animationDuration);
    header2.animate({x:-330}, animationDuration);
    header3.animate({x:-330}, animationDuration);
    header4.animate({x:-330}, animationDuration);
    header5.animate({x:-330}, animationDuration);
    header6.animate({x:-330}, animationDuration);

    line = s.line(910, 350, 910, 350);

    line.attr({
        stroke: "#000",
        strokeWidth: 2
    });

    line.animate({x2: 410}, animationDuration);

    line1 = "* Store Objects";
    line2 = "* Bigger Memory Than Stack";
    line3 = "* Elements Are Globally Accessible";

    header = s.text(1000, 400, line1);
    header2 = s.text(1000, 440, line2);
    header3 = s.text(1000, 480, line3);

    header.attr({
        'fill' : 'black',  'stroke': 'blue', 'stroke-width': 0.2, 'font-size':28
    });
    header2.attr({
        'fill' : 'black',  'stroke': 'blue', 'stroke-width': 0.2, 'font-size':28
    });
    header3.attr({
        'fill' : 'black',  'stroke': 'blue', 'stroke-width': 0.2, 'font-size':28
    });

    header.animate({x:420}, animationDuration);
    header2.animate({x:420}, animationDuration);
    header3.animate({x:420}, animationDuration);
}

function button3(isDirectCall, isAnimated){

    index = 2;
    var newIndex = index;
    paintBubble();

    if(isDirectCall){
        initialize();
        for(let i = 0; i <= newIndex; i++){
            if(i === newIndex){
                eval(pageArrayAnimated[i]);
                break;
            }
            eval(pageArray[i]);
        }
        return;
    }

    var rect1 = s.rect(-900, 350, 300, 400, 20);

    rect1.attr({
        fill: 'orange',
        stroke: 'lightblue',
        strokeOpacity: .3,
        strokeWidth: 10
    });

    var stackHeader = s.text(-800, 400, "Stack");
    stackHeader.attr({
        'fill' : 'black',  'stroke': 'blue', 'stroke-width': 0.2, 'font-size':34
    });
}

function button4(isDirectCall, isAnimated){

    index = 3;
    var newIndex = index;
    var animationDuration = 0;
    paintBubble();

    if(isDirectCall){
        initialize();
        for(let i = 0; i <= newIndex; i++){
            if(i === newIndex){
                eval(pageArrayAnimated[i]);
                break;
            }
            eval(pageArray[i]);
        }
        return;
    }

    if(isAnimated){
        animationDuration = 2000;
    }

    var rect2 = s.rect(-1300, 150, 170, 70, 20);

    rect2.attr({
        fill: 'blue',
        stroke: 'lightblue',
        strokeOpacity: .3,
        strokeWidth: 10
    });

    var integerHeader = s.text(-1300, 110, "int");
    integerHeader.attr({
        'fill' : 'orange',  'stroke': 'orange', 'stroke-width': 0.2, 'font-size':34
    });

    rect2.animate({x:-830, y:660}, animationDuration);
    integerHeader.animate({x:-760, y:705}, animationDuration);

}

function button5(isDirectCall, isAnimated){

    index = 4;
    var newIndex = index;
    var animationDuration1 = 0;
    var animationDuration2 = 0;
    paintBubble();

    if(isDirectCall){
        initialize();
        for(let i = 0; i <= newIndex; i++){
            if(i === newIndex){
                eval(pageArrayAnimated[i]);
                break;
            }
            eval(pageArray[i]);
        }
        return;
    }

    if(isAnimated){
        animationDuration1 = 2000;
        animationDuration2 = 3000;
    }

    var svgTextElement = s.text(-1000,200, "PUSH").attr({ fontSize: '140px', "font-family":'monospace',  opacity: 0, "text-anchor": "middle"});

    setTimeout( function() {

            Snap.animate( 0, 1, function( value ) {
                svgTextElement.attr({ 'font-size': value * 100,  opacity: value });      // Animate by font-size ?
            }, animationDuration2, mina.bounce, function() { svgTextElement.remove() } );
        }
        ,0)

    var rect3 = s.rect(-1300, 150, 170, 70, 20);

    rect3.attr({
        id:'sad',
        fill: 'red',
        stroke: 'lightblue',
        strokeOpacity: .3,
        strokeWidth: 10
    });

    var refHeader = s.text(-1300, 150, "Object1 Ref");
    refHeader.attr({
        id:'rectTextPop', 'fill' : 'blue',  'stroke': 'blue', 'stroke-width': 0.2, 'font-size':30
    });

    rect3.animate({x:-830, y:560}, animationDuration1);
    refHeader.animate({x:-824, y:600}, animationDuration1);

}

function button6(isDirectCall, isAnimated){

    index = 5;
    var newIndex = index;
    var animationDuration = 0;
    paintBubble();

    if(isDirectCall){
        initialize();
        for(let i = 0; i <= newIndex; i++){
            if(i === newIndex){
                eval(pageArrayAnimated[i]);
                break;
            }
            eval(pageArray[i]);
        }
        return;
    }

    if(isAnimated){
        animationDuration =1000;
    }

    var g = s.g();
    var image = g.image("assets/heap.svg", 1000, 200, 600,700 );
    var rect = s.rect(1000, 200, 170, 70, 20);

    rect.attr({
        id:'heapRect',
        fill: 'orange',
        stroke: 'lightblue',
        strokeOpacity: .3,
        strokeWidth: 10
    });

    var rect1Text = s.text(1030, 240, "Object1");
    rect1Text.attr({
        id: 'heapText', 'fill' : 'blue',  'stroke': 'blue', 'stroke-width': 0.2, 'font-size':30
    });

    rect.animate({x:1200, y:450}, animationDuration);
    rect1Text.animate({x:1240, y: 490}, animationDuration);

    var rect2 = s.rect(1000, 200, 170, 70, 20);
    rect2.attr({
        fill: 'blue',
        stroke: 'lightblue',
        strokeOpacity: .3,
        strokeWidth: 10
    });

    var rect2Text = s.text(1030, 240, "Array");
    rect2Text.attr({
        'fill' : 'orange',  'stroke': 'blue', 'stroke-width': 0.2, 'font-size':30
    });

    rect2.animate({x:1200, y:540}, animationDuration);
    rect2Text.animate({x:1240, y: 580}, animationDuration);
}

function button7(isDirectCall, isAnimated) {

    index = 6;
    var newIndex = index;
    var animationDuration1 = 0;
    var animationDuration2 = 0;
    var animationDuration3 = 0;
    paintBubble();

    if(isDirectCall){
        initialize();
        for(let i = 0; i <= newIndex; i++){
            if(i === newIndex){
                eval(pageArrayAnimated[i]);
                break;
            }
            eval(pageArray[i]);
        }
        return;
    }

    if(isAnimated){
        animationDuration1 = 3000;
        animationDuration2 = 2000;
        animationDuration3 = 2500;
    }

    var svgTextElement = s.text(-1000,200, "POP").attr({ fontSize: '140px', "font-family":'monospace', opacity: 0, "text-anchor": "middle"});

    setTimeout( function() {

        Snap.animate( 0, 1, function( value ) {
                svgTextElement.attr({ 'font-size': value * 100,  opacity: value });      // Animate by font-size ?
            }, animationDuration1, mina.bounce, function() { svgTextElement.remove() } );
        },0)

    var rectTextPop = document.getElementById('rectTextPop');
    rectTextPop.remove();

    var refHeader = s.text(-824, 600, "Object1 Ref");
    refHeader.attr({
        id:'rectTextPop', 'fill' : 'blue',  'stroke': 'blue', 'stroke-width': 0.2, 'font-size':30
    });

    var rect = document.getElementById('sad');
    rect.animate({x:-600, y:150}, animationDuration2);
    refHeader.animate({x:-590, y:190},animationDuration2);

    setTimeout(function (){
        rect.setAttribute("x",'-600')
        rect.setAttribute("y",'150');
        refHeader.setAttribute("x",'-600')
        refHeader.setAttribute("y",'150');
    },animationDuration2);

    setTimeout(function (){
        document.getElementById('sad').remove();
        document.getElementById('rectTextPop').remove();
    },animationDuration3)

}

function button8(isDirectCall, isAnimated){

    index = 7;
    var newIndex = index;
    var animationDuration1 = 0;
    var animationDuration2 = 0;
    paintBubble();

    if(isDirectCall){
        initialize();
        for(let i = 0; i <= newIndex; i++){
            if(i === newIndex){
                eval(pageArrayAnimated[i]);
                break;
            }
            eval(pageArray[i]);
        }
        return;
    }

    if(isAnimated){
        animationDuration1 = 500;
        animationDuration2 = 2000;
    }

    var g = s.g();
    var image = g.image("assets/warning.svg", 700, -20, 600,700 );

    for(let i = 0; i < 10; i++){

        image.animate({x:700, y:-50}, animationDuration1)

        setTimeout(function (){
            image.animate(image.animate({x:700, y:-20}, animationDuration1))
        },animationDuration1)
    }

    setTimeout(function (){
        image.remove()
    },animationDuration2);

}

function button9(isDirectCall, isAnimated){

    index = 8;
    var newIndex = index;
    var animationDuration = 0;
    paintBubble();

    if(isDirectCall){
        initialize();
        for(let i = 0; i <= newIndex; i++){
            if(i === newIndex){
                eval(pageArrayAnimated[i]);
                break;
            }
            eval(pageArray[i]);
        }
        return;
    }

    if(isAnimated){
        animationDuration = 1000;
    }

    var g = s.g();
    var image2 = g.image("assets/garbage-collector.svg", 700, -20, 600,700 );

    var heapText = document.getElementById('heapText');
    var heapRect = document.getElementById('heapRect');

    heapText.remove();
    heapRect.animate({x:900, y:240}, animationDuration)
    heapText.animate({x:900, y:240}, animationDuration);

    setTimeout(function (){
        heapRect.remove();
    },animationDuration)

}

function button10(isDirectCall, isAnimated){

    index = 9;
    var newIndex = index;
    var animationDuration = 0;
    paintBubble();

    if(isDirectCall){
        initialize();
        for(let i = 0; i <= newIndex; i++){
            if(i === newIndex){
                eval(pageArrayAnimated[i]);
                break;
            }
            eval(pageArray[i]);
        }
        return;
    }

    if(isAnimated){
        animationDuration = 1000;
    }

    initialize();
    s.attr({ viewBox: "0 0 600 1000", 'background': 'blue'})

    var rectangleBackground1 = s.rect(-750, 150, 1000, 800, 40);
    var rectangleBackground2 = s.rect(350, 150, 1000, 800, 40);

    rectangleBackground1.attr({
        'class' : 'removable',
        fill: '#02faee',
        stroke: '#02faee',
        strokeOpacity: .3,
        strokeWidth: 10
    });

    rectangleBackground2.attr({
        'class' : 'removable',
        fill: '#02faee',
        stroke: '#02faee',
        strokeOpacity: .3,
        strokeWidth: 10
    });

    for(let i = 0; i < codeArray.length; i++){
        s.text(-600,250 + 32*i, codeArray[i]).attr({id: 'codeLine' + i,"style":"white-space:pre", 'fill' : 'black',  'stroke': 'black', 'stroke-width': 0.2, 'font-size':32});
    }


}

function button11(isDirectCall, isAnimated){

    index = 10;
    var newIndex = index;
    var animationDuration = 0;
    paintBubble();

    if(isDirectCall){
        initialize();
        for(let i = 0; i <= newIndex; i++){
            if(i === newIndex){
                eval(pageArrayAnimated[i]);
                break;
            }
            eval(pageArray[i]);
        }
        return;
    }

    highlightCodeLine(0);

    if(isAnimated){
        animationDuration = 1000;
    }

    var codeStack = s.rect(400, 250, 300, 600, 40);
    codeStack.attr({
        id : 'codeStack',
        fill: 'orange',
        stroke: 'orange',
        strokeOpacity: .3,
        strokeWidth: 10
    });

    var textStack = s.text(500, 330, "STACK").attr({id: 'textStack', "style":"white-space:pre", 'fill' : 'black',  'stroke': 'black', 'stroke-width': 0.2, 'font-size':32});

    var line = s.line(400, 700, 400, 700);

    line.attr({
        id: 'lineM1',
        stroke: "#000",
        strokeWidth: 2
    });

    line.animate({x2: 700}, animationDuration);

    var textM1 = s.text(430, 780, "m1").attr({id: 'textM1', "style":"white-space:pre", 'fill' : 'blue',  'stroke': 'blue', 'stroke-width': 0.2, 'font-size':32});
    var g = s.g();
    var image = g.image("assets/heap.svg", 850, 300, 400,400);
    var textHeap = s.text(900, 330, "HEAP").attr({id: 'textHeap', "style":"white-space:pre", 'fill' : 'black',  'stroke': 'black', 'stroke-width': 0.2, 'font-size':32});

}

function button12(isDirectCall, isAnimated){

    index = 11;
    var newIndex = index;
    var animationDuration = 0;
    paintBubble();

    if(isDirectCall){
        initialize();
        for(let i = 0; i <= newIndex; i++){
            if(i === newIndex){
                eval(pageArrayAnimated[i]);
                break;
            }
            eval(pageArray[i]);
        }
        return;
    }

    highlightCodeLine(1);

    if(isAnimated){
        animationDuration = 1000;
    }

    var textX = s.text(600, 780, "x").attr({id: 'textX', "style":"white-space:pre", 'fill' : 'red',  'stroke': 'red', 'stroke-width': 0.2, 'font-size':40});

}

function button13(isDirectCall, isAnimated){

    index = 12;
    var newIndex = index;
    var animationDuration = 0;
    paintBubble();

    if(isDirectCall){
        initialize();
        for(let i = 0; i <= newIndex; i++){
            if(i === newIndex){
                eval(pageArrayAnimated[i]);
                break;
            }
            eval(pageArray[i]);
        }
        return;
    }

    if(isAnimated){
        animationDuration = 1000;
    }

    highlightCodeLine(2);
}

function button14(isDirectCall, isAnimated){

    index = 13;
    var newIndex = index;
    var animationDuration = 0;
    paintBubble();

    if(isDirectCall){
        initialize();
        for(let i = 0; i <= newIndex; i++){
            if(i === newIndex){
                eval(pageArrayAnimated[i]);
                break;
            }
            eval(pageArray[i]);
        }
        return;
    }

    if(isAnimated){
        animationDuration = 1000;
    }


    highlightCodeLine(5);

    var line2 = s.line(400, 600, 400, 600);
    line2.attr({
        id: 'lineM2',
        stroke: "#000",
        strokeWidth: 2
    });
    line2.animate({x2: 700}, animationDuration);

    var textM2= s.text(430, 660, "m2").attr({id: 'textM2', "style":"white-space:pre", 'fill' : 'blue',  'stroke': 'blue', 'stroke-width': 0.2, 'font-size':32});
    var textB = s.text(600, 660, "b").attr({id: 'textB', "style":"white-space:pre", 'fill' : 'red',  'stroke': 'red', 'stroke-width': 0.2, 'font-size':40});
}

function button15(isDirectCall, isAnimated){

    index = 14;
    var newIndex = index;
    var animationDuration = 0;
    paintBubble();

    if(isDirectCall){
        initialize();
        for(let i = 0; i <= newIndex; i++){
            if(i === newIndex){
                eval(pageArrayAnimated[i]);
                break;
            }
            eval(pageArray[i]);
        }
        return;
    }

    highlightCodeLine(6);

    if(isAnimated){
        animationDuration = 1000;
    }

    var textC = s.text(640, 660, "c").attr({id: 'textC', "style":"white-space:pre", 'fill' : 'red',  'stroke': 'red', 'stroke-width': 0.2, 'font-size':40});
}

function button16(isDirectCall, isAnimated){

    index = 15;
    var newIndex = index;
    paintBubble();

    if(isDirectCall){
        initialize();
        for(let i = 0; i <= newIndex; i++){
            if(i === newIndex){
                eval(pageArrayAnimated[i]);
                break;
            }
            eval(pageArray[i]);
        }
        return;
    }

    highlightCodeLine(7);
}

function button17(isDirectCall, isAnimated){

    index = 16;
    var newIndex = index;
    var animationDuration = 0;
    paintBubble();

    if(isDirectCall){
        initialize();
        for(let i = 0; i <= newIndex; i++){
            if(i === newIndex){
                eval(pageArrayAnimated[i]);
                break;
            }
            eval(pageArray[i]);
        }
        return;
    }

    if(isAnimated){
        animationDuration = 1000;
    }

    highlightCodeLine(10);

    var line3 = s.line(400, 500, 400, 500);
    line3.attr({
        id: "lineM3",
        stroke: "#000",
        strokeWidth: 2
    });
    line3.animate({x2: 700}, animationDuration);

    var textM3= s.text(430, 560, "m3").attr({id: 'textM3', "style":"white-space:pre", 'fill' : 'blue',  'stroke': 'blue', 'stroke-width': 0.2, 'font-size':32});

}

function button18(isDirectCall, isAnimated){

    index = 17;
    var newIndex = index;
    var animationDuration = 0;
    paintBubble();

    if(isDirectCall){
        initialize();
        for(let i = 0; i <= newIndex; i++){
            if(i === newIndex){
                eval(pageArrayAnimated[i]);
                break;
            }
            eval(pageArray[i]);
        }
        return;
    }

    if(isAnimated){
        animationDuration = 1000;
    }

    highlightCodeLine(11);

    var textRef = s.text(600, 560, "ref").attr({id: 'textRef', "style":"white-space:pre", 'fill' : 'red',  'stroke': 'red', 'stroke-width': 0.2, 'font-size':40});

    var rectangleBackground1 = s.rect(980, 430, 150, 70, 10);

    rectangleBackground1.attr({
        id : 'object',
        fill: 'yellow',
        stroke: 'yellow',
        strokeOpacity: .3,
        strokeWidth: 10
    });

    var textPQ = s.text(1000, 470, "p       q").attr({id: 'textPQ', "style":"white-space:pre", 'fill' : 'red',  'stroke': 'red', 'stroke-width': 0.2, 'font-size':40});

    var line3 = s.line(700, 550, 700, 470);
    line3.attr({
        id: "line3",
        stroke: "blue",
        strokeWidth: 10
    });
    line3.animate({x2: 980}, animationDuration);
}

function button19(isDirectCall, isAnimated){

    index = 18;
    var newIndex = index;
    var animationDuration = 0;
    paintBubble();

    if(isDirectCall){
        initialize();
        for(let i = 0; i <= newIndex; i++){
            if(i === newIndex){
                eval(pageArrayAnimated[i]);
                break;
            }
            eval(pageArray[i]);
        }
        return;
    }

    if(isAnimated){
        animationDuration = 1000;
    }

    highlightCodeLine(12);

    document.getElementById("line3").remove();
    document.getElementById("lineM3").remove();
    document.getElementById("textRef").remove();
    document.getElementById("textM3").remove();

    var g = s.g();
    var image2 = g.image("assets/garbage-collector.svg", 700, -20, 600,700 );

    setTimeout(function (){
        image2.animate({height:0, width:0}, 2000)
        document.getElementById("textPQ").remove();
        document.getElementById("object").classList.add("animate")
    },animationDuration);
}

function button20(isDirectCall, isAnimated){

    index = 19;
    var newIndex = index;
    var animationDuration = 0;
    paintBubble();

    if(isDirectCall){
        initialize();
        for(let i = 0; i <= newIndex; i++){
            if(i === newIndex){
                eval(pageArrayAnimated[i]);
                break;
            }
            eval(pageArray[i]);
        }
        return;
    }

    if(isAnimated){
        animationDuration = 1000;
    }

    highlightCodeLine(8);

    document.getElementById("textM2").remove();
    document.getElementById("textB").remove();
    document.getElementById("textC").remove();
    document.getElementById("lineM2").remove();

}

function button21(isDirectCall, isAnimated){

    index = 20;
    var newIndex = index;
    var animationDuration = 0;
    paintBubble();

    if(isDirectCall){
        initialize();
        for(let i = 0; i <= newIndex; i++){
            if(i === newIndex){
                eval(pageArrayAnimated[i]);
                break;
            }
            eval(pageArray[i]);
        }
        return;
    }

    if(isAnimated){
        animationDuration = 1000;
    }

    highlightCodeLine(3);

    document.getElementById("textX").remove();
    document.getElementById("textM1").remove();
    document.getElementById("lineM1").remove();

}

function button22(isDirectCall, isAnimated){

    index = 21;
    var newIndex = index;
    var animationDuration = 0;
    paintBubble();

    if(isDirectCall){
        initialize();
        for(let i = 0; i <= newIndex; i++){
            if(i === newIndex){
                eval(pageArrayAnimated[i]);
                break;
            }
            eval(pageArray[i]);
        }
        return;
    }

    if(isAnimated){
        animationDuration = 1000;
    }

    initialize();

    setTimeout( function() {

        var logoTitle = 'Thanks For Attention';
        var logoRandom = '';
        var logoTitleContainer = s.text(-950, '55%', '');
        var possible = "-+*/|}{[]~\\\":;?/.><=+-_)(*&^%$#@!)}";
        logoTitleContainer.attr({
            fontSize: 200,
            fontFamily: 'Orbitron',
            fontWeight: '600'
        });

        function generateRandomTitle(i, logoRandom) {
            setTimeout( function() {
                logoTitleContainer.attr({ text: logoRandom });
                }, i*120 );
        }

        for( var i=0; i < logoTitle.length+1; i++ ) {
            logoRandom = logoTitle.substr(0, i);
            for( var j=i; j < logoTitle.length; j++ ) {
                logoRandom += possible.charAt(Math.floor(Math.random() * possible.length));
            }
            generateRandomTitle(i, logoRandom);
            logoRandom = '';
        }}, 200 );

    var g = s.g();
    var image = g.image("assets/smile.svg", 1200, 70, 300,300 );

}