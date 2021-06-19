import { Service } from 'egg';
import queryDetection from '../common/queryDetection';
import md5 = require('js-md5');

export default class Category extends Service {
  // 获取订单列表详情
  public async getCategory() {
    const { ctx } = this;

    const { pageNum, pageSize, condition } = ctx.request.query;
    // 处理参数
    const conditionObj = queryDetection(JSON.parse(condition));

    const datas = await ctx.model.Ca.aggregate([
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
  public async addCategory() {
    const { ctx } = this;
    const { categoryName } = ctx.request.body;
    const date = new Date();
    const categoryId = md5.hex(`${date.getTime()}`);

    const isNull = await ctx.model.Ca.find({ categoryId });
    // 容错处理
    if (isNull.length > 0) {
      return {
        code: 500,
        status: false,
        msg: '创建重复',
      };
    }
    const datas = await ctx.model.Ca.create({
      categoryId,
      categoryName,
    });

    let returnDatas;
    if (datas?.categoryId) {
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
  public async updateCategory() {
    const { ctx } = this;
    const { categoryId, condition } = ctx.request.body;
    // 处理参数
    const conditionObj = queryDetection(condition);
    console.log(conditionObj);

    const datas = await ctx.model.Ca.find({ categoryId }).updateOne(
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
  public async deleteCategory() {
    const { ctx } = this;
    const { categoryId } = ctx.request.body;
    // 处理参数
    // const conditionObj = queryDetection(condition);

    const datas = await ctx.model.Ca.deleteOne({ categoryId });

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
