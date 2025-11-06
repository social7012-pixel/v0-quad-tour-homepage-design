"use client"

export default function PhotoGallery() {
  const images = [
    "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/2-hGIcuqsj4Hyilx6qRrXXkYLbPFl63T.jpg",
    "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/3-5Ftrrq0W5yc8cs8CJudIouJC1dukye.jpg",
    "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/4-1olWfoq5RVAUXRCzv4Qzpvbedg0WSA.jpg",
  ]

  return (
    <section className="py-16 px-4 sm:px-6 lg:px-8 bg-muted/30">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold mb-12 text-foreground">Photo Gallery</h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {images.map((image, index) => (
            <div
              key={index}
              className="h-64 rounded-lg overflow-hidden bg-cover bg-center hover:shadow-lg transition cursor-pointer"
              style={{ backgroundImage: `url(${image})` }}
            ></div>
          ))}
        </div>
      </div>
    </section>
  )
}
