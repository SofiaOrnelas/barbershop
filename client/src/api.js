import axios from 'axios'

const service = axios.create({
  baseURL: process.env.NODE_ENV === 'production' ? '/api' : 'http://localhost:5000/api',
  withCredentials: true
})

const errHandler = err => {
  console.error(err)
  if (err.response && err.response.data) {
    console.error("API response", err.response.data)
    throw err.response.data.message
  }
  throw err
}

export default {
  service: service,

  // This method is synchronous and returns true or false
  // To know if the user is connected, we just check if we have a value for localStorage.getItem('user')
  isLoggedIn() {
    return localStorage.getItem('user') != null
  },
  isLoggedInEmployee() {
    return localStorage.getItem('user') != null && this.getLocalStorageUser().role !== "Customer"
  },

  // This method returns the user from the localStorage
  // Be careful, the value is the one when the user logged in for the last time
  getLocalStorageUser() {
    return JSON.parse(localStorage.getItem('user'))
  },

  // This method signs up and logs in the user
  signup(userInfo) {
    return service
      .post('/signup', userInfo)
      .then(res => {
        // If we have localStorage.getItem('user') saved, the application will consider we are loggedin
        localStorage.setItem('user', JSON.stringify(res.data))
        return res.data
      })
      .catch(errHandler)
  },

  login(email, password) {
    return service
      .post('/login', {
        email,
        password,
      })
      .then(res => {
        // If we have localStorage.getItem('user') saved, the application will consider we are loggedin
        localStorage.setItem('user', JSON.stringify(res.data))
        return res.data
      })
      .catch(errHandler)
  },

  logout() {
    localStorage.removeItem('user')
    return service
      .get('/logout')
  },

  getSecret() {
    return service
      .get('/secret')
      .then(res => res.data)
      .catch(errHandler)
  },

  addPicture(file) {
    const formData = new FormData()
    formData.append("picture", file)
    return service
      .post('/endpoint/to/add/a/picture', formData, {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      })
      .then(res => res.data)
      .catch(errHandler)
  },

  cancel(_id, hour) {
    return service
      .delete(`/schedules/${_id}/bookings`, { data: { hour: hour } })
      .then(res => res.data)
      .catch(errHandler)
  },

  reserve(_id, x) {
    return service
      .post(`/schedules/${_id}/bookings`, { hour: x })
      .then(res => res.data)
      .catch(errHandler)
  },

  getSchedules() {
    return service
      .get('/schedules')
      .then(res => res.data)
      .catch(errHandler)
  },

  getSchedulesOfConnectedEmployee() {
    return service
      .get('/my-schedules')
      .then(res => res.data)
      .catch(errHandler)
  },

  createSchedule(body) {
    return service
      .post('/schedules', body)
      .then(res => res.data)
      .catch(errHandler)
  },

  //TODO - create a new method to get the user's profile
  getProfile() {
    return service
      .get('/my-profile')
      .then(res => res.data)
      .catch(errHandler)
  },
  
  editProfile(data) {
    return service
    .put(`/my-profile/`, data)
    .then (res => res.data)
    .catch(errHandler)
  },

  getProfileId(id) {
    return service
      .get(`/profile/${id}`)
      .then(res => res.data)
      .catch(errHandler)
  }

}


