import { IParticipantModel } from "./participant-model";

export class ParticipantModel implements IParticipantModel {
    public name: string;
    public age: number;
    public address: string;

    constructor() {
        this.name = '';
        this.age = 0;
        this.address = ''
    }
}