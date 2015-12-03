// YOUR CODE GOES

var pageNum = function(){
  var href = $('a').attr('href')
  var pageNumber = href.match(/\d+/)[0]
  var updatePage = parseInt(pageNumber,10) + 1;
  $('a').attr('href', '/tweets?page=' + updatePage);
  return pageNumber;
};

var newTweets = function(newTweets) {
  newTweets.forEach(function(tweet) {
  $(".tweets").append("<li class='tweet'><div class='body'>" + tweet["text"] + "</div><div class='user'>" + "</div></li>");
}
)};

$(window).on('scroll', function(event) {
  if ($(window).scrollTop() == $(document).height() - $(window).height()) {
  event.preventDefault();

  var request = $.ajax({
    method: "GET",
    url: "/tweets.json",
    data: {page: pageNum()}
  });


  request.done(newTweets);
}
});
