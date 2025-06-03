import { useMemo, useReducer, useState } from "react";
import useDocumentTitle from "./useDocumentTitle";
function reducer(state, action){
    switch(action.type){
        case 'ADD_TODO':
            return{
                todos:[...state.todos, {id:Date.now(), text:action.text, completed: false}],
            };
        case 'TOGGLE_TODO':
            return{
                todos: state.todos.map((todo)=>
                    todo.id===action.id?{...todo, completed: !todo.completed}:todo
                ),
            };
        default:
            return state;
    }
}
function Todo(){
    useDocumentTitle("Todo")
    const [state, dispatch]=useReducer(reducer,{todos:[]});
    const [input, setInput]=useState('');
    const completedCount=useMemo(()=>{
        return state.todos.filter((todo)=>todo.completed).length;
    },[state.todos])
    const handleAdd=(e)=>{
        e.preventDefault();
        if(input){
            dispatch({type: 'ADD_TODO', text:input})
            setInput('');
        }
    };
    return(
        <div>
            <h2>Todo List</h2>
            <p>Completed tasks: {completedCount}/{state.todos.length}</p>
            <form onSubmit={handleAdd}>
               <input
                  type="text"
                  value={input}
                  onChange={(e)=>setInput(e.target.value)}
                  placeholder="Add a todo"
                />
                <button type="submit">Add</button>
            </form>
            <ul>
                {state.todos.map((todo)=>(
                    <li
                    key={todo.id}
                    style={{textDecoration: todo.completed?'line-through':'none'}}
                    onClick={()=>dispatch({type:'TOGGLE_TODO', id: todo.id})}
                    >
                    {todo.text}
                    </li>
                ))}
            </ul>
        </div>
    );
}
export default Todo;