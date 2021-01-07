import { Component } from "react";
import CarsDataService from "./CarsDataService";
import {Formik, Form, Field, ErrorMessage} from 'formik';
class AddCarComponent extends Component {

    emptyItem = {
        brand: '',
        model: '',
        productionYear: 0,
        plate: '',
        fuelType: ''
    }


    constructor(props) {
        super(props);

        
        this.state = {
            item: this.emptyItem,
            id: this.props.match.params.id
        }
        this.onSubmit  =this.onSubmit.bind(this);
    }

    onSubmit(values) {
        let car = {
            brand: values.brand,
        model: values.model,
        productionYear: values.productionYear,
        plate: values.plate,
        fuelType: values.fuelType
        }

        if(this.state.id === 'new') {
            CarsDataService.addCar(car)
                .then(()=> this.props.history.push('/cars'))
        } 
    }

   validate(values) {
       let errors ={};
       if(values.productionYear<1900 || values.productionYear>2021) {
           errors.productionYear = "Enter correct production year";
       }
       if(values.brand === '') {
           errors.brand = "Enter brand of car";
       }
       if(values.model === '') {
        errors.brand = "Enter model of car";
    }
       return errors;
   }

    render() {
        let brand = this.state.item.brand;
        let model = this.state.item.model;
        let fuelType = this.state.item.fuelType;
        let productionYear = this.state.item.productionYear;
        let plate = this.state.item.plate;

        return (
            <div className="container">
                <Formik
                initialValues={{ brand, model, fuelType, productionYear, plate }}
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
                                        <label>brand</label>
                                        <ErrorMessage name="brand" component="div" className="alert alert-warning"/>
                                        <Field className="form-control" type="text" name="brand" />
                                    </fieldset>
                                    <fieldset className="form-group">
                                        <label>model</label>
                                        <ErrorMessage name="brand" component="div" className="alert alert-warning"/>
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
                                        <ErrorMessage name="productionYear" component="div" className="alert alert-warning"/>
                                        <Field className="form-control" type="text" name="productionYear" />
                                    </fieldset>
                                    <fieldset className="form-group">
                                        <label>plate(optional)</label>
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