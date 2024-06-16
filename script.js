const url = "https://v2.jokeapi.dev/joke/Any";
const api = document.querySelector("#api");
const btn = document.querySelector("#btn");

const getJoke = async () => {
    console.log("Getting data...");

    const response = await fetch(url);
    const data = await response.json();
    console.log(data);

    let jokeText = '';
    if (data.type === 'single') {
        jokeText = data.joke;
    } else {
        jokeText = `${data.setup} - ${data.delivery}`;
    }

    api.innerHTML = jokeText;
    console.log("I am after the API");
};

btn.addEventListener("click", getJoke);