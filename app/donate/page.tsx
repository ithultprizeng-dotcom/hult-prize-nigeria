"use client";
import Script from 'next/script';
import styles from './page.module.css';

export default function Team() {

  return (
    <main className="px-8 py-20 flex flex-col gap-20 items-center">
      <div>
        <h1 className="font-figtree font-semibold text-aloe text-sub-heading leading-[1.3] max-w-[30ch]">
          Donate to Hult Prize Nigeria
        </h1>
      </div>

      <section className="flex flex-col items-center justify-center px-4 py-16">
        <Script
          src="https://donorbox.org/widget.js"
          data-paypal-express="true"
          strategy="afterInteractive"
        />
        <div className="w-full max-w-5xl flex justify-center">
          <iframe
            className={styles.iframe}
            src="https://donorbox.org/embed/hult-prize-nigeria"
            name="donorbox"
            seamless
            // @ts-ignore
            allowpaymentrequest="true"
            allow="payment"
          />
        </div>
      </section>
    </main>
  );
}
