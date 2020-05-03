import { Component, OnInit, Input } from '@angular/core';

import { Result } from '../../core/types/characters';
@Component({
    selector: 'app-character-list',
    templateUrl: 'character-list.component.html'
})

export class CharacterListComponent implements OnInit {
    
    @Input() characters: Result[];

    constructor() { }
    ngOnInit() { }
}