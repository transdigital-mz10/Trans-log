import { motion } from 'framer-motion';

const fadeIn = {
  hidden: { opacity: 0 },
  visible: { opacity: 1 },
};

export default function Showcase() {
  return (
    <section className="py-20">
      {/* <div className="container px-4 mx-auto">
        <motion.div 
          className="text-center mb-16"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={{
            hidden: { opacity: 0, y: 20 },
            visible: { 
              opacity: 1, 
              y: 0,
              transition: { duration: 0.6 }
            }
          }}
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Our Work in Action</h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            See how our solutions are making an impact across industries
          </p>
        </motion.div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {[1, 2, 3].map((item) => (
            <motion.div 
              key={item}
              className="group relative overflow-hidden rounded-xl shadow-lg"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
              variants={{
                hidden: { opacity: 0, y: 50 },
                visible: { 
                  opacity: 1, 
                  y: 0,
                  transition: { 
                    duration: 0.6,
                    delay: item * 0.1
                  }
                }
              }}
            >
              <div className="aspect-w-16 aspect-h-9 overflow-hidden">
                <img
                  src={`/images/showcase/showcase-${item}.jpg`}
                  alt={`Showcase ${item}`}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
              </div>
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent flex items-end p-6">
                <div>
                  <h3 className="text-white text-xl font-semibold mb-2">
                    Case Study {item}
                  </h3>
                  <p className="text-gray-200">
                    Learn how we solved complex challenges
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div> */}
    </section>
  );
}
