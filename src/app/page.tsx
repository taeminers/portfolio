import { Story } from "@/components/home/Story";
import { container } from "./globals.css";
import { HomePage } from "@/components/home";
import { Footer } from "@/components/core/Footer";
import { OpenedNavbar } from "@/components/core/OpenedNavbar";

export default function Home() {
  return (
    <div>
      <main className={container}>
        <OpenedNavbar />
        <HomePage />
        <Footer />
      </main>
    </div>
  );
}
