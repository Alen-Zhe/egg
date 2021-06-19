import { Controller } from 'egg';

export default class HomeController extends Controller {
  public async getPros() {
    const { ctx } = this;
    ctx.body = await ctx.service.products.getPros();
  }
  public async addPros() {
    const { ctx } = this;
    ctx.body = await ctx.service.products.addPros();
  }
  public async updatePros() {
    const { ctx } = this;
    ctx.body = await ctx.service.products.updatePros();
  }
  public async deletePros() {
    const { ctx } = this;
    ctx.body = await ctx.service.products.deletePros();
  }
}
