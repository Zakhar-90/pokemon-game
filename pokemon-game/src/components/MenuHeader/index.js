import { useState } from 'react';
import Menu from "../Menu";
import NavBar from "../NavBar";

const MenuHeader = () => {
    const [isOpenMenu, setOpenMenu] = useState(false);

    const handleVisebleMenu = () => {
        setOpenMenu(!isOpenMenu);
    };

    return (
        <>
            <Menu isActive={isOpenMenu} />
            <NavBar
                isActive={isOpenMenu}
                onVisibleMenu={handleVisebleMenu}
            />
        </>
    )
}

export default MenuHeader;
