export const deepMerge = (target: any, source: any): object => {
  for (const key of Object.getOwnPropertyNames(source)) {
    if (!(key in target) || typeof target[key] !== 'object' || typeof source[key] !== 'object') {
      target[key] = source[key];
    } else if (target[key] instanceof Array && source[key] instanceof Array) {
      deepMergeArray(target[key], source[key]);
    } else {
      deepMerge(target[key], source[key]);
    }
  }
  return target;
};

export const deepMergeArray = (target: any[], source: any[]): object[] => {
  for (let i = 0; i < source.length; i++) {
    if (target.length > i && typeof target[i] === 'object' && typeof source[i] === 'object') {
      if (target[i] instanceof Array && source[i] instanceof Array) {
        deepMergeArray(target[i], source[i]);
      } else {
        deepMerge(target[i], source[i]);
      }
    } else {
      target.push(source[i]);
    }
  }
  return target;
};

export const deepCopy = (input: any): any => {
  if (!(input instanceof Object)) return input;
  if (input instanceof Array) return deepCopyArray(input);
  const out: any = {};
  for (const name of Object.getOwnPropertyNames(input)) {
    const data = input[name];
    if (data instanceof Array) {
      out[name] = deepCopyArray(data);
    } else if (data instanceof Object) {
      out[name] = deepCopy(data);
    } else out[name] = data;
  }
  return out;
};

export const deepCopyArray = (input: Array<any>): Array<any> => {
  const out: any[] = [];
  for (let i = 0; i < input.length; i++) {
    out[i] = deepCopy(input[i]);
  }
  return out;
};
