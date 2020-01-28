let testData = {
  max: 5,
  data: [{lat: -9.594249, lng: -35.739521, count: 1}]
};

const baseLayer = L.tileLayer(
  'https://{s}.tile.openstreetmap.de/tiles/osmde/{z}/{x}/{y}.png',{
    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
    maxZoom: 18
  }
);

const cfg = {
  // radius should be small ONLY if scaleRadius is true (or small radius is intended)
  // if scaleRadius is false it will be the constant radius used in pixels
  "radius": 0.0005,
  "maxOpacity": .8,
  // scales the radius based on map zoom
  "scaleRadius": true,
  // if set to false the heatmap uses the global maximum for colorization
  // if activated: uses the data maximum within the current map boundaries
  //   (there will always be a red spot with useLocalExtremas true)
  "useLocalExtrema": true,
  // which field name in your data represents the latitude - default "lat"
  latField: 'lat',
  // which field name in your data represents the longitude - default "lng"
  lngField: 'lng',
  // which field name in your data represents the data value - default "value"
  valueField: 'count'
};


const heatmapLayer = new HeatmapOverlay(cfg);

const map = new L.Map('map', {
  center: new L.LatLng(-9.63, -35.72),
  zoom: 14,
  layers: [baseLayer, heatmapLayer]
});

heatmapLayer.setData(testData);
