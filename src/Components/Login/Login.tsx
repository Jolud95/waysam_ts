import {Field, InjectedFormProps, reduxForm} from "redux-form";
import React from "react";

type FormDataType = {
    login: string
    password: string
    rememberMe: boolean
}


const Login = () => {
    const onSubmit = (formData:FormDataType) => {
        console.log(formData)
    }
    return (
        <div>
            <h1>LOGIN</h1>
            <ReduxLoginForm onSubmit={onSubmit}/>
        </div>
    )
}

const LoginForm: React.FC<InjectedFormProps<FormDataType>> = (props) => {
    return (
        <div>
            <form onSubmit={props.handleSubmit}>
                <div>
                    <Field placeholder={"Login"} name={"login"} component={"input"}/>
                </div>
                <div>
                    <Field placeholder={"Password"} name={"password"} component={"input"}/>
                </div>
                <div>
                    <Field type={"checkbox"} name={"rememberMe"} component={"input"}/> remember me
                </div>
                <div>
                    <button>LogIn</button>
                </div>
            </form>
        </div>
    )
}

const ReduxLoginForm = reduxForm<FormDataType>({form: "login"})(LoginForm)

export default Login;