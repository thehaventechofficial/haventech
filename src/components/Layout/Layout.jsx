'use client'
import { Toaster } from "../ui/toaster";
import { Toaster as Sonner } from "../ui/sonner";
import { TooltipProvider } from "../ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

const queryClient = new QueryClient();

const Layout = ({ children }) => (
    <QueryClientProvider client={queryClient}>
        <TooltipProvider>
            <Toaster />
            <Sonner />
            {children}
        </TooltipProvider>
    </QueryClientProvider>
);

export default Layout;
