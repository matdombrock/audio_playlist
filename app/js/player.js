var cached_location_hash = "#";
function SetPlaying(isplaying){
    if(isplaying == "toggle"){
        isplaying = !playing;//need to flip for correct result
    }
    if(!isplaying){
        $("#player")[0].pause();
        $("#play").css("background-image","url('../../app/img/play-button.png')");
        playing = false;
    }else{                                                                            
        $("#player")[0].play();
        $("#play").css("background-image","url('../../app/img/pause-button.png')");
        playing = true;
    }
}
function LoadSong(num,autoplay = true){
    //alert(num);
    //document.location.hash = "";
    // document.location.hash = num;
    /* if(history.pushState) {
        history.pushState(null, null, "#"+num);
    }
    else {
        location.hash = "#"+num;
    }
    cached_location_hash = "#"+num; */
    $('.download-track').text("DOWNLOAD TRACK");
    $("#track-"+current_track).removeClass("highlight-track");
    current_track = num;
    $("#track-"+current_track).addClass("highlight-track");
    console.log("Highlight "+num);
    //alert(num);
    //alert(tracks[0].name);
    var player = $("#player");  
    var source = $("#audio-source");
    source.attr("src",tracks[num].url);
    player[0].pause();
    player[0].load();
    $("#album-art").attr("src",tracks[num].cover_art_url);
    $("#track-name").text(tracks[num].name);
    $("#artist-name").text(tracks[num].artist);
    $("#album-name").text(tracks[num].album);
    $('.download-track').click(function(e) {
        e.preventDefault();  //stop the browser from following
        //alert("To Download the file, just right click this button and \"Save As\".");
        $('.download-track').text("RIGHT CLICK SAVE AS");
    });
    $(".download-track").attr("href",tracks[num].url);
    $(".download-track").attr("download",tracks[num].name+".mp3");
    player[0].oncanplay = function() {
        //alert(player[0].duration);
        $("#scrub")[0].max = player[0].duration*tracking_multi;
        var current_time = ToMinSec(Math.round($("#scrub").val()/tracking_multi));
        var total_time = ToMinSec(Math.round(player[0].duration));
        $("#time-stamp").text(current_time+"/"+total_time);
    };
    SetPlaying(false);
    if(autoplay){
        SetPlaying(true);
    }
}
function Scrub(){
    console.log("SCRUB!");
    if(scrubbing){//dont scrub if its not from the user
        $("#player")[0].currentTime = parseFloat($("#scrub").val()/tracking_multi);
    }
    //alert($("#scrub").val());
}
function ChangeVolume(){
    var player = $("#player"); 
    player[0].volume = $("#volume").val()/100;
}
function Intit(){
    var url_string = window.location.href;
    url_string = url_string.split("#");
    ctrack = url_string[1];
    if(ctrack != undefined){
        LoadSong(ctrack,false);
    }else{
        LoadSong(0,false);
    }
    
    $("#player")[0].onended = function(){
        //alert("done");
        console.log("loading Next Song...");
        LoadSong(parseInt(current_track)+1);
    };
    setInterval(function(){ 
        var player = $("#player");
        var current_time = ToMinSec(Math.round($("#scrub").val()/tracking_multi));
        var total_time = ToMinSec(Math.round(player[0].duration));
        $("#time-stamp").text(current_time+"/"+total_time);
        /* location.hash = cached_location_hash; */
        if(!scrubbing){
            //console.log($("#player")[0].currentTime);
            $("#scrub").val($("#player")[0].currentTime*tracking_multi);
        }
    }, 32);
}