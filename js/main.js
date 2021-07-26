require([
  "esri/config", 
  "esri/Map", 
  "esri/views/MapView", 
  "esri/layers/FeatureLayer"], 

function (esriConfig, Map, MapView, FeatureLayer) {

  esriConfig.apiKey = "AAPK1b87d644f9914a19a07a2def6f3d5001VQ9F9HzEcpLwMumB28Q3XNSyeVkKRJI0MZ7Is8RBKCeLWaO68-qsagt9V65pnZim";

  const map = new Map({
    basemap: "gray-vector" // Basemap layer service
  });

  const view = new MapView({
    map: map,
    center: [113.9213, -0.7893], // Longitude, latitude -118.80543,34.02700
    zoom: 4.5, // Zoom level
    container: "viewDiv" // Div element
  });

  const popupPositif = {
    "title": "{Provinsi}",
    "content": "<b>Tanggal:</b> {Tanggal}<br><b>Jumlah Kasus:</b> {Positif}"
  }

const Positif = new FeatureLayer({
    url: "https://services3.arcgis.com/hQKU525NiUUfWHRo/arcgis/rest/services/Data_persebaran_covid/FeatureServer",
    outFields: ["Provinsi","Positif", "Tanggal"],
    popupTemplate: popupPositif
  });

  map.add(Positif);

  const batasLayer = new FeatureLayer({
    url: "https://services3.arcgis.com/hQKU525NiUUfWHRo/arcgis/rest/services/BATAS%20PROVINSI%20DESEMBER%202019%20DUKCAPIL%20(SFILE_MOBI)/FeatureServer"
  });

  map.add(batasLayer, 0);
});