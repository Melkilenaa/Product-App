
var app = new Vue ({
    el: '#app',
    data:{
        product: 'Socks',
        image: 'src/assets/socks.jpg',
        // inventory: 100,
        inStock: false,
        variants:[
            {variantId: 2234, variantColor: 'green', 
            },
            {variantId: 2235, variantColor: 'blue',
            }
        ],


    }
}
)
