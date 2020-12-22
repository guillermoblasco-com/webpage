import Document, { Html, Head, Main, NextScript } from 'next/document'
import GtmBodyTag from "../src/comps/gtm/GtmBodyTag";

class MyDocument extends Document {
    static async getInitialProps(ctx) {
        const initialProps = await Document.getInitialProps(ctx)
        return { ...initialProps }
    }

    render() {
        return (
            <Html>
                <Head />
                <body>
                <GtmBodyTag />
                    <Main />
                    <NextScript />
                </body>
            </Html>
        )
    }
}

export default MyDocument
