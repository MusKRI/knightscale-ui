"use client";

// **** Library Imports ****
import { AnimatePresence, motion, Variants } from "framer-motion";
import { useRouter } from "next/navigation";
import { signOut } from "next-auth/react";
import { toast } from "sonner";

// **** Local Imports *****
import { useMenu } from "./useMenu";
import Link from "next/link";
import Button from "../ui/button/Button";

const menuVariants: Variants = {
  close: {
    y: "-100%",
    opacity: 0,
  },
  open: {
    y: 0,
    opacity: 1,
    transition: {
      when: "beforeChildren",
      staggerChildren: 0.3,
    },
  },
  exit: {
    y: "100%",
    opacity: 0,
    transition: {
      when: "afterChildren",
      staggerChildren: 0.2,
    },
  },
};

const closeIconVariants: Variants = {
  rest: {
    scale: 1,
    rotate: 0,
    transition: {
      duration: 0.5,
    },
  },
  onHover: {
    scale: 0.82,
    rotate: -180,
    transition: {
      duration: 0.4,
    },
  },
};

const Menu = () => {
  const { isOpen, onToggle } = useMenu();
  const router = useRouter();

  const handleSignOut = async () => {
    const loggingout = toast.loading("Logging out...");
    const data = await signOut({ redirect: false, callbackUrl: "/login" });

    toast.dismiss(loggingout);

    toast.success("Logged out!");
    router.push(data.url);
    onToggle(false);
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          className="z-20 fixed inset-0 bg-ks-card-background-color pt-36"
          variants={menuVariants}
          initial="close"
          animate="open"
          exit="exit"
        >
          <motion.div
            className="absolute right-6 top-6 w-12 h-12 flex items-center justify-center rounded-full p-1 cursor-pointer"
            onClick={() => {
              onToggle(false);
            }}
          >
            <motion.svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="currentColor"
              className="w-12 h-12"
              variants={closeIconVariants}
              animate="rest"
              whileHover="onHover"
            >
              <motion.path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M6 18L18 6M6 6l12 12"
              />
            </motion.svg>
          </motion.div>

          <div className="flex flex-col items-center gap-4">
            <Link
              href="/browse/components"
              className="text-4xl font-medium hover:text-ks-brand transition-colors duration-200 h-20 flex items-center px-4 relative "
              onClick={() => onToggle(false)}
            >
              <div className="flex-1 before:content-['<'] before:absolute before:-left-3 after:content-['/>'] after:absolute after:-right-6">
                <span>Components</span>
              </div>
            </Link>

            <Link
              href="/browse/sections"
              className="text-4xl font-medium hover:text-ks-brand transition-colors duration-200 h-20 flex items-center px-4 relative "
              onClick={() => onToggle(false)}
            >
              <div className="flex-1 before:content-['<'] before:absolute before:-left-3 after:content-['/>'] after:absolute after:-right-6">
                <span>Sections</span>
              </div>
            </Link>
          </div>

          <div className="p-4 flex items-center justify-center">
            <Button variant="primary" onClick={handleSignOut}>
              Log out
            </Button>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default Menu;
