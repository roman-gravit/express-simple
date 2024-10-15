window.addEventListener("load", () => {
	const component = document.querySelector('sample-component');
	const shadow = component.shadowRoot;
	//console.log(`1 component: ${component}  shadow: ${shadow}`);

	if(shadow) {
		shadow.querySelector('.inside-component').innerHTML += ' has been hijacked';
	
	} else {
		const comp = document.querySelector('.inside-component');
		//console.log(`!!! 1 component.shadowRoot is null comp: ${comp}`);
	}

})
