import React, { useState, useRef } from "react";
import { SliderProvider } from "./utils/SliderContext";
import { Navbar } from "./components/Navbar";
import { Footer } from "./components/Footer";
import { Slider } from "./components/Slider";
import Modal from 'react-modal';
import { Features } from "./components/Features";
import { Goods } from "./components/Goods";
import { Gallery } from "./components/Gallery";
import { Collection } from "./components/Collection";
import { Payment } from "./components/Payment";
import { GlobalStyle } from "./styles/global";

Modal.setAppElement('#root');

function App() {

  const [openModal, setOpenModal] = useState(false)

  function handleModal() {
    setOpenModal(true);
  }
  function handleCloseModal() {
    setOpenModal(false);
  }

  return (

    <SliderProvider>
      <Navbar />
      <Slider />
      <Features />
      <Goods onOpenModal={handleModal} />
      <Gallery />
      <Collection />
      <Footer />
      <Payment
        isOpen={openModal}
        onCloseModal={handleCloseModal} />
      <GlobalStyle />
    </SliderProvider>
  );
}

export default App;
