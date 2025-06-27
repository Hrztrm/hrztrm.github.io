
// Function to remove Oneko if set
function removeOneko() {
  document.getElementById('oneko').remove();
}

function checkLocalDisableOneko(fallback) {
  try {
  const value = JSON.parse(localStorage.getItem(`oneko:disable`));
  if (value != "" || value != null){
    removeOneko()
  }
  } catch (e) {
  console.error(e);
  return fallback;
  }
}