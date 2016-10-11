import React from 'react';
import { Meteor } from 'meteor/meteor';
import { Mongo } from 'meteor/mongo';
import { mount } from 'react-mounter';

import App from '../imports/ui/App.jsx';

Meteor.startup(() => {
  mount(App);
});
