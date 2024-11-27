import express from 'express';
import { AuthRoutes } from '../modules/auth/auth.route';
import { UserRoutes } from '../modules/user/user.route';

const router = express.Router();
// eslint-disable-next-line @typescript-eslint/no-explicit-any
const moduleRoutes = [
  {
    path: '/auth',
    route: AuthRoutes,
  },
  {
    path: '/user',
    route: UserRoutes,
  }
];



moduleRoutes.forEach(route => router.use(route.path, route.route));
export default router;
