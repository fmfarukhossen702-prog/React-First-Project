import React from 'react'
import Container from './Container'
import SecHead from './SecHead'
import speaker1 from '../assets/speaker1.png'
import speaker2 from '../assets/speaker2.png'
import speaker3 from '../assets/speaker3.png'
import share from '../assets/share.png'
import ExpertContent from './ExpertContent'

const Expert = () => {
  return (
    <div className=" bg-white py-25 ">
      <Container>
        <SecHead
          title="Our Speakers"
          heading="Introducing the expert speakers"
          className="w-175 mx-auto"
          titleCss=" justify-center "
        />
        <div className="mt-30  flex justify-between">
          <ExpertContent
            image={speaker1}
            title="Sophia Rodrigues"
            heading="Global Marketing Director"
          />
          <ExpertContent
            image={speaker2}
            title="Jacob Jones"
            heading="Lead AI Research Scientist"
          />
          <ExpertContent
            image={speaker3}
            title="Arlene McCoy"
            heading="Innovation Strategy Expert"
          />
        </div>
      </Container>
    </div>
  );
}

export default Expert
