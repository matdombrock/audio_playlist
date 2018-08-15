function RenderPlayer(callback){
    //should be loaded from a static stand-alone file
    content = `
<div class="wrap" id="wrap">
<div class="album-art-wrap" id="album-art-wrap">
<img src="#" id="album-art" class="album-art">
</div>
<div class="label">Track: </div><div class="track-name label" id="track-name">...</div><a href="#" class="ds-button hide-mobile download-track" id="download-track" download>DOWNLOAD</a><span class="ds-button hide-mobile share-track" id="share-track">SHARE</span><br>
<div class="label">Artist: </div><div class="artist-name label" id="artist-name">...</div><br>
<div class="label">Album: </div><div class="album-name label" id="album-name">...</div><br>
<div class='hide-desktop'>
<a href="#" class="ds-button download-track" id="download-track" download>DOWNLOAD</a><span class="ds-button share-track" id="share-track">SHARE</span><br><br>
</div>
<audio id="player" class="player">
<source src="#" type="audio/ogg" id="audio-source">
Your browser does not support the audio element.
</audio>
<div class="controls" id="controls">
<div class="control-btn" id="play"></div>
<input type="range" min="1" max="100" value="0" class="slider" id="scrub">
<span class="time-stamp" id="time-stamp">...</span>
<!--<div class="download-button">DOWNLOAD TRACK</div>-->
<div class="volume-wrap">
    <img src="app/img/volume-icon.png" class="volume-icon"><input type="range" id="volume" class="volume" min="0" max="100" value="100" onchange="ChangeVolume()"/>
</div>
</div>
<div id="track-list" class="track-list">
...
</div>
</div>
<div class="footer">
    POWERED BY XIX
</div>
    `;
    $("body").html(content);
    callback();
}

function GenerateList(){
    var output = "";
    var tnum = 0;
    for(var track in tracks){
        console.log(tracks[track].name);
        output += "<a href='#"+tnum+"' id='track-"+track+"' class='track-listing' onclick='LoadSong("+tnum+",true)'>"+tracks[track].artist+" - "+tracks[track].name+"</a>";
        tnum = tnum+1;
    }
    $("#track-list").html(output);
}

function ToMinSec(seconds){
    var mins = Math.floor(seconds/60);
    var extra_seconds = seconds -(mins * 60);
    if(extra_seconds.toString().length==1){
        extra_seconds = "0"+extra_seconds;
    }
    var output = mins +":"+extra_seconds;
    return output;
}