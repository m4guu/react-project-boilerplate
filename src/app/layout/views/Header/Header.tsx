import { Link, useMediaQuery } from '@mui/material';
import { Theme } from '@mui/system';

import { NavigationItem, SectionContainer, ThemeSwitcher } from 'components';
import { AppRoute } from 'routes/AppRoute.enum';
import { ReactComponent as ViteLogo } from 'assets/images/vite-logo.svg';
import { ReactComponent as VitestLogo } from 'assets/images/vitest-logo.svg';
import { ReactComponent as ReactLogo } from 'assets/images/react-logo.svg';

import { HeaderContainer, Logo, Navigation, NavigationList, LogoBox, Container } from './Header.styles';

export const Header: React.FC = () => {
  const isMobile = useMediaQuery((theme: Theme) => theme.breakpoints.down('sm'));

  return (
    <HeaderContainer position="static">
      <SectionContainer>
        <Container>
          <Logo> {isMobile ? 'ksh' : ' krystian software house'}</Logo>
          <Navigation>
            <NavigationList>
              <NavigationItem to={AppRoute.home}>home</NavigationItem>
              <NavigationItem to={AppRoute.about}>about</NavigationItem>
              <NavigationItem to={AppRoute.users}>users</NavigationItem>
              <NavigationItem to={AppRoute.help}>help</NavigationItem>
            </NavigationList>
          </Navigation>

          <LogoBox>
            <ThemeSwitcher />
            <Link href="https://vitejs.dev/">
              <ViteLogo style={{ width: '1.5rem', height: '1.5rem' }} />
            </Link>
            <Link href="https://vitest.dev/">
              <VitestLogo style={{ width: '1.5rem', height: '1.5rem' }} />
            </Link>
            <Link href="https://react.dev/">
              <ReactLogo style={{ width: '1.5rem', height: '1.5rem' }} />
            </Link>
          </LogoBox>
        </Container>
      </SectionContainer>
    </HeaderContainer>
  );
};
