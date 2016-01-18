

module.exports = React.createClass({displayName: "exports",
  handleClick: function() {
    this.props.whenItemClicked(this.props.item);
  },
  render: function() {
    return (React.createElement("li", {className: this.props.className}, 
      React.createElement("a", {onClick: this.handleClick}, 
        this.props.item
      )
    ))
  }
})