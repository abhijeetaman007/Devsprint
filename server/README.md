### Routes

<br>

http://localhost:5000/movies/add (To add a movie to Database)<br>
http://localhost:5000/movies/view/all (To view all movies)<br>
http://localhost:5000/movies/view/title/:title (To view movie using its title)<br>
http://localhost:5000/movies/view/imbdid/:imdbid (To view movie using its imbdID)<br>
http://localhost:5000/movies/genre/:genretype (To filter movie by Genre)<br>
http://localhost:5000/movies/year/:year (To filter movie by year)<br>
http://localhost:5000/movies/rated/:rated (To filter movie by rated type)<br>
http://localhost:5000/movies/director/:director (To filter movie by director)<br>
http://localhost:5000/movies/delete/movieid/:movieid (To delete movie by \_id)<br>
http://localhost:5000/movies/delete/title/:title (To delete movie by its title)<br>
http://localhost:5000/movies/update/:title (To update details by its title)<br>

### Example json (using postman)<br>

{ "title": "Avengers: Infinity War", "year": "2008", "rated": "PG-13", "runtime": "149 min", "genre": "Sci-Fi", "director": "Anthony Russo, Joe Russo", "writer": "Christopher Markus (screenplay by), Stephen McFeely (screenplay by), Stan Lee (based on the Marvel comics by), Jack Kirby (based on the Marvel comics by), Joe Simon (Captain America created by), Jack Kirby (Captain America created by), Steve Englehart (Star-Lord created by), Steve Gan (Star-Lord created by), Bill Mantlo (Rocket Raccoon created by), Keith Giffen (Rocket Raccoon created by), Jim Starlin (Thanos, Gamora and Drax created by), Stan Lee (Groot created by), Larry Lieber (Groot created by), Jack Kirby (Groot created by), Steve Englehart (Mantis created by), Don Heck (Mantis created by)", "production": "Walt Disney Pictures", "actors": "Robert Downey Jr., Chris Hemsworth, Mark Ruffalo, Chris Evans", "plot": "The Avengers and their allies must be willing to sacrifice all in an attempt to defeat the powerful Thanos before his blitz of devastation and ruin puts an end to the universe.", "language": "English", "country": "USA", "awards": "Nominated for 1 Oscar. Another 46 wins & 73 nominations.", "imdbID": "tt4154756"}

# dumpdata for mongodb

Steps:
Start the mongodb server<br>
Run use moviesdb<br>
Run db.createCollection("movies");<br>
show collections<br>
db.movies.insert([{ title: "Avengers: Infinity War", year: "2008", rated: "PG-13", runtime: 149 min, genre: "Action, Adventure, Sci-Fi", director: "Anthony Russo, Joe Russo", writer: "Christopher Markus (screenplay by), Stephen McFeely (screenplay by), Stan Lee (based on the Marvel comics by), Jack Kirby (based on the Marvel comics by), Joe Simon (Captain America created by), Jack Kirby (Captain America created by), Steve Englehart (Star-Lord created by), Steve Gan (Star-Lord created by), Bill Mantlo (Rocket Raccoon created by), Keith Giffen (Rocket Raccoon created by), Jim Starlin (Thanos, Gamora and Drax created by), Stan Lee (Groot created by), Larry Lieber (Groot created by), Jack Kirby (Groot created by), Steve Englehart (Mantis created by), Don Heck (Mantis created by)", production: "Walt Disney Pictures", actors: "Robert Downey Jr., Chris Hemsworth, Mark Ruffalo, Chris Evans", plot: "The Avengers and their allies must be willing to sacrifice all in an attempt to defeat the powerful Thanos before his blitz of devastation and ruin puts an end to the universe.", language: "English", country: "USA", awards: "Nominated for 1 Oscar. Another 46 wins & 73 nominations.", ImdbID: "tt4154756"}])<br>

<!--
<br>Title -Venom
<br>Year -2018
<br>Rated -PG-13
<br>Runtime -112 min
<br>Genre -Action, Adventure, Sci-Fi, Thriller
<br>Director -Ruben Fleischer
<br>Writer -Jeff Pinkner (screenplay by), Scott Rosenberg (screenplay by), Kelly Marcel (screenplay by), Jeff Pinkner (screen story by), Scott Rosenberg (screen story by), Todd McFarlane (Marvel's Venom Character created by), David Michelinie (Marvel's Venom Character created by)
<br>Production -N/A
<br>Actors -Tom Hardy, Michelle Williams, Riz Ahmed, Scott Haze
<br>Plot -A failed reporter is bonded to an alien entity, one of many symbiotes who have invaded Earth. But the being takes a liking to Earth and decides to protect it.
<br>Language -English, Mandarin, Malay
<br>Country -China, USA
<br>Awards -3 wins & 9 nominations.
<br>
<br>Title -Spiderman
<br>Year -1990
<br>Rated -N/A
<br>Runtime -5 min
<br>Genre -Short
<br>Director -Christian Davi
<br>Writer -N/A
<br>Production -N/A
<br>Actors -N/A
<br>Plot -N/A
<br>Language -German
<br>Country -Switzerland
<br>Awards -N/A -->
