function clock(){
    let date = new Date();
    let hours = date.getHours();
    let mintues = date.getMinutes();
    let seconds = date.getSeconds();
    console.log(hours,mins,seconds);
    
    if(hours>=12){
    hours = hours-12;
    console.log(hours);
    }

    let hrs = document.getElementsById("hrs");
    hrs.innerText = hours;
    let mins = document.getElementsById("mins");
    mins.innerText = mins;
    let secs = document.getElementsById("secs");
    secs.innerText = secs;
}

setInterval(()=>{
    clock()
},1000)


let date = new Date();
let hours = date.getHours();

if(hours>=12){
    let ampm = document.getElementById("ampm");
    ampm.innerText = "PM";
}
else{
    let ampm = document.getElementById("ampm");
    ampm.innerText = "AM"; 
}
let button = document.getElementById("button");
button.addEventListener("mouseover", function(){
    button.innerText = "Party Time";
})
button.addEventListener("mouseout", function(){
    button.innerText = "Set Alarm";
})

