import { useState } from 'react';
import Icon from '@/components/ui/icon';

const CHARS_IMG = 'https://cdn.poehali.dev/projects/a15dc780-90d8-410c-8e2c-a9e5640e8436/files/e4235c16-1582-49f7-a4c9-9a3371375584.jpg';

const TICKER_ITEMS = [
  '⚔️ Турнир на арене — каждую пятницу в 20:00',
  '💎 Двойной опыт по выходным',
  '🏆 Топ игрок недели: _Steve_',
  '🌿 Новый биом уже на сервере!',
  '🎁 Бонус за вход 7 дней подряд',
  '🛡️ Кланы: набирай команду и захватывай земли',
  '🐉 Дракон появится в эту субботу в 21:00',
];



const BANNER = 'https://cdn.poehali.dev/projects/a15dc780-90d8-410c-8e2c-a9e5640e8436/files/36454716-7700-4ad0-86a3-2a68fff4fa02.jpg';
const SERVER_IP = 'play.legacycraft.world';

const NAV = [
  { id: 'home', label: 'Главная' },
  { id: 'about', label: 'О сервере' },
  { id: 'donate', label: 'Донаты' },
];

const NEWS = [
  { tag: 'Обновление', color: 'bg-mint', emoji: '🌿', title: 'Новый биом — Лавандовые поля', text: 'Исследуйте мягкие холмы с редкими ресурсами и тайными данжами.' },
  { tag: 'Ивент', color: 'bg-peach', emoji: '🎉', title: 'Фестиваль строителей', text: 'Соревнование на лучшую постройку. Призы: алмазы и VIP-статус!' },
  { tag: 'Экономика', color: 'bg-lavender', emoji: '💰', title: 'Запуск аукциона', text: 'Торгуйте предметами с другими игроками прямо на спавне.' },
];

const FEATURES = [
  { icon: 'Users', color: 'bg-sky', title: 'Комьюнити', text: 'Дружное сообщество без токсичности и гриферов.' },
  { icon: 'PartyPopper', color: 'bg-peach', title: 'Ивенты', text: 'Еженедельные события с крутыми наградами.' },
  { icon: 'Wifi', color: 'bg-mint', title: 'Стабильный онлайн', text: 'Сервер работает 24/7 без лагов и вылетов.' },
  { icon: 'Puzzle', color: 'bg-lavender', title: 'Плагины', text: 'Кланы, экономика, квесты и уникальные механики.' },
];

const FEATURES_BIG = [
  { emoji: '🏕️', title: 'Выживание', text: 'Классический survival с дружелюбными правилами.' },
  { emoji: '💎', title: 'Экономика', text: 'Своя валюта, магазины и игровой рынок.' },
  { emoji: '⚔️', title: 'PvP и арены', text: 'Сражения на специальных аренах за награды.' },
  { emoji: '🛡️', title: 'Кланы', text: 'Создавай гильдию и захватывай территории.' },
  { emoji: '📜', title: 'Квесты', text: 'Десятки заданий с уникальными сюжетами.' },
  { emoji: '🏆', title: 'Достижения', text: 'Открывай ачивки и получай бонусы.' },
];

const STATS = [
  { value: '12 480', label: 'игроков всего' },
  { value: '5 926', label: 'сейчас онлайн' },
  { value: '4', label: 'мира' },
  { value: '24/7', label: 'аптайм' },
];

const DONATES = [
  { name: 'Hero', price: '30 ₽', emoji: '🌟', color: 'bg-sky', perks: ['+2 ч игрового времени/нед.', 'Скин-пакет', 'VIP-чат'] },
  { name: 'Titan', price: '70 ₽', emoji: '🔱', color: 'bg-mint', perks: ['Всё из Hero', 'Двойной опыт', 'Питомец'] },
  { name: 'Magister', price: '500 ₽', emoji: '✨', color: 'bg-lavender', perks: ['Всё из Titan', 'Телепорт', 'Титул в чате'] },
  { name: 'Imperator', price: '850 ₽', emoji: '👑', color: 'bg-peach', perks: ['Всё из Magister', 'Мини-дом', 'Создание кланов'] },
  { name: 'Dragon', price: '1 700 ₽', emoji: '🐉', color: 'bg-coral', perks: ['Всё из Imperator', 'Эффект вокруг персонажа', 'Бета-тесты'], hot: true },
  { name: 'God', price: '4 444 ₽', emoji: '⚡', color: 'bg-gold', perks: ['Полный доступ к командам', 'Индивидуальный скин', 'VIP-всё'] },
];

const PROMOS = [
  { emoji: '🤝', title: 'Приведи друга', text: 'Скидка 10% на любой донат' },
  { emoji: '⭐', title: 'Двойной опыт', text: 'Каждые выходные ×2 EXP' },
  { emoji: '🎁', title: 'Случайный подарок', text: 'Бонус при любой покупке' },
];

const Index = () => {
  const [activeVersion, setActiveVersion] = useState('1.20.1');
  const [menuOpen, setMenuOpen] = useState(false);
  const [copied, setCopied] = useState(false);



  const copyIp = () => {
    navigator.clipboard?.writeText(SERVER_IP);
    setCopied(true);
    setTimeout(() => setCopied(false), 1800);
  };

  const scrollTo = (id: string) => {
    setMenuOpen(false);
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen bg-background overflow-x-hidden">
      {/* HEADER */}
      <header className="fixed top-0 inset-x-0 z-50 bg-white/80 backdrop-blur-md border-b-4 border-mint/40">
        <div className="container flex items-center justify-between h-16 md:h-20">
          <button onClick={() => scrollTo('home')} className="flex items-center gap-2">
            <div className="w-10 h-10 bg-mint rounded-lg grid place-items-center pixel-shadow text-xl animate-bob">🟩</div>
            <span className="font-pixel text-[10px] md:text-sm text-foreground leading-tight">Legacy<br />Craft World</span>
          </button>

          <nav className="hidden md:flex items-center gap-2">
            {NAV.map((n) => (
              <button key={n.id} onClick={() => scrollTo(n.id)}
                className="px-4 py-2 rounded-lg font-semibold text-foreground hover:bg-mint/20 transition-colors">
                {n.label}
              </button>
            ))}
            <button onClick={() => scrollTo('donate')}
              className="ml-2 px-5 py-2.5 bg-accent text-accent-foreground rounded-lg font-bold pixel-shadow hover:-translate-y-0.5 transition-transform">
              Играть
            </button>
          </nav>

          <button onClick={() => setMenuOpen(!menuOpen)} className="md:hidden p-2">
            <Icon name={menuOpen ? 'X' : 'Menu'} size={28} />
          </button>
        </div>

        {menuOpen && (
          <div className="md:hidden bg-white border-t-2 border-mint/30 px-4 py-3 flex flex-col gap-2 animate-fade-up">
            {NAV.map((n) => (
              <button key={n.id} onClick={() => scrollTo(n.id)}
                className="text-left px-4 py-3 rounded-lg font-semibold hover:bg-mint/20">
                {n.label}
              </button>
            ))}
          </div>
        )}
      </header>

      {/* HERO */}
      <section id="home" className="relative pt-24 md:pt-28 pb-16 md:pb-24">
        <div className="relative container">
          <div className="relative rounded-3xl overflow-hidden pixel-border">
            <img src={BANNER} alt="Legacy Craft World" className="w-full h-[340px] md:h-[520px] object-cover" />
            <div className="absolute inset-0 bg-gradient-to-t from-foreground/60 via-transparent to-transparent" />

            {/* falling leaves */}
            {Array.from({ length: 9 }).map((_, i) => (
              <span key={i} className="leaf" style={{
                left: `${(i * 11 + 5) % 100}%`,
                animationDuration: `${8 + (i % 4) * 2}s`,
                animationDelay: `${i * 1.3}s`,
              }}>{['🍃', '🌿', '🍂'][i % 3]}</span>
            ))}

            <div className="absolute inset-0 flex flex-col justify-end p-6 md:p-12">
              <span className="inline-block w-fit bg-gold text-foreground font-bold text-xs md:text-sm px-4 py-1.5 rounded-full mb-4 animate-fade-up">
                🟢 Сервер онлайн
              </span>
              <h1 className="font-pixel text-white text-2xl md:text-5xl leading-relaxed text-stroke animate-fade-up" style={{ animationDelay: '0.1s' }}>
                LEGACY<br />CRAFT WORLD
              </h1>
              <p className="text-white/90 text-base md:text-xl mt-4 max-w-xl animate-fade-up" style={{ animationDelay: '0.2s' }}>
                Уютный мир приключений, дружное комьюнити и куча ивентов. Заходи и стань частью легенды!
              </p>

              <div className="flex flex-wrap items-center gap-3 mt-6 animate-fade-up" style={{ animationDelay: '0.3s' }}>
                <button onClick={copyIp}
                  className="group flex items-center gap-3 bg-white rounded-xl px-5 py-3 pixel-shadow hover:-translate-y-0.5 transition-transform">
                  <Icon name="Server" size={20} className="text-mint" />
                  <span className="font-mono font-bold text-foreground">{SERVER_IP}</span>
                  <Icon name={copied ? 'Check' : 'Copy'} size={18} className="text-muted-foreground" />
                </button>
                <button onClick={() => scrollTo('donate')}
                  className="px-6 py-3.5 bg-accent text-accent-foreground rounded-xl font-bold text-lg pixel-shadow hover:-translate-y-0.5 transition-transform">
                  Играть сейчас
                </button>
              </div>
            </div>
          </div>

          {/* version + online row */}
          <div className="grid md:grid-cols-3 gap-4 mt-6">
            <div className="md:col-span-2 bg-white rounded-2xl p-5 pixel-shadow">
              <p className="font-bold text-sm text-muted-foreground mb-3">Выбери версию клиента:</p>
              <div className="flex flex-wrap gap-2">
                {['1.16.5', '1.17.1', '1.18.2', '1.19.2', '1.20.1'].map((v) => (
                  <button key={v} onClick={() => setActiveVersion(v)}
                    className={`px-4 py-2 rounded-lg font-semibold transition-all ${activeVersion === v ? 'bg-mint text-white pixel-shadow' : 'bg-muted text-foreground hover:bg-mint/20'}`}>
                    {v}
                  </button>
                ))}
              </div>
            </div>
            <div className="bg-mint rounded-2xl p-5 pixel-shadow flex items-center gap-4">
              <div className="w-14 h-14 bg-white/30 rounded-xl grid place-items-center text-2xl animate-bob">👥</div>
              <div>
                <p className="font-pixel text-2xl text-white">5 926</p>
                <p className="text-white/90 text-sm font-semibold">игроков онлайн</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* WHY US */}
      <section className="container pb-16 md:pb-24">
        <SectionTitle emoji="✨" title="Почему Legacy Craft World?" />
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {FEATURES.map((f, i) => (
            <div key={f.title}
              className="group bg-white rounded-2xl p-6 pixel-shadow hover:-translate-y-2 transition-transform animate-fade-up"
              style={{ animationDelay: `${i * 0.08}s` }}>
              <div className={`w-16 h-16 ${f.color} rounded-xl grid place-items-center mb-4 group-hover:rotate-6 transition-transform`}>
                <Icon name={f.icon} size={30} className="text-white" />
              </div>
              <h3 className="font-bold text-lg mb-1">{f.title}</h3>
              <p className="text-muted-foreground text-sm">{f.text}</p>
            </div>
          ))}
        </div>
      </section>

      {/* NEWS */}
      <section className="container pb-16 md:pb-24">
        <SectionTitle emoji="📰" title="Свежие новости" />
        <div className="grid md:grid-cols-3 gap-6">
          {NEWS.map((n, i) => (
            <article key={n.title}
              className="bg-white rounded-2xl overflow-hidden pixel-shadow hover:-translate-y-2 transition-transform animate-fade-up"
              style={{ animationDelay: `${i * 0.1}s` }}>
              <div className={`${n.color} h-32 grid place-items-center text-5xl`}>{n.emoji}</div>
              <div className="p-5">
                <span className={`inline-block ${n.color} text-foreground text-xs font-bold px-3 py-1 rounded-full mb-3`}>{n.tag}</span>
                <h3 className="font-bold text-lg mb-2">{n.title}</h3>
                <p className="text-muted-foreground text-sm mb-4">{n.text}</p>
                <button className="flex items-center gap-1 font-bold text-mint hover:gap-2 transition-all">
                  Подробнее <Icon name="ArrowRight" size={16} />
                </button>
              </div>
            </article>
          ))}
        </div>
      </section>

      {/* ABOUT */}
      <section id="about" className="bg-gradient-to-b from-lavender/20 to-background py-16 md:py-24">
        <div className="container">
          <SectionTitle emoji="🏰" title="О сервере" />

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5 mb-12">
            {FEATURES_BIG.map((f, i) => (
              <div key={f.title}
                className="bg-white rounded-2xl p-6 pixel-shadow hover:-translate-y-1 transition-transform animate-fade-up"
                style={{ animationDelay: `${i * 0.06}s` }}>
                <div className="text-4xl mb-3">{f.emoji}</div>
                <h4 className="font-bold text-lg mb-1">{f.title}</h4>
                <p className="text-muted-foreground text-sm">{f.text}</p>
              </div>
            ))}
          </div>

          {/* STATS */}
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
            {STATS.map((s) => (
              <div key={s.label} className="bg-mint rounded-2xl p-5 text-center pixel-shadow">
                <p className="font-pixel text-xl md:text-2xl text-white mb-2">{s.value}</p>
                <p className="text-white/90 text-sm font-semibold">{s.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* DONATE */}
      <section id="donate" className="container py-16 md:py-24">
        <div className="text-center mb-12">
          <h2 className="font-pixel text-lg md:text-3xl text-foreground mb-4">Донат привилегии</h2>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {DONATES.map((d, i) => (
            <div key={d.name}
              className={`relative bg-white rounded-3xl p-6 pixel-shadow hover:-translate-y-2 transition-all animate-fade-up ${d.hot ? 'ring-4 ring-coral' : ''}`}
              style={{ animationDelay: `${i * 0.07}s` }}>
              {d.hot && (
                <span className="absolute -top-3 left-1/2 -translate-x-1/2 bg-coral text-white text-xs font-bold px-4 py-1 rounded-full" style={{ animation: 'pulse-glow 2s infinite' }}>
                  🔥 ХИТ
                </span>
              )}
              <div className={`w-16 h-16 ${d.color} rounded-2xl grid place-items-center text-3xl mb-4`}>{d.emoji}</div>
              <h3 className="font-pixel text-base text-foreground mb-1">{d.name}</h3>
              <p className="font-pixel text-2xl text-mint mb-6">{d.price}</p>
              <button className="w-full py-3 bg-accent text-accent-foreground rounded-xl font-bold pixel-shadow hover:-translate-y-0.5 transition-transform">
                Купить
              </button>
              <p className="text-center text-xs text-muted-foreground mt-2">⏳ Покупка пока недоступна — скоро!</p>
            </div>
          ))}
        </div>

        {/* PROMOS */}
        <div className="grid md:grid-cols-3 gap-5 mb-10">
          {PROMOS.map((p) => (
            <div key={p.title} className="bg-lavender/30 rounded-2xl p-6 flex items-center gap-4 border-2 border-lavender/40">
              <div className="text-4xl">{p.emoji}</div>
              <div>
                <h4 className="font-bold text-lg">{p.title}</h4>
                <p className="text-muted-foreground text-sm">{p.text}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="bg-white rounded-3xl p-6 md:p-8 pixel-shadow text-center">
          <p className="font-bold mb-4 text-muted-foreground">Способы оплаты:</p>
          <div className="flex flex-wrap justify-center gap-3">
            {['💳 Карта', '🥝 QIWI', '🟣 ЮMoney', '₿ Крипта'].map((m) => (
              <span key={m} className="bg-muted px-5 py-2.5 rounded-xl font-semibold">{m}</span>
            ))}
          </div>
        </div>
      </section>

      {/* WIPE TIMER */}
      <section className="container pb-16 md:pb-24">
        <div className="relative bg-gradient-to-r from-lavender/40 via-peach/30 to-mint/30 rounded-3xl p-8 md:p-12 pixel-shadow overflow-hidden">
          <div className="absolute right-0 top-0 text-[120px] opacity-10 leading-none select-none">⏰</div>
          <div className="relative">
            <span className="inline-block bg-coral text-white text-xs font-bold px-4 py-1.5 rounded-full mb-4">📅 Следующий вайп</span>
            <h3 className="font-pixel text-base md:text-2xl text-foreground mb-3">Большое обновление уже скоро!</h3>
            <p className="text-muted-foreground max-w-lg mb-6">После вайпа: новая карта, переработанная экономика, эксклюзивные данжи и секретный биом. Успей построить — лучшие постройки будут сохранены в музее сервера.</p>
            <div className="flex flex-wrap gap-3">
              <WipeBlock n="14" label="дней" />
              <WipeBlock n="07" label="часов" />
              <WipeBlock n="32" label="минут" />
            </div>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="bg-foreground text-white py-12">
        <div className="container">
          <div className="flex flex-col md:flex-row justify-between items-center gap-8">
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 bg-mint rounded-lg grid place-items-center text-2xl">🟩</div>
              <div>
                <p className="font-pixel text-xs">Legacy Craft World</p>
                <p className="text-white/60 text-sm mt-1">Уютный Minecraft-сервер</p>
              </div>
            </div>
            <div className="flex items-center gap-4">
              <a href="#" className="flex items-center gap-2 bg-white/10 hover:bg-white/20 px-5 py-2.5 rounded-xl font-semibold transition-colors">
                <Icon name="MessageCircle" size={20} /> ВКонтакте
              </a>
              <button onClick={() => scrollTo('home')} className="flex items-center gap-2 bg-mint hover:bg-mint/80 px-5 py-2.5 rounded-xl font-semibold transition-colors">
                <Icon name="ArrowUp" size={20} /> Наверх
              </button>
            </div>
          </div>
          <div className="border-t border-white/10 mt-8 pt-6 text-center text-white/50 text-sm">
            © 2026 Legacy Craft World. Не является официальным продуктом Mojang.
          </div>
        </div>
      </footer>
    </div>
  );
};

const WipeBlock = ({ n, label }: { n: string; label: string }) => (
  <div className="bg-white rounded-2xl px-6 py-4 text-center pixel-shadow min-w-[80px]">
    <p className="font-pixel text-2xl text-coral">{n}</p>
    <p className="text-xs text-muted-foreground mt-1">{label}</p>
  </div>
);

const SectionTitle = ({ emoji, title }: { emoji: string; title: string }) => (
  <div className="flex items-center gap-3 mb-8">
    <span className="text-3xl md:text-4xl animate-bob">{emoji}</span>
    <h2 className="font-pixel text-base md:text-2xl text-foreground">{title}</h2>
  </div>
);

export default Index;