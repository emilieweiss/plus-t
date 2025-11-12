import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel"
import Autoplay from "embla-carousel-autoplay"

export default function ImageCarousel() {
  return (
    <Carousel 
      className="w-screen" 
      opts={{ loop: true }}
      plugins={[
        Autoplay({ delay: 5000, stopOnInteraction: true })
      ]}
    >
      <CarouselContent>
        <CarouselItem><img src="/homepage/plus_carousel8.jpg" className="rounded-lg w-full h-[50vh] md:h-[calc(100vh-120px)] object-cover" /></CarouselItem>
        <CarouselItem><img src="/homepage/plus_carousel2.jpg" className="rounded-lg w-full h-[50vh] md:h-[calc(100vh-120px)] object-cover" /></CarouselItem>
        <CarouselItem><img src="/homepage/plus_carousel3.jpg" className="rounded-lg w-full h-[50vh] md:h-[calc(100vh-120px)] object-cover" /></CarouselItem>
        <CarouselItem><img src="/homepage/plus_carousel4.jpg" className="rounded-lg w-full h-[50vh] md:h-[calc(100vh-120px)] object-cover" /></CarouselItem>
        <CarouselItem><img src="/homepage/plus_carousel5.jpg" className="rounded-lg w-full h-[50vh] md:h-[calc(100vh-120px)] object-cover" /></CarouselItem>
        <CarouselItem><img src="/homepage/plus_carousel6.jpg" className="rounded-lg w-full h-[50vh] md:h-[calc(100vh-120px)] object-cover" /></CarouselItem>
        <CarouselItem><img src="/homepage/plus_carousel7.jpg" className="rounded-lg w-full h-[50vh] md:h-[calc(100vh-120px)] object-cover" /></CarouselItem>
        <CarouselItem><img src="/homepage/plus_carousel1.jpg" className="rounded-lg w-full h-[50vh] md:h-[calc(100vh-120px)] object-cover" /></CarouselItem>
      </CarouselContent>
      <CarouselPrevious />
      <CarouselNext />
    </Carousel>
  )
}