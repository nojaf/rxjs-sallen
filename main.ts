import {Observable, Observer} from "rxjs";
import {loadWithFetch, load} from "./loader";

const output = document.getElementById("output");
const button = document.getElementById("button");

let click = Observable
    .fromEvent(button, "click")




function renderMovies(movies) {
    movies.forEach(m => {
        let div = document.createElement("div");
        div.textContent = m.title;
        output.appendChild(div);
    });
}

const subscription = load("moviess.json")
    .subscribe(renderMovies,
    e => console.log(e),
    () => console.log("complete"));

subscription.unsubscribe();

click.flatMap(e => loadWithFetch("moviess.json"))
    .subscribe(renderMovies,
        e => console.log(e),
        () => console.log("complete"));
