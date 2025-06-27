
// Function to remove Oneko if set
function removeOneko() {
  document.getElementById('oneko').remove();
}

function checkLocalDisableOneko(fallback) {
    try {
        console.log("Chekcing for disabled oneko");
        const value = JSON.parse(localStorage.getItem(`oneko:disable`));
            if (value != "" || value != null){
                console.log("Oneko set is disabled!");
                removeOneko()
            }
    } catch (e) {
        console.error(e);
        return fallback;
    }
}

window.onload = checkLocalDisableOneko();