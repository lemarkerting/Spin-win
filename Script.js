function startSpin(){

let time=20;

let timer=setInterval(()=>{

time--;

document.getElementById(
"timer"
).innerText=time;

if(time<=0){

clearInterval(timer);

document.getElementById(
"result"
).innerHTML=
"Result Ready";

}

},1000);

}
