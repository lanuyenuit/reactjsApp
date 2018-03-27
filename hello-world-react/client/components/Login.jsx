import React from 'react';
import App from "./App.jsx";

export default class Login extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            toggleSignin: false
        };
    }
    handleSignin = () =>  {
        this.setState({toggleSignin: true});
    };
    render() {
        let {toggleSignin} = this.state;
        return <div>
            { !toggleSignin &&
            <div className="login-box">
                <div className="login-logo">
                    <a href="../../index2.html"><b>Admin</b>LTE</a>
                </div>
                <div className="login-box-body">
                    <p className="login-box-msg">Sign in to start your session</p>

                    <form action="#" method="post">
                        <div className="form-group has-feedback">
                        </div>
                        <div className="form-group has-feedback">
                            <input type="password" className="form-control" placeholder="Password"/>
                            <span className="glyphicon glyphicon-lock form-control-feedback"></span>
                        </div>
                        <div className="row">
                            <div className="col-xs-8">
                                <div className="checkbox icheck">
                                    <label className="">
                                        <div className="icheckbox_square-blue" aria-checked="false" aria-disabled="false" style={{position: 'relative'}}><input type="checkbox" style={{position: 'absolute', top: '-20%', left: '-20%', display: 'block', width: '140%', height: '140%', margin: '0px', padding: '0px', background: 'rgb(255, 255, 255)', border: '0px', opacity: '0'}}/><ins className="iCheck-helper" style={{position: 'absolute', top: '-20%', left: '-20%', display: 'block', width: '140%', height: '140%', margin: '0px', padding: '0px', background: 'rgb(255, 255, 255)', border: '0px', opacity: '0'}}></ins></div> Remember Me
                                    </label>
                                </div>
                            </div>
                            <div className="col-xs-4">
                                <button type="submit" className="btn btn-primary btn-block btn-flat" onClick={()=>this.handleSignin()}>Sign In</button>
                            </div>
                        </div>
                    </form>

                    <div className="social-auth-links text-center">
                        <p>- OR -</p>
                        <a href="#" className="btn btn-block btn-social btn-facebook btn-flat"><i className="fa fa-facebook"></i> Sign in using
                            Facebook</a>
                        <a href="#" className="btn btn-block btn-social btn-google btn-flat"><i className="fa fa-google-plus"></i> Sign in using
                            Google+</a>
                    </div>

                    <a href="kenh14.vn">I forgot my password</a>
                    <br/>
                    <a href="zing.vn" className="text-center">Register a new membership</a>

                </div>
            </div>
            }
            {toggleSignin && <App />}
        </div>

    }
}

