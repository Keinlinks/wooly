import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.css'],
})
export class LoginPageComponent {
  loginForm!: FormGroup;
  buttonText = 'Iniciar sesión';
  disabledButton: boolean = false;
  constructor(
    private fb: FormBuilder,
    private authService: AuthService,
    private router: Router
  ) {
    this.loginForm = this.fb.group({
      email: ['', Validators.required],
      password: ['', Validators.required],
    });
  }
  loginSubmit() {
    if (this.loginForm.valid) {
      this.buttonText = 'Enviando...';
      this.disabledButton = true;
      this.authService.loginUser(this.loginForm.value).subscribe(
        (res) => {
          this.disabledButton = false;
          this.buttonText = 'Iniciar sesión';

          this.router.navigate(['../../chat']);
        },
        (err) => {
          this.disabledButton = false;
          this.buttonText = 'Iniciar sesión';
          alert(`ERROR: Usuario o contraseña incorrecta`);
        }
      );
    }
  }
}
