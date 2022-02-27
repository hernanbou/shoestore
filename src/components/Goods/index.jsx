import { React, useState, useEffect } from 'react';
import { Container, Product, Details, Colors, Sizes } from './styled';
import { useSlider } from '../../utils/SliderContext';
import { Wrapper } from '../Slider/styled';
import { product } from '../../utils/productData';



export const Goods = ({ onOpenModal }) => {

    const slider = useSlider()

    const [correntImg, setCorrentImg] = useState(0)

    const handleImg = (index) => {
        setCorrentImg(index)
    }

    useEffect(() => {

        setCorrentImg(0)

    }, [slider])

    return (
        <Container>
            <Wrapper style={{ transform: `translateX(${-100 * slider}vw)` }}>
                {product.map((product, index) => (
                    <Product key={index}>
                        <img src={product.colors[correntImg].img} alt="" />
                        <Details>
                            <strong>{product.name}</strong>
                            <h2>{product.price}</h2>
                            <p>{product.desc}</p>
                            <Colors>
                                {product.colors.map((colors, index) => (
                                    <span onClick={() => handleImg(index)} key={index} style={{ background: colors.code }} />
                                ))}
                            </Colors>
                            <Sizes>
                                {product.sizes.map((data, index) => (
                                    <span key={index}>
                                        {data.size}
                                    </span>
                                ))}
                            </Sizes>
                            <button onClick={() => onOpenModal()}> buy now!</button>
                        </Details>
                    </Product>
                ))}
            </Wrapper>
        </Container >
    )
}
