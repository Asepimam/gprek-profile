export default function AboutPage() {
  return (
    <main className="pt-16">
      <div className="container mx-auto px-4 py-12">
        <h1 className="text-4xl font-bold text-center mb-8">Tentang Kami</h1>
        
        <div className="max-w-3xl mx-auto">
          <div className="prose prose-lg">
            <p className="mb-6">
              Warung Geprek & Mie Ayam kami adalah warung makan keluarga yang didirikan pada tahun 2020. 
              Bermula dari kecintaan kami terhadap masakan tradisional Indonesia, khususnya ayam geprek 
              dan mie ayam, kami bertekad untuk menyajikan hidangan berkualitas dengan harga terjangkau.
            </p>

            <h2 className="text-2xl font-bold mt-8 mb-4">Visi Kami</h2>
            <p className="mb-6">
              Menjadi warung makan pilihan utama yang menyajikan ayam geprek dan mie ayam 
              terbaik dengan tetap mempertahankan cita rasa autentik dan pelayanan yang 
              ramah kepada setiap pelanggan.
            </p>

            <h2 className="text-2xl font-bold mt-8 mb-4">Komitmen Kualitas</h2>
            <ul className="list-disc pl-6 mb-6">
              <li>Menggunakan bahan-bahan segar dan berkualitas</li>
              <li>Menjaga kebersihan dan higienitas dalam proses memasak</li>
              <li>Memberikan pelayanan ramah dan cepat</li>
              <li>Harga terjangkau tanpa mengurangi kualitas</li>
            </ul>

            <h2 className="text-2xl font-bold mt-8 mb-4">Tim Kami</h2>
            <p className="mb-6">
              Tim kami terdiri dari koki-koki berpengalaman yang telah terlatih dalam 
              menyajikan hidangan ayam geprek dan mie ayam. Setiap anggota tim kami 
              berkomitmen untuk memberikan pengalaman makan terbaik bagi pelanggan.
            </p>
          </div>
        </div>
      </div>
    </main>
  );
}