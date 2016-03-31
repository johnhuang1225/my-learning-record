import React from 'react';
import TrackerReact from 'meteor/ultimatejs:tracker-react';

Resolutions = new Mongo.Collection('resolutions');

export default class App extends TrackerReact(React.Component) {

  resolutions() {
    // Resolutions.find() return cursor .fetch() return object
    return Resolutions.find().fetch();
  }

  addResolution(event){
    event.preventDefault();
    // console.log(this);
    var text = this.refs.resolution.value.trim();

    Resolutions.insert({
      text: text,
      complete: false,
      createAt: new Date()
    })

    this.refs.resolution.value = "";
  }

  render() {
    let res = this.resolutions();
    return (
      <div>
        <h1>My Resolutions</h1>
        <form className="new-resolution" onSubmit={this.addResolution.bind(this)}>
          <input type="text" ref="resolution" placeholder="Finish React Meteor Series" />
        </form>
      </div>
    )
  }
}
