export async function delayer(time = 2000): Promise<void> {
  return new Promise(resolve => {
    setTimeout(() => {
      resolve();
    }, time);
  });
}
