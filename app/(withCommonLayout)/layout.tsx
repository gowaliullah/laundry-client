import { Navber } from "@/components/common/navber";

const CommonLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <>
        <Navber />
        {children}
    </>
  );
};

export default CommonLayout;
