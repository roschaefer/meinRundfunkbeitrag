import React, { Component, PropTypes } from 'react';
import ReactDOM from 'react-dom';
import { createContainer } from 'meteor/react-meteor-data';
import { Link } from 'react-router';
import Feed from '../components/Feed.jsx';

import { Programs } from '../../api/programs.js';


export default class Decide extends Component {

  render() {
    return (
      <div>
        <Feed programs={this.props.programs} />
      </div>
    );
  }
}


export default createContainer(() => {
  Meteor.subscribe('programs');

  return {
    programs: Programs.find({}).fetch(),
  };
}, Decide);
