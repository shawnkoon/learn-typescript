import { View } from './View';
import { Item, ItemProps } from '../models/Item';
import { ItemComponent } from './ItemComponent';
import { ItemForm } from './ItemForm';

export class ItemContainer extends View<Item, ItemProps> {
  regionsMap(): { [key: string]: string } {
    return {
      itemComponent: '.item-component',
      itemForm: '.item-form',
    };
  }

  onRender(): void {
    new ItemComponent(this.regions.itemComponent, this.model).render();
    new ItemForm(this.regions.itemForm, this.model).render();
  }

  template(): string {
    return `
      <div>
        <div class="item-component"></div>
        <div class="item-form"></div>
      </div>
    `;
  }
}
