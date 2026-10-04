"use client";

import BlurText from "../BlurText";
import CircularCarousel, {
  CircularCarouselItem,
} from "../CircularCarousel";

const testimonials: CircularCarouselItem[] = [
  {
    src: "https://images.unsplash.com/photo-1560250097-0b93528c311a?w=900&q=80&auto=format&fit=crop",
    alt: "Anonymous trader testimonial",
    title: "Evaluation client",
    subtitle: "Clearer rules and a calmer process",
  },
  {
    src: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=900&q=80&auto=format&fit=crop",
    alt: "Anonymous trader testimonial",
    title: "Evaluation client",
    subtitle: "Better risk awareness and consistency",
  },
  {
    src: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=900&q=80&auto=format&fit=crop",
    alt: "Anonymous trader testimonial",
    title: "Evaluation client",
    subtitle: "A plan that was easier to follow",
  },
  {
    src: "https://images.unsplash.com/photo-1580489944761-15a19d654956?w=900&q=80&auto=format&fit=crop",
    alt: "Anonymous trader testimonial",
    title: "Evaluation client",
    subtitle: "More confidence through each phase",
  },
];

export default function Testimonials() {
  return (
    <section
      aria-labelledby="testimonials-heading"
      className="mt-24 grid items-center gap-8 md:grid-cols-[minmax(0,0.8fr)_minmax(0,1.2fr)] md:gap-12 lg:gap-16"
    >
      <div className="mb-4">
          <h2
            id="testimonials-heading"
            className="flex items-center gap-2 font-header text-primary"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="18"
              height="18"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="lucide lucide-sparkle"
              aria-hidden="true"
            >
              <path d="M9.937 15.5A2 2 0 0 0 8.5 14.063l-6.135-1.582a.5.5 0 0 1 0-.962L8.5 9.936A2 2 0 0 0 9.937 8.5l1.582-6.135a.5.5 0 0 1 .963 0L14.063 8.5A2 2 0 0 0 15.5 9.937l6.135 1.581a.5.5 0 0 1 0 .964L15.5 14.063a2 2 0 0 0-1.437 1.437l-1.582 6.135a.5.5 0 0 1-.963 0z"></path>
            </svg>
            Client Feedback
          </h2>
          <BlurText
            text="Support that makes the process clearer"
            delay={150}
            animateBy="words"
            direction="top"
            className="py-2 font-header text-4xl font-bold"
          />
          <p className="mt-4 max-w-2xl text-textPrimary/70">
            Anonymous feedback themes from traders who value structure,
            accountability, and a more disciplined approach to evaluations.
          </p>
      </div>
      <div className="relative h-105 min-w-0 w-full overflow-hidden sm:h-125 md:mt-0">
        <CircularCarousel
          items={testimonials}
          preset="cylinder"
          intro="rise"
          cardWidth={220}
          aspectRatio={1}
          speed={14}
          captions
          gap={25}
          tilt={-5}
          curve={1}
          perspective={2500}
          autoplay="drift"
          interval={3}
          direction="left"
          momentum={0.6}
          snap
          pauseOnHover
          focusOnClick
          draggable
          parallax={0.3}
          stretch={0.5}
          fadeColor="var(--background)"
          depthFade={0.55}
          innerShade={0.6}
          cornerRadius={12}
        />
      </div>
    </section>
  );
}
