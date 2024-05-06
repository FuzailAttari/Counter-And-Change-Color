function color(color){
    document.body.style.backgroundColor = color
}

var less = 0;

function inc(){
    less++
    document.getElementById("less").innerHTML = less;
}

function dec(){
    less--
    document.getElementById("less").innerHTML = less;
}
function reset(){
    less = 0;
    document.getElementById("less").innerHTML = less;
}