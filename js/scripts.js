
//<--Front End-user logic--->
$ (document).ready(function() {
  $ ("form").submit(function(event){
event.preventDefult();
var inputSentence = $(#inputSentence).val();
var transPig = translate(inputSentence);
$(#result).text(transPig);


  });
});







//--! Back End- Business logic-->

var vowel = ['a','e','i','o','u']


if ()
















