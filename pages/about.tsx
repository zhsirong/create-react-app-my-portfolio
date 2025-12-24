import Header from '../components/Header';
import Navigation from '../components/Navigation';

export default function About() {
  return (
    <div className="max-w-4xl mx-auto px-6 mb-32">
      <div className="top-gradient-bar" />

      <Header />
      <section className="mb-20">
        <h2 className="text-lg mb-8">Where I've worked</h2>
        <div className="space-y-8 text-sm text-gray-400 leading-relaxed max-w-xl">
          <p>I'm currently working at <span className="text-white">Wix</span>, specifically in Wix Analytics.</p>
          <p>Also, I'm the founding designer at <span className="text-white">Zori</span>.</p>
          <div className="inline-block border border-green-900/50 bg-green-900/20 text-green-400 px-3 py-1 rounded-full text-xs">Available for projects</div>
        </div>
      </section>

      <section>
        <h2 className="text-lg mb-8">Recognition</h2>
        <div className="border-t border-white/10">
          {[
            ['awwwards', 'Young Jury, x2 Honorable Mention'],
            ['Product Hunt', 'x3 Product of the Day'],
            ['Figma', 'Plugin featured, grant recipient'],
          ].map(([brand, award]) => (
            <div key={brand} className="flex justify-between py-5 border-b border-white/5 text-sm uppercase tracking-tighter">
              <span className="text-white">{brand}</span>
              <span className="text-gray-500">{award}</span>
            </div>
          ))}
        </div>
      </section>
      <Navigation active="about" />
    </div>
  );
}