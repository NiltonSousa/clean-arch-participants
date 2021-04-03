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

  // Private properties
  private participantService: ParticipantService = new ParticipantService();

  // Public properties
  public participants = new Array<ParticipantModel>();

  constructor() { }

  ngOnInit() {
    this.participants = this.participantService.getParticipants();
  }

}
