import React, { Component, PropTypes } from 'react';
import { createContainer } from 'meteor/react-meteor-data';

// Task component - represents a single todo item
class Featurelist extends Component {

  renderFeatures() {
    let features = this.props.features.map((feature) => {
      return (
      <li key={feature.icon}>
        <h3 className='btn-btn-lg'>
          <i className={feature.icon}></i>
          <span>
            <strong> {feature.bigtext}</strong>
            <small> {feature.littletext}</small>
          </span>
        </h3>
      </li>
      );
    });

    return features;
  }

  render(){
    return (
    <div>
      <h2 className='col-md-11 featurelist hidden-xs'>
        Connect with friends and the
        world around you on Fakebook.
      </h2>
      <ul className='ds-btn hidden-xs'>
        {this.renderFeatures()}
      </ul>
    </div>
    );
  }
}

export default createContainer(() => {

  let features = [
    {
      icon: 'fa fa-image fa-2x',
      bigtext: 'See photos and updates',
      littletext: 'from friends in News Feed'
    },
    {
      icon: 'fa fa-share fa-2x',
      bigtext: 'Share what\'s new',
      littletext: 'in your life on your Timeline'
    },
    {
      icon: 'fa fa-search fa-2x',
      bigtext: 'Find more',
      littletext: 'of what you\'re looking for with Fakebook search'
    }
  ];

  return {
    features: features
  };
}, Featurelist);
