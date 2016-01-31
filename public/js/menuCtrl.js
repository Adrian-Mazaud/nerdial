'use strict';
var burger = document.querySelector('#burger');

/**
    * Script toggle Display Menu
 */
function toggleMenu(){
    let body = document.querySelector('body');
    let container = document.querySelector("#content");
    let menu = document.querySelector('#menu');
    let closeMenu = document.querySelector('#closeMenu');
    let overlay = document.querySelector('#overlay');

    if (menu.classList.contains('is-open')) {
        menu.classList.remove('is-open');
        container.classList.remove('is-moved');
        overlay.classList.remove('is-visible');
        menu.parentNode.style.zIndex = -2;
        setTimeout(function(){
            body.classList.remove('no-overflow');
        },600);
    }else{
        menu.classList.add('is-open');
        container.classList.add('is-moved');
        overlay.classList.add('is-visible');
        body.classList.add('no-overflow');
        menu.parentNode.style.zIndex = 0;
    }
    closeMenu.addEventListener('click', toggleMenu);
    overlay.addEventListener('click', toggleMenu);
};
burger.addEventListener('click', toggleMenu);

/**
    * Script pour ajouter la date au menu
 */
function getDate(){
    /** Date pour le menu */
    let d = new Date();
    let day = d.getDay(); // Journée semaine 0-6
    let date_num = d.getDate(); // Jour du mois 0-31
    let month = d.getMonth(); // Mois de l'année 0-11
    let year = d.getFullYear(); // Année : 2016
    // Deux tableaux pour traduire les chiffres en lettres
    let days = ['Dimanche', 'Lundi', 'Mardi', 'Mercredi', 'Jeudi', 'Vendredi', 'Samedi'];
    let months = ['Janvier', 'Février', 'Mars', 'Avril', 'Mai', 'Juin', 'Juillet', 'Aout', 'Septembre', 'Octobre', 'Novembre', 'Décembre'];
    // Appel à la fonction qui insère la date dans la vu
    innerDateMenu(days[day], date_num + ' ' + months[month] + ' ' + year);

    /** Date pour la discussion */
    let hour = d.getHours();
    let minutes = d.getMinutes();
    innerDateDiscuss(date_num + ' ' + months[month] + ', ' + hour + ':' + minutes);

};
// Appel à la fonction getDate pour récupérer la date d'aujourd'hui
getDate();

function innerDateMenu(dateDay, dateMonth){
    let day = document.querySelector('#day');
    let month = document.querySelector('#month');
    day.innerText = dateDay;
    day.textContent = dateDay;
    month.innerText = dateMonth;
    month.textContent = dateMonth;
};

function innerDateDiscuss(dateFull){
    let date = document.querySelector('#discuss_date');
    if (date) {
        date.innerText = dateFull;
        date.textContent = dateFull;
    };
}

/**
    * Script METEO - Temperature
 */
/**
 * [getWeather | Appel à l'API]
 * @param  {[int]} lat [Latitude of user location]
 * @param  {[int]} lng [Longitude of user location]
 * @return {[callback]}     [innerWeather | Display result]
 */
function getWeather(lat, lng){
    let key = 'ee28665a658a8598b4f34b2c5c5153cb';
    let body = document.querySelector('body');
    let loader = document.createElement('script');
    loader.type='text/javascript';
    loader.src = 'http://api.openweathermap.org/data/2.5/weather?lat='+lat+'&lon='+lng+'&APPID='+key+'&units=metric&callback=innerWeather';

    body.appendChild(loader);
};

/** Affichage de la temperature - Callback de la fonction getWeather */
function innerWeather(data){
    let celsius = document.querySelector('#celsius');
    celsius.innerText = data.main.temp;
    celsius.textContent = data.main.temp;
}

/** Initialisation de la récupération de la météo, capture de la location de l'user, puis callback to getWeather */
function initWeather(){
    navigator.geolocation.getCurrentPosition(
        function(position) {
            getWeather(position.coords.latitude, position.coords.longitude);
        },
        function(error){
            alert(error.message);
        }, {
            enableHighAccuracy: true
            ,timeout : 5000
        }
    );
};

initWeather();
