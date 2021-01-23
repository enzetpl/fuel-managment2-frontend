import { Component } from "react";
import AppNavbar from "./AppNavbar";
import { Formik, Form, ErrorMessage, Field} from 'formik'
import AuthenticationService from "./AuthenticationService";
class RegisterComponent extends Component {

    constructor(props) {
        super(props);
        this.state = {
            role: 'USER',
            successMessage: null
        }
        this.onSubmit = this.onSubmit.bind(this);


    }

    async onSubmit(values, {setErrors}) {
        await AuthenticationService.register(values)
            .then((response) => {
                this.setState({
                    successMessage: response.data.message
                })
            }).catch(err => {
                let errors = err.response.data.errors
                let reducedErrors = errors.reduce((acc, cur)=>({...acc, [cur.fieldName]: cur.message}),{})
                setErrors(reducedErrors);
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
                {this.state.successMessage && <div className="alert alert-success">Registration successful! Now you can <a href="/login">login</a></div>}
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