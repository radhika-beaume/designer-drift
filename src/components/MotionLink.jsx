import { motion } from 'framer-motion'
import { duration } from '../motion.js'

export default function MotionLink({ children, style, ...props }) {
  return (
    <motion.div
      whileTap={{ scale: 0.97, opacity: 0.6 }}
      transition={{ duration: duration(100) }}
      style={{ display: 'inline-block', ...style }}
      {...props}
    >
      {children}
    </motion.div>
  )
}
