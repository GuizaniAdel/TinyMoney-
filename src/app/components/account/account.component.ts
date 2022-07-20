import { Component, OnInit } from '@angular/core';
import { ModalDismissReasons, NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { Account } from 'src/app/model/account';
import { AccountService } from 'src/app/services/account.service';

@Component({
  selector: 'app-account',
  templateUrl: './account.component.html',
  styleUrls: ['./account.component.scss']
})
export class AccountComponent implements OnInit {

  accountlist:Account[]=[];
  form :boolean = false;
  closeResult! :string;
  /*product!: Product;*/
  pathReact: string;
  account : Account = new Account();
  constructor(private accountservice:AccountService,private modalService:NgbModal) { }

  ngOnInit(): void {
    this.getaccount();
    
  }
  public getaccount(){
     this.accountservice.getAccount().subscribe((data:Account[])=>{
      this.accountlist=data;
  });
  
}
public deleteaccount(id:number){
  this.accountservice.deleteAccount(id).subscribe(data=>{this.ngOnInit()});
}
addAccount(account: Account) {

  this.accountservice.addAccount(account).subscribe(
    () => (this.accountlist.push(account))
  )
}
Scoring(id: any) {

  this.accountservice.Scoring(id).subscribe(
    () => (this.accountlist.push(id))
  )
}




editAccount(account : Account){
  this.accountservice.editAccount(account).subscribe();
}

open(content: any) {
  this.modalService.open(content, {ariaLabelledBy: 'modal-basic-title'}).result.then((result) => {
    this.closeResult = 'Closed with: ${result}';
  }, (reason) => {
    this.closeResult = 'Dismissed ${this.getDismissReason(reason)}';
  });
  }
  private getDismissReason(reason: any): string {
    if (reason ===ModalDismissReasons.ESC) {
      return 'by pressing ESC';
    } else if (reason === ModalDismissReasons.BACKDROP_CLICK) {
      return 'by clicking on a backdrop';
    } else {
      return  'with: ${reason}';
    }
  }
  closeForm(){

  }
  cancel(){
    this.form = false;
  }
}

