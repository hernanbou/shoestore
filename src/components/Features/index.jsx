import React from 'react'
import { Container, Feature } from './styled'
import { features } from '../../utils/featuresData';

export const Features = () => {
    return (
        <Container>
            {features.map((features, index) => (
                <Feature key={index}>
                    <img src={features.image} alt="" />
                    <strong>{features.title}</strong>
                    <span>{features.desc}</span>
                </Feature>
            ))}
        </Container>
    )
}
