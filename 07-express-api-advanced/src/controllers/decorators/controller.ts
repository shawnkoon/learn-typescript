import 'reflect-metadata';
import { AppRouter } from '../../AppRouter';
import { Methods } from './Methods';
import { MetadataKeys } from './MetadataKeys';
import { Request, Response, RequestHandler, NextFunction } from 'express';

function bodyValidators(keys: string[]): RequestHandler {
  return function(req: Request, res: Response, next: NextFunction) {
    if (!req.body) {
      res.status(422).send('Invalid request');
      return;
    }

    for (let key of keys) {
      if (!req.body[key]) {
        res.status(422).send(`"${key}" is missing from the body.`);
        return;
      }
    }

    next();
  };
}

export function controller(routePrefix: string = '') {
  return function(target: Function) {
    const router = AppRouter.getInstance();

    for (let key in target.prototype) {
      const routeHandler = target.prototype[key];
      const path: string = Reflect.getMetadata(MetadataKeys.Path, target.prototype, key);
      const method: Methods = Reflect.getMetadata(
        MetadataKeys.Method,
        target.prototype,
        key
      );
      const middlwares =
        Reflect.getMetadata(MetadataKeys.Middleware, target.prototype, key) || [];
      const requiredBodyProps =
        Reflect.getMetadata(MetadataKeys.Validator, target.prototype, key) || [];

      const validator = bodyValidators(requiredBodyProps);

      if (path) {
        router[method](`${routePrefix}${path}`, ...middlwares, validator, routeHandler);
      }
    }
  };
}
