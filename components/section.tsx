import TypeCard from "./type-card";

export default function Section({ title, subtitle, data, CardIcon }: { title: string, subtitle: string, data: any, CardIcon: any }) {
  return (
    <div className=" flex flex-col items-center justify-center my-32">
      <h2 className="text-5xl font-bold font-dm_sans text-gray-700 my-4">
        {title}
      </h2>
      {
        subtitle && <h2 className="text-2xl font-light font-dm_sans text-gray-400  text-center">
          {subtitle}
        </h2>
      }
      <div className="flex flex-wrap justify-evenly gap-6 my-12">
        {data.map((item, index) => {
          return <TypeCard key={index} data={item} CardIcon={CardIcon} />;
        })}
      </div>
    </div>
  );
}
