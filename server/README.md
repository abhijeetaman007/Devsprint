# Server Side

Run ```cd server```
<br>Run ```npm i```(installing packages)
<br>Run ```npm start``` (To start backend server)
<br>
### Routes
<br>

http://localhost:5000/movies/add                 	(To add a movie to Database)<br>
http://localhost:5000/movies/view/all	         	(To view all movies)<br>
http://localhost:5000/movies/view/title/:title	 	(To view movie using its title)<br>
http://localhost:5000/movies/view/imbdid/:imdbid 	(To view movie using its imbdID)<br>
http://localhost:5000/movies/genre/:genretype    	(To filter movie by Genre)<br>
http://localhost:5000/movies/year/:year          	(To filter movie by year)<br>
http://localhost:5000/movies/rated/:rated		(To filter movie by rated type)<br> 
http://localhost:5000/movies/director/:director  	(To filter movie by director)<br>
http://localhost:5000/movies/delete/movieid/:movieid	(To delete movie by _id)<br>
http://localhost:5000/movies/delete/title/:title	(To delete movie by its title)<br>
http://localhost:5000/movies/update/:title              (To update details by its title)<br>

### Example json<br>
{
	"Title": "Venom",
	"Year": "2018",
	"Rated": "PG-13",
	"Runtime": "112 min",
	"Genre": "Action, Adventure, Sci-Fi, Thriller",
	"Director": "Ruben Fleischer",
	"Writer": "Jeff Pinkner (screenplay by), Scott Rosenberg (screenplay by), Kelly Marcel (screenplay by), Jeff Pinkner (screen story by), Scott Rosenberg (screen story by), Todd McFarlane (Marvel's Venom Character created by), David Michelinie (Marvel's Venom Character created by)",
	"Actors": "Tom Hardy, Michelle Williams, Riz Ahmed, Scott Haze",
	"Plot": "A failed reporter is bonded to an alien entity, one of many symbiotes who have invaded Earth. But the being takes a liking to Earth and decides to protect it.",
	"Language": "English, Mandarin, Malay",
	"Country": "China, USA",
	"Awards": "3 wins & 9 nominations.",
	"Poster": "https://m.media-amazon.com/images/M/MV5BNzAwNzUzNjY4MV5BMl5BanBnXkFtZTgwMTQ5MzM0NjM@._V1_SX300.jpg",
	"imdbID": "tt1270797",
	"Type": "movie",
	"Production": "Columbia Pictures"
}
