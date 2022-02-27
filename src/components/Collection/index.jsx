import React from 'react'
import { Container, Content } from './styled'
import { gallery } from '../../utils/galleryData'

export const Collection = () => {

    const scrollToTop = () => window.scrollTo({ top: 0, behavior: "smooth" })
    
    return (
        <Container>
            <Content>
                <img src={gallery[3].img} alt="" />
            </Content>
            <Content>
                <strong>{gallery[3].season}</strong>
                <h2>{gallery[3].title}</h2>
                <h3>{gallery[3].new}</h3>
                <button onClick={() => scrollToTop()}>{gallery[3].button}</button>
            </Content>
            <Content>
                <img src={gallery[2].img} alt="" />
            </Content>
        </Container>
    )
}
