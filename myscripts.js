(function (window) {

	var helloSpeaker = {};

	var speak = "Hello";

	helloSpeaker.speak = function (name) {

		console.log (speak + ' ' + name);

	}

	window.helloSpeaker = helloSpeaker;

})(window)

/** If the name starts with a letter j or J,
 it will print out Goodbye JSomeName. 
 If the name starts with any other letter,
  it will print out Hello SomeName.**/
(function () {

var names = ["Yaakov", "John", "Jen", "Jason", "Paul", "Frank", "Larry", "Paula", "Laura", "Jim"];

for (var i = 0; i < names.length; i++) {

  var firstLetter = names[i].charAt(0).toLowerCase();

  if (firstLetter === 'j') {

    byeSpeaker.speak(names[i]);

  } 

  else {

    helloSpeaker.speak(names[i]);

  }
  
}

})();
(function (window) {

	var byeSpeaker = {};

	var speak = "Good Bye";

	byeSpeaker.speak = function (name) {

		console.log (speak + " " + name);

	}

	window.byeSpeaker = byeSpeaker;

})(window);
