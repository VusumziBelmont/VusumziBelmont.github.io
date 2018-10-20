/**
 * 
 * @author Vusumzi Belmont
 * @description controlador para la seccion about, se encarga del control coroussell de tecnologias
 * de consumir el archivo Json y convertirlo en objetos
 * 
 * 
 * 
*/

function aboutController($scope, $http) {
    $scope.$emit('controllerStarted');
    this.skills = [];
    this.primaryLangs = [];
    this.setPrimaryLangs = function(langs){
        this.primaryLangs = langs;
    };
    this.categoryIndx = 0;
    this.categories = [
        {
            name: "Frontend",
            category: "front",
            tecs: []
        },
        {
            name: "Backend",
            category: "back",
            tecs: []
        },
        {
            name: "Bases de datos",
            category: "db",
            tecs: []
        },
        {
            name: "Tecnologias",
            category: "tecs",
            tecs: []
        }
    ];
    this.nextCat = function(){
        if(this.categoryIndx++ >= this.categories.length-1){
            this.categoryIndx = 0;
        }

        // console.log(this.categoryIndx);
        
    }
    this.prevCat = function(){
        if((this.categoryIndx--) <= 0){
            this.categoryIndx = this.categories.length-1;
        }

        // console.log(this.categoryIndx);
        
    }


    var aboutCtrl = this;
    function filterCategory(arr, cat){
        var resArr = [];
        for(var i=0; i<arr.length; i++){
            if(arr[i].categories === cat){
                resArr.push(arr[i]);
            }
        }
        return resArr;
    }
    
    $http.get('data/program-skills.json')
        .then(function(res){
            //console.log(res.data);
            aboutCtrl.skills = res.data;
            var resArr = []
            for(var i=0; i < aboutCtrl.skills.length; i++ ){
                if(aboutCtrl.skills[i].isMainSkill){
                    resArr.push(aboutCtrl.skills[i]);
                }
            }

            for(var i=0; i<aboutCtrl.categories.length; i++){
                aboutCtrl.categories[i].tecs = filterCategory( aboutCtrl.skills, aboutCtrl.categories[i].category );
                //console.log(aboutCtrl.categories[i].tecs);
                
            }
            //console.log(aboutCtrl.categories);
            
            //console.log(resArr);
            aboutCtrl.setPrimaryLangs(resArr);
        });
    
    $scope.$evalAsync(function() { $scope.$emit('controllerFinished') });
}

mainApp.controller('AboutController', ['$scope', '$http', aboutController]);

////////////////////////////////////////////////////


window.setTimeout(function(){

var gamePrev = document.getElementById("game-prev");

var gameSizer = $("#game-prev");
var canvasWrapper = $("#canvas-wrapper");

gameSizer.attr("width",canvasWrapper.width())
gameSizer.attr("height",canvasWrapper.height());



$c = new CanvasHead(gamePrev);


var shipSize = 70;
var shipSpriteFront = "img/spaceship/e082fc2df9a92be044b6308800339622.png";
var shipSpriteRight = "img/spaceship/40ac9396208891d772c5302467d24838.png";
var shipSpriteLeft = "img/spaceship/40ac9396208891d772c5302467d24838I.png";
// var bulletSprite = "plasma.png";
var maxEnergy = 500;
var energy = maxEnergy;
var energyRate = 0.2;
var maxHp = 100;
var hp = maxHp;
var hpRate = 0;
var shipSprite = shipSprite;
var bullets = [];
var volume = 80;
var music = document.getElementById("music");
var bulletSpeed = 5;
var shootingRate = 3;
var shootingCost = 15;
//var shotSound = new Audio('blaster.mp3');
var maxShots = 6;
var shotIndx = 0;
var drag = 20;

function drawShip( x,y ){
    $c.drawImage(shipSprite,x,y,shipSize,shipSize);
}


// var enBar = document.getElementById("energy");
// function updateEnergy(){
//     var pr = (energy/maxEnergy) * 100;
//     if(energy<maxEnergy){
//         energy+= energyRate;
//     }
//     enBar.innerHTML = '<h3>Energy</h3>\
//     <div class="progress" style="height: 10px; width:100%">\
//         <div class="progress-bar" role="progressbar" style="width: '+pr+'%;" aria-valuenow="'+pr+'" aria-valuemin="0" aria-valuemax="100"></div>\
//     </div>';
// }

// var hpBar = document.getElementById("hp");
// function updateHp(){
//     var pr = (hp/maxHp) * 100;
//     if(hp<maxHp){
//         hp+= hpRate;
//     }
//     hpBar.innerHTML = '<h3>Energy</h3>\
//     <div class="progress" style="height: 10px; width:100%">\
//         <div class="progress-bar bg-danger" role="progressbar" style="width: '+pr+'%;" aria-valuenow="'+pr+'" aria-valuemin="0" aria-valuemax="100"></div>\
//     </div>';
// }

// var volControl = document.getElementById("volume");
// function updateVolume(){
//     volume = volControl.value;
//     music.volume = volume/100;
// }

// function drawShot(x, y){
//     $c.strokeWeight(4);
//     //$c.line(x,y,x,y+10);
//     $c.drawImage(bulletSprite,x,y,30,70);
//     $c.strokeWeight(1);
// };

// var bullet = function(posX, posY){
//     this.posX = posX;
//     this.posY = posY;
// };


// var shoot = function(x,y){
    
//     if(shotIndx === maxShots){ shotIndx=0; };
    
//     if((energy)>shootingCost){
//         bullets[shotIndx] = new bullet(x,y);
//         energy-=shootingCost;
//         shotIndx++;
//         var shotSound = new Audio('blaster.mp3');
//         shotSound.volume = volume/100;
//         shotSound.play();
//         delete shotSound;
//     }
    
    
// };

var xPos = 0;
var yPos = 0;
var dX = 0;
var dY = 0;


$c.draw = function(){
    dX = (window.mouseX-150) - xPos;
    dY = $c.mouseY - yPos;
    xPos += (dX/drag);
    yPos += (dY/(drag*2));

    if(dX>40){
        shipSprite = shipSpriteRight;
    }else if(dX<40){
        shipSprite = shipSpriteLeft;
    }else{
        shipSprite = shipSpriteFront;
    }

    // updateEnergy();
    // updateHp();
    // updateVolume();

    
    // $c.mouseReleased = function(){
    //     shoot(xPos, yPos);
    // }

    $c.clearCanvas();
    $c.fill("#ff0000");
    drawShip(xPos - shipSize / 1, 20);
    //$c.ellipse(0,0,50,50);

    // bullets.forEach(function(e,i){
    //     drawShot(e.posX,e.posY-=bulletSpeed);
    // });
};

}, 2000);