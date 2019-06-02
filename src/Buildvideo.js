let sources = {
    hd: {
        bitrate: 905,
        size: 10105235,
        duration: 0,
        width: 1280,
        height: 720
    }
};

let fetched = "";

function build_sources(format, video_name){
    format = "m3u8";
    sources.hd["format"] = format;
    if(format === "m3u8"){
        sources.hd["play_url"] = fetched + 'hls-video/1280x720_4088232_30.' + format;
    }
    else if(format === "mpd"){
        sources.hd["play_url"] = fetched + 'dash-video/' + video_name + '.' + format;
    }
    else if(format === "mp4"){
        sources.hd["play_url"] = fetched + video_name + '.' + format;
    }
    console.log(sources);
    return sources;
}

function check_compatibility(){
let compatibility = document.createElement('video');
if(compatibility.canPlayType('application/x-mpegURL')){
    return build_sources("m3u8", "my_playlist");
}
if(compatibility.canPlayType('application/dash+xml')){
    return build_sources("mpd", "my_playlist")
}
if(compatibility.canPlayType('video/mp4')){
    return build_sources("mp4", "my_playlist")
}
else{
    console.log('No compatible video found');
}
}

export { check_compatibility }