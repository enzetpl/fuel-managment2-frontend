import { Component } from "react";
import CarsDataService from "./CarsDataService";
import { Formik, Form, Field, ErrorMessage, setFieldError } from 'formik';
import App from "../App";
import AppNavbar from "./AppNavbar";
class AddCarComponent extends Component {

    emptyItem = {
        brand: '',
        model: '',
        productionYear: null,
        plate: null,
        fuelType: ''
    }


    constructor(props) {
        super(props);


        this.state = {
            item: this.emptyItem,
            id: this.props.match.params.carId
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

    onSubmit(values, { setErrors, resetForm, setFieldError }) {

        if (this.state.id === 'new') {
            let car = {
                brand: values.brand,
                model: values.model,
                productionYear: values.productionYear,
                plate: values.plate,
                fuelType: values.fuelType
            }
            CarsDataService.addCar(car)
                .then(() => this.props.history.push('/cars'))
                .catch(err => {
                    const errArr = err.response.data.errors
                    for (let error of errArr) {
                        if (error.fieldName === 'brand')
                            setFieldError('brand', error.message)
                        if (error.fieldName === 'model')
                            setFieldError('model', error.message)
                        if (error.fieldName === 'productionYear')
                            setFieldError('productionYear', error.message)
                        if (error.fieldName === 'plate')
                            setFieldError('plate', error.message)
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

            CarsDataService.updateCar(car)
                .then(() => this.props.history.push('/cars'))
                .catch((err) => {
                    const errArr = err.response.data.errors
                    if(errArr!==null)
                    for (let error of errArr) {
                        if (error.fieldName === 'brand')
                            setFieldError('brand', error.message)
                        if (error.fieldName === 'model')
                            setFieldError('model', error.message)
                        if (error.fieldName === 'plate')
                            setFieldError('plate', error.message)
                    }
                
                })
        }
    }

       validate(values) {
           let errors ={};
           if(!Number(values.productionYear)) {
            errors.productionYear = "Enter correct production year";
       }
    }
    render() {
        let brand = this.state.item.brand;
        let model = this.state.item.model;
        let fuelType;
        if (this.state.item.fuelType)
            fuelType = this.state.item.fuelType;
        else
            fuelType = "DIESEL";
        let productionYear = this.state.item.productionYear;
        let plate = this.state.item.plate
        let status;

        return (
            <div className="container">
                <AppNavbar />
                <Formik
                    initialValues={{ brand, model, fuelType, productionYear, plate }}
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
                                    <label>brand</label>
                                    <ErrorMessage name="brand" component="div" className="alert alert-warning" />
                                    <Field className="form-control" type="text" name="brand" />
                                </fieldset>
                                <fieldset className="form-group">
                                    <label>model</label>
                                    <ErrorMessage name="brand" component="div" className="alert alert-warning" />
                                    <Field className="form-control" type="text" name="model" />
                                </fieldset>
                                <fieldset className="form-group">
                                    <label>fuel type</label>
                                    <Field className="form-control" as="select" name="fuelType" >
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