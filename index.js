const buttons = document.querySelectorAll(".bn")
console.log(buttons);

const body = document.querySelector("body")
console.log(body);

buttons.forEach(
    (button) => {
        console.log(button);
        button.addEventListener( "click",
            (event) => {
                console.log(event);
                console.log(event.target);
                if (event.target.id === "gray") {
                    body.style.backgroundColor = event.target.id;
                }
                if (event.target.id === "yellow") {
                    body.style.backgroundColor = event.target.id;
                }
                if (event.target.id === "blue") {
                    body.style.backgroundColor = event.target.id;
                }
                if (event.target.id === "white") {
                    body.style.backgroundColor = event.target.id;
                }
                
            }
        )
    }
)