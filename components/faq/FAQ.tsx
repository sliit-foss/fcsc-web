import { useEffect } from 'react'
import Aos from 'aos'
import 'aos/dist/aos.css'
import Image from 'next/image'
import QAComponent, { QAProps } from '../common/QA/QAComponent'

import imgFaq from '../../public/faq/FAQ.png'

export default function FAQ(): JSX.Element {
  useEffect(() => {
    Aos.init({ duration: 1000 })
  }, [])

  const data: Array<QAProps> = [
    {
      title: 'Lorem ipsum dolor sit amet',
      body: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. In sed tempor sem. Aenean vel turpis feugiat.',
    },
    {
      title: 'Nunc maximus, magna at ultricies elementum',

      body: 'Nunc maximus, magna at ultricies elementum, risus turpis vulputate quam, vitae convallis ex tortor sed dolor.',
    },
    {
      title: 'Curabitur laoreet, mauris vel blandit fringilla',

      body: 'Curabitur laoreet, mauris vel blandit fringilla, leo elit rhoncusnunc, ac sagittis leo elit vel lorem.',
    },
    {
      title: 'risus turpis vulputate quam, vitae convallis.',

      body: 'current version is 1.2.1',
    },
  ]

  return (
    <section
      className="flex flex-col md:flex-row items-center z-0"
      data-aos="fade-up"
    >
      <div className="w-10/12 md:w-9/12">
        <Image
          src={imgFaq}
          alt="SLIIT FCSC"
          quality={90}
          layout="responsive"
          placeholder="blur"
        />
      </div>
      <div
        className="flex flex-col py-10 px-8 md:px-14 md:pr-0 "
        style={{ width: '85vw' }}
      >
        <h2 className="text-3xl sm:text-4xl font-bold md:text-left text-center mb-10 md:ml-7">
          FAQs
        </h2>
        <div>
          {data.map((item) => {
            return (
              <QAComponent
                title={item.title}
                body={item.body}
                key={item.title + item.body}
              />
            )
          })}
        </div>
      </div>
    </section>
  )
}
