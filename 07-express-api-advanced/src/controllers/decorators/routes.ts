import 'reflect-metadata';
import { Methods } from './Methods';
import { MetadataKeys } from './MetadataKeys';
import { RequestHandler } from 'express';

interface RouteHandlerDescriptor extends PropertyDescriptor {
  value?: RequestHandler;
}

function routerBinder(method: string) {
  return function(path: string) {
    return function(target: any, key: string, desc: RouteHandlerDescriptor) {
      Reflect.defineMetadata(MetadataKeys.Path, path, target, key);
      Reflect.defineMetadata(MetadataKeys.Method, method, target, key);
    };
  };
}

export const get = routerBinder(Methods.Get);
export const put = routerBinder(Methods.Put);
export const post = routerBinder(Methods.Post);
export const patch = routerBinder(Methods.Patch);
export const del = routerBinder(Methods.Delete);
