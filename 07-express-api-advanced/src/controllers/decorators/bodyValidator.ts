import 'reflect-metadata';
import { MetadataKeys } from './MetadataKeys';

export function bodyValidator(...args: string[]) {
  return function(target: any, key: string, desc: PropertyDescriptor) {
    Reflect.defineMetadata(MetadataKeys.Validator, args, target, key);
  };
}
