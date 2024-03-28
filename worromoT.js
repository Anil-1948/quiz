const but1=document.getElementById("button1");
const but2=document.getElementById("button2");
const but3=document.getElementById("button3");
const but4=document.getElementById("button4");
const but5=document.getElementById("button5");
const but6=document.getElementById("button6");
const but7=document.getElementById("button7");
const but8=document.getElementById("button8");
const but9=document.getElementById("button9");
const but0=document.getElementById("button0");
const input=document.getElementById("input");
const butnAc=document.getElementById("buttonAC");
const butdel=document.getElementById("buttonDel");
const butin=document.getElementById("buttoninto");
const butpl=document.getElementById("buttonpl");
const butper=document.getElementById("buttonper");
const butby=document.getElementById("buttonby");
const butequ=document.getElementById("buttonequ");
const butmin=document.getElementById("buttonmin");
input.disabled=true;
butin.addEventListener('click',function chnage(){
   
    input.value+="*";
})
butper.addEventListener('click',function chnage(){
    input.value+="%";
})
butpl.addEventListener('click',function chnage(){
    input.value+="+";
})
butby.addEventListener('click',function chnage(){
    input.value+="/";
})
butmin.addEventListener('click',function chnage(){
    input.value+="-";
})
butequ.addEventListener('click',function chnage(){
    input.value=eval(input.value);
})
butdel.addEventListener('click',function change(){
    input.value=input.value.slice(0,-1);
});
butnAc.addEventListener('click',function change(){
    input.value=butnAc.value;
})
but1.addEventListener('click',function change(){
    input.value+=but1.value;
});
but2.addEventListener('click',function change(){
    input.value+=but2.value;
});
but3.addEventListener('click',function change(){
    input.value+=but3.value;
});
but4.addEventListener('click',function change(){
    input.value+=but4.value;
});
but5.addEventListener('click',function change(){
    input.value+=but5.value;
});
but6.addEventListener('click',function change(){
    input.value+=but6.value;
});
but7.addEventListener('click',function change(){
    input.value+=but7.value;
});
but8.addEventListener('click',function change(){
    input.value+=but8.value;
});
but9.addEventListener('click',function change(){
    input.value+=but9.value;
});
but0.addEventListener('click',function change(){
    input.value+=but0.value;
});
console.log("hi")