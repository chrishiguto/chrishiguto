import { motion, useTransform, useScroll } from 'framer-motion'
import { useRef } from 'react'

import { Container } from 'components/Container'
import Heading from 'components/Heading'
import Text from 'components/Text'

const SectionTimeline = () => {
  const targetRef = useRef(null)
  const { scrollYProgress } = useScroll({
    target: targetRef
  })

  const x = useTransform(scrollYProgress, [0, 1], ['0', '-150%'])

  return (
    <section
      ref={targetRef}
      className="flex items-start relative h-[300vh] mt-24 bg-neutral-900 px-4 max-w-screen-lg mx-auto"
    >
      <section className="sticky top-0 flex flex-col h-[78vh] overflow-hidden">
        <Heading size="xlarge">Timeline</Heading>
        <Text className="mt-8">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quas modi
          corrupti autem voluptatibus velit aliquid libero nulla eaque nesciunt
          perferendis.
        </Text>
        <section className="sticky top-0 flex h-screen -mt-8 items-center overflow-hidden space-x-32 w-min">
          <motion.div
            style={{ x }}
            className="flex flex-col border rounded-md p-10 h-[450px] w-[450px]"
          >
            <Heading size="xlarge">Concepta Technologies</Heading>
            <div className="mt-4">
              <Text>
                I&apos;m a front-end developer, developing applications using
                React and React Native.
              </Text>
              <Text>
                I&apos;m a front-end developer, developing applications using
                React and React Native.
              </Text>
            </div>
          </motion.div>

          <motion.div
            style={{ x }}
            className="flex flex-col border p-10  h-[450px] w-[450px]"
          >
            <Heading size="xlarge">Concepta Technologies</Heading>
            <div className="mt-4">
              <Text>
                I&apos;m a front-end developer, developing applications using
                React and React Native.
              </Text>
            </div>
          </motion.div>

          <motion.div
            style={{ x }}
            className="flex flex-col border p-10  h-[450px] w-[450px]"
          >
            <Heading size="xlarge">Concepta Technologies</Heading>
            <div className="mt-4">
              <Text>
                I&apos;m a front-end developer, developing applications using
                React and React Native.
              </Text>
            </div>
          </motion.div>
        </section>
      </section>
    </section>
  )
}

export default SectionTimeline
