import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { DadosCartaoForm, DetalhesCartao } from './dados-cartao';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class CartaoService {
  http = inject(HttpClient);

  criar(dados: DadosCartaoForm): Observable<DetalhesCartao> {
    const url = 'http://localhost:8080/cartoes';
    return this.http.post<DetalhesCartao>(url, dados);
  }
}
