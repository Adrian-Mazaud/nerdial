'use strict';

var locationHeaderPanel = document.querySelector('#location header');
var locationOpenCount = 0;


function toggleDisplayLocation(){
    locationOpenCount += 1;
    let locationContainer = document.querySelector('#location');
    let closeLocation = locationContainer.querySelector('#close');
    let map = locationContainer.querySelector('#map');
    let otherProfil = document.querySelector('#other_profil');
    let streetview_place = document.querySelector('#streetview_place');

    locationContainer.classList.toggle('is-open');
    if (locationOpenCount === 1) {
        console.log('getMap appelé' + locationOpenCount);
        getMap(map.offsetWidth, map.offsetHeight);
        getBackground(window.innerWidth, window.innerHeight);
    };

    if (locationContainer.classList.contains('is-open')) {
        otherProfil.style.display = 'none';
        if (streetview_place) {
            streetview_place.style.display = 'block';
        }
    }else{
        otherProfil.style.display = 'block';
        if (streetview_place) {
            streetview_place.style.display = 'none';
        }
    }

    closeLocation.addEventListener('click', toggleDisplayLocation);
};

locationHeaderPanel.addEventListener('click', toggleDisplayLocation);

function getMap(width, height){
    let superContainer = document.querySelector('.other_profil');
    let key = 'AIzaSyBzxQ9wZ0MBGpvN02mb_rKkEqVDKAsZ4SM';
    let container = document.querySelector('#map');
    let map = new Image(width, height);
    map.alt = "Localisation de user"
    map.src = 'http://maps.googleapis.com/maps/api/staticmap?maptype=satellite&center=45.778423,-1.239304&zoom=14&size=' + width + 'x' + height + '&markers=label:1%7CAlbany,+NY&key='+key;
    // map.src = 'https://maps.googleapis.com/maps/api/streetview?size=' + width + 'x' + height + '&location=46.414382,10.013988&heading=151.78&pitch=-0.76&key=AIzaSyBzxQ9wZ0MBGpvN02mb_rKkEqVDKAsZ4SM';
    container.appendChild(map);
    superContainer.style.zIndex = 10;
};

function getBackground(width, height){
    let key = 'AIzaSyBzxQ9wZ0MBGpvN02mb_rKkEqVDKAsZ4SM';
    let container = document.querySelector('#otherProfil');
    let image = new Image(300, 250);
    image.src = 'https://maps.googleapis.com/maps/api/streetview?size=300x250&location=46.579966,0.340484&heading=0&pitch=0&key='+key;
    image.alt = 'Coucou';
    image.style.zIndex = 5;
    image.style.position = 'absolute';
    image.style.top = '50%';
    image.style.left = '50px';
    image.style.opacity = 0.7;
    image.style.transform = 'translateY(-50%)';
    image.style.boxShadow = '0 0 10px rgba(0, 0, 0, 0.4)';
    image.style.borderRadius = '4px';
    let link = document.createElement('a');
    link.href = 'https://www.google.fr/maps/@46.579966,0.340484,15z';

    link.appendChild(image);
    link.id = 'streetview_place';

    container.appendChild(link);
};

function displayMap(data){
    console.log(data);
    let map = document.querySelector('#map');
}


var heart = document.querySelector('#heart');

heart.addEventListener('click', function(e) {
        heart.classList.toggle('full');

        if (!(heart.classList.contains('full'))) {
            Velocity(heart, {opacity : 0.2}, 500);
        }else{
            Velocity(heart, {opacity : 1}, 500);
        }
    });
