var map = L.map("map").setView([-9.648139, -35.717239], 13);

L.tileLayer("https://{s}.tile.openstreetmap.de/tiles/osmde/{z}/{x}/{y}.png", {
  attribution:
    '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
  maxZoom: 18
}).addTo(map);

var sidebar = L.control
  .sidebar({
    autopan: true, // whether to maintain the centered map point when opening the sidebar
    closeButton: true, // whether t add a close button to the panes
    container: "sidebar", // the DOM container or #ID of a predefined sidebar container that should be used
    position: "left" // left or right
  })
  .addTo(map);

/* add a new panel */
var panelContent = {
  id: "app_info", // UID, used to access the panel
  tab: "Y", // content can be passed as HTML string,
  pane:
    "<br>   <p> Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. </p>", // DOM elements can be passed, too
  title: "Yensa", // an optional pane header
  position: "top" // optional vertical alignment, defaults to 'top'
};
sidebar.addPanel(panelContent);

sidebar.addPanel({
  id: "user_info",
  tab: 'S',
  pane: ".",
  position: "top"
});

sidebar.open("app_info");

$(document).ready(function() {
  $.ajax({ url: "/complaints", dataType: "script" });
});
