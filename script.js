function initMap() {

  const markers = [
    {
      locationName: 'Stuart Building',
      lat: 41.8386867,
      lng: -87.6276365,
      address: '10 W 31st St,<br> Chicago,<br> IL 60616'
    }
  ];

  const centerMap = { lat: 41.8386867, lng: -87.6276365 }

  const mapOptions = {
    center: centerMap,
    zoom: 18,
    disableDefaultUI: true
  }

  const map = new google.maps.Map(document.getElementById('myMap'), mapOptions);

  const marker = new google.maps.Marker({
    position: { lat: markers[0]['lat'], lng: markers[0]['lng'] },
    map: map,
  });

  var alertbox = document.getElementById("entrybutton").addEventListener("click", popup);

  function popup() {
    alert("If you have questions, contact me at: jtaylor39@hawk.illinoistech.edu");
    document.getElementById
  }

}





/*function alert(){
var alertbox = document.getElementById("entrybutton").addEventListener("click", popup);
}

function popup() {
    var textentry = document.getElementById("entryinput").value;
    document.getElementById("textoutput").innerHTML = textentry;
    alert("If you have questions, contact me at: jtaylor39@hawk.illinoistech.edu");
    document.getElementById
}*/

window.addEventListener('load', init);