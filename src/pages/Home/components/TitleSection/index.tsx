import { Button } from '../../../../components/Button'
import { TextRegular, TextTitle } from '../../../../components/Typograph'
import { TitleSectionContainer } from './styles'

export function TitleSection () {
    return (
        <TitleSectionContainer>
            <div>
                <TextTitle>
                    Tênis Esportivo Para Corrida Top
                </TextTitle>
                <TextRegular color='text-description'>
                    Esse tênis tem o intuito de te deixar ainda mais fitness, focado, e musculoso.
                </TextRegular>
            </div>
            <div>
                <TextTitle size='title-m'>
                    R$ 1.000,00
                </TextTitle>
                <Button text='Comprar' />
            </div>
        </TitleSectionContainer>
    )
}