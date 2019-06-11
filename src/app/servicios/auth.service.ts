import { Injectable } from '@angular/core';
import {AngularFireAuth} from "@angular/fire/auth";
import { promise } from 'protractor';
import { resolve } from 'path';
import { reject, isRejected } from 'q';
import { UpperCasePipe } from '@angular/common';
import {AngularFirestore} from "@angular/fire/firestore";
import { Router } from '@angular/router';


@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private AFauth:AngularFireAuth , private db : AngularFirestore) { }

  login(email:string,password:string){

    return new Promise((resolve,reject)=>{
      this.AFauth.auth.signInWithEmailAndPassword(email,password).then(user =>{
        
        resolve(user)
       }).catch(err=> isRejected(err));
    });
    
   }

         
    register(email:string ,password:string , nombre :string){
       return new Promise((resolve,reject)=>{
       this.AFauth.auth.createUserWithEmailAndPassword(email,password).then(res=>{

        

       const uid = res.user.uid;
        this.db.collection('users').doc(uid).set({
         nombrec:nombre,
         uid:uid
       })
     
       alert("registrado");

      }).catch(err=>reject(err))


    });
   



  }
}
