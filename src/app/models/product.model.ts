class ProductModel {

    id: number
    type: string
    name: string
    brand: string
    price: number = 0
    fakePrice: number = 0
    discountPercentage: string
    rating: number
    images: ProductImageModel

}

class ProductImageModel {

    gallery: string[]
    commom: ProductImageCommomModel;

}

class ProductImageCommomModel {

    logoPath: string
    imageSmPath: string
    imageMdPath: string
    imageMmdPath: string
    imageLgPath: string
    imageXxlPath: string
}

export {
    ProductModel,
    ProductImageModel,
    ProductImageCommomModel
}