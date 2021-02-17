export function getHappyError(source) {
  return (msg) => {
    throw new Error(`[${source}]: ${msg}`);
  };
}
