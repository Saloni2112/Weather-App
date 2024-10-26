let form = document.querySelector("form");
let input = document.querySelector("input");
let card = document.querySelector("#weather-card");
let h1 = document.querySelector("h1");
let h2 = document.querySelector("h2");
let img = document.querySelector("img");
let p = document.querySelector("p");

const fetchWeather = async (e) => {
  e.preventDefault();

  try {
    const response = await fetch(
      `https://api.weatherapi.com/v1/current.json?key=4fcedbceb97a4669ab865803240808&q=${input.value}&aqi=yes`
    );
    const data = await response.json();
    card.className = "card rounded-0 my-2 p-3";
    h1.innerText = data.current.temp_c;
    h2.innerText = data.location.name;
    img.setAttribute("src", data.current.condition.icon);
    p.innerText = data.current.condition.text;
  } catch (error) {
    card.className = "card rounded-0 my-2 p-3 d-none";
    window.alert("Invalid City Name");
  }

  form.reset();
};

form.addEventListener("submit", fetchWeather);
