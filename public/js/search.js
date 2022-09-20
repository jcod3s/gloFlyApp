const tt = require('@tomtom-international/web-sdk-services/dist/services-node.min.js');

var map;

function start() { 
    const [map,setMap] = useState({})

    console.log("running")

    map = new tt.map({
        "key": process.env.TOM_TOM_API_KEY,
        "container":"mapElement",
    });

    setMap(map)
}

window.onload = start;