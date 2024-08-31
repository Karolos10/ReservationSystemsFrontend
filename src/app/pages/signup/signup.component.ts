import { Component, OnInit, OnChanges, SimpleChanges } from '@angular/core';
import { ServiceService } from '../../services/service.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrl: './signup.component.css'
})
export class SignupComponent implements OnInit {

  public user = {
    names: '',
    lastName: '',
    phone: '',
    username: '',
    email: '',
    password: ''
  }

  ngOnChanges(cambio: SimpleChanges) {
    console.log(cambio);
  }

  constructor(private userService: ServiceService) { }

  ngOnInit(): void {

  }

  formSubmit() {
    console.log(this.user);
    if (this.user.username == '' || this.user.username == null) {
      alert('Username is required');
      return;
    }

    this.userService.addUser(this.user).subscribe((data) => {
      console.log(data);
      alert('User added successfully');
    }, (error) => {
      console.log(error);
      alert('An error occurred');
    }
    );

  }

}
