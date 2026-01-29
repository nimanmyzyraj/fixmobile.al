import React from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { computerServices } from "@/lib/data";
import {
  Monitor,
  Battery,
  Keyboard,
  HardDrive,
  ShieldAlert,
  Database,
  Settings,
  Fan,
  Clock,
  Shield,
  ChevronRight,
  Phone,
} from "lucide-react";

export const metadata = {
  title:
    "Shërbimet e Mirëmbajtjes për Kompjuterë dhe Laptopë - Fix Mobile Shop",
  description:
    "Shërbimet profesionale të mirëmbajtjes për laptopë dhe kompjuterë duke përfshirë zëvendësimin e ekranit, përmirësimin e SSD, heqjen e viruseve, dhe më shumë.",
};

const iconMap: Record<string, React.ElementType> = {
  screen: Monitor,
  battery: Battery,
  keyboard: Keyboard,
  upgrade: HardDrive,
  virus: ShieldAlert,
  data: Database,
  os: Settings,
  fan: Fan,
};

const brands = [
  "Apple MacBook",
  "Dell",
  "HP",
  "Lenovo",
  "ASUS",
  "Acer",
  "Microsoft Surface",
  "Samsung",
];

export default function ComputerServicesPage() {
  return (
    <main className="flex-1">
      {/* Breadcrumb */}
      <div className="border-b border-border">
        <div className="mx-auto container px-6 py-4 lg:px-8">
          <nav className="flex items-center gap-2 text-sm text-muted-foreground">
            <Link href="/" className="hover:text-foreground transition-colors">
              Kryefaqja
            </Link>
            <ChevronRight className="h-4 w-4" />
            <span className="text-foreground">
              Shërbimet Kompjuteri
            </span>
          </nav>
        </div>
      </div>

      {/* Hero Section */}
      <section className="relative overflow-hidden bg-muted/30">
        <div className="mx-auto container px-6 py-16 lg:px-8 lg:py-24">
          <div className="grid gap-12 lg:grid-cols-2 items-center">
            <div className="space-y-6">
              <Badge variant="secondary">
                Shërbimet Profesionale të Mirëmbajtjes për Kompjuterin
              </Badge>
              <h1 className="text-4xl font-bold tracking-tight sm:text-5xl text-balance">
                Shërbimet e Mirëmbajtjes për Laptopë dhe Kompjuterë
              </h1>
              <p className="text-lg text-muted-foreground leading-relaxed">
                Riparimi i rregullt për laptopë dhe kompjuterë të të gjitha
                markave. Nga përmirësimet e harduerit deri në çështjet e
                softuerit, ne ju mbulojmë me shërbim të shpejtë dhe të
                besueshëm.
              </p>
              <div className="flex flex-wrap gap-4">
                <Button size="lg" asChild>
                  <Link href="/contact">
                    <Phone className="mr-2 h-4 w-4" />
                    Rezervoni Riparimin
                  </Link>
                </Button>
                <Button size="lg" variant="outline" asChild>
                  <Link href="#services">Shikoni Shërbimet</Link>
                </Button>
              </div>
              <div className="flex items-center gap-6 pt-4">
                <div className="flex items-center gap-2">
                  <Clock className="h-5 w-5 text-muted-foreground" />
                  <span className="text-sm">Përfundim i Shpejtë</span>
                </div>
                <div className="flex items-center gap-2">
                  <Shield className="h-5 w-5 text-muted-foreground" />
                  <span className="text-sm">Garanci 90-ditore</span>
                </div>
              </div>
            </div>
            <div className="relative aspect-square lg:aspect-[4/3]">
              <img
                src="https://images.unsplash.com/photo-1597872200969-2b65d56bd16b?w=800&h=600&fit=crop"
                alt="Computer repair service"
                className="object-cover rounded-2xl w-full h-full"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section id="services" className="py-20">
        <div className="mx-auto container px-6 lg:px-8">
          <div className="text-center space-y-4 mb-12">
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
              Shërbimet tona të Mirëmbajtjes për Kompjuterin
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Shërbimet gjithëpërfshirëse të mirëmbajtjes dhe përmirësimit për
              laptopë dhe kompjuterë desktopiote
            </p>
          </div>

          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {computerServices.map((service) => {
              const Icon = iconMap[service.icon] || Monitor;
              return (
                <Card
                  key={service.id}
                  className="group hover:border-foreground/20 transition-colors"
                >
                  <CardContent className="p-6">
                    <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-foreground text-background mb-4">
                      <Icon className="h-6 w-6" />
                    </div>
                    <h3 className="font-semibold mb-2">{service.name}</h3>
                    <p className="text-sm text-muted-foreground mb-4 leading-relaxed line-clamp-3">
                      {service.description}
                    </p>
                    <div className="flex items-center justify-between pt-4 border-t border-border">
                      <div>
                        <p className="font-semibold text-sm">{service.price}</p>
                        <p className="text-xs text-muted-foreground">
                          {service.duration}
                        </p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* Brands Section */}
      <section className="py-20 bg-muted/30">
        <div className="mx-auto container px-6 lg:px-8">
          <div className="text-center space-y-4 mb-12">
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
              Markat që e Shërbejnë
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Ne riparojmë të gjitha markat kryesore të laptopeve dhe
              kompjuterëve
            </p>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
            {brands.map((brand) => (
              <div
                key={brand}
                className="flex items-center justify-center p-6 bg-background rounded-lg border border-border"
              >
                <span className="font-medium text-sm">{brand}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-foreground text-background">
        <div className="mx-auto container px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl mb-4">
            Probleme me Kompjuterin? Ne Mund T'ju Ndihmojmë
          </h2>
          <p className="text-background/80 max-w-2xl mx-auto mb-8">
            Nga heqja e viruseve deri në përmirësimet e harduerit, teknikët e
            sertifikuar tanë mund të zgjidhin çdo problem me kompjuterin. Na
            kontaktoni për një diagnostikim të lirë.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Button size="lg" variant="secondary" asChild>
              <Link href="/contact">
                <Phone className="mr-2 h-4 w-4" />
                Na Kontaktoni
              </Link>
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-background/30 text-background hover:bg-background/10 bg-transparent"
              asChild
            >
              <Link href="/services/phone">Shërbimet e Telefonit</Link>
            </Button>
          </div>
        </div>
      </section>
    </main>
  );
}
