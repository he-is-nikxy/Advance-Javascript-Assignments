const apiKey = '5207bd7aed0c6e2535ff38c29e538033';
      
let city=document.getElementById('city-input')
const days = 5; 
const maxCards = 5; 

async function fetchWeatherForecast() {
    try {
        const response = await fetch(`https://api.openweathermap.org/data/2.5/forecast?q=${city}&appid=${apiKey}`);
        const data = await response.json();

        const forecastContainer = document.getElementById('forecast-container');

        
        forecastContainer.innerHTML = '';

        
        const forecastData = data.list.filter(day => {
            const date = new Date(day.dt * 1000);
            const currentDate = new Date();
            const nextFiveDays = new Date(currentDate);
            nextFiveDays.setDate(currentDate.getDate() + days);
            return date <= nextFiveDays;
        });

        forecastData.slice(0, maxCards).forEach(day => {
            const date = new Date(day.dt * 1000);
            const temperature = Math.round(day.main.temp);
            const description = day.weather[0].description;
            const weatherIcon = getWeatherIcon(day.weather[0].icon);

            const card = document.createElement('div');
            card.classList.add('forecast-card');
            card.innerHTML = `
                <p>Date: ${date.toDateString()}</p>
                <p>Temperature: ${temperature}°C</p>
                <p>Description: ${description}</p>
                <img src="${weatherIcon}" alt="${description}">
            `;

            forecastContainer.appendChild(card);
        });
    } catch (error) {
        console.error('Error fetching weather data:', error);
    }
}


function getWeatherIcon(iconCode) {
    
    if (iconCode === '01d' || iconCode === '01n') {
        return 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRgnkFN14GtkPxbuJkYpCRiF72hNlvjm6cFvw&usqp=CAU'; // Replace with the URL of clear weather icon
    }
   
    else if (iconCode === '02d' || iconCode === '02n') {
        return 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS6tTLkZSnXbC6WMYECU_Y0L7foVeD2VVFYmQ&usqp=CAU';
    }
  
    else if(iconCode==='03d'|| iconCode=='03n'){
        return 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQtN8h3_y6kO6nVmPallVGb0XeHu_FgKECGLg&usqp=CAU'
    }
    else if(iconCode==='04d'|| iconCode=='04n'){
        return 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTu8fn2d1On5LwhUCAYgOCI8JsSh5efk06O9g&usqp=CAU'
    }
    else {
        return `https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSpG_Ij8JZMRg-V6f5JdGMa-HGokAzn86RmDw&usqp=CAU`;
        
    }
}


document.getElementById('search-button').addEventListener('click', () => {
    const inputCity = document.getElementById('city-input').value;
    if (inputCity.trim() !== '') {
        city = inputCity;
        fetchWeatherForecast();
    }
});


window.onload = fetchWeatherForecast;