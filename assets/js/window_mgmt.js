document.body.addEventListener('click', function (event) {
    const clickedInNav = event.target.closest('#nav-box');
    const clickedInPost = event.target.closest('#post-box');
    const clickedInPopup = event.target.closest('#neko-popup');

    if (clickedInPopup) {
        console.log('Inside popup');
    } else if (clickedInPost) {
        console.log('Inside post');
    } else if (clickedInNav) {
        console.log('Inside nav');
    }
});