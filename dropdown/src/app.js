var ReactDOM = require('react-dom');
var Dropdown = require('./dropdown');

var options = {
  title: 'Choose a desert',
  items: [ //List of items to show in dropdown
    'Apple Pie',
    'Peach Cobbler',
    'Coconut Cream Pie'
  ]
}

var element = React.createElement(Dropdown, options);
ReactDOM.render(element, document.querySelector('.container'));