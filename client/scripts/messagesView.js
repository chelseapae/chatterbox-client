// MessagesView is an object which controls the DOM elements
// responsible for displaying messages.

var MessagesView = {

  $chats: $('#chats'),

  initialize: function() {
    // TODO: Perform any work which needs to be done
    // when this view loads.
  },

  render: function() {
    //confirmed data is copied to _data
    console.log('messagesView.js - render - _data: ', Messages._data);
    // TODO: Render _all_ the messages.
    var i, html = "";
    for (i = 0; i < 10; i++) {
      console.log('messagesView.js - render - forLoop - Messages._data[i]: ', Messages._data[i]);
      html += MessageView.render(Messages._data[i]);
      console.log('messagesView.js - render - forLoop - html: ', html);
    }
    $("#chats").append(html);
  },

  renderMessage: function(message) {
    // TODO: Render a single message.
    var newMsg = MessageView.render(message)
    console.log('messagesView.js - window', window)
    console.log('messagesView.js - newMsg: ', newMsg);
    console.log('messagesView.js - message in renderMessage', message)
    $('#chats').append(newMsg);
  },

  handleClick: function(event) {
    // TODO: handle a user clicking on a message
    // (this should add the sender to the user's friend list).
  }

};

console.log('messagesView.js - MessagesView', MessagesView)

