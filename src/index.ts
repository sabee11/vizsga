import { Event } from "./classes/Event";
import { eventManager } from "./classes/eventManager";
import { Participant } from "./classes/Participant";

const eventManager = new eventManager();

const concert = new Event('1', 'concert', new Date('2024-11-15'), 'Budapest', 'Concert');
eventManager.addEvent(concert);

const participant = new Participant('1', 'Minta Ferenc', 'minta.ferenc@akarmi.hu');
eventManager.addParticipant('1', participant);

const concerts = eventManager.getEventsByType('Concert');
console.log(concerts);