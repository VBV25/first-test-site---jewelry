$(document).ready(function() {
    $('.c_card_wraper').children('img').click(function() {
       
if($(this).hasClass('active_img')){
    $(this).removeClass('active_img');
}else{ $('.c_card_wraper').children('img').removeClass('active_img'); $(this).addClass('active_img');}
       
    })

});
