// import React from "react"
// import Image from "next/image"
// import { twMerge } from "tailwind-merge"

// const TW_CLASSES = {
//   CONTAINER: "bg-zinc-100 py-20",
//   TITLE: "text-3xl font-bold text-center mb-10 text-primary",
//   GRID_CONTAINER: "grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-4",
//   ITEM_CONTAINER: "w-full",
//   ITEM: "bg-white flex flex-col justify-between p-6 rounded-lg shadow-md h-full",
//   QUOTE_IMAGE: "w-6 h-6 mt-4",
//   QUOTE_TEXT: "text-lg",
//   AUTHOR_TEXT: "text-sm text-zinc-600",
// }

// interface QuoteItemProps {
//   image: string
//   text: string
//   author: string
//   width?: number
//   height?: number
// }

// const QuoteItem = ({
//   image,
//   text,
//   author,
//   width = 40,
//   height = 40,
// }: QuoteItemProps) => {
//   return (
//     <div className={twMerge(TW_CLASSES.ITEM_CONTAINER)}>
//       <div className={twMerge(TW_CLASSES.ITEM)}>
//         <p className={twMerge(TW_CLASSES.QUOTE_TEXT)}>{text}</p>
//         <div className="flex items-end">
//           <Image
//             aria-hidden="true"
//             alt="quote"
//             src={image}
//             width={width}
//             height={height}
//             className={twMerge(TW_CLASSES.QUOTE_IMAGE, "mr-5")}
//           />
//           <p className={TW_CLASSES.AUTHOR_TEXT}>{author}</p>
//         </div>
//       </div>
//     </div>
//   )
// }

// const Testimonials = () => {
//   const quotes = [
//     {
//       image: "https://placehold.co/40x40",
//       text: '"Fiquei muito satisfeito com o atendimento da equipe. Eles me ajudaram a encontrar o seguro perfeito para meu veículo."',
//       author: "- João S.",
//     },
//     {
//       image: "https://placehold.co/40x40",
//       text: '"A plataforma online é muito fácil de usar. Eu consegui fazer uma cotação em apenas 2 minutos."',
//       author: "- Maria R.",
//     },
//     {
//       image: "https://placehold.co/40x40",
//       text: '"Excelente serviço! A equipe foi extremamente profissional e atenciosa."',
//       author: "- Carlos T.",
//     },
//   ]

//   return (
//     <section className={TW_CLASSES.CONTAINER}>
//       <div className="container">
//         <h2 className={TW_CLASSES.TITLE}>
//           Confie em nossos clientes satisfeitos
//         </h2>
//         <div className={TW_CLASSES.GRID_CONTAINER}>
//           {quotes.map((quote, index) => (
//             <QuoteItem key={index} {...quote} />
//           ))}
//         </div>
//       </div>
//     </section>
//   )
// }

// export default Testimonials

// src/components/TestimonialSection.jsx
import Image from 'next/image';
import React from 'react';

interface TestimonialItems{
    text: string;
    image: string;
    name: string;
    title: string;
}

interface TestimonialProps {
    testimonial: TestimonialItems;
}

const TestimonialCard = ({ testimonial }:TestimonialProps)  => {
    return (
      <div className="flex flex-col overflow-hidden shadow-xl">
        <div className="flex flex-1 flex-col justify-between bg-white p-6 lg:px-7 lg:py-8">
          <div className="flex-1">
            <div className="flex items-center">
              {[...Array(5)].map((_, i) => (
                <svg key={i} className="size-5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"/>
                </svg>
              ))}
            </div>
            <blockquote className="mt-8 flex-1">
              <p className="font-pj text-lg leading-relaxed text-gray-900">{testimonial.text}</p>
            </blockquote>
          </div>
          <div className="mt-8 flex items-center">
            <Image className="shrink-0 rounded-full object-cover" height={40} width={40} src={testimonial.image} alt={testimonial.name} />
            <div className="ml-4">
              <p className="font-pj text-base font-bold text-gray-900">{testimonial.name}</p>
              <p className="font-pj mt-0.5 text-sm text-gray-600">{testimonial.title}</p>
            </div>
          </div>
        </div>
      </div>
    );
  };
  

const testimonials = [
  {
    id: 1,
    text: "Fiquei muito satisfeito com o atendimento da equipe. Eles me ajudaram a encontrar o seguro perfeito para meu veículo.",
    name: "Leslie Alexander",
    title: "Freelance React Developer",
    image: "https://cdn.rareblocks.xyz/collection/clarity/images/testimonial/4/avatar-male-1.png",
  },
  {
    id: 2,
    text: "A plataforma online é muito fácil de usar. Eu consegui fazer uma cotação em apenas 2 minutos.",
    name: "Jacob Jones",
    title: "Digital Marketer",
    image: "https://cdn.rareblocks.xyz/collection/clarity/images/testimonial/4/avatar-male-2.png",
  },
  {
    id: 3,
    text: "Excelente serviço! A equipe foi extremamente profissional e atenciosa.",
    name: "Jenny Wilson",
    title: "Graphic Designer",
    image: "https://cdn.rareblocks.xyz/collection/clarity/images/testimonial/4/avatar-female.png",
  },
];

const TestimonialSection = () => {
  return (
    <section className="bg-gray-50 py-12 sm:py-16 lg:py-20" id='depoimentos'>
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col items-center">
          <div className="text-center">
            <h2 className="font-pj mt-4 text-3xl font-bold text-primary sm:text-4xl xl:text-5xl">Confie em nossos clientes satisfeitos!</h2>
          </div>
          <div className="mt-8 text-center md:order-3 md:mt-16">
            <a href="#" className="font-pj border-b-2 border-gray-900 pb-2 text-base font-bold leading-7 text-gray-900 transition-all duration-200 hover:border-gray-600">Faça sua cotação agora</a>
          </div>
          <div className="relative mt-10 md:order-2 md:mt-24">
            <div className="absolute -inset-x-1 inset-y-16 md:-inset-x-2 md:-inset-y-6">
              <div className="mx-auto size-full max-w-5xl rounded-3xl opacity-30 blur-lg" style={{background: 'linear-gradient(90deg, #44ff9a -0.55%, #44b0ff 22.86%, #8b44ff 48.36%, #ff6644 73.33%, #ebff70 99.34%)'}}></div>
            </div>
            <div className="relative mx-auto grid max-w-lg grid-cols-1 gap-6 md:max-w-none md:grid-cols-3 lg:gap-10">
              {testimonials.map((testimonial) => (
                <TestimonialCard key={testimonial.id} testimonial={testimonial} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialSection;
