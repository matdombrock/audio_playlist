# audio_playlist
An HTML5/JS Dynamic Playlist System for Audio

Everything outside of the ```app``` directory serves as a demo implementation. 

[DEMO](https://mzero.space/music/) 

Everything in this demo is included in the repo. Just clone this repo and direct your browser to the ```index.html``` page. No need to run a web server as this is 100% fron-end JS!

![screenshot](https://github.com/matdombrock/audio_playlist/blob/master/ss.png?raw=true)

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
