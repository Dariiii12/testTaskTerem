$(document).ready(function(){
    $('#hide').click(function(){
        $('#content').slideToggle();
    });
    $('#change').click(function(){
        $('#block-right').toggleClass('order')
    })
    var myModal = new bootstrap.Modal(document.getElementById('exampleModal'), {})
    myModal.show()
});
