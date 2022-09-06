import { MainProduct, OtherImages, ProductSectionContainer } from "./styles";
import ShoesImage from '../../../../assets/tenis-1-ampliado.png';
import Shoes2Image from '../../../../assets/tenis-1-galeria.png';
import Shoes3Image from '../../../../assets/tenis-2-galeria.png';
import Shoes4Image from '../../../../assets/tenis-3-galeria.png';

export function ProductSection () {
    return (
        <ProductSectionContainer>
            <MainProduct>
                <img src={ ShoesImage } />
            </MainProduct>
            <OtherImages>
                <img src={ Shoes2Image } />
                <img src={ Shoes3Image } />
                <img src={ Shoes4Image } />
            </OtherImages>
        </ProductSectionContainer>
    )
}