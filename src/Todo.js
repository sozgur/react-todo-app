import "./Todo.css";
import { useState } from "react";

const Todo = ({ id, title, remove, edit }) => {
    const [isComplete, setComplete] = useState(false);
    const toggleCheck = (e) => {
        setComplete(!isComplete);
    };
    return (
        <div>
            <ul className="Todo">
                <li
                    className={isComplete ? "checked" : ""}
                    onClick={toggleCheck}
                >
                    {title}
                    <span onClick={() => remove(id)} className="Todo-close">
                        X
                    </span>
                </li>
            </ul>
        </div>
    );
};

export default Todo;
