import {Component, OnDestroy, OnInit} from '@angular/core';
import {CharactersService} from "../../shared/services/characters.service";
// import {Character, CharacterApiResponse} from "../../shared/models/character.model";
// import {Observable, Subscription} from "rxjs";

@Component({
  selector: 'app-characters',
  templateUrl: './characters.component.html',
  styleUrls: ['./characters.component.scss']
})
export class CharactersComponent  {
  // characters: Character[] = [];
  // characterSubscription?: Subscription;

  charactersResponse$ = this.charactersService.getCharacters();
  constructor(private charactersService: CharactersService) { }

  //implements OnInit, OnDestroy
  // ngOnInit(): void {
  //   // this.characterSubscription = this.charactersService.getCharacters().subscribe((response)=>{
  //   //    this.characters = response.results
  //   // })
  // }
  //
  // ngOnDestroy(): void{
  //   // this.characterSubscription?.unsubscribe();
  // }
}
