import { Service } from 'egg';

/**
 * Test Service
 */
export default class Test extends Service {
  public async sayHi() {
    const { ctx } = this;
    const a = await ctx.model.Index.find({});
    return `hi, ${a}`;
  }
}
