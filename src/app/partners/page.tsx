import { Metadata } from 'next';
import { partnerOfferings } from '@/data/partners.updated';
import PartnerProductGallery from '@/components/PartnerProductGallery';

export const metadata: Metadata = {
  title: 'Our Partners & Products | TRANS-LOG',
  description: 'Discover our trusted partners and explore their high-quality products and solutions.',
};

export default function PartnersPage() {
  return (
    <main className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-600 to-blue-800 text-white py-20">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Our Trusted Partners</h1>
          <p className="text-xl md:text-2xl max-w-3xl mx-auto">
            We collaborate with industry leaders to bring you the best technology solutions
          </p>
        </div>
      </section>

      {/* Partners Introduction */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">Premium Technology Partners</h2>
            <p className="text-lg text-gray-600 mb-8">
              At TRANS-LOG, we've carefully selected partners who share our commitment to quality, 
              innovation, and exceptional customer service. Explore their products below.
            </p>
            <div className="flex flex-wrap justify-center gap-6 mb-12">
              {partnerOfferings.map((partner) => (
                <a
                  key={partner.id}
                  href={`#${partner.id}`}
                  className="bg-white p-4 rounded-lg shadow-md hover:shadow-lg transition-shadow"
                >
                  <img 
                    src={partner.logo} 
                    alt={partner.name} 
                    className="h-12 w-auto object-contain"
                  />
                </a>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Partner Product Galleries */}
      {partnerOfferings.map((partner) => (
        <section key={partner.id} id={partner.id} className="py-12 bg-gray-50">
          <div className="container mx-auto px-4">
            <PartnerProductGallery partner={partner} />
          </div>
        </section>
      ))}

      {/* CTA Section */}
      <section className="bg-white py-16">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">Become a Partner</h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto mb-8">
            Interested in partnering with us? We're always looking to collaborate with innovative 
            companies that share our vision for excellence.
          </p>
          <a
            href="/contact"
            className="inline-block bg-blue-600 text-white px-8 py-3 rounded-lg font-medium hover:bg-blue-700 transition-colors"
          >
            Contact Us About Partnership
          </a>
        </div>
      </section>
    </main>
  );
}
