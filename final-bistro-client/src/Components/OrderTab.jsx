// import React from 'react';

import FoodCard from "./FoodCard";
import { Swiper, SwiperSlide } from "swiper/react";
// import { Pagination } from "swiper"; //TODO 
import "swiper/css";
import "swiper/css/pagination";

const OrderTab = ({ items }) => {
    const itemsY = items;
    const pagination = {
        clickable: true,
        renderBullet: function (index, className) {
            return '<span class="' + className + '">' + (index + 1) + "</span>";
        },
    };
    return (
        <div >

            <Swiper
                pagination={pagination}
                // modules={[Pagination]} //TODO
                className="mySwiper"
            >
                <SwiperSlide>
                    <div className='grid md:grid-cols-3 gap-10'>
                        {
                            itemsY.map(item => <FoodCard
                                key={item._id}
                                item={item}
                            ></FoodCard>)
                        }
                    </div>

                </SwiperSlide>

            </Swiper>
        </div>
    );
};

export default OrderTab;