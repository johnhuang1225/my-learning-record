Template.readCSV.events({
  "click .js-btnReadCsv": function(event, template) {

    // Reference http://papaparse.com/docs
    var papaConfig = {
      // If true, the first row of parsed data will be interpreted as field names.
      header: true,
      // If true, numeric and boolean data will be converted to their type instead of remaining strings.
      dynamicTyping: true,
      // If true, lines that are completely empty will be skipped. An empty line is defined to be one which evaluates to empty string.
      skipEmptyLines: true
    }

    var prseResultObject = Papa.parse(template.find('#csv').value, papaConfig);

    var dataObj = prseResultObject.data

    var dataString = JSON.stringify(dataObj);

    var dataPretty = JSON.stringify(JSON.parse(dataString),null,2)

    $('#json').val(dataPretty);

    event.preventDeafult();
  },

  "click .js-cleanUp": function(event, template) {
    $('#csv').val('');
    $('#json').val('');
    event.preventDeafult();
  }
});
