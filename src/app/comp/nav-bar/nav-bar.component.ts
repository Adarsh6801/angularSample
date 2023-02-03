import { Component ,Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.css']
})
export class NavBarComponent implements OnInit {
  active:boolean=true;
  ngOnInit(): void {
    if(this.pactive){
      this.active=false;
    }
  }
  @Input() pactive='';
  accountName='Account Name';
  
}
