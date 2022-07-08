// This object houses all the message _data_ for the app.
// Treat it like a data structure - add methods to interact
// with and manipulate the data.

var Messages = {

  // TODO: Define how you want to store your messages.
  _data: [],

  // TODO: Define methods which allow you to retrieve from,
  // add to, and generally interact with the messages.

  //retrieve from
  _get: function() {
    return Messages._data;
  },

  //Initialize data after fetch
  _setFetch: function(data) {
    Messages._data = data.slice();
  }
  // _setSingleMessage: function(message) {
  //   _data.splice(0, 0, message);
  // }
};
