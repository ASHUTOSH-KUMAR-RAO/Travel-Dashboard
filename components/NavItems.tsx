import { Link, NavLink } from "react-router";
import { sidebarItems } from "~/constants";
import { cn } from "~/lib/utils";

const NavItems = ({ handleClick }: { handleClick?: () => void }) => {
  const user = {
    name: "Ashutosh Kumar rao",
    email: "icoashutosh@gmail.com",
    imageUrl: "/assets/images/ashu.jpg",
  };
  return (
    <section className="nav-items bg-gray-50 min-h-screen w-64 p-4 shadow-lg rounded-r-2xl">
      <Link
        to="/"
        className="link-logo flex items-center gap-3 mb-8 transition-transform hover:scale-105"
      >
        <img
          src="/assets/icons/logo.svg"
          alt="logo"
          className="size-10 drop-shadow-md"
        />
        <h1 className="text-2xl font-bold text-primary-500 tracking-tight">
          Travelar
        </h1>
      </Link>

      <div className="container flex flex-col gap-2">
        <nav className="space-y-1">
          {sidebarItems.map(({ id, href, icon, label }) => (
            <NavLink to={href} key={id}>
              {({ isActive }: { isActive: boolean }) => (
                <div
                  className={cn(
                    "group nav-item flex items-center gap-3 rounded-lg px-4 py-3 transition-all duration-200 hover:bg-primary-50",
                    {
                      "bg-primary-500 text-white shadow-md": isActive,
                    }
                  )}

                  onClick={handleClick}
                >
                  <img
                    src={icon}
                    alt={label}
                    className={cn(
                      "size-6 transition-all duration-200 group-hover:scale-110",
                      {
                        "brightness-0 invert": isActive,
                        "text-dark-200": !isActive,
                      }
                    )}
                  />
                  <span className="text-sm font-medium">{label}</span>
                </div>
              )}
            </NavLink>
          ))}
        </nav>

        <footer className="nav-footer">
          <img
            src={user?.imageUrl || "/assets/images/ashu.jpg"}
            alt={user?.name || "Ashutosh"}
          />

          <article>
            <h2>{user?.name}</h2>
            <p>{user?.email}</p>
          </article>
          <button
            onClick={() => {
              console.log("Logout");
            }}
            className="cursor-pointer"
          >
            <img
              src="/assets/icons/logout.svg"
              alt="Logout"
              className="size-6"
            />
          </button>
        </footer>
      </div>
    </section>
  );
};

export default NavItems;
