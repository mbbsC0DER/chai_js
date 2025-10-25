const input = document.querySelector(".add-text");
const button = document.querySelector(".add-btn");
const list = document.querySelector(".list");

//save to-do
const saved = localStorage.getItem("todos"); //todo key ke andar joh bhi previous store hoga usse json string ke format me laake dega
const todos = saved ? JSON.parse(saved) : []; //json.parse uss string ko js ki real value me convert karta hai (jaise idahr array)

function save_todos() {
  //to save the todos in the local-storage
  localStorage.setItem("todos", JSON.stringify(todos));
}

function create_todo(todo, index) {
  //isme apan list ke andar child node create karenge

  const li = document.createElement("li");
  // li.innerHTML = todo

  //checkbox to toggle completion
  const checkbox = document.createElement("input");
  checkbox.setAttribute("type", "checkbox");
  checkbox.checked = !!todo.completed; //yeh pehle ke todos ke liye hai
  checkbox.addEventListener("change", () => {
    todo.completed = checkbox.checked; // yeh abhi ke naye todos ke liye hai agar unme koi changes kiye toh update kare
    //TODO :  line throught after checked .
    li_text.style.textDecorationLine = todo.completed ? "line-through" : "";
    save_todos();
  });
  const li_text = document.createElement("span");
  li_text.textContent = todo.text;
  // li_text.style.margin = "0px 10px ";
  li_text.style.fontSize = "1.3rem"
  //   if (todo.completed) {
  //     li_text.style.textDecoration = "line-through";
  //   }

  li_text.addEventListener("dblclick", () => {
    const edit = prompt("Enter edit", todo.text);
    if (edit !== null) {
      todo.text = edit.trim();
      // li_text.textContent = todo.text
      render_display();
      save_todos();
    }
  });

  //delete todo btn
  const del = document.createElement("button");
  del.innerHTML = "Delete task";
  del.style.borderRadius = "20px";
  del.class = "del-btn"
  del.style.padding = "5px" ;
  del.style.boxShadow = "2px 2px 0px black"
  
  del.addEventListener("click", () => {

    console.log( "before del " , todos)
    let pop = todos.splice(index, 1);
    console.log(pop , "has been deleted ")
    save_todos();
    render_display()
  });

  li.appendChild(checkbox);
  li.appendChild(li_text);
  li.appendChild(del);

  return li;
}

function render_display() {
  // list me chizo ko dikhane ke liye
  list.innerHTML = "";

  todos.forEach((todo, index) => {
    const node = create_todo(todo, index);
    list.appendChild(node);
  });
}

function add_todo() {
  const text = input.value.trim();
  if (!text) {
    return;
  }
  //push new tasks into todos

  todos.push({ text, completed: false });
  // console.log(todos)
  input.value = " ";
  render_display();
  save_todos();
}
button.addEventListener("click", add_todo);
render_display();
