export function joinUrl(...args) {
  if (args.length === 2 && args[1] === '/') return args[0];
  return `${args
    .map((item, index) => {
      const result = item.toString().endsWith('/')
        ? item.slice(0, item.length - 1)
        : item;
      return result.toString().startsWith('/') && index > 0
        ? result.slice(1)
        : result;
    })
    .join('/')}`;
}
