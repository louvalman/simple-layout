const createsideNav = () => {
    let sidenavid = document.querySelector('.sidenavclass');

    sidenavid.innerHTML = `
    <div id="sidenavcontent">
    <div class="sidebartop">
        <span onclick="toggleNav()" style="visibility:hidden;margin-right:auto;">
            <i class="iconoir-cancel"></i>
        </span>
        <a href="/">
        <h1 id="logotopside">Simple Layout</h1>
        </a>
        <span onclick="toggleNav()" style="margin-left:auto;color:var(--text-color);">
            <i id="closesidenav" class="iconoir-cancel"></i>
        </span>
    </div>
    <div class="sidebarmain">
        <div class="sidebarmenu">
            <div class="sidebarmenu-items">
                <a href="login"><i class="iconoir-log-in"></i>Login</a>
                <a href="signup"><i class="iconoir-add-circled-outline"></i>Sign up</a>
                <a href="account"><i class="iconoir-profile-circled"></i>Account</a>
                <a href="favorites"><i class="iconoir-heart"></i>Favorites</a>
            </div>
            <div class="toggle-container">
            
            <span class="theme-btn light" onclick="setTheme('light')" title="Light mode">
            <i class="iconoir-light-bulb-on"></i>  
            <span>
            Light mode
            </span>      
            </span>
            <span class="theme-btn dark" onclick="setTheme('dark')" title="Dark mode">
            <i class="iconoir-light-bulb-off"></i> 
            <span>
            Dark mode
            </span>
            </span>
            </div>
        </div>
        </div>
    <div class="sidebarbottom">
        <button class="primary-btn btn draw-border">Explore other layouts</button>
        <div class="socials">
        <a href="#"><i class="fa fa-twitter-square" id="twitter" aria-hidden="true"></i></i></a>
        <a href="#"><i class="fa fa-instagram" id="insta" aria-hidden="true"></i></a>
        <a href="#"><i class="fa fa-facebook-square" id="facebook" aria-hidden="true"></i></a>
        <a href="#"><i class="fa fa-twitch" id="twitch" aria-hidden="true"></i></a>
        </div>
    </div>
    </div>
    `;
}

createsideNav();