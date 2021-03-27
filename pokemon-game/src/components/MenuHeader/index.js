import { useState } from 'react';
import Menu from "../Menu";
import NavBar from "../NavBar";

const MenuHeader = ({ bgActive }) => {
    const [isOpenMenu, setOpenMenu] = useState(null);

    const handleVisebleMenu = () => {
        setOpenMenu(prevState => !prevState);
    };

    const handleToPatch = () => {
        setOpenMenu(prevState => !prevState);
    }

    return (
        <>
            <Menu 
                isActive={isOpenMenu}
                onToPatch={handleToPatch}
            />
            <NavBar
                isActive={isOpenMenu}
                bgActive={bgActive}
                onVisibleMenu={handleVisebleMenu}
            />
        </>
    )
}

export default MenuHeader;
