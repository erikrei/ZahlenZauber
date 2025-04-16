import { USERNAME_MIN_LENGTH, PASSWORD_MIN_LENGTH, EMAIL_MIN_LENGTH } from "./data/CONSTANTS";

export function checkLoginInput(username: string, password: string): [boolean, string] {
    return checkUsernamePasswordInput(username, password);
}

export function checkRegisterInput(username: string, email: string, password: string): [boolean, string] {
    let [isValid, errorMessage] = checkUsernamePasswordInput(username, password);

    if (email.length < EMAIL_MIN_LENGTH) {
        isValid = false;
        errorMessage = `Email-Adresse muss mindestens ${EMAIL_MIN_LENGTH} Zeichen enthalten.`;
        return [isValid, errorMessage];
    }

    return [isValid, errorMessage];
}


function checkUsernamePasswordInput(username: string, password: string): [boolean, string] {
    let [isValid, errorMessage]: [boolean, string] = [true, ""];

    if (username.length < USERNAME_MIN_LENGTH) {
        isValid = false;
        errorMessage = `Benutzername muss mindestens ${USERNAME_MIN_LENGTH} Zeichen enthalten.`;
        return [isValid, errorMessage];
    }

    if (password.length < PASSWORD_MIN_LENGTH) {
        isValid = false;
        errorMessage = `Passwort muss mindestens ${PASSWORD_MIN_LENGTH} Zeichen enhalten.`;
        return [isValid, errorMessage];
    }

    return [isValid, errorMessage];
}

export function getAuthErrorMessage(errorMessage: string): string {
    switch (errorMessage) {
        case "ER_USER_NOT_FOUND":
            return "Es konnte keine Kombination von Benutzername und Passwort gefunden werden.";
        case "ER_WRONG_CREDENTIALS":
            return "Es konnte keine Kombination von Benutzername und Passwort gefunden werden.";
        case "ER_DUP_ENTRY":
            return "Der Benutzername oder die Email-Adresse ist bereits vergeben."
        default:
            return ""
    }
}

