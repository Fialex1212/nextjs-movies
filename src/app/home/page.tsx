import Banner from "@/components/Banner";
import Devices from "@/components/Devices";
import FAQ from "@/components/FAQ";
import Plans from "@/components/Plans";
import Slider from "@/components/Slider";

export default function HomePage() {
  return (
    <>
      <Banner />
      <Slider />
      <Devices />
      <FAQ />
      <Plans />
    </>
  );
}
