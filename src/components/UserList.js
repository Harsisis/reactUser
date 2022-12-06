import User from './User';
import React from 'react';
import '../style/profil.css'

export class UserList extends React.Component {
    render() {
        const users = [
            {
              name: 'John',
              firstname: 'Doe',
              age: 21,
              gender: 'male',
              hobbies: ['guitare', 'Dance', 'Coding']
            },
            {
              name: 'Maria',
              firstname: 'Doe',
              age: 20,
              gender: 'female',
              hobbies: ['guitare', 'Piano', 'Cooking']
            },
            {
              name: 'Bob',
              firstname: 'Doe',
              age: 12,
              gender: 'male',
              hobbies: ['Legos', 'Cinema', 'Youtube']
            }
          ];
      return users.map((user, index)=>{   
        return <User key={index} user={user}></User>;   
    });
    }
  }

  export default UserList;
