window.addEventListener('load', () => {
    let long;
    let lat;
    let tempDescription = document.getElementById('temperature-description');
    let tempDegree = document.getElementById('temperature-degree');
    let currentCityLocation = document.getElementById('citylocation');


    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(position => {
            long = position.coords.longitude;
            lat = position.coords.latitude;


            const api = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${long}&units=imperial&appid=f5efd0c1dc1030daca336988d3f52e64`;

            fetch(api)
                .then(response => {
                    return response.json();
                })
                .then(data => {
                    const location = data.name;
                    const { temp, humidity } = data.main;
                    const description = data['weather'][0]['description'];

                    // Use API to set DOM Elements
                    tempDegree.textContent = temp;
                    tempDescription.textContent = description;
                    currentCityLocation.textContent = location;
                });
        });
    }
});
