import { AuthenticationService } from './../../core/authentication/authentication.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MatSnackBar } from '@angular/material';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  user: any = {};

  //constructor(private authenticationService: AuthenticationService, private router: Router, public snackBar: MatSnackBar) {}

  ngOnInit() {}
/*
  login(event: Event): void {
    event.preventDefault();

    this.router.navigate(['/dispatcher']);
  }
  */
}
