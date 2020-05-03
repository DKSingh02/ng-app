import { Injectable } from '@angular/core';
import { HttpClient} from '@angular/common/http';
import { Observable } from 'rxjs';
import { catchError, tap, map } from 'rxjs/operators';

// {providedIn: 'root'}
@Injectable()
export class CharacterService {
    constructor(private httpClient: HttpClient) { }

    getCharacters(): Observable<any> {
        return this.httpClient.get('https://rickandmortyapi.com/api/character/' ).pipe(
            tap(data => console.log(JSON.stringify(data))),
        );
    }
    
}