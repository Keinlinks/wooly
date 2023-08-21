import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css'],
})
export class RegisterComponent {
  registerForm!: FormGroup;
  buttonText = 'Registrarse';
  constructor(
    private fb: FormBuilder,
    private authService: AuthService,
    private router: Router
  ) {
    this.registerForm = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required]],
      passwordConfirm: ['', [Validators.required]],
    });
  }
  registerSubmit() {
    if (this.registerForm.valid) {
      if (
        this.registerForm.value.password ===
        this.registerForm.value.passwordConfirm
      ) {
        this.buttonText = 'Enviando...';
        this.authService.registerUser(this.registerForm.value).subscribe(
          (res) => {
            alert('se registro correctamente');
            this.buttonText = 'Registrarse';
            this.router.navigateByUrl('/login');
          },
          (err) => {
            this.buttonText = 'Registrarse';
            alert(`Error: ${err.message}`);
          }
        );
      } else {
        alert('Las contraseñas no coinciden');
      }
    }
  }
}
