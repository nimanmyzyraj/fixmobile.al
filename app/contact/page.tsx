"use client";

import React from "react";
import { useState } from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import {
  MapPin,
  Phone,
  Mail,
  Clock,
  ChevronRight,
  Send,
  CheckCircle2,
} from "lucide-react";

const contactInfo = [
  {
    icon: MapPin,
    title: "Vizitoni Dyqanin Tonë",
    details: ["Rruga Teknologjia 123", "Qyteti, Shteti 12345"],
  },
  {
    icon: Phone,
    title: "Na Telefononi",
    details: ["(555) 123-4567", "(555) 987-6543"],
  },
  {
    icon: Mail,
    title: "Na Dërgoni Email",
    details: ["hello@techhub.com", "support@techhub.com"],
  },
  {
    icon: Clock,
    title: "Orari i Punës",
    details: ["Hën - Prem: 9:00 - 19:00", "Sht: 10:00 - 17:00", "Die: Mbyllur"],
  },
];

const services = [
  "Riparim ekrani telefoni",
  "Zëvendësim baterie telefoni",
  "Riparim ekrani laptopi",
  "Zëvendësim baterie laptopi",
  "Upgrade SSD / RAM",
  "Heqje virusesh",
  "Blerje produktesh",
  "Tjetër",
];

export default function ContactPage() {
  const [formState, setFormState] = useState({
    name: "",
    email: "",
    phone: "",
    service: "",
    message: "",
  });
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitted(true);
  };

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >,
  ) => {
    setFormState((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  return (
    <main className="flex-1">
      <div className="border-b border-border">
        <div className="mx-auto container px-6 py-4 lg:px-8">
          <nav className="flex items-center gap-2 text-sm text-muted-foreground">
            <Link href="/" className="hover:text-foreground transition-colors">
              Kryefaqja
            </Link>
            <ChevronRight className="h-4 w-4" />
            <span className="text-foreground">Na Kontaktoni</span>
          </nav>
        </div>
      </div>

      {/* Hero Section */}
      <section className="bg-muted/30">
        <div className="mx-auto max-w-7xl px-6 py-16 lg:px-8 text-center">
          <h1 className="text-4xl font-bold tracking-tight sm:text-5xl mb-4">
            Na Kontaktoni
          </h1>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Keni një pyetje ose keni nevojë për riparim? Na kontaktoni dhe do
            t’ju përgjigjemi sa më shpejt të jetë e mundur.
          </p>
        </div>
      </section>

      {/* Contact Info Cards */}
      <section className="py-12 border-b border-border">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {contactInfo.map((item) => {
              const Icon = item.icon;
              return (
                <Card key={item.title} className="text-center">
                  <CardContent className="pt-6">
                    <div className="flex h-12 w-12 items-center justify-center rounded-full bg-muted mx-auto mb-4">
                      <Icon className="h-5 w-5" />
                    </div>
                    <h3 className="font-semibold mb-2">{item.title}</h3>
                    <div className="space-y-1">
                      {item.details.map((detail) => (
                        <p
                          key={detail}
                          className="text-sm text-muted-foreground"
                        >
                          {detail}
                        </p>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* Contact Form Section */}
      <section className="py-16">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="grid gap-12 lg:grid-cols-2">
            <div>
              <h2 className="text-2xl font-bold tracking-tight mb-2">
                Na Dërgoni një Mesazh
              </h2>
              <p className="text-muted-foreground mb-8">
                Plotësoni formularin dhe do t’ju përgjigjemi brenda 24 orëve.
              </p>

              {isSubmitted ? (
                <Card>
                  <CardContent className="py-12 text-center">
                    <div className="flex h-16 w-16 items-center justify-center rounded-full bg-foreground text-background mx-auto mb-4">
                      <CheckCircle2 className="h-8 w-8" />
                    </div>
                    <h3 className="text-xl font-semibold mb-2">
                      Faleminderit!
                    </h3>
                    <p className="text-muted-foreground mb-6">
                      Mesazhi juaj u dërgua me sukses. Do t’ju kontaktojmë së
                      shpejti.
                    </p>
                    <Button
                      variant="outline"
                      onClick={() => setIsSubmitted(false)}
                    >
                      Dërgo një Mesazh Tjetër
                    </Button>
                  </CardContent>
                </Card>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid gap-6 sm:grid-cols-2">
                    <div className="space-y-2">
                      <Label htmlFor="name">Emri i Plotë *</Label>
                      <Input
                        id="name"
                        name="name"
                        placeholder="Gjeorg Ndreçi"
                        value={formState.name}
                        onChange={handleChange}
                        required
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="email">Adresa e Email-it *</Label>
                      <Input
                        id="email"
                        name="email"
                        type="email"
                        placeholder="gjeorg@example.com"
                        value={formState.email}
                        onChange={handleChange}
                        required
                      />
                    </div>
                  </div>

                  <div className="grid gap-6 sm:grid-cols-2">
                    <div className="space-y-2">
                      <Label htmlFor="phone">Numri i Telefonit</Label>
                      <Input
                        id="phone"
                        name="phone"
                        type="tel"
                        placeholder="0676002020"
                        value={formState.phone}
                        onChange={handleChange}
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="service">Shërbimi i Nevojshëm *</Label>
                      <select
                        id="service"
                        name="service"
                        value={formState.service}
                        onChange={handleChange}
                        required
                        className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
                      >
                        <option value="">Zgjidhni një shërbim</option>
                        {services.map((service) => (
                          <option key={service} value={service}>
                            {service}
                          </option>
                        ))}
                      </select>
                    </div>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="message">Mesazhi *</Label>
                    <Textarea
                      id="message"
                      name="message"
                      placeholder="Përshkruani problemin ose pyetjen tuaj..."
                      rows={5}
                      value={formState.message}
                      onChange={handleChange}
                      required
                    />
                  </div>

                  <Button type="submit" size="lg" className="w-full sm:w-auto">
                    <Send className="mr-2 h-4 w-4" />
                    Dërgo Mesazhin
                  </Button>
                </form>
              )}
            </div>

            <div>
              <h2 className="text-2xl font-bold tracking-tight mb-2">
                Vizitoni Dyqanin Tonë
              </h2>
              <p className="text-muted-foreground mb-8">
                Ejani në dyqan për riparime pa takim ose për të parë produktet
                tona.
              </p>

              <Card>
                <CardHeader>
                  <CardTitle className="text-lg">
                    Pse të Zgjidhni Fix Mobile Shop?
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-3">
                    {[
                      "Diagnostikim falas për të gjitha riparimet",
                      "Garanci 90-ditore për të gjitha shërbimet",
                      "Riparime në të njëjtën ditë kur është e mundur",
                      "Teknikë të certifikuar",
                      "Komponentë origjinalë dhe cilësorë",
                      "Çmime konkurruese",
                    ].map((item) => (
                      <li
                        key={item}
                        className="flex items-center gap-2 text-sm"
                      >
                        <CheckCircle2 className="h-4 w-4 shrink-0" />
                        {item}
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
