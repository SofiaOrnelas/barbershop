import React, { Component } from 'react'
import {Map, InfoWindow, Marker, GoogleApiWrapper} from 'google-maps-react';

// class GoogleMap extends Component {
//   componentDidMount() {
//     const map = new window.google.maps.Map(document.getElementById('map'), {
//       center: { lat: 41.0082, lng: 28.9784 },
//       zoom: 8
//     });
//   }

//   render() {
//     return (
//       <div style={{ width: 300, height: 300 }} id="map" />
//     );
//   }
// }

// export default GoogleMap


class GoogleMap extends Component {
  render() {
    return (
      <div className="mainContacts-map-MAP">
       <Map google={this.props.google} zoom={10}>
          <Marker onClick={this.onMarkerClick}
                  name={'Current location'} />
          <InfoWindow onClose={this.onInfoWindowClose}>      
          </InfoWindow>
      </Map>
        
      </div>
    )
  }
}
export default GoogleApiWrapper({
  apiKey: ('AIzaSyD-Bi8gB7TrG8ERZIxKDTCrllaibgRomLg')
})(GoogleMap)
