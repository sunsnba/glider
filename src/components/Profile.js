import React, { Component } from 'react';

class Profile extends Component {

  componentDidMount() {
      let header = new Headers ({"Content-Type":"application/json", "Authorization":"token 6145dffe984f85cf536d890cf1b969090384fc66"});
    fetch('https://api.github.com/users/sunsnba', {
        method: 'GET',
        headers: header  
      })
      .then(response => response.json())
      .then(json => {
        console.log(json)
      })
      .catch(error => console.log(error));
    }
  

  render() {
    return (
      <div>
        <p> Profile Goes Here </p>
      </div>
    );
  }
}

export default Profile;
