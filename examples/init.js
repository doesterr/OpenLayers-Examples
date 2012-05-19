function init() {
  OpenLayers.ImgPath = "../img/"
  var map = new OpenLayers.Map({
    div: "map",
    theme: null,
    layers: [new OpenLayers.Layer.OSM()]
  });
  map.zoomTo(2);

  var markerLayer = new OpenLayers.Layer.Markers("Markers");
  map.addLayer(markerLayer);

  lonLat = new OpenLayers.LonLat(0,0);
  marker = new OpenLayers.Marker(lonLat);
  markerLayer.addMarker(marker);
  marker.icon.imageDiv.title = "My title"
}