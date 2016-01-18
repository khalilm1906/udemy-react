
module.exports = React.createClass({displayName: "exports",
  render: function() {
    return (
      React.createElement("div", null, 
        React.createElement("button", {className: "btn " + this.props.className, type: "button", onClick: this.props.whenClicked}, 
          this.props.title, 
          React.createElement("span", {className: this.props.subTitleClassName}, this.props.subTitle)
        )
      )
    )
  }

});