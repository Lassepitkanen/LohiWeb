const loadGoogleMapsApi = require('load-google-maps-api');

export class MapContainer {
  attached() {
    this.initMap();
  }
  
  private initMap() {
    const el = document.querySelector('#map') as Element;
    const settings = {
      key: 'KEYHERE'
    };
    
    loadGoogleMapsApi(settings).then((googleMaps: any) => {
      const map = new googleMaps.Map(el, {
        zoom: 8,
        center: new googleMaps.LatLng(-34.397, 150.644),
        typeId: 'satellite'
      });
      map.setMapTypeId('satellite');
      // map.setTilt(0);
    })
  }
}
