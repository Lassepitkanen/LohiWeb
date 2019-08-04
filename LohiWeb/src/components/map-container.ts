

export class MapContainer {
  attached() {
    this.initMap();
  }

  private initMap() {
    const mapOptions = {
      zoom: 8,
      center: new google.maps.LatLng(-34.397, 150.644),
    };
    const el = document.querySelector('#map');
    const map = new google.maps.Map(el, mapOptions);
    map.setMapTypeId('satellite');
    map.setTilt(0);
  }
}