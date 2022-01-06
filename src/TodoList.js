import NewTodoForm from "./NewTodoForm";
import Todo from "./Todo";
import { v4 as uuidv4 } from "uuid";
import { useState } from "react";

const TodoList = () => {
    const INITIAL_STATE = [];
    const [todos, setTodos] = useState(INITIAL_STATE);

    const addTodo = (newTodo) => {
        setTodos([...todos, { ...newTodo, id: uuidv4() }]);
    };

    const removeTodo = (id) => {
        setTodos(todos.filter((todo) => id !== todo.id));
    };

    return (
        <div>
            <NewTodoForm addTodo={addTodo} />
            {todos.map(({ id, title }) => (
                <Todo key={id} id={id} title={title} remove={removeTodo} />
            ))}
        </div>
    );
};

export default TodoList;
