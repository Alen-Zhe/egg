import { Service } from 'egg';
import queryDetection from '../common/queryDetection';
import md5 = require('js-md5');

export default class Evaluate extends Service {
  // 获取订单列表详情
  public async getEvaluate() {
    const { ctx } = this;

    const { pageNum, pageSize, condition } = ctx.request.query;
    // 处理参数
    const conditionObj = queryDetection(JSON.parse(condition));

    const datas = await ctx.model.evaluate.aggregate([
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
  public async addEvaluate() {
    const { ctx } = this;
    const { evaluateContent, evaluateImg, orderId } = ctx.request.body;
    const date = new Date();
    const evaluateId = md5.hex(`${date.getTime()}`);

    const isNull = await ctx.model.evaluate.find({ evaluateId });
    // 容错处理
    if (isNull.length > 0) {
      return {
        code: 500,
        status: false,
        msg: '创建重复',
      };
    }
    const datas = await ctx.model.evaluate.create({
      evaluateId,
      evaluateContent,
      evaluateImg,
      orderId,
    });

    let returnDatas;
    if (datas?.evaluateId) {
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
  public async updateEvaluate() {
    const { ctx } = this;
    const { evaluateId, condition } = ctx.request.body;
    // 处理参数
    const conditionObj = queryDetection(condition);
    console.log(conditionObj);

    const datas = await ctx.model.evaluate
      .find({ evaluateId })
      .updateOne(conditionObj);

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
  public async deleteEvaluate() {
    const { ctx } = this;
    const { evaluateId } = ctx.request.body;
    // 处理参数
    // const conditionObj = queryDetection(condition);

    const datas = await ctx.model.evaluate.deleteOne({ evaluateId });

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
