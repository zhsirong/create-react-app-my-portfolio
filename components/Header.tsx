export default function Header() {
  return (
    <header className="flex justify-between items-start pt-16 pb-20 text-[11px] text-gray-500 uppercase tracking-widest">
      {/* Left */}
      <div>
        <h1 className="text-white text-lg font-medium normal-case tracking-normal mb-1">
          Rosy Zhao
        </h1>
        <p className="normal-case text-gray-400 text-sm tracking-normal">
          Designer with business sense & tech development skills.
        </p>
      </div>

      {/* Right */}
      <div className="text-right normal-case text-gray-400 text-sm tracking-normal max-w-[420px]">
        <p>
          Designing with product thinking by day;
          <br />
          building and shipping by night.
        </p>
        <p className="mt-3 text-gray-300">
          Press <span className="font-medium">m</span> to reveal email
        </p>
      </div>
    </header>
  );
}
