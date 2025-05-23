import Logo from "./components/Logo"
import Navigation from "./components/Navigation"

export const metadata = {
  title: "the wild oasis",

}

export default function RootLayout({ children }) {
  return (<html lang="en">
    <body>
      <header>
        <Logo />
        <Navigation />
      </header>
      <main>
        {children}
      </main>
      <footer>copyright by the wild oasis</footer>
    </body>
  </html>)
}