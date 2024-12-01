import { Navbar } from "@/components/core/Navbar";
import { Story } from "@/components/home/Story";
import { container } from "./globals.css";
import { HomePage } from "@/components/home";
import { Footer } from "@/components/core/Footer";

export default function Home() {
  return (
    <div>
      <Navbar />
      <main className={container}>
        <HomePage />
        <Footer />
      </main>
    </div>
  );
}
