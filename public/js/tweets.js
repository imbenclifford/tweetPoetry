function getWord(data)
{   
    var words=data.split(' ');    
    console.log(words.length);
    var randNumMax = words.length-1;
var randInt = (Math.floor(Math.random() * (randNumMax + 1)));
  return words[randInt];
}

$( document ).ready(function() {
	$.ajax({
			url: "http://warwick-163705.euw1.nitrousbox.com/",
			success: function(data) {
				var Jdata = JSON.parse(data);
				var str = '';
				console.log(Jdata)
				for(var i=0; i<Jdata.length; i++) {
					 str = getWord(Jdata[i])
					 $( "#tweets" + i ).append(str);
				}
			}
  });
});