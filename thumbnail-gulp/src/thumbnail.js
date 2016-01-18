var Badge = require('./badge');

module.exports = React.createClass({displayName: "exports",
  render: function() {
    return (React.createElement("div", {className: "thumbnail col-sm-4"}, 
        React.createElement("img", {src: this.props.imageURL, alt: "React Logo"}), 
        React.createElement("div", {className: "caption"}, 
          React.createElement("h3", null, this.props.header), 
          React.createElement("p", null, this.props.description), 

          React.createElement(Badge, {title: this.props.title, count: this.props.count})

        )
    ))
  }
})