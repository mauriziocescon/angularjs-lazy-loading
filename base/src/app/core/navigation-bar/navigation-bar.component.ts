import * as ng from "angular";
import template from "./navigation-bar.component.html";
import "./navigation-bar.component.scss";

export class NavigationBarController {
	private location: ng.ILocationService;

	public name: string;
	public currentNavItem: string;

	static $inject = ["$location"];

	constructor($location: ng.ILocationService) {
		this.location = $location;

		this.name = "NavigationBarComponent";
	}

	public $onInit(): void {
		this.currentNavItem = "todos";
	}

	public goToTodoList(): void {
		this.location.path("/todo-list");
	}

	public goToContactList(): void {
		this.location.path("/contact-list");
	}

	public $onDestroy() {

	}
}

export const NavigationBarComponent: ng.IComponentOptions = {
	bindings: {},
	controller: NavigationBarController,
	template: () => {
		return template;
	}
};