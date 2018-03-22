import { Logger } from '../../shared/shared.module';

import { IAppConstantsService } from './app-constants.service';
import { IUIUtilitiesConstants } from './ui-utilities.constants';
import { IUtilitiesService } from './utilities.service';

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

export class UIUtilitiesService implements IUIUtilitiesService {
  public static $inject = ['$mdDialog', '$mdToast', 'AppConstantsService', 'UtilitiesService', 'UIUtilitiesConstants'];

  constructor(protected mdDialog: ng.material.IDialogService,
              protected mdToast: ng.material.IToastService,
              protected appConstantsService: IAppConstantsService,
              protected utilitiesService: IUtilitiesService,
              protected uiUtilitiesConstants: IUIUtilitiesConstants) {
  }

  public getCurrencySymbol(currency: string): string {
    switch (currency) {
      case this.uiUtilitiesConstants.CurrencyCode.USD.toString(): {
        return this.uiUtilitiesConstants.CurrencyChar.USS.toString();
      }
      case this.uiUtilitiesConstants.CurrencyCode.GBP.toString(): {
        return this.uiUtilitiesConstants.CurrencyChar.GBP.toString();
      }
      case this.uiUtilitiesConstants.CurrencyCode.EUR.toString(): {
        return this.uiUtilitiesConstants.CurrencyChar.EUR.toString();
      }
      default: {
        return currency.toString();
      }
    }
  }

  public modalAlert(title: string, message: string, buttonLabel: string): void {
    try {
      // Appending dialog to document.body to cover sidenav in docs app
      // Modal dialogs should fully cover application
      // to prevent interaction outside of dialog
      this.mdDialog.show(
        this.mdDialog.alert()
          .clickOutsideToClose(true)
          .title(title)
          .textContent(message)
          .ariaLabel('Alert dialog')
          .ok(buttonLabel),
      );
    } catch (e) {
      Logger.exception(this, e);
    }
  }

  public modalConfirmer(title: string, message: string, yesButtonLabel: string, noButtonLabel: string, callback: (result: boolean) => void): void {
    try {
      const confirm = this.mdDialog.confirm()
        .title(title)
        .textContent(message)
        .ariaLabel('Modal confirmer')
        .ok(yesButtonLabel)
        .cancel(noButtonLabel);

      this.mdDialog.show(confirm)
        .then(() => {
          callback(true);
        }, () => {
          callback(false);
        });
    } catch (e) {
      Logger.exception(this, e);
    }
  }

  public toast(message: string): void {
    try {
      const toast = this.mdToast.simple()
        .textContent(message)
        .position('start');

      this.mdToast.show(toast);
    } catch (e) {
      Logger.exception(this, e);
    }
  }
}
