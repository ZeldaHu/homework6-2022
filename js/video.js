var video=document.querySelector("#player1");

window.addEventListener("load", function() {
	console.log("Good job opening the window");
	video.autoplay = false;
	video.loop = false;

});

document.querySelector("#play").addEventListener("click", function() {
	console.log("Play Video");
	video.play();
	document.querySelector("#volume").innerHTML = video.volume*100+"%";
	/* video.volumn *=100+"%" */
});

document.querySelector("#pause").addEventListener("click", function() {
	console.log("Pause Video");
	video.pause();
});

document.querySelector("#slower").addEventListener("click", function() {
	console.log("Slow Down Video");
	video.playbackRate *= 0.95;
	console.log("Speed is", video.playbackRate);
});

document.querySelector("#faster").addEventListener("click", function() {
	console.log("Speed Up Video");
	video.playbackRate /=0.95;
	console.log("Speed is", video.playbackRate);
});

document.querySelector("#skip").addEventListener("click", function() {
	console.log("Skip Ahead");
	video.currentTime +=15;
	if (video.currentTime >=video.duration)
		video.currentTime = 0;
	console.log("Video current time is", video.currentTime);
});

document.querySelector("#mute").addEventListener("click", function() {
	if(mutestatus == true){
		mutestatus = false;
		video.volume = 0;
		document.querySelector("#mute").innerHTML = "Unmute";
		console.log("Unmuted");
	}
	else{
		mutestatus = true;
		video.volume = 100;
		document.querySelector("#mute").innerHTML = "Mute";
		console.log("Muted");

	}
});

document.getElementById("slider").addEventListener("input",function(){
	currentvolume = document.getElementById("slider").value;
	video.volume = currentvolume/100;
	document.getElementById("volume").innerHTML = currentvolume + "%";
	console.log(video.volume);

});

document.getElementById("vintage").addEventListener("click",function(){
	video.classList.add("oldSchool");

});

original=document.getElementById("orig").addEventListener("click",function(){
	video.classList.remove("oldSchool");
});


