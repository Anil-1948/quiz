
let s=document.getElementById("start");
let btn=document.getElementById("but");
let btn2=document.getElementById("stop");
let btn3=document.getElementById("reset");
let res;
let count=0;
btn.addEventListener('click',start);

function start(){
    btn.disabled=true
    let sec=0;
    let min=0;
    let h=0;
   res= setInterval(change,10)
    
    function change(){
        
        sec++;
    if(sec ==1000){
        min+=1;
        sec=0;
    }
     if(min==60){
        h+=1
        min=0;
    }
    if(min<10){
        min_="0"+min;
    }
    else{
        min_=min;
    }
    if(h<10){
        h_="0"+h;
    }
    else{
        h_=h;
    }
    
    s.innerText=`${h_} : ${min_} : ${sec}`
    
}

    }
    btn2.addEventListener('click',stop1)
    function stop1(){
        clearInterval(res);
        btn.disabled=false
    }
    btn3.addEventListener('click',reset)
    function reset(){
        clearInterval(res);
        btn.disabled=false
        s.innerText=`${"00"} : ${"00"} : ${"00"}`
    }
    









// let m=document.getElementById("email");
// let p=document.getElementById("add");
// setInterval(change,12345678)
// function change(){
// let code1="#";
// let code2="#f"
// for(var i=0;i<6;i++){
//     code1+=Math.floor(Math.random()*10);
// }
// for(let i=0;i<5;i++){
//     code2+=Math.floor(Math.random()*10);
// }
// let d=[code1,code2]

// document.body.style.backgroundColor=d[Math.floor(Math.random()*d.length)]
// }
/*<input type="color" id ="email" value ="super much">
    <p id="add">it wrong</p>*/
