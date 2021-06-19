module.exports = (app) => {
  const mongoose = app.mongoose;
  const Schema = mongoose.Schema;
  const ProductsSchema = new Schema({
    productsId: {
      type: String,
      // 创建唯一索引
      unique: true,
    },
    productsName: {
      type: String,
      // 创建唯一索引
    },
    price: {
      type: Number,
    },
    productsNum: {
      type: Number,
    },
    productsDesc: {
      type: String,
    },
    bannerImg: {
      type: Array,
    },
    norms: {
      type: Array,
    },
    categoryTag: {
      type: Array,
    },
    categoryId: {
      type: String,
    },
  });

  // 参数一： 模型被绑定到什么名字上， 参数二： 绑定的模型数据， 参数三： 对应的数据库表名
  return mongoose.model('ProductsModel', ProductsSchema, 'products');
  // 这里有个坑，外部在使用Model时，this.ctx.model.XXXX 此处的XXXX指的是大写开头的文件名，例如model/test 就是this.ctx.model.Test，而不是return中指定的那个模型名（这个设计简直日了*）
};
