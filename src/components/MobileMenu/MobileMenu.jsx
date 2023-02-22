import { useState } from 'react';
import { MenuBtn, MenuItem } from './MobileMenu.styled';
import { MobileNavigation } from 'components/MobileNavigation/MobileNavigation';

export const MobileMenu = () => {
  const [menuShown, setMenuShown] = useState(false);

  const toggleMenu = () => setMenuShown(!menuShown);

  return (
    <>
      <MenuBtn type="button" data-menu-open={menuShown} onClick={toggleMenu}>
        <MenuItem></MenuItem>
      </MenuBtn>
      {menuShown && <MobileNavigation closeMenu={toggleMenu} />}
    </>
  );
};
