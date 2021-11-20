export const generateNextId = (() => {
  let num = 4;
  return () => num++;
})();