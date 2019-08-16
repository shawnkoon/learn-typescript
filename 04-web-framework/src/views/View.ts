import { Model } from '../models/Model';

export abstract class View<T extends Model<P>, P> {
  protected readonly regions: { [key: string]: Element } = {};

  constructor(public parent: Element, public model: T) {
    this.bindModel();
  }

  abstract template(): string;

  regionsMap(): { [key: string]: string } {
    return {};
  }

  eventsMap(): { [key: string]: () => void } {
    return {};
  }

  bindModel(): void {
    this.model.on('change', () => this.render());
  }

  onRender(): void {}

  render(): void {
    // DOM cleanup
    this.parent.innerHTML = '';

    const templateElement = document.createElement('template');
    templateElement.innerHTML = this.template();

    this.bindEvents(templateElement.content);
    this.bindRegions(templateElement.content);

    this.onRender();

    this.parent.append(templateElement.content);
  }

  private bindEvents(fragment: DocumentFragment): void {
    const events = this.eventsMap();

    for (let eventKey in events) {
      const [eventName, selector] = eventKey.split(':');

      fragment.querySelectorAll(selector).forEach(element => {
        element.addEventListener(eventName, events[eventKey]);
      });
    }
  }

  private bindRegions(fragment: DocumentFragment): void {
    const regionMap = this.regionsMap();

    for (let key in regionMap) {
      const selector = regionMap[key];
      const element = fragment.querySelector(selector);

      if (!element) {
        continue;
      }

      this.regions[key] = element;
    }
  }
}
