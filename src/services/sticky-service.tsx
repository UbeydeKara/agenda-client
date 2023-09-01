import http from "./http-common";

const serviceUrl = "/note"

const findAll = () => {
    return http.get(serviceUrl);
};

const save = (note: any) => {
    return http.post(serviceUrl + "/save", note);
}

const deleteById = (noteId: any) => {
    return http.delete(`${serviceUrl}/${noteId}`);
}

const StickyService = {
    findAll,
    save,
    deleteById
};

export default StickyService;
