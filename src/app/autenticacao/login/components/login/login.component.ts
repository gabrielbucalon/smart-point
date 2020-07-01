import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { MatSnackBar } from '@angular/material/snack-bar';

import { Login } from '../../models';
import { LoginService } from '../../services';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  form: FormGroup;
  constructor(
    private fb: FormBuilder,
    private snackBar: MatSnackBar,
    private router: Router,
    private loginService: LoginService
  ) { }

  ngOnInit(): void {
    this.gerarForm();
  }

  gerarForm(): FormGroup {
    return this.form = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      senha: ['', [Validators.required, Validators.minLength(6)]],
    });
  }

  logar() {
  
    const login: Login = this.form.value;

    this.loginService.logar(login)
      .subscribe(data => {
        console.log(JSON.stringify(data));
        localStorage['token'] = data['data']['token'];
        const usuarioData = JSON.parse(atob(data['data']['token'].split('.')[1]));
        console.log(JSON.stringify(usuarioData));

        if (usuarioData['perfil'] === 'ROLE_ADMIN') {
          alert('Deve redirecionar para a página de admin');
        } else {
          alert('Deve redirecionar para a página de funcionario');
        }
      });
  }


}
