let RPM = 0
let Time = 0
function RPMCounter() {
	
		RPM = RPM + 1
		
		document.getElementById("RPM").innerText = RPM / timer
	
}

var timer;
var ele = document.getElementById('timer');

(function (){
  var sec = 0;
  timer = setInterval(()=>{
    timer = +sec;
    sec ++;
  }, 1000) // each 1 second
})() 
