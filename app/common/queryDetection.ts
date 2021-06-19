interface ICondition {
  condition: {};
}
const queryDetection = (condition: ICondition) => {
  Object.keys(condition).forEach((key) => {
    if (!condition[key]) {
      delete condition[key];
    }
  });
  return condition;
};
export default queryDetection;
