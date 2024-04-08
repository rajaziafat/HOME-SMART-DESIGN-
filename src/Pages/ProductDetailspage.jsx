import ProductConsultation from "../Components/ProductDetail/ProductConsultation"
import ProductDetail from "../Components/ProductDetail/ProductDetail"
import UniqueDesign from "../Components/ProductDetail/UniqueDesign"

function ProductDetailspage() {
    return (
        <div>
            <ProductDetail />
            <UniqueDesign/>
            <ProductConsultation/>
        </div>
    )
}

export default ProductDetailspage
