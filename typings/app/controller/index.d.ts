// This file is created by egg-ts-helper@1.25.9
// Do not modify this file!!!!!!!!!

import 'egg';
import ExportCategory from '../../../app/controller/category';
import ExportEvaluate from '../../../app/controller/evaluate';
import ExportHome from '../../../app/controller/home';
import ExportLogin from '../../../app/controller/login';
import ExportOrders from '../../../app/controller/orders';
import ExportProducts from '../../../app/controller/products';

declare module 'egg' {
  interface IController {
    category: ExportCategory;
    evaluate: ExportEvaluate;
    home: ExportHome;
    login: ExportLogin;
    orders: ExportOrders;
    products: ExportProducts;
  }
}
