// Load movie data from JSON file
const movies = [
	{ title: 'Movie 1', genre: 'Action', rating: 7.5, releaseYear: 2010 },
	{ title: 'Movie 2', genre: 'Comedy', rating: 8.0, releaseYear: 2005 },
	{ title: 'Movie 3', genre: 'Drama', rating: 6.5, releaseYear: 2015 },
	{ title: 'Movie 4', genre: 'Action', rating: 8.5, releaseYear: 2018 },
	{ title: 'Movie 5', genre: 'Comedy', rating: 7.0, releaseYear: 2020 },
	{ title: 'Movie 6', genre: 'Drama', rating: 9.0, releaseYear: 2017 },
];

// Function to filter movies based on user preferences
function filterMovies(genre, rating, releaseYear) {
	return movies.filter(movie => {
		return movie.genre === genre &&
		       movie.rating >= rating &&
		       movie.releaseYear >= releaseYear;
	});
}

// Function to display movie recommendations on the user interface
function displayMovieRecommendations(movies) {
	const recommendationsDiv = document.getElementById('movie-recommendations');
	recommendationsDiv.innerHTML = '';

	movies.forEach(movie => {
		const movieDiv = document.createElement('div');
		movieDiv.innerHTML = `<h2>${movie.title}</h2>
							  <p>Genre: ${movie.genre}</p>
							  <p>Rating: ${movie.rating}</p>
							  <p>Release Year: ${movie.releaseYear}</p>`;
		recommendationsDiv.appendChild(movieDiv);
	});
}

// Function to handle user input and display movie recommendations
function recommendMovies() {
	const genreInput = document.getElementById('genre').value;
	const ratingInput = document.getElementById('rating').value;
	const releaseYearInput = document.getElementById('release-year').value;

	if (genreInput && ratingInput && releaseYearInput) {
		const filteredMovies = filterMovies(genreInput, ratingInput, releaseYearInput);
		displayMovieRecommendations(filteredMovies);
	} else {
		alert('Please fill in all fields.');
	}
}