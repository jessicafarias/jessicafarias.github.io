 src="https://d309knd7es5f10.cloudfront.net/vee/vee.js";
 src="https://zimjs.org/cdn/1.2.3/createjs_min.js";
 src="https://zimjs.org/cdn/10.7.1/zim.js";
 src="https://zimjs.org/cdn/marquee/marquee_04.js";

var scaling = "Creative";
var frame2 = new Frame({scaling,retina:true,
    captureMouse:false,
    rollover:false,
    allowDefault:true
});
frame2.on("ready", function() { // ES6 Arrow Function
    zog("ready from ZIM Frame"); // logs in console (F12 - choose console)

    var stage = frame2.stage;
    var stageW = frame2.width;
    var stageH = frame2.height;

    frame2.canvas.style.position = "absolute";
    frame2.canvas.style.zIndex = 5;
    frame2.canvas.style.pointerEvents = "none";

    var words = ["Jessica", "Farias", "CSS", "HTML", "C#", "Ladder", "PLC", "SolidWorks", "JavaScript", "Java", "SQL", "Visual\nStudio", "VSC", "MySQL", 
    "SASS", "c++", "Photoshop", "Proteus", "SQLite", "Android", 
    "pgadmin", "Google\nCloud"];
    var planets = []; // pool circles
    var count = 0;
    timeout(5, function () {
        interval({min:100, max:500}, function (obj) {
            var JesNum=rand(70,90);
            if (planets.length < words.length) {
                var c = new Circle(JesNum).ble("difference");
                c.label = new Label(words[count], 30, null, white, white, {backgroundColor:black}).centerReg(c);
                planets.push(c);//Javascript
            } else {
                var c = planets[count];
            }
            c.sca(.5).reg(0).center(stage).mov(rand(-stageW,stageW),rand(-stageH,stageH)).bot().ord(1).alp(0).rot(rand(360))
                .animate({alpha:1}, 3000)
                .animate({
                    props:{regX:stageW/2, scale:1.5},
                    time:22000,
                    call:function (target) {
                        target.animate({alpha:0}, 2000);
                    }
                });
            c.color = Pick.choose(["#AF000B70","#E5910070","#EFB41070","#EDCF0B70","#EA6F1770 ","#FAF9FC70"]);
            c.label.rot(-c.rotation+rand(-10,10));
            if (count == words.length-1) {
                obj.pause();
                count = 0;
                timeout(100, function () {
                    obj.pause(false)
                });
            } else {
                count++;
            }
        });
    });

    frame2.on("resize", function () {
        stageW = windowWidth();
        stageH = windowHeight()*(0.005);
    });
});

function Alert(){
    window.alert("Se rediccionará la página a MEGA \npara la descarga (DESCARGA SEGURA)");
    window.location.href = 'https://mega.nz/fm/https://mega.nz/#!3FBmkKaZ!cfqIp-UkP1AQHlxIdl1ka_i7t0xb-SKLxsm8rfUmzsg';
}

function Fade(){
    docment.querySelector('body').classList.add('fadeout');
}
 