export default function Header() {
  return (
    <header className="flex justify-between items-start pt-16 pb-20 text-[11px] text-gray-500 uppercase tracking-widest">
      <div>
        <h1 className="text-white text-lg font-medium normal-case tracking-normal mb-1">Arsen Kolyba</h1>
        <p>Software designer <br/> Currently at Wix</p>
      </div>
      <div className="max-w-[300px] text-right normal-case tracking-normal">
        <p>Researching, prototyping, designing and testing by day; coding, no-coding, launching products by night.</p>
        <p className="mt-4 text-white">Press <span className="underline italic">m</span> to reveal email</p>
      </div>
    </header>
  );
}