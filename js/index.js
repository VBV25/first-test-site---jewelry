$(document).ready(function() {
    //hide #back-top farst (скрыть #назад-верхний фарст)
    $('#back-top').hide();
    //fade in#back-top (исчезает в#back-top)
    $(function() {
        $(window).scroll(function() {
            if ($(this).scrollTop() > 100) {
                $('#back-top').fadeIn();
            } else {
                $('#back-top').fadeOut();
            }
        });
        //scroll body to 0px on click
        $('#back-top a').click(function() {
            $('body,html').animate({ scrollTop: 0 }, 1200);
            return false;
        });
    });
});

/**/
/*форма отпраки*/
$(document).ready(function() {
    $('#phone').mask('+7(999)999-99-99');
});
/**/
$(document).ready(function() {
    $('#btn_form_order').on('click', function() {
        $('#messageShow').hide();
        var name = $('#name').val();
        var email = $('#email').val();
        var phone = $('#phone').val();

        var fail = '';
        if (name.length < 2)
            fail = 'Name at least 2 characters' /*Имя не меньше 2 символов*/ ;
        else if (
            email.split('@').length - 1 == 0 ||
            email.split('.').length - 1 == 0
        )
            fail = 'You entered an invalid email' /*Вы ввели некорректный email*/ ;
        else if (phone.length < 16)
            fail = 'Phone not correct' /*Номер телефона не менее 11 символов*/ ;

        if (fail != '') {
            $('#messageShow').html(fail + "<div class='clear'><br></div>");
            $('#messageShow').show();

            return false;
        }
        $.ajax({
            url: 'php/ajax.php',
            type: 'POST',
            cache: false,
            data: { name: name, email: email, phone: phone },
            dataType: 'html',
            success: function(data) {
                $('#messageShow').html(data + "<div class='clear'><br></div>");
                $('#messageShow').show();
            },
        });
    });
});