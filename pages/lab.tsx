import Header from "../components/Header";
import Navigation from "../components/Navigation";

export default function Lab() {
  // GitHub Pages 上会有 /create-react-app-my-portfolio 前缀
  // 本地开发时 basePath 为空
  const basePath =
    typeof window !== "undefined"
      ? // Next 会把 assetPrefix 注入到 __NEXT_DATA__ 里
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        ((window as any).__NEXT_DATA__?.assetPrefix as string) || ""
      : "";

  return (
    <div className="max-w-7xl mx-auto px-6 pt-20 pb-32">
      <div className="top-gradient-bar" />
      <Header />

      <div className="grid grid-cols-12 gap-4 auto-rows-[300px]">
        {/* Card 1 */}
        <div className="col-span-12 md:col-span-7 bg-card rounded-3xl border border-white/5 p-8">
          <span className="text-xs text-gray-500">New internet: drag to open</span>
        </div>

        {/* Card 2 */}
        <div className="col-span-12 md:col-span-5 bg-card rounded-3xl border border-white/5 p-8 flex flex-col justify-end">
          <h3 className="text-3xl font-serif">&quot;Lack of Choice&quot;</h3>
        </div>

        {/* Card 3 — Dream AR */}
        <div className="col-span-12 md:col-span-4 bg-card rounded-3xl border border-white/5 overflow-hidden relative">
          <span className="absolute top-6 left-6 z-10 text-xs text-gray-400">
            Dream AR
          </span>

      <img
  src="lab/dream-ar.gif"
  alt="Dream AR travel experience"
  className="absolute inset-0 w-full h-full object-cover opacity-90"
/>


          <span className="absolute bottom-6 left-6 right-6 z-10 text-xs text-gray-400 leading-relaxed">
            Self-designed AR travel experience with dynamic visual effects.
          </span>

          <div className="absolute inset-0 bg-black/20" />
        </div>
      </div>

      <Navigation active="lab" />
    </div>
  );
}




