function stopVideo() {
    // two variables containing the video and modal elements
    var videoPlayer = document.getElementById('videoPlayer');
    var modal = document.getElementById('modalBehind4');

    // wait 100m to run the below function
    setTimeout(test, 100);

    // if modal is not showing, pause video
    function test() {
        if (modal.classList.contains("show") == false) {
            console.log(modal.classList.contains("show"))
            videoPlayer.pause();
        }
    }

}

