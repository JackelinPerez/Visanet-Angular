import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators} from '@angular/forms';


@Component({
  selector: 'app-enter-data',
  templateUrl: './enter-data.component.html',
  styleUrls: ['./enter-data.component.sass']
})
export class EnterDataComponent implements OnInit {
  frmData: FormGroup;
  constructor(private formBuilder: FormBuilder) { }
  // validationMessages = {
  //   'nameFirst': [
  //       { type: 'required', message: 'Nombre es requerido' },
  //       { type: 'pattern', message: 'Debe contene sólo letras' }
  //   ]
  // }
  ngOnInit() {
    this.frmData = this.formBuilder.group({
      nameFirst:['',Validators.required,Validators.pattern('/^[0-9]+$/')],
      nameLast:['',Validators.required],
      email:['',Validators.required],
      dni:['',Validators.required],
      phone:['',Validators.required,Validators.minLength(9),
      Validators.maxLength(9)],
      ruc:['',Validators.required,Validators.minLength(10),
      Validators.maxLength(10)],
      cod:['',Validators.required,Validators.minLength(9),
      Validators.maxLength(9)],
      rubro:['',Validators.required],
      password:['',Validators.required,Validators.minLength(6),
      Validators.maxLength(15)],
      isClient:false
    })
  }
  get f() { return this.frmData.controls; }

}
