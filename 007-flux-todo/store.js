/** Store */

_todos = [];

function addTodo(text){
    _todos.push(text);
}

var TodoStore = Flux.createStore({
    getTodos: function(){
       return _todos;
    }
}, function(payload){
    if(payload.actionType === "ADD_TODO") {
        addTodo(payload.text);
        TodoStore.emitChange();
    }
    if(payload.actionType === "KITTEN_LAUNCH") {
        console.log("Kitten Launched! ", payload)
    }
});