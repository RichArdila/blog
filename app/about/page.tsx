// src/pages/about.tsx

import Image from "next/image";
import { FC } from "react";

const About: FC = () => {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6">About Us</h1>
      <p className="mb-4">
        Welcome to May Decorations, where we specialize in creating stunning
        balloon decorations for birthday parties and corporate events. Our goal
        is to bring a touch of magic and elegance to every occasion with our
        unique and vibrant balloon designs.
      </p>
      <p className="mb-4">
        Whether you're planning an intimate birthday celebration or a grand
        corporate event, we offer a wide range of balloon arrangements tailored
        to suit your needs. From whimsical birthday themes to sophisticated
        corporate setups, our designs are crafted to make your event
        unforgettable.
      </p>

      <div className="mb-8">
        <Image
          src="/product1.jpg"
          alt="Colorful Balloon Decorations for Birthday Party"
          width={800}
          height={500}
          className="object-cover w-full h-auto"
        />
      </div>

      <p>
        Our team of expert designers is passionate about bringing your vision to
        life. We work closely with you to ensure that every detail is perfect
        and every balloon arrangement is tailored to your event's theme and
        style. Thank you for choosing us to add a special touch to your
        celebrations.
      </p>
    </div>
  );
};

export default About;
