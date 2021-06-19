import { Application } from 'egg';

export default (app: Application) => {
  const { controller, router } = app;
  // login
  router.post('/login', controller.login.login);
  // 注册
  router.post('/register', controller.login.register);
  // 获取商品
  router.get('/get-pros', controller.products.getPros);
  router.post('/add-pros', controller.products.addPros);
  router.put('/update-pros', controller.products.updatePros);
  router.delete('/delete-pros', controller.products.deletePros);
  // 订单接口
  router.get('/get-orders', controller.orders.getOrders);
  router.post('/add-orders', controller.orders.addOrders);
  router.put('/update-orders', controller.orders.updateOrders);
  router.delete('/delete-orders', controller.orders.deleteOrders);
  // 分类接口
  router.get('/get-category', controller.category.getCategory);
  router.post('/add-category', controller.category.addCategory);
  router.put('/update-category', controller.category.updateCategory);
  router.delete('/delete-category', controller.category.deleteCategory);
  // 评价接口
  router.get('/get-evaluate', controller.evaluate.getEvaluate);
  router.post('/add-evaluate', controller.evaluate.addEvaluate);
  router.put('/update-evaluate', controller.evaluate.updateEvaluate);
  router.delete('/delete-evaluate', controller.evaluate.deleteEvaluate);
};
