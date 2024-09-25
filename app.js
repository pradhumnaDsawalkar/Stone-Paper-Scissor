const images=document.querySelectorAll(".image");
const msg=document.querySelector("#msg");
const com=document.querySelector(".comscore");
const user=document.querySelector(".userscore");
const btn=document.querySelector("button");
console.log(msg.innerText);
let comScore=0;
let userScore=0;

btn.addEventListener("click",()=>{
    history.go(0);
})
images.forEach((image)=>{
    image.addEventListener("click",(e)=>{
        var random=Math.floor(Math.random()*3+1);
        console.log(e);
        const imageId=image.getAttribute("id");
        let comChoice="";
      if(random===1){
        comChoice="paper";
      }
      else if(random===2){
        comChoice="stone";
      }
      else {
        comChoice="scissor";
      }
      if(comChoice==="paper" && imageId==="scissor"){
         msg.innerText="You Win Scissor cut Paper"; 
         msg.style.backgroundColor="Green";   
         userScore++;
         user.innerText=userScore;
         setTimeout(()=>{
            msg.innerText="Play your Move";
            msg.style.backgroundColor=" rgb(59, 59, 108)"; 
         },2000);    
      }
      else if(comChoice==="paper" && imageId==="stone"){
        msg.innerText="Paper Got Stone"; 
        msg.style.backgroundColor="Red"; 
        comScore++;
        com.innerText=comScore;
        setTimeout(()=>{
           msg.innerText="Play your Move";
           msg.style.backgroundColor=" rgb(59, 59, 108)"; 
        },2000);    
     }
     else if(comChoice==="stone" && imageId==="paper"){
        msg.innerText="You Win Paper Got Stone"; 
        msg.style.backgroundColor="Green";  
        userScore++;
         user.innerText=userScore; 
        setTimeout(()=>{
           msg.innerText="Play your Move";
           msg.style.backgroundColor=" rgb(59, 59, 108)"; 
        },2000);    
     }
     else if(comChoice==="stone" && imageId==="scissor"){
        msg.innerText="Stone broke Scissor"; 
        msg.style.backgroundColor="Red";
        comScore++;
        com.innerText=comScore;   
        setTimeout(()=>{
           msg.innerText="Play your Move";
           msg.style.backgroundColor=" rgb(59, 59, 108)"; 
        },2000);    
     }
     else if(comChoice==="scissor" && imageId==="stone"){
        msg.innerText=" You Win Stone broke Scissor"; 
        msg.style.backgroundColor="Green"; 
        userScore++;
         user.innerText=userScore;  
        setTimeout(()=>{
           msg.innerText="Play your Move";
           msg.style.backgroundColor=" rgb(59, 59, 108)"; 
        },2000);    
     }
     else if(comChoice==="scissor" && imageId==="paper"){
        msg.innerText="Scissor Cut paper"; 
        msg.style.backgroundColor="Red";  
        comScore++;
        com.innerText=comScore; 
        setTimeout(()=>{
           msg.innerText="Play your Move";
           msg.style.backgroundColor=" rgb(59, 59, 108)"; 
        },2000);    
     }
     else{
        msg.innerText="Same choices";
        msg.style.backgroundColor="skyblue";
        
        setTimeout(()=>{
            msg.innerText="Play your Move";
            msg.style.backgroundColor=" rgb(59, 59, 108)"; 
         },2000);    
     }
     

     
            
    })
});