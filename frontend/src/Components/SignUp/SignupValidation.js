function Validation(values) {

    // Initialize error 
    let error = {}

    // Add email and password patterns e.g -> const password_pattern = /[a-z]/ -> inside 'if' sequence add -> else if (!password_pattern.test(values.password)) { error.password = "didnt match pattern"; }
    
    // If user left 'name' field empty, send an error
    if(values.name === "") {
        error.name = "Name should not be empty"
    } else {
        error.name = ""
    }

    // If user left 'email' field empty, send an error
    if(values.email === "") {
        error.email = "Name should not be empty"
    } else {
        error.email = ""
    }

    // If user left 'password' field empty, send an error
    if (values.password === "") {
        error.password = "Password should not be empty"
    } else {
        error.password = ""
    }

    // Return error values
    return error;

}

export default Validation;