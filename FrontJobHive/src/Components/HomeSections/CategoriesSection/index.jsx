import React, { useEffect, useState } from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, A11y } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import './style.scss'
import { Link } from 'react-router-dom';
const CategoriesSection = () => {
    const [api,setApi] = useState([])
    useEffect(() => {
    fetch("http://localhost:3000/vacancycategories")
    .then(res=>res.json())
    .then(data=>setApi(data))
    }, [])
    
  return (
    <section className='vacancySlider'>
    <div className='vacancySlider_container'>
    <Swiper
      modules={[Navigation, A11y]}
      spaceBetween={50}
      slidesPerView={5}
      navigation={true}
    
    >
        {api.map((x)=>{
           return(
            <SwiperSlide key={x._id}>
               <Link to={`vacancycategory/${x._id}`}> <div className='categoriesBox'>
                {x.category}
                
                </div>
                </Link>
                </SwiperSlide>
           )
        })
        }
      
    </Swiper>
    </div>
    </section>
  )
}

export default CategoriesSection