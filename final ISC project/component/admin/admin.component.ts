import { Component, OnInit } from "@angular/core";
import { FormControl, FormGroup, Validators } from "@angular/forms";
import { Router } from "@angular/router";
import { HotToastService } from "@ngneat/hot-toast";
import { AuthenticationService } from "src/app/services/authentication.service";

@Component({
    selector:'app-admin',
    templateUrl:'/admin.html'
})
export class AdminComponent implements OnInit{
    loginForm = new FormGroup({
        email:new FormControl('',[Validators.required, Validators.email]),
        password: new FormControl('', [Validators.required])
      })
        constructor(
          private authService: AuthenticationService,
          private router: Router,
          private toast: HotToastService
          
          
          ) { }
      
        ngOnInit(): void {
        }
        get email() {
          return this.loginForm.get('email');
        }
      
        get password() {
          return this.loginForm.get('password');
        }
        submit(){
          console.log(this.authService.currentUser$)
          if(!this.loginForm.valid){
            return
          }
          const{email, password} = this.loginForm.value;
          this.authService.login(email, password).pipe( this.toast.observe({
            success: 'Logged in successfully',
            loading: 'Logging in...',
            error: ({ message }) => `There was an error: ${message} `
          })).subscribe(() => {
            this.router.navigate(['adminhome']);
          });
        }
      
}