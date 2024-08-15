import { Navbar } from "@/components/core/Navbar";
import { Story } from "@/components/home/Story";
import { container } from "./globals.css";
import { HomePage } from "@/components/home";
export default function Home() {
  return (
    <div>
      <Navbar />
      <main className={container}>
        <HomePage />
      </main>
    </div>
  );
}
