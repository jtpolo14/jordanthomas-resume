import React, { Component } from 'react';
import axios from 'axios';

//https://prod.liveshare.vsengsaas.visualstudio.com/join?9EDAA441D71F259F6B83DE3A442AF5085115

class LoggerInner extends React.Component {

  async getAuth(url) {
    const response = await fetch(url, {
      //method: 'GET', // *GET, POST, PUT, DELETE, etc.
      headers: {
         // 'Content-Type': 'application/json',
          "x-api-key": "XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX",
      }
    });
    const json = await response.json();
    console.log(json);
  }

    handleSubmit = (event) => {
        event.preventDefault();

        console.log(event.target.email.value);
        console.log(event.target.password.value);

        this.getAuth("https://99mmt688z6.execute-api.us-west-2.amazonaws.com/default/myFuncApiAuth");

        // TO DO
        // send username and password to api
        // api confirm and send back token
        // store token for future requests - cookie

    }


    render() {
        return (
            <div>
                <form onSubmit={this.handleSubmit}>
                    {/* <!-- Email input --> */}
                    <div class="form-outline mb-4">
                        <input type="email" name="email" id="form2Example1" class="form-control" value="test@test.com"/>
                        <label class="form-label" for="form2Example1">Email address</label>
                    </div>

                    {/* <!-- Password input --> */}
                    <div class="form-outline mb-4">
                        <input type="password" name="password" id="form2Example2" class="form-control" value="123"/>
                        <label class="form-label" for="form2Example2">Password</label>
                    </div>

                    {/* <!-- 2 column grid layout for inline styling --> */}
                    <div class="row mb-4">
                        <div class="col d-flex justify-content-center">
                            {/* <!-- Checkbox --> */}
                            <div class="form-check">
                                <input class="form-check-input" type="checkbox" value="" id="form2Example34" checked />
                                <label class="form-check-label" for="form2Example34"> Remember me </label>
                            </div>
                        </div>

                        <div class="col">
                            {/* <!-- Simple link --> */}
                            <a href="#!">Forgot password?</a>
                        </div>
                    </div>

                    {/* <!-- Submit button --> */}
                    <button type="submit" class="btn btn-primary btn-block mb-4">Sign in</button>

                    {/* <!-- Register buttons --> */}
                    <div class="text-center">
                        <p>Not a member? <a href="#!">Register</a></p>
                        <p>or sign up with:</p>
                        <button type="button" class="btn btn-primary btn-floating mx-1">
                            <i class="fab fa-facebook-f"></i>
                        </button>

                        <button type="button" class="btn btn-primary btn-floating mx-1">
                            <i class="fab fa-google"></i>
                        </button>

                        <button type="button" class="btn btn-primary btn-floating mx-1">
                            <i class="fab fa-twitter"></i>
                        </button>

                        <button type="button" class="btn btn-primary btn-floating mx-1">
                            <i class="fab fa-github"></i>
                        </button>
                    </div>
                </form>
            </div>
        )
    }
}

export default LoggerInner;
