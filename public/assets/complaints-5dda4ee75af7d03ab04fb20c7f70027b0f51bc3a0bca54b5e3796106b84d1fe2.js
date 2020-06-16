var map = L.map("map").setView([-9.648139, -35.717239], 13);

L.tileLayer("https://{s}.tile.openstreetmap.de/tiles/osmde/{z}/{x}/{y}.png", {
  attribution:
    '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> | <a href="https://pickpoint.io/">PickPoint</a> contributors',
  maxZoom: 18,
  minZoom: 12
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
  pane: '<br><p class="is-family-primary has-text-weight-semibold is-size-6"> \
         Noise-map é um mapa interativo de relatos sobre ruídos urbanos como obras de construção civil, tráfego de veículos e vizinhos incômodos, por exemplo. \
         É possível visualizar os relatos através de marcadores no mapa que, ao serem clicados, revelam o tipo de ruído, a descrição proveniente do usuário e \
         o dia e hora em que o relato foi criado. <br><br> Caso haja uma área com alta concentração de relatos, estes serão agrupados para facilitar seu acesso, bem como para \
         melhorar a visibilidade do mapa. Nota-se o agrupamento através de um círculo colorido envolvendo um contador de relatos que, ao ser clicado, revela os marcadores anteriormente agrupados. \
         Além disso, é possível visualizar os relatos através do mapa de calor clicando no ícone <i class="fas fa-layer-group"></i>. \
         <br><br> Para adicionar um relato, clique no ícone <i class="fas fa-plus-circle"></i>. Para visualizar os relatos nos arredores de um determinado endereço, \
         clique no ícone <i class="fas fa-search"></i>. \
         </p>', // DOM elements can be passed, too
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
  button: function () { 
    heatmap_button = document.querySelector("a[href='#change_layer']")
    if(map.hasLayer(clusterLayer)){
      heatmap_button.classList.add("active-heatmap-button");
      map.removeLayer(clusterLayer)
      map.addLayer(heatmapLayer);
      heatmapLayer.setData(heatmapData);
    }
    else{
      heatmap_button.classList.remove("active-heatmap-button")
      map.removeLayer(heatmapLayer)
      map.addLayer(clusterLayer)  
    }
  }
});

sidebar.addPanel({
  id: 'charts',
  tab: '<i class="fas fa-chart-pie"></i>',
  pane: '<div class="container" id="charts"></div>',
  title: "Visualização de Dados",
  position: "top"
});

//Increase sidebar width when clicking on charts to improve visibility
sidebar.on('content', function (e) {
  const sidebarElement = document.querySelector('.leaflet-sidebar') 
  if (e.id == "charts"){
    sidebarElement.style.width = "50%"
    sidebarElement.style.maxWidth = "50%"
  }
  else{
    document.querySelector('.leaflet-sidebar').removeAttribute("style")
  }
})

//Remove attribute "style" to allow closing the sidebar (bug otherwise)
sidebar.on('closing', function (e) {
  document.querySelector('.leaflet-sidebar').removeAttribute("style")
})

sidebar.addPanel({
  id: 'github_link',
  tab: '<i class="fab fa-github"></i>',
  button: 'https://github.com/leo-holanda/noise-map',
  position: 'bottom'
});

sidebar.open("app_info");

document.addEventListener("DOMContentLoaded", function(event) {
  Rails.ajax({
    type: "GET", 
    url: "/complaints",
    dataType: "script",
  })
});
