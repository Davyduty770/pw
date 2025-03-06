document.addEventListener('DOMContentLoaded', function() {
    // Set current year in footer
    document.getElementById('current-year').textContent = new Date().getFullYear();

    // Attempt to unmute video
    function attemptUnmute() {
        const iframe = document.querySelector('iframe');
        if (iframe) {
            iframe.contentWindow.postMessage(
                JSON.stringify({
                    event: 'command',
                    func: 'unMute'
                }),
                '*'
            );
            iframe.contentWindow.postMessage(
                JSON.stringify({
                    event: 'command',
                    func: 'setVolume',
                    args: [100]
                }),
                '*'
            );
        }
    }

    // Try to unmute after a short delay
    setTimeout(attemptUnmute, 1000);

    // Add click event listener to unmute button
    const unmuteButton = document.getElementById('unmute-btn');
    unmuteButton.addEventListener('click', attemptUnmute);

    // Fullscreen functionality
    const videoContainer = document.getElementById('video-container');
    const fullscreenButton = document.getElementById('fullscreen-btn');

    fullscreenButton.addEventListener('click', function() {
        if (!document.fullscreenElement) {
            if (videoContainer.requestFullscreen) {
                videoContainer.requestFullscreen();
            } else if (videoContainer.mozRequestFullScreen) { // Firefox
                videoContainer.mozRequestFullScreen();
            } else if (videoContainer.webkitRequestFullscreen) { // Chrome, Safari and Opera
                videoContainer.webkitRequestFullscreen();
            } else if (videoContainer.msRequestFullscreen) { // IE/Edge
                videoContainer.msRequestFullscreen();
            }
        } else {
            if (document.exitFullscreen) {
                document.exitFullscreen();
            } else if (document.mozCancelFullScreen) { // Firefox
                document.mozCancelFullScreen();
            } else if (document.webkitExitFullscreen) { // Chrome, Safari and Opera
                document.webkitExitFullscreen();
            } else if (document.msExitFullscreen) { // IE/Edge
                document.msExitFullscreen();
            }
        }
    });
});
