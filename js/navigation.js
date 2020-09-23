function navigationConfig() {

    function navigation(hash) {
        const link = document.querySelector(`[href='${hash}']`)
        const main = document.querySelector('.main-content')

        const url = hash.substring(1)
        fetch(url)
            .then(resp => resp.text())
            .then(html => {
                main.innerHTML = html
            })
    }

    function firstPage() {
        if(location.hash) {
            navigation(location.hash)
        } else {
            const firstLink = document.querySelector('.initial-link')
            navigation(firstLink.attributes['href'].value)
        }
    }

    firstPage()
    window.onhashchange = e => navigation(location.hash)
}

navigationConfig()