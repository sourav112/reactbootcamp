export const Routes = {
    HOME:"/",
    Product:"/products",
    Single_Product:{
        STATIC:"/product/:productId",
        DYNAMIC:(productId)=>`/product/${productId}`,

    },
}