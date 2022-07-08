// Whereas MessagesView controls the entire list of messages,
// MessageView is responsible for rendering a single message.

var MessageView = {
  // Learn more about Underscore's templating capability
  // here: https://underscorejs.org/#template.
  // TODO: Update this template accordingly.
  render: _.template(`
    <div class='chat'>
      <div class='username'><%= message.username %></div>
      <div class='text'><%= message.text %></div>
    <div></div>
  </div>
  `)
}

console.log('messageView.js - message.username: ', message.username);
console.log('messageView.js - message.text: ', message.text);
console.log('messageView.js - MessageView.render', MessageView.render)
// console.log('data', data)


      // "<div class='chat'>" +
      //   "<div class='username'>" + "<%= message.username %>" + "</div>" +
      //   "<div class='text'>" + "<%= message.text %>" + "</div>" +
      //   "<div>" + "</div>" +
      // "</div>"