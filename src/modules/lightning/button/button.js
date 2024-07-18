import { LightningElement, api } from "lwc";

export default class LightningButton extends LightningElement {
	@api label = "Button";
	@api title = "";
	@api variant = "neutral";
	get classNames() {
		return `slds-button slds-button_${this.variant}`;
	}
}
