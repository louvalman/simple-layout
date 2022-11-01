const createtopNav = () => {
    let nav = document.querySelector('#navbar');

    nav.innerHTML = `
    <div class="navbar-brand">
    <span onclick="toggleNav()">
        <i class="iconoir-menu" id="sidetoggle"></i>
    </span>
    <a id="logotop" href="/">
        <h1>Simple Layout</h1>
    </a>
</div>
<div class="nav-list" id="navlist">
<ul>
    <div class="nav-listcontainer remove-mobile">
        <li class="nav-listitems remove-mobile"><a href="#">Overview</a></li>
        <li class="nav-listitems dropdown remove-mobile"><a href="#">Products</a>
            <div class="dropdown-content">
                <a href="#">Art</a>
                <a href="#">Design</a>
            </div>
        </li>
        <li class="nav-listitems dropdown remove-mobile"><a href="#">Docs</a>
            <div class="dropdown-content">
                <a href="/#faq">Information</a>
                <a href="#">Github</a>
                <a href="/#faq">FAQ</a>
            </div>
        </li>
    </div>
</ul>
<button class="wallet-container btn draw-border" id="connect-open">
<span class="wallet-container-inline" data-tooltip="Network status: Good"
    data-tooltip-location="bottom">
    <?xml version="1.0" encoding="UTF-8"?><svg width="11px" height="11px" stroke-width="4" stroke="#E33232" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" viewBox="0 0 24 24" fill="red" xmlns="http://www.w3.org/2000/svg" color="#000000"><path d="M12 22c5.523 0 10-4.477 10-10S17.523 2 12 2 2 6.477 2 12s4.477 10 10 10z"></path></svg>
</span>
<text>Connect</text>
</button>
</div>
    `;
}

createtopNav();