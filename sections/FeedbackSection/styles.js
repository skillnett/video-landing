import styled from 'styled-components';
import { respondTo } from 'utils/respondTo';
import SlickSlider from 'react-slick';
import { Colors } from 'constants/colors';

export const FeedbackSectionWrapper = styled.div`
    padding: 50px 0;

    ${respondTo.md`
      padding: 150px 0;    
    `}
`;

export const HeadingWrapper = styled.div`
    max-width: 335px;
    margin-top: 20px;
    margin-bottom: 40px;

    ${respondTo.md`
      margin-top: 30px;
      margin-bottom: 60px;
      max-width: 650px;  
    `}
`;

export const StyledSlider = styled(SlickSlider)`
    .slick-list {
        overflow: visible;
        padding-bottom: 40px;
    }

    .slick-dots {
        & li button:before {
            opacity: 1;
            background: ${Colors.darkGrey};
            width: 6px;
            height: 6px;
            content: ' ';
            border-radius: 2px;
        }

        & li.slick-active {
            width: 56px;
        }

        & li.slick-active button:before {
            background: ${Colors.white};
            width: 56px;
            height: 6px;
            content: ' ';
            border-radius: 2px;
        }
    }
`;

export const SlideWrapper = styled.div`
    width: ${props =>
        props.$isMobile ? '300px !important' : 'width: 384px !important'};
    padding: 16px;
    padding-top: 40px;
    background: ${Colors.dark};
    border-radius: 10px;
    margin-right: 14px;

    ${respondTo.md`
      width: 390px !important;
      padding: 40px;
      margin-right: 24px;
    `}
`;

export const StyledWrapper = styled.div`
    overflow: hidden;
    padding-bottom: 25px;
    position: relative;
`;

export const UserNameTitle = styled.p`
    font-weight: 600;
    font-size: 18px;
    margin-top: 34px;
`;

export const ReadMoreBtn = styled.button`
    padding: 0;
    border: none;
    background: none;
    color: ${Colors.white};
`;
