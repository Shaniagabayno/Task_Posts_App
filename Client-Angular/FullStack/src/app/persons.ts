import { Posts } from './posts';
import { Tasks } from './tasks';
export class Persons {
    constructor( public Name?: string , public Email? : string, public Street?: string, public City? : string, public Zipcode?: number, public Tasks? : Tasks[], public Posts? :Posts[]
    ) {}
}