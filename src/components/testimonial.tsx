import React from "react";
import johnImg from "../assets/john.jpg";
import emilyImg from "../assets/emily.png";
import michaelImg from "../assets/mikolo.jpg";

interface Testimonial {
  quote: string;
  name: string;
  role: string;
  image: string;
}

const testimonials: Testimonial[] = [
  {
    quote: "The team made the complex probate process seamless and stress-free.",
    name: "John Smith",
    role: "Satisfied Client",
    image: johnImg,
  },
  {
    quote:
      "Their expertise in inheritance tax law saved my family a significant amount of money.",
    name: "Emily Burgess",
    role: "Grateful Client",
    image: emilyImg,
  },
  {
    quote:
      "They handled my family law case with utmost care and professionalism.",
    name: "Michael Matterezzi",
    role: "Pleased Client",
    image: michaelImg,
  },
];

const Testimonials: React.FC = () => {
  return (
    <section className="bg-gray-100 py-12 px-4">
      <div className="container mx-auto">
      

      <div className="text-center mb-12">
        <h2 className="text-4xl font-semibold text-[#0a043c] uppercase relative inline-block">
          Testimonials
          {/* Underline */}
          <span className="block w-16 h-[3px] bg-[#0a043c] mx-auto mt-2 rounded-full"></span>
        </h2>
      </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="bg-white shadow-lg rounded-xl p-8 border border-gray-300"
            >
              {/* Quote */}
              <p className="text-xl font-light italic mb-6 text-gray-700">
                <span className="text-4xl text-gray-500 font-serif">❝</span>{" "}
                {testimonial.quote}{" "}
                <span className="text-4xl text-gray-500 font-serif">❞</span>
              </p>

              {/* Image */}
              <div className="rounded-lg overflow-hidden mb-6">
                <img
                  src={testimonial.image}
                  alt={testimonial.name}
                  className="w-full h-48 object-cover"
                />
              </div>

              {/* Client Info */}
              <h3 className="text-lg font-semibold">{testimonial.name}</h3>
              <p className="italic text-gray-600 mb-4">{testimonial.role}</p>

              {/* Star Rating */}
              <div className="flex space-x-1 text-yellow-500">
                {Array.from({ length: 5 }).map((_, i) => (
                  <span key={i}>★</span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
