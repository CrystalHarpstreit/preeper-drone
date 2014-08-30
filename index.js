var arDrone = require("ar-drone");
var client = arDrone.createClient();
var timedData;
var flyingData;

client.on("navdata", function(navdata) {
  timedData = navdata;
  // isolate a step on the server and console.log it
// constantly updating data with global var timedData

});

setInterval(function() {
  console.log(timedData.droneState.flying);
}, 2000);

// treat information from navdata like a js object
// grab flying data

client.animateLeds("blinkGreen", 5, 2);
console.log("first sequence");

client
  .after(5000, function() {
    this.animateLeds("snakeGreenRed", 5, 2);
    console.log('2nd seq');
  })
  .after(2000, function() {
    process.exit();
  });
