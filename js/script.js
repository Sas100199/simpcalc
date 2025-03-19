if ('serviceWorker' in navigator) {
    navigator.serviceWorker.register('/calculator-app/service-worker.js')
    .then(() => console.log("Service Worker Registered"))
    .catch(err => console.log("Service Worker Failed", err));
}

document.addEventListener("DOMContentLoaded", () => {
    const buttons = document.querySelectorAll('.button');


    var expression = "";
    buttons.forEach((e) => {
        e.addEventListener('click', () => {
            const display = document.querySelector("#display");
            let dig = e.innerHTML.trim();
            if (dig === "=") {
                try {
                    display.value = eval(expression);
                    expression = display.value;
                }
                catch (error) {
                    display.value = "Error";
                    expression = "";
                }
            }
            else if (dig === "C") {
                display.value = "";
                expression = "";
            }

            else {
                expression += e.innerHTML;
                display.value = expression;
            }

        })
    });
})
