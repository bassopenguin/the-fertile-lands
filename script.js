var map;

// for people, castles, poi: [4] is the index in contentStrings of the infoWindows content
//                           [5] is true if the icon zoom should be customized
//                           [6] is the zIndex of the icon (larger zIndex appears in front of smaller zIndex)
var people = [
  // ['origin', 0, 0, 'blue_MarkerO.png', -1, false],
  ['Party', 24.906367, 43.198242, 'pink_MarkerP.png', 0, false, 1000],
  ["Aeris\'s Last Known Resting Place", 1.230374, -47.944336, 'googleMarkers/questionMark-2-medium.png', -1, false, 500],
  ["Azkhan\'s Rumored Lair", -71.910888, 144.492188, 'googleMarkers/questionMark-2-medium.png', -1, false, 500],
  ['Emperor Maximilian', -6.031311, -6.086426, /*-6.358975, -5.295410,*/ 'red_MarkerE.png', 1, false, 999],
  ["Hounds of Hölle", 25.363882, 44.340820, 'googleMarkers/questionMark-2-medium.png', -1, false, 100]//,
];

var bhors = [
  ["Bhors\' battle against a white dragon (or so he claims)", 33.687782, -17.973633, 'blue_MarkerB.png', -1, false, 500],
  ["Bhors meets Faenar: an elf-merchant who knew his mother", -27.994401, 7.690430, 'blue_MarkerB.png', -1, false, 500],
  ["Bhors\' mother\'s last known location", 23.986253, 44.121094, 'blue_MarkerB.png', -1, false, 500]
];

var fegio = [
  ["Fegio\'s early life", -28.478349, 6.525879, /*-28.052591, 6.437988,*/ 'orange_MarkerF.png', -1, false, 500],
  ["Fegio trains with the Order of Heironeous", -1.098565, 18.259277, 'orange_MarkerF.png', -1, false, 500]
];

var meara = [
  ["Meara\'s early life", -20.055931, 52.536621, 'darkgreen_MarkerM.png', -1, false, 500]
];

var stringer = [
  ["Stringer\'s early life", -25.997549919572098, 38.3642578125, 'darkgreen_MarkerS.png', -1, false, 500]
];

var ladon = [
  ["Ladon\'s early life", -18.062312, -41.835938, 'yellow_MarkerL.png', -1, false, 500],
  ["Ladon and Delita venture to the Fields of Ash; only Ladon returns rambling about emeralds", -6.140555, -46.054688, 'yellow_MarkerL.png', -1, false, 500]
];

var everly = [
  ["Everly\'s early life", -26.391870, 12.568359, 'brown_MarkerE.png', -1, false, 500]
];
var fruven = [
  ["Fruven\'s early life", -33.724340, 26.367188, 'paleblue_MarkerF.png', -1, false, 500]
];
var terevalis = [
  ["Terevalis\' early life", -29.554345, 7.053223, 'green_MarkerT.png', -1, false, 500]
];

var ilyena = [
  ["Ilyena\'s most recent location before joining the party", 22.268764, -3.735352, 'paleblue_MarkerI.png', -1, false, 500]
]

var castles = [
  ["Falcon\'s Perch", -7.144499, -5.449219, 'googleMarkers/historic-1-smallz0.png', -1, true, 250],
  ["Riedhof", -0.571280, 18.259277, 'googleMarkers/historic-1-smallz0.png', -1, true, 250],
  // ["Riedhof Bridge", -2.679687, 13.557129, 'googleMarkers/bridge-1-small.png', -1, true]//,
  ["Omsk", 18.458768, -10.129395, 'googleMarkers/historic-2-medium.png', -1, true, 250],
  ["Turin", -29.439598, 6.767578, 'googleMarkers/historic-1-smallz0.png', 3, true, 250],
  ["Meribor", -24.627045, 52.075195, 'googleMarkers/historic-1-smallz0.png', -1, true, 250]
];

var poi = [
  ["Mill", -0.109863, 16.083984, 'googleMarkers/browngeneric-1-smallz0.png', -1, true, 50],
  ["Brendon\'s shack", 0.593251, 16.853027, 'googleMarkers/browngeneric-1-smallz0.png', -1, true, 50],
  ["The Twins", 2.043024, 16.655273, 'googleMarkers/browngeneric-1-smallz0.png', -1, true, 50], // old location: 2.328460, 16.523438
  ["The Hill", /*3.272146, 16.523438*/ 3.250209, 16.523438, 'googleMarkers/browngeneric-1-smallz0.png', 4, true, 50],
  ["Shack by the Isar", 5.703448, 29.289551, 'googleMarkers/browngeneric-1-smallz0.png', -1, true, 50],
  ["Gnoll and hyena tracks", 6.664608, 28.037109, 'googleMarkers/browngeneric-1-smallz0.png', -1, true, 50],
  ["Rundown hut and a monsterous spider", 19.849394, 35.837402, 'googleMarkers/browngeneric-1-smallz0.png', -1, true, 50],
  ["Building flying Emperor\'s banners", 13.475106, 37.133789, 'googleMarkers/browngeneric-1-smallz0.png', -1, true, 75],
  ["Lucina\'s Rug Store", 13.710035, 36.166992, 'googleMarkers/browngeneric-1-smallz0.png', -1, true, 76]//,
]

var storyMarkers = [
  ['Jahmal of the Waste', -40.111689, -17.226563, 'skull.png', 2, false, 100],
  ['Seal\'s Journal', 62.633770, -15.644531, 'googleMarkers/questionMark-2-medium.png', 3, false, 100],
  ['Hold Fast!', -76.351896, 57.480469, 'googleMarkers/questionMark-2-medium.png', 4, false, 100],
  ['A Meeting in Shadow', 11.393879, 16.699219, 'googleMarkers/questionMark-2-medium.png', 5, false, 100]//,
]

var contentStrings = [
  '<div id="party-content"><h1>The Heroes</h1><div><p><b>Bold men and women looking to shape the future!</b></p></div></div>',
  '<div id="maximilian-content"><h1>Emperor Maximilian</h1><div><p>He was Governor of the East before storming the Falcon Perch and declaring himself the Emperor.</p></div></div>',
  '<div id="jahmal-content"><h1>Jahmal of the Waste</h1><div><p>Jahmal is a character in an episode about the Parched Southwest. He died alone under mysterious circumstances.</p><p><a href="http://the-fertile-lands.obsidianportal.com/wikis/jahmal-of-the-waste" target="_blank">Read story.</a></p></div></div>',
  '<div id="seal-content"><h1>Seal\'s Journal</h1><div><p>Seal is a character in an episode north of Altbasar. His journal entries are dire, but we do not know if he is alive.</p><p><a href="http://the-fertile-lands.obsidianportal.com/wikis/seals-journal" target="_blank">Read story.</a></p></div></div>',
  '<div id="hold-fast-content"><h1>Hold Fast!</h1><div><p>Captain Westwind and his crew are underway, but he has a harsh punishment in mind for those in his crew that disobey.</p><p><a href="http://the-fertile-lands.obsidianportal.com/wikis/hold-fast" target="_blank">Read story.</a></p></div></div>',
  '<div id="meeting-in-shadow-content"><h1>A Meeting in Shadow</h1><div><p>Two figures meet in an underground cave to discuss their next move; tensions are high between them.</p><p><a href="http://the-fertile-lands.obsidianportal.com/wikis/a-meeting-in-shadow" target="_blank">Read story.</a></p></div></div>',
  '<div id="turin-content"><h1>Turin</h1><h2>The Most Vibrant City in the World...</h2></div>',
  '<div id="the-hill-content"><h1>The Hill</h1><h2>An old, abandonded iron mine.</h2><p>The Party found, battled, and defeated nine gnolls in the mine before caving in the west entrance and leaving.</p><p>From the fight, the party gained experience, some treasure, and two letters written to Marc, the former forman of the mine</p></div>'
];

var partyTravel = [
  {lat: -0.263671, lng: 17.182617},
  {lat: 0.087891, lng: 16.391602},
  {lat: 0.834931, lng: 16.567383},
  {lat: 1.933227, lng: 15.996094},
  {lat: 2.328460, lng: 16.523438}, // The Twins
  {lat: 3.206333, lng: 16.523437}, // The Hill
  {lat: 2.328460, lng: 16.523438},
  {lat: 1.933227, lng: 15.996094},
  {lat: 0.834931, lng: 16.567383}, // Brendon's shack
  {lat: -1.120534, lng: 16.962891},
  {lat: -1.889306, lng: 18.588867},
  {lat: -0.900842, lng: 20.500488},
  {lat: 0.637194, lng: 20.566406},
  {lat: 1.340209, lng: 21.335449},
  {lat: 2.328460, lng: 21.972656},
  {lat: 3.162456, lng: 23.488770},
  {lat: 4.083453, lng: 24.191894},
  {lat: 4.302591, lng: 25.554199},
  {lat: 4.521666, lng: 27.575684},
  {lat: 4.828260, lng: 29.201660},
  {lat: 5.703448, lng: 30.036621},
  {lat: 5.900189, lng: 29.399414}, // Shack by the River Isar
  {lat: 6.009459, lng: 28.652344},
  {lat: 6.293459, lng: 28.278809}, // island over Isar
  {lat: 6.664608, lng: 28.037109}, // Gnoll and hyena tracks after seeing them overnight
  {lat: 8.189742, lng: 28.125000},
  {lat: 7.079088, lng: 27.773438},
  {lat: 6.096860, lng: 26.982422},
  {lat: 6.293459, lng: 28.278809}, // island over Isar
  {lat: 6.009459, lng: 28.652344},
  {lat: 6.708254, lng: 31.201172},
  {lat: 7.558547, lng: 31.860352},
  {lat: 8.102739, lng: 32.783203},
  {lat: 8.667918, lng: 35.024414},
  {lat: 10.703792, lng: 34.716797},
  {lat: 11.458491, lng: 35.222168},
  {lat: 12.232655, lng: 36.188965},
  {lat: 13.197165, lng: 36.584473},
  {lat: 13.688688, lng: 36.892090},
  {lat: 13.816744, lng: 36.430664},
  {lat: 14.370834, lng: 36.474609},
  {lat: 15.897942, lng: 36.452637},
  {lat: 16.804541, lng: 36.123047},
  {lat: 17.978733, lng: 35.903320},
  {lat: 19.766704, lng: 36.474609},
  {lat: 20.055931, lng: 35.881348}, // Run down shack with a monsterous spider within (burned down the web)
  {lat: 20.653346, lng: 36.979980},
  {lat: 21.922663, lng: 38.540039},
  {lat: 22.776182, lng: 39.221191},
  {lat: 24.186847, lng: 40.847168},
  {lat: 24.906367, lng: 43.198242}//, // OBERRAIN
  // {lat: , lng: },
  // {lat: , lng: },
  // {lat: , lng: },
  // {lat: , lng: },
  // {lat: , lng: },
];

var markers = [];
var zoomableMarkers = [];
var partyTravelPath = null;
// var animatePartyTravelPoints = [];

function makePartyTravel() {
  console.log("making path");
  partyTravelPath = new google.maps.Polyline({
    path: partyTravel,
    geodesic: true,
    strokeColor: 'hsl(300,100%,83%)',
    strokeOpacity: 1.0,
    strokeWeight: 3
  });
  console.log("path made");
}

function initPartyTravelPath() {
  console.log("initPartyTravelPath started");

  partyTravelPath = new google.maps.Polyline({
    strokeColor: 'hsl(300, 100%, 83%)',
    strokeWeight: 3,
    strokeOpacity: 1.0
  });
  partyTravelPath.setMap(map);

  console.log("initPartyTravelPath finished");
}

var polys = [];
function animateColorPolyLine() {
  console.log("animateColorPolyLine started");

  if (polys != []) {
    // console.log("polys is not null");
    for (var i = 0; i < polys.length; i++) {
      // console.log("clearing polys[" + i + "]");
      polys[i].setMap(null);
    }
    polys = [];
    console.log("finished clearing polys");
  }

  var t = 500;
  var step = 0;
  var maxSteps = partyTravel.length - 1;
  var secondsToDraw = 1000;
  var sat = 100 / maxSteps;
  var light = 83 / maxSteps;
  t = secondsToDraw / maxSteps;
  // console.log("maxSteps: " + maxSteps);
  var interval = setInterval(function () {
    if (step >= maxSteps)
      clearInterval(interval);
    else {
      // console.log("step " + step);
      // console.log("adding point (" + (step) + ", " + (step * 5) + ")");
      // console.log("real point (" + partyTravel[step].lat + ", " + partyTravel[step].lng + ")");

      polys[step] = new google.maps.Polyline({
        // strokeColor: '#ff0000',
        strokeOpacity: 1.0,
        strokeWeight: 3
      });
      polys[step].setMap(map);
      // console.log("created polys[" + step + "]");
      // theWay.push(new google.maps.LatLng(step, step * 5));
      var theWay = polys[step].getPath();
      theWay.push(new google.maps.LatLng(partyTravel[step].lat, partyTravel[step].lng));
      theWay.push(new google.maps.LatLng(partyTravel[step + 1].lat, partyTravel[step + 1].lng));
      // if (step == 10)
      //   polys[step].setOptions({strokeColor: 'blue'});
      // console.log("sat: " + sat * (step + 1) + "; light: " + light * (step + 1));
      polys[step].setOptions({strokeColor: 'hsl(300,' + sat * step + '%,' + light * step + '%)'});
      step++;
      // sat += sat;
      // light += light;
    }
  }, t);

  console.log("animateColorPolyLine finished");
}

function showPartyTravel() {
  if (partyTravelPath.getMap() != map) {
    partyTravelPath.setMap(map);
    console.log("path displayed");
    document.getElementById('partyTravel').innerHTML = "Hide Party Travel";
  }
  else {
    partyTravelPath.setMap(null);
    console.log("path hidden");
    document.getElementById('partyTravel').innerHTML = "Show Party Travel";
  }
}

function drop() {
  console.log("clicked drop");
  clearMarkers();
  for (var i = 0; i < people.length; i++) {
    addMarkerWithTimeout(people[i], i * 300);
  }
  for (i = 0; i < castles.length; i++) {
    addMarkerWithTimeout(castles[i], i * 250);
  }
  for (i = 0; i < poi.length; i++) {
    addMarkerWithTimeout(poi[i], i * 150);
  }
  for (i = 0; i < storyMarkers.length; i++) {
    addMarkerWithTimeout(storyMarkers[i], i * 125);
  }
  for (i = 0; i < bhors.length; i++) {
    addMarkerWithTimeout(bhors[i], i * 900);
  }
  for (i = 0; i < fegio.length; i++) {
    addMarkerWithTimeout(fegio[i], i * 915);
  }
  for (i = 0; i < meara.length; i++) {
    addMarkerWithTimeout(meara[i], i * 930);
  }
  for (i = 0; i < stringer.length; i++) {
    addMarkerWithTimeout(stringer[i], i * 945);
  }
  for (i = 0; i < ladon.length; i++) {
    addMarkerWithTimeout(ladon[i], i * 960);
  }
  for (i = 0; i < ilyena.length; i++) {
    addMarkerWithTimeout(ilyena[i], i * 975);
  }
  for (i = 0; i < everly.length; i++) {
    addMarkerWithTimeout(everly[i], i * 990);
  }
  for (i = 0; i < fruven.length; i++) {
    addMarkerWithTimeout(fruven[i], i * 1005);
  }
  for (i = 0; i < terevalis.length; i++) {
    addMarkerWithTimeout(terevalis[i], i * 1020);
  }
  console.log("finished drop");
}

function dropOnlyCastles() {
  console.log("clicked dropOnlyCastles");
  clearMarkers();

  for (i = 0; i < castles.length; i++) {
    addMarkerWithTimeout(castles[i], i * 250);
  }
  console.log("finished dropOnlyCastles");
}

function dropOnlyPOI() {
  console.log("clicked dropPOI");
  clearMarkers();

  for (var i = 0; i < poi.length; i++) {
    addMarkerWithTimeout(poi[i], i * 100);
  }
  console.log("finished dropOnlyPOI");
}

function showStoryMarkers() {
  console.log("passing through showStoryMarkers to dropOnlyStoryMarkers");
  dropOnlyStoryMarkers();
}

function dropOnlyStoryMarkers() {
  console.log("clicked dropOnlyStoryMarkers");
  clearMarkers();

  for (var i = 0; i < storyMarkers.length; i++) {
    addMarkerWithTimeout(storyMarkers[i], i * 100);
  }
  console.log("finished dropOnlyStoryMarkers");
}

function addMarkerWithTimeout(marker, timeout) {
  var position = new google.maps.LatLng(marker[1], marker[2]);
  var icon = "TFL/markers/" + marker[3];
  console.log("addMarkerWithTimeout started");
  window.setTimeout(function() {
    // if (marker[3] == 'party') {
    // console.log("marker icon == party");
    console.log("marker[0]: " + marker[0] + ", marker[6]: " + marker[6]);
    markers.push(new google.maps.Marker({
      position: position,
      map: map,
      title: marker[0],
      animation: google.maps.Animation.DROP,
      optimized: false,
      icon: icon,
      zIndex: marker[6]
    }));
    console.log("markers length: " + markers.length);
    var index = markers.length - 1;
    if (marker[5] == true) {
      console.log("making the marker icon zoom customized");
      zoomableMarkers.push(index);
      setZoomableMarkerIcon(markers[index], map.getZoom());
    }
    var infoWindowIndex = marker[4];
    console.log("infoWindows[" + infoWindowIndex + "], markers[" + index + "]");
    if (infoWindowIndex >= 0) {
      // console.log("adding info window to marker");
      markers[index].addListener('click', function() {
        infoWindows[infoWindowIndex].open(map, markers[index]);
      });
    }
  }, timeout);
  console.log("addMarkerWithTimeout finished");
}

function clearMarkers() {
  console.log("clearMarkers started");
  for (var i = 0; i < markers.length; i++) {
    markers[i].setMap(null);
  }
  markers = [];
  zoomableMarkers = [];
  console.log("clearMarkers finished");
}

var infoWindows = [];

function makeInfoWindows() {
  console.log("makeInfoWindows started");
  for (var i = 0; i < contentStrings.length; i++) {
    infoWindows.push(new google.maps.InfoWindow({
      content: contentStrings[i]
    }));
  }
  console.log("makeInfoWindows finished");
}

function initMap() {
  var falcon = new google.maps.LatLng(50,75);
  var bounds = new google.maps.LatLngBounds({lat: -85, lng: -180}, {lat: 85, lng: 180});
  map = new google.maps.Map(document.getElementById('map'), {
    center: {lat: 0, lng: 0},
    fitBounds: bounds,
    zoom: 2,
    streetViewControl: false,
    zoomControl: true,
    // mapTypeControl: false
    mapTypeControlOptions: {
      mapTypeIds: ['tfl']
    }
  });

  var imgMapType = new google.maps.ImageMapType({
    getTileUrl: function(coord, zoom) {
      x = coord.x;
      y = coord.y;
      // console.log(x + ", " + y + "; z: " + zoom)
      var path = "TFL/v2FullMap/" + zoom + "/";
      var bound = Math.pow(2, zoom)
      if (x < 0 || x >= bound)
      // return null;
      return "TFL/blankTile.JPG";
      if (y < 0 || y >= bound)
      // return null;
      return "TFL/blankTile.JPG";
      // if (x == 2 && y == 2 && zoom == 2) // for demo use
      //   return "TFL/v2FullMap/0/0_0.JPG";
      return path + x + "_" + y + ".JPG";
    },
    tileSize: new google.maps.Size(256,256),
    maxZoom: 6,
    minZoom: 2,
    name: 'The Fertile Lands',
    radius: 100000
  });

  map.addListener('click', function(e) {
    console.log("mouse clicked! " + e.latLng);
  });
  map.addListener('zoom_changed', function(e) {
    var zoom = map.getZoom();
    // console.log("zoom changed! " + zoom);

    for (var m = 0; m < zoomableMarkers.length; m++) {
      var midx = zoomableMarkers[m];
      // console.log("zoomableMarkers[" + m + "]: " + markers[midx].getIcon());
      setZoomableMarkerIcon(markers[midx], zoom);
    }
  });

  map.mapTypes.set('tfl', imgMapType);
  map.setMapTypeId('tfl');

  // make the controls
  var centerControlDiv = document.createElement('div');
  var topCenterControlDiv = document.createElement('div');
  var centerControl = new CenterControl(centerControlDiv, map);
  var topCenterControl = new TopControl(topCenterControlDiv, map);
  centerControlDiv.index = 1;
  topCenterControlDiv.index = 2;
  map.controls[google.maps.ControlPosition.LEFT_CENTER].push(centerControlDiv);
  map.controls[google.maps.ControlPosition.TOP_CENTER].push(topCenterControlDiv);

  makeInfoWindows();
  makePartyTravel();

  drop();
}

function CenterControl(controlDiv, map) {
  // Set CSS for the control border.
  var controlUI = document.createElement('div');
  controlUI.style.backgroundColor = '#fff';
  controlUI.style.border = '2px solid #fff';
  controlUI.style.borderRadius = '3px';
  controlUI.style.boxShadow = '0 2px 6px rgba(0,0,0,.3)';
  controlUI.style.cursor = 'pointer';
  // controlUI.style.marginBottom = '22px';
  controlUI.style.textAlign = 'center';
  controlUI.title = 'Click to drop all markers';
  controlDiv.appendChild(controlUI);
  var controlUI2 = document.createElement('div');
  controlUI2.style.backgroundColor = '#fff';
  controlUI2.style.border = '2px solid #fff';
  controlUI2.style.borderRadius = '3px';
  controlUI2.style.boxShadow = '0 2px 6px rgba(0,0,0,.3)';
  controlUI2.style.cursor = 'pointer';
  // controlUI2.style.marginBottom = '22px';
  controlUI2.style.textAlign = 'center';
  controlUI2.title = 'Click to drop castle markers';
  controlDiv.appendChild(controlUI2);
  var controlUI3 = document.createElement('div');
  controlUI3.style.backgroundColor = '#fff';
  controlUI3.style.border = '2px solid #fff';
  controlUI3.style.borderRadius = '3px';
  controlUI3.style.boxShadow = '0 2px 6px rgba(0,0,0,.3)';
  controlUI3.style.cursor = 'pointer';
  // controlUI3.style.marginBottom = '22px';
  controlUI3.style.textAlign = 'center';
  controlUI3.title = 'Click to drop story markers';
  controlDiv.appendChild(controlUI3);

  // Set CSS for the control interior.
  var controlText = document.createElement('div');
  controlText.style.color = 'rgb(25,25,25)';
  controlText.style.fontFamily = 'Roboto,Arial,sans-serif';
  controlText.style.fontSize = '16px';
  controlText.style.lineHeight = '38px';
  controlText.style.paddingLeft = '5px';
  controlText.style.paddingRight = '5px';
  controlText.innerHTML = 'Drop All Markers';
  controlUI.appendChild(controlText);
  var controlText2 = document.createElement('div');
  controlText2.style.color = 'rgb(25,25,25)';
  controlText2.style.fontFamily = 'Roboto,Arial,sans-serif';
  controlText2.style.fontSize = '16px';
  controlText2.style.lineHeight = '38px';
  controlText2.style.paddingLeft = '5px';
  controlText2.style.paddingRight = '5px';
  controlText2.innerHTML = 'Drop Castle Markers';
  controlUI2.appendChild(controlText2);
  var controlText3 = document.createElement('div');
  controlText3.style.color = 'rgb(25,25,25)';
  controlText3.style.fontFamily = 'Roboto,Arial,sans-serif';
  controlText3.style.fontSize = '16px';
  controlText3.style.lineHeight = '38px';
  controlText3.style.paddingLeft = '5px';
  controlText3.style.paddingRight = '5px';
  controlText3.innerHTML = 'Drop Story Markers';
  controlUI3.appendChild(controlText3);

  // add the event listener
  controlUI.addEventListener('click', drop);
  controlUI2.addEventListener('click', dropOnlyCastles);
  controlUI3.addEventListener('click', showStoryMarkers);
}

function TopControl(controlDiv, map) {
  // Set CSS for the Control Border
  var controlUI = document.createElement('div');
  controlUI.style.backgroundColor = '#fff';
  controlUI.style.border = '2px solid #fff';
  controlUI.style.borderRadius = '3px';
  controlUI.style.boxShadow = '0 2px 6px rgba(0,0,0,.3)';
  controlUI.style.cursor = 'pointer';
  controlUI.style.marginBottom = '22px';
  controlUI.style.textAlign = 'center';
  controlUI.title = 'Click to animate party travel';
  controlDiv.appendChild(controlUI);

  // Set CSS for the control interior.
  var controlText = document.createElement('div');
  controlText.style.color = 'rgb(25,25,25)';
  controlText.style.fontFamily = 'Roboto,Arial,sans-serif';
  controlText.style.fontSize = '16px';
  controlText.style.lineHeight = '38px';
  controlText.style.paddingLeft = '5px';
  controlText.style.paddingRight = '5px';
  controlText.innerHTML = 'Animate Party Travel';
  controlUI.appendChild(controlText);

  // add the event listener
  controlUI.addEventListener('click', animateColorPolyLine);
}

function setZoomableMarkerIcon(marker, zoom) {
  // console.log("marker.getIcon() == " + marker.getIcon());
  var suby = marker.getIcon();
  suby = suby.substring(26);
  var subyIndex = suby.indexOf("-");
  suby = suby.substring(0, subyIndex);
  // console.log("suby: " + suby);
  switch (zoom) {
    case 4:
    case 5:
      marker.setIcon("TFL/markers/googleMarkers/" + suby + "-1-small.png");
      break;
    case 6:
      marker.setIcon("TFL/markers/googleMarkers/" + suby + "-2-medium.png");
      break;
    default:
      marker.setIcon("TFL/markers/googleMarkers/" + suby + "-1-smallz0.png");
  }
  console.log("Set " + marker.getTitle() + " to " + marker.getIcon());
}
