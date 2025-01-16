document.getElementById('actionButton').addEventListener('click', function() {
    // Retrieve the saved video path from localStorage
    const videoPath = localStorage.getItem('selectedFilePath');
    
    if (videoPath) {
        // Set the video source dynamically
        const videoElement = document.getElementById('video');
        const videoSource = document.getElementById('videoSource');
        
        // Assuming videoPath is just a filename, prepend the correct path
        videoSource.src = `videos/${videoPath}`;  // Adjust this path based on where the video is stored
        
        // Reload the video with the new source
        videoElement.load(); 
        
        // Play the video once it's loaded
        videoElement.play().catch((error) => {
            console.error('Error attempting to play the video:', error);
            alert('An error occurred while trying to play the video.');
        });

        // Show the toast with the video path
        showToast(`Video Path: ${videoPath}`);
    } else {
        alert('No video file selected!');
    }
});

// Function to show a toast notification
function showToast(message) {
    // Create the toast element
    const toast = document.createElement('div');
    toast.className = 'toast';
    toast.innerText = message;

    // Add it to the body
    document.body.appendChild(toast);

    // Show the toast for 3 seconds and then remove it
    setTimeout(() => {
        toast.classList.add('show');
        setTimeout(() => {
            toast.classList.remove('show');
            document.body.removeChild(toast);
        }, 3000);
    }, 100);
}
