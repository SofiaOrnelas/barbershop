import React, { Component } from 'react';
import GoogleMap from './GoogleMap';

export default class Contacts extends Component {
  render() {
    return (
    <div className="mainContacts" id="scroll">
      <div className="mainContacts-txt">
        <p className="contact"><h4>Morada:</h4>
          <h5>Rua Maria Alda Barbosa Nogueira n.4B, Amadora</h5></p>

        <p className="contact"><h4>Segunda a Sábado:</h4>
        <h5>9h-13h / 15h-19h</h5></p>

        <p className="contact"><h4>Domingo e Feriados:</h4>
        <h5>Descanso</h5></p>
      </div>

      <div className="mainContacts-map">
          <GoogleMap/>
      </div>
       
    </div>
    )
  }
}
