import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/models/User';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {

  users: User = {
    firstName:'',
    lastName:'',
    age:null,
    address:{
      street:'',
      city:'',
      state:''
    }
  }
  user: User[];
  showExtended: boolean = true;
  loaded: boolean = false;
  enableAdd: boolean = false;
  showUserForm:boolean = false;

  constructor() { }

  ngOnInit() {
   
      this.user = [
        {
          firstName: 'John',
          lastName: 'Doe',
          age: 70,
          address: {
            street: '50 Main st',
            city: 'Boston',
            state: 'MA'
          },
          isActive: true,
          registered: new Date('01/02/2018 08:30:00'),
          hide:true
        },
        {
          firstName: 'Kevin',
          lastName: 'Johnson',
          age: 34,
          address: {
            street: '20 School st',
            city: 'Lynn',
            state: 'MA'
          },
          isActive: false,
          registered: new Date('03/11/2017 06:20:00'),
          hide:true
        
        },
        {
          firstName: 'Karen',
          lastName: 'Williams',
          age: 26,
          address: {
            street: '55 Mill st',
            city: 'Miami',
            state: 'FL'
          },
          isActive: true,
          registered: new Date('11/02/2016 10:30:00'),
          hide:true
        }
      ];

      this.loaded = true;
  }

  addUser() {
    this.users.isActive = true;
    this.users.registered = new Date();
    this.user.unshift(this.users);

    this.users = {
      firstName:'',
      lastName:'',
      age:null,
      address:{
        street:'',
        city:'',
        state:''
      }
    }
  }
  
}
