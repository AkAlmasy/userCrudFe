import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  showAddUserDialog: boolean = false;
  @Output() refreshList = new EventEmitter<{ refreshList: boolean }>();

  constructor() { }

  ngOnInit(): void {
  }

  addNewUser() {
    this.showAddUserDialog = true;
  }

  onDialogAction(dialogAction: any) {
    this.showAddUserDialog = dialogAction.showAddUserDialog;
    if (dialogAction.refreshList) {
      this.refreshList.emit({refreshList: true});   
    }
  }
}