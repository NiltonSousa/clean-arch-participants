// Models
import { ParticipantModel } from '../entities/participant.model';
// Mocks
import ParticipantsMockJson from './mock/participants-mock.json';
// Others
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ParticipantService {

  constructor() {}

  getParticipants(): Array<ParticipantModel> {
    return ParticipantsMockJson;
  }
}
