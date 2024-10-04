# 2024F_INF651_A_MovieWatchList

This is a simple **Movie Watchlist Web Application** that allows users to add, display, search, sort, and remove movies. Users can interact with various features such as filtering movies by category, sorting by rating or release date, and searching movies by title.

## Features

- **Add a Movie**: Add movies to the watchlist by providing the movie title, category, rating, and release date. (Only the movie title is required, the rest are optional.)
- **Display Movies**: View the list of movies added, including their title, category, rating, and release date.
- **Filter by Category**: Choose a specific category to filter and display only movies belonging to that category.
- **Search Movies**: Search for a movie by typing its title (partial search is supported).
- **Sort by Rating or Release Date**: Sort movies in ascending or descending order by their rating or release date.
- **Remove a Movie**: Remove any movie from the watchlist.
  
## How to Interact with the Application

### Add a Movie
1. Enter the movie's title in the **Movie Name** input field.
2. Choose a category from the **Category** dropdown (optional, default is "Uncategorized").
3. Provide a rating in the **Rating** field (optional).
4. Select a release date in the **Release Date** input field (optional).
5. Click the **Add Movie** button to add the movie to the list.

### Display and Remove Movies
- Once added, the movie will appear in the **Movies List** section.
- To remove a movie, click the **trash icon** next to the movie.

### Filter by Category
- To filter the movies by category, select a category from the **Filter Category** dropdown. It defaults to "All", which displays all movies.

### Search for a Movie
- To search for a movie by its title, type part or the full name into the **Search Movie** input field. Matching movies will be displayed as you type.

### Sort Movies by Rating or Release Date
- Use the **Sort by Rating** and **Sort by Release Date** dropdowns to sort the movies in ascending or descending order.

## Files

1. **index.html**: Contains the structure and layout of the webpage.
2. **style.css**: Defines the appearance of the application.
3. **script.js**: Handles all the dynamic functionality of the application including adding, removing, filtering, searching, and sorting movies.

## Code Explanation

### JavaScript (`script.js`)

- **Array `movieList`**: Stores the list of movies added by the user.
- **Function `addMovie()`**: 
    - Captures user input for movie title, category, rating, and release date.
    - Pushes a movie object into the `movieList` array.
    - Clears the input fields and updates the display.
- **Function `displayMovies()`**: 
    - Filters, sorts, and searches movies based on user selections.
    - Dynamically updates the movie list display based on the current state of `movieList`.
- **Function `removeMovie(index)`**: 
    - Removes a movie from the `movieList` array at the specified index and updates the display.
- **Event Listeners**: 
    - Handle user interactions for adding a movie, filtering, sorting, and searching.

## How to Run the Application

1. Download the project files (HTML, CSS, JS).
2. Open `index.html` in a web browser.
3. Interact with the application by adding, viewing, filtering, sorting, and removing movies from the list.

