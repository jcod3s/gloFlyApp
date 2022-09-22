let center = [18,44.4]
    const map = tt.map({
        key: 't0p2tntCvwAXFp21RwqwKhUkUpgFVpbO',
        container: "map",
        center: center,
        zoom: 20
    })
    map.on('load', () => {
        new tt.Marker().setLngLat(center).addTo(map)
    })

    map.on('load', () => {
        fetch('/search/getLocation')
    })