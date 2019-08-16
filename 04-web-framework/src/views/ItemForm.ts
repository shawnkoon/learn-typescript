import { Item, ItemProps } from '../models/Item';
import { View } from './View';

export class ItemForm extends View<Item, ItemProps> {
  eventsMap(): { [key: string]: () => void } {
    return {
      // html-event:html-target
      'click:.set-age': this.handleSetAge,
      'click:.set-name': this.handleSetName,
      'click:.save-item': this.handleSave,
    };
  }

  handleSetAge = (): void => {
    this.model.setRandomPrice();
  };

  handleSetName = (): void => {
    const input = this.parent.querySelector('input');

    if (input) {
      const name = input.value;
      this.model.set({ name });
    }
  };

  handleSave = (): void => {
    this.model.save();
  };

  template(): string {
    return `
      <div>
        <input placeholder=${this.model.get('name')} />
        <button class="set-name">Update Name</button>
        <button class="set-age">Set Random Price</button>
        <button class="save-item">Save</button>
      </div>
    `;
  }
}
