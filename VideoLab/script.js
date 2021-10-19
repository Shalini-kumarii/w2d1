function domute(){
    var playobj=document.getElementById("video");
    playobj.muted=true;
    playobj.play();
    console.log("muted");
}
function dounmute(){
    var playobj=document.getElementById("video");
    playobj.muted=false;
    playobj.pause();
    console.log("unmuted");
}