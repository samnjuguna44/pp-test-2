// slider
import React, { useEffect, useState, useRef } from "react";
import styled from "styled-components";
import { Modal } from "reactstrap";
import ImageGallery from "react-image-gallery";

const images = [
  {
    original:
      "https://digital.ihg.com/is/image/ihg/crowne-plaza-nairobi-5515307080-3x2",
    thumbnail:
      "https://digital.ihg.com/is/image/ihg/crowne-plaza-nairobi-5515307080-3x2",
  },
  {
    original:
      "https://digital.ihg.com/is/image/ihg/crowne-plaza-nairobi-6536896792-3x2",
    thumbnail:
      "https://digital.ihg.com/is/image/ihg/crowne-plaza-nairobi-6536896792-3x2",
  },
  {
    original:
      "https://digital.ihg.com/is/image/ihg/crowne-plaza-nairobi-5392839752-3x2",
    thumbnail:
      "https://digital.ihg.com/is/image/ihg/crowne-plaza-nairobi-5392839752-3x2",
  },
  {
    original:
      "https://digital.ihg.com/is/image/ihg/crowne-plaza-nairobi-5392839382-3x2",
    thumbnail:
      "https://digital.ihg.com/is/image/ihg/crowne-plaza-nairobi-5392839382-3x2",
  },
  {
    original:
      "https://digital.ihg.com/is/image/ihg/crowne-plaza-nairobi-5392839243-3x2",
    thumbnail:
      "https://digital.ihg.com/is/image/ihg/crowne-plaza-nairobi-5392839243-3x2",
  },
];

export default function Slider() {
  const [openModal, setOpenModal] = useState(false);
  const [sliderImages] = useState([...images]);

  const setActiveItem = (activeItem) =>
    sliderImages.forEach(function (item, i) {
      if (item === activeItem) {
        sliderImages.splice(i, 1);
        sliderImages.unshift(item);
      }
    });

  const refOne = useRef(null);

  useEffect(() => {
    document.addEventListener("keydown", hideOnEscape, true);
    document.addEventListener("click", hideOnClickOutside, true);
  }, []);

  const hideOnEscape = (e) => {
    if (e.key === "Escape") {
      setOpenModal(false);
    }
  };

  const hideOnClickOutside = (e) => {
    if (refOne.current && !refOne.current.contains(e.target)) {
      setOpenModal(false);
    }
  };

  return (
    <SliderStyles>
      <div className="row">
        <section className="col-md-6">
          <div
            className="image-holder-main"
            onClick={() => {
              setActiveItem(images[0]);
              setOpenModal(true);
            }}
          >
            <img src={images[0].original} alt="" />
          </div>
        </section>
        <section className="col-md-6">
          <section className="picture-grids">
            <div
              className="image-holder"
              onClick={() => {
                setActiveItem(images[1]);
                setOpenModal(true);
              }}
            >
              <img src={images[1].original} alt="" />
            </div>
            <div
              className="image-holder"
              onClick={() => {
                setActiveItem(images[2]);
                setOpenModal(true);
              }}
            >
              <img src={images[2].original} alt="" />
            </div>
          </section>
          <section className="picture-grids">
            <div
              className="image-holder"
              onClick={() => {
                setActiveItem(images[3]);
                setOpenModal(true);
              }}
            >
              <img src={images[3].original} alt="" />
            </div>
            <div
              className="image-holder"
              onClick={() => {
                setActiveItem(images[4]);
                setOpenModal(true);
              }}
            >
              <img src={images[4].original} alt="" />
            </div>
          </section>
        </section>
      </div>

      {/* modals */}
      <div ref={refOne}>
        <Modal size="lg" isOpen={openModal}>
          <ModalStyles>
            <button onClick={() => setOpenModal(false)}>close</button>
            <ImageGallery items={sliderImages} />;
          </ModalStyles>
        </Modal>
      </div>
    </SliderStyles>
  );
}

const SliderStyles = styled.div`
  img {
    width: 100%;
  }

  .col-md-6 {
    margin: 0;
    padding: 0;
  }

  .image-holder-main {
    padding-top: 10px;
    padding-left: 10px;
    cursor: pointer;
  }

  .picture-grids {
    display: flex;
    flex-direction: row;
    justify-content: space-between;

    .image-holder {
      padding-top: 10px;
      padding-left: 10px;
      cursor: pointer;
    }
  }
`;

const ModalStyles = styled.div``;
