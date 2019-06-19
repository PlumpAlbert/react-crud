export default Array(15)
  .fill(0)
  .map((v, i) => ({
    title: `Item #${i + 1}`,
    info: `Some great description of this item`
  }));
