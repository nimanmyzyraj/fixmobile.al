"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { products } from "@/lib/data";
import {
  ArrowRight,
  Smartphone,
  Laptop,
  Wrench,
  Shield,
  Clock,
  Award,
  CheckCircle2,
} from "lucide-react";

const categories = [
  { id: "phones", label: "Telefonat", icon: Smartphone },
  { id: "laptops", label: "Laptopet", icon: Laptop },
  { id: "services", label: "Shërbimet e Mirëmbajtjes", icon: Wrench },
] as const;

type CategoryId = (typeof categories)[number]["id"];

const features = [
  {
    icon: Shield,
    title: "Garanci e Plotë",
    description:
      "Të gjitha produktet dhe shërbime të mirëmbajtjes përfshihen me mbulimintonë të gjithëpërfshirës të garantisë.",
  },
  {
    icon: Clock,
    title: "Shërbim i Shpejtë",
    description:
      "Shumica e punimeve zgjidhen në të njëjtën ditë. Merrni pajisjen tuaj shpejt.",
  },
  {
    icon: Award,
    title: "Teknikë të Sertifikuar",
    description:
      "Ekipi yn i trajnuar dhe i sertifikuar është gati të trajtojë të gjitha markat kryesore.",
  },
];

const repairServices = [
  { name: "Zëvendësimi i Ekranit", price: "Nga 79$" },
  { name: "Zëvendësimi i Baterisë", price: "Nga 49$" },
  { name: "Riparimi i Portit të Karikimit", price: "Nga 39$" },
  { name: "Rikuperimi nga Dëmtimet e Ujit", price: "Nga 99$" },
];

export default function HomePage() {
  const [activeCategory, setActiveCategory] = useState<CategoryId>("phones");

  const filteredProducts = products.filter(
    (p) => p.category === activeCategory,
  );
  const featuredProducts = products.filter((p) => p.featured);

  return (
    <main className="flex-1">
      {/* Category Browser Section */}
      <section className="py-20">
        <div className="mx-auto container px-6 lg:px-8">
          <div className="text-center space-y-4 mb-12">
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
              Produkte dhe shërbime që bëjnë diferencën
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Çdo ditë me më shumë shpejtësi, performancë që ndjehet dhe shërbim
              që i beson.
            </p>
          </div>

          {/* Category Tabs */}
          <div className="flex justify-center mb-10">
            <div className="inline-flex rounded-lg border border-border p-1 bg-muted/50">
              {categories.map((category) => {
                const Icon = category.icon;
                return (
                  <button
                    key={category.id}
                    onClick={() => setActiveCategory(category.id)}
                    className={`cursor-pointer flex items-center gap-2 px-4 py-2.5 text-sm font-medium rounded-md transition-all ${
                      activeCategory === category.id
                        ? "bg-background text-foreground shadow-sm"
                        : "text-muted-foreground hover:text-foreground"
                    }`}
                  >
                    <Icon className="h-4 w-4" />
                    {category.label}
                  </button>
                );
              })}
            </div>
          </div>

          {/* Content based on active category */}
          {activeCategory === "services" ? (
            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
              {repairServices.map((service) => (
                <Card
                  key={service.name}
                  className="group hover:border-foreground/20 transition-colors"
                >
                  <CardContent className="p-6">
                    <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-muted mb-4">
                      <Wrench className="h-6 w-6" />
                    </div>
                    <h3 className="font-semibold mb-2">{service.name}</h3>
                    <p className="text-sm text-muted-foreground mb-4">
                      Shërbimi profesional {service.name.toLowerCase()} për të
                      gjitha markat kryesore.
                    </p>
                    <div className="flex items-center justify-between">
                      <span className="font-semibold">{service.price}</span>
                      <Link
                        href="/services/phone"
                        className="text-sm font-medium hover:underline"
                      >
                        Mëso më shumë
                      </Link>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          ) : (
            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
              {filteredProducts.slice(0, 4).map((product) => (
                <Link key={product.id} href={`/products/${product.id}`}>
                  <Card className="group h-full hover:border-foreground/20 transition-colors overflow-hidden">
                    <div className="relative aspect-square bg-muted">
                      <img
                        src={product.image || "/placeholder.svg"}
                        alt={product.name}
                        className="object-cover group-hover:scale-105 transition-transform duration-300 w-full h-full"
                      />
                      {product.originalPrice && (
                        <Badge
                          className="absolute top-3 left-3"
                          variant="destructive"
                        >
                          Sale
                        </Badge>
                      )}
                    </div>
                    <CardContent className="p-4">
                      <p className="text-xs text-muted-foreground mb-1">
                        {product.brand}
                      </p>
                      <h3 className="font-medium mb-2 truncate">
                        {product.name}
                      </h3>
                      <div className="flex items-center gap-2">
                        <span className="font-semibold">${product.price}</span>
                        {product.originalPrice && (
                          <span className="text-sm text-muted-foreground line-through">
                            ${product.originalPrice}
                          </span>
                        )}
                      </div>
                    </CardContent>
                  </Card>
                </Link>
              ))}
            </div>
          )}

          <div className="text-center mt-10">
            <Button variant="outline" asChild>
              <Link
                href={
                  activeCategory === "services"
                    ? "/services/phone"
                    : "/products"
                }
              >
                Shiko të Gjithë{" "}
                {activeCategory === "services"
                  ? "Shërbimet"
                  : categories.find((c) => c.id === activeCategory)?.label}
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </div>
        </div>
      </section>
    </main>
  );
}
