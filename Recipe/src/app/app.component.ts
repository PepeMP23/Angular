import { Component } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  isLoading: boolean = false;
  form: FormGroup = new FormGroup({
    ingredients: new FormControl('', [
      Validators.required,
      Validators.minLength(10)
    ])
  });


  /*
  nombre = 'Jose';

  form: FormGroup = new FormGroup({
    name: new FormControl('',[Validators.required]),
    email: new FormControl('',[Validators.required, Validators.email])
  });
  */

  validar(){
    this.form.controls['ingredients'].markAsDirty();

    if(this.form.valid){
      this.form.controls['ingredients'].disable();
      this.isLoading = true;
    }

    /*
    if(this.form.invalid){
      alert('Formulario inválido');
      this.form.controls['name'].markAsDirty();
      this.form.controls['email'].markAsDirty();
      return;
    }

    // Funcionalidad siguiente
    console.log(this.form.getRawValue);
    */
  }
}
