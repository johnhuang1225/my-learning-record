import React from 'react';
// The curly braces are used to specify which components to import from a .jsx file.
// If you don't use the curly braces it will import the default component.
import {mount} from 'react-mounter';
import {MainLayout} from '/client/layouts/mainLayout.jsx';

import Content from '/client/components/content.jsx';
import Navbar from '/client/components/navbar.jsx';
import Footer from '/client/components/footer.jsx';

FlowRouter.route("/", {
  action () {
    mount(MainLayout, {
      header: <Navbar/>,
      content: <Content name="Ethan"/>,
      footer: <Footer/>
    });
  }
});
