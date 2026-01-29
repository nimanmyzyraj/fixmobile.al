"use client";

import { useState, useMemo, Suspense } from "react";
import Link from "next/link";
import { useSearchParams } from "next/navigation";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { products, type Product } from "@/lib/data";
import {
  Search,
  SlidersHorizontal,
  Grid3X3,
  LayoutGrid,
  ChevronRight,
} from "lucide-react";

const categories = [
  { id: "all", label: "Të Gjitha Produktet" },
  { id: "phones", label: "Telefonat" },
  { id: "laptops", label: "Laptopet" },
  { id: "tablets", label: "Tabletë" },
  { id: "accessories", label: "Aksesorë" },
] as const;

const brands = [
  "Të Gjitha Markat",
  "Apple",
  "Samsung",
  "Google",
  "Dell",
  "Lenovo",
  "HP",
  "ASUS",
  "OnePlus",
];

type CategoryId = (typeof categories)[number]["id"];

function ProductsPageContent() {
  const searchParams = useSearchParams();
  const initialCategory = searchParams.get("category") as CategoryId | null;

  const [activeCategory, setActiveCategory] = useState<CategoryId>(
    initialCategory || "all",
  );
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedBrand, setSelectedBrand] = useState("Të Gjitha Markat");
  const [sortBy, setSortBy] = useState("featured");
  const [viewMode, setViewMode] = useState<"grid" | "compact">("grid");

  const filteredProducts = useMemo(() => {
    let result = [...products];

    // Filter by category
    if (activeCategory !== "all") {
      result = result.filter((p) => p.category === activeCategory);
    }

    // Filter by brand
    if (selectedBrand !== "Të Gjitha Markat") {
      result = result.filter((p) => p.brand === selectedBrand);
    }

    // Filter by search query
    if (searchQuery) {
      const query = searchQuery.toLowerCase();
      result = result.filter(
        (p) =>
          p.name.toLowerCase().includes(query) ||
          p.brand.toLowerCase().includes(query) ||
          p.description.toLowerCase().includes(query),
      );
    }

    // Sort
    switch (sortBy) {
      case "price-low":
        result.sort((a, b) => a.price - b.price);
        break;
      case "price-high":
        result.sort((a, b) => b.price - a.price);
        break;
      case "name":
        result.sort((a, b) => a.name.localeCompare(b.name));
        break;
      case "featured":
      default:
        result.sort((a, b) => (b.featured ? 1 : 0) - (a.featured ? 1 : 0));
    }

    return result;
  }, [activeCategory, selectedBrand, searchQuery, sortBy]);

  return (
    <main className="flex-1">
      <div className="border-b border-border">
        <div className="mx-auto container px-6 py-4 lg:px-8">
          <nav className="flex items-center gap-2 text-sm text-muted-foreground">
            <Link href="/" className="hover:text-foreground transition-colors">
              Kryefaqja
            </Link>
            <ChevronRight className="h-4 w-4" />
            <span className="text-foreground">
              Produktet Tona
            </span>
          </nav>
        </div>
      </div>

      {/* Page Header */}
      <section className="border-b border-border bg-muted/30">
        <div className="mx-auto container px-6 py-12 lg:px-8">
          <h1 className="text-3xl font-bold tracking-tight sm:text-4xl">
            Eksploroni Produktet Tona Premium
          </h1>
          <p className="mt-2 text-muted-foreground">
            Eksploroni koleksionin tonë të telefonatave, laptopeve, tabletëve
            dhe aksesorëve premium
          </p>
        </div>
      </section>

      <div className="mx-auto container px-6 py-8 lg:px-8">
        {/* Filters Bar */}
        <div className="flex flex-col gap-4 mb-8">
          {/* Search and View Toggle */}
          <div className="flex flex-col sm:flex-row gap-4 items-start sm:items-center justify-between">
            <div className="relative w-full sm:w-80">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
              <Input
                type="search"
                placeholder="Kërkoni produktet..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="pl-9"
              />
            </div>
            <div className="flex items-center gap-4">
              <div className="flex items-center gap-2 text-sm text-muted-foreground">
                <span>{filteredProducts.length} produktet</span>
              </div>
              <div className="flex border border-border rounded-lg overflow-hidden">
                <button
                  onClick={() => setViewMode("grid")}
                  className={`p-2 ${viewMode === "grid" ? "bg-muted" : "hover:bg-muted/50"}`}
                  aria-label="Pamja e rrjetit"
                >
                  <LayoutGrid className="h-4 w-4" />
                </button>
                <button
                  onClick={() => setViewMode("compact")}
                  className={`p-2 ${viewMode === "compact" ? "bg-muted" : "hover:bg-muted/50"}`}
                  aria-label="Pamja kompakte"
                >
                  <Grid3X3 className="h-4 w-4" />
                </button>
              </div>
            </div>
          </div>

          {/* Category Tabs */}
          <div className="flex flex-wrap gap-2">
            {categories.map((category) => (
              <button
                key={category.id}
                onClick={() => setActiveCategory(category.id)}
                className={`px-4 py-2 text-sm font-medium rounded-full border transition-colors ${
                  activeCategory === category.id
                    ? "bg-foreground text-background border-foreground"
                    : "bg-background text-foreground border-border hover:bg-muted"
                }`}
              >
                {category.label}
              </button>
            ))}
          </div>

          {/* Secondary Filters */}
          <div className="flex flex-wrap items-center gap-4">
            <div className="flex items-center gap-2">
              <SlidersHorizontal className="h-4 w-4 text-muted-foreground" />
              <select
                value={selectedBrand}
                onChange={(e) => setSelectedBrand(e.target.value)}
                className="text-sm border border-border rounded-lg px-3 py-2 bg-background focus:outline-none focus:ring-2 focus:ring-ring"
              >
                {brands.map((brand) => (
                  <option key={brand} value={brand}>
                    {brand}
                  </option>
                ))}
              </select>
            </div>
            <select
              value={sortBy}
              onChange={(e) => setSortBy(e.target.value)}
              className="text-sm border border-border rounded-lg px-3 py-2 bg-background focus:outline-none focus:ring-2 focus:ring-ring"
            >
              <option value="featured">Më Të Rekomanduarat</option>
              <option value="price-low">Çmimi: Më i Ulët në Më i Lartë</option>
              <option value="price-high">Çmimi: Më i Lartë në Më i Ulët</option>
              <option value="name">Emri</option>
            </select>
          </div>
        </div>

        {/* Products Grid */}
        {filteredProducts.length > 0 ? (
          <div
            className={`grid gap-6 ${
              viewMode === "grid"
                ? "grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4"
                : "grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5"
            }`}
          >
            {filteredProducts.map((product) => (
              <ProductCard
                key={product.id}
                product={product}
                compact={viewMode === "compact"}
              />
            ))}
          </div>
        ) : (
          <div className="text-center py-20">
            <p className="text-muted-foreground mb-4">
              Asnjë produkt nuk u gjet që përputhet me kriteret tuaja.
            </p>
            <Button
              variant="outline"
              onClick={() => {
                setActiveCategory("all");
                setSelectedBrand("Të Gjitha Markat");
                setSearchQuery("");
              }}
            >
              Hiq Filtrat
            </Button>
          </div>
        )}
      </div>
    </main>
  );
}

function ProductCard({
  product,
  compact,
}: {
  product: Product;
  compact?: boolean;
}) {
  return (
    <Link href={`/products/${product.id}`}>
      <Card className="group h-full hover:border-foreground/20 transition-all duration-300 overflow-hidden">
        <div
          className={`relative bg-muted ${compact ? "aspect-square" : "aspect-[4/3]"}`}
        >
          <img
            src={product.image || "/placeholder.svg"}
            alt={product.name}
            className="object-cover group-hover:scale-105 transition-transform duration-300"
          />
          {product.originalPrice && (
            <Badge className="absolute top-3 left-3" variant="destructive">
              Zbritje
            </Badge>
          )}
          {product.featured && !product.originalPrice && (
            <Badge className="absolute top-3 left-3">Më i Rekomanduar</Badge>
          )}
          {!product.inStock && (
            <div className="absolute inset-0 bg-background/80 flex items-center justify-center">
              <Badge variant="secondary">Nuk Ka Në Stok</Badge>
            </div>
          )}
        </div>
        <CardContent className={compact ? "p-3" : "p-4"}>
          <p className="text-xs text-muted-foreground mb-1">{product.brand}</p>
          <h3
            className={`font-medium mb-2 truncate ${compact ? "text-sm" : ""}`}
          >
            {product.name}
          </h3>
          {!compact && (
            <p className="text-xs text-muted-foreground line-clamp-2 mb-3">
              {product.description}
            </p>
          )}
          <div className="flex items-center gap-2">
            <span className={`font-semibold ${compact ? "text-sm" : ""}`}>
              ${product.price}
            </span>
            {product.originalPrice && (
              <span className="text-sm text-muted-foreground line-through">
                ${product.originalPrice}
              </span>
            )}
          </div>
        </CardContent>
      </Card>
    </Link>
  );
}

export default function ProductsPage() {
  return (
    <Suspense fallback={<div>Po ngarkohet...</div>}>
      <ProductsPageContent />
    </Suspense>
  );
}
