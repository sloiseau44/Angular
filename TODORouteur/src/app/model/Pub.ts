import {Owner} from "./Owner";
import {Hours} from "./Hours";
import {Beer} from "./Beer";


export class Pub{
  constructor(public name:string,
              public ower:Owner,
              public openDays:string[],
              public openHours:Hours,
              public beers:Beer[]){}
}