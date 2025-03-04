const progressBar = document.getElementById("progress-bar");
const ctrlIcon = document.getElementById("ctrlIcon");


function changeAudio(audioId,faplay){
    let allAudios = document.querySelectorAll("audio");
    let song = document.getElementById(audioId); // Get the <audio> element
    // Pause all audio elements
    allAudios.forEach(audio => {
        if (!audio.paused) {
            audio.pause();
            audio.currentTime = 0; // Reset playback to start
        }
    });
   
song.onloadedmetadata=function(){
    progressBar.max=song.duration;
    progressBar.value=song.currentTime;
}

ctrlIcon.addEventListener("click" ,function(){
    
    if(ctrlIcon.classList.contains("fa-pause")){
        song.pause();
        ctrlIcon.classList.remove("fa-pause");
        ctrlIcon.classList.add("fa-play");
        
    }else{
        song.play();
        ctrlIcon.classList.add("fa-pause");
        ctrlIcon.classList.remove("fa-play");
    }
    
})


if(song.play()){
    setInterval(() => {
        progressBar.value=song.currentTime;
    }, 500);
}

progressBar.onchange=function(){
    song.play();
    song.currentTime=progressBar.value;
    ctrlIcon.classList.add("fa-pause");
        ctrlIcon.classList.remove("fa-play");
}
}



