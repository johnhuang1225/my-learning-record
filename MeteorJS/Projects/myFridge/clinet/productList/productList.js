Template.productList.helpers({
  products: function () {
    return Products.find({
      place: 'supermarket'
    });
  }
});

Template.productList.onRendered(function() {
  var templateInstance = this;
  templateInstance.$('#supermarket').droppable({
    drop: function(evt, ui) {
      var query = { _id: ui.draggable.data('id') };
      var changes = { $set: { place: 'supermarket' } };
      Products.update(query, changes);
    }
  });
});
