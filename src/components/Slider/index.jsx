import { React } from 'react';
import { Container, LArrow, RArrow, Wrapper, Product } from './styled';
import { useSlider, useSliderUpdate } from '../../utils/SliderContext';
import { product } from '../../utils/productData';

export const Slider = () => {

    const slider = useSlider()
    const toggleSlider = useSliderUpdate()
    const scrollToBuy = () => window.scrollTo({ top: 1014, behavior: "smooth" })


    return (
        <Container>
            <LArrow onClick={() => toggleSlider("l")} />
            <Wrapper style={{ transform: `translateX(${-100 * slider}vw)` }}>
                {product.map((product, index) => (
                    <Product key={index}>

                        <img src={product.image} alt="" />
                        <span />
                        <strong>{product.title}</strong>
                        <h2>{product.price}</h2>
                        <button onClick={() => scrollToBuy()}>buy now!</button>
                    </Product>
                ))}
            </Wrapper>
            <RArrow onClick={() => toggleSlider("r")} />
        </Container>
    );
};
