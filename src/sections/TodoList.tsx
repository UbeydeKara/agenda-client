import {List, ListItem} from "../components";
import {useEffect, useState} from "react";
import TodoService, {TodoResponse} from "../services/todo-service";

function TodoList() {
    const [todoList, setTodoList] = useState<Array<TodoResponse>>([]);

    const getData = async () => {
        await TodoService.findAll().then(
            (res) => setTodoList(res.data)
        )
    }

    useEffect(() => {
        getData();
    }, []);

    return(
        <List className="mt-4">
            {Object.values(todoList).map(item => (
                <ListItem key={item.todoId}>{item}</ListItem>
            ))}
        </List>
    )
}

export default TodoList;
