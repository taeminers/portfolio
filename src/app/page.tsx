import { Navbar } from "@/components/core/Navbar";
import { Story } from "@/components/home/Story";
import { container } from "./globals.css";
export default function Home() {
  return (
    <div>
      <Navbar />
      <main className={container}>
        <Story />
        <Story />
      </main>
    </div>
  );
}
