function macySetup(){
       Macy.init({
        container: '#macy-container',
        trueOrder: false,
        waitForImages: false,
        margin: 24,
        columns: 2,
        breakAt: {
          1200: 2,
          940: 3,
          520: 2,
          400: 1
        }
    });
  }
$(document).ready(function() {
  macySetup();
});
$(window).resize(function(event) {
  macySetup();
});