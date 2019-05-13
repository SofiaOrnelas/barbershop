import React, { Component } from 'react'
import { Button, Container, Table } from 'reactstrap';
import { Link } from 'react-router-dom'
import api from '../../api';

export default class List extends Component {
  constructor(props) {
    super(props)
    this.state = {
      Calendars: null
    }
  }
  renderGoogleMapLink(Calendar) {
    let [lng,lat] = Calendar.location.coordinates
    return <a href={`https://www.google.com/maps/dir//${lat},${lng}/@${lat},${lng},15z`} target="_blank">{lng},{lat}</a>
  }
  render() {
    return (
      <Container>
        <h1 className="mb-4">List of Street Arts</h1>
        {!this.state.Calendars && <div>Loading...</div>}
        {this.state.Calendars && <Table hover className="street-art-list">
          <thead>
            <tr>
              <th>Picture</th>
              <th>Google Maps Direction</th>
              <th>Detail</th>
            </tr>
          </thead>
          <tbody>
            {this.state.Calendars.map(Calendar => <tr key={Calendar._id} >
              <td>
                <img src={Calendar.pictureUrl} alt=""/>
              </td>
              <td>
                {this.renderGoogleMapLink(Calendar)}
              </td>
              <td><Button tag={Link} to={"/street-art-detail/"+Calendar._id} color="danger" outline>Detail</Button></td>
            </tr>)}
          </tbody>
        </Table>}
      </Container>
    )
  }
  componentDidMount() {
    api.getCalendars()
      .then(Calendars => {
        this.setState({
          Calendars
        })
      })
  }
}
