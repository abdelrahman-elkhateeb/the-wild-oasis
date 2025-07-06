import Logo from "@/app/components/Logo"
import Navigation from "@/app/components/Navigation"
import "@/app/_styles/globals.css";

export const metadata = {
  title: "the wild oasis",

}

export default function RootLayout({ children }) {
  return (<html lang="en">
    <body className="bg-primary-950 text-primary-100">
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