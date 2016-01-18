var React = require('react');
var Thumbnail = require('./thumbnail');


module.exports = React.createClass({
  render: function() {

    var thumbnails = this.props.thumbnails.map(function(tn){
      return <Thumbnail {...tn} />
    })

    return (<div>
        {thumbnails}
    </div>)
  }
})
