document.addEventListener('myevent', function(e) {
	console.log(`target: [${e.target.id}] path: ${e.composedPath()}`);
});

window.addEventListener("load", () => {
	//const shadowHost = document.getElementById("host");
	//const shadowRoot = shadowHost.shadowRoot;
	//shadowRoot.innerHTML = `<style> p { color: red; } </style><p id="shadow-p">Привет, Shadow DOM!</p>`;
	//console.log(`host: ${shadowHost}  shadowRoot: ${shadowRoot}`);

	const component = document.querySelector('sample-component');
	const shadow = component.shadowRoot;


	if(shadow) {
		
		const inside = shadow.querySelector('#inside');
		console.log(`component: ${component}  inside: ${inside}`);

		inside.innerHTML += ' has been hijacked';
	
		const event = new CustomEvent("myevent", {
			bubbles: true,
			composed: true,
			detail: {
				message: "hi",
				number: 5,
			},
		});
		component.dispatchEvent(event);
		//setTimeout(function () {
      	//	inside.dispatchEvent(event);
    	//}, 400);

	} else {
		const comp = document.querySelector('.inside-component');
		//console.log(`!!! component.shadowRoot is null comp: ${comp}`);
	}



})


class SampleComponent extends HTMLElement {
	connectedCallback() {
		const root = this.attachShadow({mode: 'open'});
		root.innerHTML =
			`<div class="inside-component" id="inside">My Component</div>
			 <style>
				:host {
					all: initial;
					color: var(--text-color);
				}
			 </style>`;
	}
}

if (!customElements.get('sample-component')) {
	customElements.define('sample-component', SampleComponent);
}

// Sneakily overriding the attachShadow method to give access to the component
SampleComponent.prototype.attachShadow = function(mode) { 
	return this; 
};