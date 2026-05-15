import { Fragment } from 'react';
import Projects from '@/components/Projects/Projects';
import projects from '@/data/projects.json';

export const metadata = {
  title: 'Projets',
};

export default function Page() {
  return (
    <Fragment>
      <h1>Projets</h1>
      <p>
        Une première sélection de projets personnels à enrichir progressivement avec des captures,
        cas d'usage et résultats.
      </p>

      {projects.map((project) => (
        <Projects key={project.name} {...project} />
      ))}
    </Fragment>
  );
}
