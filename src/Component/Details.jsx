import React from "react";
import Header from "./Header";

function Details() {
    return (
        <div>
        <Header/>
            <div className="container">
                <div className="row">
                    <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                        <div className="row g-3">
                            <div class="card">
                                <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                                    <label htmlFor="" className="form-label"><strong>Name</strong></label>
                                    <input type="text" className="form-control" placeholder="Enter ur name" />
                                </div><br />

                                <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                                    <label htmlFor="" className="form-label">Username</label>
                                    <input type="text" className="form-control" placeholder="Enter ur username" />
                                </div><br />
                                <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                                    <label htmlFor="" className="form-label">Email Id</label>
                                    <input type="text" className="form-control" placeholder="Enter ur  Gmail Id" />
                                </div><br />
                                <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                                    <label htmlFor="" className="form-label">Website</label>
                                    <input type="text" className="form-control" placeholder="Enter the Website visted by you" />
                                </div><br />
                                <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                                <label htmlFor="" className="form-label">Password</label>
                                <input type="password" className="form-control" placeholder="Enter New Password"/>
                                <br />
                                </div>
                                <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                                <label htmlFor="" className="form-label">Confirm Password</label>
                                <input type="password" className="form-control" placeholder="Re-enter the Password"/>
                                <br />
                                </div>
                                <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                                    <button className="btn btn-primary">Submit</button>
                                </div><br />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Details;
