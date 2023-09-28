import { Container } from './SectionContainer.styles';

export const SectionContainer: React.FCWithChildren = ({ children }) => {
  return <Container>{children}</Container>;
};
