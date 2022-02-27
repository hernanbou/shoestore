import { React } from 'react';
import { Container, Content, Menu } from "./styled";
import { useSliderUpdate } from '../../utils/SliderContext';
import { item } from '../../utils/navbarData'




export const Navbar = () => {

  const toggleSlider = useSliderUpdate()


  return (
    <Container>
      <Content>
        <a href="#">
          <img src="./img/sneakers.png" alt="Logo" />
        </a>
        <div>
          <input type="text" placeholder='Search...' />
          <img src="./img/search.png" alt="Search" />
        </div>
        <span>Limited Offer!</span>
      </Content>
      <Menu>
        <ul>
          {item.map((item, index) => (
            <li key={index} onClick={() => toggleSlider(item.id)}>{item.name}</li>
          ))}
        </ul>
      </Menu>
    </Container>
  );
}
