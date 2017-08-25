import React, { Component } from 'react';
import { connect } from 'react-redux';
import { goalRef } from '../firebase';

class AddGoal extends Component {
    constructor(props){
        super(props);
        
        this.state={
          title: ''  
            
        };
    }
    
    addGoal(){
        console.log("this", this);
        const { title } = this.state;
        const { email } = this.props.user;
        goalRef.push({email, title});
    }
    
  render(){
      return (
            <div>
                <div className="form-inline">
                    <div className="form-group">
                        <input
                            className="form-control"
                            type="text"
                            onChange={(event) => {this.setState({title: event.target.value})}}
                            style={{marginRight: '5px'}}
                        />
                        <button
                            className="btn btn-success"
                            type="button"
                            onClick={()=> this.addGoal()}

                            
                        >Add Goal</button>
                    </div>
                </div>
           </div>
          );
      
  }  
}


function mapStateToProps(state){
    const { user } = state;
    return {
        user
        
    };
}
export default connect(mapStateToProps, null)(AddGoal);