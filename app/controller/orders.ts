import { Controller } from 'egg';

export default class HomeController extends Controller {
  public async getOrders() {
    const { ctx } = this;
    ctx.body = await ctx.service.orders.getOrders();
  }
  public async addOrders() {
    const { ctx } = this;
    ctx.body = await ctx.service.orders.addOrders();
  }
  public async updateOrders() {
    const { ctx } = this;
    ctx.body = await ctx.service.orders.updateOrders();
  }
  public async deleteOrders() {
    const { ctx } = this;
    ctx.body = await ctx.service.orders.deleteOrders();
  }
}
