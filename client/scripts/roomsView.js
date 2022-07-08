// RoomsView is an object which controls the DOM elements
// responsible for displaying and selecting rooms.

var RoomsView = {

  $button: $('#rooms button'),
  $select: $('#rooms select'),
  $room: $('#rooms'),

  initialize: function() {
    // TODO: Perform any work which needs to be done
    // RoomsView.$button.on('click', RoomsView.handleClick);
    // when this view loads.

  },

  render: function() {
    // TODO: Render out the list of rooms.
    // for (var i = 0; i < Rooms._data.length; i++) {
      // $('#rooms select').append($('<option>' + '<%- Rooms._data[i] %>' + '</option>'));
      // $('#rooms select').append(new Option(Rooms._data[i], Rooms._data[i]));
    // }
  },

  renderRoom: function(roomname = "Lobby") {
    // TODO: Render out a single room.
    // $('#rooms select').append(new Option(roomname, roomname));
  },

  handleChange: function(event) {
    // TODO: Handle a user selecting a different room.
  },

  handleClick: function(event) {
    // TODO: Handle the user clicking the "Add Room" button.
    // var userInput = prompt("Some Prompt");
    // RoomsView.renderRoom(userInput);
    // alert($("#rooms select :selected").text());
  }
};
