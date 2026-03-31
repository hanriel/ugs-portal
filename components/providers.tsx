'use client'

import { SessionProvider } from "next-auth/react"
import { ReactNode } from "react";
import { ThemeProvider } from "./theme-provider";

interface Props {
    children: ReactNode;
}

const Providers = ({children}: Props) => {
    return <SessionProvider><ThemeProvider
    attribute="class"
    defaultTheme="system"
    enableSystem
    disableTransitionOnChange
    >{children}</ThemeProvider></SessionProvider>
}

export default Providers