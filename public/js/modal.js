var postId = 0;
var postBodyElement = null;

$('.post').find('.interaction').find('a').eq(2).on('click', function () {
    event.preventDefault();
    var postBodyElement = event.target.parentNode.parentNode.childNodes[1];
    var postBody = event.target.parentNode.parentNode.childNodes[1].textContent;
    var postId = event.target.parentNode.dataset['postId'];
    $('#post-body').val(postBody);
    $('#edit-modal').modal();
});


$('#modal-save').on('click', function () {
    $.ajax({
        method: 'POST',
        url:url,
        data:{body: $('#post-body').val(), postId: postId, _token: token}
    })
        .done(function (msg) {
           $(postBodyElement).text(msg['new_body']);
           $('#edit-modal').modal('hide');
        });
});
//console.log($('.post').find('.interaction').find('a'));