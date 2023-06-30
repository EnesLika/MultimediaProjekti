document.addEventListener("DOMContentLoaded", function() {
    const loadingOverlay = document.getElementById("loading-overlay");
    loadingOverlay.style.display = "block";
  
    setTimeout(function() {
      loadingOverlay.style.display = "none";
    }, 2000);
  });
  