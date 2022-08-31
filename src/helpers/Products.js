let p1 = {id : "1", name: 'Basic Black T-Shirt', category : 'shirts', price : 15, stock : 10, brand : 'The Winter Store Apparel Company',description : '100% Hand Woven Cotton', newSeason : true, url : 'https://static.dafiti.com.ar/p/topper-6959-873019-1-zoom.jpg'}
let p2 = {id : "2", name: 'Extra-Denim Jean', category : 'pants', price : 40, stock : 6, brand : 'The Winter Store Apparel Company', description : 'Classic, yet stylish', newSeason : false, url : 'https://http2.mlstatic.com/D_NQ_NP_663600-MLA43732813599_102020-W.jpg'}
let p3 = {id : "3", name: 'Regular White Shirt', category : 'shirts', price : 25, stock : 20, brand : 'The Winter Store Apparel Company', description : 'Ideal for Business Meetings', newSeason : false, url : 'https://i.ebayimg.com/thumbs/images/g/c0EAAOSwXTVid0C0/s-l300.jpg'}
let p4 = {id : "4", name: 'OutRider Jacket', category : 'jackets', price : 75, stock : 12, brand : 'The Winter Store Apparel Company', description : 'Take warmth with you', newSeason : true, url : 'https://http2.mlstatic.com/D_NQ_NP_643633-MLA31351644651_072019-O.jpg'}
let p5 = {id : "5", name: 'Bear Market Cap', category : 'accesories', price : 12, stock : 3, brand : 'The Winter Store Apparel Company', description : 'Is the bear market over?', newSeason : true, url : 'https://http2.mlstatic.com/D_NQ_NP_2X_866308-MLM49983765519_052022-F.jpg'}

let products = [];
products.push(p1);
products.push(p2);
products.push(p3);
products.push(p4);
products.push(p5);

const Products = (resolution, delay) => {
    let promesa = new Promise((resolve, reject) => {
        setTimeout(() => {
            if (resolution) {
                resolve(products)
            } else {
                reject("Ha habido un error crítico, lo lamentamos")
            }
        }, delay);
    });
  return (promesa)
}

export default Products;
