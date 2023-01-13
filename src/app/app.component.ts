import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  monedas = ['EUR', 'PEN', 'USD', 'GBP'];
 
  constructor(private formBuilder : FormBuilder){}
  registroForm = this.formBuilder.group({  
    valor: ['', Validators.required],
    monto: ['', Validators.required],
    op: [''],
  })

  get valor(){ return this.registroForm.get('valor');}
  get monto(){ return this.registroForm.get('monto');}
  get op(){ return this.registroForm.get('op');}

  val='PEN '
  tipo="";
}
