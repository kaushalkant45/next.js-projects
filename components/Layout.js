import Footer from "./Footer";

export default function Layout({ children }) {
  return (
    <div className="min-h-screen flex flex-col bg-black-100">
      <header className="fixed top-0 left-0 w-full bg-blue-600 text-white py-4 z-50">
        <div className="container mx-auto flex justify-between items-center px-4">
          <h1 className="text-3xl font-bold">My Landing Page</h1>
          <nav>
            <a
              href="/"
              className="px-3 py-2 rounded-md text-sm font-medium hover:bg-blue-700"
            >
              Home
            </a>
            <a
              href="/features"
              className="px-3 py-2 rounded-md text-sm font-medium hover:bg-blue-700"
            >
              Features
            </a>
            <a
              href="/pricing"
              className="px-3 py-2 rounded-md text-sm font-medium hover:bg-blue-700"
            >
              Pricing
            </a>
            <a
              href="/contact"
              className="px-3 py-2 rounded-md text-sm font-medium hover:bg-blue-700"
            >
              Contact
            </a>
          </nav>
        </div>
      </header>
      <main className="flex-grow container mx-auto px-4 py-16 text-center mt-20 mb-16">
        {children}
      </main>
      <footer className="fixed bottom-0 left-0 w-full">
        <Footer />
      </footer>
    </div>
  );
}
