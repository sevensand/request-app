import React, { Component } from 'react';
import background from '../../assets/img/background.jpg';
import logoHeader from '../../assets/img/logo-052018.png';

var sectionStyle = {
  width: '100%',
  height: '970px',
  backgroundImage: `url(${background})`,
  backgroundSize: 'cover'
}



class Login extends Component {
  render() {

    return (
      <div className="App">

      <div className="row"  style={sectionStyle}>
        <div className="redtrans">
          <div className="container mt-5" >


                  <div className="col-md-12">
                      <div className="container text-center col-md-4 mt-5">
                        <img src={logoHeader} className="logoHeader mt-5"></img>
                        <div className="input-group mt-5">
                        <span className="input-group-text trans_icon" id="inputGroup-sizing-default"><i className="fa fa-user fa-1x icon_log"></i></span>
                            <input type="text" className="form-control transparent_input" aria-label="Default" aria-describedby="inputGroup-sizing-default"></input>
                        </div>
                        <div className="input-group mb-3 mt-3">
                          <span className="input-group-text trans_icon" id="inputGroup-sizing-default"><i className="fa fa-lock fa-1x icon_log"></i></span>
                            <input type="password" className="form-control transparent_input" aria-label="Default" aria-describedby="inputGroup-sizing-default"></input>
                        </div>

                            <a href="#" className="btn btn-info rounded btn_login">LOGIN</a>
                            <p className="sign_up_link">Dont have account? <a href="" className="sign_up">Sign Up</a></p>
                      </div>
                  </div>



            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Login;
