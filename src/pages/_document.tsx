import Document, { Html, Head, Main, NextScript } from 'next/document'

export default class MyDocument extends Document {
  render() {
    return (
      <Html lang="pt-BR">
        <Head />
        <body className="bg-background dark:bg-background-dark">
          <Main />
          <NextScript />
        </body>
      </Html>
    )
  }
}
