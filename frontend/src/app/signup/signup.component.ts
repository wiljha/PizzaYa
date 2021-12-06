import { Component, OnInit } from '@angular/core';
import { User } from '../models/user.model';


@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {
  errMsg = 'Campo inválido';
  user: User = {name: '', email: '', password: ''};
  constructor() { }

  ngOnInit(): void {
  }

  getErrorMessage(){
    return this.errMsg
  }

}
