import { Controller } from 'egg';

export default class HomeController extends Controller {
  public async getCategory() {
    const { ctx } = this;
    ctx.body = await ctx.service.category.getCategory();
  }
  public async addCategory() {
    const { ctx } = this;
    ctx.body = await ctx.service.category.addCategory();
  }
  public async updateCategory() {
    const { ctx } = this;
    ctx.body = await ctx.service.category.updateCategory();
  }
  public async deleteCategory() {
    const { ctx } = this;
    ctx.body = await ctx.service.category.deleteCategory();
  }
}
