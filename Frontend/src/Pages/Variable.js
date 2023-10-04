import axios from "axios";
export const isLogin = () => {
    let data = localStorage.getItem('jwt');
    if (data != null)
        return true;
    else return false;
}

export const logout = () => {
    localStorage.clear();
    return false;
}

