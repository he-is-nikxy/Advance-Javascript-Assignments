// <!-- Go to omdbapi.com , create account and explore API documentation.

// Create a decent UI where should be able to search for any movie they want. explore how can you make a search request.

// Make a fetch request and get the data depending on whatever movie you entered. Show the movie data on the app. --> 


let apiKey = "a8d4f3a5"

// Function to fetch movie data and display it
const searchMovie = async () => {
    const searchInput = document.getElementById('searchInput').value;
    const movieDetails = document.getElementById('movieDetails');

    // Clear previous movie details
    movieDetails.innerHTML = '';

    // Make a request to the OMDB API
    const response = await fetch(`https://www.omdbapi.com/?apikey=${apiKey}&t=${searchInput}`);
   
    // http://www.omdbapi.com/?t=spider
    console.log(response)

    const data = await response.json();

    // Display movie details
    if (data.Response === 'True') {
        const { Title, Year, Director, Plot, Poster } = data;
        movieDetails.innerHTML = `
            <h2>${Title} (${Year})</h2>
            <p><strong>Director:</strong> ${Director}</p>
            <p><strong>Plot:</strong> ${Plot}</p>
            <img src="${Poster}" alt="${Title} Poster">
        `;
    } else {
        movieDetails.innerHTML = `<p>No movie found with that title.</p>`;
    }
};

// Event listener for the search button
const searchButton = document.getElementById('searchButton');
searchButton.addEventListener('click', searchMovie); 