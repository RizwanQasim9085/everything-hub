import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  ShoppingBag, 
  Search, 
  Menu, 
  X, 
  ArrowRight, 
  Star, 
  Watch, 
  Umbrella, 
  Smartphone, 
  Home, 
  ChevronRight,
  ShieldCheck,
  Truck,
  RotateCcw
} from 'lucide-react';

// --- Components ---

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`fixed top-6 left-6 right-6 z-50 transition-all duration-300 ${isScrolled ? 'rounded-nav py-3' : 'bg-white rounded-3xl py-4 border border-brand-border shadow-sm'}`}>
      <div className="max-w-7xl mx-auto px-8 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <div className="w-8 h-8 bg-brand-ink rounded-lg flex items-center justify-center">
            <div className="w-4 h-4 border-2 border-white rounded-full"></div>
          </div>
          <a href="#" className="text-xl font-bold tracking-tight">Everything Hub</a>
        </div>

        <div className="hidden md:flex items-center gap-8 text-sm font-medium text-brand-muted">
          {['Curations', 'Seasonal', 'Stores', 'About'].map((item) => (
            <a key={item} href="#" className="hover:text-brand-ink transition-colors">{item}</a>
          ))}
        </div>

        <div className="flex items-center gap-4">
          <button className="hidden sm:block px-5 py-2 bg-brand-ink text-white rounded-full text-sm font-medium hover:bg-brand-muted transition-colors">
            Shop Now
          </button>
          <div className="relative group cursor-pointer leading-none">
            <ShoppingBag size={20} className="hover:text-brand-muted transition-colors" />
            <span className="absolute -top-2 -right-2 bg-brand-ink text-white text-[10px] w-4 h-4 flex items-center justify-center rounded-full">0</span>
          </div>
        </div>
      </div>
    </nav>
  );
};

const BentoHeroAndCategories = () => {
  return (
    <section className="pt-32 pb-12 px-6 max-w-7xl mx-auto">
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
        {/* Main Hero Card */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="col-span-1 md:col-span-2 md:row-span-2 bento-card-dark min-h-[400px] flex flex-col justify-between"
        >
          <div className="relative z-10">
            <span className="bg-white/10 backdrop-blur-md px-4 py-1 rounded-full text-xs font-semibold uppercase tracking-widest border border-white/20">Premium 2026</span>
            <h1 className="text-4xl md:text-6xl font-bold mt-6 leading-tight">Curated Excellence<br/>for Daily Living.</h1>
            <p className="mt-4 text-zinc-400 max-w-sm text-lg">Discover a world where quality meets variety. Everything you need, all in one hub.</p>
          </div>
          
          <div className="flex gap-4 z-10 pt-8 mt-auto">
            <div className="flex flex-col">
              <span className="text-3xl font-bold">4.9/5</span>
              <span className="text-xs text-zinc-500 uppercase">User Rating</span>
            </div>
            <div className="w-[1px] h-10 bg-zinc-700"></div>
            <div className="flex flex-col">
              <span className="text-3xl font-bold">12k+</span>
              <span className="text-xs text-zinc-500 uppercase">Products</span>
            </div>
          </div>
          <div className="absolute -right-20 -bottom-20 w-80 h-80 bg-linear-to-br from-blue-500/10 to-purple-500/10 blur-3xl shadow-[0_0_100px_rgba(59,130,246,0.1)]"></div>
        </motion.div>

        {/* Watches Card */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.1 }}
          className="col-span-1 bg-white rounded-[2rem] border border-brand-border p-6 flex flex-col justify-between hover:border-zinc-400 transition-colors group cursor-pointer"
        >
          <div className="flex justify-between items-start">
            <div className="w-10 h-10 rounded-xl bg-zinc-100 flex items-center justify-center">
              <Watch size={20} />
            </div>
            <span className="text-xs font-bold text-zinc-400 group-hover:text-brand-ink transition-colors">01</span>
          </div>
          <div>
            <h3 className="text-xl font-bold">Watches</h3>
            <p className="text-brand-muted text-sm mt-1">Timeless precision and craft.</p>
          </div>
        </motion.div>

        {/* Cosmetics Card */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.2 }}
          className="col-span-1 bg-zinc-100 rounded-[2.5rem] p-6 border border-brand-border flex flex-col justify-between overflow-hidden relative cursor-pointer group"
        >
          <div className="z-10">
            <h3 className="text-xl font-bold">Cosmetics</h3>
            <p className="text-brand-muted text-sm mt-1">Pure radiance redefined.</p>
          </div>
          <div className="absolute bottom-0 right-0 w-24 h-24 bg-white/50 rounded-tl-full flex items-center justify-center border-t border-l border-brand-border transform group-hover:bg-white transition-all">
            <Umbrella size={24} className="text-zinc-400" />
          </div>
        </motion.div>

        {/* Shoes Card */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.3 }}
          className="col-span-1 md:row-span-2 bg-white rounded-[2.5rem] border border-brand-border p-8 flex flex-col justify-between relative overflow-hidden group cursor-pointer"
        >
          <div className="relative z-10">
            <span className="text-zinc-400 font-bold text-xs uppercase tracking-tighter">Footwear</span>
            <h3 className="text-3xl font-bold mt-2">Shoes for<br/>Every Step.</h3>
          </div>
          <div className="h-48 flex items-center justify-center">
            <div className="w-32 h-32 bg-zinc-100 rounded-full flex items-center justify-center transform group-hover:scale-110 transition-transform shadow-inner">
               <Smartphone size={40} className="text-brand-ink" />
            </div>
          </div>
          <button className="w-full py-4 bg-zinc-100 rounded-2xl font-bold text-sm hover:bg-zinc-900 hover:text-white transition-all">Explore Collection</button>
        </motion.div>

        {/* Clothes Card */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.4 }}
          className="col-span-1 md:col-span-2 bg-white rounded-[2.5rem] border border-brand-border p-8 flex items-center gap-8 cursor-pointer hover:border-brand-ink transition-all"
        >
          <div className="flex-1">
            <h3 className="text-2xl font-bold">Seasonal Clothes</h3>
            <p className="text-brand-muted mt-2">Discover the new collection of essentials for the modern lifestyle.</p>
            <div className="flex gap-2 mt-4">
              <span className="px-3 py-1 bg-zinc-100 rounded-lg text-xs font-semibold">Organic Cotton</span>
              <span className="px-3 py-1 bg-zinc-100 rounded-lg text-xs font-semibold">Sustainable</span>
            </div>
          </div>
          <div className="w-32 h-32 bg-zinc-50 rounded-3xl border border-zinc-100 flex items-center justify-center shadow-inner group-hover:bg-brand-ink transition-colors">
            <Home size={32} className="text-zinc-300 group-hover:text-white transition-colors" />
          </div>
        </motion.div>

        {/* Household Card */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.5 }}
          className="col-span-1 bento-card-dark p-6 flex flex-col justify-between cursor-pointer group"
        >
          <div className="z-10 text-xs font-medium opacity-60 uppercase">Living Space</div>
          <div className="z-10">
            <h3 className="text-xl font-bold">Household</h3>
            <p className="text-zinc-400 text-sm mt-1">Elevate your sanctuary.</p>
          </div>
          <div className="absolute -right-4 -bottom-4 w-16 h-16 bg-white/10 rounded-full blur-xl group-hover:bg-white/20 transition-all"></div>
        </motion.div>
      </div>
    </section>
  );
};

const FeaturedProducts = () => {
  const products = [
    { id: 1, name: 'Oceanic Chrono', category: 'Watches', price: '$850.00', img: 'https://images.unsplash.com/photo-1547996160-81dfa63595aa?q=80&w=1974&auto=format&fit=crop' },
    { id: 2, name: 'Artisan Vessel', category: 'Household', price: '$120.00', img: 'https://images.unsplash.com/photo-1578749556568-bc2c40e68b61?q=80&w=2070&auto=format&fit=crop' },
    { id: 3, name: 'Linen Essence', category: 'Clothing', price: '$210.00', img: 'https://images.unsplash.com/photo-1591047139829-d91aecb6caea?q=80&w=2036&auto=format&fit=crop' },
    { id: 4, name: 'Botanical Balm', category: 'Cosmetics', price: '$75.00', img: 'https://images.unsplash.com/photo-1556228578-0d85b1a4d571?q=80&w=1974&auto=format&fit=crop' },
  ];

  return (
    <section className="py-24 max-w-7xl mx-auto px-6">
      <div className="flex flex-col items-center text-center mb-16">
        <span className="text-brand-muted text-xs font-bold tracking-[0.4em] uppercase block mb-4">New Arrivals</span>
        <h2 className="text-4xl md:text-5xl font-bold">Featured Selections</h2>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
        {products.map((product) => (
          <motion.div 
            key={product.id}
            whileHover={{ y: -8 }}
            className="bento-card group flex flex-col"
          >
            <div className="relative aspect-square mb-6 overflow-hidden rounded-2xl bg-zinc-50">
              <img 
                src={product.img} 
                alt={product.name} 
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                referrerPolicy="no-referrer"
              />
              <button className="absolute bottom-2 left-2 right-2 py-3 bg-brand-ink text-white rounded-xl font-bold uppercase text-xs tracking-widest opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                Add to Bag
              </button>
            </div>
            <p className="text-[10px] uppercase tracking-widest text-brand-muted mb-2">{product.category}</p>
            <h3 className="text-lg font-bold mb-1">{product.name}</h3>
            <p className="font-bold text-brand-ink">{product.price}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

const Features = () => {
  const items = [
    { icon: <Truck size={32} />, title: "Concierge Delivery", desc: "White-glove shipping on all orders." },
    { icon: <ShieldCheck size={32} />, title: "Trust Guaranteed", desc: "Lifetime assurance on every product." },
    { icon: <RotateCcw size={32} />, title: "Easy Returns", desc: "60-day seamless process." },
  ];

  return (
    <section className="pb-24 px-6 max-w-7xl mx-auto">
      <div className="grid md:grid-cols-3 gap-4">
        {items.map((item, idx) => (
          <div key={idx} className="bento-card flex items-center gap-6 text-left">
            <div className="text-brand-ink p-4 bg-zinc-100 rounded-2xl">{item.icon}</div>
            <div>
              <h3 className="text-lg font-bold">{item.title}</h3>
              <p className="text-xs text-brand-muted mt-1">{item.desc}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

const Footer = () => {
  return (
    <footer className="py-24 px-6 max-w-7xl mx-auto border-t border-brand-border">
      <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-20">
        <div>
          <a href="#" className="text-2xl font-bold tracking-tight mb-6 block">EverythingHub</a>
          <p className="text-brand-muted text-sm leading-relaxed">
            Defining the modern standard for premium shopping. Curated essentials for the discerning lifestyle.
          </p>
        </div>
        <div className="md:col-span-3 grid grid-cols-2 md:grid-cols-3 gap-8">
           <div>
            <h4 className="text-xs font-bold uppercase tracking-widest mb-6">Store</h4>
            <ul className="flex flex-col gap-3 text-sm text-brand-muted">
              <li><a href="#" className="hover:text-brand-ink transition-colors">Curations</a></li>
              <li><a href="#" className="hover:text-brand-ink transition-colors">New Arrivals</a></li>
              <li><a href="#" className="hover:text-brand-ink transition-colors">Sustainability</a></li>
            </ul>
          </div>
          <div>
            <h4 className="text-xs font-bold uppercase tracking-widest mb-6">Service</h4>
            <ul className="flex flex-col gap-3 text-sm text-brand-muted">
              <li><a href="#" className="hover:text-brand-ink transition-colors">Contact</a></li>
              <li><a href="#" className="hover:text-brand-ink transition-colors">Shipping</a></li>
              <li><a href="#" className="hover:text-brand-ink transition-colors">FAQ</a></li>
            </ul>
          </div>
          <div>
            <h4 className="text-xs font-bold uppercase tracking-widest mb-6">Newsletter</h4>
            <div className="flex gap-2">
              <input type="email" placeholder="Email" className="bg-white border border-brand-border rounded-xl py-2 px-4 text-sm w-full outline-none focus:border-brand-ink" />
              <button className="bg-brand-ink text-white px-4 py-2 rounded-xl text-xs font-bold uppercase transition-colors hover:bg-brand-muted">Join</button>
            </div>
          </div>
        </div>
      </div>
      <div className="flex flex-col md:flex-row justify-between items-center gap-6 text-[10px] text-brand-muted uppercase tracking-widest font-bold">
        <p>&copy; 2026 Everything Hub.</p>
        <div className="flex gap-8">
          <a href="#" className="hover:text-brand-ink">Instagram</a>
          <a href="#" className="hover:text-brand-ink">Terms</a>
        </div>
      </div>
    </footer>
  );
};

export default function App() {
  return (
    <div className="min-h-screen pt-4">
      <Navbar />
      <BentoHeroAndCategories />
      <FeaturedProducts />
      <Features />
      <Footer />
    </div>
  );
}
