import { Link } from "@tanstack/react-router";

export function HeroSection() {
  return (
    <section className="relative w-full min-h-screen flex flex-col overflow-hidden">
      {/* Background Video */}
      <video
        autoPlay
        muted
        loop
        playsInline
        className="absolute inset-0 w-full h-full object-cover"
      >
        <source
          src="https://d8j0ntlcm91z4.cloudfront.net/user_38xzZboKViGWJOttwIXH07lWA1P/hf_20260217_030345_246c0224-10a4-422c-b324-070b7c0eceda.mp4"
          type="video/mp4"
        />
      </video>

      {/* Overlay */}
      <div className="absolute inset-0 bg-background/50" />

      {/* Content */}
      <div className="relative z-10 flex-1 flex flex-col items-center justify-center pt-[200px] md:pt-[280px] pb-[102px] px-6">
        <div className="flex flex-col items-center gap-10 max-w-3xl text-center">
          {/* Heading */}
          <h1 className="hero-heading-gradient text-[36px] md:text-[56px] font-medium leading-[1.28] max-w-[613px]">
            Smarter Talent. Intelligent Solutions. Powered by AI.
          </h1>

          {/* Subtitle */}
          <p className="text-[15px] font-normal text-foreground/70 max-w-[680px] mt-[-16px]">
            TalentIQ AI empowers businesses with intelligent IT consulting,
            AI-driven transformation, and scalable talent solutions—helping
            organizations innovate faster, operate smarter, and stay ahead in a
            digital-first world.
          </p>

          {/* CTA */}
          <Link
            to="/contact"
            className="glow-btn rounded-full border border-foreground/60 bg-foreground text-background px-[29px] py-[11px] text-[14px] font-medium hover:bg-foreground/90 transition-colors"
          >
            Get in Touch
          </Link>
        </div>
      </div>
    </section>
  );
}
