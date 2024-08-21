import { CardComponent } from "@/components/sections/card";
import Image from "next/image";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <div className="grid justify-center md:grid-cols-2 lg:grid-cols-3 gap-4 w-full">
        <CardComponent />
        <CardComponent />
        <CardComponent />
        <CardComponent />
        <CardComponent />
        <CardComponent />
      </div>
    </main>
  );
}
