import { useState } from 'react';
import Menu from "../Menu";
import NavBar from "../NavBar";

const MenuHeader = () => {
    const [isOpenMenu, setOpenMenu] = useState(false);

    const handleVisebleMenu = (isOpenMenu) => {
        setOpenMenu(!isOpenMenu);
        console.log("MenuHeader", isOpenMenu);
    };

    return (
        <>
            <Menu isActive={isOpenMenu} />
            <NavBar onVisibleMenu={handleVisebleMenu}
            />
        </>
    )
}

export default MenuHeader;
