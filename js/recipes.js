$('.down').click(function(){
    $(this).closest('.recipes-menu_item').addClass('active');
    $(this).closest('.recipes-menu_item').find('.recipes_inner-menu').slideDown('slow');
})
$('.up').click(function(){
    $(this).closest('.recipes-menu_item').removeClass('active');
    $(this).closest('.recipes-menu_item').find('.recipes_inner-menu').slideUp('slow');
})


var myScreenWidth = $(document).width();

if(myScreenWidth <= 991) {
    $('.recipes-menu_title').click(function(){
        $('.recipes-menu-items').stop().slideToggle("slow");
    })
}
