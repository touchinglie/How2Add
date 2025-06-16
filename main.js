var innodeNum = 1;
var inputUpnode = document.getElementsByClassName("main")[0];

function AddinputNode() {
    var innode = document.createElement("input");
    let basicnodeID = "Input";
    let NowID = String(innodeNum);
    let NewnodeID = basicnodeID.concat(NowID);
    innode.id = NewnodeID;
    inputUpnode.appendChild(innode);
    innodeNum++;
}

AddinputNode();
var Addsymbnode = document.createElement("a");
Addsymbnode.innerHTML = "+";
inputUpnode.appendChild(Addsymbnode);
AddinputNode();
var Equalsymbnode = document.createElement("a");
Equalsymbnode.innerHTML = "=";
inputUpnode.appendChild(Equalsymbnode);


document.getElementsByClassName("btn")[0].onclick = function () {
    var firstnode = document.getElementById("Input1");
    var secnode = document.getElementById("Input2");
    var Result = Number(firstnode.value) + Number(secnode.value);
    var Findnode = document.getElementById("res");
    if (!Findnode) {
        var Resnode = document.createElement("a");
        Resnode.id = "res";
        Resnode.innerHTML = String(Result);
        inputUpnode.appendChild(Resnode);
    }
    else {
        Findnode.innerHTML = String(Result);
    }
}