import { MockLoginTable, MockUserTable } from "../../mocks/LoginData"

function postSignUpData(signUpData) {
    if (MockLoginTable.some( ({email}) => email = signUpData.email)) {
        return {status:409, data: false};
    }
    return {status:201}
}

function postSignInData(SignInData) {

}

function getUserData(id) {
    return MockUserTable;
}

export {
    postSignUpData,
    getUserData,
}