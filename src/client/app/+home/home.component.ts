import { FORM_DIRECTIVES } from '@angular/common';
import { Component } from '@angular/core';
import * as _ from 'lodash';
import { NameListService } from '../shared/index';
import { Array } from '../lodash/index';

/**
 * This class represents the lazy loaded HomeComponent.
 */
@Component({
  moduleId: module.id,
  selector: 'sd-home',
  templateUrl: 'home.component.html',
  styleUrls: ['home.component.css'],
  directives: [FORM_DIRECTIVES]
})
export class HomeComponent {

  newName: string;

  /**
   * Creates an instance of the HomeComponent with the injected
   * NameListService.
   *
   * @param {NameListService} nameListService - The injected NameListService.
   */
  constructor(public nameListService: NameListService) {
    Array.differenceWith();
  }

  /**
   * Calls the add method of the NameListService with the current newName value of the form.
   * @return {boolean} false to prevent default form submit behavior to refresh the page.
   */
  addName(): boolean {
    this.nameListService.add(this.newName);
    this.newName = '';
    _.times(12, n => console.log(n));
    return false;
  }

}
