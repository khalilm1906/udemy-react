var React = require('react');
var Thumbnail = require('./thumbnail');

module.exports = React.createClass({
  handleClick: function() {
    console.log("You clicked me.");
  },
  render: function() {
    return (
      <div>
        <button className="btn btn-primary" type="button" onClick={this.handleClick}>
          {this.props.title} <span className="badge">{this.props.count}</span>
        </button>
      </div>
    )
  }

});
