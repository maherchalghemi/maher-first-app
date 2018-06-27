import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-message',
  templateUrl: './message.component.html',
  styleUrls: ['./message.component.css']
})
export class MessageComponent implements OnInit {
//one way binding
  msg: string ;
  msgtwoway: string;
  constructor() { }
  //two way binding
  btnClicked(txtmsg) {
    console.log(txtmsg);
    this.msgtwoway = txtmsg;
  }
  ngOnInit() {
    //one way binding
    this.msg="this is my first app angular";
  }

}
