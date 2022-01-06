import { render, fireEvent } from "@testing-library/react";
import TodoList from "./TodoList";

function addTodo(todoList, title = "clean car!") {
    const titleInput = todoList.getByLabelText("Title");
    fireEvent.change(titleInput, { target: { value: title } });
    const submitTodo = todoList.getByText("Add");
    fireEvent.click(submitTodo);
}

it("renders without crashing", () => {
    render(<TodoList />);
});

it("matches snapshot", () => {
    const { asFragment } = render(<TodoList />);
    expect(asFragment()).toMatchSnapshot();
});

it("can add a todo", () => {
    const todoList = render(<TodoList />);
    addTodo(todoList);

    expect(todoList.getByText("X")).toBeInTheDocument();
    expect(todoList.getByLabelText("Title")).toHaveValue("");
});

it("can delete a todo", () => {
    const todoList = render(<TodoList />);
    addTodo(todoList);

    const deleteButton = todoList.getByText("X");
    fireEvent.click(deleteButton);

    expect(todoList.queryByText("clean car!")).not.toBeInTheDocument();
});

it("can complete a todo", () => {
    const todoList = render(<TodoList />);
    addTodo(todoList);

    const todo = todoList.queryByText("clean car!");

    expect(todoList.queryByText("clean car!")).not.toHaveClass("checked");

    fireEvent.click(todo);

    expect(todoList.queryByText("clean car!")).toHaveClass("checked");
});
