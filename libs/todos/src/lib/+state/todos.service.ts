import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { TodosEntity } from './todos.models';

const BASE_URL = 'http://localhost:5000/api/v1/todos';
const HEADER = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' }),
};

@Injectable({
  providedIn: 'root',
})
export class TodosService {
  constructor(private http: HttpClient) {}

  all() {
    return this.http.get<TodosEntity[]>(BASE_URL);
  }

  load(id: string) {
    return this.http.get<TodosEntity>(`${BASE_URL}/${id}`);
  }

  create(todoProps: TodosEntity) {
    

    return this.http.post<TodosEntity>(
      `${BASE_URL}`,
      JSON.stringify(todoProps),
      HEADER
    );
  }

  update(id: string, updates: TodosEntity) {
    return this.http.put<TodosEntity>(
      `${BASE_URL}/${id}`,
      JSON.stringify(updates),
      HEADER
    );
  }

  toggle(id: string) {
    return this.http.get<TodosEntity>(
      `${BASE_URL}/done/${id}`,
      HEADER
    );
  }

  delete(id: string) {
    return this.http.delete(`${BASE_URL}/${id}`);
  }
}
