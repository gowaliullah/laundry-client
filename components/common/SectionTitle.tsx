type SectionTitle = {
  title: string;
  subTitle?: string;
};

const SectionTitle = ({ title, subTitle }: SectionTitle) => {
  return (
    <>
      <div className="text-center mb-10">
        <h4 className="uppercase text-[#1563DF] text-xl font-thin">
          {subTitle}
        </h4>
        <h1 className="capitalize font-semibold text-3xl">{title}</h1>
      </div>
    </>
  );
};

export default SectionTitle;
