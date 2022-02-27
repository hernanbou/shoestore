import React from 'react';
import { Container, Content, About, Menu, Contacts } from './styled'
import { footer } from "../../utils/footerData"
import { contact } from "../../utils/contactData"

export const Footer = () => {
  return (
    <Container>
      <Content>
        {footer.map((footer, index) => (
          <About key={index}>
            <h2>{footer.title}</h2>
            {footer.items.map((data, index) => (
              <ul key={index}>
                <li>{data.item}</li>
              </ul>
            ))}
          </About>
        ))}
      </Content>
      <Menu>
        <Contacts>
          <h2>{contact[0].news}</h2>
          <footer>
            <input type="text" placeholder={contact[0].mail} />
            <button>{contact[0].button}</button>
          </footer>
        </Contacts>
        <Contacts>
          <h2>{contact[0].socials}</h2>
          <ul>
            {contact[0].img.map((data, index) => (
              <li key={index}><img src={data.item} alt="" /></li>
            ))}
          </ul>
        </Contacts>
        <Contacts>
          <span>{contact[0].copyright}</span>
        </Contacts>
      </Menu>
    </Container>
  );
};
