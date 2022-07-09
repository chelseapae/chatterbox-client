// FormView is an object which houses all the message form functionality.
// Consider the provided code and complete the functionality.
// Apply what you learn here to other interactive views if necessary.

var FormView = {

  $form: $('form'),

  initialize: function() {
    FormView.$form.on('submit', FormView.handleSubmit);
  },

  handleSubmit: function(event) {
    // Stop the browser from submitting the form
    event.preventDefault();
    // var message = $('#message').val();
    // // TODO: Currently, this is all handleSubmit does.
    // // Make this function actually send a message to the Parse API.
    // // Create a new onclick event handler; inside that hander, add Parse.create

    //messageView.renderMessage
    //messageView.renderMessage is used
    //create message object
    //seperately get values from DOM
    var message = {
      //username
      username: App.username,
      //text
      // text: $('#message').val(),
      text: "test string",
      //roomname
      roomname: undefined
    }
    Parse.create(message); // Posting to server
    setTimeout(function(){
      App.fetch(App.stopSpinner);
    }, 1000);

    $('#chats').empty();


    //render new fetched data to DOM
    // MessagesView.render();
    // console.log('formView - handleSubmit')

    //Replaced with setTimeout as we believe a slow upload + fast download may lead to fetch happening before post is complete
    //App.fetch(App.stopSpinner); // After posting to server, fetch again without having to refresh page
    // MessagesView.renderMessage(message); // rendering the template with added message
  },

  setStatus: function(active) {
    var status = active ? 'true' : null;
    FormView.$form.find('input[type=submit]').attr('disabled', null);
  }

};