// Hero Slider Variables
let currentSlideIndex = 0;
let slideInterval;

// DOM Content Loaded
document.addEventListener('DOMContentLoaded', function() {
    // Initialize all functionality
    initializeHeroSlider();
    initializeNavigation();
    initializeSearch();
    initializeProductCards();
    initializeQuickOrder();
    initializeAnimations();
    initializeCart();
    initializeMobileMenu();
    initializeHeaderScroll();
});

// Header Scroll Effect
function initializeHeaderScroll() {
    const header = document.querySelector('.header-overlay');
    if (!header) return;
    
    window.addEventListener('scroll', function() {
        if (window.scrollY > 50) {
            header.classList.add('scrolled');
        } else {
            header.classList.remove('scrolled');
        }
    });
}

// Hero Slider Functions
function initializeHeroSlider() {
    // Auto slide every 5 seconds
    slideInterval = setInterval(() => {
        changeSlide(1);
    }, 5000);
    
    // Pause on hover
    const heroSlider = document.querySelector('.hero-slider');
    if (heroSlider) {
        heroSlider.addEventListener('mouseenter', () => {
            clearInterval(slideInterval);
        });
        
        heroSlider.addEventListener('mouseleave', () => {
            slideInterval = setInterval(() => {
                changeSlide(1);
            }, 5000);
        });
    }
}

function changeSlide(direction) {
    const slides = document.querySelectorAll('.slide');
    const dots = document.querySelectorAll('.hero-dot');
    
    if (slides.length === 0) return;
    
    // Remove active class from current slide
    slides[currentSlideIndex].classList.remove('active');
    if (dots[currentSlideIndex]) {
        dots[currentSlideIndex].classList.remove('active');
    }
    
    // Calculate new index
    currentSlideIndex += direction;
    
    // Loop around
    if (currentSlideIndex >= slides.length) {
        currentSlideIndex = 0;
    } else if (currentSlideIndex < 0) {
        currentSlideIndex = slides.length - 1;
    }
    
    // Add active class to new slide
    slides[currentSlideIndex].classList.add('active');
    if (dots[currentSlideIndex]) {
        dots[currentSlideIndex].classList.add('active');
    }
}

function currentSlide(index) {
    const slides = document.querySelectorAll('.slide');
    const dots = document.querySelectorAll('.hero-dot');
    
    if (slides.length === 0) return;
    
    // Remove active class from current slide
    slides[currentSlideIndex].classList.remove('active');
    if (dots[currentSlideIndex]) {
        dots[currentSlideIndex].classList.remove('active');
    }
    
    // Set new index
    currentSlideIndex = index;
    
    // Add active class to new slide
    slides[currentSlideIndex].classList.add('active');
    if (dots[currentSlideIndex]) {
        dots[currentSlideIndex].classList.add('active');
    }
    
    // Reset interval
    clearInterval(slideInterval);
    slideInterval = setInterval(() => {
        changeSlide(1);
    }, 5000);
}

// Navigation functionality
function initializeNavigation() {
    const navLinks = document.querySelectorAll('.nav-link');
    
    navLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            // 링크가 실제 href를 가지고 있으면 정상적으로 이동하도록 허용
            // preventDefault를 제거하여 링크가 정상 작동하도록 함
            
            // Remove active class from all links
            navLinks.forEach(l => l.classList.remove('active'));
            
            // Add active class to clicked link
            this.classList.add('active');
            
            // 링크가 정상적으로 작동하도록 preventDefault 제거
            console.log('Navigation to:', this.textContent);
        });
    });
}

// Search functionality
function initializeSearch() {
    const searchInput = document.querySelector('.search-box input');
    const searchButton = document.querySelector('.search-box button');
    
    function performSearch() {
        const query = searchInput.value.trim();
        if (query) {
            console.log('Searching for:', query);
            // Here you would implement actual search functionality
            alert(`"${query}" 검색 결과를 표시합니다.`);
        }
    }
    
    searchButton.addEventListener('click', performSearch);
    
    searchInput.addEventListener('keypress', function(e) {
        if (e.key === 'Enter') {
            performSearch();
        }
    });
    
    // Search suggestions (placeholder)
    searchInput.addEventListener('input', function() {
        const query = this.value.trim();
        if (query.length > 2) {
            // Here you would show search suggestions
            console.log('Show suggestions for:', query);
        }
    });
}

// Product card interactions
function initializeProductCards() {
    const addToCartButtons = document.querySelectorAll('.add-to-cart');
    const productCards = document.querySelectorAll('.product-card');
    
    addToCartButtons.forEach(button => {
        button.addEventListener('click', function(e) {
            e.stopPropagation();
            
            const productCard = this.closest('.product-card');
            const productName = productCard.querySelector('h4').textContent;
            const productPrice = productCard.querySelector('.sale-price').textContent;
            
            // Add loading state
            const originalText = this.textContent;
            this.innerHTML = '<span class="loading"></span> 담는 중...';
            this.disabled = true;
            
            // Simulate API call
            setTimeout(() => {
                this.textContent = '담기 완료!';
                this.style.background = '#4caf50';
                
                // Show success message
                showNotification(`${productName}이(가) 장바구니에 담겼습니다.`);
                
                // Reset button after 2 seconds
                setTimeout(() => {
                    this.textContent = originalText;
                    this.style.background = '';
                    this.disabled = false;
                }, 2000);
            }, 1000);
        });
    });
    
    // Buy now buttons
    const buyNowBtns = document.querySelectorAll('.buy-now');
    buyNowBtns.forEach(btn => {
        btn.addEventListener('click', function(e) {
            e.stopPropagation();
            
            const productCard = this.closest('.product-card');
            const productName = productCard.querySelector('h4').textContent;
            
            // Navigate to appropriate product detail page
            switch(productName) {
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
                    showNotification(`${productName} 상세페이지로 이동합니다.`);
                    setTimeout(() => {
                        window.location.href = 'product-detail.html';
                    }, 500);
            }
        });
    });
    
    // Product card click for details
    productCards.forEach(card => {
        card.addEventListener('click', function(e) {
            // Don't navigate if clicking on buttons
            if (e.target.closest('.product-actions')) {
                return;
            }
            
            const productName = this.querySelector('h4').textContent;
            console.log('Show product details for:', productName);
            
            // Navigate to appropriate product detail page
            switch(productName) {
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
                    showNotification(`${productName} 상세페이지로 이동합니다.`);
            }
        });
    });
}

// Quick order functionality
function initializeQuickOrder() {
    const quickItems = document.querySelectorAll('.quick-item');
    
    quickItems.forEach(item => {
        item.addEventListener('click', function() {
            const category = this.querySelector('h4').textContent;
            console.log('Quick order for category:', category);
            
            // Add click animation
            this.style.transform = 'scale(0.95)';
            setTimeout(() => {
                this.style.transform = '';
                
                // Navigate to appropriate category page
                if (category === '생일축하' || category === '사랑고백') {
                    window.location.href = 'category.html';
                } else if (category === '축하화환') {
                    window.location.href = 'category.html?category=wreath';
                } else if (category === '화분선물') {
                    window.location.href = 'category.html?category=plant';
                }
            }, 150);
        });
    });
}

// Scroll animations
function initializeAnimations() {
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };
    
    const observer = new IntersectionObserver(function(entries) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
            }
        });
    }, observerOptions);
    
    // Add fade-in class to elements that should animate
    const animateElements = document.querySelectorAll('.product-card, .quick-item, .service-item');
    animateElements.forEach(el => {
        el.classList.add('fade-in');
        observer.observe(el);
    });
}

// Cart functionality
function initializeCart() {
    const cartButton = document.querySelector('.cart-btn');
    let cartCount = 0;
    
    cartButton.addEventListener('click', function(e) {
        e.preventDefault();
        console.log('Show cart');
        // Here you would show cart modal or navigate to cart page
        showNotification('장바구니를 표시합니다.');
    });
    
    // Update cart count (this would be called when items are added)
    window.updateCartCount = function(count) {
        cartCount = count;
        const cartIcon = cartButton.querySelector('i');
        
        // Remove existing badge
        const existingBadge = cartButton.querySelector('.cart-badge');
        if (existingBadge) {
            existingBadge.remove();
        }
        
        // Add new badge if count > 0
        if (count > 0) {
            const badge = document.createElement('span');
            badge.className = 'cart-badge';
            badge.textContent = count;
            badge.style.cssText = `
                position: absolute;
                top: -5px;
                right: -5px;
                background: #e91e63;
                color: white;
                border-radius: 50%;
                width: 20px;
                height: 20px;
                font-size: 12px;
                display: flex;
                align-items: center;
                justify-content: center;
                font-weight: bold;
            `;
            cartButton.style.position = 'relative';
            cartButton.appendChild(badge);
        }
    };
}

// Utility functions
function showNotification(message, type = 'success') {
    // Remove existing notifications
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
    
    // Auto remove after 3 seconds
    setTimeout(() => {
        notification.style.animation = 'slideOutRight 0.3s ease';
        setTimeout(() => {
            if (notification.parentNode) {
                notification.remove();
            }
        }, 300);
    }, 3000);
}

// Add CSS animations for notifications
const style = document.createElement('style');
style.textContent = `
    @keyframes slideInRight {
        from {
            transform: translateX(100%);
            opacity: 0;
        }
        to {
            transform: translateX(0);
            opacity: 1;
        }
    }
    
    @keyframes slideOutRight {
        from {
            transform: translateX(0);
            opacity: 1;
        }
        to {
            transform: translateX(100%);
            opacity: 0;
        }
    }
`;
document.head.appendChild(style);

// Hero slider functionality
function initializeHeroSlider() {
    const slides = document.querySelectorAll('.slide');
    const dots = document.querySelectorAll('.dot');
    let currentSlide = 0;
    let slideInterval;
    
    function showSlide(index) {
        // Remove active class from all slides and dots
        slides.forEach(slide => slide.classList.remove('active'));
        dots.forEach(dot => dot.classList.remove('active'));
        
        // Add active class to current slide and dot
        slides[index].classList.add('active');
        if (dots[index]) {
            dots[index].classList.add('active');
        }
    }
    
    function nextSlide() {
        currentSlide = (currentSlide + 1) % slides.length;
        showSlide(currentSlide);
    }
    
    function goToSlide(index) {
        currentSlide = index;
        showSlide(currentSlide);
        resetInterval();
    }
    
    function resetInterval() {
        clearInterval(slideInterval);
        slideInterval = setInterval(nextSlide, 5000);
    }
    
    // Dot click handlers
    dots.forEach((dot, index) => {
        dot.addEventListener('click', () => {
            goToSlide(index);
        });
    });
    
    // Auto-advance slides every 5 seconds
    if (slides.length > 1) {
        slideInterval = setInterval(nextSlide, 5000);
    }
    
    // Pause on hover
    const heroSection = document.querySelector('.hero');
    if (heroSection) {
        heroSection.addEventListener('mouseenter', () => {
            clearInterval(slideInterval);
        });
        
        heroSection.addEventListener('mouseleave', () => {
            slideInterval = setInterval(nextSlide, 5000);
        });
    }
}

// Initialize hero slider
initializeHeroSlider();

// Mobile Menu functionality
function initializeMobileMenu() {
    const menuToggle = document.querySelector('.mobile-menu-toggle');
    const mainNav = document.querySelector('.main-nav');
    const overlay = document.querySelector('.mobile-menu-overlay');
    const navLinks = document.querySelectorAll('.nav-link');
    const navClose = document.querySelector('.mobile-nav-close');
    
    // Initialize bottom navigation
    initializeBottomNav();
    
    if (!menuToggle) return;
    
    // Function to close menu
    function closeMenu() {
        menuToggle.classList.remove('active');
        mainNav.classList.remove('active');
        overlay.classList.remove('active');
        document.body.style.overflow = '';
    }
    
    // Function to open menu
    function openMenu() {
        menuToggle.classList.add('active');
        mainNav.classList.add('active');
        overlay.classList.add('active');
        document.body.style.overflow = 'hidden';
    }
    
    // Toggle menu
    menuToggle.addEventListener('click', function() {
        if (mainNav.classList.contains('active')) {
            closeMenu();
        } else {
            openMenu();
        }
    });
    
    // Close menu with close button
    if (navClose) {
        navClose.addEventListener('click', closeMenu);
    }
    
    // Close menu when clicking overlay
    if (overlay) {
        overlay.addEventListener('click', closeMenu);
    }
    
    // Close menu when clicking a link
    navLinks.forEach(link => {
        link.addEventListener('click', function() {
            if (window.innerWidth <= 768) {
                closeMenu();
            }
        });
    });
    
    // Close menu on window resize
    window.addEventListener('resize', function() {
        if (window.innerWidth > 768) {
            closeMenu();
        }
    });
}

// Bottom Navigation functionality
function initializeBottomNav() {
    const bottomNavItems = document.querySelectorAll('.bottom-nav-item');
    const currentPath = window.location.pathname;
    const mobileSearchBtn = document.querySelector('.mobile-search-btn');
    const mobileCategoryBtn = document.querySelector('.mobile-category-btn');
    const mobileSearchModal = document.querySelector('.mobile-search-modal');
    const mobileSearchClose = document.querySelector('.mobile-search-close');
    const mobileSearchSubmit = document.getElementById('mobileSearchSubmit');
    const mobileSearchInput = document.getElementById('mobileSearchInput');
    const menuToggle = document.querySelector('.mobile-menu-toggle');
    const mainNav = document.querySelector('.main-nav');
    const overlay = document.querySelector('.mobile-menu-overlay');
    
    bottomNavItems.forEach(item => {
        const href = item.getAttribute('href');
        
        // Set active state based on current page
        if (href && href !== '#' && href !== 'tel:1855-4929') {
            if (currentPath.includes(href) || (currentPath === '/' && href === 'index.html')) {
                item.classList.add('active');
            }
        }
        
        // Add click handler for links only
        if (item.tagName === 'A') {
            item.addEventListener('click', function(e) {
                // Don't prevent default for tel: links
                if (this.getAttribute('href') && this.getAttribute('href').startsWith('tel:')) {
                    return;
                }
                
                // Remove active from all items
                bottomNavItems.forEach(nav => nav.classList.remove('active'));
                
                // Add active to clicked item
                this.classList.add('active');
            });
        }
    });
    
    // Mobile search button
    if (mobileSearchBtn && mobileSearchModal) {
        mobileSearchBtn.addEventListener('click', function() {
            mobileSearchModal.classList.add('active');
            document.body.style.overflow = 'hidden';
            setTimeout(() => {
                mobileSearchInput.focus();
            }, 300);
        });
        
        mobileSearchClose.addEventListener('click', function() {
            mobileSearchModal.classList.remove('active');
            document.body.style.overflow = '';
        });
        
        mobileSearchSubmit.addEventListener('click', function() {
            const query = mobileSearchInput.value.trim();
            if (query) {
                alert(`"${query}" 검색 결과를 표시합니다.`);
                mobileSearchModal.classList.remove('active');
                document.body.style.overflow = '';
            }
        });
        
        mobileSearchInput.addEventListener('keypress', function(e) {
            if (e.key === 'Enter') {
                mobileSearchSubmit.click();
            }
        });
    }
    
    // Mobile category button - opens hamburger menu
    if (mobileCategoryBtn && menuToggle) {
        mobileCategoryBtn.addEventListener('click', function() {
            menuToggle.classList.add('active');
            mainNav.classList.add('active');
            overlay.classList.add('active');
            document.body.style.overflow = 'hidden';
        });
    }
}