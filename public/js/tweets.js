function getWord(data)
{     
    var randNumMax = data.length-1;
var randInt = (Math.floor(Math.random() * (randNumMax + 1)));
  return data[randInt];
}

var at = [];
var hash = [];
var long = [];

function sortWords(arr){
	arr.forEach(function(word){
		if (word.match(/^@/)){
			at.push(word)
		}
		else if (word.match(/^#/)){
			hash.push(word)
		}
		else if (word.length > 5 && !word.match(/^http/)){
			long.push(word)
		}
	})
}

$( document ).ready(function() {
	$.ajax({
			url: "http://mattwritespoetry.herokuapp.com/",
			success: function(data) {
				console.log("ajax is connecting")
				var Jdata = JSON.parse(data);
				sortWords(Jdata);						
				var str = '';
				for(var i=0; i<at.length; i++) {
					 str = getWord(at);
					 $( "#at" + i ).append(str);
				}
				for(var i=0; i<hash.length; i++) {
					 str = getWord(hash);
					 $( "#hash" + i ).append(str);
				}
				for(var i=0; i<long.length; i++) {
					 str = getWord(long);
					 $( "#long" + i ).append(str);
				}
			}
  });
});