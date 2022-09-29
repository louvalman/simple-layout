const createFooter = () => {
    let footer = document.querySelector('.footerclass');

    footer.innerHTML = `
    <div class="footer-main">
    <div class="footer-section">
        <div class="footer-content">
            <h4>Ressources</h4>
            <li><a href="#" class="footer-link">link</a></li>
            <li><a href="#" class="footer-link">link</a></li>
            <li><a href="#" class="footer-link">link</a></li>
            <li><a href="#" class="footer-link">link</a></li>
        </div>
    </div>
    <div class="footer-section">
        <div class="footer-content">
            <h4>Legal</h4>
            <li><a href="#" class="footer-link">link</a></li>
            <li><a href="#" class="footer-link">link</a></li>
            <li><a href="#" class="footer-link">link</a></li>
            <li><a href="#" class="footer-link">link</a></li>
        </div>
    </div>
    <div class="footer-section">
        <div class="footer-content">
            <h4>Contact us</h4>
            <div class="socials">
                <a href="#"><i class="iconoir-twitter"></i></a>
                <a href="#"><i class="iconoir-instagram"></i></a>
                <a href="#"><i class="iconoir-facebook-squared"></i></a>
                <a href="#"><i class="iconoir-discord"></i></a>
                <p class="copyright">© louvalman 2022</p>
            </div>
        </div>
    </div>
</div>
    `;
}

createFooter();