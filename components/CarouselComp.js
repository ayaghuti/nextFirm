import { useState } from 'react';
import {
  Carousel,
  CarouselItem,
  CarouselControl,
  // CarouselIndicators,
  CarouselCaption,
  Container
} from 'reactstrap';
import Image from 'next/image'
import slide1 from '../public/slide1.jpg'
import slide2 from '../public/slide2.jpg'
import slide3 from '../public/slide3.jpg'
import slide4 from '../public/slide4.jpg'

const items = [
  {
    src: slide1,
    altText: 'Slide 1',
    caption: 'شما شایسته بهترین ها هستید'
  },
  {
    src: slide2,
    altText: 'Slide 2',
    caption: 'AFARINESH FEKRI FARAZ'
  },
  {
    src: slide3,
    altText: 'Slide 3',
    caption: 'ایده های نو اگر به ثبت برسند تکرار خواهند شد'
  },
  {
    src: slide4,
    altText: 'Slide 4',
    caption: 'اولین قدم در خلق اختراع پرورش و ثبت ایده های نو است'
  },
];

const CarouselComp = () => {
  const [activeIndex, setActiveIndex] = useState(0)
  const [animating, setAnimating] = useState(true)

  
  const onExiting = () => {
    setAnimating(true)
  }
  const onExited = () => {
    setAnimating(false)
  }
  const next = () => {
    // if(animating) return
    const nextIndex = activeIndex === items.length - 1 ? 0 : activeIndex + 1
    setActiveIndex(nextIndex)
  }
  const previous = () => {
    // if(animating) return
    const nextIndex = activeIndex === 0 ? items.length - 1 : activeIndex - 1
    setActiveIndex(nextIndex)
  }
  const goToIndex = newIndex => {
    // if(animating) return
    setActiveIndex(newIndex)
  }

  const slides = items.map((item, c) => {
    return (
      <CarouselItem onExiting={onExiting} onExited={onExited} key={c}>
        <Image src={item.src} layout='responsive' priority alt={item.altText} />
        <CarouselCaption captionHeader={item.caption} />
        {/* <CarouselCaption captionText={item.caption} captionHeader={item.caption} /> */}
      </CarouselItem>
    )
  })

  return ( 
    <>
      <Container className='text-center'>
        <Carousel
          activeIndex={activeIndex}
          next={next}
          previous={previous}
        >
          {/* <CarouselIndicators items={items} activeIndex={activeIndex} onClickHandler={goToIndex} /> */}
          {slides}
          <CarouselControl direction="prev" directionText="Previous" onClickHandler={previous} />
          <CarouselControl direction="next" directionText="Next" onClickHandler={next} />
        </Carousel>
      </Container>
    </>
  );
}
 
export default CarouselComp;