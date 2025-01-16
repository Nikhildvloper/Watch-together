document.getElementById('actionButton').addEventListener('click', function() {
    // Retrieve the saved video path from localStorage
    const videoPath = localStorage.getItem('selectedFilePath');
    
    if (videoPath) {
        // Set the video source dynamically
        const videoElement = document.getElementById('video');
        const videoSource = document.getElementById('videoSource');
        
        videoSource.src = videoPath;  // Set the video source to the stored file path
        videoElement.load();  // Reload the video with the new source
        videoElement.play();  // Start playing the video
    } else {
        alert('No video file selected!');
    }
});
