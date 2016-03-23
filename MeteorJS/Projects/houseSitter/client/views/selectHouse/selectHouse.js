Template.selectHouse.helpers({
  housesNameId: function () {
    // find all the HousesCollection documents and only return name & id fields
    return HousesCollection.find({}, {fields: {name: 1, _id: 1} });
  },
  isSelected: function () {
    return Session.equals('selectedHouseId', this._id) ? 'selected' : '';
  }
});

Template.selectHouse.events = {
  'change #selectHouse': function (evt) {
    Session.set('selectedHouseId', evt.currentTarget.value);
  }
};
