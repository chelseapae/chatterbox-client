// MessagesView is an object which controls the DOM elements
// responsible for displaying messages.

var MessagesView = {

  $chats: $('#chats'),
  $username: $('.username'),

  initialize: function() {
    // TODO: Perform any work which needs to be done
    // when this view loads.
    MessagesView.$chats.on('click', MessagesView.handleClick);
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

  renderRoomMessage: function(roomname) {
    var i;
    var html = '';
    for (i = 0; i < 100; i++) {
      if(Messages._data[i].roomname === roomname) {
        html += MessageView.render(Messages._data[i]);
      }
    }
    $('#chats').prepend(html);
  },

  handleClick: function(event) {
    // TODO: handle a user clicking on a message username
    // (this should add the sender to the user's friend list).
    var username = event.target.innerText
    Friends.toggleStatus(username)
    console.log(document.getElementsByClassName('username'))
    userList = document.getElementsByClassName('username');
    for (var i = 0; i < userList.length; i++) {
      if(Friends._data.includes(userList[i].innerText)) {
        userList[i].classList.add('friend')
      }
    }
    console.log(Friends._data);

    //Rerender with friends bolding
    $('#friend').css({ 'font-weight': '1200' });
  }

  // boldFriends: function (){
  //   var children = MessagesView.$chats.children;
  //   for(var i=0; i<children.length; i++){
  //       if (friends._data contains username)
  //       var child = children[i];
  //       child.style.color = "red";
  // }
  // $myElement.css("font-weight","Bold");

// }
};