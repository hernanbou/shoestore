import React from 'react'
import { Container, Content } from './styled'
import { gallery } from '../../utils/galleryData'

export const Gallery = () => {
    return (
        <Container>
            <Content>
                <strong>{gallery[0].title}</strong>
                <img src={gallery[0].img} alt="" />
            </Content>
            <Content>
                <img src={gallery[1].img} alt="" />
                <strong>{gallery[1].title}</strong>
            </Content>
            <Content>
                <strong>{gallery[2].title}</strong>
                <img src={gallery[2].img} alt="" />
            </Content>
        </Container>
    )
}
