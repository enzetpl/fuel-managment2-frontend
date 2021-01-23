import { Component } from "react";
import CarsDataService from "./CarsDataService";
import { Formik, Form, Field, ErrorMessage } from 'formik';
import AppNavbar from "./AppNavbar";
class AddCarComponent extends Component {

    defaultItem = {
        brand: '',
        model: '',
        productionYear: undefined,
        plate: undefined,
        fuelType: "DIESEL"
    }
    constructor(props) {
        super(props);
        this.state = {
            item: this.defaultItem,
            id: this.props.match.params.carId,
        }
        this.onSubmit = this.onSubmit.bind(this);
    }

    componentDidMount() {
        if (this.state.id !== 'new') {
            CarsDataService.getCar(this.state.id)
                .then(response => {
                    this.setState({ item: response.data })
                })
        }
    }

    onSubmit(values, { setErrors }) {
        let car = values;
        if (this.state.id === 'new') {
            CarsDataService.addCar(car)
                .then(() => this.props.history.push('/cars'))
                .catch(err => {
                    let errors = err.response.data.errors
                    let reducedErrors = errors.reduce((acc, cur)=>({...acc, [cur.fieldName]: cur.message}),{})
                    setErrors(reducedErrors);
                })
        } else {
            CarsDataService.updateCar(this.state.id, car)
                .then(() => this.props.history.push('/cars'))
                .catch(err => {
                    let errors = err.response.data.errors
                    let reducedErrors = errors.reduce((acc, cur)=>({...acc, [cur.fieldName]: cur.message}),{})
                    setErrors(reducedErrors);
                })
        }
    }
    render() {
        let brand = this.state.item.brand;
        let model = this.state.item.model;
        let fuelType = this.state.item.fuelType;
        let productionYear = this.state.item.productionYear;
        let plate = this.state.item.plate

        return (
            <div className="container">
                <AppNavbar />
                <Formik
                    initialValues={{ brand, model, fuelType, productionYear, plate }}
                    onSubmit={this.onSubmit}
                    validateOnChange={false}
                    validateOnBlur={false}
                    enableReinitialize={true}
                >
                    {
                        (props) => (
                            <Form>
                                <fieldset className="form-group">
                                    <label>brand</label>
                                    <ErrorMessage name="brand" component="div" className="alert alert-warning" />
                                    <Field className="form-control" type="text" name="brand" />
                                </fieldset>
                                <fieldset className="form-group">
                                    <label>model</label>
                                    <ErrorMessage name="model" component="div" className="alert alert-warning" />
                                    <Field className="form-control" type="text" name="model" />
                                </fieldset>
                                <fieldset className="form-group">
                                    <label>fuel type</label>
                                    <Field component="select" className="form-control" as="select" name="fuelType" variant="outlined" >
                                        <option value="DIESEL">diesel</option>
                                        <option value="PETROL">petrol</option>
                                        <option value="GAS">gas</option>
                                    </Field>
                                </fieldset>
                                <fieldset className="form-group">
                                    <label>production year</label>
                                    <ErrorMessage name="productionYear" component="div" className="alert alert-warning" />
                                    <Field className="form-control" type="number" name="productionYear" />
                                </fieldset>
                                <fieldset className="form-group">
                                    <label>plate(optional)</label>
                                    <ErrorMessage name="plate" component="div" className="alert alert-warning" />
                                    <Field className="form-control" type="text" name="plate" />
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
export default AddCarComponent