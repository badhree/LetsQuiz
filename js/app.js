	var score = 0;
	var q1 = {
		question:"Capital of California?",
		opt1:"San Francisco",
		opt2:"Los Angeles", 
		opt3:"Sacramento",
		answer:"Sacramento"
	};

	var q2 = {
		question:"Host of Olympics?",
		opt1:"Sydney",
		opt2:"Rio de Janiero", 
		opt3:"Moscow",
		answer:"Rio de Janiero"
	};

	var q3 = {
		question:"Which place is known as Serendib?",
		opt1:"Jamaica",
		opt2:"Sri Lanka", 
		opt3:"New Zealand",
		answer:"Sri Lanka"
	};

	var quiz = [q1, q2, q3];

	var qno =0;
(function () {
	
	var q = quiz[0];
	console.log(q);
	document.getElementById("question").innerHTML = q["question"];
	document.getElementById("opt1").innerHTML = '<input type="radio" id ="r1" value="1" name="optradio" >'+ q["opt1"] +'</label>';
	document.getElementById("opt2").innerHTML = '<input type="radio" id ="r2" value="2" name="optradio" >'+ q["opt2"] +'</label>';
	document.getElementById("opt3").innerHTML = '<input type="radio" id ="r3" value="3" name="optradio" >'+ q["opt3"] +'</label>';;
	//$('#question').text(q[question]);


})();

function guess () {

	if(qno >= quiz.length)
	{
		return;
	}
	var value = "";
	var radioButtons = document.getElementsByName("optradio");
    for (var x = 0; x < radioButtons.length; x ++) {
      if (radioButtons[x].checked) {
       value = radioButtons[x].value;       
     }
	 }




	var o = document.getElementById("r1").checked;
	console.log(o);
	var opt = "";
	if(value == "1") {
  		opt = "opt1";
	}else if(value == "2") {
		opt = "opt2";
	}
	else if(value == "3") {
		opt = "opt3";
	}
	var qz = quiz[qno];
	if(qz[opt]==qz["answer"])
		score+=10;
	document.getElementById("result").innerHTML = score;
	qno++;
	nextQuestion();
	}

function nextQuestion () {
	if(qno >= quiz.length)
	{
		document.getElementById('finished').innerHTML="Finished";
		return;
	}
	var q = quiz[qno];
	console.log(q);
	document.getElementById("question").innerHTML = q["question"];
	document.getElementById("opt1").innerHTML = '<input type="radio" id ="r1" value="1" name="optradio" >'+ q["opt1"] +'</label>';
	document.getElementById("opt2").innerHTML = '<input type="radio" id ="r2" value="2" name="optradio" >'+ q["opt2"] +'</label>';
	document.getElementById("opt3").innerHTML = '<input type="radio" id ="r3" value="3" name="optradio" >'+ q["opt3"] +'</label>';;

	}