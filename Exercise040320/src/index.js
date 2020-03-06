import 'bootstrap/dist/css/bootstrap.css'
import jokes from "./jokes";
import users from "./users";

const allJokes = jokes.getJokes().map(joke => "<li>"+joke+"</li>");
document.getElementById("jokes").innerHTML = allJokes.join("");



