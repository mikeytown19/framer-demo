import React, {useState} from "react"
import Layout from "../components/layout"
import { motion, useMotionValue, AnimatePresence } from "framer-motion"
import styled from "@emotion/styled"



const IndexPage = ({ isVisible }) => {
  const [isOpen, toggleOpen] = useState(false);
  const variants = {
    active: {
      backgroundColor: '#2CF6B3',
    },
    inactive: {
      backgroundColor: '#5158BB',
      cursor: 'pointer',
      transition: {
        duration: .3
      }
    }
  }

  const hoverVariant = {
    active: {
      rotate: 720,
      backgroundColor: '#2CF6B3',
      transition: {
        duration: .5
      }
    },
    inactive: {
      backgroundColor: '#5158BB',
      transition: {
        duration: 1
      }
    }
  }

  const spring = {
    type: "spring",
    damping: 10,
    stiffness: 100,
  }


  const MyComponent = () => {
    return (
      <motion.div
      onTap={() => toggleOpen(!isOpen)}
      variants={variants}
      animate={isOpen ? 'active' :'inactive' }

      />
    )
  }



  return (
    <Layout>
      <div className="example-container">
        <motion.div
          whileHover={{cursor: 'pointer'}}
          whileTap={{ y: "100%" }}
          initial={{ y: "0" }}
        />
        <motion.div
        onTap={() => toggleOpen(!isOpen)}
         variants={variants}
         animate="inactive"
         whileHover="active"

        />
        <MyComponent />
        <motion.div
          variants={hoverVariant}
          whileHover={{cursor: 'pointer'}}
          whileTap="active"
        />

      <motion.div
          drag="x"
          dragConstraints={{ left: 0, right: 200 }}
          dragElastic={0.2}
          dragPropagation
      />

       <motion.div
      animate={isOpen ?  {x: 0, opacity:1} : {x: 400, opacity: 0}}
      initial={{x: 400}}
      transition={{ease: 'easeOut', duration: .3}}
       />




      </div>

    </Layout>
  )
}

export default IndexPage
