# audio_playlist
An JS/HTML5 Dynamic Playlist System for Audio.

This is a total reimplementation of the HTML5 audio ```controls``` interface since the official ```controls``` element is [not very easy to work with.](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/audio#Styling_with_CSS)

Right now this serves as a simpler (less generalized) & more steamlined alternative to [Amplitude.js](https://github.com/521dimensions/amplitudejs).

**Everything outside of the ```app``` directory serves as a demo implementation.**

[DEMO](http://mzero.space/audio_playlist/#0) (Master branch of this repo running on GitHub pages)

Everything in this demo is included in the repo. Just clone this repo and direct your browser to the ```index.html``` page. No need to run a web server as this is 100% fron-end JS!

![screenshot](https://github.com/matdombrock/audio_playlist/blob/master/ss.png?raw=true)

## How To Use:

* Clone this repo.
* Create a new directory in the ```albums``` directory with the name of your new playlist or album. 
* Inside that directory create both an ```art``` directory and a ```tracks``` directory. This is technically optional as long as you edit the track declarations to reflect your new directory structure.
* Put your album art in the ```art``` directory and your tracks (songs) in the ```tracks``` directory.
* Edit the JSON in ```index.html``` or duplicate and rename that file:

Creating a new playlist is easy. Just declare the tracks with JSON:
```javascript
<script>
    var tracks = `
        [
            {
                "name": "Delver 1",
                "artist": "Mathieu Dombrock",
                "album": "Delver",
                "url": "albums/delver/tracks/DELVER1.ogg",
                "cover_art_url": "albums/delver/art/delver.png"
            },
            {
                "name": "EgoDiver (Loop)",
                "artist": "Mathieu Dombrock",
                "album": "Delver",
                "url": "albums/delver/tracks/EGODIVER(loop).ogg",
                "cover_art_url": "albums/delver/art/delver.png"
            },
            {
                "name": "Killer",
                "artist": "Mathieu Dombrock",
                "album": "Delver",
                "url": "albums/delver/tracks/KILLER.ogg",
                "cover_art_url": "albums/delver/art/delver.png"
            },
            {
                "name": "OneTwoTheThird",
                "artist": "Mathieu Dombrock",
                "album": "Delver",
                "url": "albums/delver/tracks/ONETWOTHETHIRD.ogg",
                "cover_art_url": "albums/delver/art/delver.png"
            },
            {
                "name": "SMOOTH",
                "artist": "Mathieu Dombrock",
                "album": "Delver",
                "url": "albums/delver/tracks/SMOOTH.ogg",
                "cover_art_url": "albums/delver/art/delver.png"
            }
            
        ]
    `;
</script>
```
Aside from this custom track declaration, ```index.php``` has no other custom code or markup and can easily be used as a template for new playlists. 
