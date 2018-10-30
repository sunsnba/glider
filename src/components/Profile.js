import React, { Component } from 'react';
import {Button, FormGroup, ControlLabel, FormControl} from 'react-bootstrap';

class Profile extends Component {

    constructor(props) {
        super (props);
        this.state = {
            userInfo: {},
            editing: false
        }
    }

  componentDidMount() {
    }
  

    updateValue (type, event) {
        var userInfoCopy = JSON.parse(JSON.stringify(this.state.userInfo));
        userInfoCopy[type] = event.target.value;
        this.setState ({userInfo:userInfoCopy})
    }

  render() {
    return (
        <div className="Container">
        <Button bsStyle="primary" onClick={() => this.setState({editing: !this.state.editing})}>Edit</Button>
        <hr />
        {this.state.editing ? 
            <FormGroup >
            <ControlLabel>Scott</ControlLabel>
            <FormControl
              type="text"
              value={this.state.userInfo.name}
              placeholder="Enter text"
              onChange={this.updateValue.bind(this, 'name')}
            />
            <ControlLabel>Bio</ControlLabel>
            <FormControl
              type="text"
              value={this.state.userInfo.bio}
              placeholder="Enter text"
              onChange={this.updateValue.bind(this, 'bio')}
            />
            <ControlLabel>Location</ControlLabel>
            <FormControl
              type="text"
              value={this.state.userInfo.location}
              placeholder="Enter text"
              onChange={this.updateValue.bind(this, 'location')}
            />
            <ControlLabel>Company</ControlLabel>
            <FormControl
              type="text"
              value={this.state.userInfo.company}
              placeholder="Enter text"
              onChange={this.updateValue.bind(this, 'company')}
            />
          </FormGroup>
            : 
        <div>
        <p><strong>Name: </strong> {this.state.userInfo.name}</p>
        <p><strong>Bio: </strong> {this.state.userInfo.bio}</p>
        <p><strong>Location: </strong> {this.state.userInfo.location}</p>
        <p><strong>Company: </strong> {this.state.userInfo.company}</p>
        </div>
        }

          
          </div>
      );
  }
}

export default Profile;
