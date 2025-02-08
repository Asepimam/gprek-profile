"use client";

import { ChefHat, Clock, MapPin, Phone } from "lucide-react";

export default function Home() {
  return (
    <main className="min-h-screen">
      {/* Hero Section */}
      <section 
        className="h-[600px] relative flex items-center justify-center"
        style={{
          backgroundImage: "url('https://images.unsplash.com/photo-1604908176997-125f25cc6f3d?q=80&w=1920&auto=format')",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="absolute inset-0 bg-black/50" />
        <div className="relative text-center text-white px-4">
          <h1 className="text-5xl font-bold mb-4">Warung Geprek & Mie Ayam</h1>
          <p className="text-xl mb-8">Kelezatan Dalam Setiap Suapan</p>
          <div className="flex justify-center gap-4">
            <a href="#menu" className="bg-primary hover:bg-primary/90 text-white px-6 py-3 rounded-lg font-medium">
              Lihat Menu
            </a>
            <a href="#location" className="bg-white hover:bg-gray-100 text-primary px-6 py-3 rounded-lg font-medium">
              Lokasi Kami
            </a>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-6">Tentang Kami</h2>
            <p className="text-gray-600 mb-8">
              Warung Geprek & Mie Ayam kami telah melayani pelanggan setia sejak 2020 dengan hidangan autentik 
              yang menggugah selera. Kami menggunakan bahan-bahan berkualitas dan resep rahasia turun-temurun 
              untuk menciptakan cita rasa yang tak terlupakan.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="p-6 bg-gray-50 rounded-lg">
                <ChefHat className="w-12 h-12 text-primary mx-auto mb-4" />
                <h3 className="font-semibold mb-2">Koki Berpengalaman</h3>
                <p className="text-gray-600">Tim koki kami ahli dalam membuat hidangan ayam geprek dan mie ayam</p>
              </div>
              <div className="p-6 bg-gray-50 rounded-lg">
                <Clock className="w-12 h-12 text-primary mx-auto mb-4" />
                <h3 className="font-semibold mb-2">Buka Setiap Hari</h3>
                <p className="text-gray-600">10:00 - 22:00 WIB</p>
              </div>
              <div className="p-6 bg-gray-50 rounded-lg">
                <Phone className="w-12 h-12 text-primary mx-auto mb-4" />
                <h3 className="font-semibold mb-2">Pesan Antar</h3>
                <p className="text-gray-600">Tersedia layanan pesan antar untuk area sekitar</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Menu Section */}
      <section id="menu" className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Menu Favorit</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white rounded-lg overflow-hidden shadow-md">
              <img 
                src="https://images.unsplash.com/photo-1604908176997-125f25cc6f3d?q=80&w=600&auto=format" 
                alt="Ayam Geprek"
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <h3 className="font-bold text-xl mb-2">Ayam Geprek Original</h3>
                <p className="text-gray-600 mb-4">Ayam crispy yang digeprek dengan sambal special level 1-5</p>
                <p className="text-primary font-bold">Rp 15.000</p>
              </div>
            </div>
            <div className="bg-white rounded-lg overflow-hidden shadow-md">
              <img 
                src="https://images.unsplash.com/photo-1626804475297-41608ea09aeb?q=80&w=600&auto=format" 
                alt="Mie Ayam"
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <h3 className="font-bold text-xl mb-2">Mie Ayam Special</h3>
                <p className="text-gray-600 mb-4">Mie ayam dengan topping ayam cincang dan pangsit</p>
                <p className="text-primary font-bold">Rp 18.000</p>
              </div>
            </div>
            <div className="bg-white rounded-lg overflow-hidden shadow-md">
              <img 
                src="https://images.unsplash.com/photo-1585032226651-759b368d7246?q=80&w=600&auto=format" 
                alt="Paket Kombo"
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <h3 className="font-bold text-xl mb-2">Paket Kombo</h3>
                <p className="text-gray-600 mb-4">Ayam geprek + mie ayam + es teh</p>
                <p className="text-primary font-bold">Rp 30.000</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Location Section */}
      <section id="location" className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-6">Lokasi</h2>
            <div className="flex items-center justify-center gap-2 mb-4">
              <MapPin className="text-primary" />
              <p className="text-gray-600">Jl. Contoh No. 123, Kota, Indonesia</p>
            </div>
            <div className="flex items-center justify-center gap-2 mb-8">
              <Phone className="text-primary" />
              <p className="text-gray-600">+62 812-3456-7890</p>
            </div>
            <div className="bg-gray-200 rounded-lg h-[300px] flex items-center justify-center">
              <p className="text-gray-600">Peta Lokasi</p>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-8">
        <div className="container mx-auto px-4 text-center">
          <p className="mb-4">© 2024 Warung Geprek & Mie Ayam. All rights reserved.</p>
          <div className="flex justify-center gap-4">
            <a href="#" className="hover:text-primary">Instagram</a>
            <a href="#" className="hover:text-primary">Facebook</a>
            <a href="#" className="hover:text-primary">WhatsApp</a>
          </div>
        </div>
      </footer>
    </main>
  );
}