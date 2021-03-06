function macySetup(){
       Macy.init({
        container: '#macy-container',
        trueOrder: false,
        waitForImages: false,
        margin: 24,
        columns: 2,
        breakAt: {
          1200: 2,
          940: 2,
          520: 1,
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