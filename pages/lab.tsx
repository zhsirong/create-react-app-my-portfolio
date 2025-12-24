import Header from "../components/Header";
import Navigation from "../components/Navigation";

export default function Lab() {
  console.log("LAB PAGE LOADED");

  return (
    <div className="max-w-7xl mx-auto px-6 pt-20 pb-32">

      <div className="top-gradient-bar" />

      <Header />

      <div className="grid grid-cols-12 gap-4 auto-rows-[300px]">
        <div className="col-span-12 md:col-span-7 bg-card rounded-3xl border border-white/5 p-8">
          <span className="text-xs text-gray-500">New internet: drag to open</span>
        </div>

        <div className="col-span-12 md:col-span-5 bg-card rounded-3xl border border-white/5 p-8 flex flex-col justify-end">
          <h3 className="text-3xl font-serif">&quot;Lack of Choice&quot;</h3>
        </div>

        <div className="col-span-12 md:col-span-4 bg-card rounded-3xl border border-white/5 p-8">
          <span className="text-xs text-gray-500">Custom context menu</span>
        </div>
      </div>

      <Navigation active="lab" />
    </div>
  );
}
















