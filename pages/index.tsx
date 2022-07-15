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
                <link rel='icon' href='/favicon.ico' />
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
