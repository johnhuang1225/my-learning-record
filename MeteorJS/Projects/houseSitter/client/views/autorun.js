// Any function running inside such a block is automatically rerun whenever its dependencies (that is,
// the reactive data sources used within it) change. Meteor automatically detects which
// data sources are used and sets up the necessary dependencies.
Tracker.autorun(function () {
  console.log("The selectedHouse ID is: " +
  Session.get("selectedHouseId"));
});
