import { ProductSection } from "./components/ProductSection";
import { TitleSection } from "./components/TitleSection";
import { HomeContainer } from "./styles";

export function Homepage () {
    return (
        <HomeContainer>
            <TitleSection />
            <ProductSection />
        </HomeContainer>
    )
}