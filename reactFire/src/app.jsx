var React = require('react');
var ReactDOM = require('react-dom');
var ReactFire = require('reactfire');
var Firebase = require('Firebase');
var rootUrl = 'https://khalil.firebaseio.com/';

var Hello = React.createClass({
  mixins: [ ReactFire ],
  componentWillMount: function() {
    this.bindAsObject(new Firebase(rootUrl + 'items/'), 'items');
  },
  render: function() {
    console.log(this.state);
    return <h1 className="red">
      Hello! React
    </h1>
  }
});


var element = React.createElement(Hello, {});
ReactDOM.render(element, document.querySelector('.container'));
