import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import Autoplay from "embla-carousel-autoplay";

export default function ImageCarousel() {
  return (
    <Carousel
      className="w-full"
      opts={{ loop: true }}
      plugins={[Autoplay({ delay: 5000, stopOnInteraction: true })]}
    >
      <CarouselContent>
        <CarouselItem>
          <img
            src="/homepage/plus_carousel8.jpg"
            className="h-[50vh] w-full rounded-lg object-cover md:h-[80vh]"
          />
        </CarouselItem>
        <CarouselItem>
          <img
            src="/homepage/plus_carousel2.jpg"
            className="h-[50vh] w-full rounded-lg object-cover md:h-[80vh]"
          />
        </CarouselItem>
        <CarouselItem>
          <img
            src="/homepage/plus_carousel3.jpg"
            className="h-[50vh] w-full rounded-lg object-cover md:h-[80vh]"
          />
        </CarouselItem>
        <CarouselItem>
          <img
            src="/homepage/plus_carousel4.jpg"
            className="h-[50vh] w-full rounded-lg object-cover md:h-[80vh]"
          />
        </CarouselItem>
        <CarouselItem>
          <img
            src="/homepage/plus_carousel5.jpg"
            className="h-[50vh] w-full rounded-lg object-cover md:h-[80vh]"
          />
        </CarouselItem>
        <CarouselItem>
          <img
            src="/homepage/plus_carousel6.jpg"
            className="h-[50vh] w-full rounded-lg object-cover md:h-[80vh]"
          />
        </CarouselItem>
        <CarouselItem>
          <img
            src="/homepage/plus_carousel7.jpg"
            className="h-[50vh] w-full rounded-lg object-cover md:h-[80vh]"
          />
        </CarouselItem>
        <CarouselItem>
          <img
            src="/homepage/plus_carousel1.jpg"
            className="h-[50vh] w-full rounded-lg object-cover md:h-[80vh]"
          />
        </CarouselItem>
      </CarouselContent>
      <CarouselPrevious />
      <CarouselNext />
    </Carousel>
  );
}
