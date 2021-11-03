import { helper } from '@ember/component/helper';

function useControl([scope, fn]) {
  let args = arguments[0].slice(2);
  let res = fn.apply(scope, args);
  return res;
}

export default helper(useControl);

