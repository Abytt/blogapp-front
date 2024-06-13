import axios from 'axios'
import React, { useState } from 'react'
import { Link } from 'react-router-dom'


const SignUp = () => {

    const [data, setdata] = useState([
        {
           "name":{type:String,required:true},
        "Email":{type:String,required:true},
        "password":{type:String,required:true}

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


            <div className="container">
                <div className="row">
                    <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                        <div className="row g-3">
                        <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                                <label htmlFor="" className="label form-label">name</label>
                                <input type="text" className="input form-control" name='name' value={data.name} onChange={InputHandler}/>
                            </div>
                            <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                                <label htmlFor="" className="label form-label">Email</label>
                                <input type="text" className="input form-control" name='Email' value={data.Email} onChange={InputHandler}/>
                            </div>
                            
                            <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                                <label htmlFor="" className="label form-label" >Password</label>
                                <input type="number" className="input form-control" name='password' value={data.password} onChange={InputHandler}/>
                            </div>
                           
                            <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                                <button className="btn btn-warning" onClick={readvalue}>SignUP</button>
                                <Link to="/SignIN"></Link>
                            </div>

                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default SignUp