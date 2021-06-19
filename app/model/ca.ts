module.exports = (app) => {
  const mongoose = app.mongoose;
  const Schema = mongoose.Schema;
  const categorySchema = new Schema({
    categoryId: {
      type: String,
      // 创建唯一索引
      unique: true,
    },
    categoryName: {
      type: String,
      // 创建唯一索引
      unique: true,
    },
  });
  // 参数一： 模型被绑定到什么名字上， 参数二： 绑定的模型数据， 参数三： 对应的数据库表名
  return mongoose.model('CategoryModel', categorySchema, 'category');
  // 这里有个坑，外部在使用Model时，this.ctx.model.XXXX 此处的XXXX指的是大写开头的文件名，例如model/test 就是this.ctx.model.Test，而不是return中指定的那个模型名（这个设计简直日了*）
};
