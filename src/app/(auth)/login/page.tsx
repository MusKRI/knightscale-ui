// **** Library Imports ****

// **** Local Imports ****
import Grid from "@/core/components/ui/grid";
import Flex from "@/core/components/ui/flex";
import { cn } from "@/lib/utils";
import LoginForm from "./_components/LoginForm";

const LoginPage = () => {
  const BlankHeight = `pt-[0px] md:pt-[100px]`;
  return (
    <div
      className={cn(
        "min-h-screen flex items-center justify-center px-space-2 relative",
        BlankHeight
      )}
    >
      <Grid className="grid-cols-templateColumnsMedium gap-x-space-2">
        <Flex
          style={{ gridColumn: 2 }}
          alignItems="center"
          justifyContent="center"
          direction="column"
          className="flex-1 min-w-0"
        >
          <LoginForm />
        </Flex>
      </Grid>
    </div>
  );
};

export default LoginPage;
