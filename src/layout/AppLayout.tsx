import { SidebarProvider, useSidebar } from "../context/SidebarContext";
import { Outlet } from "react-router";
import AppHeader from "./AppHeader";
import Backdrop from "./Backdrop";
import AppSidebar from "./AppSidebar";

const LayoutContent: React.FC = () => {
  const { isExpanded, isHovered, isMobileOpen } = useSidebar();

  return (
    <div className="mt-4 ">
      <div>
        <AppSidebar />
        <Backdrop />
      </div>
      <div
        className={`flex-1 h-[calc(100vh-2rem)]  overflow-hidden transition-all duration-300 ease-in-out ${
          isExpanded || isHovered ? "lg:ml-[312px]" : "lg:ml-[108px]"
        } ${isMobileOpen ? "ml-0" : ""}`}
      >
        <AppHeader />
        <div className="px-4 h-[calc(100vh-4rem)]">
          <Outlet />
        </div>
        <div className="my-4">
          <footer>
            <div className="flex justify-center text-sm">
              2025©ICorp
            </div>
          </footer>
        </div>
      </div>
    </div>
  );
};

const AppLayout: React.FC = () => {
  return (
    <SidebarProvider>
      <LayoutContent />
    </SidebarProvider>
  );
};

export default AppLayout;
