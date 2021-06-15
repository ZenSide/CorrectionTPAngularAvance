import { Injectable } from '@angular/core';
import {ContactMessage} from "../entity/contact-message.entity";
import {HttpClient} from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class ContactService {

  constructor(private http:HttpClient) { }

  sendMessage(message: ContactMessage) {
    return this.http.post('/contact',message);
  }
}
