// 축하화환 상품 데이터
const celebrationWreathProducts = [
    { id: 1, name: '축하3단화환-빅이벤트', price: 85000, originalPrice: 125000, image: 'https://cdn.midjourney.com/781b0120-8c5e-4fc7-8d2e-e00f8439266f/0_3.png', rating: 4.9, reviewCount: 156 },
    { id: 2, name: '축하3단화환-라이언', price: 79000, originalPrice: 89000, image: 'https://cdn.midjourney.com/f3006714-a5da-4371-867a-ec9267d48057/0_1.png', rating: 4.8, reviewCount: 142 },
    { id: 3, name: '축하3단화환-탑텐', price: 99000, originalPrice: 119000, image: 'https://cdn.midjourney.com/653e5ae0-5981-4418-93af-34fed499ea12/0_2.png', rating: 4.9, reviewCount: 189 },
    { id: 4, name: '글로리특대-업그레이드상품', price: 120000, originalPrice: 180000, image: 'https://cdn.midjourney.com/f3006714-a5da-4371-867a-ec9267d48057/0_3.png', rating: 5.0, reviewCount: 203 },
    { id: 5, name: '1+1행사-하나구입시하나더!', price: 119000, originalPrice: 138000, image: 'https://cdn.midjourney.com/781b0120-8c5e-4fc7-8d2e-e00f8439266f/0_3.png', rating: 4.7, reviewCount: 178 },
    { id: 6, name: '축하3단화환-프레시팜', price: 96000, originalPrice: 109000, image: 'https://cdn.midjourney.com/f3006714-a5da-4371-867a-ec9267d48057/0_1.png', rating: 4.8, reviewCount: 134 },
    { id: 7, name: '축하3단화환-(공작)', price: 100000, originalPrice: 119000, image: 'https://cdn.midjourney.com/653e5ae0-5981-4418-93af-34fed499ea12/0_2.png', rating: 4.9, reviewCount: 167 },
    { id: 8, name: '프리미엄특가30%DOWN-글로리', price: 98000, originalPrice: 140000, image: 'https://cdn.midjourney.com/f3006714-a5da-4371-867a-ec9267d48057/0_3.png', rating: 4.8, reviewCount: 145 },
    { id: 9, name: '그랜드특가-마제스티', price: 150000, originalPrice: 169000, image: 'https://cdn.midjourney.com/781b0120-8c5e-4fc7-8d2e-e00f8439266f/0_3.png', rating: 5.0, reviewCount: 198 },
    { id: 10, name: '축하3단화환-프레시안', price: 69000, originalPrice: 79000, image: 'https://cdn.midjourney.com/f3006714-a5da-4371-867a-ec9267d48057/0_1.png', rating: 4.6, reviewCount: 123 },
    { id: 11, name: '축하3단화환-릴리 스텐다드', price: 90000, originalPrice: 99000, image: 'https://cdn.midjourney.com/653e5ae0-5981-4418-93af-34fed499ea12/0_2.png', rating: 4.7, reviewCount: 156 },
    { id: 12, name: '축하행사추천상품-추천', price: 89000, originalPrice: 109000, image: 'https://cdn.midjourney.com/f3006714-a5da-4371-867a-ec9267d48057/0_3.png', rating: 4.8, reviewCount: 189 },
    { id: 13, name: '축하3단화환-고급형(와쥬)', price: 119000, originalPrice: 129000, image: 'https://cdn.midjourney.com/781b0120-8c5e-4fc7-8d2e-e00f8439266f/0_3.png', rating: 4.9, reviewCount: 167 },
    { id: 14, name: '축하3단화환-고급형(엘로스타)', price: 129000, originalPrice: 139000, image: 'https://cdn.midjourney.com/f3006714-a5da-4371-867a-ec9267d48057/0_1.png', rating: 4.8, reviewCount: 145 },
    { id: 15, name: '축하4단화환-포시즌', price: 150000, originalPrice: 180000, image: 'https://cdn.midjourney.com/653e5ae0-5981-4418-93af-34fed499ea12/0_2.png', rating: 5.0, reviewCount: 234 },
    { id: 16, name: '4단 업그레이드', price: 200000, originalPrice: 230000, image: 'https://cdn.midjourney.com/f3006714-a5da-4371-867a-ec9267d48057/0_3.png', rating: 5.0, reviewCount: 267 },
    { id: 17, name: '축하4단화환-그랜드타워', price: 170000, originalPrice: 179000, image: 'https://cdn.midjourney.com/781b0120-8c5e-4fc7-8d2e-e00f8439266f/0_3.png', rating: 4.9, reviewCount: 198 },
    { id: 18, name: '5단화환(베이직)', price: 250000, originalPrice: 260000, image: 'https://cdn.midjourney.com/f3006714-a5da-4371-867a-ec9267d48057/0_1.png', rating: 5.0, reviewCount: 289 },
    { id: 19, name: '축하3단화환-고급형(딥라이징)', price: 100000, originalPrice: 120000, image: 'https://cdn.midjourney.com/653e5ae0-5981-4418-93af-34fed499ea12/0_2.png', rating: 4.8, reviewCount: 156 },
    { id: 20, name: '하이그랜드-특사이즈화환', price: 130000, originalPrice: 140000, image: 'https://cdn.midjourney.com/f3006714-a5da-4371-867a-ec9267d48057/0_3.png', rating: 4.9, reviewCount: 178 }
];

// 페이지 초기화
document.addEventListener('DOMContentLoaded', function() {
    renderProducts();
    initializeEventListeners();
});

function renderProducts() {
    const productsGrid = document.getElementById('productsGrid');
    const sortSelect = document.getElementById('sortSelect');
    const sortValue = sortSelect ? sortSelect.value : 'popular';
    
    let sortedProducts = [...celebrationWreathProducts];
    
    // 정렬
    switch(sortValue) {
        case 'price-low':
            sortedProducts.sort((a, b) => a.price - b.price);
            break;
        case 'price-high':
            sortedProducts.sort((a, b) => b.price - a.price);
            break;
        case 'discount':
            sortedProducts.sort((a, b) => {
                const discountA = ((a.originalPrice - a.price) / a.originalPrice) * 100;
                const discountB = ((b.originalPrice - b.price) / b.originalPrice) * 100;
                return discountB - discountA;
            });
            break;
        default: // popular
            sortedProducts.sort((a, b) => b.reviewCount - a.reviewCount);
    }
    
    productsGrid.innerHTML = sortedProducts.map(product => createProductCard(product)).join('');
    initializeProductCards();
}

function createProductCard(product) {
    const discountRate = Math.round((1 - product.price / product.originalPrice) * 100);
    
    return `
        <div class="product-card" data-product-id="${product.id}">
            <div class="product-image">
                <img src="${product.image}" alt="${product.name}" loading="lazy">
                ${discountRate >= 30 ? '<div class="product-badge sale">특가</div>' : ''}
                ${product.reviewCount > 200 ? '<div class="product-badge best">인기</div>' : ''}
            </div>
            <div class="product-info">
                <h4>${product.name}</h4>
                <div class="product-price">
                    <span class="sale-price">${product.price.toLocaleString()}<small>원</small></span>
                </div>
                <div class="product-meta">
                    <span class="product-badge-small delivery">친국배</span>
                    <span class="product-stats">구매 ${Math.floor(product.reviewCount / 10)} · 후기 ${product.reviewCount}</span>
                </div>
            </div>
        </div>
    `;
}

function generateStars(rating) {
    const fullStars = Math.floor(rating);
    const hasHalfStar = rating % 1 !== 0;
    let starsHtml = '';
    
    for (let i = 0; i < fullStars; i++) {
        starsHtml += '<i class="fas fa-star"></i>';
    }
    
    if (hasHalfStar) {
        starsHtml += '<i class="fas fa-star-half-alt"></i>';
    }
    
    const emptyStars = 5 - Math.ceil(rating);
    for (let i = 0; i < emptyStars; i++) {
        starsHtml += '<i class="far fa-star"></i>';
    }
    
    return starsHtml;
}

function initializeEventListeners() {
    // 정렬 변경
    const sortSelect = document.getElementById('sortSelect');
    if (sortSelect) {
        sortSelect.addEventListener('change', renderProducts);
    }
    
    // 필터 칩 클릭 이벤트
    const filterChips = document.querySelectorAll('.filter-chip');
    filterChips.forEach(chip => {
        chip.addEventListener('click', function() {
            filterChips.forEach(c => c.classList.remove('active'));
            this.classList.add('active');
            // 필터링 로직은 나중에 추가
        });
    });
}

function initializeProductCards() {
    // 상품 카드 클릭 - 상세페이지로 이동
    const productCards = document.querySelectorAll('.product-card');
    productCards.forEach(card => {
        card.addEventListener('click', function(e) {
            if (e.target.closest('.product-actions') || e.target.closest('.add-to-cart') || e.target.closest('.buy-now')) {
                return;
            }
            
            const productId = this.dataset.productId;
            const product = celebrationWreathProducts.find(p => p.id == productId);
            
            if (product) {
                // 상세페이지로 이동 (상품 정보를 URL 파라미터로 전달)
                window.location.href = `celebration-wreath-detail.html?id=${productId}`;
            }
        });
    });
    
    // 구매하기 버튼
    const buyNowBtns = document.querySelectorAll('.buy-now');
    buyNowBtns.forEach(btn => {
        btn.addEventListener('click', function(e) {
            e.stopPropagation();
            const productId = this.dataset.productId;
            window.location.href = `celebration-wreath-detail.html?id=${productId}`;
        });
    });
    
    // 장바구니 버튼
    const addToCartBtns = document.querySelectorAll('.add-to-cart');
    addToCartBtns.forEach(btn => {
        btn.addEventListener('click', function(e) {
            e.stopPropagation();
            
            const productId = this.dataset.productId;
            const product = celebrationWreathProducts.find(p => p.id == productId);
            
            const originalText = this.textContent;
            this.innerHTML = '<i class="fas fa-spinner fa-spin"></i> 담는 중...';
            this.disabled = true;
            
            setTimeout(() => {
                this.innerHTML = '<i class="fas fa-check"></i> 완료!';
                this.style.background = '#4caf50';
                
                showNotification(`${product.name}이(가) 장바구니에 담겼습니다.`);
                
                setTimeout(() => {
                    this.textContent = originalText;
                    this.style.background = '';
                    this.disabled = false;
                }, 2000);
            }, 1000);
        });
    });
    
    // 위시리스트 버튼
    const wishlistBtns = document.querySelectorAll('.wishlist-btn');
    wishlistBtns.forEach(btn => {
        btn.addEventListener('click', function(e) {
            e.stopPropagation();
            
            this.classList.toggle('active');
            const icon = this.querySelector('i');
            
            if (this.classList.contains('active')) {
                icon.className = 'fas fa-heart';
                showNotification('위시리스트에 추가되었습니다.');
            } else {
                icon.className = 'far fa-heart';
                showNotification('위시리스트에서 제거되었습니다.');
            }
        });
    });
}

function showNotification(message, type = 'success') {
    const existingNotifications = document.querySelectorAll('.notification');
    existingNotifications.forEach(n => n.remove());
    
    const notification = document.createElement('div');
    notification.className = `notification ${type}`;
    notification.textContent = message;
    notification.style.cssText = `
        position: fixed;
        top: 20px;
        right: 20px;
        background: ${type === 'success' ? '#4caf50' : '#f44336'};
        color: white;
        padding: 15px 20px;
        border-radius: 5px;
        box-shadow: 0 4px 12px rgba(0,0,0,0.15);
        z-index: 10000;
        font-size: 14px;
        max-width: 300px;
        animation: slideInRight 0.3s ease;
    `;
    
    document.body.appendChild(notification);
    
    setTimeout(() => {
        notification.style.animation = 'slideOutRight 0.3s ease';
        setTimeout(() => {
            if (notification.parentNode) {
                notification.remove();
            }
        }, 300);
    }, 3000);
}


// 추가 상품 데이터
celebrationWreathProducts.push(
    { id: 21, name: '명판축하A형-업그레이드상품 영남권지역양식', price: 80000, originalPrice: 90000, image: 'https://cdn.midjourney.com/781b0120-8c5e-4fc7-8d2e-e00f8439266f/0_3.png', rating: 4.7, reviewCount: 134 },
    { id: 22, name: '명판축하B형-업그레이드상품 영남권지역양식', price: 95000, originalPrice: 110000, image: 'https://cdn.midjourney.com/f3006714-a5da-4371-867a-ec9267d48057/0_1.png', rating: 4.8, reviewCount: 145 },
    { id: 23, name: '축하3단화환-(윙나인)', price: 105000, originalPrice: 120000, image: 'https://cdn.midjourney.com/653e5ae0-5981-4418-93af-34fed499ea12/0_2.png', rating: 4.8, reviewCount: 167 },
    { id: 24, name: '축하3단화환-드라세나', price: 88000, originalPrice: 90000, image: 'https://cdn.midjourney.com/f3006714-a5da-4371-867a-ec9267d48057/0_3.png', rating: 4.6, reviewCount: 123 },
    { id: 25, name: '축하3단화환-옐로그린 후레시', price: 119000, originalPrice: 139000, image: 'https://cdn.midjourney.com/781b0120-8c5e-4fc7-8d2e-e00f8439266f/0_3.png', rating: 4.9, reviewCount: 189 },
    { id: 26, name: '축하3단화환-고급형(플랜트)', price: 145000, originalPrice: 159000, image: 'https://cdn.midjourney.com/f3006714-a5da-4371-867a-ec9267d48057/0_1.png', rating: 4.9, reviewCount: 198 },
    { id: 27, name: '축하5단화환-그랜드', price: 200000, originalPrice: 250000, image: 'https://cdn.midjourney.com/653e5ae0-5981-4418-93af-34fed499ea12/0_2.png', rating: 5.0, reviewCount: 312 },
    { id: 28, name: '축하3단화환-고급형(주문예약)', price: 219000, originalPrice: 220000, image: 'https://cdn.midjourney.com/f3006714-a5da-4371-867a-ec9267d48057/0_3.png', rating: 5.0, reviewCount: 267 },
    { id: 29, name: '스크린쌀화환20kg-서울배송', price: 135000, originalPrice: 140000, image: 'https://cdn.midjourney.com/781b0120-8c5e-4fc7-8d2e-e00f8439266f/0_3.png', rating: 4.8, reviewCount: 178 },
    { id: 30, name: '스크린쌀화환20kg-지방배송', price: 168000, originalPrice: 173000, image: 'https://cdn.midjourney.com/f3006714-a5da-4371-867a-ec9267d48057/0_1.png', rating: 4.7, reviewCount: 156 },
    { id: 31, name: '스크린쌀화환10kg-지방배송', price: 103000, originalPrice: 113000, image: 'https://cdn.midjourney.com/653e5ae0-5981-4418-93af-34fed499ea12/0_2.png', rating: 4.6, reviewCount: 134 },
    { id: 32, name: '스크린쌀화환10kg-서울배송', price: 90000, originalPrice: 100000, image: 'https://cdn.midjourney.com/f3006714-a5da-4371-867a-ec9267d48057/0_3.png', rating: 4.7, reviewCount: 145 },
    { id: 33, name: '장미3단화환-(로즈데이)', price: 249000, originalPrice: 250000, image: 'https://cdn.midjourney.com/781b0120-8c5e-4fc7-8d2e-e00f8439266f/0_3.png', rating: 5.0, reviewCount: 289 },
    { id: 34, name: '시즌세일-포인트화환', price: 99000, originalPrice: 109000, image: 'https://cdn.midjourney.com/f3006714-a5da-4371-867a-ec9267d48057/0_1.png', rating: 4.8, reviewCount: 167 },
    { id: 35, name: '카네이션 축하화환', price: 300000, originalPrice: 400000, image: 'https://cdn.midjourney.com/653e5ae0-5981-4418-93af-34fed499ea12/0_2.png', rating: 5.0, reviewCount: 234 },
    { id: 36, name: '1단 축하화환 글로리', price: 110000, originalPrice: 120000, image: 'https://cdn.midjourney.com/f3006714-a5da-4371-867a-ec9267d48057/0_3.png', rating: 4.8, reviewCount: 178 },
    { id: 37, name: '2단 축하화환 글로리', price: 150000, originalPrice: 180000, image: 'https://cdn.midjourney.com/781b0120-8c5e-4fc7-8d2e-e00f8439266f/0_3.png', rating: 4.9, reviewCount: 198 },
    { id: 38, name: '1단 축하화환 B타입', price: 99000, originalPrice: 109000, image: 'https://cdn.midjourney.com/f3006714-a5da-4371-867a-ec9267d48057/0_1.png', rating: 4.7, reviewCount: 156 },
    { id: 39, name: '1단 축하화환 베이스', price: 110000, originalPrice: 130000, image: 'https://cdn.midjourney.com/653e5ae0-5981-4418-93af-34fed499ea12/0_2.png', rating: 4.8, reviewCount: 167 },
    { id: 40, name: '2단 거베라믹스', price: 190000, originalPrice: 210000, image: 'https://cdn.midjourney.com/f3006714-a5da-4371-867a-ec9267d48057/0_3.png', rating: 4.9, reviewCount: 189 },
    { id: 41, name: '2단 포인트믹스', price: 210000, originalPrice: 220000, image: 'https://cdn.midjourney.com/781b0120-8c5e-4fc7-8d2e-e00f8439266f/0_3.png', rating: 4.8, reviewCount: 178 },
    { id: 42, name: '2단 장미 화환', price: 210000, originalPrice: 230000, image: 'https://cdn.midjourney.com/f3006714-a5da-4371-867a-ec9267d48057/0_1.png', rating: 4.9, reviewCount: 203 },
    { id: 43, name: '2단 라운드 화환', price: 135000, originalPrice: 145000, image: 'https://cdn.midjourney.com/653e5ae0-5981-4418-93af-34fed499ea12/0_2.png', rating: 4.7, reviewCount: 145 },
    { id: 44, name: '축하1단화환 도시루', price: 120000, originalPrice: 140000, image: 'https://cdn.midjourney.com/f3006714-a5da-4371-867a-ec9267d48057/0_3.png', rating: 4.8, reviewCount: 167 },
    { id: 45, name: '2단 장미.르네브 화환', price: 190000, originalPrice: 200000, image: 'https://cdn.midjourney.com/781b0120-8c5e-4fc7-8d2e-e00f8439266f/0_3.png', rating: 4.9, reviewCount: 189 },
    { id: 46, name: '2단 베이직 화환', price: 190000, originalPrice: 210000, image: 'https://cdn.midjourney.com/f3006714-a5da-4371-867a-ec9267d48057/0_1.png', rating: 4.8, reviewCount: 178 },
    { id: 47, name: '2단 포인트혼합', price: 200000, originalPrice: 230000, image: 'https://cdn.midjourney.com/653e5ae0-5981-4418-93af-34fed499ea12/0_2.png', rating: 4.9, reviewCount: 198 },
    { id: 48, name: '2단 컬러거베라 화환', price: 170000, originalPrice: 190000, image: 'https://cdn.midjourney.com/f3006714-a5da-4371-867a-ec9267d48057/0_3.png', rating: 4.7, reviewCount: 156 },
    { id: 49, name: '2단 거베라퓨어', price: 190000, originalPrice: 210000, image: 'https://cdn.midjourney.com/781b0120-8c5e-4fc7-8d2e-e00f8439266f/0_3.png', rating: 4.8, reviewCount: 167 },
    { id: 50, name: '2단 안시리움릴리 화환', price: 320000, originalPrice: 330000, image: 'https://cdn.midjourney.com/f3006714-a5da-4371-867a-ec9267d48057/0_1.png', rating: 5.0, reviewCount: 234 },
    { id: 51, name: '2단 안시리움포인트 화환', price: 250000, originalPrice: 260000, image: 'https://cdn.midjourney.com/653e5ae0-5981-4418-93af-34fed499ea12/0_2.png', rating: 4.9, reviewCount: 212 },
    { id: 52, name: '2단 오리지널 화환', price: 170000, originalPrice: 180000, image: 'https://cdn.midjourney.com/f3006714-a5da-4371-867a-ec9267d48057/0_3.png', rating: 4.8, reviewCount: 189 },
    { id: 53, name: '2단 오리지널R타입 화환', price: 160000, originalPrice: 170000, image: 'https://cdn.midjourney.com/781b0120-8c5e-4fc7-8d2e-e00f8439266f/0_3.png', rating: 4.7, reviewCount: 167 },
    { id: 54, name: '2단 페스티발 화환', price: 199000, originalPrice: 209000, image: 'https://cdn.midjourney.com/f3006714-a5da-4371-867a-ec9267d48057/0_1.png', rating: 4.8, reviewCount: 178 },
    { id: 55, name: '2단 듀오 프리미엄 화환', price: 260000, originalPrice: 280000, image: 'https://cdn.midjourney.com/653e5ae0-5981-4418-93af-34fed499ea12/0_2.png', rating: 5.0, reviewCount: 245 },
    { id: 56, name: '2단 안시리움소국혼합 화환', price: 190000, originalPrice: 200000, image: 'https://cdn.midjourney.com/f3006714-a5da-4371-867a-ec9267d48057/0_3.png', rating: 4.8, reviewCount: 189 },
    { id: 57, name: '2단 소국 화환', price: 169000, originalPrice: 189000, image: 'https://cdn.midjourney.com/781b0120-8c5e-4fc7-8d2e-e00f8439266f/0_3.png', rating: 4.7, reviewCount: 156 },
    { id: 58, name: '2단 안시리움퓨어 화환', price: 300000, originalPrice: 310000, image: 'https://cdn.midjourney.com/f3006714-a5da-4371-867a-ec9267d48057/0_1.png', rating: 5.0, reviewCount: 267 },
    { id: 59, name: '2단 덴파레 화환', price: 169000, originalPrice: 189000, image: 'https://cdn.midjourney.com/653e5ae0-5981-4418-93af-34fed499ea12/0_2.png', rating: 4.7, reviewCount: 145 },
    { id: 60, name: '2단 수국믹스 화환', price: 160000, originalPrice: 189000, image: 'https://cdn.midjourney.com/f3006714-a5da-4371-867a-ec9267d48057/0_3.png', rating: 4.8, reviewCount: 167 },
    { id: 61, name: '축하1단화환(기프트)', price: 100000, originalPrice: 110000, image: 'https://cdn.midjourney.com/781b0120-8c5e-4fc7-8d2e-e00f8439266f/0_3.png', rating: 4.7, reviewCount: 134 },
    { id: 62, name: '축하1단화환(기프트/특사이즈)', price: 120000, originalPrice: 130000, image: 'https://cdn.midjourney.com/f3006714-a5da-4371-867a-ec9267d48057/0_1.png', rating: 4.8, reviewCount: 156 },
    { id: 63, name: '축하1단화환(기프트/특사이즈)', price: 120000, originalPrice: 130000, image: 'https://cdn.midjourney.com/653e5ae0-5981-4418-93af-34fed499ea12/0_2.png', rating: 4.8, reviewCount: 145 },
    { id: 64, name: '축하2단화환(기프트/특사이즈)', price: 200000, originalPrice: 220000, image: 'https://cdn.midjourney.com/f3006714-a5da-4371-867a-ec9267d48057/0_3.png', rating: 4.9, reviewCount: 189 },
    { id: 65, name: '축하2단화환(기프트/특사이즈)', price: 200000, originalPrice: 220000, image: 'https://cdn.midjourney.com/781b0120-8c5e-4fc7-8d2e-e00f8439266f/0_3.png', rating: 4.9, reviewCount: 178 }
);
