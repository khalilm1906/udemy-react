var React = require('react');
var ReactDOM = require('react-dom');
var ThumbnailList = require('./thumbnail-list');

var options = {
  thumbnails: [{
    title: 'Show Courses',
    count: 5,
    imageURL: 'http://formatjs.io/img/react.svg',
    header: 'React Fundamental',
    description: "Lorem ipsum dolor sit amet, ius voluptua corrumpit mediocritatem ea, " +
    "pri sint doming regione no. Ei iuvaret veritus suscipiantur mea, nec " +
    "cu ferri instructior mediocritatem. Usu meis eirmod an. Qui id alii " +
    "tale, expetenda similique et duo. Mollis delicata in nam, animal "  +
    "denique eum no, ei altera corrumpit mei. Prompta assentior ea vel, " +
    "fugit honestatis cum an, vix ei omnis indoctum instructior."

  },{
    title: 'Show Courses',
    count: 12,
    imageURL: 'https://avatars0.githubusercontent.com/u/6200624?v=3&s=400',
    header: 'Gulp Fundamental',
    description: "Lorem ipsum dolor sit amet, ius voluptua corrumpit mediocritatem ea, " +
    "pri sint doming regione no. Ei iuvaret veritus suscipiantur mea, nec " +
    "cu ferri instructior mediocritatem. Usu meis eirmod an. Qui id alii " +
    "tale, expetenda similique et duo. Mollis delicata in nam, animal "  +
    "denique eum no, ei altera corrumpit mei. Prompta assentior ea vel, " +
    "fugit honestatis cum an, vix ei omnis indoctum instructior."

  }]
}

var element = React.createElement(ThumbnailList, options);
ReactDOM.render(element, document.querySelector('.container'));
