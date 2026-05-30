import { motion } from 'framer-motion'

export function BackgroundMesh() {
  return (
    <div className="pointer-events-none fixed inset-0 -z-10 overflow-hidden">
      <motion.div
        className="absolute left-1/4 top-0 h-[500px] w-[500px] -translate-x-1/2 rounded-full bg-blue-600/15 blur-[120px]"
        animate={{ opacity: [0.4, 0.6, 0.4] }}
        transition={{ duration: 10, repeat: Infinity }}
      />
      <motion.div
        className="absolute bottom-1/4 right-0 h-[400px] w-[400px] rounded-full bg-cyan-500/10 blur-[100px]"
        animate={{ x: [0, -20, 0] }}
        transition={{ duration: 14, repeat: Infinity }}
      />
    </div>
  )
}
