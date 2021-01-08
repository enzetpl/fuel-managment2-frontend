import { Component } from "react";
import AuthenticationService from './AuthenticationService'
import {Formik, Form, ErrorMessage, Field} from 'formik'
class LoginComponent extends Component {
    constructor(props) {
        super(props);

        this.state = {
            username: '',
            password: ''
        }
        this.onSubmit = this.onSubmit.bind(this);
    }

    onSubmit(values) {
        AuthenticationService.executeBasicAuth(values.username, values.password)
            .then(() => {
                this.props.history.push('/cars');
            })
    }
    render() {
        let username = this.state.username;
        let password = this.state.password;
        return (
            <div className="container">
                <Formik
                initialValues={{ username, password}}
                        onSubmit={this.onSubmit}
                        validateOnChange={false}
                        validateOnBlur={false}
                        validate={this.validate}
                        enableReinitialize={true}
                        >
                        {
                            (props)=> (
                                <Form>
                                <fieldset className="form-group">
                                        <label>username</label>
                                        <ErrorMessage name="username" component="div" className="alert alert-warning"/>
                                        <Field className="form-control" type="text" name="username" />
                                    </fieldset>
                                    <fieldset className="form-group">
                                        <label>password</label>
                                        <ErrorMessage name="password" component="div" className="alert alert-warning"/>
                                        <Field className="form-control" type="text" name="password" />
                                    </fieldset>
                                    <button className="btn btn-success" type="submit">Save</button>

                                </Form>
                            )
                        }
                </Formik>
            </div>
        )
    }
}

export default LoginComponent;