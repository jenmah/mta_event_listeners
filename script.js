  var yourTripArray = [];
  var startStation = '';
  var endStation = '';
  var startLine = '';
  var endLine = '';

$(document).ready(function() {

  $('#button1').on('click', function(event) {
    var yourTrip = $('.your-trip');
    startStation = $('#start-station').val();
    yourTrip.append('<li>' + 'You are starting at ' + startStation + '</li>');
    yourTripArray.push(startStation);
    localStorage.setItem('startingStation', JSON.stringify(yourTripArray));
    $('#start-station placeholder').val('');
  })
    $('#button2').on('click', function(event) {
    var yourTrip = $('.your-trip');
    endStation = $('#end-station').val();
    yourTrip.append('<li>' + 'You are ending at ' + endStation + '</li>');
    yourTripArray.push(endStation);
    localStorage.setItem('endingStation', JSON.stringify(yourTripArray));
  })
    $('#button3').on('click', function(event) {
    var yourTrip = $('.your-trip');
    startLine = $('#start-line').val();
    yourTrip.append('<li>' + 'Your starting line is ' + startLine + '</li>');
    yourTripArray.push(startLine);
    localStorage.setItem('startingLine', JSON.stringify(yourTripArray));
  })
    $('#button4').on('click', function(event) {
    var yourTrip = $('.your-trip');
    endLine = $('#end-line').val();
    yourTrip.append('<li>' + 'Your ending line is ' + endLine + '</li>');
    yourTripArray.push(endLine);
    localStorage.setItem('endingLine', JSON.stringify(yourTripArray));
  });
});




// var mta = {
//   'n': ['ts', '34th', '28th-n', '23rd-n', 'us', '8th-n'],
//   'l': ['8th-l', '6th', 'us', '3rd', '1st'],
//   's': ['gc', '33rd', '28th-s', '23rd-s', 'us', 'ap']
// };

// function menu() {
//   var response = prompt('Welcome to MTA!!! \n(m)ta or (q)uit');
//   while(response !== 'q') {
//     var userInput = getUserInput();
//     var tripLength = calculateStops(userInput);
//     alert('Your trip length is ' + tripLength + ' stops!');
//   }
// }

// function getUserInput() {
//   var startTrain = prompt('What train do you want to get on at: \n' + Object.keys(mta).join(', ') + '?');
//   var firstStop = prompt('Which stop: ' + mta[startTrain].join(', '));
//   var stopTrain = prompt('What train do you want to get on at: \n' + Object.keys(mta).join(', ') + '?');
//   var lastStop = prompt('Which stop: ' + mta[stopTrain].join(', '));
  
//   return {startTrain: startTrain, 
//           firstStop: firstStop,
//           stopTrain: stopTrain,
//           lastStop: lastStop};
// }

// function calculateStops(userInput) {
//   return userInput.startTrain === userInput.stopTrain ? sameLine(userInput) : differentLines(userInput);
// }

// function differentLines(userInput) {
//   var intersection = mta[userInput.startTrain].filter(function(stop) {
//       return mta[userInput.stopTrain].indexOf(stop) != -1;
//     })[0];

//   var startTrainIndex = mta[userInput.startTrain].indexOf(userInput.firstStop);
//   var startTrainIntersectionIndex = mta[userInput.startTrain].indexOf(intersection);
//   var firstTripLength = Math.abs(startTrainIndex - startTrainIntersectionIndex);

//   var stopTrainIndex = mta[userInput.stopTrain].indexOf(userInput.lastStop);
//   var stopTrainIntersectionIndex = mta[userInput.stopTrain].indexOf(intersection);
//   var lastTripLength = Math.abs(stopTrainIndex - stopTrainIntersectionIndex);

//   return firstTripLength + lastTripLength;
// }

// function sameLine(userInput) {
//   return Math.abs(mta[userInput.startTrain].indexOf(userInput.firstStop) - mta[userInput.stopTrain].indexOf(userInput.lastStop));
// }

// menu();


// });