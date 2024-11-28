import React from "react";
import { Link } from "react-router-dom";

import bg3 from "../../assect/images/bg/03.jpg"
import logo from "../../assect/images/logo-icon-80.png"

export default function Signup(){
    return(
        <>
        <section className="bg-home zoom-image d-flex align-items-center">
            <div className="bg-overlay image-wrap" style={{backgroundImage:`url(${bg3})`, backgroundPosition:'center'}}></div>
            <div className="bg-overlay bg-gradient-overlay"></div>
            <div className="container">
                <div className="row">
                    <div className="col-12">
                        <div className="p-4 bg-white rounded-3 shadow-md mx-auto w-100" style={{maxWidth:'400px'}}>
                            <form>
                                <Link to="/"><img src={logo} className="mb-4 d-block mx-auto" alt=""/></Link>
                                <h5 className="mb-3">Register your account</h5>
                            
                                <div className="form-floating mb-2">
                                    <input type="text" className="form-control" id="floatingInput" placeholder="Harry"/>
                                    <label htmlFor="floatingInput">First Name</label>
                                </div>

                                <div className="form-floating mb-2">
                                    <input type="email" className="form-control" id="floatingEmail" placeholder="name@example.com"/>
                                    <label htmlFor="floatingEmail">Email Address</label>
                                </div>

                                <div className="form-floating mb-3">
                                    <input type="password" className="form-control" id="floatingPassword" placeholder="Password"/>
                                    <label htmlFor="floatingPassword">Password</label>
                                </div>
                            
                                <div className="form-check mb-3">
                                    <input className="form-check-input" type="checkbox" value="" id="flexCheckDefault"/>
                                    <label className="form-check-label text-muted" htmlFor="flexCheckDefault">I Accept <Link to="#" className="text-primary">Terms And Condition</Link></label>
                                </div>
                
                                <button className="btn btn-primary w-100" type="submit">Register</button>

                                <div className="col-12 text-center mt-3">
                                    <span><span className="text-muted me-2">Already have an account ? </span> <Link to="/auth-login" className="text-dark fw-medium">Sign in</Link></span>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        </>
    )
}