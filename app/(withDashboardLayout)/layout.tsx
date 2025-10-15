import { AppSidebar } from "@/components/dashboard/app-sidebar";
import { SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar"


const DashboardLayout = ({ children }: { children: React.ReactNode }) => {

  return (
    <>
      
   <SidebarProvider className="">
      <AppSidebar />
      <main>
        <SidebarTrigger />
        {children}
      </main>
    </SidebarProvider>
    </>
  );
};

export default DashboardLayout;
