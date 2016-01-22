(function($){
  // tooltip demo
    $('.tooltip-demo').tooltip({
      selector: "[data-toggle=tooltip]",
      container: "body"
    })
    $('#element').tooltip('show')

    $('.tooltip-test').tooltip()
    $('.popover-test').popover()
  
})(jQuery); // end of jQuery name spa