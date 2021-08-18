import Image from 'next/image'
import background from '../public/shapes/1.png'
import communityVector from '../public/community/communityHeroSectVector.svg'
import sliitImage from '../public/community/smallImage.svg'
import viramayaPic01 from '../public/community/Picture1.jpg'
import viramayaPic02 from '../public/community/Picture2.jpg'
import bash01 from '../public/community/Picture8_1.jpg'
import bash02 from '../public/community/Picture8_2.jpg'
import wh01 from '../public/community/Picture7_1.jpg'
import wh02 from '../public/community/Picture7_2.jpg'

export default function Community(): JSX.Element {

  return <div className="justify-items-center ">
    <h1
      className="title-font sm:text-2xl lg:text-4xl md:text-3xl md:ml-10 font-medium text-white w-3/4 absolute ml-auto mr-auto left-0 right-0 p-0 md:py-14 z-20"
      style={{ marginTop: '8%', width: '77%' }}
    >
      Faculty of Computing <br/>
      Students Community
    </h1>
    <Image
      className="transition-all ease-out duration-500"
      src={background}
      alt="SLIIT FCSC"
      quality={90}
      layout="responsive"
      placeholder="blur"
      height="700"
    />

    <div className="lg:absolute lg:top-48 lg:left-1/2
    md:absolute md:top-96 md:left-96 relative ml-10 mb-8 w-3/4 md:w-4/12">
      <Image
        src={communityVector}
        alt="SLIIT FCSC"
        quality={90}
        layout="intrinsic"
      />
    </div>

    <div className="grid grid-rows-1 pl-10 pr-10 pb-5">
      <div className="grid-cols-1 lg:w-1/2 md:w-1/2">
        <p className="mt-2 text-center md:text-left">
          The faculty of computing student’s community was established under the Faculty of Computing of SLIIT and
          consists of Computing undergraduates. Since there is a growing competition in the Sri Lankan job market in
          relation to this field of knowledge, we focus on nurturing the hard and soft skills which would improve their
          employability after the successful completion of the degree, as well as organizing events for the Student
          Community to grow academically as well as to get in touch with their creative senses, to promote a stress free
          and memorable University experience.
        </p>
      </div>
    </div>

    <div className="grid grid-rows-1 pl-10 pr-10 pb-8">
      <div className="grid-cols-1 w-full">
        <p className="text-center md:text-left">
          FCSC is the most prominent Student Community of SLIIT which thrives for the betterment of the largest and most
          well-known Faculty of SLIIT.
        </p>
      </div>
    </div>

    <div className="grid grid-cols-1 pl-10 pr-10 pb-8">
      <div className="lg:flex lg:flex-row md:flex md:flex-col w-full">
        <div className="lg:w-1/2 md:w-full">
          <Image
            src={sliitImage}
            alt="SLIIT FCSC"
            quality={90}
            layout="intrinsic"
          />
        </div>

        <div className="sm:pt-8 lg:pl-10 lg:w-1/2 md:w-full">
          <p className="text-center md:text-left lg:-mt-3.5">
            Objectives of Faculty of Computing Students’ Community:
          </p>
          <ul className="list-disc sm:pt-5 lg:pl-6 md:pl-5">
            <li>To support the academic programs conducted by the Faculty of Computing by organizing co-curricular
              activities.
            </li>
            <li>To provide opportunities for students to be aware of latest trends and industry expectations of by
              organizing events where industry experts participate.
            </li>
            <li>To encourage and provide support to student communities within the Faculty of Computing to organize
              events which meet the aims and objectives of the Faculty of Computing Student Body.
            </li>
            <li>To impart the necessary soft skills to the student in the Faculty of Computing which are required to
              successfully face the competitive atmosphere in today’s job market.
            </li>
            <li>To promote and organize cultural and social activities.</li>
          </ul>
        </div>
      </div>
    </div>

    <div className="grid grid-rows-1 pl-10 pr-10 pb-3">
      <div className="grid-cols-1 w-full">
        <p className="text-center md:text-left">
          The following are some of the Main events organized by Faculty of
          Computing Students’ Community,
        </p>
      </div>
    </div>

    <div className="grid grid-rows-1 pl-4 pr-10 pb-8">
      <div className="grid-cols-1 w-full pl-10">
        <ol className="list-decimal font-bold">
          <li>
            Wiramaya
          </li>
        </ol>

        <p>"Wiramaya" is arguably the most prominent event organized by the Student Community of SLIIT. This event is
          organized by the Faculty of Computing Students’ Community (FCSC) of SLIIT and pays homage to the Classical
          aspect of Sri Lankan music.</p>
      </div>

      <div className="grid grid-cols-1 mt-4 pl-10 pr-10 pb-8">
        <div className="lg:flex lg:flex-row md:flex md:flex-col w-full justify-around">
          <div className="lg:w-2/5 md:w-full">
            <Image
              src={viramayaPic01}
              alt="SLIIT FCSC"
              quality={90}
              layout="intrinsic"
            />
          </div>
          <div className="lg:w-2/5 md:w-full">
            <Image
              src={viramayaPic02}
              alt="SLIIT FCSC"
              quality={90}
              layout="intrinsic"
            />
          </div>
        </div>
      </div>
    </div>

    <div className="grid grid-rows-1 pl-4 pr-10 pb-8">
      <div className="grid-cols-1 w-full pl-10">
        <ol className="list-decimal font-bold" start="2">
          <li>
            Blood Donation
          </li>
        </ol>

        <p>An open Blood donation organized by the Faculty of Community
          Students’ Community in collaboration with the
          Sri Lanka blood bank.</p>
      </div>

      <div className="grid grid-cols-1 mt-4 pl-10 pr-10 pb-8">
        <div className="lg:flex lg:flex-row md:flex md:flex-col w-full justify-around">
          <div className="lg:w-2/5 md:w-full">
            <Image
              src={viramayaPic01}
              alt="SLIIT FCSC"
              quality={90}
              layout="intrinsic"
            />
          </div>
          <div className="lg:w-2/5 md:w-full">
            <Image
              src={viramayaPic02}
              alt="SLIIT FCSC"
              quality={90}
              layout="intrinsic"
            />
          </div>
        </div>
      </div>
    </div>

    <div className="grid grid-rows-1 pl-4 pr-10 pb-8">
      <div className="grid-cols-1 w-full pl-10">
        <ol className="list-decimal font-bold" start="3">
          <li>
            Mini Hackathon
          </li>
        </ol>

        <p>This event is organized by the FCSC collaborating with the MS Club of SLIIT. Mini Hackathon is a
          competition, targeting 1st and 2nd year students; to improve their brainstorming and business
          analytical skills</p>
      </div>

      <div className="grid grid-cols-1 mt-4 pl-10 pr-10 pb-8">
        <div className="lg:flex lg:flex-row md:flex md:flex-col w-full justify-around">
          <div className="lg:w-2/5 md:w-full">
            <Image
              src={viramayaPic01}
              alt="SLIIT FCSC"
              quality={90}
              layout="intrinsic"
            />
          </div>
          <div className="lg:w-2/5 md:w-full">
            <Image
              src={viramayaPic02}
              alt="SLIIT FCSC"
              quality={90}
              layout="intrinsic"
            />
          </div>
        </div>
      </div>
    </div>

    <div className="grid grid-rows-1 pl-4 pr-10 pb-8">
      <div className="grid-cols-1 w-full pl-10">
        <ol className="list-decimal font-bold" start="4">
          <li>
            Annual Pirith Ceremony
          </li>
        </ol>

        <p>The whole academic staff and the student body of SLIIT participates in this spiritual event. Buddhist Priests
          from the temples around Malabe will be invited for the Pirith Ceremony. All participants will stay overnight
          at SLIIT. This a great opportunity for the students to build a great bond with the community.</p>
      </div>

      <div className="grid grid-cols-1 mt-4 pl-10 pr-10 pb-8">
        <div className="lg:flex lg:flex-row md:flex md:flex-col w-full justify-around">
          <div className="lg:w-2/5 md:w-full">
            <Image
              src={viramayaPic01}
              alt="SLIIT FCSC"
              quality={90}
              layout="intrinsic"
            />
          </div>
          <div className="lg:w-2/5 md:w-full">
            <Image
              src={viramayaPic02}
              alt="SLIIT FCSC"
              quality={90}
              layout="intrinsic"
            />
          </div>
        </div>
      </div>
    </div>

    <div className="grid grid-rows-1 pl-4 pr-10 pb-8">
      <div className="grid-cols-1 w-full pl-10">
        <ol className="list-decimal font-bold" start="5">
          <li>
            Talk with Giant
          </li>
        </ol>

        <p>This is an informational interview series which is organized by FCSC by collaborating with Sri Lanka’s
          popular and successful personalities. These sessions will be opened to all students from all academic years.
          Experts will answer students that are raised by students, and this will provide motivation and enthusiasm to
          students in order to carry out their future endeavors. Our main goal is to reach out to the students during a
          global pandemic to support them.</p>
      </div>
    </div>

    <div className="grid grid-rows-1 pl-4 pr-10 pb-8">
      <div className="grid-cols-1 w-full pl-10">
        <ol className="list-decimal font-bold" start="6">
          <li>
            SLIIT GAMBIT
          </li>
        </ol>

        <p>The FCSC has focused on finding a method to connect students in order to stabilize a good relationship
          between students since physical meeting are not permitted. FCSC has partnered up with the Chess team of SLIIT
          to host a Virtual Chess championship the titled as “Gambit”. This chess tournament is an open event for all
          the faculties.</p>
      </div>

      <div className="grid grid-cols-1 mt-4 pl-10 pr-10 pb-8">
        <div className="lg:flex lg:flex-row md:flex md:flex-col w-full justify-around">
          <div className="lg:w-2/5 md:w-full">
            <Image
              src={viramayaPic01}
              alt="SLIIT FCSC"
              quality={90}
              layout="intrinsic"
            />
          </div>
          <div className="lg:w-2/5 md:w-full">
            <Image
              src={viramayaPic02}
              alt="SLIIT FCSC"
              quality={90}
              layout="intrinsic"
            />
          </div>
        </div>
      </div>
    </div>

    <div className="grid grid-rows-1 pl-4 pr-10 pb-8">
      <div className="grid-cols-1 w-full pl-10">
        <ol className="list-decimal font-bold" start="7">
          <li>
            Wasantha Muwadora
          </li>
        </ol>

        <p>This event is the main event in order to celebrate the Sinhala and Tamil new year in Sri Lanka. An “Awurudu
          Uthsawaya” that is open to all students of SLIIT And the Staff members. It is a day full of traditional games
          and events.</p>
      </div>

      <div className="grid grid-cols-1 mt-4 pl-10 pr-10 pb-8">
        <div className="lg:flex lg:flex-row md:flex md:flex-col w-full justify-around">
          <div className="lg:w-2/5 md:w-full">
            <Image
              src={wh01}
              alt="SLIIT FCSC"
              quality={90}
              layout="intrinsic"
            />
          </div>
          <div className="lg:w-2/5 md:w-full">
            <Image
              src={wh02}
              alt="SLIIT FCSC"
              quality={90}
              layout="intrinsic"
            />
          </div>
        </div>
      </div>
    </div>

    <div className="grid grid-rows-1 pl-4 pr-10 pb-8">
      <div className="grid-cols-1 w-full pl-10">
        <ol className="list-decimal font-bold" start="8">
          <li>
            SLIIT BASH
          </li>
        </ol>

        <p>A friendly cricket tournament that is open to all the students of SLIIT. This comprise of a full day of
          cricket matches and stalls. This is a project that is organized in order to enhance the relationship between
          students at SLIIT.</p>
      </div>

      <div className="grid grid-cols-1 mt-4 pl-10 pr-10 pb-8">
        <div className="lg:flex lg:flex-row md:flex md:flex-col w-full justify-around">
          <div className="lg:w-2/5 md:w-full">
            <Image
              src={bash01}
              alt="SLIIT FCSC"
              quality={90}
              layout="intrinsic"
            />
          </div>
          <div className="lg:w-2/5 md:w-full">
            <Image
              src={bash02}
              alt="SLIIT FCSC"
              quality={90}
              layout="intrinsic"
            />
          </div>
        </div>
      </div>
    </div>

    <div className="grid grid-rows-1 pl-4 pr-10 pb-8">
      <div className="grid-cols-1 w-full pl-10">
        <ol className="list-decimal font-bold" start="8">
          <li>
            BUILD-UP Wednesday
          </li>
        </ol>

        <p>This is organized by the FCSC in collaboration with the Career Guidance Unit of SLIIT. This is held on every
          Wednesday with the participation of Students and Industry experts who will share their experience with the
          students.</p>
      </div>
      <div className="grid grid-cols-1 mt-4 pl-10 pr-10 pb-8">
        <div className="lg:flex lg:flex-row md:flex md:flex-col w-full justify-around">
          <div className="lg:w-2/5 md:w-full">
            <Image
              src={viramayaPic01}
              alt="SLIIT FCSC"
              quality={90}
              layout="intrinsic"
            />
          </div>
          <div className="lg:w-2/5 md:w-full">
            <Image
              src={viramayaPic02}
              alt="SLIIT FCSC"
              quality={90}
              layout="intrinsic"
            />
          </div>
        </div>
      </div>
    </div>

  </div>
}