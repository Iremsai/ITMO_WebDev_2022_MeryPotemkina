const domInpTodoTitle = document.getElementById("inpTodoTitle");
const domBtnCreateTodo = document.getElementById("btnCreateTodo");
const domListOfTodos = document.getElementById("listOfTodos");
domBtnCreateTodo.addEventListener("click", onBtnCreateTodoClick);
class TodoVO {
    constructor(id, title, date=new Date()){
        this.id=id;
        this.title=title;
        this.date=date;
        this.completed=false;
    }
}
const listOfTodos=[];

   function onBtnCreateTodoClick(event){
    console.log("> domBtnCreateTodo -> handle(click)", event);
    const todoInpTitleValue=domInpTodoTitle.value;
    console.log("> domBtnCreateTodo -> todoInpTitleValue:",
        todoInpTitleValue);

    const canCreateTodo = validateTodoInptTitleValue(todoInpTitleValue);
    if(canCreateTodo){
    const todoVO = createTodoVO(todoInpTitleValue);
    listOfTodos.push(todoVO);

    let output = "";
    for (let index in listOfTodos) {
        output += `<li>${listOfTodos[index].title}</li>`;
    }
    domListOfTodos.innerHTML = output;
}
   }
   function validateTodoInptTitleValue(value){
       const isInpValueString = typeof value ==='string';
       const isInpValueNotNumbe = isNaN(parseInt(value));
       const result =
       isInpValueString
           && isInpValueNotNumbe
           && value.length>0;
       console.log('>validateTodoInptTitleValue->result',{
         result,
           isInpValueString,
           isInpValueNotNumbe
       })
return result;
   }

function createTodoVO(title) {
       const todoId = Date.now().toString();
    return new TodoVO(todoId, title);
}