import { Fragment } from 'react';
import Experiences from '@/components/Experiences/Experiences';
import experiences from '@/data/experiences.json';
import styles from '@/styles/Home.module.css';

export default function Page() {
  return (
    <Fragment>
      <h1>Expériences professionnelles</h1>

      {experiences.map((experience) => (
        <div key={`${experience.company}-${experience.period}`}>
          <Experiences {...experience} />
        </div>
      ))}
    </Fragment>
  );
}
