// Array to store movies
let movieList = [];

// Function to add a movie
function addMovie() {
  const movieInput = document.getElementById('movie-name');
  const movieCategoryInput = document.getElementById('movie-category');
  const movieRatingInput = document.getElementById('movie-rating');
  const movieReleaseDateInput = document.getElementById('movie-release-date');

  const movieTitle = movieInput.value.trim();
  const movieCategory = movieCategoryInput.value || 'N/A';
  const movieRating = movieRatingInput.value ? parseFloat(movieRatingInput.value) : 'N/A';
  const movieReleaseDate = movieReleaseDateInput.value || 'N/A';

  // Ensure movie title is not empty
  if (movieTitle !== "") {
    movieList.push({
      title: movieTitle,
      category: movieCategory,
      rating: movieRating,
      releaseDate: movieReleaseDate
    });

    // Clear input fields after adding
    movieInput.value = '';
    movieCategoryInput.value = 'Uncategorized';
    movieRatingInput.value = '';
    movieReleaseDateInput.value = '';

    displayMovies();
  } else {
    alert("Please enter a movie title.");
  }
}

// Function to display movies
function displayMovies() {
  const movieListElement = document.getElementById('movie-list');
  const selectedCategory = document.getElementById('filter-category').value;
  const sortRating = document.getElementById('sort-rating').value;
  const sortReleaseDate = document.getElementById('sort-release-date').value;
  const searchQuery = document.getElementById('search-movie').value.trim().toLowerCase();

  movieListElement.innerHTML = ''; // Clear previous movie list

  // Filter movies based on the selected category
  let filteredMovies = selectedCategory === 'All' 
    ? movieList 
    : movieList.filter(movie => movie.category === selectedCategory);

  // Filter by search query
  if (searchQuery !== "") {
    filteredMovies = filteredMovies.filter(movie => movie.title.toLowerCase().startsWith(searchQuery));
  }

  // Sort movies by rating
  if (sortRating === 'asc') {
    filteredMovies.sort((a, b) => (a.rating === 'N/A' ? 1 : b.rating === 'N/A' ? -1 : a.rating - b.rating));
  } else if (sortRating === 'desc') {
    filteredMovies.sort((a, b) => (a.rating === 'N/A' ? 1 : b.rating === 'N/A' ? -1 : b.rating - a.rating));
  }

  // Sort movies by release date
  if (sortReleaseDate === 'asc') {
    filteredMovies.sort((a, b) => {
      if (a.releaseDate === 'N/A') return 1;
      if (b.releaseDate === 'N/A') return -1;
      return new Date(a.releaseDate) - new Date(b.releaseDate);
    });
  } else if (sortReleaseDate === 'desc') {
    filteredMovies.sort((a, b) => {
      if (a.releaseDate === 'N/A') return 1;
      if (b.releaseDate === 'N/A') return -1;
      return new Date(b.releaseDate) - new Date(a.releaseDate);
    });
  }

  // Iterate over the filtered movie array and create list items dynamically
  filteredMovies.forEach((movie, index) => {
    const movieItem = document.createElement('li');
    movieItem.classList.add('collection-item');

    // Fix: Create a new Date object and adjust by setting the time zone manually to prevent off-by-one errors
    const movieReleaseDate = movie.releaseDate !== 'N/A' 
      ? new Date(movie.releaseDate).toLocaleDateString('en-US', { timeZone: 'UTC' }) 
      : 'N/A';

    movieItem.innerHTML = `
      <span class="movie-title">${movie.title} (${movie.category})</span>
      <span>Rating: ${movie.rating}</span>
      <span>Release Date: ${movieReleaseDate}</span>
      <span class="remove-btn material-icons" onclick="removeMovie(${index})">delete</span>
    `;
    movieListElement.appendChild(movieItem);
  });
}

// Function to remove a movie
function removeMovie(index) {
  movieList.splice(index, 1); // Remove movie from the array
  displayMovies(); // Update the list
}

// Event listener for the "Add Movie" button
document.getElementById('add-movie-btn').addEventListener('click', addMovie);

// Optionally, allow pressing Enter to add a movie
document.getElementById('movie-name').addEventListener('keypress', function (e) {
  if (e.key === 'Enter') {
    addMovie();
  }
});

// Event listeners for filtering and sorting
document.getElementById('filter-category').addEventListener('change', displayMovies);
document.getElementById('sort-rating').addEventListener('change', displayMovies);
document.getElementById('sort-release-date').addEventListener('change', displayMovies);
document.getElementById('search-movie').addEventListener('input', displayMovies);