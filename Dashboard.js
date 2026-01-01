// تاریخ و روز
const fullDateEl = document.getElementById("full-date");
const dayNameEl = document.getElementById("day-name");
const timeEl = document.getElementById("time");

const days = ["یکشنبه", "دوشنبه", "سه‌شنبه", "چهارشنبه", "پنج‌شنبه", "جمعه", "شنبه"];

function updateDate() {
    const now = new Date();
    const dayName = days[now.getDay()];
    const date = now.toLocaleDateString("fa-IR");
    fullDateEl.textContent = date;
    dayNameEl.textContent = dayName;
}

function updateTime() {
    const now = new Date();
    const hours = now.getHours().toString().padStart(2,"0");
    const minutes = now.getMinutes().toString().padStart(2,"0");
    timeEl.textContent = `${hours}:${minutes}`;
}

updateDate();
updateTime();
setInterval(updateTime, 1000);

// آب و هوا
const weatherText = document.getElementById("weather");
const temperature = document.getElementById("Temperature");

const WeatherData = { weather: "آفتابی", temp: 28 };
weatherText.textContent = WeatherData.weather;
temperature.textContent = WeatherData.temp + "°C";

// شهر
const cityEl = document.getElementById("city");
let currentCity = "تهران";
cityEl.textContent = currentCity;

// To-Do
const todoInput = document.querySelector(".todo-input");
const addBtn = document.querySelector(".todo-add-btn");
const todoContent = document.querySelector(".todo-content");

function addTodo() {
    const text = todoInput.value.trim();
    if (!text) return;

    const item = document.createElement("div");
    item.classList.add("todo-item");
    item.innerHTML = `<span class="todo-text">${text}</span><button class="todo-delete">🗑</button>`;
    todoContent.appendChild(item);
    todoInput.value = "";
}

addBtn.addEventListener("click", addTodo);
todoInput.addEventListener("keydown", (e) => {
    if(e.key === "Enter") addTodo();
});

todoContent.addEventListener("click", (e) => {
    if(e.target.classList.contains("todo-delete")) {
        todoContent.removeChild(e.target.parentElement);
    }
});
