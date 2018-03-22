/**
 * Manage the language set by the
 * user. When a new language is set,
 * the app gets reloaded
 */
export interface IAppLanguageService {
  /**
   * Setup the service: this method has
   * to be called as soon as the service
   * gets created
   */
  start(): void;

  /**
   * returns the language id selected by the user
   * or downloaded from the server
   */
  getLanguageId(): string;

  /**
   * Set the language id selected by the user
   *
   * @param languageId
   */
  setLanguageId(languageId: string): void;

  /**
   * return the entire list of supported languages
   */
  getSupportedLanguagesList(): string[];

  /**
   * return the default language Id
   */
  getDefaultLanguageId(): string;
}
