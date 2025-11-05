import Image from 'next/image';
import Link from 'next/link';
import { ArrowRight, Shield, Truck, Headset, Award } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { motion } from 'framer-motion';

const features = [
  {
    icon: <Truck className="w-8 h-8 text-blue-600" />,
    title: 'Fast Delivery',
    description: 'Quick and reliable shipping to your location',
  },
  {
    icon: <Shield className="w-8 h-8 text-blue-600" />,
    title: 'Quality Assurance',
    description: 'Only the best products from trusted brands',
  },
  {
    icon: <Headset className="w-8 h-8 text-blue-600" />,
    title: '24/7 Support',
    description: 'Our team is always here to help',
  },
  {
    icon: <Award className="w-8 h-8 text-blue-600" />,
    title: 'Best in Class',
    description: 'Industry-leading products and solutions',
  },
];

const fadeInUp = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 },
};

export default function Home() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative h-[80vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <Image
            src="/images/hero-bg.jpg"
            alt="Industrial equipment and technology"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-black/50" />
        </div>
        
        <motion.div 
          className="container relative z-10 text-center text-white px-4"
          initial="hidden"
          animate="visible"
          variants={{
            visible: {
              transition: {
                staggerChildren: 0.1
              }
            }
          }}
        >
          <motion.h1 
            className="text-4xl md:text-6xl font-bold mb-6"
            variants={fadeInUp}
          >
            Industrial Solutions for a <span className="text-blue-400">Connected</span> World
          </motion.h1>
          <motion.p 
            className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto"
            variants={fadeInUp}
          >
            Discover our range of high-quality industrial equipment and technology solutions
          </motion.p>
          <motion.div variants={fadeInUp}>
            <Link href="/products">
              <Button size="lg" className="text-lg group">
                Explore Products
                <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
              </Button>
            </Link>
          </motion.div>
        </motion.div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-gray-50">
        <div className="container px-4 mx-auto">
          <motion.div 
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={{
              visible: {
                transition: {
                  staggerChildren: 0.1
                }
              }
            }}
          >
            {features.map((feature, index) => (
              <motion.div 
                key={index} 
                className="group"
                variants={fadeInUp}
                whileHover={{ y: -5 }}
              >
                <Card className="h-full transition-all duration-300 group-hover:shadow-lg">
                  <CardContent className="p-6 text-center">
                    <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-blue-50 flex items-center justify-center group-hover:bg-blue-100 transition-colors">
                      {feature.icon}
                    </div>
                    <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
                    <p className="text-gray-600">{feature.description}</p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Image Showcase */}
      <section className="py-20">
        <div className="container px-4 mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Our Work in Action</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">See how our solutions are making an impact across industries</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[1, 2, 3].map((item) => (
              <motion.div 
                key={item}
                className="group relative overflow-hidden rounded-xl shadow-lg"
                whileHover="hover"
                initial="initial"
              >
                <div className="aspect-w-16 aspect-h-9 overflow-hidden">
                  <Image
                    src={`/images/showcase-${item}.jpg`}
                    alt={`Showcase ${item}`}
                    width={600}
                    height={400}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                </div>
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent flex items-end p-6">
                  <div>
                    <h3 className="text-white text-xl font-semibold mb-2">Case Study {item}</h3>
                    <p className="text-gray-200">Learn how we solved complex challenges</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-blue-600 text-white py-20">
        <div className="container px-4 mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to Transform Your Operations?</h2>
            <p className="text-xl mb-8 max-w-2xl mx-auto">Get in touch with our experts to find the perfect solution for your needs</p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/contact">
                <Button variant="secondary" size="lg" className="text-lg">
                  Contact Us
                </Button>
              </Link>
              <Link href="/products">
                <Button variant="outline" size="lg" className="text-lg border-white text-white hover:bg-white/10">
                  View All Products
                </Button>
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
