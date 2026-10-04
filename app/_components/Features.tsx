import { cn } from "@/lib/utils";
import {
  ChartNoAxesCombined,
  ClipboardCheck,
  MessagesSquare,
  Route,
} from "lucide-react";

export default function Features() {
  const features = [
    {
      title: "Firm Rule Review",
      description:
        "Understand profit targets, drawdown limits, trading days, and other conditions before starting.",
      icon: <ClipboardCheck size={32} strokeWidth={1.75} aria-hidden="true" />,
    },
    {
      title: "Challenge Planning",
      description:
        "Set out a practical approach based on your account stage and the support available.",
      icon: <Route size={32} strokeWidth={1.75} aria-hidden="true" />,
    },
    {
      title: "Risk Limit Awareness",
      description:
        "Keep the firm's loss limits and restrictions visible throughout the evaluation.",
      icon: <ChartNoAxesCombined size={32} strokeWidth={1.75} aria-hidden="true" />,
    },
    {
      title: "Progress Communication",
      description:
        "Know the current milestone, any issue that needs attention, and the proposed next step.",
      icon: <MessagesSquare size={32} strokeWidth={1.75} aria-hidden="true" />,
    },
  ];

  return (
    <div className="relative z-10 grid w-full grid-cols-1 overflow-hidden rounded-3xl border border-borderPrimary bg-background min-[450px]:grid-cols-2 md:grid-cols-4">
      {features.map((feature) => (
        <Feature key={feature.title} {...feature} />
      ))}
    </div>
  );
}

const Feature = ({
  title,
  description,
  icon,
}: {
  title: string;
  description: string;
  icon: React.ReactNode;
}) => {
  return (
    <div
      className={cn(
        "group/feature relative flex min-h-56 flex-col border-borderPrimary py-6 sm:min-h-64",
        "border-b last:border-b-0 min-[450px]:odd:border-r min-[450px]:even:border-r-0",
        "md:border-b-0 md:border-r md:last:border-r-0",
      )}
    >
      <div className="pointer-events-none absolute inset-0 h-full w-full bg-hoverPrimary opacity-0 transition duration-200 group-hover/feature:opacity-100" />
      <div className="relative z-10 mb-5 px-6 text-primary sm:px-8">{icon}</div>
      <div className="relative z-10 mb-2 px-6 sm:px-8">
        <div className="absolute left-0 inset-y-0 h-6 group-hover/feature:h-8 w-1 rounded-tr-full rounded-br-full bg-muted group-hover/feature:bg-primary transition-all duration-200 origin-center" />
        <span className="inline-block text-textPrimary transition duration-200 group-hover/feature:translate-x-2">
          {title}
        </span>
      </div>
      <p className="relative z-10 max-w-xs px-6 text-sm leading-6 text-textPrimary/70 sm:px-8">
        {description}
      </p>
    </div>
  );
};
