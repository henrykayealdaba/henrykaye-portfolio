import Marquee from '@/components/root/Marquee';

export default function ComingSoon() {
  return (
    <div className="flex h-[24rem] justify-center">
      <div className="rotate-8">
        <Marquee
          comingSoon={true}
          content_one="THIS PAGE IS UNDER CONSTRUCTION!"
          content_two="DO NOT CROSS THE LINE!"
          timeScale={1.5}
          fromX={'30%'}
          toX={'-5.25%'}
          duration={10}
        />
      </div>
      <div className="absolute -rotate-8">
        <Marquee
          comingSoon={true}
          content_one="立ち入り禁止！"
          content_two="工事中のため危険です！"
          timeScale={1.5}
          fromX={'-20%'}
          toX={'16%'}
          duration={8}
        />
      </div>
    </div>
  );
}
