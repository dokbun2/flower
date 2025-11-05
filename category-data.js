// 새로운 카테고리 상품 데이터
const newProductData = {
    celebration: [
        { id: 1, name: '프리미엄 축하 화환', category: 'celebration', price: 150000, rating: 4.9, reviewCount: 127, description: '개업, 승진 등 축하의 마음을 전하는 화려한 화환', image: 'https://cdn.midjourney.com/781b0120-8c5e-4fc7-8d2e-e00f8439266f/0_3.png', badges: ['best'] },
        { id: 2, name: '스탠다드 축하 화환', category: 'celebration', price: 120000, rating: 4.7, reviewCount: 89, description: '품격있는 축하 화환', image: 'https://cdn.midjourney.com/f3006714-a5da-4371-867a-ec9267d48057/0_1.png', badges: [] }
    ],
    condolence: [
        { id: 3, name: '근조 화환 (특)', category: 'condolence', price: 150000, rating: 4.8, reviewCount: 56, description: '고인의 명복을 비는 정성스러운 조의 화환', image: 'https://cdn.midjourney.com/653e5ae0-5981-4418-93af-34fed499ea12/0_2.png', badges: [] },
        { id: 4, name: '근조 화환 (상)', category: 'condolence', price: 120000, rating: 4.7, reviewCount: 45, description: '정성을 담은 근조 화환', image: 'https://cdn.midjourney.com/f3006714-a5da-4371-867a-ec9267d48057/0_3.png', badges: [] }
    ],
    rice: [
        { id: 5, name: '쌀화환 20kg', category: 'rice', price: 100000, rating: 4.6, reviewCount: 73, description: '실용적이고 의미있는 쌀화환', image: 'https://cdn.midjourney.com/781b0120-8c5e-4fc7-8d2e-e00f8439266f/0_3.png', badges: [] }
    ],
    opening: [
        { id: 6, name: '2단 화환', category: 'opening', price: 200000, rating: 4.8, reviewCount: 61, description: '화려한 2단 화환', image: 'https://cdn.midjourney.com/f3006714-a5da-4371-867a-ec9267d48057/0_1.png', badges: ['best'] }
    ],
    congratulation: [
        { id: 7, name: '프리미엄 동양란', category: 'congratulation', price: 180000, rating: 4.9, reviewCount: 94, description: '품격있는 동양란', image: 'https://cdn.midjourney.com/653e5ae0-5981-4418-93af-34fed499ea12/0_2.png', badges: ['best'] }
    ],
    western: [
        { id: 8, name: '호접란', category: 'western', price: 150000, rating: 4.8, reviewCount: 67, description: '우아한 서양란', image: 'https://cdn.midjourney.com/f3006714-a5da-4371-867a-ec9267d48057/0_3.png', badges: [] }
    ],
    'flower-basket': [
        { id: 9, name: '관엽식물 화분', category: 'flower-basket', price: 80000, rating: 4.7, reviewCount: 38, description: '실내 공기정화에 좋은 관엽식물', image: 'https://cdn.midjourney.com/781b0120-8c5e-4fc7-8d2e-e00f8439266f/0_3.png', badges: [] }
    ],
    bouquet: [
        { id: 10, name: '프리미엄 장미 꽃다발', category: 'bouquet', price: 65000, originalPrice: 80000, rating: 4.9, reviewCount: 127, description: '신선한 빨간 장미 꽃다발', image: 'https://cdn.midjourney.com/f3006714-a5da-4371-867a-ec9267d48057/0_1.png', badges: ['sale'] }
    ],
    'flower-board': [
        { id: 11, name: '금전수', category: 'flower-board', price: 50000, rating: 4.6, reviewCount: 45, description: '행운을 상징하는 금전수', image: 'https://cdn.midjourney.com/653e5ae0-5981-4418-93af-34fed499ea12/0_2.png', badges: [] }
    ],
    'money-tree': [
        { id: 12, name: '꽃바구니', category: 'money-tree', price: 70000, rating: 4.7, reviewCount: 52, description: '다양한 용도의 꽃바구니', image: 'https://cdn.midjourney.com/f3006714-a5da-4371-867a-ec9267d48057/0_3.png', badges: [] }
    ]
};
