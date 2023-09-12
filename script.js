
var counter = 0;
r = 0;
g = 0;
b = 0;

function randomcolor() {
    return Math.floor(Math.random() * 255);
}

function randomleft() {
    lefts = Math.floor(Math.random() * 1680);
    if (lefts < 150){
        randomleft()
    }
    return lefts;
}

function randomtop() {
    tops = Math.floor(Math.random() * 850);
    if (tops < 80){
        randomtop()
    }
    return tops;
}

function randomangle(){
    return Math.floor(Math.random() * 365);
}


function randomize(){
    
    counter++;
    document.getElementById('count').innerHTML = counter;

    r = randomcolor();
    g = randomcolor();
    b = randomcolor();
    document.getElementById('box').style.backgroundColor = 'rgba('+ r + ',' + g + ',' + b + '\)';
    
    document.getElementById('box').style.left = randomleft() + 'px';
    document.getElementById('box').style.top = randomtop() + 'px';
    document.getElementById('box').style.rotate = randomangle() + 'deg';

}