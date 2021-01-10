import { Component } from "react";
import RefuelsDataService from "./RefuelsDataService";
import { Formik, Form, Field, ErrorMessage, setFieldError } from 'formik';
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
                    this.setState({ item: response.data })
                })
        }
    }

    onSubmit(values, { setErrors, resetForm, setFieldError }) {
        if (this.state.id === 'new') {
            let refuel = {
                volume: values.volume,
                priceForLiter: values.priceForLiter,
                refuelDate: values.refuelDate
            }
            RefuelsDataService.addCar(this.props.match.params.carId, refuel)
                .then(() => this.props.history.push(`/cars/${this.props.match.params.carId}/refuels`))
                .catch(err => {
                    const errArr = err.response.data.errors
                    for (let error of errArr) {
                        if (error.fieldName === 'volume')
                            setFieldError('volume', error.message)
                        if (error.fieldName === 'priceForLiter')
                            setFieldError('priceForLiter', error.message)
                            if (error.fieldName === 'refuelDate')
                            setFieldError('refuelDate', error.message)
                    }
                })
        } else {
            let car = {
                id: this.state.id,
                brand: values.brand,
                model: values.model,
                productionYear: values.productionYear,
                plate: values.plate,
                fuelType: values.fuelType
            }
        }
    }


    render() {

        let volume = this.state.item.volume;
        let priceForLiter = this.state.item.priceForLiter;
        let refuelDate = this.state.item.refuelDate;


        return (
            <div className="container">
                <AppNavbar />
                <Formik
                    initialValues={{ volume, priceForLiter, refuelDate }}
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
                                    <Field className="form-control" type="datetime-local" name="refuelDate" />
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