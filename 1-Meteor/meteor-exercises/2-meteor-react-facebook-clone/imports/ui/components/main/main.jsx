// import packages
import { Meteor } from 'meteor/meteor';
import React, { Component, PropTypes } from 'react';
import { createContainer } from 'meteor/react-meteor-data';

// import components
import Statusform from './statusform.jsx';
import Post from '../post/post.jsx';
import Ad from '../ad/ad.jsx';

// import apis
import Posts from '../../../api/posts/posts.js';
import DBAds from '../../../api/ads/ads.js';

// Task component - represents a single todo item
export default class Main extends Component {
  render(){

    var posts = this.data.posts.map(function (record) {
      return <Post key={record._id} post={record}/>;
    });

    let ads = this.data.ads.map(function(ad){
      return <Ad key={ad._id} ad={ad}/>;
    });

    return (
    <div className="col-sm-10 col-xs-11" id="main">
      <div>
        <div className="full col-sm-9">
          <div className="row">
            <div className="col-sm-9">
              <Statusform />
              {posts}
              <button onClick={this.addMore.bind(this)}
              className="btn btn-lg">More</button>13
            </div>
            <div className="col-sm-3">
              {ads}
            </div>
          </div>
        </div>
      </div>
    </div>
    );
  }
}

export default createContainer(() => {

  let data = {};
  data.posts = [];
  data.ads = [];

  let friends = Meteor.user() ? Meteor.user().profile.friends : [];
  friends.push(Meteor.user() ? Meteor.user()._id :'');

  // let posthandle = Meteor.subscribe('postlist', friends,this.state.limit);
  // let adhandle = Meteor.subscribe('adlist');

  // if(posthandle.ready()){
  //   data.posts = Posts.find({},{sort:{createdAt:-1}}).fetch();
  // }
  // if(adhandle.ready()){
  //   data.ads = DBAds.find({},{}).fetch();
  // }

  return {
    data: data
  };
}, Main);
