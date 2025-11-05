// Product Detail Page JavaScript

document.addEventListener('DOMContentLoaded', function() {
    initializeProductDetail();
});

function initializeProductDetail() {
    initializeImageGallery();
    initializeProductOptions();
    initializeQuantityControls();
    initializeTabs();
    initializeActionButtons();
    initializeDeliveryOptions();
    calculateTotalPrice();
}

// Image Gallery
function initializeImageGallery() {
    const thumbnails = document.querySelectorAll('.thumbnail');
    const mainImage = document.getElementById('mainImage');
    
    thumbnails.forEach(thumb => {
        thumb.addEventListener('click', function() {
            // Remove active class from all thumbnails
            thumbnails.forEach(t => t.classList.remove('active'));
            
            // Add active class to clicked thumbnail
            this.classList.add('active');
            
            // Get the thumbnail image source
            const thumbImg = this.querySelector('img');
            if (thumbImg && mainImage) {
                // Update main image with higher resolution
                const newSrc = thumbImg.src.replace('w=150&h=150', 'w=600&h=600');
                
                // Add fade effect
                mainImage.style.opacity = '0.5';
                
                setTimeout(() => {
                    mainImage.src = newSrc;
                    mainImage.style.opacity = '1';
                }, 150);
            }
        });
    });
}

// Product Options
function initializeProductOptions() {
    const optionButtons = document.querySelectorAll('.option-btn');
    
    optionButtons.forEach(button => {
        button.addEventListener('click', function() {
            const group = this.closest('.option-group');
            const groupButtons = group.querySelectorAll('.option-btn');
            
            // Remove active class from group buttons
            groupButtons.forEach(btn => btn.classList.remove('active'));
            
            // Add active class to clicked button
            this.classList.add('active');
            
            // Recalculate total price
            calculateTotalPrice();
        });
    });
}

// Quantity Controls
function initializeQuantityControls() {
    const quantityInput = document.getElementById('quantity');
    const minusBtn = document.querySelector('.qty-btn.minus');
    const plusBtn = document.querySelector('.qty-btn.plus');
    
    minusBtn.addEventListener('click', function() {
        let currentValue = parseInt(quantityInput.value);
        if (currentValue > 1) {
            quantityInput.value = currentValue - 1;
            calculateTotalPrice();
        }
    });
    
    plusBtn.addEventListener('click', function() {
        let currentValue = parseInt(quantityInput.value);
        if (currentValue < 10) {
            quantityInput.value = currentValue + 1;
            calculateTotalPrice();
        }
    });
    
    quantityInput.addEventListener('change', function() {
        let value = parseInt(this.value);
        if (value < 1) this.value = 1;
        if (value > 10) this.value = 10;
        calculateTotalPrice();
    });
}

// Calculate Total Price
function calculateTotalPrice() {
    const basePrice = getSelectedPrice();
    const extraCost = getSelectedExtra();
    const deliveryCost = getDeliveryCost();
    const quantity = parseInt(document.getElementById('quantity').value);
    
    const total = (basePrice + extraCost + deliveryCost) * quantity;
    
    document.querySelector('.total-amount').textContent = total.toLocaleString() + '원';
}

function getSelectedPrice() {
    const selectedPriceBtn = document.querySelector('.option-group:first-child .option-btn.active');
    return parseInt(selectedPriceBtn.dataset.price) || 65000;
}

function getSelectedExtra() {
    const selectedExtraBtn = document.querySelector('.option-group:nth-child(2) .option-btn.active');
    return parseInt(selectedExtraBtn.dataset.extra) || 0;
}

function getDeliveryCost() {
    const selectedDelivery = document.querySelector('input[name="delivery"]:checked');
    if (selectedDelivery.value === 'same-day') return 5000;
    if (selectedDelivery.value === 'scheduled') return 3000;
    return 0;
}

// Tabs
function initializeTabs() {
    const tabButtons = document.querySelectorAll('.tab-btn');
    const tabPanes = document.querySelectorAll('.tab-pane');
    
    tabButtons.forEach(button => {
        button.addEventListener('click', function() {
            const targetTab = this.dataset.tab;
            
            // Remove active class from all buttons and panes
            tabButtons.forEach(btn => btn.classList.remove('active'));
            tabPanes.forEach(pane => pane.classList.remove('active'));
            
            // Add active class to clicked button and corresponding pane
            this.classList.add('active');
            document.getElementById(targetTab).classList.add('active');
        });
    });
}

// Action Buttons
function initializeActionButtons() {
    const cartBtn = document.querySelector('.btn-cart');
    const buyBtn = document.querySelector('.btn-buy');
    const wishlistBtn = document.querySelector('.btn-wishlist');
    
    cartBtn.addEventListener('click', function() {
        const productData = getProductData();
        
        // Add loading state
        const originalText = this.innerHTML;
        this.innerHTML = '<i class="fas fa-spinner fa-spin"></i> 담는 중...';
        this.disabled = true;
        
        // Simulate API call
        setTimeout(() => {
            this.innerHTML = '<i class="fas fa-check"></i> 담기 완료!';
            this.style.background = '#4caf50';
            this.style.borderColor = '#4caf50';
            
            showNotification('상품이 장바구니에 담겼습니다.');
            
            // Reset button after 2 seconds
            setTimeout(() => {
                this.innerHTML = originalText;
                this.style.background = '';
                this.style.borderColor = '';
                this.disabled = false;
            }, 2000);
        }, 1000);
    });
    
    buyBtn.addEventListener('click', function() {
        const productData = getProductData();
        console.log('구매하기:', productData);
        showNotification('주문 페이지로 이동합니다.');
        // Here you would redirect to checkout page
    });
    
    wishlistBtn.addEventListener('click', function() {
        this.classList.toggle('active');
        const isActive = this.classList.contains('active');
        
        if (isActive) {
            this.innerHTML = '<i class="fas fa-heart"></i>';
            showNotification('위시리스트에 추가되었습니다.');
        } else {
            this.innerHTML = '<i class="far fa-heart"></i>';
            showNotification('위시리스트에서 제거되었습니다.');
        }
    });
}

// Delivery Options
function initializeDeliveryOptions() {
    const deliveryOptions = document.querySelectorAll('input[name="delivery"]');
    
    deliveryOptions.forEach(option => {
        option.addEventListener('change', function() {
            calculateTotalPrice();
        });
    });
}

// Get Product Data
function getProductData() {
    const productName = document.querySelector('.product-header h1').textContent;
    const selectedPrice = getSelectedPrice();
    const selectedExtra = getSelectedExtra();
    const deliveryCost = getDeliveryCost();
    const quantity = parseInt(document.getElementById('quantity').value);
    const messageCard = document.getElementById('messageCard').checked;
    const message = document.querySelector('textarea').value;
    
    return {
        name: productName,
        basePrice: selectedPrice,
        extraCost: selectedExtra,
        deliveryCost: deliveryCost,
        quantity: quantity,
        total: (selectedPrice + selectedExtra + deliveryCost) * quantity,
        messageCard: messageCard,
        message: message,
        selectedOptions: getSelectedOptions()
    };
}

function getSelectedOptions() {
    const options = {};
    
    // Get flower count
    const flowerCountBtn = document.querySelector('.option-group:first-child .option-btn.active');
    options.flowerCount = flowerCountBtn.textContent;
    
    // Get packaging
    const packagingBtn = document.querySelector('.option-group:nth-child(2) .option-btn.active');
    options.packaging = packagingBtn.textContent;
    
    // Get delivery
    const deliveryOption = document.querySelector('input[name="delivery"]:checked');
    options.delivery = deliveryOption.nextElementSibling.querySelector('strong').textContent;
    
    return options;
}

// Review functionality
function initializeReviews() {
    const loadMoreBtn = document.querySelector('.load-more-reviews');
    
    if (loadMoreBtn) {
        loadMoreBtn.addEventListener('click', function() {
            // Simulate loading more reviews
            this.innerHTML = '<i class="fas fa-spinner fa-spin"></i> 로딩 중...';
            
            setTimeout(() => {
                this.textContent = '리뷰 더보기';
                showNotification('추가 리뷰를 불러왔습니다.');
            }, 1000);
        });
    }
}

// Q&A functionality
function initializeQnA() {
    const writeQuestionBtn = document.querySelector('.write-question-btn');
    
    if (writeQuestionBtn) {
        writeQuestionBtn.addEventListener('click', function() {
            showNotification('문의 작성 페이지로 이동합니다.');
            // Here you would show a modal or redirect to Q&A form
        });
    }
}

// Related products
function initializeRelatedProducts() {
    const relatedProducts = document.querySelectorAll('.related-products .product-card');
    
    relatedProducts.forEach(card => {
        card.addEventListener('click', function() {
            const productName = this.querySelector('h4').textContent;
            console.log('Related product clicked:', productName);
            // Here you would navigate to the related product page
        });
    });
}

// Utility function for notifications (reuse from main script)
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

// Initialize additional features
document.addEventListener('DOMContentLoaded', function() {
    initializeReviews();
    initializeQnA();
    initializeRelatedProducts();
});

// Sticky product info on scroll (for desktop)
function initializeStickyInfo() {
    const productInfo = document.querySelector('.product-info');
    const productImages = document.querySelector('.product-images');
    
    if (window.innerWidth > 1024) {
        window.addEventListener('scroll', function() {
            const imagesRect = productImages.getBoundingClientRect();
            const infoRect = productInfo.getBoundingClientRect();
            
            if (imagesRect.bottom < window.innerHeight && infoRect.height < window.innerHeight) {
                productInfo.style.position = 'sticky';
                productInfo.style.top = '100px';
            }
        });
    }
}

// Initialize sticky info
document.addEventListener('DOMContentLoaded', function() {
    initializeStickyInfo();
});

// Handle window resize
window.addEventListener('resize', function() {
    initializeStickyInfo();
});