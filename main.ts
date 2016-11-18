import {Observable, Observer} from "rxjs";

const circle = document.getElementById("circle");
let source = Observable
    .fromEvent(document, "mousemove")
    .map((e: MouseEvent) => {
        return {
            x: e.clientX,
            y: e.clientY
        };
    })
    //.delay(300);

function onNext(value){
    circle.style.left = `${value.x}px`;
    circle.style.top = `${value.y}px`;
}

source.subscribe(
    onNext,
    e => console.log(e),
    () => console.log("complete2")
);