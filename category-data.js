// 새로운 카테고리 상품 데이터
const newProductData = {
    condolence: [
        { id: 1, name: '근조3단화환-프리미엄', price: 150000, originalPrice: 180000, rating: 4.9, reviewCount: 234, image: 'https://cdn.midjourney.com/653e5ae0-5981-4418-93af-34fed499ea12/0_2.png' },
        { id: 2, name: '근조3단화환-스탠다드', price: 120000, originalPrice: 140000, rating: 4.8, reviewCount: 189, image: 'https://cdn.midjourney.com/f3006714-a5da-4371-867a-ec9267d48057/0_3.png' },
        { id: 3, name: '근조3단화환-베이직', price: 100000, originalPrice: 120000, rating: 4.7, reviewCount: 156, image: 'https://cdn.midjourney.com/781b0120-8c5e-4fc7-8d2e-e00f8439266f/0_3.png' },
        { id: 4, name: '근조4단화환-특대형', price: 200000, originalPrice: 250000, rating: 5.0, reviewCount: 267, image: 'https://cdn.midjourney.com/f3006714-a5da-4371-867a-ec9267d48057/0_1.png' },
        { id: 5, name: '근조3단화환-고급형', price: 130000, originalPrice: 150000, rating: 4.8, reviewCount: 178, image: 'https://cdn.midjourney.com/653e5ae0-5981-4418-93af-34fed499ea12/0_2.png' },
        { id: 6, name: '근조3단화환-화이트', price: 140000, originalPrice: 160000, rating: 4.9, reviewCount: 198, image: 'https://cdn.midjourney.com/f3006714-a5da-4371-867a-ec9267d48057/0_3.png' },
        { id: 7, name: '근조5단화환-최고급', price: 300000, originalPrice: 350000, rating: 5.0, reviewCount: 312, image: 'https://cdn.midjourney.com/781b0120-8c5e-4fc7-8d2e-e00f8439266f/0_3.png' },
        { id: 8, name: '근조3단화환-엘레강스', price: 125000, originalPrice: 145000, rating: 4.7, reviewCount: 167, image: 'https://cdn.midjourney.com/f3006714-a5da-4371-867a-ec9267d48057/0_1.png' }
    ],
    rice: [
        { id: 1, name: '스크린쌀화환20kg-서울배송', price: 135000, originalPrice: 140000, rating: 4.8, reviewCount: 178, image: 'https://cdn.midjourney.com/781b0120-8c5e-4fc7-8d2e-e00f8439266f/0_3.png' },
        { id: 2, name: '스크린쌀화환20kg-지방배송', price: 168000, originalPrice: 173000, rating: 4.7, reviewCount: 156, image: 'https://cdn.midjourney.com/f3006714-a5da-4371-867a-ec9267d48057/0_1.png' },
        { id: 3, name: '스크린쌀화환10kg-서울배송', price: 90000, originalPrice: 100000, rating: 4.7, reviewCount: 145, image: 'https://cdn.midjourney.com/653e5ae0-5981-4418-93af-34fed499ea12/0_2.png' },
        { id: 4, name: '스크린쌀화환10kg-지방배송', price: 103000, originalPrice: 113000, rating: 4.6, reviewCount: 134, image: 'https://cdn.midjourney.com/f3006714-a5da-4371-867a-ec9267d48057/0_3.png' },
        { id: 5, name: '프리미엄쌀화환30kg', price: 200000, originalPrice: 220000, rating: 4.9, reviewCount: 198, image: 'https://cdn.midjourney.com/781b0120-8c5e-4fc7-8d2e-e00f8439266f/0_3.png' },
        { id: 6, name: '쌀화환15kg-서울배송', price: 110000, originalPrice: 120000, rating: 4.7, reviewCount: 167, image: 'https://cdn.midjourney.com/f3006714-a5da-4371-867a-ec9267d48057/0_1.png' }
    ],
    opening: [
        { id: 1, name: '1단 축하화환 글로리', price: 110000, originalPrice: 120000, rating: 4.8, reviewCount: 178, image: 'https://cdn.midjourney.com/f3006714-a5da-4371-867a-ec9267d48057/0_3.png' },
        { id: 2, name: '2단 축하화환 글로리', price: 150000, originalPrice: 180000, rating: 4.9, reviewCount: 198, image: 'https://cdn.midjourney.com/781b0120-8c5e-4fc7-8d2e-e00f8439266f/0_3.png' },
        { id: 3, name: '1단 축하화환 B타입', price: 99000, originalPrice: 109000, rating: 4.7, reviewCount: 156, image: 'https://cdn.midjourney.com/f3006714-a5da-4371-867a-ec9267d48057/0_1.png' },
        { id: 4, name: '1단 축하화환 베이스', price: 110000, originalPrice: 130000, rating: 4.8, reviewCount: 167, image: 'https://cdn.midjourney.com/653e5ae0-5981-4418-93af-34fed499ea12/0_2.png' },
        { id: 5, name: '2단 거베라믹스', price: 190000, originalPrice: 210000, rating: 4.9, reviewCount: 189, image: 'https://cdn.midjourney.com/f3006714-a5da-4371-867a-ec9267d48057/0_3.png' },
        { id: 6, name: '2단 포인트믹스', price: 210000, originalPrice: 220000, rating: 4.8, reviewCount: 178, image: 'https://cdn.midjourney.com/781b0120-8c5e-4fc7-8d2e-e00f8439266f/0_3.png' },
        { id: 7, name: '2단 장미 화환', price: 210000, originalPrice: 230000, rating: 4.9, reviewCount: 203, image: 'https://cdn.midjourney.com/f3006714-a5da-4371-867a-ec9267d48057/0_1.png' },
        { id: 8, name: '2단 라운드 화환', price: 135000, originalPrice: 145000, rating: 4.7, reviewCount: 145, image: 'https://cdn.midjourney.com/653e5ae0-5981-4418-93af-34fed499ea12/0_2.png' },
        { id: 9, name: '축하1단화환 도시루', price: 120000, originalPrice: 140000, rating: 4.8, reviewCount: 167, image: 'https://cdn.midjourney.com/f3006714-a5da-4371-867a-ec9267d48057/0_3.png' },
        { id: 10, name: '2단 장미.르네브 화환', price: 190000, originalPrice: 200000, rating: 4.9, reviewCount: 189, image: 'https://cdn.midjourney.com/781b0120-8c5e-4fc7-8d2e-e00f8439266f/0_3.png' },
        { id: 11, name: '2단 베이직 화환', price: 190000, originalPrice: 210000, rating: 4.8, reviewCount: 178, image: 'https://cdn.midjourney.com/f3006714-a5da-4371-867a-ec9267d48057/0_1.png' },
        { id: 12, name: '2단 포인트혼합', price: 200000, originalPrice: 230000, rating: 4.9, reviewCount: 198, image: 'https://cdn.midjourney.com/653e5ae0-5981-4418-93af-34fed499ea12/0_2.png' }
    ],
    congratulation: [
        { id: 1, name: '프리미엄 동양란', price: 180000, originalPrice: 200000, rating: 4.9, reviewCount: 234, image: 'https://cdn.midjourney.com/653e5ae0-5981-4418-93af-34fed499ea12/0_2.png' },
        { id: 2, name: '스탠다드 동양란', price: 150000, originalPrice: 170000, rating: 4.8, reviewCount: 189, image: 'https://cdn.midjourney.com/f3006714-a5da-4371-867a-ec9267d48057/0_3.png' },
        { id: 3, name: '베이직 동양란', price: 120000, originalPrice: 140000, rating: 4.7, reviewCount: 156, image: 'https://cdn.midjourney.com/781b0120-8c5e-4fc7-8d2e-e00f8439266f/0_3.png' },
        { id: 4, name: '특대형 동양란', price: 250000, originalPrice: 280000, rating: 5.0, reviewCount: 267, image: 'https://cdn.midjourney.com/f3006714-a5da-4371-867a-ec9267d48057/0_1.png' },
        { id: 5, name: '고급형 동양란', price: 200000, originalPrice: 220000, rating: 4.9, reviewCount: 198, image: 'https://cdn.midjourney.com/653e5ae0-5981-4418-93af-34fed499ea12/0_2.png' },
        { id: 6, name: '화이트 동양란', price: 170000, originalPrice: 190000, rating: 4.8, reviewCount: 178, image: 'https://cdn.midjourney.com/f3006714-a5da-4371-867a-ec9267d48057/0_3.png' }
    ],
    western: [
        { id: 1, name: '호접란 프리미엄', price: 180000, originalPrice: 200000, rating: 4.9, reviewCount: 234, image: 'https://cdn.midjourney.com/f3006714-a5da-4371-867a-ec9267d48057/0_3.png' },
        { id: 2, name: '호접란 스탠다드', price: 150000, originalPrice: 170000, rating: 4.8, reviewCount: 189, image: 'https://cdn.midjourney.com/781b0120-8c5e-4fc7-8d2e-e00f8439266f/0_3.png' },
        { id: 3, name: '호접란 베이직', price: 120000, originalPrice: 140000, rating: 4.7, reviewCount: 156, image: 'https://cdn.midjourney.com/f3006714-a5da-4371-867a-ec9267d48057/0_1.png' },
        { id: 4, name: '심비디움', price: 160000, originalPrice: 180000, rating: 4.8, reviewCount: 178, image: 'https://cdn.midjourney.com/653e5ae0-5981-4418-93af-34fed499ea12/0_2.png' },
        { id: 5, name: '덴파레', price: 140000, originalPrice: 160000, rating: 4.7, reviewCount: 167, image: 'https://cdn.midjourney.com/f3006714-a5da-4371-867a-ec9267d48057/0_3.png' },
        { id: 6, name: '온시디움', price: 130000, originalPrice: 150000, rating: 4.6, reviewCount: 145, image: 'https://cdn.midjourney.com/781b0120-8c5e-4fc7-8d2e-e00f8439266f/0_3.png' }
    ],
    'flower-basket': [
        { id: 1, name: '몬스테라 대형', price: 120000, originalPrice: 140000, rating: 4.8, reviewCount: 189, image: 'https://cdn.midjourney.com/781b0120-8c5e-4fc7-8d2e-e00f8439266f/0_3.png' },
        { id: 2, name: '고무나무', price: 80000, originalPrice: 90000, rating: 4.7, reviewCount: 156, image: 'https://cdn.midjourney.com/f3006714-a5da-4371-867a-ec9267d48057/0_1.png' },
        { id: 3, name: '여인초', price: 60000, originalPrice: 70000, rating: 4.6, reviewCount: 134, image: 'https://cdn.midjourney.com/653e5ae0-5981-4418-93af-34fed499ea12/0_2.png' },
        { id: 4, name: '행운목', price: 90000, originalPrice: 100000, rating: 4.7, reviewCount: 167, image: 'https://cdn.midjourney.com/f3006714-a5da-4371-867a-ec9267d48057/0_3.png' },
        { id: 5, name: '드라세나', price: 70000, originalPrice: 80000, rating: 4.6, reviewCount: 145, image: 'https://cdn.midjourney.com/781b0120-8c5e-4fc7-8d2e-e00f8439266f/0_3.png' },
        { id: 6, name: '아레카야자', price: 100000, originalPrice: 120000, rating: 4.8, reviewCount: 178, image: 'https://cdn.midjourney.com/f3006714-a5da-4371-867a-ec9267d48057/0_1.png' }
    ],
    bouquet: [
        { id: 1, name: '프리미엄 장미 꽃다발', price: 65000, originalPrice: 80000, rating: 4.9, reviewCount: 234, image: 'https://cdn.midjourney.com/f3006714-a5da-4371-867a-ec9267d48057/0_1.png' },
        { id: 2, name: '혼합 꽃다발', price: 45000, originalPrice: 55000, rating: 4.7, reviewCount: 189, image: 'https://cdn.midjourney.com/653e5ae0-5981-4418-93af-34fed499ea12/0_2.png' },
        { id: 3, name: '해바라기 꽃다발', price: 35000, originalPrice: 40000, rating: 4.6, reviewCount: 156, image: 'https://cdn.midjourney.com/f3006714-a5da-4371-867a-ec9267d48057/0_3.png' },
        { id: 4, name: '화이트 장미 꽃다발', price: 70000, originalPrice: 85000, rating: 4.8, reviewCount: 198, image: 'https://cdn.midjourney.com/781b0120-8c5e-4fc7-8d2e-e00f8439266f/0_3.png' },
        { id: 5, name: '핑크 카네이션 꽃다발', price: 40000, originalPrice: 50000, rating: 4.5, reviewCount: 145, image: 'https://cdn.midjourney.com/f3006714-a5da-4371-867a-ec9267d48057/0_1.png' },
        { id: 6, name: '백합 꽃다발', price: 55000, originalPrice: 65000, rating: 4.7, reviewCount: 167, image: 'https://cdn.midjourney.com/653e5ae0-5981-4418-93af-34fed499ea12/0_2.png' },
        { id: 7, name: '튤립 꽃다발', price: 50000, originalPrice: 60000, rating: 4.6, reviewCount: 134, image: 'https://cdn.midjourney.com/f3006714-a5da-4371-867a-ec9267d48057/0_3.png' },
        { id: 8, name: '프리지아 꽃다발', price: 38000, originalPrice: 45000, rating: 4.5, reviewCount: 123, image: 'https://cdn.midjourney.com/781b0120-8c5e-4fc7-8d2e-e00f8439266f/0_3.png' }
    ],
    'flower-board': [
        { id: 1, name: '금전수 대형', price: 80000, originalPrice: 90000, rating: 4.8, reviewCount: 189, image: 'https://cdn.midjourney.com/653e5ae0-5981-4418-93af-34fed499ea12/0_2.png' },
        { id: 2, name: '금전수 중형', price: 50000, originalPrice: 60000, rating: 4.7, reviewCount: 156, image: 'https://cdn.midjourney.com/f3006714-a5da-4371-867a-ec9267d48057/0_3.png' },
        { id: 3, name: '스투키 대형', price: 70000, originalPrice: 80000, rating: 4.7, reviewCount: 167, image: 'https://cdn.midjourney.com/781b0120-8c5e-4fc7-8d2e-e00f8439266f/0_3.png' },
        { id: 4, name: '스투키 중형', price: 45000, originalPrice: 55000, rating: 4.6, reviewCount: 145, image: 'https://cdn.midjourney.com/f3006714-a5da-4371-867a-ec9267d48057/0_1.png' },
        { id: 5, name: '금전수+스투키 세트', price: 120000, originalPrice: 140000, rating: 4.9, reviewCount: 198, image: 'https://cdn.midjourney.com/653e5ae0-5981-4418-93af-34fed499ea12/0_2.png' },
        { id: 6, name: '금전수 특대형', price: 150000, originalPrice: 170000, rating: 4.9, reviewCount: 178, image: 'https://cdn.midjourney.com/f3006714-a5da-4371-867a-ec9267d48057/0_3.png' }
    ],
    'money-tree': [
        { id: 1, name: '프리미엄 꽃바구니', price: 90000, originalPrice: 100000, rating: 4.8, reviewCount: 189, image: 'https://cdn.midjourney.com/f3006714-a5da-4371-867a-ec9267d48057/0_3.png' },
        { id: 2, name: '스탠다드 꽃바구니', price: 70000, originalPrice: 80000, rating: 4.7, reviewCount: 167, image: 'https://cdn.midjourney.com/781b0120-8c5e-4fc7-8d2e-e00f8439266f/0_3.png' },
        { id: 3, name: '베이직 꽃바구니', price: 50000, originalPrice: 60000, rating: 4.6, reviewCount: 145, image: 'https://cdn.midjourney.com/f3006714-a5da-4371-867a-ec9267d48057/0_1.png' },
        { id: 4, name: '장미 꽃바구니', price: 85000, originalPrice: 95000, rating: 4.8, reviewCount: 178, image: 'https://cdn.midjourney.com/653e5ae0-5981-4418-93af-34fed499ea12/0_2.png' },
        { id: 5, name: '혼합 꽃바구니', price: 75000, originalPrice: 85000, rating: 4.7, reviewCount: 156, image: 'https://cdn.midjourney.com/f3006714-a5da-4371-867a-ec9267d48057/0_3.png' },
        { id: 6, name: '특대형 꽃바구니', price: 120000, originalPrice: 140000, rating: 4.9, reviewCount: 198, image: 'https://cdn.midjourney.com/781b0120-8c5e-4fc7-8d2e-e00f8439266f/0_3.png' }
    ]
};
