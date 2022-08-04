import { Container } from 'components/container';
import { BackgroundShapeLg } from 'components/floatedShapes/BackgroundShapeLg';
import { Footer } from 'components/footer';
import { Header } from 'components/header';
import Head from 'next/head';
import { FeedbackSection } from 'sections/FeedbackSection';
import { TrialSection } from 'sections/TrialSection';
import { TrialWrapper } from 'sections/TrialSection/styles';
import { VideoSection } from 'sections/VideoSection/VideoSection';

export default function Home() {
    return (
        <div>
            <Head>
                <title>RetouchAI</title>
                <meta name='description' content='RetouchAI app' />
                <link
                    rel='shortcut icon'
                    href='/favicon.ico'
                    type='image/x-icon'
                />
                <link rel='icon' href='/favicon.ico' type='image/x-icon' />
                <link
                    rel='apple-touch-icon'
                    sizes='57x57'
                    href='/apple-icon-57x57.png'
                />
                <link
                    rel='apple-touch-icon'
                    sizes='60x60'
                    href='/apple-icon-60x60.png'
                />
                <link
                    rel='apple-touch-icon'
                    sizes='72x72'
                    href='/apple-icon-72x72.png'
                />
                <link
                    rel='apple-touch-icon'
                    sizes='76x76'
                    href='/apple-icon-76x76.png'
                />
                <link
                    rel='apple-touch-icon'
                    sizes='114x114'
                    href='/apple-icon-114x114.png'
                />
                <link
                    rel='apple-touch-icon'
                    sizes='120x120'
                    href='/apple-icon-120x120.png'
                />
                <link
                    rel='apple-touch-icon'
                    sizes='144x144'
                    href='/apple-icon-144x144.png'
                />
                <link
                    rel='apple-touch-icon'
                    sizes='152x152'
                    href='/apple-icon-152x152.png'
                />
                <link
                    rel='apple-touch-icon'
                    sizes='180x180'
                    href='/apple-icon-180x180.png'
                />
                <link
                    rel='icon'
                    type='image/png'
                    sizes='192x192'
                    href='/android-icon-192x192.png'
                />
                <link
                    rel='icon'
                    type='image/png'
                    sizes='32x32'
                    href='/favicon-32x32.png'
                />
                <link
                    rel='icon'
                    type='image/png'
                    sizes='96x96'
                    href='/favicon-96x96.png'
                />
                <link
                    rel='icon'
                    type='image/png'
                    sizes='16x16'
                    href='/favicon-16x16.png'
                />
                <link rel='manifest' href='/manifest.json' />
                <meta name='msapplication-TileColor' content='#ffffff' />
                <meta
                    name='msapplication-TileImage'
                    content='/ms-icon-144x144.png'
                />
            </Head>

            <Container>
                <Header />
                <VideoSection />
            </Container>

            <FeedbackSection />

            <TrialWrapper>
                <Container>
                    <TrialSection />
                </Container>
            </TrialWrapper>

            <Footer />

            <BackgroundShapeLg />
        </div>
    );
}
