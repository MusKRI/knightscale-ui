import { authOptions } from "@/app/api/auth/[...nextauth]/route";
import { getServerSession } from "next-auth";

const Browse = async () => {
  // const session = await getServerSession(authOptions);

  return (
    <div className="min-h-screen flex items-center justify-center px-space-2 relative pt-0 md:pt-[60px]">
      Hello
    </div>
  );
};

export default Browse;
