import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class MailService {
  private server: string = 'http://localhost';
  constructor(private http: HttpClient) {}
  /**
   * Envía un mensaje entre dos usuarios.
   * @param idDestined ID del destinatario.
   * @param idStarted ID del remitente.
   * @param content Contenido del mensaje.
   */
  sendMail(idDestined: string, idStarted: string, content: string) {
    const mail = {
      idDestined: idDestined,
      idStarted: idStarted,
      content: content,
    };
    this.http.post(`${this.server}/send`, mail);
  }
}
