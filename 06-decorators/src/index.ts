@classDecorator
class Car {
  @propertyDecorator
  color: string = 'red';
  hp: number = 100;

  @functionDecorator
  get formatColor(): string {
    return `This Car's color is ${this.color}`;
  }

  @logError('I am custom msg!')
  drive(): void {
    throw new Error();
    console.log('vroom');
  }

  race(@paramDecorator apponentHp: number): void {
    if (apponentHp < this.hp) {
      console.log('I won!');
    } else {
      console.log('I lost...');
    }
  }
}

/**
 * LogError Decorator factory.
 *
 * @param customMsg string value to pass into decorator factory.
 */
function logError(customMsg: string) {
  console.log('\n>> Executing Decorator Factory.\n');
  return function(
    target: any,
    key: string,
    propertyDescriptor: PropertyDescriptor
  ): void {
    const method = propertyDescriptor.value;

    propertyDescriptor.value = function() {
      try {
        method();
      } catch (e) {
        console.log('Something went wrong!', customMsg);
      }
    };
  };
}

/**
 * Plain Decorator to wrap function.
 *
 * @param target prototype of target class.
 * @param key string rep of key.
 * @param propertyDescriptor propertyDesciptor object of the key.
 */
function functionDecorator(
  target: any,
  key: string,
  propertyDescriptor: PropertyDescriptor
) {
  console.log('\n>> Executing Function Decorator.\n');
  console.log('target', target);
  console.log('key', key);
  console.log('propertyDescriptor', propertyDescriptor);
}

/**
 * Plain Decorator to wrap properties.
 *
 * @param target prototype of target class.
 * @param key string rep of key.
 */
function propertyDecorator(target: any, key: string) {
  console.log('\n>> Executing Property Decorator.\n');
  console.log('target', target);
  console.log('key', key);
}

/**
 * Decorator for parameters.
 *
 * @param target prototype of target class.
 * @param key string rep of key.
 * @param index index position of parameter.
 */
function paramDecorator(target: any, key: string, index: number) {
  console.log('\n>> Executing Parameter Decorator.\n');
  console.log('key', key, 'index', index);
}

/**
 * Decorator for Classes.
 *
 * @param constructor instance of constructor of this class.
 */
function classDecorator(constructor: typeof Car) {
  console.log('\n>> Executing Class Decorator.\n');
  console.log('constructor', constructor);
}

new Car().drive();
