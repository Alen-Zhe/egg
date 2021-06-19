import { Service } from 'egg';
import queryDetection from '../common/queryDetection';
import md5 = require('js-md5');

export default class Orders extends Service {
  // 获取订单列表详情
  public async getOrders() {
    const { ctx } = this;

    const { pageNum, pageSize, condition } = ctx.request.query;
    // 处理参数
    const conditionObj = queryDetection(JSON.parse(condition));

    const datas = await ctx.model.Orders.aggregate([
      { $match: conditionObj },
      {
        $skip: parseInt(pageNum) - 1,
      },
      {
        $limit: parseInt(pageSize),
      },
    ]);
    const returnDatas = {
      cood: 200,
      status: true,
      datas,
    };
    return returnDatas;
  }
  //   新增订单接口
  public async addOrders() {
    const { ctx } = this;
    const { orderPro, orderMoney, status } = ctx.request.body;
    const date = new Date();
    const OrdersId = md5.hex(`${date.getTime()}`);

    const isNull = await ctx.model.Orders.find({ OrdersId });
    // 容错处理
    if (isNull.length > 0) {
      return {
        code: 500,
        status: false,
        msg: '订单重复',
      };
    }
    const datas = await ctx.model.Orders.create({
      OrdersId,
      orderPro,
      orderMoney,
      status,
    });

    let returnDatas;
    if (datas?.OrdersId) {
      returnDatas = {
        cood: 200,
        status: true,
        msg: '新增成功',
      };
    } else {
      returnDatas = {
        cood: 200,
        status: false,
        msg: '新增失败',
      };
    }
    return returnDatas;
  }
  //  修改订单接口
  public async updateOrders() {
    const { ctx } = this;
    const { OrdersId, condition } = ctx.request.body;
    // 处理参数
    const conditionObj = queryDetection(condition);

    const datas = await ctx.model.Orders.find({ OrdersId }).updateOne(
      conditionObj
    );

    let returnDatas;
    if (datas) {
      returnDatas = {
        cood: 200,
        status: true,
        msg: '修改成功',
      };
    } else {
      returnDatas = {
        cood: 200,
        status: false,
        msg: '修改失败',
      };
    }
    return returnDatas;
  }
  //  删除订单接口
  public async deleteOrders() {
    const { ctx } = this;
    const { OrdersId } = ctx.request.body;
    // 处理参数
    // const conditionObj = queryDetection(condition);

    const datas = await ctx.model.Orders.deleteOne({ OrdersId });

    let returnDatas;
    if (datas) {
      returnDatas = {
        cood: 200,
        status: true,
        msg: '删除成功',
      };
    } else {
      returnDatas = {
        cood: 200,
        status: false,
        msg: '删除失败',
      };
    }
    return returnDatas;
  }
}
