

var Quotes  = [];
 Quotes[0]= ('And since you know you cannot see yourself,so well as by reflection, I, your glass,will modestly discover to yourself,that of yourself which you yet know not of.  William Shakespeare');
 Quotes[1]= ('Our virtues and our failings are inseparable, like force and matter. When they separate, man is no more.Nikola Tesla');
 Quotes[2]= ("Today's scientists have substituted mathematics for experiments, and they wander off through equation after equation, and eventually build a structure which has no relation to reality.Nikola Tesla, Modern Mechanics and Inventions, July, 1934");
 Quotes[3]= (' I could only achieve success in my life through self-discipline, and I applied it until my wish and my will became one.Nikola Tesla ');
 Quotes[4]= ("Blow, blow, thou winter wind Thou art not so unkind,As man's ingratitude.William Shakespeare");
 Quotes[5]= ('The scientists of today think deeply instead of clearly. One must be sane to think clearly, but one can think deeply and be quite insane.Nikola Tesla, Modern Mechanics and Inventions. July, 1934');
 Quotes[6]= ('Courage is resistance to fear, mastery of fear - not absence of fear.Mark Twain');
 Quotes[7]= ("Don't go around saying the world owes you a living. The world owes you nothing. It was here first.Mark Twain");


 

 

 
 
 

document.addEventListener("click",  function () {
    var n = Math.floor(Math.random() * Quotes.length);

    document.getElementById('change').innerHTML =(Quotes[n]);
})