var todoForm = document.querySelector("#todo-form");
var todoInput = document.querySelector("#todo-input")
var todoListGroup =document.querySelector("#todo-list-group")

var todos = [];
var todoInitialId = 0;

function TodoPrototype(text, id) {
    this.id = id;
    this.text = text;
}

function removeTodo (todoId){
document.querySelector(`#todo-number-${todoId}`).remove();

for(i =0; i<todos.length; i++){
    if(todos(i).id==todoId){
        todos.splice(i,1);
    }
}

}

function todoCreateDom(todoText, todoId) { 
    var listItem=document.createElement("li");
    var deleteBtn = document.createElement ("button")

    listItem.setAttribute('class','list-group-item d-flex align-center justify-content-between');
    listItem.textContent=todoText;
    listItem.setAttribute("id" ,`todo-number-${todoId}` );

    deleteBtn.setAttribute('class','btn-outline-danger');
    deleteBtn.textContent='O\'chirish';

    deleteBtn.addEventListener('click',function(){
        removeTodo(todoId)
    });

    listItem.appendChild(deleteBtn);
    todoListGroup.appendChild(listItem);
}

function todoCreate(todoText ,todoId) {
    todoCreateDom(todoText ,todoId);
    todos.push(new TodoPrototype(todoText, todoId));
};

todoForm.addEventListener('submit', function (e) {
    e.preventDefault();

    todoCreate(todoInput.value , todoInitialId);

    todoForm.reset()

    todoInitialId++; //todoInitialId=todoInitialId + 1;

})