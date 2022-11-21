import React from 'react';
import clsx from 'clsx';
import styles from './styles.module.css';

const FeatureList = [
  {
    title: 'Easy to Understand',
    imgsrc: require('@site/static/img/adding-a-song/initial_editor_screen.png').default,
    description: (
      <>
        Follow along with detailed instructions and pictures to get started making your first level.
      </>
    ),
  },
  {
    title: 'VFX Examples',
    imgsrc: require('@site/static/img/vfx/presets/matrix.png').default,
    description: (
      <>
        Explore the various different VFX themes and presets.
      </>
    ),
  },
  {
    title: 'Extensive Documentation',
    imgsrc: require('@site/static/img/rows/various_characters.png').default,
    description: (
      <>
        Learn about all the options in the editor, as well as hidden ones only reachable through file editing.
      </>
    ),
  }
];

function Feature({imgsrc, title, description}) {
  return (
    <div className={clsx('col col--4')}>
      <div className="text--center">
        <img className={styles.featureImg} src={imgsrc}/>
      </div>
      <div className="text--center padding-horiz--md">
        <h3>{title}</h3>
        <p>{description}</p>
      </div>
    </div>
  );
}

export default function HomepageFeatures() {
  return (
    <section className={styles.features}>
      <div className="container">
        <div className="row">
          {FeatureList.map((props, idx) => (
            <Feature key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}
