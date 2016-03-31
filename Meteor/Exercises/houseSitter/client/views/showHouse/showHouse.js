Template.showHouse.helpers({
  house: function () {
    return HousesCollection.findOne({
      _id: Session.get("selectedHouseId")
    });
  }
});

Template.showHouse.events({
  'click button#delete': function (evt) {
    var id = this._id;
    var deleteConfirmation = confirm('Really delete this house?');
    if (deleteConfirmation) {
      HousesCollection.remove(id);
    }
  }
});
