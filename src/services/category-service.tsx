import http from "./http-common";

const serviceUrl = "/category"

const findAll = () => {
    return http.get(serviceUrl);
};

const save = (category: any) => {
    return http.post(serviceUrl + "/save", category);
}

const deleteById = (categoryId: any) => {
    return http.delete(`${serviceUrl}/${categoryId}`);
}

const CategoryService = {
    findAll,
    save,
    deleteById
};

export default CategoryService;
