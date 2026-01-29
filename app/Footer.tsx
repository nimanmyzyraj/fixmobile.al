import Link from "next/link";
import { Smartphone, Mail, Phone, MapPin } from "lucide-react";

const footerLinks = {
  products: [
    { name: "Telefona", href: "/products?category=phones" },
    { name: "Laptop", href: "/products?category=laptops" },
    { name: "Tablet", href: "/products?category=tablets" },
    { name: "Aksesore", href: "/products?category=accessories" },
  ],
  services: [
    { name: "Riparim Telefoni", href: "/services/phone" },
    { name: "Riparim Laptopi", href: "/services/computer" },
    { name: "Nderrim Ekrani", href: "/services/phone" },
    { name: "Nderrim Baterie", href: "/services/phone" },
  ],
  company: [
    { name: "Na Kontaktoni", href: "/contact" },
    { name: "Vendndodhja e Dyqanit", href: "/contact" },
    { name: "Politika e Garancisë", href: "/contact" },
  ],
};

export function Footer() {
  return (
    <footer className="border-t border-border bg-muted/30">
      <div className="mx-auto container px-6 py-12 lg:px-8">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-4">
          {/* Brand */}
          <div className="space-y-4">
            <Link href="/" className="flex items-center gap-2">
              <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-foreground">
                <Smartphone className="h-5 w-5 text-background" />
              </div>
              <span className="text-xl font-semibold tracking-tight">
                Fix Mobile Shop
              </span>
            </Link>
            <p className="text-sm text-muted-foreground leading-relaxed">
              Fix Mobile Shop operon prej vitit 2015 duke ofruar kualitetin me
              te larte.
            </p>
            <div className="space-y-2 text-sm text-muted-foreground">
              <div className="flex items-center gap-2">
                <MapPin className="h-4 w-4" />
                <span>Rruga Babe Rexha, Tirane AL</span>
              </div>
              <div className="flex items-center gap-2">
                <Phone className="h-4 w-4" />
                <span>355 67 600 2020</span>
              </div>
              <div className="flex items-center gap-2">
                <Mail className="h-4 w-4" />
                <span>nimanmyzyraj1@gmail.com</span>
              </div>
            </div>
          </div>

          {/* Products */}
          <div>
            <h3 className="text-sm font-semibold mb-4">Produktet</h3>
            <ul className="space-y-3">
              {footerLinks.products.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="text-sm text-muted-foreground hover:text-foreground transition-colors"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-sm font-semibold mb-4">Servisi</h3>
            <ul className="space-y-3">
              {footerLinks.services.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="text-sm text-muted-foreground hover:text-foreground transition-colors"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div>
            <h3 className="text-sm font-semibold mb-4">Rreth Nesh</h3>
            <ul className="space-y-3">
              {footerLinks.company.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="text-sm text-muted-foreground hover:text-foreground transition-colors"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="mt-12 border-t border-border pt-8">
          <div className="flex flex-col items-center justify-between gap-4 sm:flex-row">
            <p className="text-sm text-muted-foreground">
              2025 Fix Mobile Shop. All rights reserved.
            </p>
            <div className="flex gap-6">
              <Link
                href="#"
                className="text-sm text-muted-foreground hover:text-foreground transition-colors"
              >
                Privacy Policy
              </Link>
              <Link
                href="#"
                className="text-sm text-muted-foreground hover:text-foreground transition-colors"
              >
                Terms of Service
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
