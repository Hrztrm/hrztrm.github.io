document.body.addEventListener('click', function (event) {
    const clickedInNav = event.target.closest('#nav-box');
    const clickedInPost = event.target.closest('#post-box');
    const clickedInPopup = event.target.closest('#neko-popup');

    if (clickedInNav) {
        document.getElementById('nav-box').style.background = '#00007f';
        document.getElementById('post-box').style.display = '#808080';
        document.getElementById('neko-popup').style.display = '#808080';
    } else if (clickedInPost) {
        document.getElementById('nav-box').style.background = '#808080';
        document.getElementById('post-box').style.display = '#00007f';
        document.getElementById('neko-popup').style.display = '#808080';
    } else if (clickedInPopup) {
        document.getElementById('nav-box').style.background = '#808080';
        document.getElementById('post-box').style.display = '#808080';
        document.getElementById('neko-popup').style.display = '#00007f';
        console.log('Inside popup');
    }
});