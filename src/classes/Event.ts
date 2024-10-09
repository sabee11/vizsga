import { IEvent } from "../interfaces/IEvent";
import { IParticipant } from "../interfaces/IParticipant";

export class Event implements IEvent {
    constructor(
        public id: number,
        public name: string,
        public date: Date,
        public place: string,
        public participant: string[] = [],
        public eventType: string
    ) {}
}