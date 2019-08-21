/**
 * To make sure there is one and only router instance in proj.
 *
 * Router singleton.
 */
import { Router } from 'express';

export class AppRouter {
  private static instance: Router;

  static getInstance(): Router {
    if (!AppRouter.instance) {
      AppRouter.instance = Router();
    }

    return AppRouter.instance;
  }
}
