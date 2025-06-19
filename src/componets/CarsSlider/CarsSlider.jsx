import TitleText from '../TitleText/TitleText';
import { ImagesCarsSlider } from '../../data';
import { Navigation, Pagination } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import React, { useRef } from 'react';

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import './CarsSlider.scss';

export default function CarsSlider() {
  const paginationRef = useRef(null);
  return (
    <div className="cars-slider mt-5">
      <TitleText
        title="Навчальний транспорт"
        description="Сучасні учбові транспортні засоби з механічною та автоматичною коробкою передач."
      />

      <div id="part1" className="block-3 mt-5 container">
        <div className="swiper-container cars-room">
          <Swiper
            modules={[Navigation, Pagination]}
            slidesPerView={1}
            spaceBetween={20}
            effect={'fade'}
            loop={true}
            speed={300}
            navigation={{
              nextEl: '.swiper-button-next',
              prevEl: '.swiper-button-prev'
            }}
            pagination={{
              clickable: true,
              dynamicBullets: true,
              type: 'fraction',
              el: paginationRef.current
            }}
            onBeforeInit={(swiper) => {
              swiper.params.pagination.el = paginationRef.current;
            }}
          >
            <div className="swiper-wrapper">
              {ImagesCarsSlider.map((index, idx) => (
                <SwiperSlide>
                  <img src={index} key={idx} />
                </SwiperSlide>
              ))}
            </div>
            <div className="swiper-controls">
              <div className="swiper-buttons">
                <div className="swiper-button-prev" />
                <div className="swiper-pagination" ref={paginationRef} />
                <div className="swiper-button-next" />
              </div>
            </div>
          </Swiper>
        </div>
      </div>
    </div>
  );
}
