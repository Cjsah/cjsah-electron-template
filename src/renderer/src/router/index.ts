import { createRouter, createWebHistory, Router } from 'vue-router';
import { Page } from '@renderer/router/page';

const router: Router = createRouter({
  history: createWebHistory('/web'),
  routes: Page.getPages(true)
});

// router.beforeEach((to, _, next) => {
//   const page: Page = to.meta.page as any;
//   if (page) {
//     next();
//   } else {
//     next('/404');
//   }
// });

export default router;
