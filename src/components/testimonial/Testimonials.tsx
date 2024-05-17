import React from 'react';

interface Testimonial {
  id: number;
  name: string;
  title: string;
  image: string;
  rating: number;
  description: string;
  date: string;
  location: string;
  company: string;
}

const testimonialData: Testimonial[] = [
  {
    id: 1,
    name: 'John Doe',
    title: 'Software Developer',
    image: 'https://via.placeholder.com/150',
    rating: 4,
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
    date: 'May 10, 2022',
    location: 'New York, USA',
    company: 'Company Name'
  },
  {
    id: 2,
    name: 'Jane Smith',
    title: 'Software Developer',
    image: 'https://via.placeholder.com/150',
    rating: 1,
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
    date: 'May 10, 2022',
    location: 'New York, USA',
    company: 'Company Name'
  },
  {
    id: 3,
    name: 'Michael Johnson',
    title: 'Software Developer',
    image: 'https://via.placeholder.com/150',
    rating: 5,
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
    date: 'May 10, 2022',
    location: 'New York, USA',
    company: 'Company Name'
  }
];

const Testimonials: React.FC = () => {
const renderRatingStars = (rating: number) => {
    const stars = [];
    for (let i = 0; i < 5; i++) {
      if (i < rating) {
        stars.push(<img key={i} src="https://assets.website-files.com/63904f663019b0d8edf8d57c/63904f663019b0ce62f8d5ba_Vector.svg" alt="" className="mr-1.5 inline-block w-4 flex-none" />);
      } else {
        stars.push(<img key={i} src="https://assets.website-files.com/63904f663019b0d8edf8d57c/63904f663019b0ce62f8d5ba_Vector_gray.svg" alt="" className="mr-1.5 inline-block w-4 flex-none" />);
      }
    }
    return stars;
  };

  return (
   <div>
      <section className="relative">
        <div className="mx-auto max-w-7xl px-5 py-16 md:px-10 md:py-24 lg:py-32">
          {/* Heading Text */}
          <h2 className="mx-auto mb-6 w-full max-w-3xl text-center text-3xl font-semibold md:mb-12 md:text-5xl">
            What<span className="bg-[url('https://assets.website-files.com/63904f663019b0d8edf8d57c/6391714b7ac2b51acc1a2548_Rectangle%2017%20(1).svg')] bg-contain bg-center bg-no-repeat px-4 text-white">
              Our Clients
            </span>Are Saying
          </h2>
          {/* Testimonial Wall */}
          <div className="mb-8 gap-5 py-4 [column-count:1] md:mb-12 md:[column-count:2] lg:mb-16 lg:[column-count:3]">
            {testimonialData.map(testimonial => (
              <div key={testimonial.id} className="mb-6 gap-6 overflow-hidden rounded-2xl border border-solid border-[#7e7e7e] bg-white p-8">
                <div className="mb-4 flex flex-row">
                  <img src={testimonial.image} alt={testimonial.name} className="mr-4 inline-block h-16 w-16 object-cover" />
                  <div className="flex flex-col">
                    <h6 className="text-base font-semibold">{testimonial.name}</h6>
                    <p className="text-sm text-[#636262]">{testimonial.title}</p>
                  </div>
                </div>
                <p className="mb-4 text-sm text-[#636262]">{testimonial.description}</p>
                <div className="flex mb-2">
                  {renderRatingStars(testimonial.rating)}
                </div>
              </div>
            ))}
          </div>
          <div className="flex flex-col items-center justify-center">
            <a href="#" className="inline-block rounded-xl bg-black px-8 py-4 text-center font-semibold text-white [box-shadow:rgb(19,_83,_254)_6px_6px]">Get Started</a>
          </div>
        </div>
        <img src="https://assets.website-files.com/63904f663019b0d8edf8d57c/63905b9f809b5c8180ce30c5_pattern-1.svg" alt="" className="absolute bottom-0 left-0 right-auto top-auto -z-10 inline-block" />
        <img src="https://assets.website-files.com/63904f663019b0d8edf8d57c/639174a3de7d11bdf3ccbf01_Frame%20427322885.svg" alt="" className="absolute bottom-auto left-auto right-0 top-0 -z-10 inline-block max-[767px]:hidden" />
      </section>
    </div>
  );
};

export default Testimonials;
