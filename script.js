const button = document.querySelector('.button-33');
const display = document.querySelector('.text');
let apiEndPoint = 'https://api.opencagedata.com/geocode/v1/json';
let key = '19c86ced1b8d490e91527b0bfe01fef8';

const getUserCurrentDetails = async (latitude,longitude) => {
    // console.log(latitude,longitude);
    let query = `${latitude},${longitude}`;
    let apiUrl = `${apiEndPoint}?key=${key}&q=${query}&pretty=1`;
    try {
        let res = await fetch(`https://api.opencagedata.com/geocode/v1/json?key=19c86ced1b8d490e91527b0bfe01fef8&q=${query}&pretty=1`);
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