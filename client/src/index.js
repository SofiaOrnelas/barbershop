import React from 'react';
import ReactDOM from 'react-dom';
import './index.scss';
import './Calendar.scss';
import { BrowserRouter as Router } from 'react-router-dom';
import App from './components/App.jsx';
// import registerServiceWorker from './registerServiceWorker';

import 'mapbox-gl/dist/mapbox-gl.css' // Import of Mapbox CSS
import mapboxgl from 'mapbox-gl/dist/mapbox-gl'

// ...

// Inform your Mapbox token (https://www.mapbox.com/account/)
mapboxgl.accessToken = 'pk.eyJ1IjoibmVsc29uYWlyZXMiLCJhIjoiY2p1bDFmbDFuMXc2MzQ0cWp4Nmo0dXV1dCJ9.WHo01Z-Xo84-oc9sd3l_qw'


ReactDOM.render(<Router><App /></Router>, document.getElementById('root'));
// registerServiceWorker();
