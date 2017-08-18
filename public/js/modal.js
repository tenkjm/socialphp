$('.post').find('.interaction').find('a').eq(2).on('click', function () {
    $('#edit-modal').modal();
});

console.log($('.post').find('.interaction').find('a'));