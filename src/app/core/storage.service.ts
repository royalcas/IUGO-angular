import { Observable } from 'rxjs/Observable';
import { Injectable } from '@angular/core';
import { IStorageService } from './definitions/istorage.service';
import 'rxjs/add/observable/of';

@Injectable()
export class StorageService {
	public set(key: string, value: string): Observable<any> {
		localStorage.setItem(key, value);
		return Observable.of(value);
	}

	public get(key: string): Observable<any> {
		return Observable.of(localStorage.getItem(key));
	}

	public remove(key: string): Observable<any> {
		localStorage.removeItem(key);
		return Observable.of(key);
	}
	public clear(): void {
		localStorage.clear();
	}
}
