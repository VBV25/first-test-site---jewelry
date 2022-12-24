/*переключение цвета кнопки*/
$('#kits_silver ').click(function() {
    $('#group_nav_catalog_silver_kits_1').css({
        display: 'grid',
    });
    $('#kits_tab_silver').css({
        color: '#ffffff',
        'background-color': '#9d9d9d8f',
        border: 'solid 2px #ffffff',
    });
    $('#pendants_tab_silver, #earrings_tab_silver,#rings_tab_silver').css({
        color: '#ffffff',
        'background-color': '#000000',
        border: 'solid 2px #9d9d9d8f',
    });
});
/*при клике на кнопку мы меняем ее цвет на активный и придаем исходный цвет остальным*/
$('#rings_silver').click(function() {
    $('#group_nav_catalog_silver_rings_1').css({
        display: 'grid',
    });

    /*данная команда активирует первый блок с карточками для первой активной вкладки*/
    /** */
    $('#rings_tab_silver').css({
        color: '#ffffff',
        'background-color': '#9d9d9d8f',
        border: 'solid 2px #ffffff',
    });
    $('#pendants_tab_silver, #earrings_tab_silver,#kits_tab_silver').css({
        color: '#ffffff',
        'background-color': '#000000',
        border: 'solid 2px #9d9d9d8f',
    });
});
$('#earrings_silver').click(function() {
    $('#group_nav_catalog_silver_earrings_1').css({
        display: 'grid',
    });
    /** */
    $('#earrings_tab_silver').css({
        color: '#ffffff',
        'background-color': '#9d9d9d8f',
        border: 'solid 2px #ffffff',
    });
    $('#pendants_tab_silver, #kits_tab_silver,#rings_tab_silver').css({
        color: '#ffffff',
        'background-color': '#000000',
        border: 'solid 2px #9d9d9d8f',
    });
});
$('#pendants_silver').click(function() {
    $('#group_nav_catalog_silver_pendants_1').css({
        display: 'grid',
    });
    /** */
    $('#pendants_tab_silver').css({
        color: '#ffffff',
        'background-color': '#9d9d9d8f',
        border: 'solid 2px #ffffff',
    });

    $('#kits_tab_silver,#rings_tab_silver,#earrings_tab_silver').css({
        color: '#ffffff',
        'background-color': '#000000',
        border: 'solid 2px #9d9d9d8f',
    });
});

/** */
/** */
/** */
/** */
/** */
/** */
/** */
/** */
/*включение нижней панели соответствующей категории*/

$(document).ready(function() {
    $('#rings_silver').click(function() {
        $(
            '#group_btn_nav_catalog_silver_rings'
        ).show(); /*включаем нижнюю панель с навигационными кнопками данного товара при выборе категории товара*/
        $('#rings_container_silver').css({
            display: 'block',
        }); /*показываем секцию где хранятся карточки данного типа товаров*/
        $(
            '#group_btn_nav_catalog_silver_kits,#group_btn_nav_catalog_silver_earrings,#group_btn_nav_catalog_silver_pendants'
        ).hide(); /*выключаем нижние панели с навигационными кнопками других товаров при выборе категории товара*/
        $(
            '#earrings_container_silver,#pendants_container_silver,#kits_container_silver'
        ).css({
            display: 'none',
        }); /*скрываем секции где хранятся карточки других типов товара*/
        return false;
    });
});
$(document).ready(function() {
    $('#earrings_silver').click(function() {
        $('#group_btn_nav_catalog_silver_earrings').show();
        $('#earrings_container_silver').css({
            display: 'block',
        });
        $(
            '#group_btn_nav_catalog_silver_kits,#group_btn_nav_catalog_silver_rings,#group_btn_nav_catalog_silver_pendants'
        ).hide();
        $(
            '#rings_container_silver,#pendants_container_silver,#kits_container_silver'
        ).css({
            display: 'none',
        });
        return false;
    });
});
$(document).ready(function() {
    $('#pendants_silver').click(function() {
        $('#group_btn_nav_catalog_silver_pendants').show();
        $('#pendants_container_silver').css({
            display: 'block',
        });
        $(
            '#group_btn_nav_catalog_silver_kits,#group_btn_nav_catalog_silver_rings,#group_btn_nav_catalog_silver_earrings'
        ).hide();
        $(
            '#rings_container_silver,#earrings_container_silver,#kits_container_silver'
        ).css({
            display: 'none',
        });
        return false;
    });
});
$(document).ready(function() {
    $('#kits_silver').click(function() {
        $('#group_btn_nav_catalog_silver_kits').show();
        $('#kits_container_silver').css({
            display: 'block',
        });
        $(
            '#group_btn_nav_catalog_silver_rings,#group_btn_nav_catalog_silver_earrings,#group_btn_nav_catalog_silver_pendants'
        ).hide();
        $(
            '#rings_container_silver,#pendants_container_silver,#earrings_container_silver'
        ).css({
            display: 'none',
        });
        return false;
    });
});
/** */
/** */
/** */
/** */
/** */
/** */
/**слайдер rings*/

/** */
/*данным кодом мы активируем необходимые нам группы карточек данной товарной группы*/
$('#btn_nav_catalog_silver_rings_1').click(function() {
    $('body,html').animate({ scrollTop: 0 }, 1200);
    /*скролим при клике вверх*/
    $('#btn_nav_catalog_silver_rings_1').ready(function() {
        /*если кнопка активна то мы выводим соответствующую группу а другие скрываем*/
        if ($('#btn_nav_catalog_silver_rings_1').is(':checked')) {
            $('#group_nav_catalog_silver_rings_1').css({
                display: 'grid',
            });
            $('#group_nav_catalog_silver_rings_2').css({
                display: 'none',
            });
            $('#group_nav_catalog_silver_rings_3').css({
                display: 'none',
            });
            $('#group_nav_catalog_silver_rings_4').css({
                display: 'none',
            });

            return false;
        }
    });
});
$('#btn_nav_catalog_silver_rings_2').click(function() {
    $('body,html').animate({ scrollTop: 0 }, 1200);
    $('#btn_nav_catalog_silver_rings_2').ready(function() {
        if ($('#btn_nav_catalog_silver_rings_2').is(':checked')) {
            $('#group_nav_catalog_silver_rings_1').css({
                display: 'none',
            });
            $('#group_nav_catalog_silver_rings_2').css({
                display: 'grid',
            });
            $('#group_nav_catalog_silver_rings_3').css({
                display: 'none',
            });
            $('#group_nav_catalog_silver_rings_4').css({
                display: 'none',
            });

            return false;
        }
    });
});
$('#btn_nav_catalog_silver_rings_3').click(function() {
    $('body,html').animate({ scrollTop: 0 }, 1200);
    $('#btn_nav_catalog_silver_rings_3').ready(function() {
        if ($('#btn_nav_catalog_silver_rings_3').is(':checked')) {
            $('#group_nav_catalog_silver_rings_1').css({
                display: 'none',
            });
            $('#group_nav_catalog_silver_rings_2').css({
                display: 'none',
            });
            $('#group_nav_catalog_silver_rings_3').css({
                display: 'grid',
            });
            $('#group_nav_catalog_silver_rings_4').css({
                display: 'none',
            });

            return false;
        }
    });
});
/** */
/*отключен*/
$('#btn_nav_catalog_silver_rings_4').click(function() {
    /*отключен*/
    $('body,html').animate({ scrollTop: 0 }, 1200);
    $('#btn_nav_catalog_silver_rings_4').ready(function() {
        if ($('#btn_nav_catalog_silver_rings_4').is(':checked')) {
            $('#group_nav_catalog_silver_rings_1').css({
                display: 'none',
            });
            $('#group_nav_catalog_silver_rings_2').css({
                display: 'none',
            });
            $('#group_nav_catalog_silver_rings_3').css({
                display: 'none',
            });
            $('#group_nav_catalog_silver_rings_4').css({
                display: 'none' /*отключен*/ ,
            });

            return false;
        }
    });
});
/** */
/** */
/** */

/**слайдер kits*/
/*данная функция проверяет активность первой кнопки и выводит необходимую группу товаров которая соответствует 1 кнопки нижней навигации*/
$(document).ready(function() {
    if ($('#btn_nav_catalog_silver_kits_1').is(':checked')) {
        $('#group_nav_catalog_silver_kits_1').css({
            display: 'grid',
        });
        $('#group_nav_catalog_silver_kits_2').css({
            display: 'none',
        });
        $('#group_nav_catalog_silver_kits_3').css({
            display: 'none',
        });
        $('#group_nav_catalog_silver_kits_4').css({
            display: 'none',
        });

        return false;
    }
});
/** */
$('#btn_nav_catalog_silver_kits_1').click(function() {
    $('body,html').animate({ scrollTop: 0 }, 1200);

    $('#btn_nav_catalog_silver_kits_1').ready(function() {
        if ($('#btn_nav_catalog_silver_kits_1').is(':checked')) {
            $('#group_nav_catalog_silver_kits_1').css({
                display: 'grid',
            });
            $('#group_nav_catalog_silver_kits_2').css({
                display: 'none',
            });
            $('#group_nav_catalog_silver_kits_3').css({
                display: 'none',
            });
            $('#group_nav_catalog_silver_kits_4').css({
                display: 'none',
            });

            return false;
        }
    });
});
$('#btn_nav_catalog_silver_kits_2').click(function() {
    $('body,html').animate({ scrollTop: 0 }, 1200);
    $('#btn_nav_catalog_silver_kits_2').ready(function() {
        if ($('#btn_nav_catalog_silver_kits_2').is(':checked')) {
            $('#group_nav_catalog_silver_kits_1').css({
                display: 'none',
            });
            $('#group_nav_catalog_silver_kits_2').css({
                display: 'grid',
            });
            $('#group_nav_catalog_silver_kits_3').css({
                display: 'none',
            });
            $('#group_nav_catalog_silver_kits_4').css({
                display: 'none',
            });

            return false;
        }
    });
});
$('#btn_nav_catalog_silver_kits_3').click(function() {
    $('body,html').animate({ scrollTop: 0 }, 1200);
    $('#btn_nav_catalog_silver_kits_3').ready(function() {
        if ($('#btn_nav_catalog_silver_kits_3').is(':checked')) {
            $('#group_nav_catalog_silver_kits_1').css({
                display: 'none',
            });
            $('#group_nav_catalog_silver_kits_2').css({
                display: 'none',
            });
            $('#group_nav_catalog_silver_kits_3').css({
                display: 'grid',
            });
            $('#group_nav_catalog_silver_kits_4').css({
                display: 'none',
            });

            return false;
        }
    });
});
$('#btn_nav_catalog_silver_kits_4').click(function() {
    $('body,html').animate({ scrollTop: 0 }, 1200);
    $('#btn_nav_catalog_silver_kits_4').ready(function() {
        if ($('#btn_nav_catalog_silver_kits_4').is(':checked')) {
            $('#group_nav_catalog_silver_kits_1').css({
                display: 'none',
            });
            $('#group_nav_catalog_silver_kits_2').css({
                display: 'none',
            });
            $('#group_nav_catalog_silver_kits_3').css({
                display: 'none',
            });
            $('#group_nav_catalog_silver_kits_4').css({
                display: 'grid',
            });

            return false;
        }
    });
});
/** */
/** */
/** */

/**слайдер pendants*/

/** */
$('#btn_nav_catalog_silver_pendants_1').click(function() {
    $('body,html').animate({ scrollTop: 0 }, 1200);

    $('#btn_nav_catalog_silver_pendants_1').ready(function() {
        if ($('#btn_nav_catalog_silver_pendants_1').is(':checked')) {
            $('#group_nav_catalog_silver_pendants_1').css({
                display: 'grid',
            });
            $('#group_nav_catalog_silver_pendants_2').css({
                display: 'none',
            });
            $('#group_nav_catalog_silver_pendants_3').css({
                display: 'none',
            });
            $('#group_nav_catalog_silver_pendants_4').css({
                display: 'none',
            });

            return false;
        }
    });
});
$('#btn_nav_catalog_silver_pendants_2').click(function() {
    $('body,html').animate({ scrollTop: 0 }, 1200);
    $('#btn_nav_catalog_silver_pendants_2').ready(function() {
        if ($('#btn_nav_catalog_silver_pendants_2').is(':checked')) {
            $('#group_nav_catalog_silver_pendants_1').css({
                display: 'none',
            });
            $('#group_nav_catalog_silver_pendants_2').css({
                display: 'grid',
            });
            $('#group_nav_catalog_silver_pendants_3').css({
                display: 'none',
            });
            $('#group_nav_catalog_silver_pendants_4').css({
                display: 'none',
            });

            return false;
        }
    });
});
$('#btn_nav_catalog_silver_pendants_3').click(function() {
    $('body,html').animate({ scrollTop: 0 }, 1200);
    $('#btn_nav_catalog_silver_pendants_3').ready(function() {
        if ($('#btn_nav_catalog_silver_pendants_3').is(':checked')) {
            $('#group_nav_catalog_silver_pendants_1').css({
                display: 'none',
            });
            $('#group_nav_catalog_silver_pendants_2').css({
                display: 'none',
            });
            $('#group_nav_catalog_silver_pendants_3').css({
                display: 'grid',
            });
            $('#group_nav_catalog_silver_pendants_4').css({
                display: 'none',
            });

            return false;
        }
    });
});
$('#btn_nav_catalog_silver_pendants_4').click(function() {
    $('body,html').animate({ scrollTop: 0 }, 1200);
    $('#btn_nav_catalog_silver_pendants_4').ready(function() {
        if ($('#btn_nav_catalog_silver_pendants_4').is(':checked')) {
            $('#group_nav_catalog_silver_pendants_1').css({
                display: 'none',
            });
            $('#group_nav_catalog_silver_pendants_2').css({
                display: 'none',
            });
            $('#group_nav_catalog_silver_pendants_3').css({
                display: 'none',
            });
            $('#group_nav_catalog_silver_pendants_4').css({
                display: 'grid',
            });

            return false;
        }
    });
});
/** */
/** */
/**слайдер earrings*/

/** */
/*данным кодом мы активируем необходимые нам группы карточек данной товарной группы*/
$('#btn_nav_catalog_silver_earrings_1').click(function() {
    $('body,html').animate({ scrollTop: 0 }, 1200);
    /*скролим при клике вверх*/
    $('#btn_nav_catalog_silver_earrings_1').ready(function() {
        /*если кнопка активна то мы выводим соответствующую группу а другие скрываем*/
        if ($('#btn_nav_catalog_silver_earrings_1').is(':checked')) {
            $('#group_nav_catalog_silver_earrings_1').css({
                display: 'grid',
            });
            $('#group_nav_catalog_silver_earrings_2').css({
                display: 'none',
            });
            $('#group_nav_catalog_silver_earrings_3').css({
                display: 'none',
            });
            $('#group_nav_catalog_silver_earrings_4').css({
                display: 'none',
            });

            return false;
        }
    });
});
$('#btn_nav_catalog_silver_earrings_2').click(function() {
    $('body,html').animate({ scrollTop: 0 }, 1200);
    $('#btn_nav_catalog_silver_earrings_2').ready(function() {
        if ($('#btn_nav_catalog_silver_earrings_2').is(':checked')) {
            $('#group_nav_catalog_silver_earrings_1').css({
                display: 'none',
            });
            $('#group_nav_catalog_silver_earrings_2').css({
                display: 'grid',
            });
            $('#group_nav_catalog_silver_earrings_3').css({
                display: 'none',
            });
            $('#group_nav_catalog_silver_earrings_4').css({
                display: 'none',
            });

            return false;
        }
    });
});
$('#btn_nav_catalog_silver_earrings_3').click(function() {
    $('body,html').animate({ scrollTop: 0 }, 1200);
    $('#btn_nav_catalog_silver_earrings_3').ready(function() {
        if ($('#btn_nav_catalog_silver_earrings_3').is(':checked')) {
            $('#group_nav_catalog_silver_earrings_1').css({
                display: 'none',
            });
            $('#group_nav_catalog_silver_earrings_2').css({
                display: 'none',
            });
            $('#group_nav_catalog_silver_earrings_3').css({
                display: 'grid',
            });
            $('#group_nav_catalog_silver_earrings_4').css({
                display: 'none',
            });

            return false;
        }
    });
});
/** */
/*отключен*/
$('#btn_nav_catalog_silver_earrings_4').click(function() {
    /*отключен*/
    $('body,html').animate({ scrollTop: 0 }, 1200);
    $('#btn_nav_catalog_silver_earrings_4').ready(function() {
        if ($('#btn_nav_catalog_silver_earrings_4').is(':checked')) {
            $('#group_nav_catalog_silver_earrings_1').css({
                display: 'none',
            });
            $('#group_nav_catalog_silver_earrings_2').css({
                display: 'none',
            });
            $('#group_nav_catalog_silver_earrings_3').css({
                display: 'none',
            });
            $('#group_nav_catalog_silver_earrings_4').css({
                display: 'none' /*отключен*/ ,
            });

            return false;
        }
    });
});
/** */
/** */
/** */