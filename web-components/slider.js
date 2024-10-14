class Slider extends HTMLElement {
  connectedCallback() {
    this.innerHTML = '<div class="bg-overlay"></div><div class="thumb"></div>';
  }
}

customElements.define("wcia-slider", Slider);
