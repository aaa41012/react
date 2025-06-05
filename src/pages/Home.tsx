// src/pages/Home.tsx
import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'

export default function Home() {
  return (
    <section className="flex flex-col items-center justify-center text-center px-6 py-20 bg-gradient-to-b from-gray-950 to-gray-900 text-white">
      <motion.h1
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="text-5xl md:text-6xl font-extrabold leading-tight mb-6"
      >
        Building with <span className="text-blue-400">AI</span>.<br />
        Creating the <span className="text-pink-400">Future</span>.
      </motion.h1>

      <motion.p
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.4, duration: 0.6 }}
        className="text-xl text-gray-300 max-w-xl mb-10"
      >
        我是一位結合前端開發與 AI 工具的創意開發者，熱衷於將技術轉化為有趣、互動的體驗。
      </motion.p>

      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 0.8 }}
      >
        <Link
          to="/projects"
          className="bg-blue-500 hover:bg-blue-600 text-white text-lg font-semibold py-3 px-6 rounded-xl transition shadow-lg"
        >
          看我的作品
        </Link>
      </motion.div>
    </section>
  )
}
