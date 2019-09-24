//tracks = JSON.parse(tracks);
var tracking_multi = 100;
var playing = false;
var current_track = 0;

$( document ).ready(function() {
    console.log( "ready!" );
    RenderPlayer(function(){
        console.log( "rendered!" );
        GenerateList();
        Intit();
    });
});