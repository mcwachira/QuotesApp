var Quotes = href =  https://thesimpsonsquoteapi.glitch.me/quotes;

document.getElementById('quote').addEventListner('click' ,function () {


    document.getElementById('change').innerHTML =(Quotes[n]);
    document.getElementById('Author').innerHTML   = (Author[o]);
    
});





 



   

    var tweetUrl = href="https://twitter.com/intent/tweet?text="+Quotes[n]+" By "+Author[o];

    document.getElementById('tweet-share').setAttribute('href',tweetUrl);


})



