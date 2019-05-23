import React, { Component } from 'react';
import mapboxgl from 'mapbox-gl/dist/mapbox-gl'

class GoogleMap extends Component {
  constructor(props) {
    super(props)
    this.mapRef = React.createRef()
    this.map = null
    this.marker = null
    this.popup = null
  }
  initMap() {
    // Embed the map where "this.mapRef" is defined in the render
    this.map = new mapboxgl.Map({
      container: this.mapRef.current,
      style: 'mapbox://styles/mapbox/streets-v11',
      center: [-9.223362, 38.756331], // Barbearia Duarte lng,lat
      zoom: 14
    })
    

    // Add zoom control on the top right corner
    this.map.addControl(new mapboxgl.NavigationControl())

    // Marker on the map in Barbearia ([-9.223362, 38.756331])
    this.popup = new mapboxgl.Popup({ offset: 25 })
      .setHTML(`<a href=https://goo.gl/maps/8QrGYraLyHaTMsPw9>DuArte Barbearia ✂</a>`);
    this.marker = new mapboxgl.Marker({ color: 'red' })
      .setLngLat([-9.223362, 38.756331])
      .setPopup(this.popup)
      .addTo(this.map)
  }
  render() {
    return (
      <div className="mainContacts-map-MAP">
        {/* The map will be injected here. */}
        <div ref={this.mapRef}></div>
      </div>
    )
  }
  componentDidMount() {
    this.initMap()
  }
}

export default GoogleMap

// LINK PARA GOOGLE_MAPS DUARTE: https://goo.gl/maps/8QrGYraLyHaTMsPw9
