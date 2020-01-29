function theBeatlesPlay(musicians, instruments){
  var array = Array();
  for (let i = 0; i < musicians.length; i++){
    array[i] = musicians[i] + " plays " + instruments[i];
  }
  return array;
}

function johnLennonFacts(facts){
  let i = 0; 
  while(facts[i]){
  facts[i] = facts[i].concat("!!!");
    i++;
  }
  return facts;
}

function iLoveTheBeatles(number){
    var beatles = Array();
  do{
    beatles[number] = "I love the Beatles!";
    number++;
  }
  while(number < 15);
  return beatles;
}
