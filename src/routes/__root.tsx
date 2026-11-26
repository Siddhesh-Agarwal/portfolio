import { TanStackDevtools } from "@tanstack/react-devtools";
import { createRootRoute, Outlet } from "@tanstack/react-router";
import { TanStackRouterDevtoolsPanel } from "@tanstack/react-router-devtools";
import { ThemeProvider } from "@/components/theme-provider";
import { TooltipProvider } from "@/components/ui/tooltip";

export const Route = createRootRoute({
  component: () => (
    <ThemeProvider defaultTheme="system">
      <TooltipProvider delayDuration={0}>
        <Outlet />
      </TooltipProvider>
      {import.meta.env.DEV && (
        <TanStackDevtools
          config={{
            position: "bottom-right",
            defaultOpen: true,
          }}
          plugins={[
            {
              name: "Tanstack Router",
              render: <TanStackRouterDevtoolsPanel />,
            },
          ]}
        />
      )}
    </ThemeProvider>
  ),
});
