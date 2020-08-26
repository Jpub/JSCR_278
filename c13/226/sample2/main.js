start();

async function start() {
  await new Promise((resolve) => {
    setTimeout(() => {
      console.log('첫번째 Promise', new Date().toLocaleTimeString());
      resolve();
    }, 1000);
  });

  await new Promise((resolve) => {
    setTimeout(() => {
      console.log('두번째 Promise', new Date().toLocaleTimeString());
      resolve();
    }, 1000);
  });
}
