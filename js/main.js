// const realtweets = require('data/truetweets.json')
var score_phrases= {
  low:["Try again :(","You're better than this."],
  med:["Better than a monkey.","Not bad at all."],
  high:["You're a Trump expert!","The AI apocalypse is coming, and you're ready."]
}
var total_rounds = 5
var levels = [4,3]
var realtweet = realtweets[Math.floor(Math.random()*realtweets.length)];
var faketweet = faketweets[Math.floor(Math.random()*faketweets.length)];
// document.getElementById("right_text").innerHTML = realtweet;
// document.getElementById("left_text").innerHTML = faketweet;
var count = 1;
document.getElementById("right_text").innerHTML = realtweet;
document.getElementById("left_text").innerHTML = faketweet;

document.getElementById("right_corner").addEventListener("click", function(){refresh('right')})
document.getElementById("left_corner").addEventListener("click", function(){refresh('left')})

document.getElementById("round_no").innerHTML = 'Round ' + count +'/' + total_rounds;


var correct = 'left'
var correct_count = 0
function refresh(side){


  var correct_output = document.getElementById('correct');

  if(correct==side){
    correct_output.style.transition='none';
    correct_output.style.opacity = '1';
    correct_output.style.color = 'Green';

    correct_output.innerHTML='Correct! Fake indeed.';
    correct_count ++

    void correct_output.offsetWidth;
    correct_output.style.transition = 'opacity 2s';
    correct_output.style.opacity = '0';
  }
  else{
    correct_output.style.transition='none';

    correct_output.style.opacity = '1';
    correct_output.style.color = 'tomato';

    correct_output.innerHTML="Incorrect! That one's real!"

    void correct_output.offsetWidth;



    correct_output.style.transition = 'opacity 2s';
    correct_output.style.opacity = '0';


    /* This line seems to 'reset' the element so that the transition can be run again. */

  }

  document.getElementById('score').innerHTML=correct_count.toString()+'/'+total_rounds
  if (count >= total_rounds){
    // document.getElementById("right_text").innerHTML = 'DONE';
    document.getElementById('score').innerHTML=correct_count.toString()+'/'+total_rounds
    if (correct_count >= levels[0]){
      var score_phrase = score_phrases.high[Math.floor(Math.random()*score_phrases.high.length)];}
    else if (correct_count >= levels[1]){
      var score_phrase = score_phrases.med[Math.floor(Math.random()*score_phrases.med.length)];}
    else{
      var score_phrase = score_phrases.low[Math.floor(Math.random()*score_phrases.low.length)];}


    if(correct_count >= levels[1]){
      confetti.start(5000,300,300);
    }
    document.getElementById('score_phrase').innerHTML=score_phrase
    $('#myModal').modal('show');

    }
  else{
    count++;
    var realtweet = realtweets[Math.floor(Math.random()*realtweets.length)];
    var faketweet = faketweets[Math.floor(Math.random()*faketweets.length)];

    if (Math.random() >= 0.5){
      document.getElementById("right_text").innerHTML = realtweet;
      document.getElementById("left_text").innerHTML = faketweet;
      correct='left';}
    else{
      document.getElementById("right_text").innerHTML = faketweet;
      document.getElementById("left_text").innerHTML = realtweet;
      correct='right';
    }
  // document.getElementById("round_no").innerHTML = 'Round' + ;

  document.getElementById("round_no").innerHTML = 'Round ' + count +'/' + total_rounds;
  }
}
