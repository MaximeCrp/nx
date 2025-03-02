import { CallToAction, DefaultLayout } from '@nx/nx-dev/ui-common';
import { NextSeo } from 'next-seo';
import {
  CiForMonorepos,
  Hero,
  SmarterToolsForMonorepos,
  Statistics,
  TeamAndCommunity,
  TrustedBy,
  WorkBetterAchieveMoreShipQuicker,
} from '@nx/nx-dev/ui-home';

export default function Index(): JSX.Element {
  return (
    <>
      <NextSeo
        title="Nx: Smart Monorepos · Fast CI"
        description="Nx is a build system with built-in tooling and advanced CI capabilities. It helps you maintain and scale monorepos, both locally and on CI."
        openGraph={{
          url: 'https://nx.dev',
          title: 'Nx: Smart Monorepos · Fast CI',
          description:
            'Nx is a build system with built-in tooling and advanced CI capabilities. It helps you maintain and scale monorepos, both locally and on CI.',
          images: [
            {
              url: 'https://nx.dev/socials/nx-media.png',
              width: 1200,
              height: 600,
              alt: 'Nx: Smart Monorepos · Fast CI',
              type: 'image/png',
            },
          ],
          siteName: 'Nx',
          type: 'website',
        }}
      />
      <h1 className="sr-only">Next generation monorepo tool</h1>
      {/*<AnnouncementBanner />*/}
      <DefaultLayout isHome>
        <Hero />
        <div className="mt-16 lg:-mt-32">
          <Statistics />
        </div>
        <div className="mt-32 lg:mt-56">
          <TrustedBy />
        </div>
        <div className="mt-32 lg:mt-56">
          <CiForMonorepos />
        </div>
        <div className="mt-32 lg:mt-56">
          <WorkBetterAchieveMoreShipQuicker />
        </div>
        <div className="mt-32 lg:mt-56">
          <SmarterToolsForMonorepos />
        </div>
        <div className="mt-32 lg:mt-56">
          <TeamAndCommunity />
        </div>
        <div className="mt-32 lg:mt-56">
          <CallToAction />
        </div>
      </DefaultLayout>
    </>
  );
}
