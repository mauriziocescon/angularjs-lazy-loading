import { Enum } from './enum';

/**
 * Delay the execution of a function.
 *
 * Every new call to execute a func,
 * invalidates potential previous one
 * waiting to be executed
 */
export interface IDelayExecutionService {
  /**
   * Save a reference to func using key and
   * set a timeout to the execution of func
   * after delay. Potential timeout associated
   * to the same key is canceled
   *
   * @param func
   * @param key
   * @param delay
   */
  execute(func: Function, key: Enum, delay?: number): void; // tslint:disable-line:ban-types
  /**
   * Cancel the execution of
   * func with key
   *
   * @param key
   */
  cancel(key: Enum): void;
}
