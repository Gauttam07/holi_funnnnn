const slider=document.querySelector(".slider");
const slides=document.querySelectorAll(".slide");
const nextBtn=document.getElementById("nextBtn");
const prevBtn=document.getElementById("prevBtn");
const startBtn=document.getElementById("startBtn");
const bgMusic=document.getElementById("bgMusic");

let currentIndex=0;

function updateSlider(){
slider.style.transform=`translateX(-${currentIndex*100}vw)`;
}

nextBtn.onclick=()=>{
if(currentIndex<slides.length-1){
currentIndex++;
updateSlider();
}
};

prevBtn.onclick=()=>{
if(currentIndex>0){
currentIndex--;
updateSlider();
}
};

startBtn.onclick=()=>{
currentIndex=1;
updateSlider();
bgMusic.play().catch(()=>{});
};

/* SLIDE 2 CLICK ANYWHERE */
const slide2=document.querySelector(".slide-2");
slide2.addEventListener("click",()=>{
if(currentIndex===1){
currentIndex=2;
updateSlider();
}
});

/* MINI GAME */
const gameArea=document.getElementById("gameArea");
const colorCounter=document.getElementById("colorCounter");
const gameMessage=document.getElementById("gameMessage");
const gameNextBtn=document.getElementById("gameNextBtn");

let splashCount=0;
const limit=15;

const colors=["#ff4e50","#fc913a","#f9d423","#a8e063","#56ccf2","#bb6bd9"];

gameArea.addEventListener("click",(e)=>{

if(splashCount>=limit) return;

splashCount++;
colorCounter.textContent=`Colors Spread: ${splashCount}`;

const splash=document.createElement("div");

splash.style.position="absolute";
splash.style.width="120px";
splash.style.height="120px";
splash.style.borderRadius="50% 40% 60% 30%";
splash.style.background=colors[Math.floor(Math.random()*colors.length)];
splash.style.left=`${e.clientX-60}px`;
splash.style.top=`${e.clientY-60}px`;
splash.style.opacity="0.9";
splash.style.zIndex="2";

gameArea.appendChild(splash);

/* AUTO REMOVE AFTER 10 SECONDS */
setTimeout(()=>{
splash.style.transition="1.5s ease";
splash.style.opacity="0";
setTimeout(()=>splash.remove(),1500);
},10000);

if(splashCount===limit){
gameMessage.style.display="block";
gameNextBtn.style.display="inline-block";
}

});

gameNextBtn.addEventListener("click",()=>{
currentIndex=3;
updateSlider();
});

/* SECRET MESSAGE */
const secretBubble=document.getElementById("secretBubble");
const finalMessage=document.getElementById("finalMessage");
const typeText=document.getElementById("typeText");

const message=`Holi is called the festival of colors 🎨,
but some colors don’t come from gulaal. 🌸
They come from people. 💛
From the way one person enters your life
and suddenly everything feels softer. ✨
You don’t even realise
when their name starts sounding like comfort. 🌷
When their presence starts feeling like home. 🏡
You don’t need to touch them,
don’t need to stand close,
don’t even need to say anything. 🤍
Still, their existence adds color
to your ordinary days. 🌈
Some people don’t throw colors on you,
they become the color of your life. 🎨💞
You start smiling differently 😊,
thinking differently 💭,
feeling differently 💫,
and you don’t even know when it happened.
Holi lasts one day,
but the color someone leaves on your heart
sometimes never fades. 💖✨

Happy Holiii guyssss ✨🔫`;

let typingStarted=false;

secretBubble.onclick=()=>{
if(typingStarted) return;
typingStarted=true;

finalMessage.style.display="block";

let i=0;
function typeWriter(){
if(i<message.length){
typeText.innerHTML+=message.charAt(i);
i++;
setTimeout(typeWriter,30);
}
}
typeWriter();
};