import { Service } from 'egg';
import queryDetection from '../common/queryDetection';
import md5 = require('js-md5');

export default class Products extends Service {
  // 获取商品列表详情
  public async getPros() {
    const { ctx } = this;

    const { pageNum, pageSize } = ctx.request.query;
    // 处理参数
    // const conditionObj = queryDetection(JSON.parse(condition));
    console.log(pageSize);

    const datas = await ctx.model.Products.aggregate([
      // { $match: conditionObj },

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
  //   新增商品接口
  public async addPros() {
    const { ctx } = this;
    const {
      productsNum,
      productsDesc,
      categoryId,
      bannerImg,
      norms,
      categoryTag,
      productsName,
      price,
    } = ctx.request.body;
    const date = new Date();
    const productsId = md5.hex(`${date.getTime()}`);

    const isNull = await ctx.model.Products.find({ productsName });
    // 容错处理
    if (isNull.length > 0) {
      return {
        code: 500,
        status: false,
        msg: '商品重复',
      };
    }
    const datas = await ctx.model.Products.create({
      productsId,
      productsNum,
      productsDesc,
      categoryId,
      bannerImg,
      norms,
      categoryTag,
      productsName,
      price,
    });

    let returnDatas;
    if (datas?.productsName) {
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
  //  修改商品接口
  public async updatePros() {
    const { ctx } = this;
    const { productsId, condition } = ctx.request.body;
    // 处理参数
    const conditionObj = queryDetection(condition);

    const datas = await ctx.model.Products.find({ productsId }).updateOne(
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
  //  删除商品接口
  public async deletePros() {
    const { ctx } = this;
    const { productsId } = ctx.request.body;
    // 处理参数
    // const conditionObj = queryDetection(condition);

    const datas = await ctx.model.Products.deleteOne({ productsId });

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
