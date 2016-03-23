Template.fridge.helpers({
  products: function () {
    return Products.find({
      place: 'fridge'
    });
  }
});

Template.fridge.onRendered(function() {
  // this means Template.fridge
  var templateInstance = this;
  templateInstance.$('#fridge').droppable({
    drop: function(evt, ui) {
      // Get the database ID from the HTML attribute data-id.
      var query = { _id: ui.draggable.data('id') };
      // Set the update statement to set place to fridge.
      var changes = { $set: { place: 'fridge' } };
      // Perform the database update.
      Products.update(query, changes);
    }
  });
});
