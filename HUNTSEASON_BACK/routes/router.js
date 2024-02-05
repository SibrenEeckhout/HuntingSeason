import { Router } from 'https://deno.land/x/oak/mod.ts';
import { getUsersController, addUserController } from '../controllers/users.js';

const router = new Router();

router.get('/', (context) => {
  context.response.body = 'Server is listening on 3000';
});

router.get('/user', getUsersController);
router.get('/user/:id', addUserController);

export default router;
