var FCM = require('fcm-node');

var serverKey = 'AIzaSyBKG0gSLjbmFYcdJOXjyCGOyhFqmHgR57U';
var fcm = new FCM(serverKey);

console.log(fcm);
var message = { //this may vary according to the message type (single recipient, multicast, topic, et cetera)
    to: 'fdJuWVOYltw:APA91bEBGaj3oTep9vzEOAsy748n7MLsj0rBnBeluiCyHgLMYk7rQC1qnG4niGk3RY_0bfwV-r60U2kAhbIJFTSR0jDOsjOnAdNhSDe06YOgpCegcRI46JlM9dmL8FZjzOWCAzAuu6_L',

};

fcm.send(message, function(err, response){
    if (err) {
        console.log("Something has gone wrong!");
    } else {
        console.log("Successfully sent with response: ", response);
    }
});