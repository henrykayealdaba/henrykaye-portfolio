export default function Hero() {
  return (
    //TODO: Animation of this using GSAP
    <div className="flex flex-col justify-center">
      <span className="relative text-center font-(family-name:--font-anton) text-[clamp(2rem,15vw,15rem)] leading-none text-nowrap uppercase">
        Terrifying Truth
      </span>
      <span className="absolute left-1/2 -translate-x-1/2 font-(family-name:--font-edu) text-[clamp(3rem,13vw,12rem)] text-nowrap text-zinc-100 lowercase drop-shadow-[0_2.5px_2.5px_rgba(0,0,0,0.8)] drop-shadow-amber-800 dark:drop-shadow-blue-900">
        of a
      </span>
      <span className="text-center font-(family-name:--font-anton) text-[clamp(2rem,12.3vw,12rem)] leading-none text-nowrap uppercase">
        Stagnant Individual
      </span>
    </div>
  );
}
