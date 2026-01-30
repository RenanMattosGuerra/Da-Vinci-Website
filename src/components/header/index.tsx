import Link from "next/link";

export function Header() {
  return (
    <header className="w-full py-md text-shade-one bg-shade-five flex justify-center items-center shadow-2xl top-0 sticky z-50">
      <nav className="flex gap-lg font-heading2">
        <Link
          href="/"
          className="transition-colors duration-200 hover:text-shade-two text-size-sm md:text-size-md"
        >
          Home
        </Link>
        <Link
          href="/shop"
          className="transition-colors duration-200 hover:text-shade-two text-size-sm md:text-size-md"
        >
          Shop
        </Link>
        <Link
          href="/about"
          className="transition-colors duration-200 hover:text-shade-two text-size-sm md:text-size-md"
        >
          About
        </Link>
        <Link
          href="/contact"
          className="transition-colors duration-200 hover:text-shade-two text-size-sm md:text-size-md"
        >
          Contact
        </Link>
      </nav>
    </header>
  );
}
