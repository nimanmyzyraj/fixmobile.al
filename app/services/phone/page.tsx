import React from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { phoneServices } from "@/lib/data";
import {
  Smartphone,
  Battery,
  Plug,
  Droplets,
  Camera,
  Volume2,
  Clock,
  Shield,
  CheckCircle2,
  ChevronRight,
  Phone,
} from "lucide-react";

export const metadata = {
  title: "Shërbimet e Mirëmbajtjes për Telefonat - Fix Mobile Shop",
  description:
    "Shërbimet profesionale të mirëmbajtjes për telefonat duke përfshirë zëvendësimin e ekranit, zëvendësimin e baterisë, dhe më shumë.",
};

const iconMap: Record<string, React.ElementType> = {
  screen: Smartphone,
  battery: Battery,
  charging: Plug,
  water: Droplets,
  camera: Camera,
  speaker: Volume2,
};

const brands = [
  "Apple iPhone",
  "Samsung Galaxy",
  "Google Pixel",
  "OnePlus",
  "Xiaomi",
  "Huawei",
  "OPPO",
  "Vivo",
];

export default function PhoneServicesPage() {
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
              Servis për Celular
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
                Shërbimet Profesionale të Mirëmbajtjes për Telefonat
              </Badge>
              <h1 className="text-4xl font-bold tracking-tight sm:text-5xl text-balance">
                Shërbimet e Mirëmbajtjes për Telefonat
              </h1>
              <p className="text-lg text-muted-foreground leading-relaxed">
                Nga ekranet e çarë deri në problemet e baterisë, teknikët e
                sertifikuar tanë mund të riparojën çdo problem me telefonin.
                Përfundim i shpejtë, komponentë kaliteti, dhe garanci e
                përfshirë.
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
                  <span className="text-sm">Shërbim në të njëjtën Ditë</span>
                </div>
                <div className="flex items-center gap-2">
                  <Shield className="h-5 w-5 text-muted-foreground" />
                  <span className="text-sm">Garanci 90-ditore</span>
                </div>
              </div>
            </div>
            <div className="relative aspect-square lg:aspect-[4/3]">
              <img
                src="https://images.unsplash.com/photo-1621330396173-e41b1cafd17f?w=800&h=600&fit=crop"
                alt="Phone repair service"
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
              Shërbimet tona të Mirëmbajtjes për Telefonat
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Ne ofrojmë shërbimet gjithëpërfshirëse të mirëmbajtjes për të
              gjitha markat kryesore të telefonave
            </p>
          </div>

          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {phoneServices.map((service) => {
              const Icon = iconMap[service.icon] || Smartphone;
              return (
                <Card
                  key={service.id}
                  className="group hover:border-foreground/20 transition-colors"
                >
                  <CardContent className="p-6">
                    <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-foreground text-background mb-4">
                      <Icon className="h-6 w-6" />
                    </div>
                    <h3 className="text-lg font-semibold mb-2">
                      {service.name}
                    </h3>
                    <p className="text-sm text-muted-foreground mb-4 leading-relaxed">
                      {service.description}
                    </p>
                    <div className="flex items-center justify-between pt-4 border-t border-border">
                      <div>
                        <p className="font-semibold">{service.price}</p>
                        <p className="text-xs text-muted-foreground">
                          {service.duration}
                        </p>
                      </div>
                      <Button size="sm" variant="outline" asChild>
                        <Link href="/contact">Merrni Ofertën</Link>
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-foreground text-background">
        <div className="mx-auto container px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl mb-4">
            Gat tak të Riparoni Telefonin Tuaj?
          </h2>
          <p className="text-background/80 max-w-2xl mx-auto mb-8">
            Na kontaktoni sot për një diagnostikim të lirë. Shumica e punimeve
            zgjidhen në të njëjtën ditë me garantinën tonë 90-ditore.
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
              <Link href="/services/computer">Shërbimet për Kompjuterin</Link>
            </Button>
          </div>
        </div>
      </section>
    </main>
  );
}
