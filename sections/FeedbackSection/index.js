import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

import {
    BodyTextLg,
    BodyTextNormal,
    Heading2,
    Heading3,
    Heading4,
} from 'components/shared/styles';
import React, { useRef, useState, useEffect } from 'react';
import {
    FeedbackSectionWrapper,
    HeadingWrapper,
    StyledSlider,
    SlideWrapper,
    StyledWrapper,
    UserNameTitle,
    ReadMoreBtn,
} from './styles';
import { Container } from 'components/container';
import TextTruncate from 'react-text-truncate';
import { FiveStarsIco, FourStarsIco } from 'assets/icons';
import { breakpoints } from 'constants/breakpoints';
import { ColorShapeComponent } from 'components/floatedShapes/ColorShape';

const comments = [
    {
        id: 0,
        userName: 'Jakeyah Nind',
        date: '02/09/2021',
        stars: 5,
        title: '5 out of 5',
        text: 'I am very glad that I found this app. The editing algorithms work really fast, and the quality of the retouched areas is really great. I would recommend it to those who want to have nice and clean pictures without unnecessary objects on them. I really enjoyed the guide on how to use the app and helpful tooltips within it. They have also added tools for the imperfections removal recently, and I couldn’t be happier about that. It’s definitely worth its price!',
    },
    {
        id: 1,
        userName: 'JLesko90',
        date: '10/04/2021',
        stars: 5,
        title: 'A must for making the most of pics of your children.',
        text: 'My children are always on the go so getting a perfect picture doesn’t happen often. This app is game changer. I can turn any picture of them into the perfect picture, no matter what’s in the background. And it’s so easy and precise. Im very happy I found this app.',
    },
    {
        id: 2,
        userName: 'B from KY',
        date: '03/13/2022',
        stars: 5,
        title: 'Omg Luv',
        text: 'So my dad hates all things cigarettes I get it, but my husband smokes. (Outside only) My hubby took our child to sled and forgot to take out of his mouth at top of hill after he pushed her down and he’s in the pictures I want to show to my dad. It took a few times to get what I wanted and after this 1st one I am excited to try more in further!',
    },
    {
        id: 3,
        userName: 'AddEmUp10',
        date: '05/21/2022',
        stars: 4,
        title: 'So far, so good!',
        text: 'So I have only used this app for about 30 minutes but so far, so good! PERKS: (noticed so far) - It seems to be great for certain features/types of photos. You will have to see what I mean when you try it! It is hard to specify especially since I just started! I will definitely use it for photos needing a couple of “easy/quick” yet precise changes. However, I do not know how well it will work for super specific , hard to deal with “touch-ups” as they need more precise and more of a variety of tools! Hopefully I can remember I have a 3 day trial over the weekend so I can play around with it and decide if it is a keeper! :) Thank you guys for the trial! It is much appreciated! 3 days may not seem like much but as long as you have some extra time here and there, it should be sufficient! So make sure you start the trial when you predict the extra time!',
    },
    {
        id: 4,
        userName: 'Prettygirl1209',
        date: '05/26/2021',
        stars: 5,
        title: 'App works great when it wants to',
        text: 'So this app is great...when it wants to be great. It is constantly crashing and the algorithm between the 3 choices take forever to load. I don’t know if it’s me and my WiFi or the app. The crashing, I have no idea. I would love some feedback from developers or Apple with some kind of solution. Thank you!',
    },
    {
        id: 5,
        userName: 'Akichu1853',
        date: '03/06/2022',
        stars: 4,
        title: 'Please read this 👍❤️',
        text: 'Retouch AI, I appreciate the efficiency and effort you put into your app. Your app made good results, I like the outcome. But PLEASE and I’m asking this politely. Please make the object remover free. I’ve delt with way too many issues with my photos and most of them need objects removed. I wouldn’t just buy a dang subscription just to get rid of a small issue. I really hope you understand the problem. Thank you. 🙏👍',
    },
];

export const FeedbackSection = () => {
    const settings = {
        infinite: false,
        dots: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        variableWidth: true,
        arrows: false,
    };

    const titleRef = useRef(null);

    const [paddingLeft, setPaddingLeft] = useState(0);
    const [isMobile, setIsMobile] = useState(true);

    useEffect(() => {
        const updatePadding = () => {
            const { x } = titleRef.current.getBoundingClientRect();
            setPaddingLeft(x);

            setIsMobile(window.innerWidth < 768);
        };
        updatePadding();

        window.addEventListener('resize', updatePadding);
        return () => window.removeEventListener('resize', updatePadding);
    }, []);

    return (
        <FeedbackSectionWrapper>
            <Container>
                <Heading4 className='text-gradient' ref={titleRef}>
                    4.7 out of 5 on Appstore
                </Heading4>

                <HeadingWrapper>
                    <Heading2>Join millions of satisfied users</Heading2>
                </HeadingWrapper>
            </Container>

            <StyledWrapper style={{ paddingLeft: paddingLeft }}>
                <StyledSlider {...settings}>
                    {comments.map(({ id, userName, text, stars }) => (
                        <SlideWrapper key={id} $isMobile={isMobile}>
                            <div style={{ marginBottom: 34 }}>
                                {stars === 5 ? (
                                    <FiveStarsIco />
                                ) : (
                                    <FourStarsIco />
                                )}
                            </div>
                            <TextTruncate
                                line={4}
                                element={BodyTextLg}
                                truncateText='…'
                                text={text}
                                textTruncateChild={
                                    <ReadMoreBtn type='button'>
                                        <Heading3 className='text-gradient'>
                                            Read more
                                        </Heading3>
                                    </ReadMoreBtn>
                                }
                            />

                            <UserNameTitle>{userName}</UserNameTitle>
                        </SlideWrapper>
                    ))}
                </StyledSlider>

                <ColorShapeComponent className='feedback' />
            </StyledWrapper>
        </FeedbackSectionWrapper>
    );
};
