import http from "./http-common";

const serviceUrl = "/todo"

export interface TodoPayload {
    todoId: string;
    title: string;
    description: string;
    isDone: boolean;
    createdAt: Date;
    modifiedAt: Date;
}

const findAll = () => {
    return http.get(serviceUrl);
};

const save = (todo: object) => {
    return http.post(serviceUrl + "/save", todo);
}

const deleteById = (todoId: string) => {
    return http.delete(`${serviceUrl}/${todoId}`);
}

const TodoService = {
    findAll,
    save,
    deleteById
};

export default TodoService;
