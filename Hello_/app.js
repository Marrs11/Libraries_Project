var g = G$("Jon", "Snow");
g.greet().setLang('bg').greet(true);

$('#login').click(function () {

    var loginHello = G$('Jon', 'Snow');

    $('#loginDiv').hide();

    loginHello.setLang($('#lang').val()).HTMLGreeting('#greeting', true).log();
});