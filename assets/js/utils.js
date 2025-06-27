
// Function to remove Oneko if set
function removeOneko() {
    document.addEventListener("DOMContentLoaded", () => {
        document.getElementById('oneko').remove();
        return;
    });
    document.getElementById('oneko').remove();
    return;

}

function checkLocalDisableOneko() {
    try {
        console.log("Chekcing for disabled oneko");
        const value = JSON.parse(localStorage.getItem(`oneko:disable`));
        if (value === "true"){
            console.log("Oneko set is disabled!");
            removeOneko()
        }
    } catch (e) {
        console.error(e);
    }
}

window.onload = checkLocalDisableOneko();