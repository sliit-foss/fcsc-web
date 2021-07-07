import Image from 'next/image'
import QAComponent from './QAComponent'

//images
import imgFaq from '../../public/faq/FAQ.png'

export default function FAQ(): JSX.Element {
  const data = [
    {
      question: 'Lorem ipsum dolor sit amet',
      answer:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. In sed tempor sem. Aenean vel turpis feugiat.',
    },
    {
      question: 'Nunc maximus, magna at ultricies elementum',

      answer:
        'Nunc maximus, magna at ultricies elementum, risus turpis vulputate quam, vitae convallis ex tortor sed dolor.',
    },
    {
      question: 'Curabitur laoreet, mauris vel blandit fringilla',

      answer:
        'Curabitur laoreet, mauris vel blandit fringilla, leo elit rhoncusnunc, ac sagittis leo elit vel lorem.',
    },
    {
      question: 'risus turpis vulputate quam, vitae convallis.',

      answer: 'current version is 1.2.1',
    },
  ]

  return (
      <section className="flex flex-col md:flex-row items-center ">
        <div className="w-10/12 md:w-8/12">
          <Image
            src={imgFaq}
            alt="SLIIT FCSC"
            quality={90}
            layout="responsive"
            placeholder="blur"
          />
        </div>
        <div
          className="flex flex-col py-10 px-8 md:px-14 "
          style={{ width: '85vw' }}
        >
          <h2 className="text-4xl sm:text-5xl font-bold md:text-left text-center mb-10 md:ml-7">
            FAQs
          </h2>
          <div>
            {data.map((items) => {
              return (
                <QAComponent
                  question={items.question}
                  answer={items.answer}
                  key={items.question + items.answer}
                />
              )
            })}
          </div>
        </div>
      </section>
  )
}
