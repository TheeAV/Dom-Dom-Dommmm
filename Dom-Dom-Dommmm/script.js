let button = document.createElement("button");
let btnText = document.createTextNode("Add Square");
button.appendChild(btnText);
document.body.appendChild(button);
let squares = document.querySelectorAll("div.square")
let div = document.createElement("div");
div.className = "Alex"
document.body.appendChild(div);
let squareId = 0;
button.addEventListener("click", newSquare);

function newSquare() {
    let square = document.createElement("div");
    square.id = ++squareId;
    square.className = "square";
    div.appendChild(square);
    squares = document.querySelectorAll("div.square")
    squares.forEach(function (square) {
        square.addEventListener("mouseenter", hover);
        square.addEventListener("mouseleave", remove);
        square.addEventListener("click", changeColor);
        square.addEventListener("dblclick", removeSq);
    });
};

function hover(e) {
    let numId = document.createElement("div");
    e.target.appendChild(numId);
    numId.className = "squareNum";
    numId.textContent = e.target.id;
};

function remove(e) {
    e.target.firstElementChild.remove();
};

function changeColor(e) {
     let colors = ["#800080", "#2E8B57", "#0000FF", "#7FFF00", "#FF0000", "#FF1493"];
    let newColor = colors[Math.floor(Math.random() * colors.length)];
if (e.target.className === "squareNum"){
    e.target.parentNode.style.backgroundColor = newColor;
    } else {
        e.target.style.backgroundColor = newColor
    };
};

function removeSq(e) {
    let loper;
    if (e.target.className === "squareNum") {
        loper = e.target.parentNode;
    } else {
        loper = e.target;
    } if (loper.id %2 === 0){
        if(loper.nextSibling === null){
            alert(" This after Square has gone to the market");
        } else {
            loper.nextSibling.remove();
        }
    }else {
        if (loper.previousSibling === null) {
            alert("This before Square did not come home");
        }else {
            loper.previousSibling.remove();
        };
    };
};
