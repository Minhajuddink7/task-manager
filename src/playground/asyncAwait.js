const add = (a, b) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (a < 0 || b < 0) {
        return reject("Numbers should be non-negative");
      }
      resolve(a + b);
    }, 1000);
  });
};

const doWork = async () => {
  //   throw new Error("Something went wrong!");
  //   return "Minhaj";
  const sum1 = await add(5, -4);
  const sum2 = await add(sum1, 10);
  return sum2;
};

doWork()
  .then(sum => console.log(sum))
  .catch(e => console.log(e));
