/*
DOM - Document OBject Model
html ki har chiz ek node me branch karti hai window -> document -> html -> head -> title -> text node .

by writing document.getElementById("id-name") , we select that element and later we can make changes 

innerText --> joh display me hai sirf vhi text dega 
textContent --> joh hidden hai voh bhi dega
innerHTML --> agar text ke saath hume html tags bhi chahiye tabh
querySelector("tagname/css selector") --> kisi bhi tag ke first occurence ko select karne ke liye
querySelectorAll () --> return a node list (similar to arrays) par isme ham for each hi use kar sakte map use nhi kar sakte ..
document.getElementByClassName("name") --> return a HTML collection

to convert an htmlcollection to an array

*/

let list_query = document.querySelectorAll("li")

list_query.forEach( (i) => {
  i.style.backgroundColor = "pink"
}) //all li tags ka background color gets changed to pink

list_query.forEach( (i)=> {
  i.style.color = "black"
}) //all li tags ka color gets changed to black