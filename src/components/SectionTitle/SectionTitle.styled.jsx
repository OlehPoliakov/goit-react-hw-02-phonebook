import styled from 'styled-components';

export const Section = styled.section`
  margin-bottom: ${p => p.theme.spacing(5)};
`;

export const Title = styled.h2`
  color: ${p => p.theme.colors.primary};
  font-family: ${p => p.theme.fonts.heading};
  font-weight: ${p => p.theme.fontWeights.bold};
  line-height: ${p => p.theme.lineHeights.heading};
  letter-spacing: ${p => p.theme.letterSpacings.caps};
  font-size: ${p => p.theme.fontSizes.l};
`;
