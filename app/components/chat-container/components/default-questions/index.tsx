'use client'
import Question from "../question"
import { questions } from "./config"
import { motion } from "framer-motion"
import { useMemo, useState, useEffect } from "react"

const containerVariants = {
    hidden: {},
    show: {
        transition: {
            staggerChildren: 0.2,
        },
    },
}

const itemVariants = {
    hidden: { opacity: 0, y: 10 },
    show: { opacity: 1, y: 0, transition: { duration: 0.5, ease: 'easeOut' } },
}

function getRandomQuestions(array: typeof questions, count: number) {
    const shuffled = [...array].sort(() => 0.5 - Math.random())
    return shuffled.slice(0, count)
}

export default function DefaultQuestions() {

    const [mounted, setMounted] = useState(false)

    useEffect(() => {
        setMounted(true)
    }, [])

    const randomQuestions = useMemo(() => getRandomQuestions(questions, 3), [])
    if (!mounted) return null

    return (
        <motion.section
            className="flex flex-col gap-3 my-3 p-6 md:p-0"
            variants={containerVariants}
            initial="hidden"
            animate="show"
        >
            {randomQuestions.map((question, index) => (
                <motion.div key={index} variants={itemVariants}>
                    <Question question={question.question} />
                </motion.div>
            ))}
        </motion.section>
    )
}
