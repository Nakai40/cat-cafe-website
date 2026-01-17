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
