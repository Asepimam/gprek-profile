export default function MenuPage() {
  const menuItems = [
    {
      category: "Ayam Geprek",
      items: [
        { name: "Ayam Geprek Original", price: "15.000", description: "Ayam crispy dengan sambal level 1-5" },
        { name: "Ayam Geprek Keju", price: "20.000", description: "Ayam geprek dengan topping keju mozzarella" },
        { name: "Ayam Geprek Telur", price: "18.000", description: "Ayam geprek dengan telur mata sapi" }
      ]
    },
    {
      category: "Mie Ayam",
      items: [
        { name: "Mie Ayam Original", price: "15.000", description: "Mie ayam dengan topping ayam cincang" },
        { name: "Mie Ayam Bakso", price: "18.000", description: "Mie ayam dengan bakso sapi" },
        { name: "Mie Ayam Komplit", price: "20.000", description: "Mie ayam dengan bakso dan pangsit" }
      ]
    },
    {
      category: "Paket Hemat",
      items: [
        { name: "Paket A", price: "25.000", description: "Ayam geprek + es teh" },
        { name: "Paket B", price: "25.000", description: "Mie ayam + es teh" },
        { name: "Paket Komplit", price: "35.000", description: "Ayam geprek + mie ayam + es teh" }
      ]
    }
  ];

  return (
    <main className="pt-16">
      <div className="container mx-auto px-4 py-12">
        <h1 className="text-4xl font-bold text-center mb-12">Menu Kami</h1>

        <div className="max-w-4xl mx-auto">
          {menuItems.map((category) => (
            <div key={category.category} className="mb-12">
              <h2 className="text-2xl font-bold mb-6 text-primary">{category.category}</h2>
              <div className="grid gap-6">
                {category.items.map((item) => (
                  <div key={item.name} className="bg-white p-6 rounded-lg shadow-sm border">
                    <div className="flex justify-between items-start">
                      <div>
                        <h3 className="font-bold text-lg mb-2">{item.name}</h3>
                        <p className="text-gray-600">{item.description}</p>
                      </div>
                      <p className="font-bold text-primary">Rp {item.price}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </main>
  );
}