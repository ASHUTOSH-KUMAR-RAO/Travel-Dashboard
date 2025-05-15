import { Outlet } from "react-router";
import { SidebarComponent } from "@syncfusion/ej2-react-navigations";
import { MobileSideBar, NavItems } from "components";

const AdminLayout = () => {
  return (
    <div className="admin-layout">
      <MobileSideBar/>
      <aside className="w-full max-w-[270px] hidden lg:block">
        <SidebarComponent width={270} enableGestures={false}>
          <NavItems />
        </SidebarComponent>
      </aside>
      <aside className="children">
        <Outlet />{" "}
        {/* Basically jo ye Outlet hota hai iska baas yehi kaam hota hai ,Renders the matching child route of a parent route or nothing if no child route matches.*/}
      </aside>
    </div>
  );
};

export default AdminLayout;
