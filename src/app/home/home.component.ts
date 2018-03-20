import { Component, OnInit } from '@angular/core';
import { FormsModule, ReactiveFormsModule, FormControl, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})

export class HomeComponent implements OnInit {
  hide = true;
  userid = new FormControl('', [Validators.required]);
  // password = new FormControl('', [Validators.required]);

  getUseridErrorMessage() {
    return this.userid.hasError('required') ? 'You must enter a value' :
        this.userid.hasError('userid') ? 'Not a valid userid' :
            '';
  }

  // getPasswordErrorMessage() {
  //   return this.password.hasError('required') ? 'You must enter a password' : '';
  // }

  sendToCandidateList(){
  	this.router.navigate(['candidate']);
  }

  constructor(private route: ActivatedRoute, private router: Router) { }

  ngOnInit() {
  }

}
