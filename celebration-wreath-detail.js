// 축하화환 상품 데이터 (celebration-wreath.js와 동일)
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
    { id: 10, name: '축하3단화환-프레시안', price: 69000, originalPrice: 79000, image: 'https://cdn.midjourney.com/f3006714-a5da-4371-867a-ec9267d48057/0_1.png', rating: 4.6, reviewCount: 123 }
];

let currentProduct = null;
let basePrice = 0;
let deliveryFee = 5000;

// 페이지 초기화
document.addEventListener('DOMContentLoaded', function() {
    loadProductDetail();
    initializeEventListeners();
});

function loadProductDetail() {
    // URL에서 상품 ID 가져오기
    const urlParams = new URLSearchParams(window.location.search);
    const productId = parseInt(urlParams.get('id'));
    
    // 상품 찾기
    currentProduct = celebrationWreathProducts.find(p => p.id === productId);
    
    if (!currentProduct) {
        // 상품을 찾지 못한 경우 첫 번째 상품 표시
        currentProduct = celebrationWreathProducts[0];
    }
    
    // 상품 정보 표시
    displayProductInfo();
    loadRelatedProducts();
}

function displayProductInfo() {
    basePrice = currentProduct.price;
    
    // 상품명
    document.getElementById('productName').textContent = currentProduct.name;
    document.getElementById('breadcrumbName').textContent = currentProduct.name;
    document.title = `${currentProduct.name} - 꽃집처녀`;
    
    // 이미지
    document.getElementById('mainImage').src = currentProduct.image;
    document.getElementById('mainImage').alt = currentProduct.name;
    document.getElementById('thumb1').src = currentProduct.image;
    document.getElementById('thumb2').src = currentProduct.image;
    document.getElementById('thumb3').src = currentProduct.image;
    
    // 가격
    const discountRate = Math.round((1 - currentProduct.price / currentProduct.originalPrice) * 100);
    document.getElementById('originalPrice').textContent = `${currentProduct.originalPrice.toLocaleString()}원`;
    document.getElementById('salePrice').textContent = `${currentProduct.price.toLocaleString()}원`;
    document.getElementById('discountRate').textContent = `${discountRate}% 할인`;
    
    // 평점
    document.getElementById('productStars').innerHTML = generateStars(currentProduct.rating);
    document.getElementById('productRating').textContent = `(${currentProduct.rating}) 리뷰 ${currentProduct.reviewCount}개`;
    
    // 리뷰 섹션
    document.getElementById('reviewScore').textContent = currentProduct.rating;
    document.getElementById('reviewStars').innerHTML = generateStars(currentProduct.rating);
    document.getElementById('totalReviews').textContent = `${currentProduct.reviewCount}개 리뷰`;
    
    // 총 금액 계산
    updateTotalPrice();
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

function updateTotalPrice() {
    const quantity = parseInt(document.getElementById('quantity').value);
    const deliveryOption = document.querySelector('input[name="delivery"]:checked').value;
    
    // 배송비 계산
    deliveryFee = deliveryOption === 'same-day' ? 5000 : 0;
    
    // 총 금액
    const total = (basePrice * quantity) + deliveryFee;
    document.getElementById('totalAmount').textContent = `${total.toLocaleString()}원`;
}

function initializeEventListeners() {
    // 수량 조절
    document.querySelector('.qty-btn.minus').addEventListener('click', function() {
        const quantityInput = document.getElementById('quantity');
        let value = parseInt(quantityInput.value);
        if (value > 1) {
            quantityInput.value = value - 1;
            updateTotalPrice();
        }
    });
    
    document.querySelector('.qty-btn.plus').addEventListener('click', function() {
        const quantityInput = document.getElementById('quantity');
        let value = parseInt(quantityInput.value);
        if (value < 10) {
            quantityInput.value = value + 1;
            updateTotalPrice();
        }
    });
    
    document.getElementById('quantity').addEventListener('change', updateTotalPrice);
    
    // 배송 옵션 변경
    document.querySelectorAll('input[name="delivery"]').forEach(radio => {
        radio.addEventListener('change', updateTotalPrice);
    });
    
    // 썸네일 이미지 클릭
    document.querySelectorAll('.thumbnail').forEach(thumb => {
        thumb.addEventListener('click', function() {
            document.querySelectorAll('.thumbnail').forEach(t => t.classList.remove('active'));
            this.classList.add('active');
            
            const img = this.querySelector('img');
            document.getElementById('mainImage').src = img.src;
        });
    });
    
    // 탭 전환
    document.querySelectorAll('.tab-btn').forEach(btn => {
        btn.addEventListener('click', function() {
            const tabName = this.dataset.tab;
            
            document.querySelectorAll('.tab-btn').forEach(b => b.classList.remove('active'));
            document.querySelectorAll('.tab-pane').forEach(p => p.classList.remove('active'));
            
            this.classList.add('active');
            document.getElementById(tabName).classList.add('active');
        });
    });
    
    // 장바구니 담기
    document.querySelector('.btn-cart').addEventListener('click', function() {
        const originalText = this.innerHTML;
        this.innerHTML = '<i class="fas fa-spinner fa-spin"></i> 담는 중...';
        this.disabled = true;
        
        setTimeout(() => {
            this.innerHTML = '<i class="fas fa-check"></i> 장바구니에 담겼습니다!';
            this.style.background = '#4caf50';
            
            showNotification(`${currentProduct.name}이(가) 장바구니에 담겼습니다.`);
            
            setTimeout(() => {
                this.innerHTML = originalText;
                this.style.background = '';
                this.disabled = false;
            }, 2000);
        }, 1000);
    });
    
    // 바로 구매하기
    document.querySelector('.btn-buy').addEventListener('click', function() {
        showNotification('주문 페이지로 이동합니다.');
        setTimeout(() => {
            // 실제로는 주문 페이지로 이동
            alert('주문 페이지 기능은 준비 중입니다.');
        }, 500);
    });
    
    // 위시리스트
    document.querySelector('.btn-wishlist').addEventListener('click', function() {
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
}

function loadRelatedProducts() {
    const relatedProductsContainer = document.getElementById('relatedProducts');
    
    // 현재 상품을 제외한 랜덤 4개 상품 선택
    const otherProducts = celebrationWreathProducts.filter(p => p.id !== currentProduct.id);
    const shuffled = otherProducts.sort(() => 0.5 - Math.random());
    const selected = shuffled.slice(0, 4);
    
    relatedProductsContainer.innerHTML = selected.map(product => `
        <div class="product-card" onclick="window.location.href='celebration-wreath-detail.html?id=${product.id}'">
            <div class="product-image">
                <img src="${product.image}" alt="${product.name}">
            </div>
            <div class="product-info">
                <h4>${product.name}</h4>
                <div class="product-price">
                    <span class="original-price">${product.originalPrice.toLocaleString()}원</span>
                    <span class="sale-price">${product.price.toLocaleString()}원</span>
                </div>
            </div>
        </div>
    `).join('');
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
