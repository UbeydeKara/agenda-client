const parseJwt = (token: string) => {
    const decode = JSON.parse(atob(token.split('.')[1]));
    return decode.exp * 1000 >= new Date().getTime();
};

export const getAccessToken = () => {
    const loggedUser = localStorage.getItem("user");
    if (loggedUser) {
        const user = JSON.parse(loggedUser);
        const access_token = user?.access_token as string;
        if (access_token && parseJwt(access_token)) {
            return "Bearer " + user.access_token;
        }
        else {
            return false;
        }
    }
};
