"use client"
import { motion } from "framer-motion"

export const FadeIn = ({ children }) => {
    return (
        <motion.div
            initial={{ opacity: 0, translateY: 10 }}
            animate={{ opacity: 1, translateY: 0 }}
        >
            { children }
        </motion.div>
    )
}