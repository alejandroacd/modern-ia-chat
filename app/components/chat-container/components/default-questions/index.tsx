'use client'

import Question from "../question"
import { questions } from "./config"
import { motion } from "framer-motion"

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

export default function DefaultQuestions() {
    return (
        <motion.section
            className="flex flex-col gap-3 my-3 p-6 md:p-0"
            variants={containerVariants}
            initial="hidden"
            animate="show"
        >
            {questions.map((question, index) => (
                <motion.div key={index} variants={itemVariants}>
                    <Question question={question.question} />
                </motion.div>
            ))}
        </motion.section>
    )
}
