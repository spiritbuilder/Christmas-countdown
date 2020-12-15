window.onload= function(){
  var first = 1;
  document.getElementById("ori").style.display="none";
  var x = setInterval(function(){
    if(first==1){
    document.getElementById("aa").style.display="block";
    document.getElementById("ab").style.display="none";
    document.getElementById("ac").style.display="none";
    first+=1;
    }else if(first==2){
      
      document.getElementById("aa").style.display="none";
      document.getElementById("firstbg").style.backgroundImage="url(./race.jpg)";
      document.getElementById("ab").style.display="block";
      document.getElementById("ac").style.display="none";
      first+=1;
    }else if(first==3){
        document.getElementById("aa").style.display="none";
        document.getElementById("ab").style.display="none";
        document.getElementById("ac").style.display="block";
        first+=1;
       
     }else if(first==4){
          document.getElementById("aa").style.display="none";
          document.getElementById("ab").style.display="none";
          document.getElementById("ac").style.display="none";
          document.getElementById("firstbg").style.backgroundImage="url(./merryxmas2.jpg)";
          
          first+=1
      }else if(first==5){
            document.getElementById("firstbg").style.display="none";
            document.getElementById("firstbg").style.margin="none";
            document.getElementsByClassName("containerAll").display="flex";
            
            secondary();
            
            
            
          }
  },3000);



  
  

}
function secondary(){
  document.getElementById("ori").style.display="flex";
var daybox = document.getElementById("dayValue");
var hourbox = document.getElementById("hourValue");
var minbox = document.getElementById("minValue");
var secbox = document.getElementById("secValue");
// Set the date we're counting down to
var currentYear = 2020
var countDownDate = new Date(`Dec 25, ${currentYear} 00:00:00`).getTime();

// Update the count down every 1 second
 setInterval(function() {

  // Get today's date and time
  var now = new Date().getTime();
    var boxingday = new Date(`Dec 26, ${currentYear} `)
  // Find the distance between now and the count down date
  var distance = countDownDate - now;
    
  // Time calculations for days, hours, minutes and seconds
  var days = Math.floor(distance / (1000 * 60 * 60 * 24));
  var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  var seconds = Math.floor((distance % (1000 * 60)) / 1000);
    
  // Output the result in an element with id="demo"
  
  daybox.innerText= days;
  hourbox.innerText= hours;
  minbox.innerText= minutes;
  secbox.innerText= seconds;
  // If the count down is over, write some text 
  if (distance <= 0) {
    currentYear+=1;
  }
}, 1000);
var topanime = 1;
setInterval(function(){
  if(topanime==1){
    document.getElementById("countdn").style.color="pink";
    document.getElementById("to").style.color="pink";
    document.getElementById("christmas").style.color="pink";
    topanime+=1;

  } else if(topanime==2){
    document.getElementById("countdn").style.color="gold";
    document.getElementById("to").style.color="gold";
    document.getElementById("christmas").style.color="gold";
    topanime+=1;

  } else if(topanime==3){
    document.getElementById("countdn").style.color="red";
    document.getElementById("to").style.color="red";
    document.getElementById("christmas").style.color="red";
    topanime+=1;

  }else if(topanime==4){
    document.getElementById("countdn").style.color="rgb(100,255,250)";
    document.getElementById("to").style.color="rgb(100,255,250)";
    document.getElementById("christmas").style.color="rgb(100,255,250)";
    topanime=1;

  }

},500);
}
function firstwords(){

var first = 1;
var x = setTimeout(function(){
  if(first==1){
  document.getElementById("aa").style.display="block";
  document.getElementById("ab").style.display="none";
  document.getElementById("ac").style.display="none";
  first+=1;
  }else if(first==2){
    document.getElementById("aa").style.display="none";
    document.getElementById("ab").style.display="block";
    document.getElementById("ac").style.display="none";
    first+=1;
    }else if(first==3){
      document.getElementById("aa").style.display="none";
      document.getElementById("ab").style.display="none";
      document.getElementById("ac").style.display="block";
     
      }else if(first==4){
        document.getElementById("aa").style.display="none";
        document.getElementById("ab").style.display="none";
        document.getElementById("ac").style.display="none";
        document.getElementById("firstbg").style.backgroundImage="./merryxmas2.jpg"
        clearInterval(firstwork);
        first+=1
        }else if(first==5){
          document.getElementById("firstbg").style.display="none";
          document.getElementsByClassName("containerAll").display="flex";
          
          
        }
},2000);


}