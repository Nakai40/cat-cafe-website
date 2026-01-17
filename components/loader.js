// ヘッダーのHTMLコンテンツ
const headerHTML = `
<header id="header">
    <nav class="container">
        <a href="./index.html" class="logo"><img src="./assets/logo.svg" alt="もこもこテラス"></a>
        <ul class="nav-links">
            <li><a href="./friends.html">ねこのお友達</a></li>
            <li><a href="./how_to_enjoy.html">過ごし方</a></li>
            <li><a href="./index.html#system">料金</a></li>
            <li><a href="./index.html#menu">メニュー</a></li>
            <li><a href="./index.html#access">アクセス</a></li>
            <li><a href="./rules.html">お約束</a></li>
        </ul>
        <div class="hamburger">
            <span></span>
            <span></span>
            <span></span>
        </div>
    </nav>
</header>
`;

// フッターのHTMLコンテンツ
const footerHTML = `
<footer>
    <p>&copy; 2024 Moko Moko Terrace. All rights reserved.</p>
</footer>
`;

// フローティングバナーのHTMLコンテンツ
const floatingBannerHTML = `
<a href="tel:03-1234-5678" class="floating-call-banner">
    <div class="paw-icon">
        <svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
            <ellipse cx="30" cy="25" rx="12" ry="16" fill="white"/>
            <ellipse cx="50" cy="20" rx="13" ry="17" fill="white"/>
            <ellipse cx="70" cy="25" rx="12" ry="16" fill="white"/>
            <ellipse cx="20" cy="45" rx="11" ry="14" fill="white"/>
            <ellipse cx="80" cy="45" rx="11" ry="14" fill="white"/>
            <path d="M 30 55 Q 25 75 35 85 Q 50 95 65 85 Q 75 75 70 55 Q 65 45 50 45 Q 35 45 30 55 Z" fill="white"/>
        </svg>
    </div>
    <span class="call-text">お電話はこちら</span>
</a>
`;

// 共通コンポーネントを読み込む関数
function loadComponent(elementId, htmlContent) {
    const element = document.getElementById(elementId);
    if (element) {
        element.outerHTML = htmlContent;
    }
}

// ヘッダーのスクロール効果を設定する関数
function setupHeaderScroll() {
    const header = document.getElementById('header');

    if (!header) return;

    // スクロール位置に応じてヘッダーのスタイルを変更
    function updateHeaderStyle() {
        if (window.scrollY > 50) {
            header.classList.add('scrolled');
        } else {
            header.classList.remove('scrolled');
        }
    }

    // 初期状態を設定
    updateHeaderStyle();

    // スクロールイベントを監視
    window.addEventListener('scroll', updateHeaderStyle);
}

// DOMが読み込まれたら実行
document.addEventListener('DOMContentLoaded', () => {
    // ヘッダーとフッターを読み込む
    loadComponent('header-placeholder', headerHTML);
    loadComponent('footer-placeholder', footerHTML);

    // フローティングバナーを追加
    const bannerContainer = document.createElement('div');
    bannerContainer.innerHTML = floatingBannerHTML;
    const floatingBanner = bannerContainer.firstElementChild;
    document.body.appendChild(floatingBanner);

    // 画面サイズに応じてリンク先を変更する関数
    function updateFloatingBannerLink() {
        const banner = document.querySelector('.floating-call-banner');
        if (!banner) return;

        const isDesktop = window.innerWidth > 768;

        if (isDesktop) {
            // PC: アクセスセクションへのリンク
            banner.href = './index.html#access';
            banner.querySelector('.call-text').textContent = 'アクセス';
        } else {
            // モバイル: 電話リンク
            banner.href = 'tel:03-1234-5678';
            banner.querySelector('.call-text').textContent = 'お電話はこちら';
        }
    }

    // 初期設定
    updateFloatingBannerLink();

    // ウィンドウサイズ変更時に更新
    window.addEventListener('resize', updateFloatingBannerLink);

    // ヘッダーのスクロール効果を設定
    setupHeaderScroll();

    // ハンバーガーメニューのイベントリスナーを再設定
    const hamburger = document.querySelector('.hamburger');
    const navLinks = document.querySelector('.nav-links');

    if (hamburger && navLinks) {
        hamburger.addEventListener('click', () => {
            navLinks.classList.toggle('active');
            hamburger.classList.toggle('active');
        });
    }
});
