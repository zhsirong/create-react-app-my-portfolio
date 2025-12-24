export default function Header() {
  return (
    <header className="flex justify-between items-start pt-16 pb-20 text-[11px] text-gray-500 uppercase tracking-widest">
      <div>
        <h1 className="text-white text-lg font-medium normal-case tracking-normal mb-1"Rosy Zhao</h1>
        <p>Product designer <br/> with business sense & dev skills</p>
      </div>
      <div className="max-w-[300px] text-right normal-case tracking-normal">
        <p>Design + business + engineering — from concept to launch.</p>
        <p className="mt-4 text-white">Press <span className="underline italic">m</span> to reveal email</p>
      </div>
    </header>
  );
}
