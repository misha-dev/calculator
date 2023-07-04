export const isHandledError = (value: any): value is Error => {
  return value.hasOwnProperty('message');
};
