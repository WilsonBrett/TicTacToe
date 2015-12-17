$(function() {
	var whosPlaying = $('#vs').hide();
	var board = $('#board').hide();
	var play = confirm("Would you like to play tic tac toe?");
	var p1;
	var p2;
	var p3;
	var p4;
	var p5;
	var p6;
	var p7;
	var p8;
	var p9;
	var person1, person2;
	setNames();
	
	function setNames() {
		if (play) {
			var name1 = prompt("Please enter player one's name:");
			var name2 = prompt("Please enter player two's name:");
			launchSetup(name1,name2);
		} else {
		//do something
		}
	}

	function launchSetup(n1, n2) {
		if(n1 && n2) {
			
			//shows the grid
			board.show();
			
			//shows player names above the board
			whosPlaying.show();
			whosPlaying.text(n1 + " vs. " + n2);
			
			//instantiates players (name, icon, turn);
			person1 = new Person(n1,"X",true);
			person2 = new Person(n2,"O",false);
			
			//adds click event listeners to div boxes on the grid.  Will launch clicked function.
			$('.box').click(clicked);
			
			//provides handle into each div box in the grid.  Mainly used in the check winner function.
			p1 = $("#p1 p");
			p2 = $("#p2 p");
			p3 = $("#p3 p");
			p4 = $("#p4 p");
			p5 = $("#p5 p");
			p6 = $("#p6 p");
			p7 = $("#p7 p");
			p8 = $("#p8 p");
			p9 = $("#p9 p");
	
		} else {
			//if a player name is ommitted please go back and fill them in.
			alert("Please go back and fill in the names of the players one and two.");
			setNames();
		}
	}
	
	function clicked(evt) {
		var p = $(evt.target);
		
		if(p.text() === "" || p.text() === null) {
			
			//assign X or O from player objects to p tag within boxes
			if(person1.turn) {
				p.text(person1.icon);
			} else {
				p.text(person2.icon);
			}
			
			//toggle turn
			var a = person1.turn;
			person1.turn = person2.turn;
			person2.turn = a;

			checkWinner();
			
		} else {
			alert("Box taken!");
		}
	}
	
	function Person(pName, i, t) {
		this.playerName = pName;
		this.icon = i;
		this.turn = t;
	}
	
	function checkWinner() {
		/*
		console.log(p1.text());
		console.log(p2.text());
		console.log(p3.text());
		console.log(p4.text());
		console.log(p5.text());
		console.log(p6.text());
		console.log(p7.text());
		console.log(p8.text());
		console.log(p9.text());
		*/
		
		if((p1.text() && p2.text()) && (p2.children().text() === p3.children().text())) {
			if(p1.children().text === "X") {
				alert(person1.playerName + " has won!");
			} else {
				alert(person2.playerName + " has won!");
			}
		}
		} else if((p4.children().text() === p5.children().text()) && (p5.children().text() === p6.children().text())) {
			if(p4.children().text === "X") {
				alert(person1.playerName + " has won!");
			} else {
				alert(person2.playerName + " has won!");
			}
		} else if((p7.children().text() === p8.children().text()) && (p8.children().text() === p9.children().text())) {
			if(p7.children().text === "X") {
				alert(person1.playerName + " has won!");
			} else {
				alert(person2.playerName + " has won!");
			}
		} else if((p1.children().text() === p4.children().text()) && (p4.children().text() === p7.children().text())) {
			if(p1.children().text === "X") {
				alert(person1.playerName + " has won!");
			} else {
				alert(person2.playerName + " has won!");
			}
		} else if((p2.children().text() === p5.children().text()) && (p5.children().text() === p8.children().text())) (
			if(p2.children().text === "X") {
				alert(person1.playerName + " has won!");
			} else {
				alert(person2.playerName + " has won!");
			}
		) else if((p3.children().text() === p6.children().text()) && (p6.children().text() === p9.children().text())) {
			if(p3.children().text === "X") {
				alert(person1.playerName + " has won!");
			} else {
				alert(person2.playerName + " has won!");
			}
		} else if((p1.children().text() === p5.children().text()) && (p5.children().text() === p9.children().text())) {
			if(p1.children().text === "X") {
				alert(person1.playerName + " has won!");
			} else {
				alert(person2.playerName + " has won!");
			}
		} else if((p3.children().text() === p5.children().text()) && (p5.children().text() === p7.children().text())) {
			if(p3.children().text === "X") {
				alert(person1.playerName + " has won!");
			} else {
				alert(person2.playerName + " has won!");
			}
		} else {
			//code to check for a tie - all boxes filled return tie
		}

	}
	
});



