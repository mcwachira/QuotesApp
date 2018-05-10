

var Quotes  = [
'And since you know you cannot see yourself,so well as by reflection, I, your glass,will modestly discover to yourself,that of yourself which you yet know not of.',
'Our virtues and our failings are inseparable, like force and matter. When they separate, man is no more.',
"Today's scientists have substituted mathematics for experiments, and they wander off through equation after equation, and eventually build a structure which has no relation to reality.",
' I could only achieve success in my life through self-discipline, and I applied it until my wish and my will became one.',
"Blow, blow, thou winter wind Thou art not so unkind,As man's ingratitude.",
'The scientists of today think deeply instead of clearly. One must be sane to think clearly, but one can think deeply and be quite insane.',
'Courage is resistance to fear, mastery of fear - not absence of fear.',
"Don't go around saying the world owes you a living. The world owes you nothing. It was here first."
];






 var Author =   ["William Shakespeare","Nikola Tesla","Nikola Tesla","Nikola Tesla","William Shakespeare","Nikola Tesla","Mark Twain","Mark Twain"];

 


document.addEventListener("click",  function () {
    var n = Math.floor(Math.random() * Quotes.length);
    var o = Math.floor(Math.random() *  Author.length);   

    var tweetUrl = href="https://twitter.com/intent/tweet?text="+Quotes[n]+" By "+Author[o];

    document.getElementById('tweet-share').setAttribute('href',tweetUrl);


    document.getElementById('change').innerHTML =(Quotes[n]);
    document.getElementById('Author').innerHTML   = (Author[o]);
})



