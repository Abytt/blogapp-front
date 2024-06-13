import axios from 'axios'
import React, { useState } from 'react'
import NavBar from './NavBar'

const SignUp = () => {

    const [data, setdata] = useState([
        {
            "c_name": String,
            "c_descr": String,
            "c_date": String,
            "c_duration": String,
            "trainer_name": String

        }
    ])
    const InputHandler = (event) => {
        setdata({ ...data, [event.target.name]: event.target.value })
    }
    const readvalue = () => {
        console.log(data)
        axios.post("http://localhost:8080/SignUp", data).then(
            (response) => {
                if (response.data.Status=="Success") {
                    alert("Data added Successfully")
                } else {
                    alert("Data Not added")
                }
            }
        ).catch().finally()
    }
    return (
        <div>
            <NavBar />

            <div className="container">
                <div className="row">
                    <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                        <div className="row g-3">
                            <div className="col col-6 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                                <label htmlFor="" className="label form-label">Course Name</label>
                                <input type="text" className="input form-control" name='c_name' value={data.c_name} onChange={InputHandler}/>
                            </div>
                            
                            <div className="col col-6 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                                <label htmlFor="" className="label form-label" >Course Duration</label>
                                <input type="number" className="input form-control" name='c_duration' value={data.c_duration} onChange={InputHandler}/>
                            </div>
                            <div className="col col-6 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                                <label htmlFor="" className="label form-label" >Trainer Name</label>
                                <input type="text" className="input form-control" name='trainer_name' value={data.trainer_name} onChange={InputHandler}/>
                            </div>
                            <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                                <button className="btn btn-warning" onClick={readvalue}>ADD</button>
                            </div>

                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default SignUp