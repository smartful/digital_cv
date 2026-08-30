import { Fragment } from 'react';
import Lien from '@/components/Lien/Lien';
import links from '@/data/links.json';

export default function Page() {
  return (
    <Fragment>
      <h2 style={{ fontSize: '2rem' }}>Liens complémentaires</h2>

      {links.map((link) => (
        <div key={`${link.label}`} style={{ marginBottom: '1.2rem' }}>
          <Lien {...link} />
        </div>
      ))}
    </Fragment>
  );
}
