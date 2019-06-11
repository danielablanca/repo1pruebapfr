import { Component, OnInit } from '@angular/core';
import { SrvRecord } from 'dns';
import {AuthService} from "../../servicios/auth.service";
import { UpperCasePipe } from '@angular/common';
@Component({
  selector: 'app-registro',
  templateUrl: './registro.page.html',
  styleUrls: ['./registro.page.scss'],
})
export class RegistroPage implements OnInit {

public emailc:string ;
//1 public nombrec:string ;
public passwordc: string;

  constructor(private auth:AuthService) { }

  ngOnInit() {
  }
  OnSubmitRegister(){

    this.auth.register(this.emailc ,this.passwordc /*2, this.nombrec*/).then(res=>{
      console.log(this.auth)
    }).catch(err=> console.log(err))
  }


}
