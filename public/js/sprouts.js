// YOUR CODE GOES

$(".more-sprouts").on('click', function(event) {
  event.preventDefault();

  var request = $.ajax({
    method: "GET",
    url: "/tweets.json",
    data: {page: pageNum()}
  });


  request.done(newTweets);
});

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
