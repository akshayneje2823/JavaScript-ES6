let cart = ["shirts", "jeans", "shoes"];


let promise = createOrder(cart);

promise
    .then(orderId => {
        return processToPayment(orderId)
    }).then(payInfo => {
        return completedOrder(payInfo)
    })
    .then(orderInfo =>
        console.log(orderInfo)
    )
    .catch(err => console.log(err.message))

function createOrder(card) {

    const pr = new Promise(function (resolve, reject) {
        // reject 
        if (!validCart(card)) {
            const err = new Error("Cart is not valid!")
            reject(err)
        }

        const orderId = '12837987';

        // resolve
        if (orderId) {
            setTimeout(() => {
                resolve(orderId);
                console.log(orderId)
            }, 2000)
        };

    });

    // returning promise
    return pr

}


function validCart() {
    return true
};


function processToPayment(orderId) {
    return new Promise(function (resolve, reject) {
        setTimeout(() => {
            resolve("Payment successful!");
            console.log("Payment successful!")
        }, 2000)
    })
};


function completedOrder(payInfo) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve('SuccessFully Ordered')
        }, 2000)
    })
};
// console.log(promise)