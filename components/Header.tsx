import { ShoppingCart } from 'lucide-react';
import Link from 'next/link';
import { Button } from './ui/button';
import Container from './ui/container';

const routes = [
  {
    href: '/',
    label: 'Products',
  },
  {
    href: '/',
    label: 'Categories',
  },
  {
    href: '/',
    label: 'On Sale',
  },
];

const Header = () => {
  return (
    <header className="sm:flex sm:justify-between py-3 px-4 border-b">
      <Container>
        <div className="relative px-4 sm:px-6 lg:px-8 flex h-16 items-center justify-between w-full">
          <div className="flex items-center">
            <Link href="/" className="ml-4 lg:ml-0">
              <h1 className="text-xl font-bold">STORE NAME</h1>
            </Link>
          </div>
          <nav className="hidden md:flex items-center mx-6 space-x-4 lg:space-x-6">
            {routes.map((route, i) => (
              <Button asChild variant="ghost" key={i}>
                <Link
                  href={route.href}
                  className="text-sm font-medium transition-colors"
                >
                  {route.label}
                </Link>
              </Button>
            ))}
          </nav>
          <div className="flex items-center">
            <Button
              variant="ghost"
              size="icon"
              className="mr-2"
              aria-label="Shopping Cart"
            >
              <ShoppingCart className="h-6 w-6" />
              <span className="sr-only">Shopping Cart</span>
            </Button>
          </div>
        </div>
      </Container>
    </header>
  );
};

export default Header;
