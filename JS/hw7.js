/*Alex Nguyen
alex_nguyen@student.uml.edu
UMass Lowell COMP4610 GUI Programming I
Purpose of this webpage: Practicing js by implementing a dynamic table*/

//modified the example from w3schools to add multiple rows using a loop https://www.w3schools.com/jsref/met_table_insertrow.asp 
//some form/dom manipulation from traversy dom crash course 4

var form = document.getElementById('addForm');
var numRows = 0; // keeps track of the rows made in previous table. used to clear the table
// Form submit event give input to function additem
form.addEventListener('submit', addItem);

// Add item 
function addItem(e){ 
	var table = document.getElementById('mult');
	var arr = []; //holds table entries
	e.preventDefault();
	var item3Big = 0;
	var item1Big = 0;
	// Get input value as an int
	var newItem = parseInt(document.getElementById('item').value);
	var newItem2 = parseInt(document.getElementById('item2').value);
	var newItem3 = parseInt(document.getElementById('item3').value);
	var newItem4 = parseInt(document.getElementById('item4').value);
	
	//clear out previously made the table 
	for(var i = 0; i <= numRows + 1; i++)
		 document.getElementById("mult").deleteRow(-1);
	//catch invalid inputs and inform user
	if(isNaN(newItem) || isNaN(newItem2) || isNaN(newItem3) || isNaN(newItem4))
	{
		/* document.getElementById('invalid').innerHTML = 'One of your inputs is invalid. Table did not get created.'; */
		return;
	}
	else {
		document.getElementById('invalid').innerHTML = '';
	}
	if(newItem < newItem2){
		var numCols = newItem2 - newItem;
	}
	else {
		item1Big = 1;
	}
	if(newItem3 < newItem4) {
		numRows = newItem4 - newItem3;
	}
	else {
		item3Big = 1;
		numRows = newItem3 - newItem4;
	}
	var a = [];
	var table = document.getElementById("mult"); // var table and row set up to insert empty cell in first row
	var row = table.insertRow(-1); // var table and row set up to insert empty cell in first row
	row.id = 'first'; // allows for css selector to select table row elements after first
	a.push(row.insertCell(-1));
	a[a.length -1].innerHTML = ""; // empty cell 
	if(item1Big) { //print table case 1 the first x input is greater than the second x input
		for( i = newItem2; i <= newItem; i++)  // insert the entries for the first row
		{
			a.push(row.insertCell(-1));
			a[a.length -1].innerHTML = i;
		}
		if(item3Big) { //print table case where second y input is greater than first y input 
			for(var q = newItem4; q <= newItem3; q++) //printing rows from second Y input to first Y Input 
			{
				var table = document.getElementById("mult");
				var row = table.insertRow(-1);
				a.push(row.insertCell(-1));
				a[a.length -1].innerHTML = q; // insert the q value into a cell

				for(var i = newItem2; i <= newItem; i++) // adds in entries from second X Input to first X Input
				{
				  a.push(row.insertCell(-1));
				  a[a.length -1].innerHTML = q * i;
				}
			}
		}
		else { //print table case where second y input is greater than first y input 
			for(var q = newItem3; q <= newItem4; q++) //printing rows from first Y input second Y Input 
		  {
			  var table = document.getElementById("mult");
			  var row = table.insertRow(-1);
			  a.push(row.insertCell(-1));
			  a[a.length -1].innerHTML = q; // insert the q value into a cell
			  
			  for(var i = newItem2; i <= newItem; i++) // adds in entries from second X Input to first X Input
			  {
				  a.push(row.insertCell(-1));
				  a[a.length -1 ].innerHTML = q * i;
			  }
		  }
		}
	}
	else { // print table case when x input 2 is larger than x range 1

		for(i = newItem; i <= newItem2; i++)  // insert the entries for the first row
		  {
		  a.push(row.insertCell(-1));
		  a[a.length -1].innerHTML = i;
		  }
		if(item3Big) { //print table case where second y input is less than first y input 
		  for(var q = newItem4; q <= newItem3; q++) // prints rows that range from newItem4 to newItem3
		  {
			  var table = document.getElementById("mult");
			  var row = table.insertRow(-1);
			  a.push(row.insertCell(-1));
			  a[a.length -1].innerHTML = q; // insert the q value into a cell
			  for(var i = newItem; i <= newItem2; i++) // adds in entries from first X Input to second X Input
			  {
				  a.push(row.insertCell(-1));
				  a[a.length -1].innerHTML = q * i;
			  }
		  }
		}
		else {
			//print table case where second y input is less than first y input 
			for(q = newItem3; q <= newItem4; q++) //printing rows from first Y input second Y Input 
		  {
			  var table = document.getElementById("mult");
			  var row = table.insertRow(-1);
			  a.push(row.insertCell(-1));
			  a[a.length -1].innerHTML = q; // insert the q value into a cell
			  for(var i = newItem; i <= newItem2; i++) // // adds in entries from first X Input to second X Input 
			  {
				  a.push(row.insertCell(-1));
				  a[a.length -1].innerHTML = q * i;
			  }
		  }
		}
	}
}



/* $(document).ready(function() {
	
	
	
  
});
 */

// jquery validation: make sure the user enters something in each field, and make sure the contents are numbers
$(document).ready(function(){
  $("#addForm").validate({
		rules: {
			item: {
				required: true,
				number: true
			},
			 item2: {
				required: true,
				number: true
			},
			item3: {
				required: true,
				number: true
			},
			item4: {
				required: true,
				number: true
			}
		},
		messages: {
			item: {
				required: "Enter the first X value",
				number: "Enter a valid number"
			},
			item2: { 
				required: "Enter the second X value",
				number: "Enter a valid number"
			},
			item3: {
				required: "Enter the first Y value",
				number: "Enter a valid number"
			},
			item4: {
				required: "Enter the second Y value",
				number: "Enter a valid number"
			}
		}
	});
  
  
});


