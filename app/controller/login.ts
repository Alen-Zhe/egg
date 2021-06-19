import { Controller } from 'egg';

export default class HomeController extends Controller {
  public async login() {
    const { ctx } = this;
    ctx.body = await ctx.service.login.login();
  }
  public async register() {
    const { ctx } = this;
    ctx.body = await ctx.service.login.register();
  }
}
