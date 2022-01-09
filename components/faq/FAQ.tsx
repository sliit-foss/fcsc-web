import Image from 'next/image'
import QAComponent, { QAProps } from '../common/QA/QAComponent'
import imgFaq from '../../public/faq/FAQ.svg'

export default function FAQ(): JSX.Element {
  const data: Array<QAProps> = [
    {
      title: 'Lorem ipsum dolor sit amet',
      body: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. In sed tempor sem. Aenean vel turpis feugiat.',
      createdAt: '',
    },
    {
      title: 'Nunc maximus, magna at ultricies elementum',
      body: 'Nunc maximus, magna at ultricies elementum, risus turpis vulputate quam, vitae convallis ex tortor sed dolor.',
      createdAt: '',
    },
    {
      title: 'Curabitur laoreet, mauris vel blandit fringilla',
      body: 'Curabitur laoreet, mauris vel blandit fringilla, leo elit rhoncusnunc, ac sagittis leo elit vel lorem.',
      createdAt: '',
    },
    {
      title: 'risus turpis vulputate quam, vitae convallis.',
      body: 'current version is 1.2.1',
      createdAt: '',
    },
  ]

  return (
    <section className="flex flex-col md:flex-row items-center z-0">
      <div className="w-full md:w-9/12" data-aos="fade-right">
        <Image src={imgFaq} alt="SLIIT FCSC" quality={90} layout="responsive" />
      </div>
      <div
        className="flex flex-col py-10 px-1 md:px-14 md:pr-0 "
        style={{ width: '85vw' }}
      >
        <h2
          className="text-3xl sm:text-4xl font-bold md:text-left text-center mb-10 md:ml-7"
          data-aos="fade-left"
        >
          FAQs
        </h2>
        <div>
          {data.map((item, index) => {
            return (
              <div
                key={item.title + item.body}
                data-aos={index % 2 == 1 ? 'fade-left' : 'fade-right'}
              >
                <QAComponent title={item.title} body={item.body} />
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
