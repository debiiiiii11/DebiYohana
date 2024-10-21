import Hero from "./components/hero";

import RiwayatPekerjaan from "./components/riwayatpekerjaan";
import RiwayatPendidikan from "./components/riwayatpendidikan";
import "./debi-style.css";


export default function CVonline() {
  return (   
    <section>
      <Hero/>
      <RiwayatPendidikan/>
      <RiwayatPekerjaan/>
    </section>
  );
}
