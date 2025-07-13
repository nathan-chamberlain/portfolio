// pages/_document.tsx
import { Html, Main, NextScript } from 'next/document';

export default function Document() {
    return (
        <Html suppressHydrationWarning>
            <body>
                <Main />
                <NextScript />
            </body>
        </Html>
    );
}