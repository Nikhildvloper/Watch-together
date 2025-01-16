document.getElementById('fileInput').addEventListener('change', function(event) {
  const file = event.target.files[0];
  
  if (file) {
    // Save the file path to localStorage
    const filePath = file.name;
    localStorage.setItem('selectedFilePath', filePath);
  }
});

document.getElementById('openVideoBtn').addEventListener('click', function() {
  // Redirect to videoview.html
  window.location.href = 'videoview.html';
});
