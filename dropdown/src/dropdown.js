var Button = require('./button');
var ListItem = require('./list-item');

module.exports = React.createClass({displayName: "exports",
  handleClick: function() {
    this.setState({open: !(this.state.open)})
  },
  handleItemClicked: function(item) {
    this.setState({
      open: false,
      itemTitle: item
    })
  },
  getInitialState: function() {
    return { open: false }
  },
  render: function() {

    var list = this.props.items.map(function(item){
      return React.createElement(ListItem, {
              item: item, 
              whenItemClicked: this.handleItemClicked, 
              className: this.state.itemTitle === item ? " active" : ""})
    }.bind(this));

    return (React.createElement("div", {className: "dropdown"}, 
      React.createElement(Button, {
        whenClicked: this.handleClick, 
        className: "btn-default", 
        title: this.state.itemTitle || this.props.title, 
        subTitleClassName: "caret"}), 
        React.createElement("ul", {className: "dropdown-menu" + (this.state.open ? " show" : "")}, 
          list
        )
      ))
  }
})