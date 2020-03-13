# Noise Map

Interactive map where the user can see and create reports of urban noise marked on the map with a pointer that, when clicked, shows information about the noise. Reports are grouped into clusters to facilitate access to data. It is also possible to view the data through a heat map.

## Built With

* [Leaflet](https://leafletjs.com/) - "an open-source JavaScript library for mobile-friendly interactive maps"
* [Leaflet-sidebar-v2](https://github.com/nickpeihl/leaflet-sidebar-v2) - "A responsive sidebar with tabs just for Leaflet"
* [Leaflet.markercluster](https://github.com/Leaflet/Leaflet.markercluster) - "Marker Clustering plugin for Leaflet"
* [OpenStreetMap](https://www.openstreetmap.org/about) - Map tiles
* [heatmap.js](https://www.patrick-wied.at/static/heatmapjs/) - "Dynamic Heatmaps for the Web"
* [Bulma](https://bulma.io/) - CSS Framework
* [Geocoder](https://github.com/alexreisner/geocoder) - "Complete Ruby geocoding solution"
  * [PickPoint](https://pickpoint.io/) - "Geocoding service for developers"
* [Font Awesome](https://fontawesome.com/) - Icon set

## Getting Started

1. Clone this repository from your terminal:
```
git clone https://github.com/leo-holanda/noise-map.git
```
2. Go to the project's folder:
```
cd noise-map
```
3. Install dependencies
```
bundle install
yarn install
```
4. Migrate the database
```
rails db:migrate
```
5. Run the application
```
rails server
```
6. Open your browser in [https://localhost:3000](https://localhost:3000)
