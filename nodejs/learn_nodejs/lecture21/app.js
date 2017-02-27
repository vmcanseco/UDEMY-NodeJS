function change(b){
    b=2;
}

var a=1;
change(a);
console.log(a);

function changeObj(c){
    c.prop1=function(){};
    c.prop2={};
}

var d={};
d.prop1={};

changeObj(d);
console.log(d);