import { Event } from "../classes/Event";

export interface IEvent {
    id: number;
    name: string;
    date: Date;
    place: string;
    participant: string[];
    eventType: string;
}