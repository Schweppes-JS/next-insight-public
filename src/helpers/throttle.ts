import { AnyArrayType, AnyFunctionType } from "@/types/generalTypes";

export function throttle<T extends AnyFunctionType>(mainFunction: T, delay = 200) {
  let isThrottled = false;
  let savedArgs: AnyArrayType | null;

  const fnWrapper = (...args: AnyArrayType) => {
    if (isThrottled) savedArgs = args;
    else {
      mainFunction(...args);
      isThrottled = true;
      setTimeout(() => {
        isThrottled = false;
        if (savedArgs) {
          fnWrapper(savedArgs);
          savedArgs = null;
        }
      }, delay);
    }
  };

  return fnWrapper;
}
