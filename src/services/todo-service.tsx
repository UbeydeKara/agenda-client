import http from "./http-common";

const serviceUrl = "/todo"

export interface TodoPayload {
    todoId: string;
    title: string;
    description: string;
    isDone: boolean;
    dueAt: Date;
    createdAt: Date;
    modifiedAt: Date;
}

const findAll = () => {
    return http.get(serviceUrl);
};

const save = (todo: object) => {
    return http.post(serviceUrl + "/save", todo);
}

const update = (todo: object) => {
    return http.post(serviceUrl + "/update", todo);
}

const deleteById = (todoId: string) => {
    return http.delete(`${serviceUrl}/${todoId}`);
}

const TodoService = {
    findAll,
    save,
    update,
    deleteById
};

export default TodoService;
