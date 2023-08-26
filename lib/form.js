export const initForm = {
    name: "",
    email: "",
    title: "",
    message: "",
    nameError: false,
    emailError: false,
    titleError: false,
    messageError: false,
}

export const emailRegex = new RegExp(/^[a-zA-Z0-9]+@[a-zA-Z0-9]+\.[A-Za-z]+$/)

export const reducer = (state, action) => {
    if (action.type === "typing") return { ...state, [action.field]: action.payload }
    else if (action.type === "error") return { ...state, [action.field + "Error"]: action.payload }
}

