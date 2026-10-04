import { cn } from "@/lib/utils";
import {
  ChartNoAxesCombined,
  ClipboardCheck,
  MessagesSquare,
  Route,
} from "lucide-react";

const features = [
  {
    title: "Firm Rule Review",
    description:
      "Understand profit targets, drawdown limits, trading days, and other conditions before starting.",
    icon: ClipboardCheck,
  },
  {
    title: "Challenge Planning",
    description:
      "Set out a practical approach based on your account stage and the support available.",
    icon: Route,
  },
  {
    title: "Risk Limit Awareness",
    description:
      "Keep the firm's loss limits and restrictions visible throughout the evaluation.",
    icon: ChartNoAxesCombined,
  },
  {
    title: "Progress Communication",
    description:
      "Know the current milestone, any issue that needs attention, and the proposed next step.",
    icon: MessagesSquare,
  },
];

export default function Features() {
  return (
    <div className="grid w-full grid-cols-1 overflow-hidden rounded-3xl border border-borderPrimary bg-backgroundSecondary min-[450px]:grid-cols-2 md:grid-cols-4">
      {features.map((feature) => (
        <Feature key={feature.title} {...feature} />
      ))}
    </div>
  );
}

const Feature = ({
  title,
  description,
  icon: Icon,
}: {
  title: string;
  description: string;
  icon: typeof ClipboardCheck;
}) => {
  return (
    <article
      className={cn(
        "group/feature relative flex min-h-56 flex-col border-borderPrimary py-6 sm:min-h-64",
        "border-b last:border-b-0 min-[450px]:odd:border-r min-[450px]:even:border-r-0",
        "md:border-b-0 md:border-r md:last:border-r-0",
      )}
    >
      <div className="pointer-events-none absolute inset-0 bg-hoverPrimary opacity-0 transition-opacity duration-200 group-hover/feature:opacity-100" />
      <Icon
        className="relative z-10 mb-5 ml-6 size-8 text-primary sm:ml-8"
        strokeWidth={1.75}
        aria-hidden="true"
      />
      <h2 className="relative z-10 mb-2 px-6 font-header text-lg font-semibold text-textPrimary sm:px-8">
        <span className="absolute inset-y-0 left-0 h-6 w-1 rounded-r-full bg-muted transition-all duration-200 group-hover/feature:h-8 group-hover/feature:bg-primary" />
        <span className="inline-block transition-transform duration-200 group-hover/feature:translate-x-2">
          {title}
        </span>
      </h2>
      <p className="relative z-10 max-w-xs px-6 text-sm leading-6 text-textPrimary/70 sm:px-8">
        {description}
      </p>
    </article>
  );
};
