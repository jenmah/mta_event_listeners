  var yourTripArray = [];
  var startStation = [];
  var endStation = [];
  var startLine = [];
  var endLine = [];

$(document).ready(function() {

  $('#button4').on('click', function(event) {
    var yourTrip = $('.your-trip');
    startStation = $('#start-station').val();
    yourTrip.append('<li>' + 'you are starting at ' + startStation + '</li>');
    yourTripArray.push(startStation);
    localStorage.setItem('startingStation', JSON.stringify(yourTripArray));
    $('#start-station placeholder').val('');
  })
    $('#button4').on('click', function(event) {
    var yourTrip = $('.your-trip');
    endStation = $('#end-station').val();
    yourTrip.append('<li>' + 'you are ending at ' + endStation + '</li>');
    yourTripArray.push(endStation);
    localStorage.setItem('endingStation', JSON.stringify(yourTripArray));
  })
    $('#button4').on('click', function(event) {
    var yourTrip = $('.your-trip');
    startLine = $('#start-line').val();
    yourTrip.append('<li>' + 'your starting line is ' + startLine + '</li>');
    yourTripArray.push(startLine);
    localStorage.setItem('startingLine', JSON.stringify(yourTripArray));
  })
    $('#button4').on('click', function(event) {
    var yourTrip = $('.your-trip');
    endLine = $('#end-line').val();
    yourTrip.append('<li>' + 'your ending line is ' + endLine + '</li>');
    yourTripArray.push(endLine);
    localStorage.setItem('endingLine', JSON.stringify(yourTripArray));
  });
// });




var mta = {
  'n': ['ts', '34th', '28th-n', '23rd-n', 'us', '8th-n'],
  'l': ['8th-l', '6th', 'us', '3rd', '1st'],
  's': ['gc', '33rd', '28th-s', '23rd-s', 'us', 'ap']
};

function menu() {
    var userInput = getUserInput();
    // var tripLength = calculateStops(userInput);
    alert('Your trip length is ' + tripLength + ' stops!');
  }

function getUserInput() {
    startLine = startLine;
    startStation = startStation;
    endLine = endLine;
    endStation = endStation;
  
  return {startLine: startLine, 
          startStation: startStation,
          endLine: endLine,
          endStation: endStation};
}

// function calculateStops(userInput) {
//   return userInput.startLine === userInput.endLine ? sameLine(userInput) : differentLines(userInput);
// }

// function differentLines(userInput) {
//   var intersection = mta[userInput.startLine].filter(function(stop) {
//       return mta[userInput.endLine].indexOf(stop) != -1;
//     })[0];

//   var startTrainIndex = mta[userInput.startLine].indexOf(userInput.startStation);
//   var startTrainIntersectionIndex = mta[userInput.startLine].indexOf(intersection);
//   var firstTripLength = Math.abs(startTrainIndex - startTrainIntersectionIndex);

//   var stopTrainIndex = mta[userInput.endLine].indexOf(userInput.lastStop);
//   var stopTrainIntersectionIndex = mta[userInput.endLine].indexOf(intersection);
//   var lastTripLength = Math.abs(stopTrainIndex - stopTrainIntersectionIndex);

//   return firstTripLength + lastTripLength;
// }

function sameLine(userInput) {
  return Math.abs(mta[userInput.startLine].indexOf(userInput.startStation) - mta[userInput.endLine].indexOf(userInput.endStation));
}

menu();

});