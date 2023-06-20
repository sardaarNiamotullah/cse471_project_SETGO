'use strict';

navigator.geolocation.getCurrentPosition(
  function (position) {
    const userPosLati = position.coords.latitude;
    const userPosLong = position.coords.longitude;
    const userCoords = [userPosLati, userPosLong];

    const map = L.map('map').setView(userCoords, 13);
    L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
      maxZoom: 19,
      attribution:
        '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>',
    }).addTo(map);
    L.marker(userCoords).addTo(map)
    // .bindPopup('Your Current Location')
    .openPopup();
  },
  function () {
    const map = L.map('map').setView([51.505, -0.09], 13);
    L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
      maxZoom: 19,
      attribution:
        '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>',
    }).addTo(map);
    L.marker([51.5, -0.09]).addTo(map)
    // .bindPopup('A pretty CSS popup.<br> Easily customizable.')
    .openPopup();
  }
);

const line = document.querySelectorAll(".line")

line[0].addEventListener('click', function() {
    let preHTML = line[0].innerHTML;
    line[0].innerHTML = `${preHTML}<div class="places"></div>`;
});
line[1].addEventListener('click', function() {
    let preHTML = line[1].innerHTML;
    line[1].innerHTML = `${preHTML}<div class="places"></div>`;
});