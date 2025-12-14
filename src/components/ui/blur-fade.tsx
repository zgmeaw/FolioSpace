import { useRef } from "react"
import {
  AnimatePresence,
  motion,
  useInView,
  UseInViewOptions,
  Variants,
} from "framer-motion"

type MarginType = UseInViewOptions["margin"]

interface BlurFadeProps {
  children: React.ReactNode
  className?: string
  variant?: {
    hidden: { y: number }
    visible: { y: number }
  }
  duration?: number
  delay?: number
  yOffset?: number
  inView?: boolean
  inViewMargin?: MarginType
  blur?: string
}

export function BlurFade({
  children,
  className,
  variant,
  duration = 0.4,
  delay = 0,
  yOffset = 6,
  inView = false,
  inViewMargin = "-50px",
  blur = "6px",
}: BlurFadeProps) {
  const ref = useRef(null)
  const inViewResult = useInView(ref, { once: true, margin: inViewMargin })
  const isInView = !inView || inViewResult
  // 优化：在移动端禁用 blur 效果，使用纯 opacity 动画（GPU 加速）
  const isMobile = typeof window !== 'undefined' && window.innerWidth <= 768;
  const defaultVariants: Variants = {
    hidden: { y: yOffset, opacity: 0, ...(isMobile ? {} : { filter: `blur(${blur})` }) },
    visible: { y: -yOffset, opacity: 1, ...(isMobile ? {} : { filter: `blur(0px)` }) },
  }
  const combinedVariants = variant || defaultVariants
  return (
    <AnimatePresence>
      <motion.div
        ref={ref}
        initial="hidden"
        animate={isInView ? "visible" : "hidden"}
        exit="hidden"
        variants={combinedVariants}
        transition={{
          delay: 0.04 + delay,
          duration,
          ease: "easeOut",
        }}
        style={{ willChange: 'transform, opacity' }}
        className={className}
      >
        {children}
      </motion.div>
    </AnimatePresence>
  )
}