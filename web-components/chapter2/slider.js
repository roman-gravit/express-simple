class Slider extends HTMLElement {
  connectedCallback() {
    this.innerHTML = '<div class="bg-overlay"></div><div class="thumb"></div>';

    document.addEventListener("mousemove", (e) => this.eventHandler(e));
    document.addEventListener("mouseup", (e) => this.eventHandler(e));
    this.addEventListener("mousedown", (e) => this.eventHandler(e));

    this.refreshSlider(this.value);
    this.setColor(this.backgroundcolor);
  }

  static get observedAttributes() {
    return ["value", "backgroundcolor"];
  }

  attributeChangedCallback(name, oldVal, newValue) {
    switch (name) {
      case "value":
        this.refreshSlider(newValue);
        break;

      case "backgroundcolor":
        this.setColor(newValue);
        break;
    }
  }

  set value(val) {
    this.setAttribute("value", val);
  }

  get value() {
    return this.getAttribute("value");
  }

  set backgroundcolor(val) {
    this.setAttribute("backgroundcolor", val);
  }

  get backgroundcolor() {
    return this.getAttribute("backgroundcolor");
  }

  setColor(color) {
    if (this.querySelector(".bg-overlay")) {
      this.querySelector(
        ".bg-overlay"
      ).style.background = `linear-gradient(to right, ${color} 0%, ${color}00 100%)`;
    }
  }

  refreshSlider(value) {
    if (this.querySelector(".thumb")) {
      this.querySelector(".thumb").style.left =
        (value / 100) * this.offsetWidth -
        this.querySelector(".thumb").offsetWidth / 2 +
        "px";
    }
  }

  updateX(x) {
    let hPos = x - this.querySelector(".thumb").offsetWidth / 2;
    if (hPos > this.offsetWidth) {
      hPos = this.offsetWidth;
    }
    if (hPos < 0) {
      hPos = 0;
    }
    this.value = (hPos / this.offsetWidth) * 100;
  }

  eventHandler(e) {
    const bounds = this.getBoundingClientRect();
    const x = e.clientX - bounds.left;

    switch (e.type) {
      case "mousedown":
        this.isDragging = true;
        this.updateX(x);
        this.refreshSlider(this.value);
        break;

      case "mouseup":
        this.isDragging = false;
        break;

      case "mousemove":
        if (this.isDragging) {
          this.updateX(x);
          this.refreshSlider(this.value);
        }
        break;
    }
  }
}

customElements.define("wcia-slider", Slider);
