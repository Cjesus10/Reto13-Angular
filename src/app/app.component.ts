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

  tipo="";
  
  unJson = [
    {
      "Apellido": "Arcila", 
      "Casado": false, 
      "Dirección": "Calle 35 # 43 28", 
      "Nombre": "Diego",
      "Telefono": 3859720
      },

      { "Apellido": "Bueno",
      "Casado": false,
      "Dirección": "CR 16A # 53 28",
      "Nombre": "Kevin",
      "Telefono": 31485579954 
      },      
      { 
      "Apellido": "Palomino",
      "Casado": false,
      "Dirección": "CR 25 # 52 33",
      "Nombre": "Natalia",
      "Telefono": 32255945555 
      } 
  ]
}
