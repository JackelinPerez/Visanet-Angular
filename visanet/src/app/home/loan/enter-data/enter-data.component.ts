import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators, FormGroupName } from '@angular/forms';
import { NgForm } from '@angular/forms';
import { LocalService } from 'src/app/shared/local.service';
@Component({
  selector: 'app-enter-data',
  templateUrl: './enter-data.component.html',
  styleUrls: ['./enter-data.component.sass']
})
export class EnterDataComponent implements OnInit {
  name: string;
  frmData: FormGroup;
  constructor(private formBuilder: FormBuilder, private service : LocalService) { }

   ngOnInit() {
    this.frmData = this.formBuilder.group({
      nameFirst:['',Validators.required],
      description:['',Validators.required],
      done:false
    })
   }

   sendPersonalData(form:NgForm){
    let data = Object.assign({},form.value);
    console.log(data);
  }
  //  onSubmit() {
  //      this.submitted = true;

  //      if (this.contacto.invalid) {
  //          return;
  //      }

  //      alert('Mensaje Enviado !')
  //  }
}
