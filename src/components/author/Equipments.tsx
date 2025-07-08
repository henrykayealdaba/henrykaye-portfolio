'use client';
import ScrollTrigger from 'gsap/ScrollTrigger';
import { useRef } from 'react';
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import Image from 'next/image';
import Link from 'next/link';

export default function Equipments() {
  const containerRef = useRef<HTMLDivElement>(null);

  useGSAP(
    () => {
      gsap.registerPlugin(ScrollTrigger);
      gsap.to('.line-right', {
        scrollTrigger: {
          trigger: '.line-right',
          start: 'top 90%',
          end: 'bottom -20%',
          scrub: 2,
        },
        css: { '--after-width': '100%' },
        duration: 5,
        ease: 'power1.inOut',
      });

      gsap.to('.line-left', {
        scrollTrigger: {
          trigger: '.line-left',
          start: 'top 90%',
          end: 'bottom -20%',
          scrub: 2,
        },
        css: { '--before-width': '100%' },
        duration: 5,
        ease: 'power1.inOut',
      });
    },
    { scope: containerRef, revertOnUpdate: true }
  );

  return (
    <div
      ref={containerRef}
      className="flex w-full flex-col items-center justify-center space-y-12 p-4"
    >
      <h1
        className="line-right line-left relative mb-4 inline-flex w-full items-center justify-center gap-2 p-4 font-(family-name:--font-anton) text-9xl font-bold text-nowrap uppercase max-lg:text-8xl max-md:text-6xl max-sm:text-5xl"
        style={{ ['--after-width' as string]: '0%' } as React.CSSProperties}
      >
        What I Use
      </h1>

      <div className="flex w-2xl flex-col max-xl:w-xl max-lg:w-lg max-md:w-md max-sm:w-sm">
        <Image
          src={`/image/equipments/Laptop.jpg`}
          width={1000}
          height={1000}
          alt="Lenovo LOQ 15 ARP9"
          className="mb-4 self-center rounded-lg border border-gray-700 shadow-lg brightness-75 contrast-90 dark:border-gray-600"
        />
        <h2 className="text-4xl font-bold">Lenovo LOQ 15ARP9</h2>
        <p className="mb-4 border-b pb-4 text-xl">Gaming Laptop</p>
        <p>
          I want a gaming laptop that can handle my coding, writing need and even 3D modeling, and
          this is the perfect laptop for me. It has a Ryzen 7 7435HS CPU, 12GB RAM, and an RTX 4050
          GPU, which is more than enough for my needs. It also has a 15.6-inch FHD display, I have
          been using this laptop since 2024
        </p>
        <ul className="my-2 list-inside list-disc space-y-2 px-8">
          <li>
            <Link
              target="_blank"
              rel="noopener noreferrer"
              href={
                'https://www.amazon.com/Lenovo-15ARP9-GeForce-Backlit-Keyboard/dp/B0D6G9GJRN?th=1'
              }
              className="black-underline-hover"
            >
              Lenovo LOQ 15ARP9 - Amazon
            </Link>
          </li>
          <li>
            <Link
              target="_blank"
              rel="noopener noreferrer"
              href={
                'https://shopee.ph/Lenovo-LOQ-15ARP9-83JC00GEPH-15.6-FHD-Ryzen-7-7435HS-12GB-RAM-512GB-SSD-RTX-4050-i.42550301.27829306849?sp_atk=d101f331-3c83-434d-9b6c-e4d475dc067b&xptdk=d101f331-3c83-434d-9b6c-e4d475dc067b'
              }
              className="black-underline-hover"
            >
              Lenovo LOQ 15ARP9 - Shopee
            </Link>
          </li>
        </ul>
      </div>

      <div className="flex w-2xl flex-col max-xl:w-xl max-lg:w-lg max-md:w-md max-sm:w-sm">
        <Image
          src={`/image/equipments/Keyboard.jpg`}
          width={1000}
          height={1000}
          alt="Lenovo LOQ 15 ARP9"
          className="mb-4 self-center rounded-lg border border-gray-700 shadow-lg brightness-75 contrast-90 dark:border-gray-600"
        />
        <h2 className="text-4xl font-bold">Keychron V1</h2>
        <p className="mb-4 border-b pb-4 text-xl">Wired Mechanical Keyboard</p>
        <p>
          This is my first ever mechanical keyboard and I am loving it very much. The sounds is not
          that noisy, it is very satisfying to type on. I have been using this keyboard since 2024
          and it has been my daily driver for all my coding and writing needs. I regret not having
          the wireless version, but I am still very happy with this keyboard.
        </p>
        <ul className="my-2 list-inside list-disc space-y-2 px-8">
          <li>
            <Link
              target="_blank"
              rel="noopener noreferrer"
              href={
                'https://www.amazon.in/Keychron-Mechanical-Programmable-Hot-swappable-Non-Transparent/dp/B09NLWG6X1?th=1'
              }
              className="black-underline-hover"
            >
              Keychron V1 Wired Version - Amazon
            </Link>
          </li>
          <li>
            <Link
              target="_blank"
              rel="noopener noreferrer"
              href={
                'https://shopee.ph/Keychron-V1-Knob-QMK-Mechanical-Keyboard-Frosted-Black-75-Wired-RGB-Hot-Swap-QMK-VIA-i.308793963.20251982247'
              }
              className="black-underline-hover"
            >
              Keychron V1 Wired Version - Shopee
            </Link>
          </li>
        </ul>
      </div>

      <div className="flex w-2xl flex-col max-xl:w-xl max-lg:w-lg max-md:w-md max-sm:w-sm">
        <Image
          src={`/image/equipments/Mouse.jpg`}
          width={1000}
          height={1000}
          alt="Lenovo LOQ 15 ARP9"
          className="mb-4 self-center rounded-lg border border-gray-700 shadow-lg brightness-75 contrast-90 dark:border-gray-600"
        />
        <h2 className="text-4xl font-bold">HP Mouse M160</h2>
        <p className="mb-4 border-b pb-4 text-xl">Gaming Mouse</p>
        <p>
          There&#39;s nothing special about it—just a simple mouse I use for my daily tasks. It has
          a DPI of 1600, making it very responsive. I&#39;ve been using this mouse since 2019, and
          it&#39;s unbelievable that it&#39;s still working perfectly fine. I&#39;ve used it for all
          my gaming and coding needs, and it has never let me down.
        </p>
        <ul className="my-2 list-inside list-disc space-y-2 px-8">
          <li>
            <Link
              target="_blank"
              rel="noopener noreferrer"
              href={
                'https://www.lazada.com.ph/products/pdp-i2391554963-s10891549418.html?c=&channelLpJumpArgs=&clickTrackInfo=query%253AHP%252BM160%253Bnid%253A2391554963%253Bsrc%253ALazadaMainSrp%253Brn%253A8922105587b251220f74c63cf47ced07%253Bregion%253Aph%253Bsku%253A2391554963_PH%253Bprice%253A130.71%253Bclient%253Adesktop%253Bsupplier_id%253A9378%253Bbiz_source%253Ah5_internal%253Bslot%253A2%253Butlog_bucket_id%253A470687%253Basc_category_id%253A13892%253Bitem_id%253A2391554963%253Bsku_id%253A10891549418%253Bshop_id%253A12819%253BtemplateInfo%253A107881_D_E%2523-1_A3_C%25231103_L%2523&freeshipping=1&fs_ab=2&fuse_fs=&lang=en&location=Metro%20Manila~Manila&price=130.71&priceCompare=skuId%3A10891549418%3Bsource%3Alazada-search-voucher%3Bsn%3A8922105587b251220f74c63cf47ced07%3BoriginPrice%3A13071%3BdisplayPrice%3A13071%3BsinglePromotionId%3A900000053814781%3BsingleToolCode%3ApromPrice%3BvoucherPricePlugin%3A0%3Btimestamp%3A1751951900690&ratingscore=4.794871794871795&request_id=8922105587b251220f74c63cf47ced07&review=234&sale=859&search=1&source=search&spm=a2o4l.searchlist.list.2&stock=1'
              }
              className="black-underline-hover"
            >
              HP Mouse M160 - Lazada
            </Link>
          </li>
          <li>
            <Link
              target="_blank"
              rel="noopener noreferrer"
              href={
                'https://shopee.ph/HP-M160-Wired-Gaming-Mouse-7-Colors-Rainbow-LED-RGB-Lights-Game-Mice-FREE-mousepad-i.744831731.18784751855?sp_atk=73eaebb2-91cb-42ef-8d30-cdb96b6bd7ca&xptdk=73eaebb2-91cb-42ef-8d30-cdb96b6bd7ca'
              }
              className="black-underline-hover"
            >
              HP Mouse M160 - Shopee
            </Link>
          </li>
        </ul>
      </div>

      <div className="flex w-2xl flex-col max-xl:w-xl max-lg:w-lg max-md:w-md max-sm:w-sm">
        <Image
          src={`/image/equipments/Earphone.jpg`}
          width={1000}
          height={1000}
          alt="Lenovo LOQ 15 ARP9"
          className="mb-4 self-center rounded-lg border border-gray-700 shadow-lg brightness-75 contrast-90 dark:border-gray-600"
        />
        <h2 className="text-4xl font-bold">Baseus Bowie MA10</h2>
        <p className="mb-4 border-b pb-4 text-xl">Wireless Earphone</p>
        <p>
          What could I say? I love listening to music while I work, and this is the perfect wireless
          earphone for me. It has a long battery life, good sound quality, and it is very
          comfortable to wear, it also has a noise cancelling feature. I have been using this
          earphone since 2024.
        </p>
        <ul className="my-2 list-inside list-disc space-y-2 px-8">
          <li>
            <Link
              target="_blank"
              rel="noopener noreferrer"
              href={'https://www.amazon.com/Baseus-Bowie-MA10-Wireless-Earbuds/dp/B0C99BNKTH'}
              className="black-underline-hover"
            >
              Baseus Bowie MA10 - Amazon
            </Link>
          </li>
          <li>
            <Link
              target="_blank"
              rel="noopener noreferrer"
              href={
                'https://shopee.ph/Baseus-Bowie-MA10-ANC-Wireless-Earphone-Bluetooth-5.3-48dB-Noise-Cancelling-140h-Playtime-IPX6-Waterproof-i.131196305.16995837957'
              }
              className="black-underline-hover"
            >
              Baseus Bowie MA10 - Shopee
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
}
