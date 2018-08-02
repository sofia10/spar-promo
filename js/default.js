$(document).ready(function () {
    // Bootstrap Select
    var $selectpicker = $('.selectpicker');
    $selectpicker.selectpicker();

    //search input
    $('.search-btn').click(function() {
        $('.click-search').addClass('active');
        $('.search-btn').addClass('active');
    });

    $(document).click(function(e) {
        if ( $(e.target).closest('.active').length === 0 ) {
            $('.click-search').removeClass('active');
            $('.search-btn').removeClass('active');
        }
    });

    // end search input

    $('.burger-btn').click(function(){
        $('.burger-nav').addClass('active');
        $( "body" ).css( "overflow-y", "hidden" );
    });

    $('.close-btn').click(function(){
        $('.burger-nav').removeClass('active');
        $( "body" ).css( "overflow-y", "auto" );
    });
});
