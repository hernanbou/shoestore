import React from 'react'
import Modal from 'react-modal';
import { Container } from './styled'
import { payment } from '../../utils/paymentData'


export const Payment = ({ isOpen, onCloseModal }) => {


    return (

        <Modal
            isOpen={isOpen}
            onRequestClose={onCloseModal}
            overlayClassName="react-modal-overlay"
            className="react-modal-content"
        >
            <Container>
                <h3>{payment[0].title}</h3>
                <label>{payment[0].name}</label>
                <input type="text" placeholder={payment[0].nameInput} />
                <label>{payment[0].phone}</label>
                <input type="text" placeholder={payment[0].phoneInput} />
                <label>{payment[0].ads}</label>
                <input type="text" placeholder={payment[0].adsInput} />
                <h3>{payment[0].cInfo}</h3>
                <section>
                    <img src={payment[0].card[0].img} alt={payment[0].card[0].alt} />
                    <img src={payment[0].card[1].img} alt={payment[0].card[1].alt} />
                </section>
                <input type="password" placeholder={payment[0].cInfoInput} />
                <footer>
                    <input type="text" placeholder={payment[0].mInput} />
                    <input type="text" placeholder={payment[0].yInput} />
                    <input type="text" placeholder={payment[0].cvvInput} />
                </footer>
                <button onClick={() => onCloseModal()}>{payment[0].button}</button>
                <span onClick={() => onCloseModal()}>{payment[0].span}</span>
            </Container>
        </Modal>
    )
}
