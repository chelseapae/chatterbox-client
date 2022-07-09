// MessagesView is an object which controls the DOM elements
// responsible for displaying messages.

var MessagesView = {

  $chats: $('#chats'),

  initialize: function() {
    // TODO: Perform any work which needs to be done
    // when this view loads.
  },

  render: function() {
    // TODO: Render _all_ the messages.
    var i;
    var html = '';
    for (i = 0; i < 10; i++) {
      html += MessageView.render(Messages._data[i]);
    }
    $('#chats').prepend(html);
  },

  renderMessage: function(message) {
    // TODO: Render a single message.
    var newMsg = MessageView.render(message);
    $('#chats').prepend(newMsg);
  },

  handleClick: function(event) {
    // TODO: handle a user clicking on a message
    // (this should add the sender to the user's friend list).
  }

};