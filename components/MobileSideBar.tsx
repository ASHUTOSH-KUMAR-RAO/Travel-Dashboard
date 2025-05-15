// @ts-nocheck

import { Sidebar, SidebarComponent } from "@syncfusion/ej2-react-navigations";
import { Link } from "react-router";
import NavItems from "./NavItems";

const MobileSideBar = () => {
  let sidebar: Sidebar;
  const toggleSidebar = () => sidebar.toggle()
  return (
    <div className="mobile-sidebar wrapper">
      <header>
        <Link to="/">
          <img src="assets/icons/logo.svg" alt="Logo" className="size-[35px]" />

          <h1>Travelar</h1>
        </Link>

        <button onClick={toggleSidebar}>
          <img
            src="assets/icons/menu.svg"
            alt="Menu"
            className="size-7 cursor-pointer"
          />
        </button>
      </header>
      <SidebarComponent
        ref={(Sidebar) => (sidebar = Sidebar)}
        created={() => sidebar.hide()}
        width={270}
        closeOnDocumentClick={true}
        showBackdrop={true}
        type="over"
      >

        <NavItems handleClick = {toggleSidebar}/>
      </SidebarComponent>
    </div>
  );
};

export default MobileSideBar;
