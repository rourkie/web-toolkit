require(['toolkit'], function(toolkit){
    $('#toggle-by-container .toggle-link').on('click', function() {
        toolkit.toggle({$elClicked:$(this)});
    });
});