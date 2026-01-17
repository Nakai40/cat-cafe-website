// 共通コンポーネントを読み込む関数
async function loadComponent(elementId, componentPath) {
    try {
        const response = await fetch(componentPath);
        if (!response.ok) {
            throw new Error(`Failed to load ${componentPath}: ${response.status}`);
        }
        const html = await response.text();
        const element = document.getElementById(elementId);
        if (element) {
            element.outerHTML = html;
        }
    } catch (error) {
        console.error('Error loading component:', error);
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
document.addEventListener('DOMContentLoaded', async () => {
    // ヘッダーとフッターを読み込む
    await loadComponent('header-placeholder', './components/header.html');
    await loadComponent('footer-placeholder', './components/footer.html');

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
