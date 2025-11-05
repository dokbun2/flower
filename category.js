// Category Page JavaScript

// Sample product data
const productData = {
    bouquet: [
        {
            id: 1,
            name: '프리미엄 장미 꽃다발',
            category: 'bouquet',
            type: 'rose',
            color: 'red',
            purpose: ['anniversary', 'proposal'],
            price: 65000,
            originalPrice: 80000,
            rating: 4.9,
            reviewCount: 127,
            description: '신선한 빨간 장미 20송이로 구성된 럭셔리 꽃다발',
            image: 'https://images.unsplash.com/photo-1518895949257-7621c3c786d7?w=400&h=300&fit=crop&crop=center',
            badges: ['best', 'sale'],
            isNew: false
        },
        {
            id: 2,
            name: '혼합 꽃다발',
            category: 'bouquet',
            type: 'mixed',
            color: 'mixed',
            purpose: ['birthday', 'congratulation'],
            price: 45000,
            originalPrice: null,
            rating: 4.7,
            reviewCount: 89,
            description: '다양한 계절 꽃으로 구성된 화사한 꽃다발',
            image: 'https://images.unsplash.com/photo-1563241527-3004b7be0ffd?w=400&h=300&fit=crop&crop=center',
            badges: ['new'],
            isNew: true
        },
        {
            id: 3,
            name: '해바라기 꽃다발',
            category: 'bouquet',
            type: 'sunflower',
            color: 'yellow',
            purpose: ['birthday', 'congratulation'],
            price: 35000,
            originalPrice: null,
            rating: 4.6,
            reviewCount: 56,
            description: '밝고 긍정적인 에너지를 전하는 해바라기',
            image: 'https://images.unsplash.com/photo-1597848212624-e6ec2d17d05a?w=400&h=300&fit=crop&crop=center',
            badges: [],
            isNew: false
        },
        {
            id: 4,
            name: '화이트 장미 꽃다발',
            category: 'bouquet',
            type: 'rose',
            color: 'white',
            purpose: ['anniversary', 'proposal'],
            price: 70000,
            originalPrice: 85000,
            rating: 4.8,
            reviewCount: 94,
            description: '순수하고 우아한 화이트 장미 꽃다발',
            image: 'https://images.unsplash.com/photo-1455659817273-f96807779a8a?w=400&h=300&fit=crop&crop=center',
            badges: ['sale'],
            isNew: false
        },
        {
            id: 5,
            name: '핑크 카네이션 꽃다발',
            category: 'bouquet',
            type: 'carnation',
            color: 'pink',
            purpose: ['birthday', 'graduation'],
            price: 40000,
            originalPrice: null,
            rating: 4.5,
            reviewCount: 73,
            description: '사랑스러운 핑크 카네이션으로 만든 꽃다발',
            image: 'https://images.unsplash.com/photo-1551698618-1dfe5d97d256?w=400&h=300&fit=crop&crop=center',
            badges: [],
            isNew: false
        },
        {
            id: 6,
            name: '백합 꽃다발',
            category: 'bouquet',
            type: 'lily',
            color: 'white',
            purpose: ['anniversary', 'congratulation'],
            price: 55000,
            originalPrice: null,
            rating: 4.7,
            reviewCount: 61,
            description: '고급스럽고 향기로운 백합 꽃다발',
            image: 'https://images.unsplash.com/photo-1490750967868-88aa4486c946?w=400&h=300&fit=crop&crop=center',
            badges: [],
            isNew: false
        }
    ],
    wreath: [
        {
            id: 7,
            name: '개업 축하 화환',
            category: 'wreath',
            type: 'mixed',
            color: 'mixed',
            purpose: ['congratulation'],
            price: 150000,
            originalPrice: null,
            rating: 4.8,
            reviewCount: 45,
            description: '개업을 축하하는 화려한 화환',
            image: 'https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=400&h=300&fit=crop&crop=center',
            badges: ['best'],
            isNew: false
        },
        {
            id: 8,
            name: '승진 축하 화환',
            category: 'wreath',
            type: 'mixed',
            color: 'mixed',
            purpose: ['congratulation'],
            price: 120000,
            originalPrice: null,
            rating: 4.6,
            reviewCount: 32,
            description: '승진을 축하하는 품격있는 화환',
            image: 'https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=400&h=300&fit=crop&crop=center',
            badges: [],
            isNew: false
        }
    ],
    plant: [
        {
            id: 9,
            name: '관엽식물 화분',
            category: 'plant',
            type: 'plant',
            color: 'green',
            purpose: ['congratulation'],
            price: 25000,
            originalPrice: null,
            rating: 4.4,
            reviewCount: 38,
            description: '실내 공기정화에 좋은 관엽식물',
            image: 'https://images.unsplash.com/photo-1416879595882-3373a0480b5b?w=400&h=300&fit=crop&crop=center',
            badges: [],
            isNew: false
        },
        {
            id: 10,
            name: '개업 축하 화분',
            category: 'plant',
            type: 'plant',
            color: 'green',
            purpose: ['congratulation'],
            price: 80000,
            originalPrice: null,
            rating: 4.7,
            reviewCount: 29,
            description: '개업을 축하하는 대형 화분',
            image: 'https://images.unsplash.com/photo-1485955900006-10f4d324d411?w=400&h=300&fit=crop&crop=center',
            badges: ['best'],
            isNew: false
        }
    ]
};

// Category configurations
const categoryConfig = {
    condolence: {
        name: '근조화환',
        description: '고인의 명복을 비는 정성스러운 조의 화환'
    },
    rice: {
        name: '쌀화환',
        description: '실용적이고 의미있는 쌀화환'
    },
    opening: {
        name: '1단·2단화환',
        description: '개업과 행사를 빛내는 화환'
    },
    congratulation: {
        name: '동양란',
        description: '품격있는 동양란으로 축하의 마음을 전합니다'
    },
    western: {
        name: '서양란',
        description: '우아하고 고급스러운 서양란'
    },
    'flower-basket': {
        name: '관엽화분',
        description: '실내 공기정화와 인테리어 효과가 있는 관엽식물'
    },
    bouquet: {
        name: '꽃다발/꽃상자',
        description: '특별한 순간을 더욱 아름답게 만들어줄 꽃다발'
    },
    'flower-board': {
        name: '금전수/스투키',
        description: '행운과 재물을 상징하는 금전수와 스투키'
    },
    'money-tree': {
        name: '꽃바구니',
        description: '다양한 용도로 활용 가능한 꽃바구니'
    }
};

// Global variables
let currentCategory = 'condolence';
let currentProducts = [];
let filteredProducts = [];
let currentSort = 'popular';

// Initialize page
document.addEventListener('DOMContentLoaded', function() {
    initializePage();
});

function initializePage() {
    // Get category from URL
    const urlParams = new URLSearchParams(window.location.search);
    const categoryParam = urlParams.get('category');
    
    if (categoryParam && categoryConfig[categoryParam]) {
        currentCategory = categoryParam;
    }
    
    // Update page content
    updateCategoryInfo();
    loadProducts();
    initializeFilters();
    initializeEventListeners();
}

function updateCategoryInfo() {
    const config = categoryConfig[currentCategory];
    
    document.getElementById('categoryName').textContent = config.name;
    document.getElementById('categoryTitle').textContent = `MD 추천, ${config.description}`;
    document.title = `${config.name} - 꽃집처녀`;
    
    // Update active nav
    document.querySelectorAll('.nav-link').forEach(link => {
        link.classList.remove('active');
        if (link.textContent === config.name) {
            link.classList.add('active');
        }
    });
}

function loadProducts() {
    // category-data.js에서 데이터 가져오기
    if (typeof newProductData !== 'undefined' && newProductData[currentCategory]) {
        currentProducts = newProductData[currentCategory];
    } else {
        currentProducts = productData[currentCategory] || [];
    }
    applyFiltersAndSort();
}

function applyFiltersAndSort() {
    filteredProducts = [...currentProducts];
    
    // Apply sorting
    filteredProducts.sort((a, b) => {
        switch (currentSort) {
            case 'price-low':
                return a.price - b.price;
            case 'price-high':
                return b.price - a.price;
            case 'discount':
                const discountA = a.originalPrice ? ((a.originalPrice - a.price) / a.originalPrice) * 100 : 0;
                const discountB = b.originalPrice ? ((b.originalPrice - b.price) / b.originalPrice) * 100 : 0;
                return discountB - discountA;
            case 'popular':
            default:
                return b.reviewCount - a.reviewCount;
        }
    });
    
    // Render products
    renderProducts();
}

function renderProducts() {
    const productsGrid = document.getElementById('productsGrid');
    
    if (filteredProducts.length === 0) {
        productsGrid.innerHTML = `
            <div class="empty-state">
                <i class="fas fa-search"></i>
                <h3>상품이 없습니다</h3>
                <p>다른 카테고리를 확인해보세요</p>
            </div>
        `;
        return;
    }
    
    productsGrid.innerHTML = filteredProducts.map(product => createProductCard(product)).join('');
    initializeProductCards();
}

function createProductCard(product) {
    const discountRate = product.originalPrice ? Math.round((1 - product.price / product.originalPrice) * 100) : 0;
    
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

function initializeFilters() {
    // 필터 칩 클릭 이벤트
    const filterChips = document.querySelectorAll('.filter-chip');
    filterChips.forEach(chip => {
        chip.addEventListener('click', function() {
            filterChips.forEach(c => c.classList.remove('active'));
            this.classList.add('active');
            // 필터링 로직은 나중에 추가
        });
    });
    
    // 전체보기 버튼
    const filterResetBtn = document.querySelector('.filter-reset-btn');
    if (filterResetBtn) {
        filterResetBtn.addEventListener('click', function() {
            filterChips.forEach(c => c.classList.remove('active'));
            filterChips[0].classList.add('active');
        });
    }
}

function initializeEventListeners() {
    // 추가 이벤트 리스너가 필요한 경우 여기에 작성
}

function initializeProductCards() {
    // Product card clicks
    const productCards = document.querySelectorAll('.product-card');
    productCards.forEach(card => {
        card.addEventListener('click', function(e) {
            if (e.target.closest('.product-actions') || e.target.closest('.add-to-cart') || e.target.closest('.buy-now')) {
                return;
            }
            
            const productId = this.dataset.productId;
            const product = findProductById(productId);
            
            if (product) {
                // Navigate to appropriate product detail page
                switch(product.name) {
                    case '프리미엄 장미 꽃다발':
                        window.location.href = 'product-detail.html';
                        break;
                    case '혼합 꽃다발':
                        window.location.href = 'product-mixed-bouquet.html';
                        break;
                    case '해바라기 꽃다발':
                        window.location.href = 'product-sunflower.html';
                        break;
                    case '관엽식물 화분':
                        window.location.href = 'product-plant.html';
                        break;
                    default:
                        showNotification(`${product.name} 상세페이지로 이동합니다.`);
                }
            }
        });
    });
    
    // Buy now buttons
    const buyNowBtns = document.querySelectorAll('.buy-now');
    buyNowBtns.forEach(btn => {
        btn.addEventListener('click', function(e) {
            e.stopPropagation();
            
            const productId = this.dataset.productId;
            const product = findProductById(productId);
            
            if (product) {
                // Navigate to appropriate product detail page
                switch(product.name) {
                    case '프리미엄 장미 꽃다발':
                        window.location.href = 'product-detail.html';
                        break;
                    case '혼합 꽃다발':
                        window.location.href = 'product-mixed-bouquet.html';
                        break;
                    case '해바라기 꽃다발':
                        window.location.href = 'product-sunflower.html';
                        break;
                    case '관엽식물 화분':
                        window.location.href = 'product-plant.html';
                        break;
                    default:
                        showNotification(`${product.name} 상세페이지로 이동합니다.`);
                        setTimeout(() => {
                            window.location.href = 'product-detail.html';
                        }, 500);
                }
            }
        });
    });
    
    // Add to cart buttons
    const addToCartBtns = document.querySelectorAll('.add-to-cart');
    addToCartBtns.forEach(btn => {
        btn.addEventListener('click', function(e) {
            e.stopPropagation();
            
            const productId = this.dataset.productId;
            const product = findProductById(productId);
            
            // Add loading state
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
    
    // Wishlist buttons
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
    
    // Quick view buttons
    const quickViewBtns = document.querySelectorAll('.quick-view-btn');
    quickViewBtns.forEach(btn => {
        btn.addEventListener('click', function(e) {
            e.stopPropagation();
            
            const productId = this.dataset.productId;
            const product = findProductById(productId);
            
            showNotification(`${product.name} 빠른보기를 표시합니다.`);
        });
    });
}

function findProductById(id) {
    return currentProducts.find(product => product.id == id);
}

// Utility function for notifications
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