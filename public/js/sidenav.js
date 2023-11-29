const createsideNav = () => {
  let sidenavid = document.querySelector('.sidenavclass');

  sidenavid.innerHTML = `
    
    <div class="sidebartop">
        <span onclick="toggleNav()" style="visibility:hidden;margin-right:auto;">
            <i class="iconoir-xmark"></i>
        </span>
        <a href="/">
        <h1 id="logotopside">Simple Layout</h1>
        </a>
        <span onclick="toggleNav()" style="margin-left:auto;color:var(--text-color);">
            <i id="closesidenav" class="iconoir-xmark"></i>
        </span>
    </div>
    <div id="sidenavcontent">
        <div class="sidebarmain">
        <div class="sidebarmenu">
            <div class="sidebarmenu-items-mobile">
                <div class="sidebarmenu-items-grid1">
                <a class="sidebarmenu-title" href="#">Products</a>
                <a class="sidebarmenu-item" href="#">Art</a>
                <a class="sidebarmenu-item" href="#">Design</a>
                </div>
                <div class="sidebarmenu-items-grid2">
                <a class="sidebarmenu-title" href="#">Docs</a>
                <a class="sidebarmenu-item" href="/faq">Information</a>
                <a class="sidebarmenu-item" href="https://www.github.com/louvalman">Github</a>
                <a class="sidebarmenu-item" href="/faq">FAQ</a>
                </div>
            </div>
            <div class="line-container-2" style="visibility: hidden;">
                <div class="line-3"></div>
            </div>
                <div class="sidebarmenu-items">
                    <a class="sidebarmenu-title remove-desktop" href="account">Account</a>
                    <a href="login" class="sidebar-login"><i class="iconoir-log-in"></i>Login</a>
                    <a href="signup" class="sidebar-signup"><i class="iconoir-user-plus"></i>Sign up</a>
                    <a href="favorites" class="sidebar-fav"><i class="iconoir-heart"></i>Favorites</a>
                </div>
                <div class="toggle-container">
            <span class="theme-btn light" onclick="setTheme('light')" title="Light mode">
            <i class="iconoir-light-bulb-on"></i>  
            <span>
            Lighter
            </span>      
            </span>
            <span class="theme-btn dark" onclick="setTheme('dark')" title="Dark mode">
            <i class="iconoir-light-bulb-off"></i> 
            <span>
            Dimmer
            </span>
            </span>
            </div>
            </div>
        </div>
    </div>
    <div class="sidebarbottom">
        <button class="primary-btn btn draw-border">Feedback</button>
        <p>louvalman © 2022</p>
        <div class="socials">
        <a href="#"><i class="fa fa-twitter-square" id="twitter" aria-hidden="false"></i></i></a>
        <a href="#"><i class="fa fa-instagram" id="insta" aria-hidden="false"></i></a>
        <a href="#"><i class="fa fa-facebook-square" id="facebook" aria-hidden="false"></i></a>
        <a href="#"><i class="fa fa-twitch" id="twitch" aria-hidden="false"></i></a>
        </div>
    </div>
    </div>
    </div>
    `;
};

createsideNav();
