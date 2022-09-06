import { HeaderContainer } from "./styles";
import { Bag, MagnifyingGlass } from 'phosphor-react'
import logoSvg from '../../assets/logo.svg'

export function Header () {
    return (
        <HeaderContainer>
            <div>
                <ul>
                    <li><img src={ logoSvg } /></li>
                </ul>
                <ul>
                    <li>homem</li>
                    <li>mulher</li>
                    <li>criança</li>
                    <li>customizar</li>
                    <li>
                        <div>
                            <MagnifyingGlass size={24} />
                            <input type="text" placeholder="Pesquisar" />
                        </div>
                    </li>
                </ul>
                <ul>
                    <li><Bag size={34} /></li>
                </ul>
            </div>
        </HeaderContainer>
    )
}