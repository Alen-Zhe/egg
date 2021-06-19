// This file is created by egg-ts-helper@1.25.9
// Do not modify this file!!!!!!!!!

import 'egg';
import ExportCa from '../../../app/model/ca';
import ExportEvaluate from '../../../app/model/evaluate';
import ExportIndex from '../../../app/model/index';
import ExportOrders from '../../../app/model/orders';
import ExportProducts from '../../../app/model/products';

declare module 'egg' {
  interface IModel {
    Ca: ReturnType<typeof ExportCa>;
    Evaluate: ReturnType<typeof ExportEvaluate>;
    Index: ReturnType<typeof ExportIndex>;
    Orders: ReturnType<typeof ExportOrders>;
    Products: ReturnType<typeof ExportProducts>;
  }
}
