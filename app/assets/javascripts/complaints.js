var map = L.map("map").setView([-9.648139, -35.717239], 13);

L.tileLayer("https://{s}.tile.openstreetmap.de/tiles/osmde/{z}/{x}/{y}.png", {
  attribution:
    '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
  maxZoom: 18
}).addTo(map);

var sidebar = L.control.sidebar({
    autopan: true, // whether to maintain the centered map point when opening the sidebar
    closeButton: false, // whether t add a close button to the panes
    container: "sidebar", // the DOM container or #ID of a predefined sidebar container that should be used
    position: "left" // left or right
}).addTo(map);

sidebar.addPanel({
  id: "app_info", // UID, used to access the panel
  tab: '<i class="fas fa-home"></i>', // content can be passed as HTML string,
  pane: `<br><p class="is-family-primary has-text-weight-semibold is-size-6"> 
         Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
         Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
         Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
         Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
         </p>`, // DOM elements can be passed, too
  title: "Mapa de Ruído Urbano", // an optional pane header
  position: "top"
});

sidebar.addPanel({
  id: "search_address",
  tab: '<i class="fas fa-search"></i>',
  pane: " ",
  title: "Procurar endereço",
  position: "top"
});

sidebar.addPanel({
  id: "create_complaint",
  tab: '<i class="fas fa-plus-circle"></i>',
  pane: " ",
  title: "Inserir relato",
  position: "top"
});

sidebar.addPanel({
  id: 'change_layer',
  tab: '<i class="fas fa-layer-group"></i>',
  button: function (event) { 
    if(map.hasLayer(clusterLayer)){
      map.removeLayer(clusterLayer)
      map.addLayer(heatmapLayer);
      heatmapLayer.setData(heatmapData);
    }
    else{
      map.removeLayer(heatmapLayer)
      map.addLayer(clusterLayer)  
    }
  }
});

sidebar.addPanel({
  id: 'github_link',
  tab: '<i class="fab fa-github"></i>',
  button: 'https://github.com/leo-holanda',
  position: 'bottom'
});

sidebar.open("app_info");

document.addEventListener("DOMContentLoaded", function(event) {
  Rails.ajax({
    type: "GET", 
    url: "/complaints",
    dataType: "script",
  })
})
