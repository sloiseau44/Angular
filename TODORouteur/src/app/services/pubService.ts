import {Injectable} from "@angular/core";
import {ApiServiceService} from "./api-service";
import {Pub} from "../model/Pub";

@Injectable({providedIn: "root"})
export class PubServices {

  pubs:Pub[] = [];

  constructor(private apiServiceService: ApiServiceService){}

  async getTodoJson() {
    const data: any[] = await (this.apiServiceService.getJson().toPromise() as Promise<any[]>);
    return this.pubs = data.map((pub) => {
      return pub;
    })
  }
}
