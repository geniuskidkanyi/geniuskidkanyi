// Minimal UI component stubs for the existing App.tsx imports

export const Toaster = () => <div data-testid="toaster" />;

export { Toaster as Sonner };

export const TooltipProvider = ({ children }: { children: React.ReactNode }) => <>{children}</>;