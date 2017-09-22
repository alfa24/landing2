/*

My Custom JS
============
*/

$(function () {

    $('#alertMe').click(function (e) {
        e.preventDefault();

        $('#successAlert').slideDown();
    });

    $('#alertClose').click(function (e) {
        e.preventDefault();

        $('#successAlert').slideUp();
    });

    $('a.pop').click(function (e) {
        e.preventDefault();
    })

    $('a.pop').popover();

    $('[rel="tooltip"]').tooltip();
});