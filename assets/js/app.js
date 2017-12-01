// NYT Search App
var APIkey = "f944a4982edc4da3aa536bb309f9fcf4";

var url = "https://api.nytimes.com/svc/search/v2/articlesearch.json?api-key="+APIkey+"?q="+query;

var query = "sample";

// url += '?' + $.param({
//   'api-key': "f944a4982edc4da3aa536bb309f9fcf4",
//   'q': "query",
//   'begin_date': "20000101",
//   'end_date': "20170707"
// });



$.ajax({
  url: url,
  method: 'GET',
}).done(function(result) {
  console.log(result);
}).fail(function(err) {
  throw err;
});