export default function MobileMenu() {
    return (
        <>
            <nav class="mobile-menu">
                <div class="logo">
                    <img class="logo__img" src="images/logo.svg" />
                    <span class="logo__stay">Stay</span>
                    <span class="logo__world">World</span>
                </div>
                <ul class="mobile-menu__main">
                    <li class="mobile-menu__item">
                        <a class="mobile-menu__link" href="#">
                        <span class="main-title">Our Service</span>
                        <span class="sub-title">サービスについて</span>
                        </a>
                    </li>
                    <li class="mobile-menu__item">
                        <a class="mobile-menu__link" href="#">
                        <span class="main-title">About Us</span>
                        <span class="sub-title">私たちについて</span>
                        </a>
                    </li>
                    <li class="mobile-menu__item">
                        <a class="mobile-menu__link" href="#">
                        <span class="main-title">Contact Us</span>
                        <span class="sub-title">コンタクト方法</span>
                        </a>
                    </li>
                </ul>
            </nav>
        </>
    )
}