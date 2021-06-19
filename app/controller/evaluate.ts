import { Controller } from 'egg';

export default class HomeController extends Controller {
  public async getEvaluate() {
    const { ctx } = this;
    ctx.body = await ctx.service.evaluate.getEvaluate();
  }
  public async addEvaluate() {
    const { ctx } = this;
    ctx.body = await ctx.service.evaluate.addEvaluate();
  }
  public async updateEvaluate() {
    const { ctx } = this;
    ctx.body = await ctx.service.evaluate.updateEvaluate();
  }
  public async deleteEvaluate() {
    const { ctx } = this;
    ctx.body = await ctx.service.evaluate.deleteEvaluate();
  }
}
