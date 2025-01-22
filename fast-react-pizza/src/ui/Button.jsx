import { Link } from "react-router-dom";
import { cva } from "class-variance-authority";
import clsx from "clsx";

const buttonStyles = cva(
  "inline-block text-sm rounded-full font-semibold uppercase tracking-wide transition-colors duration-300 disabled:cursor-not-allowed focus:outline-none focus:ring focus:ring-offset-2",
  {
    variants: {
      variant: {
        yellow:
          "bg-yellow-400 focus:ring-yellow-300 hover:bg-yellow-300 focus:bg-yellow-300 text-stone-800",
        gray: "border-2 text-stone-400 hover:bg-stone-300 hover:text-stone-800 focus:bg-stone-300 focus:text-stone-800 focus:ring-stone-200",
      },
      size: {
        default: "px-4 py-3 md:px-6 md:py-4",
        sm1: "px-4 py-2 md:px-5 md:py-2.5 text-xs",
        sm2: "px-4 py-2.5 md:px-6 md:py-3.5",
        sm3: "px-2.5 py-1 md:px-3.5 md:py-2.5",
      },
    },
    defaultVariants: {
      variant: "yellow",
      size: "default",
    },
  }
);

function Button({ className, variant, size, to, disabled, onClick, children }) {
  if (to) {
    return (
      <Link
        to={to}
        className={clsx(buttonStyles({ variant, size }), className)}
      >
        {children}
      </Link>
    );
  } else {
    return (
      <button
        className={clsx(buttonStyles({ variant, size }), className)}
        onClick={onClick}
        disabled={disabled}
      >
        {children}
      </button>
    );
  }
}

export default Button;
