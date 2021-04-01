"use strict";

$(document).ready(function ()
{
    $(".chosen-select").chosen();

    var master = $('.master > .owl-carousel').owlCarousel({
        stagePadding: 0,
        items: 1,
        margin: 0,
        nav: false,
        dots: false,
        autoplay: false,
        loop: true
    });

    $('.master > .prev').on('click', function ()
    {
        master.trigger('prev.owl.carousel');
        master.trigger('stop.owl.autoplay');
    });

    $('.master > .next').on('click', function ()
    {
        master.trigger('next.owl.carousel');
        master.trigger('stop.owl.autoplay');
    });

    var gallery = $('.gallery > .owl-carousel').owlCarousel({
        stagePadding: 0,
        items: 1,
        margin: 0,
        nav: false,
        dots: false,
        autoplay: false,
        loop: true
    });

    $('.gallery > .prev').on('click', function ()
    {
        gallery.trigger('prev.owl.carousel');
        gallery.trigger('stop.owl.autoplay');
    });

    $('.gallery > .next').on('click', function ()
    {
        gallery.trigger('next.owl.carousel');
        gallery.trigger('stop.owl.autoplay');
    });

    $('form[name="contact"]').on('submit', function(e)
    {
        e.preventDefault();

        var form = $(this);

        $.ajax({
            type: 'POST',
            data: form.serialize() + '&action=contact',
            processData: false,
            cache: false,
            dataType: 'json',
            success: function(response)
            {
                if (response.status == 'success')
                {
                    alert('Gracias por ponerte en contacto');
                    location.reload();
                }
                else if (response.status == 'error')
                {
                    var errors = '';

                    for (var i = 0; i < response.errors.length; i++)
                        errors = errors + response.errors[i] + ' - ';

                    alert(errors);
                }
            }
        });
    });
});
