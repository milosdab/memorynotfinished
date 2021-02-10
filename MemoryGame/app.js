//timer////
let seconds = 0;
let minutes = 0;


showtime = document.getElementById("showtime");

function timer(){
       time = setInterval(function(){
           
           seconds++;
           if(seconds === 60){
               minutes++;
               seconds = 0;
           }
           showtime.innerHTML ="Timer: " + minutes + ":" + seconds ;
       },1000)
}

//click///
let clicker = document.getElementById("clicker");
let countClicks = 0;

//pause///
let pause = document.querySelector(".pause");
let pauseBtn1 = document.getElementById("pbtn1");
let pauseBtn2 = document.getElementById("pbtn2");
let pauseBtn3 = document.getElementById("pbtn3");
let modal = document.getElementById("mod1");

pauseBtn1.addEventListener("click",function(){
     let modal = document.getElementById("mod1");
     
     modal.classList.add("modal");
     memory1.style.display = "none";
     window.clearInterval(time);
     let modalbox = document.createElement("div");
     modalbox.setAttribute("class","modalBox");
     let modalboxdiv = document.createElement("div");
     modalboxdiv.setAttribute("class","modalBoxDiv");

     let returnbtn = document.createElement("button");
     returnbtn.setAttribute("class","pausebtn");
     returnbtn.innerHTML = "Continue"

     let exitbtn =  document.createElement("button");
     exitbtn.setAttribute("class","pausebtn")
     exitbtn.innerHTML = "Exit";

     exitbtn.addEventListener("click",function(){
           window.location.reload();
     });
     
     returnbtn.addEventListener("click",function(){
        memory1.style.display = "flex";
        modal.classList.remove("modal");
        modalbox.style.display = "none";
        
        
        timer();
     });
     let restartbtn = document.createElement("button");
     restartbtn.setAttribute("class","pausebtn");
     restartbtn.innerHTML = "Restart";
     restartbtn.addEventListener("click",function(){
        mCards.forEach(card =>{
            card.classList.remove("flip");
        })
        memory1.style.display = "flex";
        modal.classList.remove("modal");
        modalbox.style.display = "none";
        minutes = 0;
        seconds = 0;
        countClicks = 0;
        clicker.innerHTML = " ";
        timer();
        opened = [];
        mCards.forEach(card => card.addEventListener('click',flipCard));
        shuffle();
     })
     
     modalboxdiv.appendChild(exitbtn);
     modalboxdiv.appendChild(restartbtn);
     modalboxdiv.appendChild(returnbtn);
     modalbox.appendChild(modalboxdiv);
     modal.appendChild(modalbox);
    
})
//    lvl2 pausebtn// 

   pauseBtn2.addEventListener("click",function(){
      
      let modal2 = document.getElementById("mod1");
      modal2.classList.add("modal");
      memory2.style.display = "none";
      window.clearInterval(time);
      let modalbox = document.createElement("div");
      modalbox.setAttribute("class","modalBox");
      let modalboxdiv = document.createElement("div");
      modalboxdiv.setAttribute("class","modalBoxDiv");

      let returnbtn = document.createElement("button");
      returnbtn.setAttribute("class","pausebtn");
      returnbtn.innerHTML = "Continue";  
      returnbtn.addEventListener("click",function(){
        memory2.style.display = "flex";
        modal2.classList.remove("modal");
        modalbox.style.display = "none";
        
        
        timer();
     });



      let restartbtn = document.createElement("button");
      restartbtn.setAttribute("class","pausebtn");
      restartbtn.innerHTML = "Restart";
      restartbtn.addEventListener("click",function(){
        mCards.forEach(card =>{
            card.classList.remove("flip");
        })
        memory2.style.display = "flex";
        modal2.classList.remove("modal");
        modalbox.style.display = "none";
        minutes = 0;
        seconds = 0;
        countClicks = 0;
        clicker.innerHTML = " ";
        timer();
        opened = [];
        mCards.forEach(card => card.addEventListener('click',flipCard));
        shuffle();
     })



      let exitbtn = document.createElement("button");
      exitbtn.setAttribute("class","pausebtn");
      exitbtn.innerHTML = "Exit";
      exitbtn.addEventListener("click",function(){
        window.location.reload();
  
        });

      

      

      modalboxdiv.appendChild(exitbtn);
      modalboxdiv.appendChild(restartbtn);
      modalboxdiv.appendChild(returnbtn);
      modalbox.appendChild(modalboxdiv);
      modal2.appendChild(modalbox);
   })
// pausebtn 3//
    
     pauseBtn3.addEventListener("click",function(){
        let modal3 = document.getElementById("mod1");
        modal3.classList.add("modal");
        memory3.style.display = "none";
        window.clearInterval(time);
        let modalbox = document.createElement("div");
        modalbox.setAttribute("class","modalBox");
        let modalboxdiv = document.createElement("div");
        modalboxdiv.setAttribute("class","modalBoxDiv");

        let returnbtn = document.createElement("button");
        returnbtn.setAttribute("class","pausebtn");
        returnbtn.innerHTML = "Continue";  
        returnbtn.addEventListener("click",function(){
          memory3.style.display = "flex";
          modal3.classList.remove("modal");
          modalbox.style.display = "none";
          
          
          timer();
       });

       let restartbtn = document.createElement("button");
      restartbtn.setAttribute("class","pausebtn");
      restartbtn.innerHTML = "Restart";
      restartbtn.addEventListener("click",function(){
        mCards.forEach(card =>{
            card.classList.remove("flip");
        })
        memory3.style.display = "flex";
        modal3.classList.remove("modal");
        modalbox.style.display = "none";
        minutes = 0;
        seconds = 0;
        countClicks = 0;
        clicker.innerHTML = " ";
        timer();
        opened = [];
        mCards.forEach(card => card.addEventListener('click',flipCard));
        shuffle();
     });

        let exitbtn = document.createElement("button");
        exitbtn.setAttribute("class","pausebtn");
        exitbtn.innerHTML = "Exit";
        exitbtn.addEventListener("click",function(){
        window.location.reload();
  
    });
       modalboxdiv.appendChild(exitbtn);
       modalboxdiv.appendChild(restartbtn);
       modalboxdiv.appendChild(returnbtn);
       modalbox.appendChild(modalboxdiv);
       modal3.appendChild(modalbox);

     });



// choose///
let choose = document.querySelector(".choose");
let memory1 = document.querySelector(".memory1");
let memory2 = document.querySelector(".memory2");
let memory3 = document.querySelector(".memory3");
let lvl1 = document.getElementById('lvl1');
let lvl2 = document.getElementById('lvl2');
let lvl3 = document.getElementById('lvl3');
let m1 = document.getElementById("m1");
let m2 = document.getElementById("m2");
let m3 = document.getElementById("m3");
lvl1.addEventListener("click",function(){
    memory1.style.display = "flex";
    memory1.classList.add("activediv");
    choose.style.display = "none";
    shuffle();
    timer();
    pause.style.display = "flex";
    pauseBtn2.style.display = "none";
    pauseBtn3.style.display = "none";
});
lvl2.addEventListener("click",function(){
    memory2.style.display = "flex";
    memory2.classList.add("activediv");
    choose.style.display = "none";
    memory1.style.display = "none";
    m1.style.display = "none";
    shuffleTwo();
    timer();
    pause.style.display = "flex";
    pauseBtn3.style.display = "none";
    pauseBtn1.style.display = "none";
});
lvl3.addEventListener("click",function(){
    memory3.style.display = "flex";
    memory3.classList.add("activediv");
    choose.style.display = "none";
    memory1.style.display = "none";
    memory2.style.display = "none";
    m1.style.display = "none";
    shuffleThree();
    timer();
    pause.style.display = "flex";
    pauseBtn1.style.display = "none";
    pauseBtn2.style.display = "none";
})






/////// memory //////////////
const mCards = document.querySelectorAll('.cards');
let hasFlipped = false;
let firstCard;
let secondCard;
let lockgame = false;
let opened = [];
let counter = 1;





function flipCard(){
    if(lockgame) return;
    if(this === firstCard) return;
   // console.log('click')
    //console.log(this);
    this.classList.toggle('flip');
        countClicks++
        clicker.innerHTML ="Click count: " + countClicks;
    if (!hasFlipped) {
        hasFlipped = true;
        firstCard = this;
        
    }else {
        hasFlipped = false;
        secondCard = this;

        checkMatching();
        
    }
}
function checkMatching (){
    if (firstCard.dataset.color === secondCard.dataset.color){
        firstCard.removeEventListener("click",flipCard);
        secondCard.removeEventListener("click",flipCard);
        resetClick();
        opened.push(counter);
        console.log(opened);
        gameEnd();
    }else {
        lockgame = true;
        setTimeout(() => {
            firstCard.classList.remove('flip');
        secondCard.classList.remove('flip');

        resetClick();
        }, 1500);
        
    }
}
function resetClick(){
    hasFlipped = false;
    lockgame = false;
    firstCard = null;
    secondCard = null;
}
function shuffle(){
    mCards.forEach(card =>{
        let random = Math.floor(Math.random()*16);
        card.style.order = random;
    })
}
function shuffleTwo(){
    mCards.forEach(card =>{
        let random = Math.floor(Math.random()*32);
        card.style.order = random;
        
    })
}
function shuffleThree(){
    mCards.forEach(card =>{
        let random = Math.floor(Math.random()*64);
        card.style.order = random;
    })
}

function gameOver1(){
     modal.classList.add("modal");
     memory1.style.display = "none";
     window.clearInterval(time);
     let modalbox = document.createElement("div");
     modalbox.setAttribute("class","modalBoxGameOver");
     
     let shareDiv = document.createElement("div");
     shareDiv.style.display = "flex";
     shareDiv.style.justifyContent = "center";
     let share = document.createElement("h1");
     share.innerHTML = "Share your score";

     let buttonsDiv = document.createElement("div");
     buttonsDiv.style.display = "flex";
     buttonsDiv.style.justifyContent =  "center";
     let fbbutton = document.createElement("i");
     fbbutton.setAttribute("class","fa fa-facebook");
     fbbutton.addEventListener("click",showScore);
        
     let twbutton = document.createElement("i");
     twbutton.setAttribute("class","fa fa-twitter");
     twbutton.addEventListener("click",showScore);
       
     let dntshare = document.createElement("button");
     dntshare.setAttribute("class","dntshare");
     dntshare.innerHTML = "Don't share";
     dntshare.addEventListener("click",showScore);
     

     shareDiv.appendChild(share);
     modalbox.appendChild(shareDiv);
     buttonsDiv.appendChild(fbbutton);
     buttonsDiv.appendChild(twbutton);
     buttonsDiv.appendChild(dntshare);
     modalbox.appendChild(buttonsDiv)
     modal.appendChild(modalbox);

     function showScore(){
         modalbox.style.display = "none";
     }
}



function gameEnd(){

    if(memory1.classList.contains("activediv") && opened.length === 8){
       gameOver1();
    }else if (memory2.classList.contains("activediv") && opened.length === 18) {
        alert("game over");
    }else if (memory3.classList.contains("activediv") && opened.length === 32){
        alert("game over")
    }


    
}



mCards.forEach(card => card.addEventListener('click',flipCard));


