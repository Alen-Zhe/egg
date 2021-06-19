// This file is created by egg-ts-helper@1.25.9
// Do not modify this file!!!!!!!!!

import 'egg';
type AnyClass = new (...args: any[]) => any;
type AnyFunc<T = any> = (...args: any[]) => T;
type CanExportFunc = AnyFunc<Promise<any>> | AnyFunc<IterableIterator<any>>;
type AutoInstanceType<T, U = T extends CanExportFunc ? T : T extends AnyFunc ? ReturnType<T> : T> = U extends AnyClass ? InstanceType<U> : U;
import ExportCategory from '../../../app/service/category';
import ExportEvaluate from '../../../app/service/evaluate';
import ExportLogin from '../../../app/service/login';
import ExportOrders from '../../../app/service/orders';
import ExportProducts from '../../../app/service/products';
import ExportTest from '../../../app/service/Test';

declare module 'egg' {
  interface IService {
    category: AutoInstanceType<typeof ExportCategory>;
    evaluate: AutoInstanceType<typeof ExportEvaluate>;
    login: AutoInstanceType<typeof ExportLogin>;
    orders: AutoInstanceType<typeof ExportOrders>;
    products: AutoInstanceType<typeof ExportProducts>;
    test: AutoInstanceType<typeof ExportTest>;
  }
}
