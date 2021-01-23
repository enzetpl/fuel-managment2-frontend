import { Component } from "react";
import { Formik, Form, Field, ErrorMessage } from 'formik';
import AppNavbar from "./AppNavbar";
import StatsSummaryDataService from "./StatsSummaryDataService";

class StatsSummaryComponent extends Component {


    constructor(props) {
        super(props);

        this.state = {
            carId: this.props.match.params.carId,
            startDate: new Date(2020,1,1).toISOString().substr(0, 10),
            endDate: new Date().toISOString().substr(0, 10),
            item: null
        }
        this.onSubmit = this.onSubmit.bind(this);

    }

    onSubmit(values) {
        StatsSummaryDataService.retreiveAllRefuelsForCar(this.state.carId, values.startDate, values.endDate)
        .then(response => {
            
            this.setState({ item: response.data })
            console.log(this.state.item)
        })    
    }

    render() {

        let startDate = this.state.startDate;
        let endDate = this.state.endDate;
        let summaryTable;
        let item = this.state.item;
        if(this.state.item != null) {
            if(this.state.item.totalRefuels === 0) {
                summaryTable = <div><div className="alert alert-warning">No refuels in selected time</div></div>
            } else {
                summaryTable = 
            <table className="table">
            <tbody>
            <tr>
                <td>Total price:</td><td>{item.totalPrice}</td>
            </tr>
            <tr>
                <td>Total volume:</td><td>{item.totalVolume}</td>
            </tr>
            <tr>
                <td>Total refuels:</td><td>{item.totalRefuels}</td>
            </tr>
            <tr>
                <td>average price per liter:</td><td>{item.avgPricePerLiter}</td>
            </tr>
            </tbody>
            </table>
        }
        }
        return (
            <div className="container">
            <AppNavbar />
            <br/>
            <Formik
                initialValues={{startDate, endDate}}
                onSubmit={this.onSubmit}
                validateOnChange={false}
                validateOnBlur={false}
                validate={this.validate}
                enableReinitialize={true}
            >
                {
                    (props) => (
                        <Form>
                            <fieldset className="input-group mb-3">
                            <span className="input-group-text">start date</span>
                                <ErrorMessage name="startDate" component="span" className="alert alert-warning" />
                                <Field className="form-control" type="date" name="startDate" />
                                <span className="input-group-text">end date</span>
                                <ErrorMessage name="endDate" component="span" className="alert alert-warning" />
                                <Field className="form-control" type="date" name="endDate" />
                            </fieldset>
                            <button className="btn btn-success" type="submit">Get</button>

                        </Form>
                    )
                }
            </Formik>
            {summaryTable}
        </div>
        )
    }

}
export default StatsSummaryComponent