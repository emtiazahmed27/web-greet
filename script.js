//clock
function clock(){
    var date= new Date();
    var hours=date.getHours();
    var seconds=date.getSeconds();
    var minutes=date.getMinutes();

    hours=updateTimes(hours);
    minutes=updateTimes(minutes);
    seconds=updateTimes(seconds);

    

    var mid_day=(hours>=12)? 'PM':'AM';

    const timeH=document.querySelector(".hours");
    const timeM=document.querySelector(".minutes");
    const timeS=document.querySelector(".seconds");
    const timeAMPM=document.querySelector(".mid_day");

    timeH.innerHTML= hours;
    timeM.innerHTML= minutes;
    timeS.innerHTML= seconds;
    timeAMPM.innerHTML= mid_day;

    var time;
    time=setTimeout(()=>{
        clock();
    },1000);

    var greeting=document.querySelector(".greeting");

    if(hours<12){
        greeting.innerHTML="Hi There Good Morning";
   }
   if(hours>=12 && hours<=18){
       greeting.innerHTML="Hi There Good Afternoon";
   }
   if(hours>=18 && hours<=24){
       greeting.innerHTML="Hi There Good Evening";
   }
   if(hours>=20 && hours<=24){
    greeting.innerHTML="Hi There Good Night";
}

}
function updateTimes(k){
    if (k<10)    return "0"+k;
    else         return k;
}

clock();