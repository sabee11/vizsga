import { IEvent } from "../interfaces/IEvent";
import { Event } from "./Event";
import { Participant } from "./Participant";

export class eventManager{
    private events: Event[] = [];
    private participants: string[] = [];

    addEvent(event: Event): void {
        this.events.push(event);
    }

    editEvent(id: number, updatedEvent: Partial<IEvent>): void {
        const event = this.events.find(event => event.id === id);
        if (event) {
            Object.assign(event, updatedEvent);
        }
    }

    deleteEvent(id: number): void {
        this.events = this.events.filter(event => event.id !== id);
    }

    getEvents(): Event[] {
        return this.events;
    }

    getEventsByType(eventType: string): Event[] {
        return this.events.filter(event => event.eventType === eventType);
    }

    addParticipant(eventId: number, participant: Participant): void {
        const event = this.events.find(event => event.id === eventId);
        if (event) {
            event.participants.push(participant);
        }
    }

    deleteParticipant(eventId: number, participantId: number): void {
        const event = this.events.find(event => event.id === eventId);
        if (event) {
            event.participants = event.participants.filter(event => event.id !== participantId);
        }
    }
}
