import domReady from '@wordpress/dom-ready';
import manifest from './../manifest.json';
import MicroModal from 'micromodal';

domReady(() => {
	const selector = `.${manifest.componentJsClass}`;
	const elements = document.querySelectorAll(selector);
	const body = document.getElementsByTagName('body')[0];

	// Append all modals at the bottom of body.
	[...elements].forEach((element) => {
		body.append(element);
	});

	// Initialize MicroModal.
	MicroModal.init({
		openTrigger: 'data-micromodal-trigger',
		closeTrigger: 'data-micromodal-close',
		openClass: 'is-open',
		disableScroll: true,
		awaitOpenAnimation: true,
		awaitCloseAnimation: true
	});
});
