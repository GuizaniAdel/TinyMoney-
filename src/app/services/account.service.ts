import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Account } from '../model/account';

@Injectable({
  providedIn: 'root'
})
export class AccountService { 
  
  constructor(private http:HttpClient) { }
  //post crud
public addAccount(account:Account){
  return this.http.post("http://localhost:8088/SpringMVC/addAccount",account);
}
public editAccount(account:Account){
  return this.http.put("http://localhost:8088/SpringMVC/PutAcount",account);
}
public getAccount(){
  return this.http.get<Account[]>("http://localhost:8088/SpringMVC/getAllAccountsJPQL");
}
public deleteAccount(id:number){
  return this.http.delete("http://localhost:8088/SpringMVC/deleteaccount/"+id);
}
public Scoring(id:any){
    return this.http.post("http://localhost:8088/SpringMVC/Scoring",id);
  }
  
}
  


