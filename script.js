const button = document.querySelector('.button-33');
const display = document.querySelector('.text');
let apiEndPoint = 'https://api.opencagedata.com/geocode/v1/json';
let key = '4d685ba4b46f4903b564fd309c090e02';

const getUserCurrentDetails = async (latitude,longitude) => {
    // console.log(latitude,longitude);
    let query = `${latitude},${longitude}`;
    let apiUrl = `${apiEndPoint}?key=${key}&q=${query}&pretty=1`;
    try {
        let res = await fetch(`https://api.opencagedata.com/geocode/v1/json?key=4d685ba4b46f4903b564fd309c090e02&q=${query}&pretty=1`);
        let data = await res.json();
        let address = data.results[0].formatted;
        // console.log();
        display.innerHTML = `Adress: ${address}`
    } catch (error) {
        
    }
}

button.addEventListener('click', () => {
    // console.log(navigator.geolocation);
    if(navigator.geolocation){
        navigator.geolocation.watchPosition(
            (position) => {
                // console.log(position);
                const {latitude, longitude} = position.coords;
                // console.log(latitude,longitude);
                getUserCurrentDetails(latitude,longitude);
            },(err) => {
                console.log(err.message);
            }
        );
    }
})