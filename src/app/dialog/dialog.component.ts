import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { EventDetails } from '../interfaces/event-details';
import { MemberDetailsService } from '../services/member-details/member-details.service';

@Component({
  selector: 'app-dialog',
  templateUrl: './dialog.component.html',
  styleUrls: ['./dialog.component.css'],
  providers: [MemberDetailsService]
})
export class DialogComponent implements OnInit {

  @Input() details? : EventDetails;
  @Output() callback : EventEmitter<any> = new EventEmitter();

  public members : any[];
  public show : boolean = false;
  constructor(private service : MemberDetailsService) { 
  }

  ngOnInit() {

    setTimeout(() => this.getMember(), 1000);
  }

  getMember(){
    this.show = false;
    const memIds = this.details.Members.map(m=> m.Id);
    if(!memIds.length){
      this.show = true;
      this.members = [];
    }
    this.service.getMember(memIds).subscribe(res =>{
      this.members = res.map( (r : any) => {
        return r.Members.Member;
      });
      console.log(this.members);
      this.show = true;
    }, error => console.error(error));
  }

  close(){
    this.show = false;
    this.callback.emit();
  }
}
