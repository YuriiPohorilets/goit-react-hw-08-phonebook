import styled from '@emotion/styled';

const size = {
  mobile: '320px',
  tablet: '768px',
};

export const device = {
  mobile: `(min-width: ${size.mobile})`,
  tablet: `(min-width: ${size.tablet})`,
};

export const Container = styled.div`
  margin: 0 auto;
  padding: 0 15px;
  max-width: 850px;
`;

export const Wrapper = styled.div`
  display: flex;
`;

export const Title = styled.h1`
  margin-bottom: 25px;

  font-size: 38px;
  font-weight: 700;
  color: #fff;
  text-shadow: 0px 1px 1px rgba(0, 0, 0, 0.2);

  @media ${device.tablet} {
    font-size: 44px;
  }
`;

export const Subtitle = styled.h2`
  margin-bottom: 20px;

  font-size: 32px;
  font-weight: 500;
  color: #fff;
  text-shadow: 0px 1px 1px rgba(0, 0, 0, 0.2);
`;

export const Paragraph = styled.p`
  margin-bottom: 25px;

  font-size: 18px;
  line-height: 1.8;
  color: rgba(47, 47, 47, 0.6);
`;

export const Info = styled.p`
  font-style: italic;
  font-size: 14px;
  color: rgba(255, 255, 255, 1);
  text-shadow: 0px 1px 1px rgba(0, 0, 0, 0.2);
`;

export const InfoLink = styled.a`
  position: relative;

  font-style: normal;
  font-weight: 500;
  font-size: 14px;
  color: rgba(255, 255, 255, 0.7);
  text-decoration: none;
  text-shadow: 0px 1px 1px rgba(0, 0, 0, 0.2);

  transition: all 250ms ease-in-out;

  &::after {
    content: '';
    position: absolute;
    bottom: -10px;
    left: 0;

    width: 100%;
    height: 1px;

    transform: scaleX(0);
    transform-origin: bottom right;
    transition: transform 300ms ease-in-out;
    box-shadow: 0px 1px 1px rgba(0, 0, 0, 0.2);

    background-color: #fff;
    border-radius: 5px;
  }

  &:hover::after,
  &:focus::after {
    transform: scaleX(1);
    transform-origin: bottom left;
  }

  :hover,
  :focus {
    color: #fff;
  }
`;
