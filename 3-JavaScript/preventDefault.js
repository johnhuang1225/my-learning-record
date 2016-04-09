// Preventing the browser’s default behavior

Template.layout.events({
  'click a': function(event, template){
    // Prevents the browser from executing the default action — that is, following the link
    event.preventDefault();
    console.log('Please do not leave yet');
  }
});
