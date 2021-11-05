var data = new Array(); // creating array

async function add_element() {
  const balance = parseInt(document.getElementById("t1").value)
  data.push(balance); // adding element to array
  try {
    const response = await fetch('/api/users/funds', {
      method: 'PUT',
      body: JSON.stringify({ balance }),
      headers: {
        'Content-Type': 'application/json; charset=UTF-8',
      },
    });
    if (!response.ok) {
      alert('Failed to to add Funds.');
      return;
    }
    document.getElementById("t1").value = ""; // Making the text box blank
    disp(); // displaying the array elements
  } catch (error) {
    console.log(error);
  }

  
}



function remove_element(index_no) {
  var t1 = data.splice(index_no, 1);
  disp(); // displaying the array elements
}
function disp() {
  var str = "";
  str = "you add : " + "<br>";
  for (i = 0; i < data.length; i++) {
    str +=
      "$" +
      data[i] +
      " <a href=# onClick='remove_element(" +
      data.indexOf(data[i]) +
      ")'> Remove</a> " +
      "<br >"; // adding each element with key number to variable
  }

  document.getElementById("disp").innerHTML = str; // Display the elements of the array
}
