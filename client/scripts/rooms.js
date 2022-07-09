// This object houses all the room _data_ for the app.
// Treat it like a data structure - add methods to interact
// with and manipulate the data.

var Rooms = {

  // // TODO: Define how you want to store the list of rooms
  _data: [],

  // TODO: Define methods which allow you to add rooms, update the list,
  // mark a room as selected, etc.
  // _add: function(){
  //   var newRoom = $('<option></option>')
  //   RoomsView.$select.append(newRoom)
  // },

  _update: function() {

  },

  _get: function() {
    return Rooms._data;
  },

  _setRooms: function(data) {
    for (var i = 0; i < data.length; i++) {
      if (!Rooms._data.includes(data[i].roomname)) {
        Rooms._data.push(data[i].roomname);
      }
    }
    console.log('rooms.js - _setRooms - _data: ', Rooms._data);
  }
};