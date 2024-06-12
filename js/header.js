class MyHeader extends HTMLElement {
  connectedCallback() {
    this.innerHTML = `
        <header class="bg-transparent z-50">
        <nav class="bg-transparent w-screen">
          <div
            class="container mx-auto px-6 py-4 md:flex md:items-center md:justify-between"
          >
            <div class="flex items-center justify-between">
              <div>
                <a class="flex items-center gap-x-1 cursor-pointer" href="#">
                  <img
                    class="h-12 w-12 rounded-full"
                    src="./assets/TUKANO_DIGITAL_SO.png"
                    alt="logo-tucano-digital"
                  />
                  <span class="flex-col">
                    <p class="uppercase text-2xl">tukano</p>
                    <p class="uppercase text-xs text-left pl-1">digital</p>
                  </span>
                </a>
              </div>

              <!-- Mobile menu button -->
              <button
                class="hamburger hamburger--collapse"
                type="button"
                id="btn-mobile"
              >
                <span class="hamburger-box">
                  <span class="hamburger-inner"></span>
                </span>
              </button>
            </div>

            <!-- Mobile Menu open: 'block', Menu closed: 'hidden' -->

            <nav class="hidden items-center pt-8 md:pt-0 md:flex" id="menu-spande">
              <ul class="flex flex-col md:mx-6 md:flex-row menu-ativo">

                <li>
                  <a class="duration-200 transform my-1 text-sm font-medium text-gray-900 hover:text-red-500 md:mx-4 md:my-0 uppercase cursor-pointer transition ease-linear">home</a>
                </li>
            
                <li>
                  <a class="duration-200 transform my-1 text-sm font-medium text-gray-900 hover:text-red-500 md:mx-4 md:my-0 uppercase cursor-pointer transition ease-linear">sobre nós</a>
                </li>

                <li>
                  <a class="duration-200 transform my-1 text-sm font-medium text-gray-900 hover:text-red-500 md:mx-4 md:my-0 uppercase cursor-pointer transition ease-linear">serviços</a>
                </li>

                <li>
                  <a class="duration-200 transform my-1 text-sm font-medium text-gray-900 hover:text-red-500 md:mx-4 md:my-0 uppercase cursor-pointer transition ease-linear">contato</a>
                </li>
              </ul>
            </nav>
          </div>
        </nav>
      </header>
        `;
  }
}

customElements.define("my-header", MyHeader);
