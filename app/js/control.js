$(document).on('click','#play',function(){
    SetPlaying("toggle");
});

var scrubbing = false;



$(document).on('mousedown','#scrub',function(){
    scrubbing = true;
    console.log("scrubbing: "+scrubbing);
});

$(document).on('mouseup','#scrub',function(){
    Scrub();
    scrubbing = false;
    console.log("scrubbing: "+scrubbing);;
});
$(document).on('touchstart','#scrub',function(){
    scrubbing = true;
    console.log("scrubbing: "+scrubbing)
});
$(document).on('touchend','#scrub',function(){
    Scrub();
    scrubbing = false;
    console.log("scrubbing: "+scrubbing);;
});
$(document).on('click','.share-track',function(){
    copyToClipboard();
});

//no good, old outdated
/*
$("#pause").click(function(){
    $("#player")[0].pause();
});
$("#play").click(function(){
    SetPlaying("toggle");
});
$("#scrub").mousedown(function(){
    scrubbing = true;
    console.log("scrubbing: "+scrubbing);
});
$("#scrub").mouseup(function(){
    Scrub();
    scrubbing = false;
    console.log("scrubbing: "+scrubbing);
});
$("#scrub").bind('touchstart',function(e){
    scrubbing = true;
    console.log("scrubbing: "+scrubbing);
});
$("#scrub").bind('touchend',function(e){
    Scrub();
    scrubbing = false;
    console.log("scrubbing: "+scrubbing);
});
$(".share-track").click(function(){
    //$("#share-track").html("<input type='text' value='"+window.location.href+"'>");
    copyToClipboard();
});
*/

function copyToClipboard() {
    var dummy = document.createElement('input'),
    text = window.location.href;

    document.body.appendChild(dummy);
    dummy.value = text;
    dummy.select();
    document.execCommand('copy');
    document.body.removeChild(dummy);

    alert("Copied Link To Clipboard!");
}
