const url = "https://v2.jokeapi.dev/joke/Any";
const joke = document.querySelector(".joke");
const btn = document.querySelector("#btn");
const copyBtn = document.querySelector("#copy-btn");

const getJoke = async () => {
    const response = await fetch(url);
    const data = await response.json();
    console.log(data);

    let jokeText = '';
    if (data.type === 'single') {
        jokeText = data.joke;
    } else {
        jokeText = `${data.setup} - ${data.delivery}`;
    }
    joke.innerHTML = jokeText;
};

btn.addEventListener("click", getJoke);


const copyJoke = () => {
    const jokeText = joke.innerText;

    const textArea = document.createElement("textarea");
    textArea.value = jokeText;
    document.body.appendChild(textArea);
    textArea.select();
    console.log("else wali line")
    try {
        document.execCommand('copy');
        console.log("try wali line")
    } catch (err) {
        console.error('Fallback: Oops, unable to copy', err);
    }
    document.body.removeChild(textArea);
}

copyBtn.addEventListener("click", copyJoke);


function showNewIcon() {
    const newIcon = document.getElementById("newIcon");
    const oldIcon = document.getElementById("copy-btn");


    if (newIcon.style.display === 'none') {
        newIcon.style.display = 'block';
        oldIcon.style.display = 'none';

        setTimeout(function () {
            newIcon.style.display = 'none';
            oldIcon.style.display = 'block';
        }, 3000);
    }
}


document.getElementById("copy-btn").addEventListener("click", function () {
    showNewIcon();
});

document.addEventListener('DOMContentLoaded', function () {

    const themeIcon = document.querySelector("#theme");

    function applyThemeFromStorage() {
        const savedTheme = localStorage.getItem('theme');
        if (savedTheme) {
            document.body.classList.add(savedTheme);
        }
    }

    applyThemeFromStorage();


    themeIcon.addEventListener("click", () => {
        document.body.classList.toggle("lightmode");
        const theme = document.body.classList.contains("lightmode") ? "lightmode" : "";
        localStorage.setItem('theme', theme);
    });
});
