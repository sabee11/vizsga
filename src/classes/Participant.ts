import { IParticipant } from "../interfaces/IParticipant";


export class Participant implements IParticipant {
    constructor(
        public id: number,
        public name: string,
        public email: string
    ) {}
}