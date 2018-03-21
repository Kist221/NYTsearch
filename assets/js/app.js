// NYT Search App
var APIkey = "f944a4982edc4da3aa536bb309f9fcf4";

var url = "https://api.nytimes.com/svc/search/v2/articlesearch.json?q="+query+"&api-key="+APIkey;

var query = "trump";





$.ajax({
  url: url,
  method: 'GET',
}).done(function(result) {
  console.log(result.response.docs);





})