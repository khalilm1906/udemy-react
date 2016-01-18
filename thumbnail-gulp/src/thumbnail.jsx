var React = require('react');
var Badge = require('./badge');

module.exports = React.createClass({
  render: function() {
    return (<div className="thumbnail col-sm-4">
        <img src={this.props.imageURL} alt="React Logo"/>
        <div className="caption">
          <h3>{this.props.header}</h3>
          <p>{this.props.description}</p>

          <Badge title={this.props.title}  count={this.props.count} />

        </div>
    </div>)
  }
})
