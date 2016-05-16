var v = new Vue({
    el: 'body',
    data: {
        showmenu: false,
        hideheader : true
    }
})

window.addEventListener('scroll', function(e) {
    v.hideheader = (document.body.scrollTop < window.innerHeight);
});
