window.addEventListener("load", () => {
	//const shadowHost = document.getElementById("host");
	//const shadowRoot = shadowHost.shadowRoot;
	//shadowRoot.innerHTML = `<style> p { color: red; } </style><p id="shadow-p">Привет, Shadow DOM!</p>`;
	//console.log(`host: ${shadowHost}  shadowRoot: ${shadowRoot}`);

	const component = document.querySelector('sample-component');
	const shadow = component.shadowRoot;
	console.log(`component: ${component}  shadow: ${shadow}`);

	if(shadow) {
		shadow.querySelector('.inside-component').innerHTML += ' has been hijacked';
	
	} else {
		const comp = document.querySelector('.inside-component');
		console.log(`!!! component.shadowRoot is null comp: ${comp}`);
	}

})


class SampleComponent extends HTMLElement {
	connectedCallback() {
		const root = this.attachShadow({mode: 'closed'});
		root.innerHTML =
			`<div class="inside-component">My Component</div>
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