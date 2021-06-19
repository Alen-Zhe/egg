import { Service } from 'egg';
import md5 = require('js-md5');

/**
 * Test Service
 */
export default class Test extends Service {
  // 登录接口
  public async login() {
    const { ctx } = this;
    const username = ctx.request.body.username;
    const password = ctx.request.body.password;
    const datas = await ctx.model.Index.find({ username, password });
    let returnDatas;
    if (datas.length > 0) {
      returnDatas = {
        cood: 200,
        status: true,
        datas,
      };
    } else {
      returnDatas = {
        cood: 200,
        status: false,
        datas,
      };
    }
    return returnDatas;
  }
  // 注册接口
  public async register() {
    const { ctx } = this;
    const { username, password, nikename } = ctx.request.body;
    const date = new Date();
    const userId = md5.hex(`${date.getTime()}`);

    console.log(nikename);
    const isNull = await ctx.model.Index.find({ username });
    // 容错处理
    if (isNull.length > 0) {
      return {
        code: 500,
        status: false,
        msg: '用户名重复',
      };
    }
    const datas = await ctx.model.Index.create({
      username,
      password,
      nikename,
      userId,
    });

    let returnDatas;
    if (datas?.username) {
      returnDatas = {
        cood: 200,
        status: true,
        msg: '创建成功',
      };
    } else {
      returnDatas = {
        cood: 200,
        status: false,
        msg: '创建失败',
      };
    }
    return returnDatas;
  }
}
