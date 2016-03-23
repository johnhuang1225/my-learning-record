Template.productListItem.onRendered(function() {
  var templateInstance = this;
  templateInstance.$('.draggable').draggable({
    cursor: 'move',
    helper: 'clone'
  });
});
