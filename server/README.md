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

Example json
{
	"title": "Avengers: Infinity War",
	"year": "2018",
	"rated": "PG-13",
	"runtime": "149 min",
	"genre": "Action, Adventure, Sci-Fi",
	"director": "Anthony Russo, Joe Russo",
	"writer": "Christopher Markus (screenplay by), Stephen McFeely (screenplay by), Stan Lee (based on the Marvel comics by), Jack Kirby (based on the Marvel comics by), Joe Simon (Captain America created by), Jack Kirby (Captain America created by), Steve Englehart (Star-Lord created by), Steve Gan (Star-Lord created by), Bill Mantlo (Rocket Raccoon created by), Keith Giffen (Rocket Raccoon created by), Jim Starlin (Thanos,  Gamora and Drax created by), Stan Lee (Groot created by), Larry Lieber (Groot created by), Jack Kirby (Groot created by), Steve Englehart (Mantis created by), Don Heck (Mantis created by)",
	"production": "Walt Disney Pictures",
	"actors": "Robert Downey Jr., Chris Hemsworth, Mark Ruffalo, Chris Evans",
	"plot": "The Avengers and their allies must be willing to sacrifice all in an attempt to defeat the powerful Thanos before his blitz of devastation and ruin puts an end to the universe.",
	"language": "English",
	"country": "USA",
	"awards": "Nominated for 1 Oscar. Another 46 wins & 73 nominations.",
	"imdbID": "tt4154756",
	"type": "movie",
	"likes":10,
	"dislikes":5,
	"totalviews":15
}
