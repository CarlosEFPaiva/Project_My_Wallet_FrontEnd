import axios from "axios";

const URL = "http://localhost:4000";

function createConfig(userToken) {
    const config = {
        headers: {
            Authorization: `Bearer ${userToken}`
        }
    }
    return config;
}

function postSignUpData(signUpData) {
    return axios.post(`${URL}/sign-up`, signUpData);
}

function postSignInData(SignInData) {
    return axios.post(`${URL}/sign-in`, SignInData);
}

function getUserData(userToken) {
    return axios.get(`${URL}/entries`,createConfig(userToken));
}

export {
    postSignUpData,
    postSignInData,
    getUserData,
}