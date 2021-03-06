import React, { Component } from 'react';
import { Link } from 'react-router';
import { firebaseApp } from '../firebase'


class SignIn extends Component{
    constructor(props){
        super(props);
        
        this.state={
            email: '',
            password: '',
            error: {
                message: ''
            }
            
        };
        
    }
    
    
    signIn(){
        console.log('this.state', this.state);
        const { email, password } = this.state;
        firebaseApp.auth().signInWithEmailAndPassword(email, password)
        .catch(error => {
            this.setState({error});
            
        });

    }
    
    render(){
        return(
            <div className="form-inline"> 
                <h2>Sign In Page </h2>
            <div className="form-group">
                <input
                    className="form-control"
                    type="text"
                    placeholder="enter email"
                    onChange={(event) => this.setState({ email: event.target.value})}
                />
                <input
                    className="form-control"
                    type="password"
                    placeholder="enter password"
                    onChange={(event) => this.setState({password: event.target.value})}
                />
                <button
                    className="btn btn-primary"
                    onClick={() => this.signIn()}
                >Log In</button>
            </div>
            <div>{this.state.error.message}</div>
            <div><Link to={'/signup'}>Not a registered user? Sign Up instead</Link></div>
            </div>
            );
        
        
    }
    
    
}


export default SignIn;