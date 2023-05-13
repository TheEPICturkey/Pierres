function myClock() {
    setTimeout(function() {
      const d = new Date();
      const n = d.toDateString() + " " + d.toLocaleTimeString();
      document.getElementById("clock").innerHTML = n; 
      myClock();
    }, 1000)
  }
  
  function randomBg(){
    const body = document.getElementById("bodycontent");
    const url = 'url(' + images[Math.floor(Math.random() * images.length)] + ')';
    body.style.background = 'linear-gradient( rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5) ),' + url;
    body.style.backgroundSize= 'cover';
  }
  
  randomBg();
  myClock();
  