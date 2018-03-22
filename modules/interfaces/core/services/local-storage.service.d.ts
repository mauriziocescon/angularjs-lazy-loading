import { Enum } from './enum';

/**
 * Manage data in
 * local storage for the
 * application
 */
export interface ILocalStorageService {
  /**
   * Get data for key
   *
   * @param key
   */
  getData<T>(key: Enum): T | undefined;

  /**
   * Set fata for key
   *
   * @param key
   * @param data
   */
  setData(key: Enum, data: any): void;

  /**
   * Remove data for key
   *
   * @param key
   */
  removeData(key: Enum): void;

  /**
   * Remove all data related to
   * the application in local storage
   */
  removeAllData(): void;
}
