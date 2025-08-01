import BoxNavbar from "@/src/presentation/layout/Navbar/BoxNavbar";
import BoxFooter from "@/src/presentation/layout/Footer/BoxFooter";
import BoxHero from "@/src/presentation/components/Hero/BoxHero";
import BoxHero2 from "@/src/presentation/components/Hero2/BoxHero2";
import BoxHero3 from "@/src/presentation/components/Hero3/BoxHero3";
import BoxHero4 from "@/src/presentation/components/Hero4/BoxHero4";
import BoxHero5 from "@/src/presentation/components/Hero5/BoxHero5";

export default function Home() {
  return (
    <div>
      <BoxNavbar />
      <main className="flex flex-col w-full items-center min-h-screen">
        <BoxHero />
        <BoxHero2/>
        <BoxHero3/>
        <BoxHero4/>
        <BoxHero5/>
      </main>
      <BoxFooter />
    </div>
  );
}
