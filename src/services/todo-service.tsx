import http from "./http-common";

const serviceUrl = "/todo"

export interface TodoResponse {
    todoId: string;
    content: string;
}

const findAll = () => {
    return http.get(serviceUrl);
};

const save = (todo: object) => {
    return http.post(serviceUrl + "/save", todo);
}

const TodoService = {
    findAll,
    save
};

export default TodoService;
