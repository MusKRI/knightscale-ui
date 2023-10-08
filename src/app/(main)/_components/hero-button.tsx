"use client";

// **** Library Imports ****
import { useRouter } from "next/navigation";
import { useSession } from "next-auth/react";

// **** Local Imports ****
import Button from "@/core/components/ui/button/Button";

const HeroButton = () => {
  const router = useRouter();
  const session = useSession();

  const handleButtonAction = () => {
    if (session.status === "unauthenticated") {
      router.push("/login");
      return;
    }

    if (session.status === "authenticated") {
      router.push("/browse");
      return;
    }
  };

  return (
    <Button
      variant="primary"
      className="mt-8 px-12 tracking-wide"
      onClick={handleButtonAction}
    >
      Browse
    </Button>
  );
};

export default HeroButton;
