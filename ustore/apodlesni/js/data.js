let products = [
    {
        id: 'T0001',
        name: 'Samsung 42" UE43AU8000UXUA',
        cost: 19499,
        img: 'assets/product/samsung42.jpg',
        sklad: 10,
        type: 'Samsung',
        tag: 10,
        smart: true,
        display: 42,
        wifi: true,
    },
    {
        id: 'T0002',
        name: 'LG 55" OLED55A16LA',
        cost: 32000,
        img: 'assets/product/lg55.jpg',
        sklad: 4,
        type: 'LG',
        tag: 3,
        smart: true,
        display: 55,
        wifi: true,
    },
    {
        id: 'T0003',
        name: 'Kivi 32" 32H510KD',
        cost: 6000,
        img: 'assets/product/kivi32.jpg',
        sklad: 3,
        type: 'Kivi',
        tag: 4,
        smart: true,
        display: 32,
        wifi: true,
    },
    {
        id: 'T0004',
        name: 'Xiaomi Mi 32" L32M6-6AEU',
        cost: 7799,
        img: 'assets/product/xiaomi32.jpg',
        sklad: 3,
        type: 'Xiaomi',
        tag: 5,
        smart: true,
        display: 32,
        wifi: true,
    },
    {
        id: 'T0005',
        name: 'Samsung 65" QE65QN90AAUXUA',
        cost: 74999,
        img: 'assets/product/samsung75.jpg',
        sklad: 0,
        type: 'Samsung',
        tag: 2,
        smart: true,
        display: 65,
        wifi: true,
    },
    {
        id: 'T0006',
        name: 'Xiaomi Mi LED TV 4S 55"',
        cost: 23068,
        img: 'assets/product/xiaomi55.jpg',
        sklad: 3,
        type: 'Xiaomi',
        tag: 6,
        smart: true,
        display: 55,
        wifi: true,
    },
    {
        id: 'T0007',
        name: 'LG 43" 43UP75006LF',
        cost: 13999,
        img: 'assets/product/lg43.jpg',
        sklad: 0,
        type: 'LG',
        tag: 7,
        smart: true,
        display: 43,
        wifi: true,
    },
    {
        id: 'T0008',
        name: 'LG 32" 32LM637BPLA',
        cost: 4999,
        img: 'assets/product/lg32.jpg',
        sklad: 3,
        type: 'LG',
        tag: 1,
        smart: false,
        display: 32,
        wifi: false,
    },
    {
        id: 'T0009',
        name: 'Samsung 32" QE32LS03TCUXUA',
        cost: 9999,
        img: 'assets/product/samsung32.jpg',
        sklad: 2,
        type: 'Samsung',
        tag: 12,
        smart: true,
        display: 32,
        wifi: true,
    },
    {
        id: 'T0010',
        name: 'Akai 32" UA32LEZ1T2S',
        cost: 5799,
        img: 'assets/product/akai32.jpg',
        sklad: 5,
        type: 'Akai',
        tag: 0,
        smart: false,
        display: 32,
        wifi: false,
    },
    {
        id: 'T0011',
        name: 'Kivi 55" 55U740LB',
        cost: 16599,
        img: 'assets/product/kivi55.jpg',
        sklad: 5,
        type: 'Kivi',
        tag: 22,
        smart: true,
        display: 55,
        wifi: true,
    },
    {
        id: 'T0012',
        name: 'Samsung 55" QE55Q60AAUXUA*',
        cost: 27999,
        img: 'assets/product/samsung55.jpg',
        sklad: 3,
        type: 'Samsung',
        tag: 10,
        smart: true,
        display: 55,
        wifi: true,
    },
    {
        id: 'T0013',
        name: 'Akai 40" UA32LEZ1T2S',
        cost: 7899,
        img: 'assets/product/akai40.jpg',
        sklad: 0,
        type: 'Akai',
        tag: 11,
        smart: true,
        display: 40,
        wifi: true,
    },
    {
        id: 'T0014',
        name: 'Akai 43" UA32LEZ1T2S',
        cost: 7199,
        img: 'assets/product/akai43.jpg',
        sklad: 7,
        type: 'Akai',
        tag: 14,
        smart: false,
        display: 43,
        wifi: false,
    },
];
function addData() {
    localStorage.setItem('data', JSON.stringify(data));
}