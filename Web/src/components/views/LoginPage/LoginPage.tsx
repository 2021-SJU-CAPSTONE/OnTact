import React, { Component } from 'react';
import logo from '../Navbar/Sections/onTact.png';

export default class LoginPage extends Component {
    render() {
        return (
            <div style={{ width: '75%', margin: '3rem auto' }}>
                <div style ={{textAlign:'center'}}>
                    <img src ={logo}  />
                </div>
                <div className="container">
                    <div className="row">
                        <div className="col-sm-9 col-md-7 col-lg-5 mx-auto">
                        <div className="card card-signin my-5">
                            <div className="card-body">
                            <h5 className="card-title text-center">Sign In</h5>
                            <form className="form-signin">
                                <div className="form-label-group">
                                <input type="email" id="inputEmail" className="form-control" placeholder="Email address" required />
                                <label >Email address</label>
                                </div>

                                <div className="form-label-group">
                                <input type="password" id="inputPassword" className="form-control" placeholder="Password" required />
                                <label >Password</label>
                                </div>

                                <div className="custom-control custom-checkbox mb-3">
                                <input type="checkbox" className="custom-control-input" id="customCheck1"/>
                                <label className="custom-control-label" >Remember password</label>
                                </div>
                                <button className="btn btn-lg btn-block text-uppercase" type="submit" style={{backgroundColor: '#D65E2A',color:'white' }}>Sign in</button>
                                <hr className="my-4" />
                                <button className="btn btn-lg btn-google btn-block text-uppercase" type="submit"><i className="fa fa-registered mr-2"></i> Register</button>
                                <button className="btn btn-lg btn-facebook btn-block text-uppercase" type="submit"><i className="fas fa-key mr-2"></i> Find ID/PASSWORD</button>
                            </form>
                            </div>
                        </div>
                        </div>
                    </div>
                    </div>
                    
            </div>
        )
    }
}

