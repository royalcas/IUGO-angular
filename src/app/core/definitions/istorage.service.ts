import { Observable } from 'rxjs/Observable';

export interface IStorageService {
  get(key: string): Observable<any>;
  set(key: string, value: string): Observable<any>;
  remove(key: string): Observable<any>;
  clear(): void;
}
