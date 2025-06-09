import Marquee from '@/components/root/marquee';
export default function Home() {
  return (
    <main className="">
      <Marquee />
      {/* //TODO: 2nd and 3rd text's layout is still not finish */}
      <div className="my-4 grid grid-cols-7 grid-rows-4">
        <div className="col-start-1 col-end-8 row-start-1 row-end-4 border-4 border-blue-900 bg-blue-400 text-center font-(family-name:--font-anton) text-[clamp(4rem,15vw,15rem)] uppercase">
          Terrifying Truth
        </div>
        <div className="col-start-4 col-end-6 row-start-3 row-end-4 border-4 border-blue-900 bg-blue-400 text-center font-(family-name:--font-edu) text-9xl">
          of a
        </div>
        <div className="col-start-1 col-end-8 row-start-4 row-end-6 border-4 border-blue-900 bg-blue-400 font-(family-name:--font-merriweather) text-9xl uppercase">
          Stagnant Individual
        </div>
      </div>
    </main>
  );
}
