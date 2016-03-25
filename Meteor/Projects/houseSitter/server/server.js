// run every time when server start
Meteor.startup(function () {
  if (HousesCollection.find().count() === 0) {
    var houses = [{
      name: 'Manuel',
      plants: [{
        color: 'Red',
        instructions: '3 pots/week'
      }, {
        color: 'Yellow',
        instructions: 'keep humid'
      }]
    }, {
      name: 'Stephan',
      plants: [{
        color: 'Red',
        instructions: '3 pots/week'
      }, {
        color: 'White',
        instructions: 'water daily'
      }]
    }];
    while (houses.length > 0) {
      HousesCollection.insert(houses.pop());
    }
    console.log('Added fixtures');
  }
});
