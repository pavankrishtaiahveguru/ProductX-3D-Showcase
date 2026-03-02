import { motion } from "framer-motion";
import { Link } from "react-router-dom";

const Footer = () => {
    const year = new Date().getFullYear();
  return (
    <footer className="relative mt-32 border-t border-neutral-200 bg-white">
      <div className="max-w-7xl mx-auto px-6 py-16 grid md:grid-cols-4 gap-12">
        {/* brand */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
        >
          <h2 className="text-xl font-semibold">ProductX</h2>
          <p className="mt-4 text-neutral-500 text-sm">
            Premium product crafted with innovation and modern design.
          </p>
        </motion.div>

        {/* links */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
        >
          <h4 className="font-medium mb-4">Product</h4>
          <div className="flex flex-col gap-3 text-sm text-neutral-500">
            <Link className="hover:text-neutral-900 transition">About</Link>
            <Link className="hover:text-neutral-900 transition">Careers</Link>
            <Link className="hover:text-neutral-900 transition">Contact</Link>
          </div>
        </motion.div>

        {/* Newsletter */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
        >
          <h4 className="font-medium mb-4">Subscribe</h4>
          <div className="flex gap-2">
            <input
              type="email"
              name=""
              placeholder="Email address"
              className="flex-1 px-4 py-2 border rounded-lg border-neutral-200 focus:outline-none focus:border-neutral-400"
            />
            <button className="px-4 py-2 rounded-lg bg-neutral-900 text-white hover:bg-neutral-800 transition cursor-pointer">Join</button>
          </div>
        </motion.div>
      </div>
      {/* Bottom */}
      <div className="border-t border-neutral-200 text-center py-6 text-sm text-neutral-500">
        © {year} Product Showcase. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
