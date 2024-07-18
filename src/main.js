import * as lwc from 'lwc';

/**
 * @import App from "./modules/x/app/app.js";
 * @type {App}
 */
import App from 'x/app';

if (process.env.NODE_ENV === 'development') {
	App.prototype.renderedCallback = () => {
		performance.mark('renderedCallback');
		App.renders = App.renders || 0;
		App.renders++;
	};
}

const elm = lwc.createElement('x-app', { is: App });

document.body.appendChild(elm);
