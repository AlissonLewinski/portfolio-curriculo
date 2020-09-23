$(window).resize(function() {
    if(screen.width < 910) {
        document.querySelectorAll('.link-text').forEach(text => {
            console.log('q')
            text.style.display = 'none'
        })
    }
})