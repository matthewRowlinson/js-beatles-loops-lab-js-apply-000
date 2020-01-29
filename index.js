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
    facts[i].concat("!!!");
    i++;
  }
}
```
function iLoveTheBeatles(number){
  var i = 0;
  do{
    iLoveTheBeatles[i] = "I love the Beatles!";
    i++;
  }
  while(i < 15);
}
```