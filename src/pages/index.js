import React from 'react';
import clsx from 'clsx';
import Layout from '@theme/Layout';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import useBaseUrl from '@docusaurus/useBaseUrl';
import styles from './styles.module.css';

const features = [
  {
    title: 'Наши it-события',
    imageUrl: 'img/undraw_docusaurus_tree.svg',
    description: (
      <>
        sum text
      </>
    ),
  },
  {
    title: 'Наши шедевры в OpenSource',
    imageUrl: 'img/undraw_docusaurus_mountain.svg',
    description: (
      <>
          sum text
      </>
    ),
  },
  {
    title: 'Наши новости',
    imageUrl: 'img/undraw_docusaurus_react.svg',
    description: (
      <>
        sum text
      </>
    ),
  },
];

function Feature({imageUrl, title, description}) {
  const imgUrl = useBaseUrl(imageUrl);
  return (
    <div className={clsx('col col--4', styles.feature)}>
      {imgUrl && (
        <div className="text--center">
          <img className={styles.featureImage} src={imgUrl} alt={title} />
        </div>
      )}
      <h3>{title}</h3>
      <p>{description}</p>
    </div>
  );
}

function Home() {
  const context = useDocusaurusContext();
  const {siteConfig = {}} = context;
  return (
    <Layout
      title={`${siteConfig.title}`}
      description="Открытый онлайн митап для разработчиков">
      <header className={clsx('hero hero--primary', styles.heroBanner)}>
        <div className="container">
          <h1 className="hero__title">{siteConfig.title}</h1>
          <p className="hero__subtitle">{siteConfig.tagline}</p>
          <div className={styles.buttons}>
            <Link
              className={clsx(
                'button button--secondary button--lg',
                styles.getStarted,
              )}
              to={useBaseUrl('docs/')}>
              Начать
            </Link>
          </div>
        </div>
      </header>
      <main>
        {features && features.length > 0 && (
          <section className={styles.features}>
            <div className="container">
              <div className="row text--center">
              <div className="col col--4 col--offset-4">
                  <p>Онлайн  митапы для веб и мобильных разработчиков от IT-холдинга Казахстана Chocofamily.
                    Мы стараемся делиться своей экспертизой, а также приглашаем крутых спикеров из СНГ и не только!</p>
                  <p>
                    На наших митапах затрагиваются разные технологии и решаемые ими  кейсы.
                    Присоединиться может любой желающий - митапы открытые и бесплатные.</p>
                </div>
              </div>
            </div>
          </section>
        )}
      </main>
    </Layout>
  );
}

export default Home;
