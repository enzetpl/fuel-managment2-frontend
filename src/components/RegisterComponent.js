import { Component } from "react";
import AppNavbar from "./AppNavbar";
import { Formik, Form, ErrorMessage, Field, resetForm, setFieldError } from 'formik'
import AuthenticationService from "./AuthenticationService";
class RegisterComponent extends Component {

    constructor(props) {
        super(props);
        this.state = {
            role: 'USER',
        }
        this.onSubmit = this.onSubmit.bind(this);


    }

    async onSubmit(values, {setErrors, resetForm, setFieldError}) {
        await AuthenticationService.register(values)
            .then(() => {
                this.props.history.push('/login');
            }).catch(err => {
                const errArr = err.response.data.errors
                 for (let error of errArr) {
                     if (error.fieldName === 'username')
                        setFieldError('username', error.message)
                     if (error.fieldName === 'email')
                     setFieldError('email', error.message)
                     if (error.fieldName === 'password')
                        setFieldError('password', error.message)
                 }

            })
    }

    render() {

        let username = '';
        let email = '';
        let password = '';
        let role = this.state.role;
        let status;

        return (
            <div className="container">
                <AppNavbar />
                <Formik
                    initialValues={{ username, email, password, role }}
                    onSubmit={this.onSubmit}
                    validateOnChange={false}
                    validateOnBlur={false}
                    validate={this.validate}
                    enableReinitialize={true}
                >
                    {
                        (props) => (
                            <Form>
                                <fieldset className="form-group">
                                    <label>username</label>
                                    <ErrorMessage name="username" component="div" className="alert alert-warning" />
                                    <Field className="form-control" type="text" name="username" />
                                </fieldset>
                                <fieldset className="form-group">
                                    <label>email</label>
                                    <ErrorMessage name="email" component="div" className="alert alert-warning" />
                                    <Field className="form-control" type="text" name="email" />
                                </fieldset>
                                <fieldset className="form-group">
                                    <label>password</label>
                                    <ErrorMessage name="password" component="div" className="alert alert-warning" />
                                    <Field className="form-control" type="password" name="password" />
                                </fieldset>
                                <button className="btn btn-success" type="submit">register</button>

                            </Form>
                        )
                    }
                </Formik>
            </div>
        )
    }

}

export default RegisterComponent;