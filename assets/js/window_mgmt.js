document.body.addEventListener('click', function (event) {
    const clickedInNav = event.target.closest('#nav-box');
    const clickedInPost = event.target.closest('#post-box');
    const clickedInPopup = event.target.closest('#neko-popup');

    if (clickedInNav) {
        document.getElementById('nav-bar').style.background = '#00007f';
        document.getElementById('post-bar').style.background = '#808080';
        document.getElementById('popup-bar').style.background = '#808080';
    } else if (clickedInPost) {
        document.getElementById('nav-bar').style.background = '#808080';
        document.getElementById('post-bar').style.background = '#00007f';
        document.getElementById('popup-bar').style.background = '#808080';
    } else if (clickedInPopup) {
        document.getElementById('nav-bar').style.background = '#808080';
        document.getElementById('post-bar').style.background = '#808080';
        document.getElementById('popup-bar').style.background = '#00007f';
    }
});