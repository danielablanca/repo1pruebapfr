import { Component, OnInit } from '@angular/core';
import { SrvRecord } from 'dns';
import {AuthService} from "../../servicios/auth.service";
import { UpperCasePipe } from '@angular/common';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { IonicPage, AlertController } from 'ionic-angular';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';



@Component({
  selector: 'app-registro',
  templateUrl: './registro.page.html',
  styleUrls: ['./registro.page.scss'],
})
export class RegistroPage implements OnInit {
formularioUsuario: FormGroup;

public emailc:string ;
public nombrec:string ;
public passwordc: string;

  passwordType: string='password';
  passwordShown:boolean=false;

  constructor(
    private auth:AuthService,
    private alertCtrl: AlertController,
    private fb: FormBuilder
    ) {this.buildForm(); }

    ngOnInit() {}

    OnSubmitRegister(){

    this.auth.register(this.emailc ,this.passwordc , this.nombrec).then(res=>{
      console.log(this.auth)
    }).catch(err=> console.log(err))
    }


 
   public verPassword(){
    if(this.passwordShown){
      this.passwordShown=false;
      this.passwordType='password';
    }else{
      this.passwordShown=true;
      this.passwordType='text';
    }
  }

   


   



  




  }

