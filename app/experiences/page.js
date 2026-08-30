import { Fragment } from 'react';
import Experiences from '@/components/Experiences/Experiences';
import experiences from '@/data/experiences.json';

export default function Page() {
  return (
    <Fragment>
      <h2 style={{ fontSize: '2rem' }}>Expériences professionnelles</h2>

      {experiences.map((experience) => (
        <div key={`${experience.company}-${experience.period}`}>
          <Experiences {...experience} />
        </div>
      ))}
    </Fragment>
  );
}
