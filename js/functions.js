$(document).ready(function() {
    /*HOVER SUBMENU*/
    $(".submenu-topo-list li").mouseover(function() {
        $(".submenu-content").removeClass('hide');
        var categoria = $(this).data("categorias");
        // $('.submenu-topo-list li').addClass('hide');
        // $(this).removeClass('hide');

        $(".sub-content-categorias").addClass('hide');
        $(".cat" + categoria).removeClass('hide');
    });
    $(".top").mouseover(function() {
        $(".submenu-content").addClass('hide');
    });
    $(".wrap-content").mouseover(function() {
        $(".submenu-content").addClass('hide');
    });

    /*PARALLAX*/
    $.stellar();
});