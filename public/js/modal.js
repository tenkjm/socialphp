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
        url:urlEdit,
        data:{body: $('#post-body').val(), postId: postId, _token: token}
    })
        .done(function (msg) {
           $(postBodyElement).text(msg['new_body']);
           $('#edit-modal').modal('hide');
        });
});
//console.log($('.post').find('.interaction').find('a'));

$('.like').on('click', function(event) {
    event.preventDefault();
    postId = event.target.parentNode.parentNode.dataset['postid'];
    var isLike = event.target.previousElementSibling == null;
    $.ajax({
        method: 'POST',
        url: urlLike,
        data: {isLike: isLike, postId: postId, _token: token}
    })
        .done(function() {
            event.target.innerText = isLike ? event.target.innerText == 'Like' ? 'You like this post' : 'Like' : event.target.innerText == 'Dislike' ? 'You don\'t like this post' : 'Dislike';
            if (isLike) {
                event.target.nextElementSibling.innerText = 'Dislike';
            } else {
                event.target.previousElementSibling.innerText = 'Like';
            }
        });
});