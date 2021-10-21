import Image from 'next/image'
import HeaderImage from '../components/common/HeaderImage'
import communityVector from '../public/community/communityHeroSectVector.svg'
import sliitImage from '../public/community/smallImage.svg'
import viramayaPic01 from '../public/community/Picture1.jpg'
import viramayaPic02 from '../public/community/Picture2.jpg'
import bl1 from '../public/community/Picture2_1.jpg'
import bl2 from '../public/community/Picture2_2.jpg'
import miniHack1 from '../public/community/Picture3_1.jpg'
import miniHack2 from '../public/community/Picture3_2.jpg'
import pirithC1 from '../public/community/Picture4_1.jpg'
import pirithC2 from '../public/community/Picture4_2.jpg'
import wh01 from '../public/community/Picture7_1.jpg'
import wh02 from '../public/community/Picture7_2.jpg'
import bash01 from '../public/community/Picture8_1.jpg'
import bash02 from '../public/community/Picture8_2.jpg'
import Head from 'next/head'
import React from 'react'

export default function Community(): JSX.Element {
  return (
    <>
      <Head>
        <title>Community</title>
      </Head>
      <div className="justify-items-center">
        <h1
          className="w-1/4 lg:w-3/4 title-font text-xl sm:text-2xl lg:text-4xl md:text-3xl md:ml-10 font-medium text-white absolute sm0:ml-6 mr-auto left-0 sm:left-6 md:left-0 lg:left-20 right-0 p-0 md:py-14 z-20"
          style={{ marginTop: '8%', width: '77%' }}
          data-aos="fade-down"
        >
          Faculty of Computing <br />
          Students Community
        </h1>
        <HeaderImage />
        <div
          className="lg:absolute lg:top-48 lg:left-1/2
    md:absolute md:top-96 md:left-96 relative ml-10 mb-8 w-3/4 md:w-4/12"
          data-aos="fade-left"
        >
          <Image
            src={communityVector}
            alt="SLIIT FCSC"
            quality={90}
            layout="intrinsic"
          />
        </div>

        <div
          className="grid grid-rows-1 px-10 lg:px-32 pb-5 mt-16"
          data-aos="fade-right"
        >
          <div className="grid-cols-1 lg:w-1/2 md:w-1/2">
            <p className="mt-2 text-center md:text-left">
              The faculty of computing student’s community was established under
              the Faculty of Computing of SLIIT and consists of Computing
              undergraduates. Since there is a growing competition in the Sri
              Lankan job market in relation to this field of knowledge, we focus
              on nurturing the hard and soft skills which would improve their
              employability after the successful completion of the degree, as
              well as organizing events for the Student Community to grow
              academically as well as to get in touch with their creative
              senses, to promote a stress free and memorable University
              experience.
            </p>
          </div>
        </div>

        <div
          className="grid grid-rows-1 px-10 lg:px-32 pb-8"
          data-aos="fade-right"
        >
          <div className="grid-cols-1 w-full">
            <p className="text-center md:text-left">
              FCSC is the most prominent Student Community of SLIIT which
              thrives for the betterment of the largest and most well-known
              Faculty of SLIIT.
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 px-10 lg:px-32 pb-8">
          <div className="lg:flex lg:flex-row md:flex md:flex-col w-full">
            <div className="lg:w-1/2 md:w-full" data-aos="fade-right">
              <Image
                src={sliitImage}
                alt="SLIIT FCSC"
                quality={90}
                layout="intrinsic"
                className="rounded-md filter hover:brightness-105 transition ease-in duration-200"
              />
            </div>

            <div
              className="sm:pt-8 lg:pl-10 lg:w-1/2 md:w-full mx-4 lg:mx-0"
              data-aos="fade-left"
            >
              <p className="font-bold text-left my-6 lg:-mt-3.5 lg:mb-0">
                Objectives of Faculty of Computing Students’ Community:
              </p>
              <ul className="list-disc sm:pt-5 lg:pl-6 md:pl-5">
                <li>
                  To support the academic programs conducted by the Faculty of
                  Computing by organizing co-curricular activities.
                </li>
                <li>
                  To provide opportunities for students to be aware of latest
                  trends and industry expectations of by organizing events where
                  industry experts participate.
                </li>
                <li>
                  To encourage and provide support to student communities within
                  the Faculty of Computing to organize events which meet the
                  aims and objectives of the Faculty of Computing Student Body.
                </li>
                <li>
                  To impart the necessary soft skills to the student in the
                  Faculty of Computing which are required to successfully face
                  the competitive atmosphere in today’s job market.
                </li>
                <li>To promote and organize cultural and social activities.</li>
              </ul>
            </div>
          </div>
        </div>

        <div className="grid grid-rows-1 px-10 lg:px-32 pb-3" data-aos="fade-left">
          <div className="grid-cols-1 w-full">
            <p className="text-left">
              The following are some of the Main events organized by Faculty of
              Computing Students’ Community,
            </p>
          </div>
        </div>

        <div className="grid grid-rows-1 pl-4 mx-10 lg:mx-32 pb-8">
          <div className="grid-cols-1 w-full">
            <ol className="list-decimal font-bold" data-aos="fade-left">
              <li>Wiramaya</li>
            </ol>

            <p data-aos="fade-left">
              <b>Wiramaya</b> is arguably the most prominent event organized by
              the Student Community of SLIIT. This event is organized by the
              Faculty of Computing Students’ Community (FCSC) of SLIIT and pays
              homage to the Classical aspect of Sri Lankan music. The Faculty of
              Computing Student community, being the largest student body of the
              university, puts together an event of alluring musical
              performances of the university students; with the potential to
              blossom in the music industry, alongside well distinguished and
              reputed professional artists of the Sri Lankan music industry. It
              aims bringing together students as well as the academic and
              non-academic staff of SLIIT, to relax and enjoy a musical
              extravaganza unlike any other. Talking about the Initiation,{' '}
              <b>WIRAMAYA</b> made its debut in the year 2012 at SLIIT main
              campus premises, Malabe. It pioneered in showcasing the talents of
              its own students and has since been an event which has unearthed
              hidden gems from the midst of our very own community and attracted
              a keen audience from the university community. After a hiatus of
              five years, <b>WIRAMAYA</b> made its comeback in the year 2017.
            </p>
          </div>

          <div className="grid grid-cols-1 mt-4 px-10 pb-8">
            <div className="lg:flex lg:flex-row md:flex md:flex-col w-full justify-around mt-12">
              <div className="lg:w-2/5 md:w-full" data-aos="fade-right">
                <Image
                  src={viramayaPic01}
                  alt="SLIIT FCSC"
                  quality={90}
                  layout="intrinsic"
                  className="rounded-md filter hover:brightness-105 transition ease-in duration-200"
                />
              </div>
              <div className="lg:w-2/5 md:w-full" data-aos="fade-left">
                <Image
                  src={viramayaPic02}
                  alt="SLIIT FCSC"
                  quality={90}
                  layout="intrinsic"
                  width={630}
                  height={418}
                  className="rounded-md filter hover:brightness-105 transition ease-in duration-200"
                />
              </div>
            </div>
          </div>
        </div>

        <div className="grid grid-rows-1 pl-4 mx-10 lg:mx-32 pb-8">
          <div className="grid-cols-1 w-full">
            <ol
              className="list-decimal font-bold"
              start={2}
              data-aos="fade-left"
            >
              <li>Blood Donation</li>
            </ol>

            <p data-aos="fade-left">
              An open Blood donation organized by the Faculty of Computing
              Students’ Community in collaboration with the Sri Lanka blood
              bank. The true meaning of sharing and contribution will be
              portrayed, and students will be joining for this program despite
              what their year is. This service project is one of the signature
              events organized by the Faculty of Computing Students’ Community
              where thousands of lives are benefited from this. This is
              organized at the SLIIT Auditorium and Students from all faculties
              join to donate blood.
            </p>
          </div>

          <div className="grid grid-cols-1 mt-4 pl-10 pr-10 pb-8">
            <div className="lg:flex lg:flex-row md:flex md:flex-col w-full justify-around mt-12">
              <div className="lg:w-2/5 md:w-full" data-aos="fade-right">
                <Image
                  src={bl1}
                  alt="SLIIT FCSC"
                  quality={90}
                  layout="intrinsic"
                  className="rounded-md filter hover:brightness-105 transition ease-in duration-200"
                />
              </div>
              <div className="lg:w-2/5 md:w-full" data-aos="fade-left">
                <Image
                  src={bl2}
                  alt="SLIIT FCSC"
                  quality={90}
                  layout="intrinsic"
                  className="rounded-md filter hover:brightness-105 transition ease-in duration-200"
                />
              </div>
            </div>
          </div>
        </div>

        <div className="grid grid-rows-1 mx-16 lg:mx-36 pb-8">
          <div className="grid-cols-1 w-full">
            <ol
              className="list-decimal font-bold"
              start={3}
              data-aos="fade-left"
            >
              <li>Mini Hackathon</li>
            </ol>

            <p data-aos="fade-left">
              This event is organized by the FCSC collaborating with the MS Club
              of SLIIT. Mini Hackathon is a competition, targeting 1st and 2nd
              year students; to improve their brainstorming and business
              analytical skills. This is not only a event but also a new
              experience for the Juniors of the Faculty developing their team
              skills, communication skills and other skills mentioned above.
              Here they come up with an innovative idea within a timeframe given
              to the contestants. The Panel of Judges is a well-experienced
              judge panel with a bank of knowledge. The Winners are awarded with
              official certificates and valuable gifts.
            </p>
          </div>

          <div className="grid grid-cols-1 mt-4 pl-10 pr-10 pb-8">
            <div className="lg:flex lg:flex-row md:flex md:flex-col w-full justify-around mt-12">
              <div className="lg:w-2/5 md:w-full" data-aos="fade-right">
                <Image
                  src={miniHack1}
                  alt="SLIIT FCSC"
                  quality={90}
                  layout="intrinsic"
                  className="rounded-md filter hover:brightness-105 transition ease-in duration-200"
                />
              </div>
              <div className="lg:w-2/5 md:w-full" data-aos="fade-left">
                <Image
                  src={miniHack2}
                  alt="SLIIT FCSC"
                  quality={90}
                  layout="intrinsic"
                  className="rounded-md filter hover:brightness-105 transition ease-in duration-200"
                />
              </div>
            </div>
          </div>
        </div>

        <div className="grid grid-rows-1 mx-16 lg:mx-36 pb-8">
          <div className="grid-cols-1 w-full ">
            <ol
              className="list-decimal font-bold"
              start={4}
              data-aos="fade-left"
            >
              <li>Annual Pirith Ceremony</li>
            </ol>

            <p data-aos="fade-left">
              The whole academic staff and the student body of SLIIT
              participates in this spiritual event. Buddhist Priests from the
              temples around Malabe will be invited for the Pirith Ceremony. All
              participants will stay overnight at SLIIT. This a great
              opportunity for the students to build a great bond with the
              community.
            </p>
          </div>

          <div className="grid grid-cols-1 mt-4 pl-10 pr-10 pb-8">
            <div className="lg:flex lg:flex-row md:flex md:flex-col w-full justify-around mt-12">
              <div className="lg:w-2/5 md:w-full" data-aos="fade-right">
                <Image
                  src={pirithC1}
                  alt="SLIIT FCSC"
                  quality={90}
                  layout="intrinsic"
                  className="rounded-md filter hover:brightness-105 transition ease-in duration-200"
                />
              </div>
              <div className="lg:w-2/5 md:w-full" data-aos="fade-left">
                <Image
                  src={pirithC2}
                  alt="SLIIT FCSC"
                  quality={90}
                  layout="intrinsic"
                  height={421}
                  width={632}
                  className="rounded-md filter hover:brightness-105 transition ease-in duration-200"
                />
              </div>
            </div>
          </div>
        </div>

        <div className="grid grid-rows-1 mx-16 lg:mx-36 pb-8">
          <div className="grid-cols-1 w-full">
            <ol
              className="list-decimal font-bold"
              start={5}
              data-aos="fade-left"
            >
              <li>Talk with Giant</li>
            </ol>

            <p data-aos="fade-left">
              This is an informational interview series which is organized by
              FCSC by collaborating with Sri Lanka’s popular and successful
              personalities. We believe that the students are in need of
              motivation at times like these in order to face the challenges
              during a pandemic like this. These sessions will be opened to all
              students from all academic years. Experts will answer students
              that are raised by students, and this will provide motivation and
              enthusiasm to students in order to carry out their future
              endeavors. Our main goal is to reach out to the students during a
              global pandemic to support them.
            </p>
            <br />
            <p data-aos="fade-left">
              We have already concluded two sessions with two giants from the
              Sri Lankan cinema, Mr. Thumindu Dodanthenna & Mr. Wasantha
              Dukgannarala respectively. We have received positive feedbacks
              with over 2500 participants.
            </p>
          </div>
        </div>

        <div className="grid grid-rows-1 mx-16 lg:mx-36 pb-8">
          <div className="grid-cols-1 w-full">
            <ol
              className="list-decimal font-bold"
              start={6}
              data-aos="fade-right"
            >
              <li>SLIIT GAMBIT</li>
            </ol>

            <p data-aos="fade-right">
              The covid-19 pandemic has limited every student and every
              individual from physically meeting, We the FCSC as the main
              student community at SLIIT have decided to move on with the
              current situation. To face the new normal atmosphere the best move
              to make during this pandemic is to shift into virtual platforms
              and execute projects.
            </p>
            <br />
            <p data-aos="fade-right">
              The FCSC has focused on finding a method to connect students to
              stabilize a good relationship between students since physical
              meeting are not permitted. FCSC has partnered up with the Chess
              team of SLIIT to host a Virtual Chess championship the titled as
              “Gambit”. This chess tournament is an open event for all the
              faculties.
            </p>
            <br />
            <p data-aos="fade-right">
              We believe that this project will enhance the relationship between
              students to make a positive impact on their mental health and
              social wellbeing.
            </p>
          </div>
        </div>

        <div className="grid grid-rows-1 mx-16 lg:mx-36 pb-8">
          <div className="grid-cols-1 w-full">
            <ol
              className="list-decimal font-bold"
              start={7}
              data-aos="fade-left"
            >
              <li>Wasantha Muwadora</li>
            </ol>
            <p data-aos="fade-left">
              This event is the main event to celebrate the Sinhala and Tamil
              new year in Sri Lanka. An <b>Awurudu Uthsawaya</b> that is open to
              all students of SLIIT And the Staff members. It is a day full of
              traditional games and events.
            </p>
            <br />
            <p data-aos="fade-left">
              The Sinhala and Tamil new year are celebrated at the SLIIT
              premises with the participation of all students and the staff
              members. The true Sri Lankan traditions and the norms will be
              celebrated here at SLIIT Premises. The true meaning of
              togetherness and unity will be portrayed among the students.
              Individuals of all races and religions will participate at this
              event. And the whole student body and the staff will join together
              as one family.
            </p>
          </div>

          <div className="grid grid-cols-1 mt-4 pl-10 pr-10 pb-8">
            <div className="lg:flex lg:flex-row md:flex md:flex-col w-full justify-around mt-12">
              <div className="lg:w-2/5 md:w-full" data-aos="fade-right">
                <Image
                  src={wh01}
                  alt="SLIIT FCSC"
                  quality={90}
                  layout="intrinsic"
                  className="rounded-md filter hover:brightness-105 transition ease-in duration-200"
                />
              </div>
              <div className="lg:w-2/5 md:w-full" data-aos="fade-left">
                <Image
                  src={wh02}
                  alt="SLIIT FCSC"
                  quality={90}
                  layout="intrinsic"
                  height={730}
                  className="rounded-md filter hover:brightness-105 transition ease-in duration-200"
                />
              </div>
            </div>
          </div>
        </div>

        <div className="grid grid-rows-1 mx-16 lg:mx-36 pb-8">
          <div className="grid-cols-1 w-full">
            <ol
              className="list-decimal font-bold"
              start={8}
              data-aos="fade-left"
            >
              <li>SLIIT BASH</li>
            </ol>

            <p data-aos="fade-left">
              A friendly cricket tournament that is open to all the students of
              SLIIT. This comprise of a full day of cricket matches and stalls.
              This is a project that is organized in order to enhance the
              relationship between students at SLIIT. Sportsmanship is vital for
              human beings and most importantly it is important to all the
              students as they’re entering a world of competition. At this event
              the students will get a lot of exposure to the competitiveness and
              the value of teamwork for their future endeavors. Building strong
              teamworking individuals and competitive students is the main
              motive of this and to enhance the Understanding between students.
            </p>
          </div>

          <div className="grid grid-cols-1 mt-4 pl-10 pr-10 pb-8">
            <div className="lg:flex lg:flex-row md:flex md:flex-col w-full justify-around mt-12">
              <div className="lg:w-2/5 md:w-full" data-aos="fade-right">
                <Image
                  src={bash01}
                  alt="SLIIT FCSC"
                  quality={90}
                  layout="intrinsic"
                  className="rounded-md filter hover:brightness-105 transition ease-in duration-200"
                />
              </div>
              <div className="lg:w-2/5 md:w-full" data-aos="fade-left">
                <Image
                  src={bash02}
                  alt="SLIIT FCSC"
                  quality={90}
                  layout="intrinsic"
                  className="rounded-md filter hover:brightness-105 transition ease-in duration-200"
                />
              </div>
            </div>
          </div>
        </div>

        <div className="grid grid-rows-1 mx-16 lg:mx-36 pb-8 mb-12">
          <div className="grid-cols-1 w-full">
            <ol
              className="list-decimal font-bold"
              start={9}
              data-aos="fade-left"
            >
              <li>BUILD-UP Wednesday</li>
            </ol>
            <p data-aos="fade-left">
              This is organized by the FCSC in collaboration with the Career
              Guidance Unit of SLIIT. This is held on every Wednesday with the
              participation of Students and Industry experts who will share
              their experience with the students. As the students will be
              stepping into the industry in the upcoming years these kinds of
              informational projects are extremely vital. The students will have
              an understanding and an idea regarding the industry and will be
              motivated to work towards their goals. The Faculty of Computing
              Student Community has understood the vitality of these projects
              and organized the sessions for betterment of these students’
              future activities. Since the ongoing pandemic this project has
              moved to a virtual platform and is being conducted successfully.
            </p>
          </div>
        </div>
      </div>
    </>
  )
}
