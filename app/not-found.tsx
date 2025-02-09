import Image from "next/image";
import Link from "next/link";

export default function NotFound() {
  return (
    // buat background warna abu-abu dan tidak terlu menyala untuk background warna putih
    <main className="min-h-screen flex flex-col items-center justify-center sm:flex-col bg-gray-200">
      <Image src="/images/404.png" width={400} height={400} alt="404" />
      <div className="text-center">
        <h1 className="text-6xl font-bold">404</h1>
        <p className="text-xl text-gray-600">Halaman yang Anda cari tidak ditemukan</p>
        <Link href="/" className="text-primary hover:underline mt-4 block">Kembali ke Beranda</Link>
      </div>
    </main>
  )
}

