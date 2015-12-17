$(function() {
	var whosPlaying = $('#vs').hide();
	var board = $('#board').hide();
	var name1 = prompt("Please enter player one's name:");
	var name2 = prompt("Please enter player two's name:");
	var p1, p2;
	$('.box').click(clicked);
	
	var b1 = $("#b1");
	var b2 = $("#b2");
	var b3 = $("#b3");
	var b4 = $("#b4");
	var b5 = $("#b5");
	var b6 = $("#b6");
	var b7 = $("#b7");
	var b8 = $("#b8");
	var b9 = $("#b9");
	
	if(name1 != null && name2 != null) {
		board.show();
		whosPlaying.show();
		whosPlaying.text(name1 + " vs. " + name2);
		p1 = new Person(name1,"X",true);
		p2 = new Person(name2,"O",false);

	} else {
		alert("Please go back and fill in the names of the players one and two.");
		document.reload();
	}
	
	function clicked(evt) {
		var div = $(evt.target);
		var p = $(evt.target).children();
		
		if(p.text() === "" || p.text() === null) {
			
			//assign X or O to p tag within boxes
			if(p1.turn) {
				p.text(p1.icon);
			} else {
				p.text(p2.icon);
			}
			
			//toggle turn
			var a = p1.turn;
			p1.turn = p2.turn;
			p2.turn = a;
			
			div.attr("disabled",true);
			p.att("disabled",true);
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

		/*if((b1.children().text() === b2.children().text()) && (b2.children().text() === b3.children().text())) {
			if(b1.children().text === "X") {
				alert(p1.playerName + " has won!");
			} else {
				alert(p2.playerName + " has won!");
			}
		} else if((b4.children().text() === b5.children().text()) && (b5.children().text() === b6.children().text())) {
			if(b4.children().text === "X") {
				alert(p1.playerName + " has won!");
			} else {
				alert(p2.playerName + " has won!");
			}
		} else if((b7.children().text() === b8.children().text()) && (b8.children().text() === b9.children().text())) {
			if(b7.children().text === "X") {
				alert(p1.playerName + " has won!");
			} else {
				alert(p2.playerName + " has won!");
			}
		} else if((b1.children().text() === b4.children().text()) && (b4.children().text() === b7.children().text())) {
			if(b1.children().text === "X") {
				alert(p1.playerName + " has won!");
			} else {
				alert(p2.playerName + " has won!");
			}
		} else if((b2.children().text() === b5.children().text()) && (b5.children().text() === b8.children().text())) (
			if(b2.children().text === "X") {
				alert(p1.playerName + " has won!");
			} else {
				alert(p2.playerName + " has won!");
			}
		) else if((b3.children().text() === b6.children().text()) && (b6.children().text() === b9.children().text())) {
			if(b3.children().text === "X") {
				alert(p1.playerName + " has won!");
			} else {
				alert(p2.playerName + " has won!");
			}
		} else if((b1.children().text() === b5.children().text()) && (b5.children().text() === b9.children().text())) {
			if(b1.children().text === "X") {
				alert(p1.playerName + " has won!");
			} else {
				alert(p2.playerName + " has won!");
			}
		} else if((b3.children().text() === b5.children().text()) && (b5.children().text() === b7.children().text())) {
			if(b3.children().text === "X") {
				alert(p1.playerName + " has won!");
			} else {
				alert(p2.playerName + " has won!");
			}
		} else {
			//code to check for a tie - all boxes filled return tie
		}
*/
	}
	
});



