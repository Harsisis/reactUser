import React from 'react';
import '../style/profil.css'

export class User extends React.Component {
    render() {
      return <div className={"user-box " + this.props.user.gender}>
        <h1>Hello, {this.props.user.name} {this.props.user.firstname}</h1>
        <h2>you are {this.props.user.age} years old</h2>
        <div className="hobbies-table">
            <ul>
                {this.props.user.hobbies.map((hobby, index) => {   
                    return <li key={index}>{hobby}</li>
                })}
            </ul>
        </div>

      </div>;
    }
  }

export default User;