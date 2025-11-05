import { Truck, Shield, Headset, Award } from 'lucide-react';
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
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: i * 0.1,
      duration: 0.5,
    },
  }),
};

export default function Features() {
  return (
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
              custom={index}
              variants={fadeInUp}
              whileHover={{ y: -5 }}
            >
              <div className="h-full p-6 bg-white rounded-xl shadow-sm hover:shadow-lg transition-all duration-300 border border-gray-100">
                <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-blue-50 flex items-center justify-center group-hover:bg-blue-100 transition-colors">
                  {feature.icon}
                </div>
                <h3 className="text-xl font-semibold text-center mb-2">{feature.title}</h3>
                <p className="text-gray-600 text-center">{feature.description}</p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
