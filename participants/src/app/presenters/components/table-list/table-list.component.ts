// Native components 
import { Component, OnInit } from '@angular/core';
// Models
import { ParticipantModel } from 'src/app/entities/participant.model';
// Services
import { ParticipantService } from 'src/app/use-cases/participant.service';

@Component({
  selector: 'app-table-list',
  templateUrl: './table-list.component.html',
  styleUrls: ['./table-list.component.css']
})
export class TableListComponent implements OnInit {

  // Public properties
  public participants = new Array<ParticipantModel>();

  constructor(private participantService: ParticipantService) {
    
  }

  ngOnInit() {
    this.participants = this.participantService.getParticipants();
  }

}
