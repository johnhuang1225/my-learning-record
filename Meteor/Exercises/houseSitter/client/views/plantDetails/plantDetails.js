Template.plantDetails.helpers({
  isWatered: function () {
    var plantId = Session.get("selectedHouseId") + '-' + this.color;
    return Session.get(plantId) ? 'disabled' : '';
  }
});

Template.plantDetails.events({
  'click button.water': function (evt) {
    var plantId = $(evt.currentTarget).attr('data-id');
    Session.set(plantId, true);

    var lastvisit = new Date();
    HousesCollection.update({
      _id: Session.get("selectedHouseId")
    }, {
      $set: {
        lastvisit: lastvisit
      }
    });
  }
});
