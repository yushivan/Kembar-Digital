'use client';

import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';
import { TestimonialCard } from './TestimonialCard';

export function ListTestimonial(params: any) {
    return (
        <div className="py-10 px-5 lg:py-15 lg:px-40">
            <p className="font-source text-center font-bold text-2xl lg:text-4xl mb-5 lg:mb-7">
                {params.blok.headline}
            </p>
            <div className="grid grid-cols-1">
                <div>
                    <Swiper
                        className="testimonial-swiper pb-10"
                        modules={[Pagination]}
                        pagination={{ clickable: true }}
                        loop
                        slidesPerView={1}
                        spaceBetween={10}
                        breakpoints={{
                            640: { slidesPerView: 1, spaceBetween: 10 },
                            768: { slidesPerView: 1, spaceBetween: 10 },
                            1024: { slidesPerView: 3, spaceBetween: 20 },
                        }}
                    >
                        {params.blok.testimonials?.map((testimonial: any) => (
                            <SwiperSlide>
                                <TestimonialCard key={testimonial.uuid} testimonial={testimonial} />
                            </SwiperSlide>
                        ))}
                    </Swiper>
                </div>
            </div>
        </div>
    );
}
