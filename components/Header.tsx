

import { useEffect, useMemo, useState } from 'react';

type Social = { label: string; href: string; svg: JSX.Element };

function ExternalLink({ href, children }: { href: string; children: React.ReactNode }) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noreferrer"
      className="inline-flex items-center gap-1 rounded-md bg-white/5 px-1.5 py-0.5 text-white/80 hover:text-white hover:bg-white/10 transition"
    >
      <span>{children}</span>
      <span className="text-white/50">↗</span>
    </a>
  );
}

function Keycap({ children }: { children: React.ReactNode }) {
  return (
    <span className="inline-flex items-center justify-center rounded-md border border-white/15 bg-white/5 px-2 py-1 text-[11px] text-white/80">
      {children}
    </span>
  );
}

export default function Header() {
  // 你可以改成自己的信息
  const name = 'Rosy Zhao';
  const title = 'Product / UX / Data';
  const currentCompanyName = 'Michigan Ross Business+Tech';
  const currentCompanyUrl = 'https://businesstech.bus.umich.edu/';

  const taglineLeft = 'Researching, prototyping, designing and testing by day,';
  const taglineRight = 'coding, no-coding, launching products by night';

  const email = 'rosyzhao2001@gmail.com'; // 改成你的
  const [reveal, setReveal] = useState(false);

  // 按 “R” 显示邮箱（你截图里是 Press R）
  useEffect(() => {
    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key.toLowerCase() === 'r') setReveal(true);
      if (e.key === 'Escape') setReveal(false);
    };
    window.addEventListener('keydown', onKeyDown);
    return () => window.removeEventListener('keydown', onKeyDown);
  }, []);

  const socials: Social[] = useMemo(
    () => [
      {
        label: 'Twitter',
        href: 'https://twitter.com/', // 改成你的
        svg: (
          <svg viewBox="0 0 24 24" className="h-4 w-4" fill="currentColor" aria-hidden="true">
            <path d="M22 5.8c-.7.3-1.4.5-2.2.6.8-.5 1.3-1.2 1.6-2.1-.7.4-1.5.7-2.4.9A3.7 3.7 0 0 0 12.4 6c0 .3 0 .6.1.8A10.5 10.5 0 0 1 3 4.6a3.7 3.7 0 0 0 1.1 4.9c-.6 0-1.1-.2-1.6-.4v.1c0 1.8 1.3 3.3 3 3.6-.3.1-.7.1-1.1.1-.2 0-.4 0-.6-.1.4 1.6 1.9 2.8 3.6 2.8A7.4 7.4 0 0 1 2 17.3 10.5 10.5 0 0 0 7.7 19c6.8 0 10.5-5.7 10.5-10.5v-.5c.7-.5 1.3-1.1 1.8-1.8Z" />
          </svg>
        ),
      },
      {
        label: 'Dribbble',
        href: 'https://dribbble.com/', // 改成你的
        svg: (
          <svg viewBox="0 0 24 24" className="h-4 w-4" fill="currentColor" aria-hidden="true">
            <path d="M12 2a10 10 0 1 0 .1 0H12Zm8 10c0 .3 0 .7-.1 1a18.6 18.6 0 0 0-7-.2c.1.4.2.8.3 1.2a13.2 13.2 0 0 1 6.3 2.2A8 8 0 0 1 12 20a8 8 0 0 1-3.6-.9 14.7 14.7 0 0 1 3.6-6.4c-.2-.4-.4-.8-.6-1.2A16.7 16.7 0 0 0 6.6 19a8 8 0 0 1-2.5-3.7 16.8 16.8 0 0 1 6.6-1.2c-.2-.5-.5-1-.7-1.5a18.4 18.4 0 0 0-6.4 1.4A8 8 0 0 1 4 8.1a20 20 0 0 0 5.3 0c-.3-.5-.6-1-.9-1.5A18.3 18.3 0 0 1 4.8 6 8 8 0 0 1 12 4a8 8 0 0 1 4.2 1.2 17.3 17.3 0 0 1-4.5 2.7c.2.4.4.8.6 1.1A19.4 19.4 0 0 0 17 6.1 8 8 0 0 1 20 12Z" />
          </svg>
        ),
      },
      {
        label: 'GitHub',
        href: 'https://github.com/', // 改成你的
        svg: (
          <svg viewBox="0 0 24 24" className="h-4 w-4" fill="currentColor" aria-hidden="true">
            <path d="M12 .7A11.3 11.3 0 0 0 8.4 23c.6.1.8-.3.8-.6v-2.1c-3.2.7-3.9-1.4-3.9-1.4-.6-1.3-1.4-1.6-1.4-1.6-1.1-.7.1-.7.1-.7 1.2.1 1.9 1.2 1.9 1.2 1.1 1.9 3 1.3 3.7 1 .1-.8.4-1.3.7-1.6-2.6-.3-5.3-1.3-5.3-5.8 0-1.3.5-2.4 1.2-3.2-.1-.3-.5-1.5.1-3.1 0 0 1-.3 3.3 1.2a11.3 11.3 0 0 1 6 0C17.9 3.8 19 4 19 4c.6 1.6.2 2.8.1 3.1.8.8 1.2 1.9 1.2 3.2 0 4.5-2.7 5.5-5.3 5.8.4.3.8 1 .8 2.1v3.1c0 .3.2.7.8.6A11.3 11.3 0 0 0 12 .7Z" />
          </svg>
        ),
      },
    ],
    []
  );

  return (
    <header className="relative mt-6 mb-10 overflow-hidden rounded-2xl border border-white/10">
      {/* 背景渐变 */}
      <div className="absolute inset-0 bg-[radial-gradient(1200px_500px_at_10%_0%,rgba(255,120,90,0.55),transparent_55%),radial-gradient(900px_500px_at_45%_0%,rgba(80,200,120,0.45),transparent_55%),radial-gradient(900px_500px_at_80%_0%,rgba(120,120,255,0.45),transparent_55%),radial-gradient(700px_500px_at_100%_0%,rgba(200,90,255,0.45),transparent_55%)]" />
      {/* 斜线网格 */}
      <div className="absolute inset-0 opacity-[0.18] [background-image:repeating-linear-gradient(115deg,rgba(255,255,255,0.35)_0,rgba(255,255,255,0.35)_1px,transparent_1px,transparent_40px)]" />
      {/* 轻微暗角 */}
      <div className="absolute inset-0 bg-black/45" />

      <div className="relative px-8 py-10">
        <div className="flex items-start justify-between gap-10">
          {/* 左侧：名字 + 身份 */}
          <div className="min-w-0">
            <h1 className="text-5xl md:text-6xl tracking-tight text-white">{name}</h1>
            <div className="mt-3 text-sm text-white/80">
              <div>{title}</div>
              <div className="mt-1">
                Currently at <ExternalLink href={currentCompanyUrl}>{currentCompanyName}</ExternalLink>
              </div>
            </div>
          </div>

          {/* 右侧：简介 + 邮箱提示 + icon */}
          <div className="flex flex-col items-end gap-6">
            <div className="text-sm text-white/80 leading-relaxed text-right max-w-md">
              <div>{taglineLeft}</div>
              <div>{taglineRight}</div>
            </div>

            <div className="flex items-center gap-3 text-xs text-white/70">
              <span>Press</span>
              <Keycap>R</Keycap>
              <span>to reveal email</span>
              <span className="ml-2 font-mono text-white/80">
                {reveal ? email : '••••••••@••••••.com'}
              </span>
            </div>

            <div className="flex items-center gap-4 text-white/70">
              {socials.map((s) => (
                <a
                  key={s.label}
                  href={s.href}
                  target="_blank"
                  rel="noreferrer"
                  className="hover:text-white transition"
                  aria-label={s.label}
                  title={s.label}
                >
                  {s.svg}
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* 底部边缘（和截图里那种分隔条感觉） */}
      <div className="relative h-px bg-white/10" />
    </header>
  );
}

