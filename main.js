$(document).ready(function() {
  var crossOrigin = "https://cors-anywhere.herokuapp.com/";
  var API = "https://favqs.com/api/qotd";
  var currentQuote = "";
  function newQuote (data){
    $("#quote").text(data.quote.body);
    $("#author").text("By - " + data.quote.author);
    if(data.quote.body.length < 110){
      currentQuote = data.quote.body + " #" + data.quote.author.split(" ")[data.quote.author.split(" ").length - 1];
    }
    else{
      currentQuote = data.quote.body.slice(0,100) + "... AUTHOR - " + data.quote.author;
    }
    return currentQuote;
  };
  $.getJSON(crossOrigin + API, newQuote);
  $("#newQuote").on("click", function(){
      $.getJSON(crossOrigin + API, newQuote);
      $("#theQuote")
        .queue(function(){$( this ).addClass("fadeOutDownBig").dequeue();})
        .delay(100)
        .queue(function(){$( this ).removeClass("fadeOutDownBig").dequeue();})
      $(".fanew")
        .queue(function(){$( this ).addClass("fa-spin").dequeue();})
        .delay(1000)
        .queue(function(){$( this ).removeClass("fa-spin").dequeue();})
    });
  $("#link").on("click", function(){
    var tweet = encodeURIComponent(currentQuote);
    $("#link").attr("href", "https://twitter.com/intent/tweet?text=" + tweet + "&hashtags=RandomQuote%2CFCC&hashtags=Fuck");
  });
  !function(d,s,id){
    var js,fjs=d.getElementsByTagName(s)[0],p=/^http:/.test(d.location)?'http':'https';
    if(!d.getElementById(id)){
      js=d.createElement(s);
      js.id=id;
      js.src=p+'://platform.twitter.com/widgets.js';
      fjs.parentNode.insertBefore(js,fjs);
    }
  }
  (document, 'script', 'twitter-wjs');
  
});