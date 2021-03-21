import { useState } from 'react';
import Menu from "../Menu";
import NavBar from "../NavBar";

const MenuHeader = ({ bgActive }) => {
    const [isOpenMenu, setOpenMenu] = useState(null);

    const handleVisebleMenu = () => {
        setOpenMenu(prevState => !prevState);
        console.log("isOpen", isOpenMenu);
    };

    return (
        <>
            <Menu isActive={isOpenMenu} />
            <NavBar
                isActive={isOpenMenu}
                bgActive={bgActive}
                onVisibleMenu={handleVisebleMenu}
            />
        </>
    )
}

export default MenuHeader;
