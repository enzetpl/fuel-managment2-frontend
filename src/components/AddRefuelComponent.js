import { Component } from "react";
import RefuelsDataService from "./RefuelsDataService";
import { Formik, Form, Field, ErrorMessage } from 'formik';
import AppNavbar from "./AppNavbar";


class AddRefuelComponent extends Component {

    emptyItem = {
        volume: 0,
        priceForLiter: 0,
        refuelDate: new Date()
    }

    constructor(props) {
        super(props)

        this.state = {
            item: this.emptyItem,
            id: this.props.match.params.refuelId

        }
        this.onSubmit = this.onSubmit.bind(this);

    }
    componentDidMount() {
        if (this.state.id !== 'new') {
            RefuelsDataService.getRefuel(this.props.match.params.carId, this.state.id)
                .then(response => {
                    response.data.refuelDate = new Date(response.data.refuelDate)
                    this.setState({ item: response.data })
                })
        }
    }

    onSubmit(values, { setErrors }) {

        let refuel = {
            volume: values.volume,
            priceForLiter: values.priceForLiter,
            refuelDate: new Date(values.refuelDate + " " + values.refuelTime)
        }
        if (this.state.id === 'new') {
            RefuelsDataService.addRefuel(this.props.match.params.carId, refuel)
                .then(() => this.props.history.push(`/cars/${this.props.match.params.carId}/refuels`))
                .catch(err => {
                    let errors = err.response.data.errors
                    let reducedErrors = errors.reduce((acc, cur)=>({...acc, [cur.fieldName]: cur.message}),{})
                    setErrors(reducedErrors);
                })
        } else {
            RefuelsDataService.updateRefuel(this.props.match.params.carId, this.state.id, refuel)
                .then(() => this.props.history.push(`/cars/${this.props.match.params.carId}/refuels`))
                .catch(err => {
                    let errors = err.response.data.errors
                    let reducedErrors = errors.reduce((acc, cur)=>({...acc, [cur.fieldName]: cur.message}),{})
                    setErrors(reducedErrors);
                })
        }
    }


    render() {

        let volume = this.state.item.volume;
        let priceForLiter = this.state.item.priceForLiter;
        let refuelDate = this.state.item.refuelDate.toLocaleDateString('en-CA');
        let refuelTime = this.state.item.refuelDate.toLocaleTimeString();
        return (
            <div className="container">
                <AppNavbar />
                <Formik
                    initialValues={{ volume, priceForLiter, refuelDate, refuelTime }}
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
                                    <label>volume</label>
                                    <ErrorMessage name="volume" component="div" className="alert alert-warning" />
                                    <Field className="form-control" type="number" name="volume" />
                                </fieldset>
                                <fieldset className="form-group">
                                    <label>price for liter</label>
                                    <ErrorMessage name="priceForLiter" component="div" className="alert alert-warning" />
                                    <Field className="form-control" type="number" name="priceForLiter" />
                                </fieldset>
                                <fieldset className="form-group">
                                    <label>refuel date</label>
                                    <ErrorMessage name="refuelDate" component="div" className="alert alert-warning" />
                                    <Field className="form-control" type="date" name="refuelDate" />
                                </fieldset>
                                <fieldset className="form-group">
                                    <label>refuel time</label>
                                    <ErrorMessage name="refuelTime" component="div" className="alert alert-warning" />
                                    <Field className="form-control" type="time" name="refuelTime" />
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

export default AddRefuelComponent