(function() {
  angular.module('chApp', [])
    .controller('AppCtrl', function ($scope) {
      $scope.title = "Hello World";
    });

  //TODO add service worker code here
  if('serviceWorker' in navigator) {
    navigator.serviceWorker
      .register('./service-worker.js')
      .then(function () {
        return navigator.serviceWorker.ready;
      }).then(function (reg) {
        console.log('Service Worker is ready :^)', reg);
        reg.pushManager.subscribe({userVisibleOnly: true}).then(function (sub) {
          console.log('endpoint:', sub.endpoint);
      });
    }).catch(function (error) {
      console.log('Service Worker error :^(', error);
    });
  }
})();

function openPushNotificationPopUp(){
  var popUp = document.getElementById('notificationpopUp');

  // Get the button that opens the modal
  var btn = document.getElementById("Find Hotels");

  // Get the <span> element that closes the modal
  var span = document.getElementById("notification-close");

  // When the user clicks the button, open the modal
  btn.onclick = function() {
    popUp.style.display = "block";
  }

  // When the user clicks on <span> (x), close the modal
  span.onclick = function() {
    popUp.style.display = "none";
  }

  // When the user clicks anywhere outside of the modal, close it
  window.onclick = function(event) {
    if (event.target == popUp) {
      popUp.style.display = "none";
    }
  }
}

