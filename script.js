var player;
function onYouTubeIframeAPIReady() {
    player = new YT.Player('myVideo', {
        events: {
            'onReady': onPlayerReady
        }
    });
}

function onPlayerReady(event) {
    event.target.playVideo();
    var requestFullScreen = event.target.getIframe().requestFullScreen;
    if (requestFullScreen) {
        requestFullScreen.bind(event.target.getIframe())();
    }
}

function startTimer() {
    setTimeout(function() {
        location.reload();
    }, 3600000); // 1 hour in milliseconds
}