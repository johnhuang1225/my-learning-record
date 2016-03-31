Template.houseForm.events({
  'click button#saveHouse': function (evt) {
    evt.preventDefault();
    var houseName = $('input[id=house-name]').val();
    var plantColor = $('input[id=plant-color]').val();
    var plantInstructions = $('input[id=plant-instructions]').val();

    selectedHouseId = HousesCollection.insert({
      name: houseName,
      plants: [{
        color: plantColor,
        instructions: plantInstructions
      }]
    });

    Session.set('selectedHouseId', selectedHouseId);
    // empty the form
    $('input').val('');
  }
});
