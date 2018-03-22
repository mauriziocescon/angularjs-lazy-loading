/**
 * UI Utilities
 */
export interface IUIUtilitiesService {
  /**
   * Get the currency symbol
   * from the ISO code
   *
   * @param currency
   */
  getCurrencySymbol(currency: string): string;

  /**
   * Display a modal alert
   *
   * @param title title of modal
   * @param message body of the modal
   * @param buttonLabel label of the button
   */
  modalAlert(title: string, message: string, buttonLabel: string): void;

  /**
   * Display a confirm alert
   *
   * @param title title of modal
   * @param message body of the modal
   * @param yesButtonLabel label of the affermative button
   * @param noButtonLabel label of the negative button
   * @param callback function executed when the user click on a button with the result
   */
  modalConfirmer(title: string, message: string, yesButtonLabel: string, noButtonLabel: string, callback: (result: boolean) => void): void;

  /**
   * Display a toaster
   *
   * @param message body of the toster
   */
  toast(message: string): void;
}
