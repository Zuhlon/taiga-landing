'use client'

import { useState } from 'react'

// ============================================
// ГЛОБАЛЬНЫЕ СТИЛИ И АНИМАЦИИ
// ============================================
const styles = `
  @keyframes float {
    0%, 100% { transform: translateY(0px); }
    50% { transform: translateY(-10px); }
  }
  
  @keyframes pulse {
    0%, 100% { transform: scale(1); opacity: 1; }
    50% { transform: scale(1.05); opacity: 0.8; }
  }
  
  @keyframes shimmer {
    0% { background-position: -200% 0; }
    100% { background-position: 200% 0; }
  }
  
  @keyframes slideUp {
    from { opacity: 0; transform: translateY(30px); }
    to { opacity: 1; transform: translateY(0); }
  }
  
  @keyframes glow {
    0%, 100% { box-shadow: 0 0 20px rgba(118, 67, 215, 0.3); }
    50% { box-shadow: 0 0 40px rgba(118, 67, 215, 0.6); }
  }
  
  .hover-lift {
    transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
  }
  
  .hover-lift:hover {
    transform: translateY(-4px);
    box-shadow: 0 20px 40px rgba(118, 67, 215, 0.15);
  }
  
  .gradient-text {
    background: linear-gradient(90deg, #7643d7, #9b6dff, #7643d7);
    background-size: 200% auto;
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    animation: shimmer 3s linear infinite;
  }
  
  .animate-float {
    animation: float 3s ease-in-out infinite;
  }
  
  .animate-pulse-slow {
    animation: pulse 2s ease-in-out infinite;
  }
  
  .animate-glow {
    animation: glow 2s ease-in-out infinite;
  }
  
  .btn-primary {
    position: relative;
    overflow: hidden;
    transition: all 0.3s ease;
  }
  
  .btn-primary::after {
    content: '';
    position: absolute;
    top: 50%;
    left: 50%;
    width: 0;
    height: 0;
    background: rgba(255, 255, 255, 0.2);
    border-radius: 50%;
    transform: translate(-50%, -50%);
    transition: width 0.6s, height 0.6s;
  }
  
  .btn-primary:hover::after {
    width: 300px;
    height: 300px;
  }
  
  .card-shine {
    position: relative;
    overflow: hidden;
  }
  
  .card-shine::before {
    content: '';
    position: absolute;
    top: -50%;
    left: -50%;
    width: 200%;
    height: 200%;
    background: linear-gradient(
      45deg,
      transparent 40%,
      rgba(118, 67, 215, 0.05) 50%,
      transparent 60%
    );
    transform: rotate(45deg);
    transition: all 0.5s;
    opacity: 0;
  }
  
  .card-shine:hover::before {
    opacity: 1;
    transform: rotate(45deg) translate(50%, 50%);
  }
`

// ============================================
// КОНЦЕПТ 1: Краткие цепляющие хуки (с микроразметкой для Яндекс.Метрики)
// ============================================
function LandingConcept1() {
  return (
    <div style={{ minHeight: '100vh', backgroundColor: '#FFFFFF', color: '#190750' }}>
      <style>{styles}</style>
      
      {/* Яндекс.Метрика: Код счётчика с веб-визором */}
      {/* Замените XXXXXXXX на номер вашего счётчика */}
      <script
        id="yandex-metrika-config"
        type="text/javascript"
        dangerouslySetInnerHTML={{
          __html: `
            (function(m,e,t,r,i,k,a){m[i]=m[i]||function(){(m[i].a=m[i].a||[]).push(arguments)};
            m[i].l=1*new Date();
            for (var j = 0; j < document.scripts.length; j++) {if (document.scripts[j].src === r) { return; }}
            k=e.createElement(t),a=e.getElementsByTagName(t)[0],k.async=1,k.src=r,a.parentNode.insertBefore(k,a)})
            (window, document, "script", "https://mc.yandex.ru/metrika/tag.js", "ym");

            // ЗАМЕНИТЕ XXXXXXXX НА НОМЕР ВАШЕГО СЧЁТЧИКА
            ym('106950455', 'init', {
              clickmap: true,
              trackLinks: true,
              accurateTrackBounce: true,
              webvisor: true,
              trackHash: true,
              ecommerce: "dataLayer"
            });
          `
        }}
      />
      
      {/* Микроразметка для веб-визора: невидимые инпуты для отслеживания состояний */}
      <input type="hidden" id="ym-concept" value="hooks" />
      <input type="hidden" id="ym-page-type" value="landing" />
      
      {/* Header */}
      <header 
        id="header"
        data-ym-area="header"
        data-ym-name="Шапка сайта"
        style={{
        position: 'fixed',
        top: 0,
        left: 0,
        right: 0,
        padding: '16px 40px',
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        backgroundColor: 'rgba(255,255,255,0.95)',
        backdropFilter: 'blur(10px)',
        zIndex: 100,
        borderBottom: '1px solid rgba(118,67,215,0.1)',
      }}>
        <div 
          id="logo"
          data-ym-click-type="navigation"
          data-ym-name="Логотип"
          style={{ fontSize: '24px', fontWeight: 800, color: '#7643d7' }}>
          Контакт.ИИ
        </div>
        <nav style={{ display: 'flex', gap: '32px', alignItems: 'center' }}>
          <a 
            href="#features" 
            id="nav-features"
            data-ym-click-type="navigation"
            data-ym-name="Ссылка: Возможности"
            className="hover-lift" 
            style={{ color: '#190750', textDecoration: 'none', fontSize: '15px', fontWeight: 500 }}>Возможности</a>
          <a 
            href="#revenue" 
            id="nav-revenue"
            data-ym-click-type="navigation"
            data-ym-name="Ссылка: Рост выручки"
            className="hover-lift" 
            style={{ color: '#190750', textDecoration: 'none', fontSize: '15px', fontWeight: 500 }}>Рост выручки</a>
          <a 
            href="#pricing" 
            id="nav-pricing"
            data-ym-click-type="navigation"
            data-ym-name="Ссылка: Тарифы"
            className="hover-lift" 
            style={{ color: '#190750', textDecoration: 'none', fontSize: '15px', fontWeight: 500 }}>Тарифы</a>
          <button 
            id="header-cta"
            data-ym-click-type="button"
            data-ym-name="Кнопка: Начать бесплатно (шапка)"
            data-ym-goal-id="start_free_header"
            className="btn-primary" 
            style={{
              padding: '12px 28px',
              borderRadius: '50px',
              border: 'none',
              backgroundColor: '#7643d7',
              color: '#FFF',
              fontWeight: 600,
              cursor: 'pointer',
              fontSize: '15px',
              boxShadow: '0 4px 20px rgba(118,67,215,0.3)',
            }}>
            Начать бесплатно
          </button>
        </nav>
      </header>

      {/* Hero */}
      <section 
        id="hero-section"
        data-ym-area="hero"
        data-ym-name="Главный экран"
        style={{
        paddingTop: '160px',
        paddingBottom: '80px',
        textAlign: 'center',
        background: 'linear-gradient(180deg, #FAF8FF 0%, #FFFFFF 100%)',
      }}>
        <div 
          id="hero-badge"
          data-ym-name="Бейдж: Платформа роста выручки"
          style={{
          display: 'inline-block',
          padding: '10px 24px',
          borderRadius: '50px',
          backgroundColor: 'rgba(118,67,215,0.1)',
          marginBottom: '32px',
          fontSize: '14px',
          color: '#7643d7',
          fontWeight: 600,
        }}>
          📈 Платформа роста выручки через коммуникации
        </div>
        
        <h1 
          id="hero-headline"
          data-ym-name="Заголовок: Продажи начинаются в разговоре"
          style={{
          fontSize: '68px',
          fontWeight: 800,
          lineHeight: 1.1,
          marginBottom: '24px',
          maxWidth: '950px',
          margin: '0 auto 24px',
          letterSpacing: '-2px',
        }}>
          Продажи начинаются <span className="gradient-text">в разговоре</span>
        </h1>
        
        <p 
          id="hero-subtitle"
          data-ym-name="Подзаголовок"
          style={{
          fontSize: '22px',
          color: '#666',
          maxWidth: '650px',
          margin: '0 auto 48px',
          lineHeight: 1.7,
        }}>
          ИИ, который увеличивает выручку, а не отчёты. Превращает каждый контакт с клиентом в управляемый источник продаж.
        </p>
        
        <div 
          id="hero-cta-group"
          data-ym-area="cta-buttons"
          data-ym-name="Кнопки действия"
          style={{ display: 'flex', gap: '16px', justifyContent: 'center' }}>
          <button 
            id="hero-cta-primary"
            data-ym-click-type="button"
            data-ym-name="Кнопка: Попробовать 14 дней бесплатно"
            data-ym-goal-id="start_free_hero"
            className="btn-primary" 
            style={{
              padding: '18px 40px',
              borderRadius: '50px',
              border: 'none',
              backgroundColor: '#7643d7',
              color: '#FFF',
              fontWeight: 600,
              fontSize: '17px',
              cursor: 'pointer',
              boxShadow: '0 8px 30px rgba(118,67,215,0.35)',
            }}>
            Попробовать 14 дней бесплатно
          </button>
          <button 
            id="hero-cta-secondary"
            data-ym-click-type="button"
            data-ym-name="Кнопка: Смотреть демо"
            className="hover-lift" 
            style={{
              padding: '18px 40px',
              borderRadius: '50px',
              border: '2px solid #7643d7',
              backgroundColor: 'transparent',
              color: '#7643d7',
              fontWeight: 600,
              fontSize: '17px',
              cursor: 'pointer',
            }}>
            Смотреть демо
          </button>
        </div>

        {/* Социальное доказательство */}
        <div 
          id="social-proof"
          data-ym-area="social-proof"
          data-ym-name="Социальное доказательство"
          style={{ marginTop: '80px' }}>
          <p style={{ color: '#999', marginBottom: '24px', fontSize: '14px', fontWeight: 500 }}>Нам доверяют лидеры рынка</p>
          <div style={{ display: 'flex', gap: '48px', justifyContent: 'center', opacity: 0.6 }}>
            {['МОС-регистратор', 'АвтоСпецЦентр', 'Телеком Про', 'МедЦентр', 'FinTech'].map((name, i) => (
              <span 
                key={i}
                data-ym-name={`Клиент: ${name}`}
                style={{ fontSize: '16px', fontWeight: 600, color: '#190750' }}>{name}</span>
            ))}
          </div>
        </div>
      </section>

      {/* Stats - Статистика */}
      <section 
        id="stats-section"
        data-ym-area="stats"
        data-ym-name="Блок статистики"
        style={{ padding: '80px 20px', backgroundColor: '#7643d7' }}>
        <div style={{ maxWidth: '1000px', margin: '0 auto', display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: '40px', textAlign: 'center' }}>
          {[
            { value: '340%', label: 'Рост выручки за 3 месяца', id: 'stat-revenue' },
            { value: '+18%', label: 'Конверсия продаж', id: 'stat-conversion' },
            { value: '30 сек', label: 'До инсайта', id: 'stat-insight' },
            { value: '5 мин', label: 'На настройку', id: 'stat-setup' },
          ].map((stat, i) => (
            <div 
              key={i}
              id={stat.id}
              data-ym-name={`Метрика: ${stat.label}`}
              className="animate-float" 
              style={{ animationDelay: `${i * 0.1}s` }}>
              <div style={{ fontSize: '56px', fontWeight: 800, color: '#FFF' }}>{stat.value}</div>
              <div style={{ fontSize: '16px', color: 'rgba(255,255,255,0.8)', marginTop: '8px', fontWeight: 500 }}>{stat.label}</div>
            </div>
          ))}
        </div>
      </section>

      {/* Features Grid */}
      <section 
        id="features"
        data-ym-area="features"
        data-ym-name="Блок возможностей"
        style={{ padding: '120px 20px', backgroundColor: '#FAF8FF' }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
          <h2 
            id="features-headline"
            data-ym-name="Заголовок: Диалоги, которые приносят деньги"
            style={{ fontSize: '52px', fontWeight: 800, textAlign: 'center', marginBottom: '20px', letterSpacing: '-1px' }}>
            Диалоги, которые <span className="gradient-text">приносят деньги</span>
          </h2>
          <p style={{ textAlign: 'center', color: '#666', marginBottom: '60px', fontSize: '18px' }}>
            Управляйте продажами через коммуникации
          </p>
          
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '24px' }}>
            {[
              { icon: '🚦', title: 'Светофор метрик', desc: 'Зелёный. Жёлтый. Красный. 3 секунды — и ты знаешь, где деньги.', id: 'feature-traffic-light' },
              { icon: '💰', title: 'Рост выручки', desc: 'Каждый контакт превращается в управляемый источник продаж.', id: 'feature-revenue' },
              { icon: '📱', title: 'Телеграм-бот', desc: 'Алерты о продажах и проблемах прямо в мессенджер.', id: 'feature-telegram' },
              { icon: '📞', title: 'Транскрибация', desc: 'Каждый звонок — текст. ИИ найдёт упущенные продажи.', id: 'feature-transcription' },
              { icon: '🎯', title: 'Сигналы намерений', desc: 'Кто готов купить. Кто думает уйти. Действуйте на опережение.', id: 'feature-intent' },
              { icon: '🛡️', title: 'Защита выручки', desc: 'ИИ обнаруживает попытки увода клиентов и денег.', id: 'feature-protection' },
            ].map((f, i) => (
              <div 
                key={i}
                id={f.id}
                data-ym-name={`Фича: ${f.title}`}
                className="card-shine hover-lift" 
                style={{
                  padding: '40px',
                  borderRadius: '24px',
                  backgroundColor: '#FFF',
                  border: '1px solid rgba(118,67,215,0.1)',
                }}>
                <div style={{ fontSize: '48px', marginBottom: '20px' }}>{f.icon}</div>
                <h3 style={{ fontSize: '22px', fontWeight: 700, marginBottom: '12px', color: '#190750' }}>{f.title}</h3>
                <p style={{ fontSize: '16px', color: '#666', lineHeight: 1.7 }}>{f.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Revenue Section */}
      <section 
        id="revenue"
        data-ym-area="revenue"
        data-ym-name="Блок омниканальности"
        style={{ padding: '120px 20px', background: 'linear-gradient(180deg, #FFFFFF 0%, #FAF8FF 100%)' }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto', textAlign: 'center' }}>
          <h2 
            id="revenue-headline"
            data-ym-name="Заголовок: Омниканальность — это продажи"
            style={{ fontSize: '52px', fontWeight: 800, marginBottom: '20px', letterSpacing: '-1px' }}>
            Омниканальность — <span className="gradient-text">это продажи</span>
          </h2>
          <p style={{ fontSize: '20px', color: '#666', marginBottom: '60px' }}>
            Все каналы в одной системе. Все контакты — в продажах.
          </p>
          
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(5, 1fr)', gap: '20px' }}>
            {[
              { icon: '📞', title: 'Телефон', desc: 'Звонки = продажи', id: 'channel-phone' },
              { icon: '💬', title: 'Чаты', desc: 'Ватсап, Телеграм', id: 'channel-chats' },
              { icon: '📧', title: 'Почта', desc: 'Коммерческие', id: 'channel-email' },
              { icon: '🌐', title: 'Сайт', desc: 'Лиды и боты', id: 'channel-web' },
              { icon: '📱', title: 'Соцсети', desc: 'Комментарии', id: 'channel-social' },
            ].map((ch, i) => (
              <div 
                key={i}
                id={ch.id}
                data-ym-name={`Канал: ${ch.title}`}
                className="hover-lift" 
                style={{
                  padding: '32px 24px',
                  borderRadius: '20px',
                  backgroundColor: '#FFF',
                  border: '2px solid rgba(118,67,215,0.15)',
                cursor: 'pointer',
              }}>
                <div style={{ fontSize: '40px', marginBottom: '16px' }}>{ch.icon}</div>
                <div style={{ fontWeight: 700, marginBottom: '8px', color: '#190750' }}>{ch.title}</div>
                <div style={{ fontSize: '13px', color: '#999' }}>{ch.desc}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section 
        id="cta-section"
        data-ym-area="cta"
        data-ym-name="Блок призыва к действию"
        style={{ padding: '120px 20px', textAlign: 'center', backgroundColor: '#190750' }}>
        <h2 
          id="cta-headline"
          data-ym-name="Заголовок: Готовы к росту выручки?"
          style={{ fontSize: '52px', fontWeight: 800, marginBottom: '24px', color: '#FFF' }}>
          Готовы к росту выручки?
        </h2>
        <p style={{ fontSize: '20px', color: 'rgba(255,255,255,0.7)', marginBottom: '48px' }}>
          14 дней бесплатно. Без карты. Без риска.
        </p>
        <button 
          id="cta-main-button"
          data-ym-click-type="button"
          data-ym-name="Кнопка: Начать сейчас (главный CTA)"
          data-ym-goal-id="start_now_cta"
          className="btn-primary animate-glow" 
          style={{
            padding: '20px 56px',
            borderRadius: '50px',
            border: 'none',
            backgroundColor: '#7643d7',
            color: '#FFF',
            fontWeight: 700,
            fontSize: '18px',
            cursor: 'pointer',
            boxShadow: '0 8px 40px rgba(118,67,215,0.5)',
          }}>
          Начать сейчас
        </button>
      </section>

      {/* Footer */}
      <footer 
        id="footer"
        data-ym-area="footer"
        data-ym-name="Подвал сайта"
        style={{ padding: '60px 20px', borderTop: '1px solid rgba(118,67,215,0.1)', backgroundColor: '#FFF' }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto', display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: '40px' }}>
          <div>
            <div 
              id="footer-logo"
              data-ym-name="Логотип (футер)"
              style={{ fontSize: '24px', fontWeight: 800, color: '#7643d7', marginBottom: '16px' }}>
              Контакт.ИИ
            </div>
            <div style={{ color: '#666', fontSize: '14px', lineHeight: 1.6 }}>
              Платформа роста выручки через коммуникации.
            </div>
          </div>
          <div>
            <div style={{ fontWeight: 700, marginBottom: '16px', color: '#190750' }}>Продукт</div>
            <div style={{ color: '#666', fontSize: '14px', lineHeight: 2 }}>
              <div data-ym-name="Ссылка: Витрина виджетов">Витрина виджетов</div>
              <div data-ym-name="Ссылка: ИИ-ассистент">ИИ-ассистент</div>
              <div data-ym-name="Ссылка: Транскрибация">Транскрибация</div>
            </div>
          </div>
          <div>
            <div style={{ fontWeight: 700, marginBottom: '16px', color: '#190750' }}>Компания</div>
            <div style={{ color: '#666', fontSize: '14px', lineHeight: 2 }}>
              <div data-ym-name="Ссылка: О нас">О нас</div>
              <div data-ym-name="Ссылка: Карьера">Карьера</div>
              <div data-ym-name="Ссылка: Блог">Блог</div>
            </div>
          </div>
          <div>
            <div style={{ fontWeight: 700, marginBottom: '16px', color: '#190750' }}>Контакты</div>
            <div style={{ color: '#666', fontSize: '14px', lineHeight: 2 }}>
              <div data-ym-name="Телефон">📞 8 800 123-45-67</div>
              <div data-ym-name="Email">📧 info@contact-ai.ru</div>
            </div>
          </div>
        </div>
        <div style={{ textAlign: 'center', color: '#999', fontSize: '12px', marginTop: '40px' }}>
          © 2026 Контакт.ИИ. Все права защищены.
        </div>
        
        {/* Яндекс.Метрика: noscript для сбора статистики при отключённом JS */}
        {/* Замените XXXXXXXX на номер вашего счётчика */}
        <noscript>
          <div>
            <img 
              src="https://mc.yandex.ru/watch/106950455" 
              style={{ position: 'absolute', left: '-9999px' }} 
              alt="" 
            />
          </div>
        </noscript>
      </footer>
    </div>
  )
}

// ============================================
// КОНЦЕПТ 2: Развёрнутые объяснения
// ============================================
function LandingConcept2() {
  return (
    <div style={{ minHeight: '100vh', backgroundColor: '#FFFFFF', color: '#190750' }}>
      <style>{styles}</style>
      
      {/* Header */}
      <header style={{
        position: 'fixed',
        top: 0,
        left: 0,
        right: 0,
        padding: '16px 40px',
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        backgroundColor: 'rgba(255,255,255,0.98)',
        backdropFilter: 'blur(10px)',
        zIndex: 100,
        borderBottom: '1px solid rgba(118,67,215,0.1)',
      }}>
        <div style={{ fontSize: '24px', fontWeight: 800, color: '#7643d7' }}>
          Контакт.ИИ
        </div>
        <nav style={{ display: 'flex', gap: '32px', alignItems: 'center' }}>
          <a href="#problems" className="hover-lift" style={{ color: '#190750', textDecoration: 'none', fontSize: '15px', fontWeight: 500 }}>Проблемы</a>
          <a href="#solution" className="hover-lift" style={{ color: '#190750', textDecoration: 'none', fontSize: '15px', fontWeight: 500 }}>Решение</a>
          <a href="#transparency" className="hover-lift" style={{ color: '#190750', textDecoration: 'none', fontSize: '15px', fontWeight: 500 }}>Прозрачность</a>
          <a href="#wins" className="hover-lift" style={{ color: '#190750', textDecoration: 'none', fontSize: '15px', fontWeight: 500 }}>Результаты</a>
          <button className="btn-primary" style={{
            padding: '12px 28px',
            borderRadius: '50px',
            border: 'none',
            backgroundColor: '#7643d7',
            color: '#FFF',
            fontWeight: 600,
            cursor: 'pointer',
            boxShadow: '0 4px 20px rgba(118,67,215,0.3)',
          }}>
            Начать бесплатно
          </button>
        </nav>
      </header>

      {/* Hero */}
      <section style={{
        paddingTop: '160px',
        paddingBottom: '100px',
        textAlign: 'center',
        background: 'linear-gradient(180deg, #FAF8FF 0%, #FFFFFF 100%)',
      }}>
        <div style={{
          display: 'inline-block',
          padding: '10px 24px',
          borderRadius: '50px',
          backgroundColor: 'rgba(118,67,215,0.1)',
          marginBottom: '32px',
          fontSize: '14px',
          color: '#7643d7',
          fontWeight: 600,
        }}>
          📈 Платформа роста выручки через коммуникации
        </div>
        
        <h1 style={{
          fontSize: '60px',
          fontWeight: 800,
          lineHeight: 1.1,
          marginBottom: '32px',
          maxWidth: '1000px',
          margin: '0 auto 32px',
          letterSpacing: '-2px',
        }}>
          Продажи начинаются <span className="gradient-text">в разговоре</span>
        </h1>
        
        <p style={{
          fontSize: '20px',
          color: '#666',
          maxWidth: '700px',
          margin: '0 auto 48px',
          lineHeight: 1.7,
        }}>
          Контакт.ИИ превращает каждый контакт с клиентом в управляемый источник продаж. 
          ИИ-платформа, которая увеличивает выручку, а не отчёты.
        </p>
        
        <div style={{ display: 'flex', gap: '16px', justifyContent: 'center', marginBottom: '60px' }}>
          <button className="btn-primary" style={{
            padding: '18px 40px',
            borderRadius: '50px',
            border: 'none',
            backgroundColor: '#7643d7',
            color: '#FFF',
            fontWeight: 600,
            fontSize: '17px',
            cursor: 'pointer',
            boxShadow: '0 8px 30px rgba(118,67,215,0.35)',
          }}>
            Попробовать 14 дней бесплатно
          </button>
          <button className="hover-lift" style={{
            padding: '18px 40px',
            borderRadius: '50px',
            border: '2px solid #7643d7',
            backgroundColor: 'transparent',
            color: '#7643d7',
            fontWeight: 600,
            fontSize: '17px',
            cursor: 'pointer',
          }}>
            Посмотреть демо
          </button>
        </div>

        {/* Preview Dashboard */}
        <div style={{
          maxWidth: '900px',
          margin: '0 auto',
          backgroundColor: '#FFF',
          borderRadius: '24px',
          padding: '40px',
          border: '1px solid rgba(118,67,215,0.15)',
          boxShadow: '0 20px 60px rgba(118,67,215,0.12)',
        }}>
          <div style={{ display: 'flex', justifyContent: 'center', gap: '16px', marginBottom: '24px' }}>
            <div style={{ width: '80px', height: '80px', borderRadius: '50%', backgroundColor: '#22C55E', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '32px', boxShadow: '0 0 30px rgba(34,197,94,0.3)' }}>✓</div>
            <div style={{ width: '80px', height: '80px', borderRadius: '50%', backgroundColor: '#FFD700', opacity: 0.3 }} />
            <div style={{ width: '80px', height: '80px', borderRadius: '50%', backgroundColor: '#EF4444', opacity: 0.3 }} />
          </div>
          <div style={{ textAlign: 'center', marginBottom: '32px' }}>
            <div style={{ fontSize: '28px', fontWeight: 800, color: '#22C55E' }}>Выручка растёт</div>
            <div style={{ color: '#666', marginTop: '8px' }}>1,247 контактов сегодня • 156 продаж • 2.3M ₽ выручка</div>
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: '16px' }}>
            {['Телефония', 'Чаты', 'Почта', 'Соцсети'].map((ch, i) => (
              <div key={i} style={{ textAlign: 'center', padding: '20px', backgroundColor: '#FAF8FF', borderRadius: '16px' }}>
                <div style={{ fontSize: '28px', marginBottom: '8px' }}>{['📞', '💬', '📧', '📱'][i]}</div>
                <div style={{ fontSize: '13px', color: '#190750', fontWeight: 600 }}>{ch}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Проблемы и решения */}
      <section id="problems" style={{ padding: '120px 20px', backgroundColor: '#FAF8FF' }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
          <h2 style={{ fontSize: '48px', fontWeight: 800, textAlign: 'center', marginBottom: '20px', letterSpacing: '-1px' }}>
            5 барьеров на пути к <span className="gradient-text">росту выручки</span>
          </h2>
          <p style={{ textAlign: 'center', color: '#666', marginBottom: '80px', fontSize: '18px', maxWidth: '600px', margin: '0 auto 80px' }}>
            Каждая из этих проблем стоит вам денег
          </p>
          
          {/* Проблема 1 */}
          <div style={{ marginBottom: '100px' }}>
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '60px', alignItems: 'center' }}>
              <div>
                <div style={{ fontSize: '56px', marginBottom: '20px' }}>💸</div>
                <h3 style={{ fontSize: '32px', fontWeight: 800, marginBottom: '20px', color: '#190750' }}>Упущенные продажи в разговорах</h3>
                <p style={{ fontSize: '17px', color: '#666', lineHeight: 1.8, marginBottom: '24px' }}>
                  Операторы не закрывают сделки, забывают предложить допродажи, упускают сигналы готовности к покупке. 
                  Каждый такой звонок — потерянные деньги. Но вы об этом не узнаёте.
                </p>
                <div style={{ padding: '24px', backgroundColor: '#7643d7', borderRadius: '16px' }}>
                  <div style={{ fontWeight: 700, marginBottom: '8px', color: '#FFF', fontSize: '14px' }}>Решение Контакт.ИИ</div>
                  <p style={{ color: 'rgba(255,255,255,0.9)', lineHeight: 1.7 }}>
                    ИИ анализирует каждый разговор и находит упущенные возможности. Показывает, где клиент был готов купить, 
                    но оператор не предложил. Рост конверсии на 18% за первый месяц.
                  </p>
                </div>
              </div>
              <div style={{ backgroundColor: '#FFF', borderRadius: '24px', padding: '40px', border: '1px solid rgba(118,67,215,0.1)', boxShadow: '0 10px 40px rgba(118,67,215,0.08)' }}>
                <div style={{ fontSize: '13px', color: '#999', marginBottom: '12px', fontWeight: 600 }}>Упущенные возможности за неделю</div>
                <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
                  {[
                    { count: '12', text: 'Не предложили допродажу', sum: '340,000 ₽' },
                    { count: '8', text: 'Не закрыли готового клиента', sum: '520,000 ₽' },
                    { count: '5', text: 'Не перезвонили по обещанию', sum: '180,000 ₽' },
                  ].map((item, i) => (
                    <div key={i} style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '16px', backgroundColor: 'rgba(239,68,68,0.05)', borderRadius: '12px', border: '1px solid rgba(239,68,68,0.1)' }}>
                      <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
                        <div style={{ width: '32px', height: '32px', borderRadius: '50%', backgroundColor: 'rgba(239,68,68,0.1)', display: 'flex', alignItems: 'center', justifyContent: 'center', fontWeight: 700, color: '#EF4444' }}>{item.count}</div>
                        <span style={{ color: '#190750', fontSize: '14px' }}>{item.text}</span>
                      </div>
                      <span style={{ fontWeight: 700, color: '#EF4444' }}>{item.sum}</span>
                    </div>
                  ))}
                </div>
                <div style={{ marginTop: '16px', padding: '16px', backgroundColor: 'rgba(239,68,68,0.1)', borderRadius: '12px', textAlign: 'center' }}>
                  <div style={{ fontSize: '13px', color: '#999', marginBottom: '4px' }}>Потеряно за неделю</div>
                  <div style={{ fontSize: '28px', fontWeight: 800, color: '#EF4444' }}>1,040,000 ₽</div>
                </div>
              </div>
            </div>
          </div>

          {/* Проблема 2 */}
          <div style={{ marginBottom: '100px' }}>
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '60px', alignItems: 'center' }}>
              <div style={{ order: 2 }}>
                <div style={{ fontSize: '56px', marginBottom: '20px' }}>📊</div>
                <h3 style={{ fontSize: '32px', fontWeight: 800, marginBottom: '20px', color: '#190750' }}>Отчёты есть, а роста нет</h3>
                <p style={{ fontSize: '17px', color: '#666', lineHeight: 1.8, marginBottom: '24px' }}>
                  Горы отчётов, но непонятно, что делать. Конверсия упала — почему? Кто виноват? Как исправить? 
                  Вы тонете в данных, но не получаете ответов.
                </p>
                <div style={{ padding: '24px', backgroundColor: '#7643d7', borderRadius: '16px' }}>
                  <div style={{ fontWeight: 700, marginBottom: '8px', color: '#FFF', fontSize: '14px' }}>Решение Контакт.ИИ</div>
                  <p style={{ color: 'rgba(255,255,255,0.9)', lineHeight: 1.7 }}>
                    «Светофор метрик» — одна картинка, которая показывает, где проблемы и что делать. 
                    Не отчёты — а конкретные действия для роста выручки.
                  </p>
                </div>
              </div>
              <div style={{ order: 1, backgroundColor: '#FFF', borderRadius: '24px', padding: '40px', border: '1px solid rgba(118,67,215,0.1)', boxShadow: '0 10px 40px rgba(118,67,215,0.08)' }}>
                <div style={{ fontSize: '13px', color: '#999', marginBottom: '20px', fontWeight: 600 }}>Светофор выручки</div>
                <div style={{ display: 'flex', justifyContent: 'center', gap: '20px', marginBottom: '24px' }}>
                  <div className="animate-pulse-slow" style={{ width: '60px', height: '60px', borderRadius: '50%', backgroundColor: '#22C55E', boxShadow: '0 0 20px rgba(34,197,94,0.4)' }} />
                  <div style={{ width: '60px', height: '60px', borderRadius: '50%', backgroundColor: '#FFD700', opacity: 0.3 }} />
                  <div style={{ width: '60px', height: '60px', borderRadius: '50%', backgroundColor: '#EF4444', opacity: 0.3 }} />
                </div>
                <div style={{ textAlign: 'center' }}>
                  <div style={{ fontSize: '22px', fontWeight: 800, color: '#22C55E' }}>✓ Выручка растёт</div>
                  <div style={{ color: '#666', marginTop: '8px' }}>+18% к плану за неделю</div>
                </div>
              </div>
            </div>
          </div>

          {/* Проблема 3 */}
          <div style={{ marginBottom: '100px' }}>
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '60px', alignItems: 'center' }}>
              <div>
                <div style={{ fontSize: '56px', marginBottom: '20px' }}>🛡️</div>
                <h3 style={{ fontSize: '32px', fontWeight: 800, marginBottom: '20px', color: '#190750' }}>Увод клиентов и выручки</h3>
                <p style={{ fontSize: '17px', color: '#666', lineHeight: 1.8, marginBottom: '24px' }}>
                  Операторы переводят клиентов на личное обслуживание, предлагают услуги «мимо кассы». 
                  До 15% выручки утекает, и вы об этом не знаете.
                </p>
                <div style={{ padding: '24px', backgroundColor: '#7643d7', borderRadius: '16px' }}>
                  <div style={{ fontWeight: 700, marginBottom: '8px', color: '#FFF', fontSize: '14px' }}>Решение Контакт.ИИ</div>
                  <p style={{ color: 'rgba(255,255,255,0.9)', lineHeight: 1.7 }}>
                    Автоматическая транскрибация + ИИ-анализ. Система находит подозрительные фразы 
                    и отправляет алерт с доказательствами. Защита выручки на автомате.
                  </p>
                </div>
              </div>
              <div style={{ backgroundColor: '#FFF', borderRadius: '24px', padding: '40px', border: '1px solid rgba(239,68,68,0.2)', boxShadow: '0 10px 40px rgba(239,68,68,0.08)' }}>
                <div style={{ fontSize: '13px', color: '#EF4444', marginBottom: '12px', fontWeight: 600 }}>⚠️ Обнаружен риск утечки выручки</div>
                <div style={{ padding: '16px', backgroundColor: 'rgba(239,68,68,0.05)', borderRadius: '12px', marginBottom: '16px', border: '1px solid rgba(239,68,68,0.15)' }}>
                  <div style={{ fontSize: '12px', color: '#999', marginBottom: '4px' }}>Оператор: Иванов И.</div>
                  <div style={{ fontSize: '14px', color: '#190750' }}>"...можете позвонить мне на личный номер, договоримся без оформления..."</div>
                </div>
                <div style={{ display: 'flex', gap: '12px' }}>
                  <button style={{ flex: 1, padding: '12px', backgroundColor: '#EF4444', border: 'none', borderRadius: '50px', color: '#FFF', fontWeight: 600, cursor: 'pointer' }}>Прослушать</button>
                  <button style={{ flex: 1, padding: '12px', backgroundColor: 'rgba(239,68,68,0.1)', border: 'none', borderRadius: '50px', color: '#EF4444', fontWeight: 600, cursor: 'pointer' }}>Действия</button>
                </div>
              </div>
            </div>
          </div>

          {/* Проблема 4 */}
          <div style={{ marginBottom: '100px' }}>
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '60px', alignItems: 'center' }}>
              <div style={{ order: 2 }}>
                <div style={{ fontSize: '56px', marginBottom: '20px' }}>📈</div>
                <h3 style={{ fontSize: '32px', fontWeight: 800, marginBottom: '20px', color: '#190750' }}>Нет прозрачности эффективности команды</h3>
                <p style={{ fontSize: '17px', color: '#666', lineHeight: 1.8, marginBottom: '24px' }}>
                  Кто продаёт лучше? Кто тянет команду вниз? Кто близок к выгоранию? 
                  Сотрудники не видят свой вклад в выручку и теряют мотивацию.
                </p>
                <div style={{ padding: '24px', backgroundColor: '#7643d7', borderRadius: '16px' }}>
                  <div style={{ fontWeight: 700, marginBottom: '8px', color: '#FFF', fontSize: '14px' }}>Решение Контакт.ИИ</div>
                  <p style={{ color: 'rgba(255,255,255,0.9)', lineHeight: 1.7 }}>
                    Персональные дашборды: вклад в выручку, сравнение с командой, рекомендации. 
                    Геймификация через рейтинги продаж. Рост производительности на 18%.
                  </p>
                </div>
              </div>
              <div style={{ order: 1, backgroundColor: '#FFF', borderRadius: '24px', padding: '40px', border: '1px solid rgba(118,67,215,0.1)', boxShadow: '0 10px 40px rgba(118,67,215,0.08)' }}>
                <div style={{ fontSize: '13px', color: '#999', marginBottom: '20px', fontWeight: 600 }}>Ваш вклад в выручку</div>
                <div style={{ marginBottom: '20px' }}>
                  <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '10px' }}>
                    <span style={{ fontWeight: 600 }}>План продаж</span>
                    <span style={{ color: '#22C55E', fontWeight: 800 }}>78%</span>
                  </div>
                  <div style={{ height: '12px', backgroundColor: '#FAF8FF', borderRadius: '6px', overflow: 'hidden' }}>
                    <div style={{ height: '100%', width: '78%', backgroundColor: '#22C55E', borderRadius: '6px' }} />
                  </div>
                </div>
                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '12px', textAlign: 'center' }}>
                  <div><div style={{ fontSize: '24px', fontWeight: 800, color: '#190750' }}>156</div><div style={{ fontSize: '11px', color: '#999' }}>продаж</div></div>
                  <div><div style={{ fontSize: '24px', fontWeight: 800, color: '#7643d7' }}>2.3M₽</div><div style={{ fontSize: '11px', color: '#999' }}>выручка</div></div>
                  <div><div style={{ fontSize: '24px', fontWeight: 800, color: '#22C55E' }}>#3</div><div style={{ fontSize: '11px', color: '#999' }}>рейтинг</div></div>
                </div>
              </div>
            </div>
          </div>

          {/* Проблема 5 */}
          <div>
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '60px', alignItems: 'center' }}>
              <div>
                <div style={{ fontSize: '56px', marginBottom: '20px' }}>🌐</div>
                <h3 style={{ fontSize: '32px', fontWeight: 800, marginBottom: '20px', color: '#190750' }}>Каналы работают раздельно, а не на выручку</h3>
                <p style={{ fontSize: '17px', color: '#666', lineHeight: 1.8, marginBottom: '24px' }}>
                  Клиент написал в чат, потом позвонил — и каждый раз начинает сначала. 
                  История разбросана. Контекст потерян. Продажа упущена.
                </p>
                <div style={{ padding: '24px', backgroundColor: '#7643d7', borderRadius: '16px' }}>
                  <div style={{ fontWeight: 700, marginBottom: '8px', color: '#FFF', fontSize: '14px' }}>Решение Контакт.ИИ</div>
                  <p style={{ color: 'rgba(255,255,255,0.9)', lineHeight: 1.7 }}>
                    Омниканальность из коробки: все каналы — единая история клиента. 
                    Оператор видит весь контекст и закрывает продажу.
                  </p>
                </div>
              </div>
              <div style={{ backgroundColor: '#FFF', borderRadius: '24px', padding: '40px', border: '1px solid rgba(118,67,215,0.1)', boxShadow: '0 10px 40px rgba(118,67,215,0.08)' }}>
                <div style={{ fontSize: '13px', color: '#999', marginBottom: '16px', fontWeight: 600 }}>История контактов = История продаж</div>
                <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
                  {[
                    { icon: '💬', channel: 'Ватсап', time: '10:23', text: 'Интересует оптовая цена...', tag: 'Интерес', tagColor: '#22C55E' },
                    { icon: '📞', channel: 'Звонок', time: '11:45', text: '5 мин • Обсуждали объёмы', tag: 'Переговоры', tagColor: '#7643d7' },
                    { icon: '📧', channel: 'Почта', time: '14:02', text: 'Отправил КП на 500K', tag: 'КП', tagColor: '#3B82F6' },
                  ].map((h, i) => (
                    <div key={i} style={{ display: 'flex', gap: '16px', padding: '16px', backgroundColor: '#FAF8FF', borderRadius: '12px' }}>
                      <div style={{ fontSize: '24px' }}>{h.icon}</div>
                      <div style={{ flex: 1 }}>
                        <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '4px' }}>
                          <span style={{ fontWeight: 700, fontSize: '13px', color: '#190750' }}>{h.channel}</span>
                          <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                            <span style={{ padding: '2px 8px', borderRadius: '4px', backgroundColor: `${h.tagColor}20`, color: h.tagColor, fontSize: '10px', fontWeight: 600 }}>{h.tag}</span>
                            <span style={{ color: '#999', fontSize: '11px' }}>{h.time}</span>
                          </div>
                        </div>
                        <div style={{ fontSize: '13px', color: '#666' }}>{h.text}</div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Блок: Прозрачность расчётов */}
      <section id="transparency" style={{ padding: '120px 20px', backgroundColor: '#FFF' }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '80px', alignItems: 'center' }}>
            <div>
              <div style={{
                display: 'inline-block',
                padding: '10px 24px',
                borderRadius: '50px',
                backgroundColor: 'rgba(118,67,215,0.1)',
                marginBottom: '24px',
                fontSize: '14px',
                color: '#7643d7',
                fontWeight: 600,
              }}>
                🔍 Полная прозрачность
              </div>
              <h2 style={{ fontSize: '44px', fontWeight: 800, marginBottom: '24px', lineHeight: 1.2, letterSpacing: '-1px', color: '#190750' }}>
                Как получились эти <span className="gradient-text">цифры?</span>
              </h2>
              <p style={{ fontSize: '18px', color: '#666', marginBottom: '32px', lineHeight: 1.7 }}>
                Кликните на любую метрику в виджете — и увидите полную детализацию: какие данные использовались, 
                по какой формуле считались, какие звонки вошли в расчёт. Никаких «чёрных ящиков».
              </p>
              
              <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
                <div style={{ display: 'flex', gap: '16px', alignItems: 'flex-start' }}>
                  <div style={{ width: '48px', height: '48px', borderRadius: '12px', backgroundColor: 'rgba(118,67,215,0.1)', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '24px', flexShrink: 0 }}>📊</div>
                  <div>
                    <div style={{ fontWeight: 700, marginBottom: '4px', color: '#190750' }}>Источники данных</div>
                    <div style={{ fontSize: '14px', color: '#666', lineHeight: 1.5 }}>Какие системы и API предоставили данные для расчёта</div>
                  </div>
                </div>
                <div style={{ display: 'flex', gap: '16px', alignItems: 'flex-start' }}>
                  <div style={{ width: '48px', height: '48px', borderRadius: '12px', backgroundColor: 'rgba(118,67,215,0.1)', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '24px', flexShrink: 0 }}>🧮</div>
                  <div>
                    <div style={{ fontWeight: 700, marginBottom: '4px', color: '#190750' }}>Формулы и методика</div>
                    <div style={{ fontSize: '14px', color: '#666', lineHeight: 1.5 }}>Понятное описание, как именно считается каждая метрика</div>
                  </div>
                </div>
                <div style={{ display: 'flex', gap: '16px', alignItems: 'flex-start' }}>
                  <div style={{ width: '48px', height: '48px', borderRadius: '12px', backgroundColor: 'rgba(118,67,215,0.1)', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '24px', flexShrink: 0 }}>📋</div>
                  <div>
                    <div style={{ fontWeight: 700, marginBottom: '4px', color: '#190750' }}>Список событий</div>
                    <div style={{ fontSize: '14px', color: '#666', lineHeight: 1.5 }}>Конкретные звонки и контакты, вошедшие в расчёт</div>
                  </div>
                </div>
              </div>
            </div>

            <div style={{ backgroundColor: '#FFF', borderRadius: '24px', padding: '32px', border: '1px solid rgba(118,67,215,0.15)', boxShadow: '0 20px 60px rgba(118,67,215,0.1)' }}>
              <div style={{ padding: '20px', backgroundColor: '#FAF8FF', borderRadius: '16px', marginBottom: '24px', border: '1px dashed rgba(118,67,215,0.3)' }}>
                <div style={{ fontSize: '13px', color: '#999', marginBottom: '8px' }}>Метрика: Конверсия продаж</div>
                <div style={{ display: 'flex', alignItems: 'baseline', gap: '12px' }}>
                  <span style={{ fontSize: '48px', fontWeight: 800, color: '#22C55E' }}>18.4%</span>
                  <span style={{ color: '#22C55E', fontWeight: 600 }}>+3.2% к прошлому периоду</span>
                </div>
              </div>

              <div style={{ marginBottom: '20px' }}>
                <div style={{ fontWeight: 700, marginBottom: '12px', color: '#190750', fontSize: '14px' }}>Формула расчёта:</div>
                <div style={{ padding: '16px', backgroundColor: '#190750', borderRadius: '12px', fontFamily: 'monospace', fontSize: '14px', color: '#FFF' }}>
                  Конверсия = (Продажи / Контакты) × 100%
                </div>
              </div>

              <div style={{ marginBottom: '20px' }}>
                <div style={{ fontWeight: 700, marginBottom: '12px', color: '#190750', fontSize: '14px' }}>Исходные данные:</div>
                <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
                  <div style={{ display: 'flex', justifyContent: 'space-between', padding: '12px', backgroundColor: '#FAF8FF', borderRadius: '8px' }}>
                    <span style={{ color: '#666' }}>Всего контактов</span>
                    <span style={{ fontWeight: 700, color: '#190750' }}>1,247</span>
                  </div>
                  <div style={{ display: 'flex', justifyContent: 'space-between', padding: '12px', backgroundColor: '#FAF8FF', borderRadius: '8px' }}>
                    <span style={{ color: '#666' }}>Успешных продаж</span>
                    <span style={{ fontWeight: 700, color: '#22C55E' }}>229</span>
                  </div>
                </div>
              </div>

              <div style={{ fontSize: '12px', color: '#999', textAlign: 'center' }}>
                Источники: AmoCRM API, Телефония Asterisk, Email SMTP
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Блок: Все выигрывают */}
      <section id="wins" style={{ padding: '120px 20px', backgroundColor: '#FAF8FF' }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto', textAlign: 'center' }}>
          <h2 style={{ fontSize: '48px', fontWeight: 800, marginBottom: '20px', letterSpacing: '-1px' }}>
            От роста выручки <span className="gradient-text">выигрывают все</span>
          </h2>
          <p style={{ fontSize: '18px', color: '#666', marginBottom: '80px', maxWidth: '600px', margin: '0 auto 80px' }}>
            Контакт.ИИ создаёт ценность для каждого участника процесса
          </p>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '40px' }}>
            {/* Руководитель */}
            <div className="hover-lift" style={{ backgroundColor: '#FFF', borderRadius: '24px', padding: '48px 32px', border: '1px solid rgba(118,67,215,0.1)' }}>
              <div style={{ width: '80px', height: '80px', borderRadius: '50%', backgroundColor: 'rgba(118,67,215,0.1)', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '40px', margin: '0 auto 24px' }}>
                👔
              </div>
              <h3 style={{ fontSize: '24px', fontWeight: 800, marginBottom: '16px', color: '#190750' }}>Руководитель</h3>
              <p style={{ color: '#666', marginBottom: '24px', lineHeight: 1.7 }}>
                Видит рост выручки в реальном времени. Экономит 40 минут каждое утро на сборе отчётов. 
                Получает ясную картину бизнеса за 30 секунд.
              </p>
              <div style={{ padding: '16px', backgroundColor: '#22C55E', borderRadius: '12px', color: '#FFF', fontWeight: 700 }}>
                +340% выручки за 3 месяца
              </div>
            </div>

            {/* Администратор */}
            <div className="hover-lift" style={{ backgroundColor: '#FFF', borderRadius: '24px', padding: '48px 32px', border: '1px solid rgba(118,67,215,0.1)' }}>
              <div style={{ width: '80px', height: '80px', borderRadius: '50%', backgroundColor: 'rgba(118,67,215,0.1)', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '40px', margin: '0 auto 24px' }}>
                🛠️
              </div>
              <h3 style={{ fontSize: '24px', fontWeight: 800, marginBottom: '16px', color: '#190750' }}>Администратор</h3>
              <p style={{ color: '#666', marginBottom: '24px', lineHeight: 1.7 }}>
                Настраивает за 5 минут без программистов. Меньше аварийных ситуаций. 
                Становится экспертом по аналитике коммуникаций.
              </p>
              <div style={{ padding: '16px', backgroundColor: '#7643d7', borderRadius: '12px', color: '#FFF', fontWeight: 700 }}>
                Настройка за 5 минут
              </div>
            </div>

            {/* Оператор */}
            <div className="hover-lift" style={{ backgroundColor: '#FFF', borderRadius: '24px', padding: '48px 32px', border: '1px solid rgba(118,67,215,0.1)' }}>
              <div style={{ width: '80px', height: '80px', borderRadius: '50%', backgroundColor: 'rgba(118,67,215,0.1)', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '40px', margin: '0 auto 24px' }}>
                🎧
              </div>
              <h3 style={{ fontSize: '24px', fontWeight: 800, marginBottom: '16px', color: '#190750' }}>Оператор</h3>
              <p style={{ color: '#666', marginBottom: '24px', lineHeight: 1.7 }}>
                Видит свой вклад в выручку. Получает рекомендации по улучшению. 
                Участвует в рейтингах и получает признание.
              </p>
              <div style={{ padding: '16px', backgroundColor: '#3B82F6', borderRadius: '12px', color: '#FFF', fontWeight: 700 }}>
                +18% производительность
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Блок: Отрасли */}
      <section style={{ padding: '120px 20px', backgroundColor: '#FFF' }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto', textAlign: 'center' }}>
          <h2 style={{ fontSize: '48px', fontWeight: 800, marginBottom: '20px', letterSpacing: '-1px' }}>
            Польза для <span className="gradient-text">вашей отрасли</span>
          </h2>
          <p style={{ fontSize: '18px', color: '#666', marginBottom: '60px', maxWidth: '600px', margin: '0 auto 60px' }}>
            Адаптированные решения для роста выручки в разных секторах
          </p>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: '24px' }}>
            {[
              { icon: '🛒', title: 'E-commerce', desc: 'Снижение брошенных корзин на 23%', color: '#FF6B35' },
              { icon: '🏦', title: 'Финансы', desc: 'Рост кросс-продаж на 34%', color: '#22C55E' },
              { icon: '📞', title: 'Телеком', desc: 'Снижение оттока на 18%', color: '#7643d7' },
              { icon: '🏥', title: 'Здравоохранение', desc: 'Рост повторных записей на 41%', color: '#3B82F6' },
            ].map((industry, i) => (
              <div key={i} className="hover-lift" style={{ backgroundColor: '#FAF8FF', borderRadius: '20px', padding: '32px', border: '1px solid rgba(118,67,215,0.1)' }}>
                <div style={{ fontSize: '48px', marginBottom: '16px' }}>{industry.icon}</div>
                <h3 style={{ fontSize: '18px', fontWeight: 700, marginBottom: '8px', color: '#190750' }}>{industry.title}</h3>
                <p style={{ fontSize: '14px', color: '#666', marginBottom: '16px' }}>{industry.desc}</p>
                <div style={{ height: '4px', backgroundColor: industry.color, borderRadius: '2px' }} />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Promo Game Block */}
      <section style={{ padding: '120px 20px', background: 'linear-gradient(180deg, #FFF8E7 0%, #FFF 100%)' }}>
        <div style={{ maxWidth: '1000px', margin: '0 auto' }}>
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '60px', alignItems: 'center' }}>
            <div>
              <div style={{
                display: 'inline-block',
                padding: '10px 24px',
                borderRadius: '50px',
                backgroundColor: 'rgba(255,165,0,0.15)',
                marginBottom: '24px',
                fontSize: '14px',
                color: '#FF8C00',
                fontWeight: 600,
              }}>
                🎮 Виральный элемент
              </div>
              <h2 style={{ fontSize: '44px', fontWeight: 800, marginBottom: '24px', lineHeight: 1.2, letterSpacing: '-1px', color: '#190750' }}>
                Игра <span style={{ color: '#FF8C00' }}>«Мёдом намазано»</span>
              </h2>
              <p style={{ fontSize: '18px', color: '#666', marginBottom: '32px', lineHeight: 1.7 }}>
                Играйте в нашу игру <strong style={{ color: '#FF8C00' }}>«Мёдом намазано»</strong> и выиграйте месяц бесплатного 
                использования Контакт.ИИ для роста выручки вашего бизнеса!
              </p>
              <button style={{
                padding: '18px 40px',
                borderRadius: '50px',
                border: 'none',
                background: 'linear-gradient(90deg, #FFD700, #FFA500)',
                color: '#190750',
                fontWeight: 700,
                fontSize: '17px',
                cursor: 'pointer',
                boxShadow: '0 8px 32px rgba(255,165,0,0.3)',
              }}>
                Играть в «Мёдом намазано» 🍯
              </button>
            </div>

            <div style={{ position: 'relative' }}>
              <div style={{
                padding: '48px',
                borderRadius: '32px',
                background: 'linear-gradient(180deg, rgba(255,165,0,0.08) 0%, #FFF 100%)',
                border: '2px solid rgba(255,165,0,0.2)',
                textAlign: 'center',
              }}>
                <div className="animate-float" style={{
                  width: '120px',
                  height: '120px',
                  borderRadius: '50%',
                  background: 'linear-gradient(135deg, #FFD700 0%, #FFA500 50%, #FF8C00 100%)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  fontSize: '60px',
                  margin: '0 auto 32px',
                  boxShadow: '0 12px 40px rgba(255,165,0,0.3)',
                }}>
                  🍯
                </div>
                <h3 style={{ fontSize: '32px', fontWeight: 800, marginBottom: '16px', color: '#190750' }}>
                  Мёдом намазано
                </h3>
                <p style={{ color: '#666', marginBottom: '32px', lineHeight: 1.6 }}>
                  Увлекательная игра для роста выручки. Главный приз — месяц Контакт.ИИ!
                </p>

                <div style={{ padding: '24px', backgroundColor: '#190750', borderRadius: '20px', marginBottom: '24px' }}>
                  <div style={{ fontSize: '14px', color: 'rgba(255,255,255,0.7)', marginBottom: '8px' }}>Главный приз</div>
                  <div style={{ fontSize: '40px', fontWeight: 800, color: '#FFD700' }}>30 дней</div>
                  <div style={{ fontSize: '16px', color: '#FFF' }}>Контакт.ИИ бесплатно</div>
                </div>

                <div style={{ display: 'flex', justifyContent: 'center', gap: '12px', flexWrap: 'wrap' }}>
                  <div style={{ padding: '8px 18px', borderRadius: '50px', backgroundColor: 'rgba(34,197,94,0.1)', border: '1px solid rgba(34,197,94,0.2)', fontSize: '13px', color: '#22C55E', fontWeight: 600 }}>✓ Бесплатно</div>
                  <div style={{ padding: '8px 18px', borderRadius: '50px', backgroundColor: 'rgba(59,130,246,0.1)', border: '1px solid rgba(59,130,246,0.2)', fontSize: '13px', color: '#3B82F6', fontWeight: 600 }}>🎮 Увлекательно</div>
                  <div style={{ padding: '8px 18px', borderRadius: '50px', backgroundColor: 'rgba(255,165,0,0.1)', border: '1px solid rgba(255,165,0,0.2)', fontSize: '13px', color: '#FF8C00', fontWeight: 600 }}>🏆 Реальные призы</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section style={{ padding: '120px 20px', textAlign: 'center', backgroundColor: '#190750' }}>
        <h2 style={{ fontSize: '48px', fontWeight: 800, marginBottom: '24px', color: '#FFF' }}>
          Готовы к росту выручки?
        </h2>
        <p style={{ fontSize: '20px', color: 'rgba(255,255,255,0.7)', marginBottom: '48px', maxWidth: '500px', margin: '0 auto 48px' }}>
          14 дней бесплатно. Без привязки карты. Настройка за 5 минут.
        </p>
        <button className="btn-primary animate-glow" style={{
          padding: '20px 56px',
          borderRadius: '50px',
          border: 'none',
          backgroundColor: '#7643d7',
          color: '#FFF',
          fontWeight: 700,
          fontSize: '18px',
          cursor: 'pointer',
          boxShadow: '0 8px 40px rgba(118,67,215,0.5)',
        }}>
          Начать бесплатно
        </button>
        <div style={{ marginTop: '24px', display: 'flex', justifyContent: 'center', gap: '32px', color: 'rgba(255,255,255,0.5)', fontSize: '14px' }}>
          <span>✓ Поддержка на русском 24/7</span>
          <span>✓ Интеграция с AmoCRM</span>
          <span>✓ Обучение команды</span>
        </div>
      </section>

      {/* Footer */}
      <footer style={{ padding: '60px 20px', borderTop: '1px solid rgba(118,67,215,0.1)', backgroundColor: '#FFF' }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto', display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: '40px' }}>
          <div>
            <div style={{ fontSize: '24px', fontWeight: 800, color: '#7643d7', marginBottom: '16px' }}>
              Контакт.ИИ
            </div>
            <div style={{ color: '#666', fontSize: '14px', lineHeight: 1.6 }}>
              Платформа роста выручки через коммуникации.
            </div>
          </div>
          <div>
            <div style={{ fontWeight: 700, marginBottom: '16px', color: '#190750' }}>Продукт</div>
            <div style={{ color: '#666', fontSize: '14px', lineHeight: 2 }}>
              <div>Витрина виджетов</div>
              <div>ИИ-ассистент</div>
              <div>Транскрибация</div>
              <div>Омниканальность</div>
            </div>
          </div>
          <div>
            <div style={{ fontWeight: 700, marginBottom: '16px', color: '#190750' }}>Компания</div>
            <div style={{ color: '#666', fontSize: '14px', lineHeight: 2 }}>
              <div>О нас</div>
              <div>Карьера</div>
              <div>Блог</div>
              <div>Партнёрам</div>
            </div>
          </div>
          <div>
            <div style={{ fontWeight: 700, marginBottom: '16px', color: '#190750' }}>Контакты</div>
            <div style={{ color: '#666', fontSize: '14px', lineHeight: 2 }}>
              <div>📞 8 800 123-45-67</div>
              <div>📧 info@contact-ai.ru</div>
              <div>📱 Телеграм-бот</div>
            </div>
          </div>
        </div>
        <div style={{ textAlign: 'center', color: '#999', fontSize: '12px', marginTop: '40px' }}>
          © 2026 Контакт.ИИ. Все права защищены.
        </div>
      </footer>
    </div>
  )
}

// ============================================
// КОНЦЕПТ 3: Для рекомендации РУКОВОДИТЕЛЮ
// ============================================
function LandingConcept3() {
  return (
    <div style={{ minHeight: '100vh', backgroundColor: '#FFFFFF', color: '#190750' }}>
      <style>{styles}</style>
      
      {/* Header */}
      <header style={{
        position: 'fixed',
        top: 0,
        left: 0,
        right: 0,
        padding: '16px 40px',
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        backgroundColor: 'rgba(255,255,255,0.98)',
        backdropFilter: 'blur(10px)',
        zIndex: 100,
        borderBottom: '1px solid rgba(118,67,215,0.1)',
      }}>
        <div style={{ fontSize: '24px', fontWeight: 800, color: '#7643d7' }}>
          Контакт.ИИ
        </div>
        <nav style={{ display: 'flex', gap: '32px', alignItems: 'center' }}>
          <a href="#roi" className="hover-lift" style={{ color: '#190750', textDecoration: 'none', fontSize: '15px', fontWeight: 500 }}>ROI</a>
          <a href="#metrics" className="hover-lift" style={{ color: '#190750', textDecoration: 'none', fontSize: '15px', fontWeight: 500 }}>Метрики</a>
          <a href="#industries" className="hover-lift" style={{ color: '#190750', textDecoration: 'none', fontSize: '15px', fontWeight: 500 }}>Отрасли</a>
          <a href="#demo" className="hover-lift" style={{ color: '#190750', textDecoration: 'none', fontSize: '15px', fontWeight: 500 }}>Демо</a>
          <button className="btn-primary" style={{
            padding: '12px 28px',
            borderRadius: '50px',
            border: 'none',
            backgroundColor: '#7643d7',
            color: '#FFF',
            fontWeight: 600,
            cursor: 'pointer',
            boxShadow: '0 4px 20px rgba(118,67,215,0.3)',
          }}>
            Запросить КП
          </button>
        </nav>
      </header>

      {/* Hero - Акцент на рост выручки */}
      <section style={{
        paddingTop: '160px',
        paddingBottom: '100px',
        textAlign: 'center',
        background: 'linear-gradient(180deg, #FAF8FF 0%, #FFFFFF 100%)',
      }}>
        <div style={{
          display: 'inline-block',
          padding: '10px 24px',
          borderRadius: '50px',
          backgroundColor: 'rgba(34,197,94,0.1)',
          marginBottom: '32px',
          fontSize: '14px',
          color: '#22C55E',
          fontWeight: 600,
        }}>
          💰 Платформа роста выручки через коммуникации
        </div>
        
        <h1 style={{
          fontSize: '56px',
          fontWeight: 800,
          lineHeight: 1.1,
          marginBottom: '32px',
          maxWidth: '1000px',
          margin: '0 auto 32px',
          letterSpacing: '-2px',
        }}>
          Каждый контакт — <span className="gradient-text">управляемый источник продаж</span>
        </h1>
        
        <p style={{
          fontSize: '20px',
          color: '#666',
          maxWidth: '700px',
          margin: '0 auto 24px',
          lineHeight: 1.7,
        }}>
          Контакт.ИИ — это не отчёты. Это инструмент, который превращает коммуникации в измеримый рост выручки компании.
        </p>

        {/* Ключевые цифры для руководителя */}
        <div style={{ display: 'flex', justifyContent: 'center', gap: '60px', marginBottom: '48px' }}>
          {[
            { value: '+340%', label: 'Рост выручки', sublabel: 'за 3 месяца' },
            { value: '+18%', label: 'Конверсия', sublabel: 'продаж' },
            { value: '30 сек', label: 'До инсайта', sublabel: 'вместо 40 минут' },
          ].map((stat, i) => (
            <div key={i} style={{ textAlign: 'center' }}>
              <div style={{ fontSize: '48px', fontWeight: 800, color: '#22C55E' }}>{stat.value}</div>
              <div style={{ fontSize: '16px', color: '#190750', fontWeight: 600 }}>{stat.label}</div>
              <div style={{ fontSize: '13px', color: '#999' }}>{stat.sublabel}</div>
            </div>
          ))}
        </div>
        
        <div style={{ display: 'flex', gap: '16px', justifyContent: 'center', marginBottom: '60px' }}>
          <button className="btn-primary" style={{
            padding: '18px 40px',
            borderRadius: '50px',
            border: 'none',
            backgroundColor: '#22C55E',
            color: '#FFF',
            fontWeight: 600,
            fontSize: '17px',
            cursor: 'pointer',
            boxShadow: '0 8px 30px rgba(34,197,94,0.35)',
          }}>
            Получить расчёт ROI
          </button>
          <button className="hover-lift" style={{
            padding: '18px 40px',
            borderRadius: '50px',
            border: '2px solid #7643d7',
            backgroundColor: 'transparent',
            color: '#7643d7',
            fontWeight: 600,
            fontSize: '17px',
            cursor: 'pointer',
          }}>
            Посмотреть демо
          </button>
        </div>

        {/* Светофор метрик - для планёрки */}
        <div style={{
          maxWidth: '900px',
          margin: '0 auto',
          backgroundColor: '#FFF',
          borderRadius: '24px',
          padding: '40px',
          border: '1px solid rgba(118,67,215,0.15)',
          boxShadow: '0 20px 60px rgba(118,67,215,0.12)',
        }}>
          <div style={{ fontSize: '13px', color: '#999', marginBottom: '16px', fontWeight: 600, textAlign: 'center' }}>
            Статус бизнеса за 30 секунд — идеально для планёрки
          </div>
          <div style={{ display: 'flex', justifyContent: 'center', gap: '16px', marginBottom: '24px' }}>
            <div className="animate-pulse-slow" style={{ width: '80px', height: '80px', borderRadius: '50%', backgroundColor: '#22C55E', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '32px', boxShadow: '0 0 30px rgba(34,197,94,0.3)' }}>✓</div>
            <div style={{ width: '80px', height: '80px', borderRadius: '50%', backgroundColor: '#FFD700', opacity: 0.3 }} />
            <div style={{ width: '80px', height: '80px', borderRadius: '50%', backgroundColor: '#EF4444', opacity: 0.3 }} />
          </div>
          <div style={{ textAlign: 'center', marginBottom: '32px' }}>
            <div style={{ fontSize: '28px', fontWeight: 800, color: '#22C55E' }}>Выручка растёт</div>
            <div style={{ color: '#666', marginTop: '8px' }}>1,247 контактов сегодня • 156 продаж • 2.3M ₽ выручка • +18% к плану</div>
          </div>
        </div>
      </section>

      {/* ROI блок */}
      <section id="roi" style={{ padding: '120px 20px', backgroundColor: '#FAF8FF' }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
          <h2 style={{ fontSize: '48px', fontWeight: 800, textAlign: 'center', marginBottom: '20px', letterSpacing: '-1px' }}>
            Измеримый <span className="gradient-text">возврат инвестиций</span>
          </h2>
          <p style={{ textAlign: 'center', color: '#666', marginBottom: '80px', fontSize: '18px', maxWidth: '600px', margin: '0 auto 80px' }}>
            Конкретные цифры для бизнес-обоснования
          </p>

          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '60px', alignItems: 'center' }}>
            {/* До внедрения */}
            <div style={{ backgroundColor: '#FFF', borderRadius: '24px', padding: '40px', border: '1px solid rgba(239,68,68,0.2)' }}>
              <div style={{ fontSize: '13px', color: '#EF4444', marginBottom: '16px', fontWeight: 600 }}>ДО внедрения Контакт.ИИ</div>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
                {[
                  { label: 'Упущенных продаж в неделю', value: '25', sum: '1,040,000 ₽' },
                  { label: 'Время на сбор отчётов', value: '40 мин', sum: 'каждое утро' },
                  { label: 'Скрытая утечка выручки', value: '~15%', sum: 'от оборота' },
                ].map((item, i) => (
                  <div key={i} style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '16px', backgroundColor: 'rgba(239,68,68,0.05)', borderRadius: '12px' }}>
                    <span style={{ color: '#666', fontSize: '14px' }}>{item.label}</span>
                    <div style={{ textAlign: 'right' }}>
                      <div style={{ fontWeight: 700, color: '#EF4444' }}>{item.value}</div>
                      <div style={{ fontSize: '11px', color: '#999' }}>{item.sum}</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* После внедрения */}
            <div style={{ backgroundColor: '#FFF', borderRadius: '24px', padding: '40px', border: '1px solid rgba(34,197,94,0.2)' }}>
              <div style={{ fontSize: '13px', color: '#22C55E', marginBottom: '16px', fontWeight: 600 }}>ПОСЛЕ внедрения Контакт.ИИ</div>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
                {[
                  { label: 'Обнаружено упущенных продаж', value: '229', sum: 'за месяц' },
                  { label: 'Время на анализ бизнеса', value: '30 сек', sum: 'вместо 40 минут' },
                  { label: 'Рост конверсии', value: '+18%', sum: 'первый месяц' },
                ].map((item, i) => (
                  <div key={i} style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '16px', backgroundColor: 'rgba(34,197,94,0.05)', borderRadius: '12px' }}>
                    <span style={{ color: '#666', fontSize: '14px' }}>{item.label}</span>
                    <div style={{ textAlign: 'right' }}>
                      <div style={{ fontWeight: 700, color: '#22C55E' }}>{item.value}</div>
                      <div style={{ fontSize: '11px', color: '#999' }}>{item.sum}</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Итоговый ROI */}
          <div style={{ marginTop: '60px', textAlign: 'center' }}>
            <div style={{ display: 'inline-block', padding: '32px 60px', backgroundColor: '#22C55E', borderRadius: '20px', boxShadow: '0 12px 40px rgba(34,197,94,0.3)' }}>
              <div style={{ fontSize: '14px', color: 'rgba(255,255,255,0.8)', marginBottom: '8px' }}>Средний ROI клиентов</div>
              <div style={{ fontSize: '56px', fontWeight: 800, color: '#FFF' }}>340%</div>
              <div style={{ fontSize: '16px', color: '#FFF' }}>за 3 месяца использования</div>
            </div>
          </div>
        </div>
      </section>

      {/* Прозрачность расчётов */}
      <section id="metrics" style={{ padding: '120px 20px', backgroundColor: '#FFF' }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '80px', alignItems: 'center' }}>
            <div>
              <div style={{
                display: 'inline-block',
                padding: '10px 24px',
                borderRadius: '50px',
                backgroundColor: 'rgba(118,67,215,0.1)',
                marginBottom: '24px',
                fontSize: '14px',
                color: '#7643d7',
                fontWeight: 600,
              }}>
                🔍 Полная прозрачность
              </div>
              <h2 style={{ fontSize: '44px', fontWeight: 800, marginBottom: '24px', lineHeight: 1.2, letterSpacing: '-1px', color: '#190750' }}>
                Как получились эти <span className="gradient-text">цифры?</span>
              </h2>
              <p style={{ fontSize: '18px', color: '#666', marginBottom: '32px', lineHeight: 1.7 }}>
                При клике на любую метрику открывается полная детализация: источники данных, формула расчёта, 
                конкретные события. Никаких «чёрных ящиков» — вы всегда можете проверить и обосновать цифры.
              </p>
              
              <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
                <div style={{ display: 'flex', gap: '16px', alignItems: 'flex-start' }}>
                  <div style={{ width: '48px', height: '48px', borderRadius: '12px', backgroundColor: 'rgba(118,67,215,0.1)', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '24px', flexShrink: 0 }}>📊</div>
                  <div>
                    <div style={{ fontWeight: 700, marginBottom: '4px', color: '#190750' }}>Источники данных</div>
                    <div style={{ fontSize: '14px', color: '#666', lineHeight: 1.5 }}>AmoCRM, Asterisk, почта — все системы в одном месте</div>
                  </div>
                </div>
                <div style={{ display: 'flex', gap: '16px', alignItems: 'flex-start' }}>
                  <div style={{ width: '48px', height: '48px', borderRadius: '12px', backgroundColor: 'rgba(118,67,215,0.1)', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '24px', flexShrink: 0 }}>🧮</div>
                  <div>
                    <div style={{ fontWeight: 700, marginBottom: '4px', color: '#190750' }}>Открытые формулы</div>
                    <div style={{ fontSize: '14px', color: '#666', lineHeight: 1.5 }}>Каждая метрика рассчитывается по понятной методике</div>
                  </div>
                </div>
              </div>
            </div>

            <div style={{ backgroundColor: '#FFF', borderRadius: '24px', padding: '32px', border: '1px solid rgba(118,67,215,0.15)', boxShadow: '0 20px 60px rgba(118,67,215,0.1)' }}>
              <div style={{ padding: '20px', backgroundColor: '#FAF8FF', borderRadius: '16px', marginBottom: '24px', border: '1px dashed rgba(118,67,215,0.3)' }}>
                <div style={{ fontSize: '13px', color: '#999', marginBottom: '8px' }}>Метрика: Конверсия продаж</div>
                <div style={{ display: 'flex', alignItems: 'baseline', gap: '12px' }}>
                  <span style={{ fontSize: '48px', fontWeight: 800, color: '#22C55E' }}>18.4%</span>
                  <span style={{ color: '#22C55E', fontWeight: 600 }}>+3.2% к прошлому периоду</span>
                </div>
              </div>

              <div style={{ marginBottom: '20px' }}>
                <div style={{ fontWeight: 700, marginBottom: '12px', color: '#190750', fontSize: '14px' }}>Формула расчёта:</div>
                <div style={{ padding: '16px', backgroundColor: '#190750', borderRadius: '12px', fontFamily: 'monospace', fontSize: '14px', color: '#FFF' }}>
                  Конверсия = (Продажи / Контакты) × 100%
                </div>
              </div>

              <div style={{ fontSize: '12px', color: '#999', textAlign: 'center' }}>
                Источники: AmoCRM API, Телефония Asterisk, Email SMTP
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Отрасли */}
      <section id="industries" style={{ padding: '120px 20px', backgroundColor: '#FAF8FF' }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto', textAlign: 'center' }}>
          <h2 style={{ fontSize: '48px', fontWeight: 800, marginBottom: '20px', letterSpacing: '-1px' }}>
            Решения для <span className="gradient-text">вашей отрасли</span>
          </h2>
          <p style={{ fontSize: '18px', color: '#666', marginBottom: '60px', maxWidth: '600px', margin: '0 auto 60px' }}>
            Адаптированные метрики и KPI для конкретного бизнеса
          </p>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: '24px' }}>
            {[
              { icon: '🛒', title: 'E-commerce', metric: '+23% снижения брошенных корзин', color: '#FF6B35' },
              { icon: '🏦', title: 'Финансы', metric: '+34% роста кросс-продаж', color: '#22C55E' },
              { icon: '📞', title: 'Телеком', metric: '-18% оттока клиентов', color: '#7643d7' },
              { icon: '🏥', title: 'Здравоохранение', metric: '+41% повторных записей', color: '#3B82F6' },
            ].map((industry, i) => (
              <div key={i} className="hover-lift" style={{ backgroundColor: '#FFF', borderRadius: '20px', padding: '32px', border: '1px solid rgba(118,67,215,0.1)' }}>
                <div style={{ fontSize: '48px', marginBottom: '16px' }}>{industry.icon}</div>
                <h3 style={{ fontSize: '18px', fontWeight: 700, marginBottom: '12px', color: '#190750' }}>{industry.title}</h3>
                <div style={{ padding: '12px', backgroundColor: `${industry.color}15`, borderRadius: '8px', marginBottom: '16px' }}>
                  <span style={{ color: industry.color, fontWeight: 600, fontSize: '14px' }}>{industry.metric}</span>
                </div>
                <div style={{ height: '4px', backgroundColor: industry.color, borderRadius: '2px' }} />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA для руководителя */}
      <section id="demo" style={{ padding: '120px 20px', textAlign: 'center', backgroundColor: '#190750' }}>
        <h2 style={{ fontSize: '48px', fontWeight: 800, marginBottom: '24px', color: '#FFF' }}>
          Готовы обсудить рост выручки?
        </h2>
        <p style={{ fontSize: '20px', color: 'rgba(255,255,255,0.7)', marginBottom: '48px', maxWidth: '500px', margin: '0 auto 48px' }}>
          Получите расчёт ROI для вашего бизнеса за 15 минут
        </p>
        <div style={{ display: 'flex', gap: '16px', justifyContent: 'center' }}>
          <button className="btn-primary animate-glow" style={{
            padding: '20px 56px',
            borderRadius: '50px',
            border: 'none',
            backgroundColor: '#22C55E',
            color: '#FFF',
            fontWeight: 700,
            fontSize: '18px',
            cursor: 'pointer',
            boxShadow: '0 8px 40px rgba(34,197,94,0.5)',
          }}>
            Получить расчёт ROI
          </button>
          <button className="hover-lift" style={{
            padding: '20px 56px',
            borderRadius: '50px',
            border: '2px solid rgba(255,255,255,0.3)',
            backgroundColor: 'transparent',
            color: '#FFF',
            fontWeight: 700,
            fontSize: '18px',
            cursor: 'pointer',
          }}>
            Назначить демо
          </button>
        </div>
        <div style={{ marginTop: '24px', display: 'flex', justifyContent: 'center', gap: '32px', color: 'rgba(255,255,255,0.5)', fontSize: '14px' }}>
          <span>✓ Расчёт за 15 минут</span>
          <span>✓ Демо для команды</span>
          <span>✓ Пилотный проект</span>
        </div>
      </section>

      {/* Footer */}
      <footer style={{ padding: '60px 20px', borderTop: '1px solid rgba(118,67,215,0.1)', backgroundColor: '#FFF' }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto', display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: '40px' }}>
          <div>
            <div style={{ fontSize: '24px', fontWeight: 800, color: '#7643d7', marginBottom: '16px' }}>
              Контакт.ИИ
            </div>
            <div style={{ color: '#666', fontSize: '14px', lineHeight: 1.6 }}>
              Платформа роста выручки через коммуникации.
            </div>
          </div>
          <div>
            <div style={{ fontWeight: 700, marginBottom: '16px', color: '#190750' }}>Продукт</div>
            <div style={{ color: '#666', fontSize: '14px', lineHeight: 2 }}>
              <div>Витрина виджетов</div>
              <div>ИИ-ассистент</div>
              <div>Транскрибация</div>
            </div>
          </div>
          <div>
            <div style={{ fontWeight: 700, marginBottom: '16px', color: '#190750' }}>Компания</div>
            <div style={{ color: '#666', fontSize: '14px', lineHeight: 2 }}>
              <div>О нас</div>
              <div>Карьера</div>
              <div>Блог</div>
            </div>
          </div>
          <div>
            <div style={{ fontWeight: 700, marginBottom: '16px', color: '#190750' }}>Контакты</div>
            <div style={{ color: '#666', fontSize: '14px', lineHeight: 2 }}>
              <div>📞 8 800 123-45-67</div>
              <div>📧 info@contact-ai.ru</div>
            </div>
          </div>
        </div>
        <div style={{ textAlign: 'center', color: '#999', fontSize: '12px', marginTop: '40px' }}>
          © 2026 Контакт.ИИ. Все права защищены.
        </div>
      </footer>
    </div>
  )
}

// ============================================
// КОНЦЕПТ 4: Для рекомендации КОЛЛЕГЕ
// ============================================
function LandingConcept4() {
  return (
    <div style={{ minHeight: '100vh', backgroundColor: '#FFFFFF', color: '#190750' }}>
      <style>{styles}</style>
      
      {/* Header */}
      <header style={{
        position: 'fixed',
        top: 0,
        left: 0,
        right: 0,
        padding: '16px 40px',
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        backgroundColor: 'rgba(255,255,255,0.98)',
        backdropFilter: 'blur(10px)',
        zIndex: 100,
        borderBottom: '1px solid rgba(118,67,215,0.1)',
      }}>
        <div style={{ fontSize: '24px', fontWeight: 800, color: '#7643d7' }}>
          Контакт.ИИ
        </div>
        <nav style={{ display: 'flex', gap: '32px', alignItems: 'center' }}>
          <a href="#integrations" className="hover-lift" style={{ color: '#190750', textDecoration: 'none', fontSize: '15px', fontWeight: 500 }}>Интеграции</a>
          <a href="#transparency" className="hover-lift" style={{ color: '#190750', textDecoration: 'none', fontSize: '15px', fontWeight: 500 }}>Прозрачность</a>
          <a href="#setup" className="hover-lift" style={{ color: '#190750', textDecoration: 'none', fontSize: '15px', fontWeight: 500 }}>Настройка</a>
          <a href="#game" className="hover-lift" style={{ color: '#190750', textDecoration: 'none', fontSize: '15px', fontWeight: 500 }}>Игра</a>
          <button className="btn-primary" style={{
            padding: '12px 28px',
            borderRadius: '50px',
            border: 'none',
            backgroundColor: '#7643d7',
            color: '#FFF',
            fontWeight: 600,
            cursor: 'pointer',
            boxShadow: '0 4px 20px rgba(118,67,215,0.3)',
          }}>
            Начать бесплатно
          </button>
        </nav>
      </header>

      {/* Hero - Акцент на решение боли */}
      <section style={{
        paddingTop: '160px',
        paddingBottom: '100px',
        textAlign: 'center',
        background: 'linear-gradient(180deg, #FAF8FF 0%, #FFFFFF 100%)',
      }}>
        <div style={{
          display: 'inline-block',
          padding: '10px 24px',
          borderRadius: '50px',
          backgroundColor: 'rgba(59,130,246,0.1)',
          marginBottom: '32px',
          fontSize: '14px',
          color: '#3B82F6',
          fontWeight: 600,
        }}>
          🛠️ Для администраторов IP-телефонии и CRM
        </div>
        
        <h1 style={{
          fontSize: '56px',
          fontWeight: 800,
          lineHeight: 1.1,
          marginBottom: '32px',
          maxWidth: '1000px',
          margin: '0 auto 32px',
          letterSpacing: '-2px',
        }}>
          Наконец-то не нужно <span className="gradient-text">вручную прослушивать звонки</span>
        </h1>
        
        <p style={{
          fontSize: '20px',
          color: '#666',
          maxWidth: '700px',
          margin: '0 auto 24px',
          lineHeight: 1.7,
        }}>
          Контакт.ИИ — ИИ-аналитика, которая экономит часы рутинной работы. Настройка за 5 минут, 
          все формулы открыты, работает с вашими системами.
        </p>

        {/* Ключевые преимущества для админа */}
        <div style={{ display: 'flex', justifyContent: 'center', gap: '40px', marginBottom: '48px' }}>
          {[
            { icon: '⚡', label: 'Настройка 5 минут', desc: 'без программистов' },
            { icon: '🔓', label: 'Открытые формулы', desc: 'никаких чёрных ящиков' },
            { icon: '🔗', label: 'Ваши системы', desc: 'Asterisk, AmoCRM, Битрикс24' },
          ].map((item, i) => (
            <div key={i} style={{ textAlign: 'center' }}>
              <div style={{ fontSize: '32px', marginBottom: '8px' }}>{item.icon}</div>
              <div style={{ fontSize: '16px', fontWeight: 700, color: '#190750' }}>{item.label}</div>
              <div style={{ fontSize: '13px', color: '#999' }}>{item.desc}</div>
            </div>
          ))}
        </div>
        
        <div style={{ display: 'flex', gap: '16px', justifyContent: 'center', marginBottom: '60px' }}>
          <button className="btn-primary" style={{
            padding: '18px 40px',
            borderRadius: '50px',
            border: 'none',
            backgroundColor: '#7643d7',
            color: '#FFF',
            fontWeight: 600,
            fontSize: '17px',
            cursor: 'pointer',
            boxShadow: '0 8px 30px rgba(118,67,215,0.35)',
          }}>
            Попробовать 14 дней бесплатно
          </button>
          <button className="hover-lift" style={{
            padding: '18px 40px',
            borderRadius: '50px',
            border: '2px solid #7643d7',
            backgroundColor: 'transparent',
            color: '#7643d7',
            fontWeight: 600,
            fontSize: '17px',
            cursor: 'pointer',
          }}>
            Посмотреть демо
          </button>
        </div>

        {/* Пример экономии времени */}
        <div style={{
          maxWidth: '900px',
          margin: '0 auto',
          backgroundColor: '#FFF',
          borderRadius: '24px',
          padding: '40px',
          border: '1px solid rgba(118,67,215,0.15)',
          boxShadow: '0 20px 60px rgba(118,67,215,0.12)',
        }}>
          <div style={{ fontSize: '13px', color: '#999', marginBottom: '20px', fontWeight: 600, textAlign: 'center' }}>
            ИИ-анализ вместо ручного прослушивания
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr 1fr', gap: '24px' }}>
            {[
              { icon: '📞', before: '2 часа/день', after: '5 минут', label: 'Прослушивание звонков' },
              { icon: '📊', before: '40 минут', after: '30 секунд', label: 'Сбор отчётов' },
              { icon: '🔍', before: 'Вручную', after: 'Автоматически', label: 'Поиск проблем' },
            ].map((item, i) => (
              <div key={i} style={{ textAlign: 'center', padding: '24px', backgroundColor: '#FAF8FF', borderRadius: '16px' }}>
                <div style={{ fontSize: '32px', marginBottom: '12px' }}>{item.icon}</div>
                <div style={{ fontSize: '14px', fontWeight: 600, color: '#190750', marginBottom: '12px' }}>{item.label}</div>
                <div style={{ display: 'flex', flexDirection: 'column', gap: '4px' }}>
                  <div style={{ fontSize: '12px', color: '#EF4444', textDecoration: 'line-through' }}>{item.before}</div>
                  <div style={{ fontSize: '18px', fontWeight: 800, color: '#22C55E' }}>{item.after}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Интеграции */}
      <section id="integrations" style={{ padding: '120px 20px', backgroundColor: '#FAF8FF' }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto', textAlign: 'center' }}>
          <h2 style={{ fontSize: '48px', fontWeight: 800, marginBottom: '20px', letterSpacing: '-1px' }}>
            Работает с <span className="gradient-text">вашими системами</span>
          </h2>
          <p style={{ fontSize: '18px', color: '#666', marginBottom: '60px', maxWidth: '600px', margin: '0 auto 60px' }}>
            Интеграции из коробки с популярными системами телефонии и CRM
          </p>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: '24px' }}>
            {[
              { icon: '📞', title: 'Asterisk', desc: 'SIP, AMI, ARI' },
              { icon: '📱', title: 'FreePBX', desc: 'Модуль интеграции' },
              { icon: '💼', title: 'AmoCRM', desc: 'API + Webhooks' },
              { icon: '📋', title: 'Битрикс24', desc: 'REST API' },
            ].map((sys, i) => (
              <div key={i} className="hover-lift" style={{ backgroundColor: '#FFF', borderRadius: '20px', padding: '32px', border: '1px solid rgba(118,67,215,0.1)' }}>
                <div style={{ fontSize: '48px', marginBottom: '16px' }}>{sys.icon}</div>
                <div style={{ fontWeight: 700, marginBottom: '8px', color: '#190750' }}>{sys.title}</div>
                <div style={{ fontSize: '13px', color: '#999' }}>{sys.desc}</div>
              </div>
            ))}
          </div>

          <div style={{ marginTop: '40px', padding: '24px', backgroundColor: '#FFF', borderRadius: '16px', border: '1px solid rgba(118,67,215,0.1)', display: 'inline-block' }}>
            <span style={{ color: '#666' }}>А также: </span>
            <span style={{ color: '#7643d7', fontWeight: 600 }}>Mango, UIS, Telphin, Zadarma, RetailCRM, Salesforce</span>
          </div>
        </div>
      </section>

      {/* Прозрачность */}
      <section id="transparency" style={{ padding: '120px 20px', backgroundColor: '#FFF' }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '80px', alignItems: 'center' }}>
            <div>
              <div style={{
                display: 'inline-block',
                padding: '10px 24px',
                borderRadius: '50px',
                backgroundColor: 'rgba(34,197,94,0.1)',
                marginBottom: '24px',
                fontSize: '14px',
                color: '#22C55E',
                fontWeight: 600,
              }}>
                🔓 Никаких чёрных ящиков
              </div>
              <h2 style={{ fontSize: '44px', fontWeight: 800, marginBottom: '24px', lineHeight: 1.2, letterSpacing: '-1px', color: '#190750' }}>
                Все формулы <span className="gradient-text">открыты</span>
              </h2>
              <p style={{ fontSize: '18px', color: '#666', marginBottom: '32px', lineHeight: 1.7 }}>
                Нажмите на любую метрику — увидите формулу расчёта, источники данных и 
                конкретные события, которые в неё вошли. Полная прозрачность для технарей.
              </p>
              
              <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
                <div style={{ display: 'flex', gap: '16px', alignItems: 'flex-start' }}>
                  <div style={{ width: '48px', height: '48px', borderRadius: '12px', backgroundColor: 'rgba(118,67,215,0.1)', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '24px', flexShrink: 0 }}>📊</div>
                  <div>
                    <div style={{ fontWeight: 700, marginBottom: '4px', color: '#190750' }}>Источники данных</div>
                    <div style={{ fontSize: '14px', color: '#666', lineHeight: 1.5 }}>Какие API и системы предоставили данные</div>
                  </div>
                </div>
                <div style={{ display: 'flex', gap: '16px', alignItems: 'flex-start' }}>
                  <div style={{ width: '48px', height: '48px', borderRadius: '12px', backgroundColor: 'rgba(118,67,215,0.1)', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '24px', flexShrink: 0 }}>🧮</div>
                  <div>
                    <div style={{ fontWeight: 700, marginBottom: '4px', color: '#190750' }}>Формулы расчёта</div>
                    <div style={{ fontSize: '14px', color: '#666', lineHeight: 1.5 }}>Понятное описание методики для каждой метрики</div>
                  </div>
                </div>
                <div style={{ display: 'flex', gap: '16px', alignItems: 'flex-start' }}>
                  <div style={{ width: '48px', height: '48px', borderRadius: '12px', backgroundColor: 'rgba(118,67,215,0.1)', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '24px', flexShrink: 0 }}>📋</div>
                  <div>
                    <div style={{ fontWeight: 700, marginBottom: '4px', color: '#190750' }}>Список событий</div>
                    <div style={{ fontSize: '14px', color: '#666', lineHeight: 1.5 }}>Конкретные звонки и контакты в расчёте</div>
                  </div>
                </div>
              </div>
            </div>

            <div style={{ backgroundColor: '#FFF', borderRadius: '24px', padding: '32px', border: '1px solid rgba(118,67,215,0.15)', boxShadow: '0 20px 60px rgba(118,67,215,0.1)' }}>
              <div style={{ padding: '20px', backgroundColor: '#FAF8FF', borderRadius: '16px', marginBottom: '24px', border: '1px dashed rgba(118,67,215,0.3)' }}>
                <div style={{ fontSize: '13px', color: '#999', marginBottom: '8px' }}>Метрика: Конверсия продаж</div>
                <div style={{ display: 'flex', alignItems: 'baseline', gap: '12px' }}>
                  <span style={{ fontSize: '48px', fontWeight: 800, color: '#22C55E' }}>18.4%</span>
                  <span style={{ color: '#22C55E', fontWeight: 600 }}>+3.2%</span>
                </div>
              </div>

              <div style={{ marginBottom: '20px' }}>
                <div style={{ fontWeight: 700, marginBottom: '12px', color: '#190750', fontSize: '14px' }}>Формула расчёта:</div>
                <div style={{ padding: '16px', backgroundColor: '#190750', borderRadius: '12px', fontFamily: 'monospace', fontSize: '14px', color: '#FFF' }}>
                  Конверсия = (Продажи / Контакты) × 100%
                </div>
              </div>

              <div style={{ marginBottom: '20px' }}>
                <div style={{ fontWeight: 700, marginBottom: '12px', color: '#190750', fontSize: '14px' }}>Исходные данные:</div>
                <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
                  <div style={{ display: 'flex', justifyContent: 'space-between', padding: '12px', backgroundColor: '#FAF8FF', borderRadius: '8px' }}>
                    <span style={{ color: '#666' }}>Всего контактов</span>
                    <span style={{ fontWeight: 700, color: '#190750' }}>1,247</span>
                  </div>
                  <div style={{ display: 'flex', justifyContent: 'space-between', padding: '12px', backgroundColor: '#FAF8FF', borderRadius: '8px' }}>
                    <span style={{ color: '#666' }}>Успешных продаж</span>
                    <span style={{ fontWeight: 700, color: '#22C55E' }}>229</span>
                  </div>
                </div>
              </div>

              <div style={{ fontSize: '12px', color: '#999', textAlign: 'center' }}>
                Источники: AmoCRM API, Asterisk AMI, SMTP
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Простота настройки */}
      <section id="setup" style={{ padding: '120px 20px', backgroundColor: '#FAF8FF' }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto', textAlign: 'center' }}>
          <h2 style={{ fontSize: '48px', fontWeight: 800, marginBottom: '20px', letterSpacing: '-1px' }}>
            Настройка за <span className="gradient-text">5 минут</span>
          </h2>
          <p style={{ fontSize: '18px', color: '#666', marginBottom: '60px', maxWidth: '600px', margin: '0 auto 60px' }}>
            Без программистов. Без сложных инструкций.
          </p>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: '24px' }}>
            {[
              { step: '1', title: 'Подключите телефонию', desc: 'SIP-аккаунт или API ключ', time: '2 мин' },
              { step: '2', title: 'Добавьте CRM', desc: 'API токен из AmoCRM или Битрикс24', time: '1 мин' },
              { step: '3', title: 'Выберите виджеты', desc: 'Готовые дашборды из каталога', time: '1 мин' },
              { step: '4', title: 'Готово', desc: 'Данные уже поступают', time: '1 мин' },
            ].map((item, i) => (
              <div key={i} className="hover-lift" style={{ backgroundColor: '#FFF', borderRadius: '20px', padding: '32px', border: '1px solid rgba(118,67,215,0.1)', position: 'relative' }}>
                <div style={{ 
                  position: 'absolute', 
                  top: '-16px', 
                  left: '50%', 
                  transform: 'translateX(-50%)',
                  width: '32px', 
                  height: '32px', 
                  borderRadius: '50%', 
                  backgroundColor: '#7643d7', 
                  color: '#FFF', 
                  fontWeight: 700, 
                  display: 'flex', 
                  alignItems: 'center', 
                  justifyContent: 'center' 
                }}>
                  {item.step}
                </div>
                <div style={{ marginTop: '16px', fontWeight: 700, marginBottom: '8px', color: '#190750' }}>{item.title}</div>
                <div style={{ fontSize: '14px', color: '#666', marginBottom: '16px' }}>{item.desc}</div>
                <div style={{ fontSize: '12px', color: '#7643d7', fontWeight: 600 }}>⏱️ {item.time}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Снижение аварийности */}
      <section style={{ padding: '120px 20px', backgroundColor: '#FFF' }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '60px', alignItems: 'center' }}>
            <div>
              <div style={{ fontSize: '56px', marginBottom: '20px' }}>🛡️</div>
              <h3 style={{ fontSize: '32px', fontWeight: 800, marginBottom: '20px', color: '#190750' }}>Меньше ночных звонков</h3>
              <p style={{ fontSize: '17px', color: '#666', lineHeight: 1.8, marginBottom: '24px' }}>
                ИИ-аналитика находит проблемы до того, как они станут авариями. 
                Предиктивные алерты о проблемах в коммуникациях — меньше срочных вызовов, спокойнее работа.
              </p>
              <div style={{ padding: '24px', backgroundColor: '#7643d7', borderRadius: '16px' }}>
                <div style={{ fontWeight: 700, marginBottom: '8px', color: '#FFF', fontSize: '14px' }}>Раннее обнаружение</div>
                <p style={{ color: 'rgba(255,255,255,0.9)', lineHeight: 1.7 }}>
                  Падение конверсии, рост пропущенных, подозрительные паттерны — 
                  система уведомит раньше, чем это заметит руководство.
                </p>
              </div>
            </div>
            <div style={{ backgroundColor: '#FFF', borderRadius: '24px', padding: '40px', border: '1px solid rgba(239,68,68,0.2)', boxShadow: '0 10px 40px rgba(239,68,68,0.08)' }}>
              <div style={{ fontSize: '13px', color: '#EF4444', marginBottom: '12px', fontWeight: 600 }}>⚠️ Раннее предупреждение</div>
              <div style={{ padding: '16px', backgroundColor: 'rgba(239,68,68,0.05)', borderRadius: '12px', marginBottom: '16px', border: '1px solid rgba(239,68,68,0.15)' }}>
                <div style={{ fontSize: '12px', color: '#999', marginBottom: '4px' }}>Обнаружено за 2 часа до аварии</div>
                <div style={{ fontSize: '14px', color: '#190750' }}>Резкий рост пропущенных вызовов на линии продаж — возможна перегрузка</div>
              </div>
              <div style={{ display: 'flex', gap: '12px' }}>
                <button style={{ flex: 1, padding: '12px', backgroundColor: '#EF4444', border: 'none', borderRadius: '50px', color: '#FFF', fontWeight: 600, cursor: 'pointer' }}>Посмотреть</button>
                <button style={{ flex: 1, padding: '12px', backgroundColor: 'rgba(239,68,68,0.1)', border: 'none', borderRadius: '50px', color: '#EF4444', fontWeight: 600, cursor: 'pointer' }}>Игнорировать</button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Игра - виральный элемент */}
      <section id="game" style={{ padding: '120px 20px', background: 'linear-gradient(180deg, #FFF8E7 0%, #FFF 100%)' }}>
        <div style={{ maxWidth: '1000px', margin: '0 auto' }}>
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '60px', alignItems: 'center' }}>
            <div>
              <div style={{
                display: 'inline-block',
                padding: '10px 24px',
                borderRadius: '50px',
                backgroundColor: 'rgba(255,165,0,0.15)',
                marginBottom: '24px',
                fontSize: '14px',
                color: '#FF8C00',
                fontWeight: 600,
              }}>
                🎮 Такого нет ни у кого
              </div>
              <h2 style={{ fontSize: '44px', fontWeight: 800, marginBottom: '24px', lineHeight: 1.2, letterSpacing: '-1px', color: '#190750' }}>
                Игра <span style={{ color: '#FF8C00' }}>«Мёдом намазано»</span>
              </h2>
              <p style={{ fontSize: '18px', color: '#666', marginBottom: '32px', lineHeight: 1.7 }}>
                Уникальный элемент вовлечения. Выиграйте месяц бесплатного использования Контакт.ИИ! 
                Поделитесь с коллегами — пусть тоже попробуют.
              </p>
              <button style={{
                padding: '18px 40px',
                borderRadius: '50px',
                border: 'none',
                background: 'linear-gradient(90deg, #FFD700, #FFA500)',
                color: '#190750',
                fontWeight: 700,
                fontSize: '17px',
                cursor: 'pointer',
                boxShadow: '0 8px 32px rgba(255,165,0,0.3)',
              }}>
                Играть бесплатно 🍯
              </button>
            </div>

            <div style={{
              padding: '48px',
              borderRadius: '32px',
              background: 'linear-gradient(180deg, rgba(255,165,0,0.08) 0%, #FFF 100%)',
              border: '2px solid rgba(255,165,0,0.2)',
              textAlign: 'center',
            }}>
              <div className="animate-float" style={{
                width: '120px',
                height: '120px',
                borderRadius: '50%',
                background: 'linear-gradient(135deg, #FFD700 0%, #FFA500 50%, #FF8C00 100%)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                fontSize: '60px',
                margin: '0 auto 32px',
                boxShadow: '0 12px 40px rgba(255,165,0,0.3)',
              }}>
                🍯
              </div>
              <h3 style={{ fontSize: '32px', fontWeight: 800, marginBottom: '16px', color: '#190750' }}>
                Мёдом намазано
              </h3>
              <div style={{ padding: '24px', backgroundColor: '#190750', borderRadius: '20px', marginBottom: '24px' }}>
                <div style={{ fontSize: '14px', color: 'rgba(255,255,255,0.7)', marginBottom: '8px' }}>Главный приз</div>
                <div style={{ fontSize: '40px', fontWeight: 800, color: '#FFD700' }}>30 дней</div>
                <div style={{ fontSize: '16px', color: '#FFF' }}>Контакт.ИИ бесплатно</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section style={{ padding: '120px 20px', textAlign: 'center', backgroundColor: '#190750' }}>
        <h2 style={{ fontSize: '48px', fontWeight: 800, marginBottom: '24px', color: '#FFF' }}>
          Готовы сэкономить часы работы?
        </h2>
        <p style={{ fontSize: '20px', color: 'rgba(255,255,255,0.7)', marginBottom: '48px', maxWidth: '500px', margin: '0 auto 48px' }}>
          14 дней бесплатно. Настройка за 5 минут. Без программистов.
        </p>
        <button className="btn-primary animate-glow" style={{
          padding: '20px 56px',
          borderRadius: '50px',
          border: 'none',
          backgroundColor: '#7643d7',
          color: '#FFF',
          fontWeight: 700,
          fontSize: '18px',
          cursor: 'pointer',
          boxShadow: '0 8px 40px rgba(118,67,215,0.5)',
        }}>
          Начать бесплатно
        </button>
        <div style={{ marginTop: '24px', display: 'flex', justifyContent: 'center', gap: '32px', color: 'rgba(255,255,255,0.5)', fontSize: '14px' }}>
          <span>✓ Интеграция с Asterisk</span>
          <span>✓ Открытые формулы</span>
          <span>✓ Настройка за 5 минут</span>
        </div>
      </section>

      {/* Footer */}
      <footer style={{ padding: '60px 20px', borderTop: '1px solid rgba(118,67,215,0.1)', backgroundColor: '#FFF' }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto', display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: '40px' }}>
          <div>
            <div style={{ fontSize: '24px', fontWeight: 800, color: '#7643d7', marginBottom: '16px' }}>
              Контакт.ИИ
            </div>
            <div style={{ color: '#666', fontSize: '14px', lineHeight: 1.6 }}>
              Платформа роста выручки через коммуникации.
            </div>
          </div>
          <div>
            <div style={{ fontWeight: 700, marginBottom: '16px', color: '#190750' }}>Продукт</div>
            <div style={{ color: '#666', fontSize: '14px', lineHeight: 2 }}>
              <div>Витрина виджетов</div>
              <div>ИИ-ассистент</div>
              <div>Транскрибация</div>
            </div>
          </div>
          <div>
            <div style={{ fontWeight: 700, marginBottom: '16px', color: '#190750' }}>Интеграции</div>
            <div style={{ color: '#666', fontSize: '14px', lineHeight: 2 }}>
              <div>Asterisk</div>
              <div>AmoCRM</div>
              <div>Битрикс24</div>
            </div>
          </div>
          <div>
            <div style={{ fontWeight: 700, marginBottom: '16px', color: '#190750' }}>Контакты</div>
            <div style={{ color: '#666', fontSize: '14px', lineHeight: 2 }}>
              <div>📞 8 800 123-45-67</div>
              <div>📧 info@contact-ai.ru</div>
            </div>
          </div>
        </div>
        <div style={{ textAlign: 'center', color: '#999', fontSize: '12px', marginTop: '40px' }}>
          © 2026 Контакт.ИИ. Все права защищены.
        </div>
      </footer>
    </div>
  )
}

// ============================================
// ============================================
// КОНЦЕПТ 5: Объединённый (Детально + Руководитель + Коллега + Сотрудники)
// Учитывает все пожелания Артема из транскрибации
// + Акцент на ценность для разных ролей
// + Изображение продукта на iPad
// + Примеры виджетов
// + Микроразметка для Яндекс.Метрики веб-визора
// ============================================
function LandingConcept5() {
  return (
    <div style={{ minHeight: '100vh', backgroundColor: '#FFFFFF', color: '#190750' }}>
      <style>{styles}</style>
      
      {/* Яндекс.Метрика: Код счётчика с веб-визором */}
      {/* Замените 106950455 на номер вашего счётчика */}
      <script
        id="yandex-metrika-config-concept5"
        type="text/javascript"
        dangerouslySetInnerHTML={{
          __html: `
            (function(m,e,t,r,i,k,a){m[i]=m[i]||function(){(m[i].a=m[i].a||[]).push(arguments)};
            m[i].l=1*new Date();
            for (var j = 0; j < document.scripts.length; j++) {if (document.scripts[j].src === r) { return; }}
            k=e.createElement(t),a=e.getElementsByTagName(t)[0],k.async=1,k.src=r,a.parentNode.insertBefore(k,a)})
            (window, document, "script", "https://mc.yandex.ru/metrika/tag.js", "ym");

            // ЗАМЕНИТЕ 106950455 НА НОМЕР ВАШЕГО СЧЁТЧИКА
            ym('106950455', 'init', {
              clickmap: true,
              trackLinks: true,
              accurateTrackBounce: true,
              webvisor: true,
              trackHash: true,
              ecommerce: "dataLayer"
            });
          `
        }}
      />
      
      {/* Микроразметка для веб-визора: невидимые инпуты для отслеживания состояний */}
      <input type="hidden" id="ym-concept" value="unified" />
      <input type="hidden" id="ym-page-type" value="landing" />
      
      {/* Header */}
      <header 
        id="header"
        data-ym-area="header"
        data-ym-name="Шапка сайта"
        style={{
        position: 'fixed',
        top: 0,
        left: 0,
        right: 0,
        padding: '16px 40px',
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        backgroundColor: 'rgba(255,255,255,0.98)',
        backdropFilter: 'blur(10px)',
        zIndex: 100,
        borderBottom: '1px solid rgba(118,67,215,0.1)',
      }}>
        <div 
          id="logo"
          data-ym-click-type="navigation"
          data-ym-name="Логотип"
          style={{ fontSize: '24px', fontWeight: 800, color: '#7643d7' }}>
          Контакт.ИИ
        </div>
        <nav style={{ display: 'flex', gap: '32px', alignItems: 'center' }}>
          <a 
            href="#roles" 
            id="nav-roles"
            data-ym-click-type="navigation"
            data-ym-name="Ссылка: Для всех ролей"
            className="hover-lift" 
            style={{ color: '#190750', textDecoration: 'none', fontSize: '15px', fontWeight: 500 }}>Для всех ролей</a>
          <a 
            href="#widgets" 
            id="nav-widgets"
            data-ym-click-type="navigation"
            data-ym-name="Ссылка: Виджеты"
            className="hover-lift" 
            style={{ color: '#190750', textDecoration: 'none', fontSize: '15px', fontWeight: 500 }}>Виджеты</a>
          <a 
            href="#transparency" 
            id="nav-transparency"
            data-ym-click-type="navigation"
            data-ym-name="Ссылка: Прозрачность"
            className="hover-lift" 
            style={{ color: '#190750', textDecoration: 'none', fontSize: '15px', fontWeight: 500 }}>Прозрачность</a>
          <a 
            href="#integrations" 
            id="nav-integrations"
            data-ym-click-type="navigation"
            data-ym-name="Ссылка: Интеграции"
            className="hover-lift" 
            style={{ color: '#190750', textDecoration: 'none', fontSize: '15px', fontWeight: 500 }}>Интеграции</a>
          <button 
            id="header-cta"
            data-ym-click-type="button"
            data-ym-name="Кнопка: Пригласить коллегу (шапка)"
            data-ym-goal-id="invite_colleague_header"
            className="btn-primary" 
            onClick={() => {
              const modal = document.getElementById('workspace-modal');
              if (modal) modal.style.display = 'flex';
            }}
            style={{
              padding: '12px 28px',
              borderRadius: '50px',
              border: 'none',
              backgroundColor: '#7643d7',
              color: '#FFF',
              fontWeight: 600,
              cursor: 'pointer',
              boxShadow: '0 4px 20px rgba(118,67,215,0.3)',
            }}>
            Пригласить коллегу
          </button>
        </nav>
      </header>

      {/* Hero с изображением iPad */}
      <section style={{
        paddingTop: '120px',
        paddingBottom: '80px',
        textAlign: 'center',
        background: 'linear-gradient(180deg, #FAF8FF 0%, #FFFFFF 100%)',
      }}>
        {/* Плашка позиционирования */}
        <div style={{
          display: 'inline-block',
          padding: '14px 36px',
          borderRadius: '60px',
          background: 'linear-gradient(90deg, #7643d7, #9b6dff)',
          marginBottom: '32px',
          fontSize: '17px',
          color: '#FFF',
          fontWeight: 700,
          boxShadow: '0 8px 32px rgba(118,67,215,0.3)',
        }}>
          📈 Платформа роста выручки через коммуникации
        </div>
        
        <h1 
          id="hero-headline"
          data-ym-name="Заголовок: Продажи начинаются в разговоре"
          style={{
            fontSize: '56px',
            fontWeight: 800,
            lineHeight: 1.1,
            marginBottom: '20px',
            maxWidth: '1000px',
            margin: '0 auto 20px',
            letterSpacing: '-2px',
          }}>
          Продажи начинаются <span className="gradient-text">в разговоре</span>
        </h1>
        
        <p 
          id="hero-subtitle"
          data-ym-name="Подзаголовок"
          style={{
          fontSize: '20px',
          color: '#666',
          maxWidth: '700px',
          margin: '0 auto 40px',
          lineHeight: 1.7,
        }}>
          Контакт.ИИ превращает каждый контакт с клиентом в управляемый источник продаж. 
          Платформа для администраторов, руководителей и сотрудников.
        </p>
        
        {/* Кнопка */}
        <div 
          id="hero-cta-group"
          data-ym-area="cta-buttons"
          data-ym-name="Кнопка действия (Hero)"
          style={{ display: 'flex', justifyContent: 'center', marginBottom: '60px' }}>
          <button 
            id="hero-cta-primary"
            data-ym-click-type="button"
            data-ym-name="Кнопка: Пригласить коллегу в КонтактИИ"
            data-ym-goal-id="invite_colleague_hero"
            className="btn-primary" 
            onClick={() => {
              const modal = document.getElementById('workspace-modal');
              if (modal) modal.style.display = 'flex';
            }}
            style={{
              padding: '18px 40px',
              borderRadius: '50px',
              border: 'none',
              backgroundColor: '#22C55E',
              color: '#FFF',
              fontWeight: 600,
              fontSize: '17px',
              cursor: 'pointer',
              boxShadow: '0 8px 30px rgba(34,197,94,0.35)',
            }}>
            Пригласить коллегу в КонтактИИ
          </button>
        </div>

        {/* ИЗОБРАЖЕНИЕ iPad с интерфейсом продукта */}
        <div style={{
          maxWidth: '1000px',
          margin: '0 auto',
          padding: '20px',
        }}>
          <div style={{
            position: 'relative',
            borderRadius: '32px',
            overflow: 'hidden',
            boxShadow: '0 30px 80px rgba(118,67,215,0.2)',
            border: '1px solid rgba(118,67,215,0.1)',
          }}>
            <img 
              src="/contact_ai_ipad_dashboard.png" 
              alt="Интерфейс Контакт.ИИ на iPad — светофор метрик, виджеты и планировщик встреч"
              style={{
                width: '100%',
                height: 'auto',
                display: 'block',
              }}
            />
            <div style={{
              position: 'absolute',
              bottom: '20px',
              left: '50%',
              transform: 'translateX(-50%)',
              padding: '12px 24px',
              backgroundColor: 'rgba(25, 7, 80, 0.9)',
              borderRadius: '50px',
              color: '#FFF',
              fontSize: '14px',
              fontWeight: 600,
            }}>
              Светофор метрик • 3 виджета • Планировщик встреч
            </div>
          </div>
        </div>
      </section>

      {/* БЛОК: Ценность для разных ролей - АДМИНИСТРАТОР vs РУКОВОДИТЕЛЬ */}
      <section 
        id="roles"
        data-ym-area="roles"
        data-ym-name="Блок: Ценность для ролей"
        style={{ padding: '120px 20px', backgroundColor: '#FFF' }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
          <div style={{ textAlign: 'center', marginBottom: '80px' }}>
            <div style={{
              display: 'inline-block',
              padding: '12px 28px',
              borderRadius: '50px',
              backgroundColor: 'rgba(118,67,215,0.1)',
              marginBottom: '24px',
              fontSize: '15px',
              color: '#7643d7',
              fontWeight: 700,
            }}>
              👥 Ценность для каждой роли
            </div>
            <h2 
              id="roles-headline"
              data-ym-name="Заголовок: Что получит администратор и что увидит руководитель"
              style={{ fontSize: '48px', fontWeight: 800, marginBottom: '20px', letterSpacing: '-1px' }}>
              Что <span className="gradient-text">получит администратор</span> и что <span className="gradient-text">увидит руководитель</span>
            </h2>
            <p style={{ fontSize: '18px', color: '#666', maxWidth: '700px', margin: '0 auto' }}>
              Руководитель сможет оценить заслуги администратора и работу сервиса в реальном времени
            </p>
          </div>

          {/* Сравнение АДМИНИСТРАТОР vs РУКОВОДИТЕЛЬ */}
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '40px', marginBottom: '60px' }}>
            
            {/* АДМИНИСТРАТОР */}
            <div 
              id="admin-card"
              data-ym-name="Карточка: Администратор"
              style={{
              backgroundColor: '#FAF8FF',
              borderRadius: '32px',
              padding: '48px',
              border: '2px solid rgba(59,130,246,0.2)',
            }}>
              <div style={{ 
                display: 'flex', 
                alignItems: 'center', 
                gap: '16px', 
                marginBottom: '32px' 
              }}>
                <div style={{
                  width: '72px',
                  height: '72px',
                  borderRadius: '50%',
                  backgroundColor: '#3B82F6',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  fontSize: '36px',
                }}>
                  🛠️
                </div>
                <div style={{ textAlign: 'left' }}>
                  <div style={{ fontSize: '28px', fontWeight: 800, color: '#3B82F6' }}>Администратор</div>
                  <div style={{ fontSize: '14px', color: '#666' }}>получает новые возможности</div>
                </div>
              </div>

              <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
                {[
                  { icon: '⚡', title: 'Настройка за 5 минут', desc: 'Без программистов. Подключите телефонию и CRM за пару минут.' },
                  { icon: '🔓', title: 'Открытые формулы', desc: 'Все расчёты прозрачны. Кликните на метрику — увидите методику.' },
                  { icon: '📊', title: 'Статус системы в реальном времени', desc: 'Мгновенные уведомления о проблемах до того, как их заметит руководство.' },
                  { icon: '🏆', title: 'Признание эксперта', desc: 'Вы становитесь экспертом по аналитике коммуникаций в компании.' },
                  { icon: '🛡️', title: 'Снижение аварийности', desc: 'ИИ находит проблемы до того, как они станут авариями. Меньше ночных звонков.' },
                ].map((item, i) => (
                  <div key={i} style={{ display: 'flex', gap: '16px', alignItems: 'flex-start' }}>
                    <div style={{ fontSize: '24px', flexShrink: 0 }}>{item.icon}</div>
                    <div style={{ textAlign: 'left' }}>
                      <div style={{ fontWeight: 700, marginBottom: '4px', color: '#190750', fontSize: '16px' }}>{item.title}</div>
                      <div style={{ fontSize: '14px', color: '#666', lineHeight: 1.5 }}>{item.desc}</div>
                    </div>
                  </div>
                ))}
              </div>

              <div style={{ 
                marginTop: '32px', 
                padding: '20px', 
                backgroundColor: '#3B82F6', 
                borderRadius: '16px',
                textAlign: 'center',
              }}>
                <div style={{ color: '#FFF', fontWeight: 700, fontSize: '18px' }}>Настройка за 5 минут</div>
                <div style={{ color: 'rgba(255,255,255,0.8)', fontSize: '14px', marginTop: '4px' }}>Без программистов и сложных инструкций</div>
              </div>
            </div>

            {/* РУКОВОДИТЕЛЬ */}
            <div 
              id="supervisor-card"
              data-ym-name="Карточка: Руководитель"
              style={{
                backgroundColor: '#FAF8FF',
                borderRadius: '32px',
                padding: '48px',
                border: '2px solid rgba(34,197,94,0.2)',
            }}>
              <div style={{ 
                display: 'flex', 
                alignItems: 'center', 
                gap: '16px', 
                marginBottom: '32px' 
              }}>
                <div style={{
                  width: '72px',
                  height: '72px',
                  borderRadius: '50%',
                  backgroundColor: '#22C55E',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  fontSize: '36px',
                }}>
                  👔
                </div>
                <div style={{ textAlign: 'left' }}>
                  <div style={{ fontSize: '28px', fontWeight: 800, color: '#22C55E' }}>Руководитель</div>
                  <div style={{ fontSize: '14px', color: '#666' }}>оценивает работу админа и сервиса</div>
                </div>
              </div>

              <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
                {[
                  { icon: '🚦', title: 'Светофор метрик', desc: 'За 30 секунд понимает, как работает бизнес. Идеально для планёрки.' },
                  { icon: '💰', title: 'Рост выручки', desc: 'Видит прямую связь между коммуникациями и деньгами. +340% ROI.' },
                  { icon: '📈', title: 'Оценка работы администратора', desc: 'Прозрачные метрики показывают вклад админа в работу компании.' },
                  { icon: '⏱️', title: 'Экономия 40 минут каждое утро', desc: 'Не нужно собирать отчёты вручную. Все данные в одном месте.' },
                  { icon: '📊', title: 'Отраслевые решения', desc: 'Адаптированные KPI для E-commerce, финансов, телеком, здравоохранения.' },
                ].map((item, i) => (
                  <div key={i} style={{ display: 'flex', gap: '16px', alignItems: 'flex-start' }}>
                    <div style={{ fontSize: '24px', flexShrink: 0 }}>{item.icon}</div>
                    <div style={{ textAlign: 'left' }}>
                      <div style={{ fontWeight: 700, marginBottom: '4px', color: '#190750', fontSize: '16px' }}>{item.title}</div>
                      <div style={{ fontSize: '14px', color: '#666', lineHeight: 1.5 }}>{item.desc}</div>
                    </div>
                  </div>
                ))}
              </div>

              <div style={{ 
                marginTop: '32px', 
                padding: '20px', 
                backgroundColor: '#22C55E', 
                borderRadius: '16px',
                textAlign: 'center',
              }}>
                <div style={{ color: '#FFF', fontWeight: 700, fontSize: '18px' }}>+340% ROI за 3 месяца</div>
                <div style={{ color: 'rgba(255,255,255,0.8)', fontSize: '14px', marginTop: '4px' }}>Измеримый возврат инвестиций</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* БЛОК: Проверь работу — видеозвонок с коллегой */}
      <section 
        id="video-call"
        data-ym-area="video-call"
        data-ym-name="Блок: Видеозвонок с коллегой"
        style={{ padding: '120px 20px', background: 'linear-gradient(180deg, #FFF 0%, #FAF8FF 100%)' }}>
        <div style={{ maxWidth: '900px', margin: '0 auto', textAlign: 'center' }}>
          
          <div style={{
            display: 'inline-block',
            padding: '14px 32px',
            borderRadius: '60px',
            background: 'linear-gradient(90deg, #3B82F6, #60A5FA)',
            marginBottom: '32px',
            fontSize: '16px',
            color: '#FFF',
            fontWeight: 700,
            boxShadow: '0 8px 24px rgba(59,130,246,0.3)',
          }}>
            📹 Покажите сервис в деле
          </div>
          
          <h2 style={{ 
            fontSize: '44px', 
            fontWeight: 800, 
            marginBottom: '24px', 
            lineHeight: 1.2,
            letterSpacing: '-1px',
            color: '#190750'
          }}>
            Хотите убедиться, что всё работает? <span className="gradient-text">Покажите коллеге!</span>
          </h2>
          
          <p style={{ 
            fontSize: '19px', 
            color: '#666', 
            marginBottom: '20px', 
            lineHeight: 1.8,
            maxWidth: '750px',
            margin: '0 auto 20px',
          }}>
            Лучший способ оценить Контакт.ИИ — увидеть его в работе прямо сейчас. 
            Позвоните коллеге по видео, поделитесь экраном и за 5 минут покажите ключевые возможности. 
            Так вы не только проверите сервис, но и поможете коллеге понять, чем он будет полезен.
          </p>
          
          <p style={{ 
            fontSize: '17px', 
            color: '#999', 
            marginBottom: '48px', 
            lineHeight: 1.6,
          }}>
            💡 Совет: начните со «Светофора метрик» — это занимает 30 секунд и сразу понятно, о чём речь.
          </p>
          
          <button 
            id="video-call-btn"
            data-ym-click-type="button"
            data-ym-name="Кнопка: Начать видеозвонок"
            data-ym-goal-id="start_video_call"
            onClick={() => {
              const modal = document.getElementById('video-call-modal');
              if (modal) modal.style.display = 'flex';
            }}
            style={{
              padding: '20px 48px',
              borderRadius: '50px',
              border: 'none',
              background: 'linear-gradient(135deg, #3B82F6 0%, #60A5FA 100%)',
              color: '#FFF',
              fontWeight: 700,
              fontSize: '18px',
              cursor: 'pointer',
              boxShadow: '0 12px 40px rgba(59,130,246,0.4)',
              display: 'inline-flex',
              alignItems: 'center',
              gap: '12px',
            }}>
            <span style={{ fontSize: '22px' }}>📹</span>
            Начать видеозвонок
          </button>
          
          <div style={{ 
            marginTop: '32px', 
            display: 'flex', 
            justifyContent: 'center', 
            gap: '32px', 
            color: '#999', 
            fontSize: '14px' 
          }}>
            <span>✓ Без установки</span>
            <span>✓ Работает в браузере</span>
            <span>✓ Защищённое соединение</span>
          </div>
        </div>
      </section>

      {/* Модальное окно видеозвонка (имитация Jitsi) */}
      <div 
        id="video-call-modal"
        onClick={(e) => {
          if (e.target.id === 'video-call-modal') {
            (e.target as HTMLElement).style.display = 'none';
          }
        }}
        style={{
          display: 'none',
          position: 'fixed',
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          backgroundColor: 'rgba(0,0,0,0.9)',
          zIndex: 1000,
          alignItems: 'center',
          justifyContent: 'center',
          padding: '20px',
        }}>
        <div 
          onClick={(e) => e.stopPropagation()}
          style={{
            backgroundColor: '#1a1a1a',
            borderRadius: '16px',
            width: '100%',
            maxWidth: '1100px',
            height: '85vh',
            maxHeight: '700px',
            display: 'flex',
            flexDirection: 'column',
            overflow: 'hidden',
            boxShadow: '0 25px 80px rgba(0,0,0,0.5)',
          }}>
          
          {/* Header Jitsi */}
          <div style={{
            padding: '12px 20px',
            backgroundColor: '#2d2d2d',
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            borderBottom: '1px solid #3d3d3d',
          }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
              <div style={{ 
                width: '32px', 
                height: '32px', 
                borderRadius: '8px', 
                background: 'linear-gradient(135deg, #9d4edd, #7b2cbf)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                fontSize: '16px',
                fontWeight: 700,
                color: '#FFF',
              }}>
                K
              </div>
              <div>
                <div style={{ color: '#FFF', fontWeight: 600, fontSize: '15px' }}>Контакт.ИИ — Демо-звонок</div>
                <div style={{ color: '#888', fontSize: '12px' }}>Встреча началась</div>
              </div>
            </div>
            <button 
              onClick={() => {
                const modal = document.getElementById('video-call-modal');
                if (modal) modal.style.display = 'none';
              }}
              style={{
                width: '36px',
                height: '36px',
                borderRadius: '8px',
                border: 'none',
                backgroundColor: '#3d3d3d',
                color: '#FFF',
                fontSize: '20px',
                cursor: 'pointer',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
              }}>
              ✕
            </button>
          </div>
          
          {/* Видео область */}
          <div style={{
            flex: 1,
            display: 'grid',
            gridTemplateColumns: '2fr 1fr',
            gap: '16px',
            padding: '16px',
            backgroundColor: '#1a1a1a',
          }}>
            {/* Основное видео — Вы */}
            <div style={{
              backgroundColor: '#2d2d2d',
              borderRadius: '12px',
              position: 'relative',
              overflow: 'hidden',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
            }}>
              <div style={{
                width: '120px',
                height: '120px',
                borderRadius: '50%',
                background: 'linear-gradient(135deg, #3B82F6, #60A5FA)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                fontSize: '48px',
                color: '#FFF',
                fontWeight: 700,
              }}>
                В
              </div>
              <div style={{
                position: 'absolute',
                bottom: '16px',
                left: '16px',
                padding: '8px 16px',
                backgroundColor: 'rgba(0,0,0,0.7)',
                borderRadius: '8px',
                color: '#FFF',
                fontSize: '14px',
                display: 'flex',
                alignItems: 'center',
                gap: '8px',
              }}>
                <span style={{ 
                  width: '8px', 
                  height: '8px', 
                  borderRadius: '50%', 
                  backgroundColor: '#22C55E',
                }}></span>
                Вы
              </div>
              {/* Плашка демонстрации экрана */}
              <div style={{
                position: 'absolute',
                top: '16px',
                right: '16px',
                padding: '8px 16px',
                backgroundColor: 'rgba(59,130,246,0.9)',
                borderRadius: '8px',
                color: '#FFF',
                fontSize: '13px',
                fontWeight: 600,
                display: 'flex',
                alignItems: 'center',
                gap: '8px',
              }}>
                <span>🖥️</span> Демонстрация экрана
              </div>
            </div>
            
            {/* Мини-видео — Коллега */}
            <div style={{
              display: 'flex',
              flexDirection: 'column',
              gap: '16px',
            }}>
              <div style={{
                backgroundColor: '#2d2d2d',
                borderRadius: '12px',
                flex: 1,
                position: 'relative',
                overflow: 'hidden',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
              }}>
                <div style={{
                  width: '80px',
                  height: '80px',
                  borderRadius: '50%',
                  background: 'linear-gradient(135deg, #22C55E, #4ADE80)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  fontSize: '32px',
                  color: '#FFF',
                  fontWeight: 700,
                }}>
                  К
                </div>
                <div style={{
                  position: 'absolute',
                  bottom: '12px',
                  left: '12px',
                  padding: '6px 12px',
                  backgroundColor: 'rgba(0,0,0,0.7)',
                  borderRadius: '6px',
                  color: '#FFF',
                  fontSize: '12px',
                }}>
                  Коллега
                </div>
              </div>
              
              {/* Информационная панель */}
              <div style={{
                backgroundColor: '#2d2d2d',
                borderRadius: '12px',
                padding: '20px',
                display: 'flex',
                flexDirection: 'column',
                gap: '12px',
              }}>
                <div style={{ color: '#FFF', fontWeight: 600, fontSize: '14px' }}>
                  💡 Подсказка
                </div>
                <div style={{ color: '#aaa', fontSize: '13px', lineHeight: 1.5 }}>
                  Расскажите о «Светофоре метрик» — коллега сразу поймёт ценность сервиса за 30 секунд.
                </div>
                <div style={{ 
                  display: 'flex', 
                  gap: '8px', 
                  marginTop: '8px',
                }}>
                  <span style={{ 
                    padding: '4px 10px', 
                    backgroundColor: 'rgba(118,67,215,0.2)', 
                    borderRadius: '4px',
                    color: '#a78bfa',
                    fontSize: '11px',
                  }}>Светофор</span>
                  <span style={{ 
                    padding: '4px 10px', 
                    backgroundColor: 'rgba(34,197,94,0.2)', 
                    borderRadius: '4px',
                    color: '#4ade80',
                    fontSize: '11px',
                  }}>ROI +340%</span>
                </div>
              </div>
            </div>
          </div>
          
          {/* Панель управления (как в Jitsi) */}
          <div style={{
            padding: '16px 24px',
            backgroundColor: '#2d2d2d',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            gap: '12px',
            borderTop: '1px solid #3d3d3d',
          }}>
            {/* Микрофон */}
            <button style={{
              width: '52px',
              height: '52px',
              borderRadius: '50%',
              border: 'none',
              backgroundColor: '#4d4d4d',
              color: '#FFF',
              fontSize: '22px',
              cursor: 'pointer',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
            }}>
              🎤
            </button>
            
            {/* Камера */}
            <button style={{
              width: '52px',
              height: '52px',
              borderRadius: '50%',
              border: 'none',
              backgroundColor: '#4d4d4d',
              color: '#FFF',
              fontSize: '22px',
              cursor: 'pointer',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
            }}>
              📹
            </button>
            
            {/* Демонстрация экрана */}
            <button style={{
              width: '52px',
              height: '52px',
              borderRadius: '50%',
              border: 'none',
              backgroundColor: '#3B82F6',
              color: '#FFF',
              fontSize: '22px',
              cursor: 'pointer',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              boxShadow: '0 4px 16px rgba(59,130,246,0.4)',
            }}>
              🖥️
            </button>
            
            {/* Чат */}
            <button style={{
              width: '52px',
              height: '52px',
              borderRadius: '50%',
              border: 'none',
              backgroundColor: '#4d4d4d',
              color: '#FFF',
              fontSize: '22px',
              cursor: 'pointer',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
            }}>
              💬
            </button>
            
            {/* Разделитель */}
            <div style={{ width: '1px', height: '40px', backgroundColor: '#3d3d3d', margin: '0 12px' }}></div>
            
            {/* Завершить звонок */}
            <button 
              onClick={() => {
                const modal = document.getElementById('video-call-modal');
                if (modal) modal.style.display = 'none';
              }}
              style={{
                width: '52px',
                height: '52px',
                borderRadius: '50%',
                border: 'none',
                backgroundColor: '#EF4444',
                color: '#FFF',
                fontSize: '22px',
                cursor: 'pointer',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                boxShadow: '0 4px 16px rgba(239,68,68,0.4)',
              }}>
              📞
            </button>
          </div>
        </div>
      </div>

      {/* БЛОК: Ценность для других сотрудников */}
      <section 
        id="employees"
        data-ym-area="employees"
        data-ym-name="Блок: Ценность для сотрудников"
        style={{ padding: '120px 20px', backgroundColor: '#FAF8FF' }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
          <div style={{ textAlign: 'center', marginBottom: '60px' }}>
            <div style={{
              display: 'inline-block',
              padding: '12px 28px',
              borderRadius: '50px',
              backgroundColor: 'rgba(59,130,246,0.1)',
              marginBottom: '24px',
              fontSize: '15px',
              color: '#3B82F6',
              fontWeight: 700,
            }}>
              🎧 Для сотрудников контакт-центра
            </div>
            <h2 style={{ fontSize: '48px', fontWeight: 800, marginBottom: '20px', letterSpacing: '-1px' }}>
              Как сервис <span className="gradient-text">облегчит работу</span> вашим сотрудникам
            </h2>
            <p style={{ fontSize: '18px', color: '#666', maxWidth: '600px', margin: '0 auto' }}>
              Операторы, менеджеры и специалисты получат инструменты для эффективной работы
            </p>
          </div>

          {/* Блок ИИ-агента — персонифицированное сообщение */}
          <div style={{
            maxWidth: '800px',
            margin: '0 auto 80px',
            backgroundColor: '#FFF',
            borderRadius: '24px',
            padding: '32px',
            boxShadow: '0 8px 40px rgba(118,67,215,0.1)',
            border: '2px solid rgba(118,67,215,0.15)',
          }}>
            {/* Header с аватаром ИИ */}
            <div style={{ 
              display: 'flex', 
              alignItems: 'center', 
              gap: '16px', 
              marginBottom: '24px',
              paddingBottom: '20px',
              borderBottom: '1px solid rgba(118,67,215,0.1)',
            }}>
              <div style={{
                width: '56px',
                height: '56px',
                borderRadius: '50%',
                background: 'linear-gradient(135deg, #7643d7, #9b6dff)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                fontSize: '24px',
                boxShadow: '0 4px 16px rgba(118,67,215,0.3)',
              }}>
                🤖
              </div>
              <div>
                <div style={{ fontWeight: 700, color: '#190750', fontSize: '16px' }}>ИИ-агент Контакт.ИИ</div>
                <div style={{ color: '#22C55E', fontSize: '13px', fontWeight: 600, display: 'flex', alignItems: 'center', gap: '6px' }}>
                  <span style={{ width: '8px', height: '8px', borderRadius: '50%', backgroundColor: '#22C55E' }}></span>
                  Онлайн • Анализирует вашу работу
                </div>
              </div>
            </div>
            
            {/* Заголовок сообщения */}
            <div style={{ 
              fontSize: '20px', 
              fontWeight: 700, 
              color: '#190750', 
              marginBottom: '24px',
              lineHeight: 1.4,
            }}>
              Привет, Андрей! 👋 Я заметил, что вы столкнулись с несколькими задачами, занявшими ваше время:
            </div>
            
            {/* Виджеты с инсайтами */}
            <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
              
              {/* Виджет 1: Интеграция */}
              <div style={{
                backgroundColor: '#FAF8FF',
                borderRadius: '16px',
                padding: '20px 24px',
                border: '1px solid rgba(118,67,215,0.1)',
              }}>
                <div style={{ display: 'flex', gap: '16px', alignItems: 'flex-start' }}>
                  <div style={{
                    width: '44px',
                    height: '44px',
                    borderRadius: '12px',
                    backgroundColor: 'rgba(239,68,68,0.1)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    fontSize: '22px',
                    flexShrink: 0,
                  }}>
                    ⏱️
                  </div>
                  <div style={{ flex: 1 }}>
                    <div style={{ color: '#666', fontSize: '14px', marginBottom: '8px', lineHeight: 1.6 }}>
                      Вы настраивали интеграцию CRM <strong style={{ color: '#EF4444' }}>в течение двух дней</strong> и привязали к Битрикс24 <strong style={{ color: '#EF4444' }}>трёх из 200 сотрудников</strong>.
                    </div>
                    <div style={{ 
                      color: '#22C55E', 
                      fontWeight: 600, 
                      fontSize: '15px',
                      padding: '12px 16px',
                      backgroundColor: 'rgba(34,197,94,0.1)',
                      borderRadius: '10px',
                      display: 'inline-flex',
                      alignItems: 'center',
                      gap: '8px',
                    }}>
                      <span>✨</span> Со мной вы сможете настроить работу <strong>всех сотрудников</strong> всего за <strong>15 минут</strong>
                    </div>
                  </div>
                </div>
              </div>
              
              {/* Виджет 2: Неактивные сотрудники */}
              <div style={{
                backgroundColor: '#FAF8FF',
                borderRadius: '16px',
                padding: '20px 24px',
                border: '1px solid rgba(118,67,215,0.1)',
              }}>
                <div style={{ display: 'flex', gap: '16px', alignItems: 'flex-start' }}>
                  <div style={{
                    width: '44px',
                    height: '44px',
                    borderRadius: '12px',
                    backgroundColor: 'rgba(255,165,0,0.1)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    fontSize: '22px',
                    flexShrink: 0,
                  }}>
                    ⚠️
                  </div>
                  <div style={{ flex: 1 }}>
                    <div style={{ color: '#666', fontSize: '14px', marginBottom: '12px', lineHeight: 1.6 }}>
                      Я заметил, что <strong style={{ color: '#FF8C00' }}>10 сотрудников не проявляли активность уже 29 дней</strong>, вот их номера:
                    </div>
                    <div style={{ 
                      display: 'flex', 
                      flexWrap: 'wrap', 
                      gap: '8px', 
                      marginBottom: '12px',
                    }}>
                      {['+7 123 456-78-90', '+7 098 756-74-33', '+7 356 473-46-77', 'ещё 7...'].map((phone, i) => (
                        <span key={i} style={{
                          padding: '6px 12px',
                          backgroundColor: 'rgba(255,165,0,0.1)',
                          borderRadius: '6px',
                          fontSize: '13px',
                          color: '#190750',
                          fontWeight: 500,
                        }}>
                          {phone}
                        </span>
                      ))}
                    </div>
                    <button style={{
                      padding: '10px 20px',
                      backgroundColor: '#7643d7',
                      color: '#FFF',
                      border: 'none',
                      borderRadius: '10px',
                      fontSize: '14px',
                      fontWeight: 600,
                      cursor: 'pointer',
                      display: 'inline-flex',
                      alignItems: 'center',
                      gap: '8px',
                    }}>
                      <span>📊</span> Проверить их статистику вызовов
                    </button>
                  </div>
                </div>
              </div>
              
            </div>
          </div>

          {/* Карточки возможностей для сотрудников */}
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '24px' }}>
            
            {/* Быстрый доступ к рабочему месту */}
            <div className="hover-lift" style={{
              backgroundColor: '#FFF',
              borderRadius: '24px',
              padding: '40px 32px',
              border: '1px solid rgba(118,67,215,0.1)',
              textAlign: 'center',
            }}>
              <div style={{
                width: '80px',
                height: '80px',
                borderRadius: '50%',
                backgroundColor: 'rgba(118,67,215,0.1)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                fontSize: '40px',
                margin: '0 auto 24px',
              }}>
                ⚡
              </div>
              <h3 style={{ fontSize: '22px', fontWeight: 800, marginBottom: '12px', color: '#190750' }}>
                Быстрый доступ к рабочему месту
              </h3>
              <p style={{ fontSize: '15px', color: '#666', lineHeight: 1.7, marginBottom: '20px' }}>
                Один клик — и сотрудник на нужном сервисе. 
                Не нужно искать ссылки, логины, пароли. 
                Всё под рукой в едином интерфейсе.
              </p>
              <div style={{
                padding: '12px 20px',
                backgroundColor: 'rgba(118,67,215,0.1)',
                borderRadius: '50px',
                fontSize: '14px',
                fontWeight: 600,
                color: '#7643d7',
              }}>
                1 клик вместо 5 минут поиска
              </div>
            </div>

            {/* Планировщик встреч и видеозвонков */}
            <div className="hover-lift" style={{
              backgroundColor: '#FFF',
              borderRadius: '24px',
              padding: '40px 32px',
              border: '1px solid rgba(34,197,94,0.2)',
              textAlign: 'center',
            }}>
              <div style={{
                width: '80px',
                height: '80px',
                borderRadius: '50%',
                backgroundColor: 'rgba(34,197,94,0.1)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                fontSize: '40px',
                margin: '0 auto 24px',
              }}>
                📅
              </div>
              <h3 style={{ fontSize: '22px', fontWeight: 800, marginBottom: '12px', color: '#190750' }}>
                Планировщик встреч и видеозвонков
              </h3>
              <p style={{ fontSize: '15px', color: '#666', lineHeight: 1.7, marginBottom: '20px' }}>
                Назначайте встречи, запускайте видеозвонки прямо из интерфейса. 
                Календарь синхронизирован с CRM и телефонной книгой.
              </p>
              <div style={{
                padding: '12px 20px',
                backgroundColor: 'rgba(34,197,94,0.1)',
                borderRadius: '50px',
                fontSize: '14px',
                fontWeight: 600,
                color: '#22C55E',
              }}>
                Видеозвонки в один клик
              </div>
            </div>

            {/* Омниканальность */}
            <div className="hover-lift" style={{
              backgroundColor: '#FFF',
              borderRadius: '24px',
              padding: '40px 32px',
              border: '1px solid rgba(59,130,246,0.2)',
              textAlign: 'center',
            }}>
              <div style={{
                width: '80px',
                height: '80px',
                borderRadius: '50%',
                backgroundColor: 'rgba(59,130,246,0.1)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                fontSize: '40px',
                margin: '0 auto 24px',
              }}>
                🌐
              </div>
              <h3 style={{ fontSize: '22px', fontWeight: 800, marginBottom: '12px', color: '#190750' }}>
                Омниканальность
              </h3>
              <p style={{ fontSize: '15px', color: '#666', lineHeight: 1.7, marginBottom: '20px' }}>
                Телефон, чаты, почта, соцсети — всё в одном окне. 
                Сотрудник видит полную историю клиента, 
                даже если тот писал в чат, а потом позвонил.
              </p>
              <div style={{
                padding: '12px 20px',
                backgroundColor: 'rgba(59,130,246,0.1)',
                borderRadius: '50px',
                fontSize: '14px',
                fontWeight: 600,
                color: '#3B82F6',
              }}>
                Все каналы в одном месте
              </div>
            </div>

            {/* Статистика */}
            <div className="hover-lift" style={{
              backgroundColor: '#FFF',
              borderRadius: '24px',
              padding: '40px 32px',
              border: '1px solid rgba(255,165,0,0.2)',
              textAlign: 'center',
            }}>
              <div style={{
                width: '80px',
                height: '80px',
                borderRadius: '50%',
                backgroundColor: 'rgba(255,165,0,0.1)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                fontSize: '40px',
                margin: '0 auto 24px',
              }}>
                📊
              </div>
              <h3 style={{ fontSize: '22px', fontWeight: 800, marginBottom: '12px', color: '#190750' }}>
                Статистика
              </h3>
              <p style={{ fontSize: '15px', color: '#666', lineHeight: 1.7, marginBottom: '20px' }}>
                Личный дашборд с KPI: количество звонков, конверсия, 
                рейтинг в команде. Сотрудник видит свой вклад 
                в выручку и понимает, к чему стремиться.
              </p>
              <div style={{
                padding: '12px 20px',
                backgroundColor: 'rgba(255,165,0,0.1)',
                borderRadius: '50px',
                fontSize: '14px',
                fontWeight: 600,
                color: '#FF8C00',
              }}>
                Личный вклад в выручку
              </div>
            </div>

            {/* Аналитика */}
            <div className="hover-lift" style={{
              backgroundColor: '#FFF',
              borderRadius: '24px',
              padding: '40px 32px',
              border: '1px solid rgba(239,68,68,0.2)',
              textAlign: 'center',
            }}>
              <div style={{
                width: '80px',
                height: '80px',
                borderRadius: '50%',
                backgroundColor: 'rgba(239,68,68,0.1)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                fontSize: '40px',
                margin: '0 auto 24px',
              }}>
                🧠
              </div>
              <h3 style={{ fontSize: '22px', fontWeight: 800, marginBottom: '12px', color: '#190750' }}>
                ИИ-аналитика
              </h3>
              <p style={{ fontSize: '15px', color: '#666', lineHeight: 1.7, marginBottom: '20px' }}>
                ИИ подсказывает, где клиент был готов купить, 
                но сделка не состоялась. Рекомендации по улучшению 
                скриптов и работе с возражениями.
              </p>
              <div style={{
                padding: '12px 20px',
                backgroundColor: 'rgba(239,68,68,0.1)',
                borderRadius: '50px',
                fontSize: '14px',
                fontWeight: 600,
                color: '#EF4444',
              }}>
                Умные подсказки ИИ
              </div>
            </div>

            {/* Геймификация */}
            <div className="hover-lift" style={{
              backgroundColor: '#FFF',
              borderRadius: '24px',
              padding: '40px 32px',
              border: '1px solid rgba(118,67,215,0.2)',
              textAlign: 'center',
            }}>
              <div style={{
                width: '80px',
                height: '80px',
                borderRadius: '50%',
                backgroundColor: 'rgba(118,67,215,0.1)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                fontSize: '40px',
                margin: '0 auto 24px',
              }}>
                🏆
              </div>
              <h3 style={{ fontSize: '22px', fontWeight: 800, marginBottom: '12px', color: '#190750' }}>
                Геймификация и рейтинги
              </h3>
              <p style={{ fontSize: '15px', color: '#666', lineHeight: 1.7, marginBottom: '20px' }}>
                Соревнования между сотрудниками, рейтинги продаж, 
                награды за достижения. Мотивация через 
                визуализацию прогресса и признание.
              </p>
              <div style={{
                padding: '12px 20px',
                backgroundColor: 'rgba(118,67,215,0.1)',
                borderRadius: '50px',
                fontSize: '14px',
                fontWeight: 600,
                color: '#7643d7',
              }}>
                +18% производительность
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* БЛОК: Примеры виджетов */}
      <section 
        id="widgets"
        data-ym-area="widgets"
        data-ym-name="Блок: Виджеты"
        style={{ padding: '120px 20px', backgroundColor: '#FFF' }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
          <div style={{ textAlign: 'center', marginBottom: '60px' }}>
            <div style={{
              display: 'inline-block',
              padding: '12px 28px',
              borderRadius: '50px',
              backgroundColor: 'rgba(118,67,215,0.1)',
              marginBottom: '24px',
              fontSize: '15px',
              color: '#7643d7',
              fontWeight: 700,
            }}>
              🧩 Витрина виджетов
            </div>
            <h2 style={{ fontSize: '48px', fontWeight: 800, marginBottom: '20px', letterSpacing: '-1px' }}>
              Готовые <span className="gradient-text">виджеты</span> для вашего бизнеса
            </h2>
            <p style={{ fontSize: '18px', color: '#666', maxWidth: '600px', margin: '0 auto' }}>
              Выберите нужные виджеты из каталога и настройте дашборд под свои задачи
            </p>
          </div>

          {/* Изображение виджетов */}
          <div style={{
            maxWidth: '1000px',
            margin: '0 auto 60px',
            borderRadius: '24px',
            overflow: 'hidden',
            boxShadow: '0 20px 60px rgba(118,67,215,0.15)',
            border: '1px solid rgba(118,67,215,0.1)',
          }}>
            <img 
              src="/contact_ai_widgets.png" 
              alt="Примеры виджетов Контакт.ИИ — рост выручки, конверсия, рейтинг команды, светофор, планировщик, омниканальность"
              style={{
                width: '100%',
                height: 'auto',
                display: 'block',
              }}
            />
          </div>

          {/* Описание виджетов */}
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '24px' }}>
            {[
              { icon: '🚦', title: 'Светофор метрик', desc: 'Статус бизнеса за 30 секунд. Зелёный — всё хорошо, жёлтый — внимание, красный — проблема.' },
              { icon: '📈', title: 'Рост выручки', desc: 'График роста выручки по дням, неделям, месяцам. Сравнение с планом и прошлым периодом.' },
              { icon: '🎯', title: 'Конверсия', desc: 'Круговая диаграмма конверсии на каждом этапе воронки. Где теряются клиенты.' },
              { icon: '👥', title: 'Рейтинг команды', desc: 'Топ-продавцы, их KPI и вклад в выручку. Соревновательный элемент.' },
              { icon: '📅', title: 'Планировщик', desc: 'Календарь встреч, видеозвонков, задач. Синхронизация с CRM.' },
              { icon: '🌐', title: 'Омниканальность', desc: 'Распределение контактов по каналам. Эффективность каждого канала.' },
            ].map((w, i) => (
              <div key={i} className="hover-lift" style={{
                padding: '24px',
                backgroundColor: '#FAF8FF',
                borderRadius: '16px',
                display: 'flex',
                gap: '16px',
                alignItems: 'flex-start',
              }}>
                <div style={{ fontSize: '32px', flexShrink: 0 }}>{w.icon}</div>
                <div>
                  <div style={{ fontWeight: 700, marginBottom: '8px', color: '#190750', fontSize: '16px' }}>{w.title}</div>
                  <div style={{ fontSize: '14px', color: '#666', lineHeight: 1.6 }}>{w.desc}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Прозрачность расчётов */}
      <section 
        id="transparency"
        data-ym-area="transparency"
        data-ym-name="Блок: Прозрачность расчётов"
        style={{ padding: '120px 20px', backgroundColor: '#FAF8FF' }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
          <div style={{ textAlign: 'center', marginBottom: '60px' }}>
            <div style={{
              display: 'inline-block',
              padding: '14px 32px',
              borderRadius: '50px',
              backgroundColor: 'rgba(34,197,94,0.1)',
              marginBottom: '24px',
              fontSize: '16px',
              color: '#22C55E',
              fontWeight: 700,
            }}>
              🔍 Полная прозрачность — никакого «чёрного ящика»
            </div>
            <h2 style={{ fontSize: '48px', fontWeight: 800, marginBottom: '20px', lineHeight: 1.2, letterSpacing: '-1px', color: '#190750' }}>
              Как получились эти <span className="gradient-text">цифры?</span>
            </h2>
            <p style={{ fontSize: '20px', color: '#666', maxWidth: '700px', margin: '0 auto', lineHeight: 1.7 }}>
              Руководители хотят понимать, откуда берутся метрики. 
              Администраторы хотят видеть техническую сторону. 
              Кликните на метрику — увидите формулу, источники и события.
            </p>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '40px' }}>
            {/* Для руководителя */}
            <div style={{ backgroundColor: '#FFF', borderRadius: '24px', padding: '40px', border: '1px solid rgba(34,197,94,0.2)' }}>
              <div style={{ fontSize: '18px', fontWeight: 700, color: '#22C55E', marginBottom: '24px' }}>
                👔 Для руководителя
              </div>
              <div style={{ padding: '24px', backgroundColor: '#FAF8FF', borderRadius: '16px', marginBottom: '24px', border: '1px dashed rgba(118,67,215,0.3)' }}>
                <div style={{ fontSize: '14px', color: '#999', marginBottom: '12px' }}>Метрика: Конверсия продаж</div>
                <div style={{ display: 'flex', alignItems: 'baseline', gap: '16px' }}>
                  <span style={{ fontSize: '48px', fontWeight: 800, color: '#22C55E' }}>18.4%</span>
                  <span style={{ color: '#22C55E', fontWeight: 600, fontSize: '16px' }}>+3.2% к прошлому периоду</span>
                </div>
              </div>
              <div style={{ marginBottom: '20px' }}>
                <div style={{ fontWeight: 700, marginBottom: '12px', color: '#190750', fontSize: '15px' }}>Формула:</div>
                <div style={{ padding: '16px', backgroundColor: '#190750', borderRadius: '12px', fontFamily: 'monospace', fontSize: '14px', color: '#FFF' }}>
                  Конверсия = (Продажи / Контакты) × 100%
                </div>
              </div>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '8px', fontSize: '14px' }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', padding: '12px', backgroundColor: '#FAF8FF', borderRadius: '8px' }}>
                  <span style={{ color: '#666' }}>Всего контактов</span>
                  <span style={{ fontWeight: 700, color: '#190750' }}>1,247</span>
                </div>
                <div style={{ display: 'flex', justifyContent: 'space-between', padding: '12px', backgroundColor: '#FAF8FF', borderRadius: '8px' }}>
                  <span style={{ color: '#666' }}>Успешных продаж</span>
                  <span style={{ fontWeight: 700, color: '#22C55E' }}>229</span>
                </div>
              </div>
            </div>

            {/* Для администратора */}
            <div style={{ backgroundColor: '#FFF', borderRadius: '24px', padding: '40px', border: '1px solid rgba(59,130,246,0.2)' }}>
              <div style={{ fontSize: '18px', fontWeight: 700, color: '#3B82F6', marginBottom: '24px' }}>
                🛠️ Для администратора
              </div>
              <div style={{ marginBottom: '24px' }}>
                <div style={{ fontWeight: 700, marginBottom: '16px', color: '#190750', fontSize: '15px' }}>Источники данных:</div>
                <div style={{ display: 'flex', flexWrap: 'wrap', gap: '12px' }}>
                  {['AmoCRM API', 'Asterisk AMI', 'Битрикс24 REST', 'SMTP'].map((src, i) => (
                    <span key={i} style={{ padding: '10px 16px', backgroundColor: '#FAF8FF', borderRadius: '8px', fontSize: '14px', fontWeight: 600, color: '#190750', border: '1px solid rgba(118,67,215,0.1)' }}>
                      {src}
                    </span>
                  ))}
                </div>
              </div>
              <div style={{ marginBottom: '24px' }}>
                <div style={{ fontWeight: 700, marginBottom: '12px', color: '#190750', fontSize: '15px' }}>Технические детали:</div>
                <div style={{ display: 'flex', flexDirection: 'column', gap: '8px', fontSize: '14px', color: '#666' }}>
                  <div style={{ display: 'flex', gap: '12px', alignItems: 'flex-start' }}>
                    <span style={{ color: '#3B82F6' }}>📊</span>
                    <span>Синхронизация каждые 5 минут</span>
                  </div>
                  <div style={{ display: 'flex', gap: '12px', alignItems: 'flex-start' }}>
                    <span style={{ color: '#3B82F6' }}>🔗</span>
                    <span>API-токены с ограниченными правами</span>
                  </div>
                  <div style={{ display: 'flex', gap: '12px', alignItems: 'flex-start' }}>
                    <span style={{ color: '#3B82F6' }}>📋</span>
                    <span>Список событий с ID и timestamp</span>
                  </div>
                  <div style={{ display: 'flex', gap: '12px', alignItems: 'flex-start' }}>
                    <span style={{ color: '#3B82F6' }}>🧮</span>
                    <span>Открытые формулы расчёта</span>
                  </div>
                </div>
              </div>
              <div style={{ padding: '16px', backgroundColor: '#3B82F6', borderRadius: '12px', textAlign: 'center' }}>
                <div style={{ color: '#FFF', fontSize: '14px' }}>
                  Настройка за 5 минут • Без программистов
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Интеграции */}
      <section 
        id="integrations"
        data-ym-area="integrations"
        data-ym-name="Блок: Интеграции"
        style={{ padding: '120px 20px', backgroundColor: '#FFF' }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto', textAlign: 'center' }}>
          <h2 style={{ fontSize: '48px', fontWeight: 800, marginBottom: '20px', letterSpacing: '-1px' }}>
            Работает с <span className="gradient-text">вашими системами</span>
          </h2>
          <p style={{ fontSize: '18px', color: '#666', marginBottom: '60px', maxWidth: '600px', margin: '0 auto 60px' }}>
            Интеграции из коробки. Настройка за 5 минут без программистов.
          </p>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: '24px' }}>
            {[
              { icon: '📞', title: 'Asterisk', desc: 'SIP, AMI, ARI' },
              { icon: '📱', title: 'FreePBX', desc: 'Модуль интеграции' },
              { icon: '💼', title: 'AmoCRM', desc: 'API + Webhooks' },
              { icon: '📋', title: 'Битрикс24', desc: 'REST API' },
            ].map((sys, i) => (
              <div key={i} className="hover-lift" style={{ backgroundColor: '#FAF8FF', borderRadius: '20px', padding: '32px', border: '1px solid rgba(118,67,215,0.1)' }}>
                <div style={{ fontSize: '48px', marginBottom: '16px' }}>{sys.icon}</div>
                <div style={{ fontWeight: 700, marginBottom: '8px', color: '#190750', fontSize: '18px' }}>{sys.title}</div>
                <div style={{ fontSize: '14px', color: '#999' }}>{sys.desc}</div>
              </div>
            ))}
          </div>

          <div style={{ marginTop: '40px', padding: '20px', backgroundColor: '#FAF8FF', borderRadius: '16px', border: '1px solid rgba(118,67,215,0.1)', display: 'inline-block' }}>
            <span style={{ color: '#666', fontSize: '15px' }}>А также: </span>
            <span style={{ color: '#7643d7', fontWeight: 600, fontSize: '15px' }}>Mango, UIS, Telphin, Zadarma, RetailCRM, Salesforce</span>
          </div>
        </div>
      </section>

      {/* Игра - виральный элемент */}
      <section 
        id="game"
        data-ym-area="game"
        data-ym-name="Блок: Игра Мёдом намазано"
        style={{ padding: '120px 20px', background: 'linear-gradient(180deg, #FFF8E7 0%, #FFF 100%)' }}>
        <div style={{ maxWidth: '1000px', margin: '0 auto' }}>
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '60px', alignItems: 'center' }}>
            <div>
              <div style={{
                display: 'inline-block',
                padding: '10px 24px',
                borderRadius: '50px',
                backgroundColor: 'rgba(255,165,0,0.15)',
                marginBottom: '24px',
                fontSize: '14px',
                color: '#FF8C00',
                fontWeight: 600,
              }}>
                🎮 Такого нет ни у кого
              </div>
              <h2 style={{ fontSize: '44px', fontWeight: 800, marginBottom: '24px', lineHeight: 1.2, letterSpacing: '-1px', color: '#190750' }}>
                Игра <span style={{ color: '#FF8C00' }}>«Мёдом намазано»</span>
              </h2>
              <p style={{ fontSize: '18px', color: '#666', marginBottom: '32px', lineHeight: 1.7 }}>
                Уникальный элемент вовлечения. Выиграйте месяц бесплатного использования Контакт.ИИ! 
                Поделитесь с коллегами — пусть тоже попробуют.
              </p>
              <a 
                href="https://bee-call-center.vercel.app"
                target="_blank"
                rel="noopener noreferrer"
                id="game-cta"
                data-ym-click-type="button"
                data-ym-name="Кнопка: Открыть игру"
                data-ym-goal-id="open_game"
                style={{
                  display: 'inline-block',
                  padding: '18px 40px',
                  borderRadius: '50px',
                  border: 'none',
                  background: 'linear-gradient(90deg, #FFD700, #FFA500)',
                  color: '#190750',
                  fontWeight: 700,
                  fontSize: '17px',
                  cursor: 'pointer',
                  boxShadow: '0 8px 32px rgba(255,165,0,0.3)',
                  textDecoration: 'none',
              }}>
                Открыть игру!
              </a>
            </div>

            <div style={{
              padding: '48px',
              borderRadius: '32px',
              background: 'linear-gradient(180deg, rgba(255,165,0,0.08) 0%, #FFF 100%)',
              border: '2px solid rgba(255,165,0,0.2)',
              textAlign: 'center',
            }}>
              <div className="animate-float" style={{
                width: '120px',
                height: '120px',
                borderRadius: '50%',
                background: 'linear-gradient(135deg, #FFD700 0%, #FFA500 50%, #FF8C00 100%)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                fontSize: '60px',
                margin: '0 auto 32px',
                boxShadow: '0 12px 40px rgba(255,165,0,0.3)',
              }}>
                🍯
              </div>
              <h3 style={{ fontSize: '28px', fontWeight: 800, marginBottom: '16px', color: '#190750' }}>
                Мёдом намазано
              </h3>
              <div style={{ padding: '20px', backgroundColor: '#190750', borderRadius: '16px', marginBottom: '20px' }}>
                <div style={{ fontSize: '14px', color: 'rgba(255,255,255,0.7)', marginBottom: '8px' }}>Главный приз</div>
                <div style={{ fontSize: '36px', fontWeight: 800, color: '#FFD700' }}>30 дней</div>
                <div style={{ fontSize: '15px', color: '#FFF' }}>Контакт.ИИ бесплатно</div>
              </div>
              <div style={{ display: 'flex', justifyContent: 'center', gap: '10px', flexWrap: 'wrap', fontSize: '13px' }}>
                <span style={{ padding: '8px 16px', borderRadius: '50px', backgroundColor: 'rgba(34,197,94,0.1)', border: '1px solid rgba(34,197,94,0.2)', color: '#22C55E', fontWeight: 600 }}>✓ Бесплатно</span>
                <span style={{ padding: '8px 16px', borderRadius: '50px', backgroundColor: 'rgba(59,130,246,0.1)', border: '1px solid rgba(59,130,246,0.2)', color: '#3B82F6', fontWeight: 600 }}>🎮 Увлекательно</span>
                <span style={{ padding: '8px 16px', borderRadius: '50px', backgroundColor: 'rgba(255,165,0,0.1)', border: '1px solid rgba(255,165,0,0.2)', color: '#FF8C00', fontWeight: 600 }}>🏆 Призы</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA - Пригласить коллегу */}
      <section 
        id="cta-section"
        data-ym-area="cta"
        data-ym-name="Блок: Пригласить коллегу"
        style={{ padding: '120px 20px', textAlign: 'center', backgroundColor: '#190750' }}>
        <h2 style={{ fontSize: '48px', fontWeight: 800, marginBottom: '24px', color: '#FFF' }}>
          Пригласите коллегу в КонтактИИ
        </h2>
        <p style={{ fontSize: '20px', color: 'rgba(255,255,255,0.7)', marginBottom: '20px', maxWidth: '600px', margin: '0 auto 20px' }}>
          Пригласите руководителя или оператора — они увидят ценность сервиса
        </p>
        <p style={{ fontSize: '16px', color: 'rgba(255,255,255,0.6)', marginBottom: '48px', maxWidth: '500px', margin: '0 auto 48px' }}>
          Настройка занимает 2 минуты. Коллега получит приглашение с готовым рабочим местом.
        </p>
        
        {/* Кнопка открытия формы */}
        <button 
          id="cta-main-button"
          data-ym-click-type="button"
          data-ym-name="Кнопка: Пригласить коллегу в КонтактИИ"
          data-ym-goal-id="invite_colleague_main"
          onClick={() => {
            const modal = document.getElementById('workspace-modal');
            if (modal) modal.style.display = 'flex';
          }}
          className="btn-primary animate-glow" 
          style={{
            padding: '22px 56px',
            borderRadius: '50px',
            border: 'none',
            backgroundColor: '#22C55E',
            color: '#FFF',
            fontWeight: 700,
            fontSize: '18px',
            cursor: 'pointer',
            boxShadow: '0 8px 40px rgba(34,197,94,0.5)',
          }}>
          Пригласить коллегу в КонтактИИ
        </button>
        
        <div style={{ marginTop: '24px', display: 'flex', justifyContent: 'center', gap: '40px', color: 'rgba(255,255,255,0.5)', fontSize: '14px' }}>
          <span>✓ Готовые шаблоны</span>
          <span>✓ Приглашение по SMS/Email</span>
          <span>✓ 14 дней бесплатно</span>
        </div>
      </section>

      {/* Модальное окно создания рабочего места */}
      <div 
        id="workspace-modal"
        onClick={(e) => {
          if (e.target.id === 'workspace-modal') {
            (e.target as HTMLElement).style.display = 'none';
          }
        }}
        style={{
          display: 'none',
          position: 'fixed',
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          backgroundColor: 'rgba(0,0,0,0.7)',
          zIndex: 1000,
          alignItems: 'center',
          justifyContent: 'center',
          padding: '20px',
        }}>
        <div 
          onClick={(e) => e.stopPropagation()}
          style={{
            backgroundColor: '#FFF',
            borderRadius: '32px',
            padding: '48px',
            maxWidth: '520px',
            width: '100%',
            maxHeight: '90vh',
            overflowY: 'auto',
          }}>
          {/* Заголовок модального окна */}
          <div style={{ textAlign: 'center', marginBottom: '32px' }}>
            <div style={{
              width: '72px',
              height: '72px',
              borderRadius: '50%',
              backgroundColor: 'rgba(34,197,94,0.1)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              fontSize: '36px',
              margin: '0 auto 20px',
            }}>
              👤
            </div>
            <h3 style={{ fontSize: '28px', fontWeight: 800, color: '#190750', marginBottom: '8px' }}>
              Создать рабочее место
            </h3>
            <p style={{ fontSize: '15px', color: '#666' }}>
              Выберите шаблон и укажите контакт коллеги
            </p>
          </div>

          {/* Выбор шаблона */}
          <div style={{ marginBottom: '28px' }}>
            <div style={{ fontSize: '14px', fontWeight: 700, color: '#190750', marginBottom: '16px' }}>
              Шаблон рабочего места
            </div>
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '16px' }}>
              {/* Руководитель */}
              <div 
                onClick={() => {
                  const cards = document.querySelectorAll('[data-template]');
                  cards.forEach(card => {
                    (card as HTMLElement).style.borderColor = 'rgba(118,67,215,0.1)';
                    (card as HTMLElement).style.backgroundColor = '#FAF8FF';
                  });
                  const selected = document.querySelector('[data-template="supervisor"]') as HTMLElement;
                  if (selected) {
                    selected.style.borderColor = '#22C55E';
                    selected.style.backgroundColor = 'rgba(34,197,94,0.05)';
                  }
                }}
                data-template="supervisor"
                style={{
                  padding: '20px',
                  borderRadius: '20px',
                  border: '2px solid rgba(118,67,215,0.1)',
                  backgroundColor: '#FAF8FF',
                  cursor: 'pointer',
                  transition: 'all 0.2s ease',
                }}>
                <div style={{ fontSize: '32px', marginBottom: '12px' }}>👔</div>
                <div style={{ fontWeight: 700, color: '#190750', marginBottom: '4px' }}>Руководитель</div>
                <div style={{ fontSize: '12px', color: '#666' }}>Светофор, ROI, KPI</div>
              </div>
              
              {/* Оператор */}
              <div 
                onClick={() => {
                  const cards = document.querySelectorAll('[data-template]');
                  cards.forEach(card => {
                    (card as HTMLElement).style.borderColor = 'rgba(118,67,215,0.1)';
                    (card as HTMLElement).style.backgroundColor = '#FAF8FF';
                  });
                  const selected = document.querySelector('[data-template="operator"]') as HTMLElement;
                  if (selected) {
                    selected.style.borderColor = '#3B82F6';
                    selected.style.backgroundColor = 'rgba(59,130,246,0.05)';
                  }
                }}
                data-template="operator"
                style={{
                  padding: '20px',
                  borderRadius: '20px',
                  border: '2px solid rgba(118,67,215,0.1)',
                  backgroundColor: '#FAF8FF',
                  cursor: 'pointer',
                  transition: 'all 0.2s ease',
                }}>
                <div style={{ fontSize: '32px', marginBottom: '12px' }}>🎧</div>
                <div style={{ fontWeight: 700, color: '#190750', marginBottom: '4px' }}>Оператор</div>
                <div style={{ fontSize: '12px', color: '#666' }}>Статистика, рейтинги</div>
              </div>
            </div>
          </div>

          {/* Поля контакта */}
          <div style={{ marginBottom: '28px' }}>
            <div style={{ fontSize: '14px', fontWeight: 700, color: '#190750', marginBottom: '16px' }}>
              Контактные данные коллеги
            </div>
            
            {/* Имя */}
            <div style={{ marginBottom: '16px' }}>
              <input 
                type="text"
                placeholder="Имя коллеги"
                style={{
                  width: '100%',
                  padding: '16px 20px',
                  borderRadius: '14px',
                  border: '2px solid rgba(118,67,215,0.15)',
                  fontSize: '16px',
                  outline: 'none',
                  boxSizing: 'border-box',
                }}
                onFocus={(e) => {
                  e.target.style.borderColor = '#7643d7';
                }}
                onBlur={(e) => {
                  e.target.style.borderColor = 'rgba(118,67,215,0.15)';
                }}
              />
            </div>
            
            {/* Телефон */}
            <div style={{ marginBottom: '16px' }}>
              <input 
                type="tel"
                placeholder="Телефон (+7 999 123-45-67)"
                style={{
                  width: '100%',
                  padding: '16px 20px',
                  borderRadius: '14px',
                  border: '2px solid rgba(118,67,215,0.15)',
                  fontSize: '16px',
                  outline: 'none',
                  boxSizing: 'border-box',
                }}
                onFocus={(e) => {
                  e.target.style.borderColor = '#7643d7';
                }}
                onBlur={(e) => {
                  e.target.style.borderColor = 'rgba(118,67,215,0.15)';
                }}
              />
            </div>
            
            {/* Email */}
            <div>
              <input 
                type="email"
                placeholder="Email (colleague@company.ru)"
                style={{
                  width: '100%',
                  padding: '16px 20px',
                  borderRadius: '14px',
                  border: '2px solid rgba(118,67,215,0.15)',
                  fontSize: '16px',
                  outline: 'none',
                  boxSizing: 'border-box',
                }}
                onFocus={(e) => {
                  e.target.style.borderColor = '#7643d7';
                }}
                onBlur={(e) => {
                  e.target.style.borderColor = 'rgba(118,67,215,0.15)';
                }}
              />
            </div>
          </div>

          {/* Способ отправки */}
          <div style={{ marginBottom: '32px' }}>
            <div style={{ fontSize: '14px', fontWeight: 700, color: '#190750', marginBottom: '16px' }}>
              Способ отправки приглашения
            </div>
            <div style={{ display: 'flex', gap: '12px' }}>
              <button 
                onClick={() => {
                  const btns = document.querySelectorAll('[data-send-method]');
                  btns.forEach(btn => {
                    (btn as HTMLElement).style.backgroundColor = '#FAF8FF';
                    (btn as HTMLElement).style.color = '#190750';
                    (btn as HTMLElement).style.borderColor = 'rgba(118,67,215,0.15)';
                  });
                  const selected = document.querySelector('[data-send-method="sms"]') as HTMLElement;
                  if (selected) {
                    selected.style.backgroundColor = '#22C55E';
                    selected.style.color = '#FFF';
                    selected.style.borderColor = '#22C55E';
                  }
                }}
                data-send-method="sms"
                style={{
                  flex: 1,
                  padding: '14px',
                  borderRadius: '12px',
                  border: '2px solid rgba(118,67,215,0.15)',
                  backgroundColor: '#FAF8FF',
                  color: '#190750',
                  fontWeight: 600,
                  fontSize: '14px',
                  cursor: 'pointer',
                  transition: 'all 0.2s ease',
                }}>
                📱 SMS
              </button>
              <button 
                onClick={() => {
                  const btns = document.querySelectorAll('[data-send-method]');
                  btns.forEach(btn => {
                    (btn as HTMLElement).style.backgroundColor = '#FAF8FF';
                    (btn as HTMLElement).style.color = '#190750';
                    (btn as HTMLElement).style.borderColor = 'rgba(118,67,215,0.15)';
                  });
                  const selected = document.querySelector('[data-send-method="email"]') as HTMLElement;
                  if (selected) {
                    selected.style.backgroundColor = '#3B82F6';
                    selected.style.color = '#FFF';
                    selected.style.borderColor = '#3B82F6';
                  }
                }}
                data-send-method="email"
                style={{
                  flex: 1,
                  padding: '14px',
                  borderRadius: '12px',
                  border: '2px solid rgba(118,67,215,0.15)',
                  backgroundColor: '#FAF8FF',
                  color: '#190750',
                  fontWeight: 600,
                  fontSize: '14px',
                  cursor: 'pointer',
                  transition: 'all 0.2s ease',
                }}>
                📧 Email
              </button>
              <button 
                onClick={() => {
                  const btns = document.querySelectorAll('[data-send-method]');
                  btns.forEach(btn => {
                    (btn as HTMLElement).style.backgroundColor = '#FAF8FF';
                    (btn as HTMLElement).style.color = '#190750';
                    (btn as HTMLElement).style.borderColor = 'rgba(118,67,215,0.15)';
                  });
                  const selected = document.querySelector('[data-send-method="both"]') as HTMLElement;
                  if (selected) {
                    selected.style.backgroundColor = '#7643d7';
                    selected.style.color = '#FFF';
                    selected.style.borderColor = '#7643d7';
                  }
                }}
                data-send-method="both"
                style={{
                  flex: 1,
                  padding: '14px',
                  borderRadius: '12px',
                  border: '2px solid rgba(118,67,215,0.15)',
                  backgroundColor: '#FAF8FF',
                  color: '#190750',
                  fontWeight: 600,
                  fontSize: '14px',
                  cursor: 'pointer',
                  transition: 'all 0.2s ease',
                }}>
                📱📧 Оба
              </button>
            </div>
          </div>

          {/* Кнопки действий */}
          <div style={{ display: 'flex', gap: '16px' }}>
            <button 
              onClick={() => {
                const modal = document.getElementById('workspace-modal');
                if (modal) modal.style.display = 'none';
              }}
              style={{
                flex: 1,
                padding: '16px',
                borderRadius: '14px',
                border: '2px solid rgba(118,67,215,0.2)',
                backgroundColor: 'transparent',
                color: '#190750',
                fontWeight: 600,
                fontSize: '16px',
                cursor: 'pointer',
              }}>
              Отмена
            </button>
            <button 
              onClick={() => {
                // Здесь будет логика отправки
                const modal = document.getElementById('workspace-modal');
                const successModal = document.getElementById('success-modal');
                if (modal) modal.style.display = 'none';
                if (successModal) successModal.style.display = 'flex';
              }}
              style={{
                flex: 2,
                padding: '16px',
                borderRadius: '14px',
                border: 'none',
                backgroundColor: '#22C55E',
                color: '#FFF',
                fontWeight: 700,
                fontSize: '16px',
                cursor: 'pointer',
                boxShadow: '0 4px 20px rgba(34,197,94,0.3)',
              }}>
              Отправить приглашение
            </button>
          </div>
        </div>
      </div>

      {/* Модальное окно успеха */}
      <div 
        id="success-modal"
        onClick={(e) => {
          if (e.target.id === 'success-modal') {
            (e.target as HTMLElement).style.display = 'none';
          }
        }}
        style={{
          display: 'none',
          position: 'fixed',
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          backgroundColor: 'rgba(0,0,0,0.7)',
          zIndex: 1000,
          alignItems: 'center',
          justifyContent: 'center',
          padding: '20px',
        }}>
        <div 
          onClick={(e) => e.stopPropagation()}
          style={{
            backgroundColor: '#FFF',
            borderRadius: '32px',
            padding: '48px',
            maxWidth: '420px',
            width: '100%',
            textAlign: 'center',
          }}>
          <div style={{
            width: '88px',
            height: '88px',
            borderRadius: '50%',
            backgroundColor: 'rgba(34,197,94,0.1)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            fontSize: '44px',
            margin: '0 auto 24px',
          }}>
            ✓
          </div>
          <h3 style={{ fontSize: '28px', fontWeight: 800, color: '#190750', marginBottom: '12px' }}>
            Приглашение отправлено!
          </h3>
          <p style={{ fontSize: '15px', color: '#666', marginBottom: '32px', lineHeight: 1.6 }}>
            Коллега получит ссылку на рабочее место. 
            После активации вы увидите его в списке пользователей.
          </p>
          <button 
            onClick={() => {
              const modal = document.getElementById('success-modal');
              if (modal) modal.style.display = 'none';
            }}
            style={{
              width: '100%',
              padding: '16px',
              borderRadius: '14px',
              border: 'none',
              backgroundColor: '#22C55E',
              color: '#FFF',
              fontWeight: 700,
              fontSize: '16px',
              cursor: 'pointer',
            }}>
            Отлично!
          </button>
        </div>
      </div>

      {/* Footer */}
      <footer 
        id="footer"
        data-ym-area="footer"
        data-ym-name="Подвал сайта"
        style={{ padding: '60px 20px', borderTop: '1px solid rgba(118,67,215,0.1)', backgroundColor: '#FFF' }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto', display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: '40px' }}>
          <div>
            <div 
              id="footer-logo"
              data-ym-name="Логотип (футер)"
              style={{ fontSize: '24px', fontWeight: 800, color: '#7643d7', marginBottom: '16px' }}>
              Контакт.ИИ
            </div>
            <div style={{ color: '#666', fontSize: '14px', lineHeight: 1.6 }}>
              Платформа роста выручки через коммуникации.
            </div>
          </div>
          <div>
            <div style={{ fontWeight: 700, marginBottom: '16px', color: '#190750' }}>Продукт</div>
            <div style={{ color: '#666', fontSize: '14px', lineHeight: 2 }}>
              <div data-ym-name="Ссылка: Витрина виджетов">Витрина виджетов</div>
              <div data-ym-name="Ссылка: ИИ-ассистент">ИИ-ассистент</div>
              <div data-ym-name="Ссылка: Транскрибация">Транскрибация</div>
              <div data-ym-name="Ссылка: Омниканальность">Омниканальность</div>
            </div>
          </div>
          <div>
            <div style={{ fontWeight: 700, marginBottom: '16px', color: '#190750' }}>Интеграции</div>
            <div style={{ color: '#666', fontSize: '14px', lineHeight: 2 }}>
              <div data-ym-name="Ссылка: Asterisk">Asterisk</div>
              <div data-ym-name="Ссылка: AmoCRM">AmoCRM</div>
              <div data-ym-name="Ссылка: Битрикс24">Битрикс24</div>
              <div data-ym-name="Ссылка: FreePBX">FreePBX</div>
            </div>
          </div>
          <div>
            <div style={{ fontWeight: 700, marginBottom: '16px', color: '#190750' }}>Контакты</div>
            <div style={{ color: '#666', fontSize: '14px', lineHeight: 2 }}>
              <div data-ym-name="Телефон">📞 8 800 123-45-67</div>
              <div data-ym-name="Email">📧 info@contact-ai.ru</div>
              <div data-ym-name="Телеграм-бот">📱 Телеграм-бот</div>
            </div>
          </div>
        </div>
        <div style={{ textAlign: 'center', color: '#999', fontSize: '12px', marginTop: '40px' }}>
          © 2026 Контакт.ИИ. Все права защищены.
        </div>
        
        {/* Яндекс.Метрика: noscript для сбора статистики при отключённом JS */}
        {/* Замените 106950455 на номер вашего счётчика */}
        <noscript>
          <div>
            <img 
              src="https://mc.yandex.ru/watch/106950455" 
              style={{ position: 'absolute', left: '-9999px' }} 
              alt="" 
            />
          </div>
        </noscript>
      </footer>
    </div>
  )
}


// ============================================
// КОНЦЕПТ 6: Юзер флоу дерева принятия решения поделиться информацией
// Основан на общих для людей паттернах поведения
// ============================================
function LandingConcept6() {
  return (
    <div style={{ minHeight: '100vh', backgroundColor: '#FFFFFF', color: '#190750' }}>
      <style>{styles}</style>
      
      {/* Header */}
      <header style={{
        position: 'fixed',
        top: 0,
        left: 0,
        right: 0,
        padding: '16px 40px',
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        backgroundColor: 'rgba(255,255,255,0.98)',
        backdropFilter: 'blur(10px)',
        zIndex: 100,
        borderBottom: '1px solid rgba(118,67,215,0.1)',
      }}>
        <div style={{ fontSize: '24px', fontWeight: 800, color: '#7643d7' }}>
          Контакт.ИИ
        </div>
        <nav style={{ display: 'flex', gap: '32px', alignItems: 'center' }}>
          <a href="#flow" className="hover-lift" style={{ color: '#190750', textDecoration: 'none', fontSize: '15px', fontWeight: 500 }}>Юзер флоу</a>
          <a href="#motivations" className="hover-lift" style={{ color: '#190750', textDecoration: 'none', fontSize: '15px', fontWeight: 500 }}>Мотивации</a>
          <a href="#recipients" className="hover-lift" style={{ color: '#190750', textDecoration: 'none', fontSize: '15px', fontWeight: 500 }}>Получатели</a>
          <a href="#application" className="hover-lift" style={{ color: '#190750', textDecoration: 'none', fontSize: '15px', fontWeight: 500 }}>Применение</a>
          <button className="btn-primary" style={{
            padding: '12px 28px',
            borderRadius: '50px',
            border: 'none',
            backgroundColor: '#7643d7',
            color: '#FFF',
            fontWeight: 600,
            cursor: 'pointer',
            boxShadow: '0 4px 20px rgba(118,67,215,0.3)',
          }}>
            Начать бесплатно
          </button>
        </nav>
      </header>

      {/* Hero */}
      <section style={{
        paddingTop: '140px',
        paddingBottom: '60px',
        textAlign: 'center',
        background: 'linear-gradient(180deg, #FAF8FF 0%, #FFFFFF 100%)',
      }}>
        <div style={{
          display: 'inline-block',
          padding: '14px 36px',
          borderRadius: '60px',
          background: 'linear-gradient(90deg, #7643d7, #9b6dff)',
          marginBottom: '32px',
          fontSize: '17px',
          color: '#FFF',
          fontWeight: 700,
          boxShadow: '0 8px 32px rgba(118,67,215,0.3)',
        }}>
          🧠 Психология шаринга информации
        </div>
        
        <h1 style={{
          fontSize: '52px',
          fontWeight: 800,
          lineHeight: 1.15,
          marginBottom: '24px',
          maxWidth: '900px',
          margin: '0 auto 24px',
          letterSpacing: '-2px',
        }}>
          Почему люди <span className="gradient-text">делятся информацией</span> с другими?
        </h1>
        
        <p style={{
          fontSize: '20px',
          color: '#666',
          maxWidth: '700px',
          margin: '0 auto 40px',
          lineHeight: 1.7,
        }}>
          Понимание паттернов поведения поможет создать контент, 
          которым люди захотят поделиться с коллегами и руководством.
        </p>
      </section>

      {/* ДЕРЕВО РЕШЕНИЙ - Визуализация */}
      <section id="flow" style={{ padding: '60px 20px 120px', backgroundColor: '#FFF' }}>
        <div style={{ maxWidth: '1400px', margin: '0 auto' }}>
          
          {/* Уровень 0: Старт */}
          <div style={{ textAlign: 'center', marginBottom: '60px' }}>
            <div style={{
              display: 'inline-block',
              padding: '24px 48px',
              backgroundColor: '#190750',
              borderRadius: '24px',
              color: '#FFF',
              fontSize: '20px',
              fontWeight: 700,
              boxShadow: '0 12px 40px rgba(25, 7, 80, 0.3)',
            }}>
              🎯 Человек получает информацию
            </div>
          </div>

          {/* Стрелка вниз */}
          <div style={{ textAlign: 'center', marginBottom: '40px' }}>
            <div style={{ fontSize: '32px', color: '#7643d7' }}>↓</div>
          </div>

          {/* Уровень 1: Оценка полезности */}
          <div style={{ textAlign: 'center', marginBottom: '60px' }}>
            <div style={{
              display: 'inline-block',
              padding: '20px 40px',
              backgroundColor: '#FAF8FF',
              borderRadius: '20px',
              border: '2px solid #7643d7',
              fontSize: '18px',
              fontWeight: 700,
              color: '#190750',
            }}>
              🤔 Оценка: Полезно ли это?
            </div>
            
            <div style={{ display: 'flex', justifyContent: 'center', gap: '40px', marginTop: '40px' }}>
              {/* Нет */}
              <div style={{ textAlign: 'center' }}>
                <div style={{ fontSize: '28px', color: '#999', marginBottom: '12px' }}>←</div>
                <div style={{
                  padding: '16px 32px',
                  backgroundColor: '#F5F5F5',
                  borderRadius: '16px',
                  fontSize: '15px',
                  color: '#999',
                }}>
                  ❌ Нет → Игнорирует
                </div>
              </div>
              
              {/* Да */}
              <div style={{ textAlign: 'center' }}>
                <div style={{ fontSize: '28px', color: '#22C55E', marginBottom: '12px' }}>↓</div>
                <div style={{
                  padding: '16px 32px',
                  backgroundColor: 'rgba(34,197,94,0.1)',
                  borderRadius: '16px',
                  fontSize: '15px',
                  fontWeight: 700,
                  color: '#22C55E',
                }}>
                  ✓ Да, полезно!
                </div>
              </div>
            </div>
          </div>

          {/* Уровень 2: Мотивации */}
          <div id="motivations" style={{ marginBottom: '80px' }}>
            <div style={{ textAlign: 'center', marginBottom: '40px' }}>
              <h2 style={{ fontSize: '36px', fontWeight: 800, color: '#190750' }}>
                Какая <span className="gradient-text">мотивация</span> движет человеком?
              </h2>
            </div>
            
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(5, 1fr)', gap: '20px' }}>
              {[
                { 
                  icon: '🏆', 
                  title: 'Статус', 
                  desc: 'Показать экспертность',
                  color: '#FFD700',
                  detail: '«Я знаю что-то полезное»'
                },
                { 
                  icon: '🤝', 
                  title: 'Альтруизм', 
                  desc: 'Помочь другим',
                  color: '#22C55E',
                  detail: '«Это поможет коллеге»'
                },
                { 
                  icon: '🔄', 
                  title: 'Взаимность', 
                  desc: 'Ожидание ответа',
                  color: '#3B82F6',
                  detail: '«Мне тоже помогут»'
                },
                { 
                  icon: '💬', 
                  title: 'Связь', 
                  desc: 'Укрепить отношения',
                  color: '#7643d7',
                  detail: '«Хочу быть полезным»'
                },
                { 
                  icon: '✨', 
                  title: 'Самоутверждение', 
                  desc: 'Чувство важности',
                  color: '#FF6B35',
                  detail: '«Я приношу пользу»'
                },
              ].map((m, i) => (
                <div key={i} className="hover-lift" style={{
                  backgroundColor: '#FFF',
                  borderRadius: '20px',
                  padding: '28px 20px',
                  border: `2px solid ${m.color}30`,
                  textAlign: 'center',
                }}>
                  <div style={{ fontSize: '40px', marginBottom: '16px' }}>{m.icon}</div>
                  <div style={{ fontSize: '18px', fontWeight: 800, marginBottom: '8px', color: '#190750' }}>{m.title}</div>
                  <div style={{ fontSize: '14px', color: '#666', marginBottom: '16px' }}>{m.desc}</div>
                  <div style={{
                    padding: '10px 16px',
                    backgroundColor: `${m.color}15`,
                    borderRadius: '10px',
                    fontSize: '13px',
                    color: m.color,
                    fontWeight: 600,
                  }}>
                    {m.detail}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Уровень 3: Выбор получателя */}
          <div id="recipients" style={{ marginBottom: '80px' }}>
            <div style={{ textAlign: 'center', marginBottom: '40px' }}>
              <div style={{ fontSize: '32px', color: '#7643d7', marginBottom: '20px' }}>↓</div>
              <h2 style={{ fontSize: '36px', fontWeight: 800, color: '#190750' }}>
                Кому <span className="gradient-text">поделиться</span>?
              </h2>
            </div>
            
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '40px' }}>
              
              {/* Руководитель */}
              <div style={{
                backgroundColor: '#FAF8FF',
                borderRadius: '24px',
                padding: '32px',
                border: '2px solid rgba(34,197,94,0.3)',
              }}>
                <div style={{ textAlign: 'center', marginBottom: '24px' }}>
                  <div style={{
                    width: '80px',
                    height: '80px',
                    borderRadius: '50%',
                    backgroundColor: '#22C55E',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    fontSize: '40px',
                    margin: '0 auto 16px',
                  }}>
                    👔
                  </div>
                  <div style={{ fontSize: '24px', fontWeight: 800, color: '#190750' }}>Руководителю</div>
                </div>
                
                <div style={{ display: 'flex', flexDirection: 'column', gap: '12px', marginBottom: '20px' }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '12px', fontSize: '14px' }}>
                    <span style={{ color: '#22C55E' }}>✓</span>
                    <span>Показать свою компетентность</span>
                  </div>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '12px', fontSize: '14px' }}>
                    <span style={{ color: '#22C55E' }}>✓</span>
                    <span>Внести вклад в успех команды</span>
                  </div>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '12px', fontSize: '14px' }}>
                    <span style={{ color: '#22C55E' }}>✓</span>
                    <span>Рассчитывать на признание</span>
                  </div>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '12px', fontSize: '14px' }}>
                    <span style={{ color: '#22C55E' }}>✓</span>
                    <span>Продемонстрировать инициативу</span>
                  </div>
                </div>
                
                <div style={{
                  padding: '16px',
                  backgroundColor: '#22C55E',
                  borderRadius: '12px',
                  textAlign: 'center',
                  color: '#FFF',
                  fontWeight: 600,
                  fontSize: '14px',
                }}>
                  Цель: Карьерный рост, признание
                </div>
              </div>

              {/* Коллега */}
              <div style={{
                backgroundColor: '#FAF8FF',
                borderRadius: '24px',
                padding: '32px',
                border: '2px solid rgba(59,130,246,0.3)',
              }}>
                <div style={{ textAlign: 'center', marginBottom: '24px' }}>
                  <div style={{
                    width: '80px',
                    height: '80px',
                    borderRadius: '50%',
                    backgroundColor: '#3B82F6',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    fontSize: '40px',
                    margin: '0 auto 16px',
                  }}>
                    🤝
                  </div>
                  <div style={{ fontSize: '24px', fontWeight: 800, color: '#190750' }}>Коллеге</div>
                </div>
                
                <div style={{ display: 'flex', flexDirection: 'column', gap: '12px', marginBottom: '20px' }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '12px', fontSize: '14px' }}>
                    <span style={{ color: '#3B82F6' }}>✓</span>
                    <span>Помочь решить проблему</span>
                  </div>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '12px', fontSize: '14px' }}>
                    <span style={{ color: '#3B82F6' }}>✓</span>
                    <span>Укрепить профессиональную связь</span>
                  </div>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '12px', fontSize: '14px' }}>
                    <span style={{ color: '#3B82F6' }}>✓</span>
                    <span>Создать «кредит доверия»</span>
                  </div>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '12px', fontSize: '14px' }}>
                    <span style={{ color: '#3B82F6' }}>✓</span>
                    <span>Поделиться находкой</span>
                  </div>
                </div>
                
                <div style={{
                  padding: '16px',
                  backgroundColor: '#3B82F6',
                  borderRadius: '12px',
                  textAlign: 'center',
                  color: '#FFF',
                  fontWeight: 600,
                  fontSize: '14px',
                }}>
                  Цель: Взаимопомощь, партнерство
                </div>
              </div>

              {/* Друг/Знакомый */}
              <div style={{
                backgroundColor: '#FAF8FF',
                borderRadius: '24px',
                padding: '32px',
                border: '2px solid rgba(118,67,215,0.3)',
              }}>
                <div style={{ textAlign: 'center', marginBottom: '24px' }}>
                  <div style={{
                    width: '80px',
                    height: '80px',
                    borderRadius: '50%',
                    backgroundColor: '#7643d7',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    fontSize: '40px',
                    margin: '0 auto 16px',
                  }}>
                    👥
                  </div>
                  <div style={{ fontSize: '24px', fontWeight: 800, color: '#190750' }}>Другу / Знакомому</div>
                </div>
                
                <div style={{ display: 'flex', flexDirection: 'column', gap: '12px', marginBottom: '20px' }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '12px', fontSize: '14px' }}>
                    <span style={{ color: '#7643d7' }}>✓</span>
                    <span>Быть полезным</span>
                  </div>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '12px', fontSize: '14px' }}>
                    <span style={{ color: '#7643d7' }}>✓</span>
                    <span>Поддержать отношения</span>
                  </div>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '12px', fontSize: '14px' }}>
                    <span style={{ color: '#7643d7' }}>✓</span>
                    <span>Поделиться интересным</span>
                  </div>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '12px', fontSize: '14px' }}>
                    <span style={{ color: '#7643d7' }}>✓</span>
                    <span>Начать диалог</span>
                  </div>
                </div>
                
                <div style={{
                  padding: '16px',
                  backgroundColor: '#7643d7',
                  borderRadius: '12px',
                  textAlign: 'center',
                  color: '#FFF',
                  fontWeight: 600,
                  fontSize: '14px',
                }}>
                  Цель: Личная связь, дружба
                </div>
              </div>
            </div>
          </div>

          {/* Уровень 4: Форма передачи */}
          <div style={{ marginBottom: '80px' }}>
            <div style={{ textAlign: 'center', marginBottom: '40px' }}>
              <div style={{ fontSize: '32px', color: '#7643d7', marginBottom: '20px' }}>↓</div>
              <h2 style={{ fontSize: '36px', fontWeight: 800, color: '#190750' }}>
                Как <span className="gradient-text">передать</span> информацию?
              </h2>
            </div>
            
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: '24px' }}>
              {[
                { icon: '🔗', title: 'Переслать ссылку', desc: 'Быстро, минимальные усилия', timing: 'Секунды' },
                { icon: '💬', title: 'Рассказать лично', desc: 'Более убедительно', timing: 'Минуты' },
                { icon: '🖥️', title: 'Показать на экране', desc: 'Наглядная демонстрация', timing: '5-10 минут' },
                { icon: '📧', title: 'Написать сообщение', desc: 'С контекстом и пояснением', timing: 'Минуты' },
              ].map((f, i) => (
                <div key={i} className="hover-lift" style={{
                  backgroundColor: '#FAF8FF',
                  borderRadius: '20px',
                  padding: '28px',
                  textAlign: 'center',
                  border: '1px solid rgba(118,67,215,0.1)',
                }}>
                  <div style={{ fontSize: '40px', marginBottom: '16px' }}>{f.icon}</div>
                  <div style={{ fontSize: '18px', fontWeight: 700, marginBottom: '8px', color: '#190750' }}>{f.title}</div>
                  <div style={{ fontSize: '14px', color: '#666', marginBottom: '16px' }}>{f.desc}</div>
                  <div style={{
                    display: 'inline-block',
                    padding: '6px 16px',
                    backgroundColor: 'rgba(118,67,215,0.1)',
                    borderRadius: '50px',
                    fontSize: '12px',
                    fontWeight: 600,
                    color: '#7643d7',
                  }}>
                    ⏱️ {f.timing}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Уровень 5: Результат */}
          <div style={{ textAlign: 'center' }}>
            <div style={{ fontSize: '32px', color: '#22C55E', marginBottom: '20px' }}>↓</div>
            <div style={{
              display: 'inline-block',
              padding: '32px 60px',
              background: 'linear-gradient(135deg, #22C55E 0%, #16A34A 100%)',
              borderRadius: '24px',
              color: '#FFF',
              boxShadow: '0 12px 40px rgba(34,197,94,0.3)',
            }}>
              <div style={{ fontSize: '24px', fontWeight: 800, marginBottom: '12px' }}>🎉 Результат шаринга</div>
              <div style={{ display: 'flex', gap: '32px', justifyContent: 'center', fontSize: '16px' }}>
                <span>✓ Признание</span>
                <span>✓ Благодарность</span>
                <span>✓ Укрепление связей</span>
                <span>✓ Ответная помощь</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Применение к Контакт.ИИ */}
      <section id="application" style={{ padding: '120px 20px', backgroundColor: '#FAF8FF' }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
          <div style={{ textAlign: 'center', marginBottom: '60px' }}>
            <div style={{
              display: 'inline-block',
              padding: '12px 28px',
              borderRadius: '50px',
              backgroundColor: 'rgba(118,67,215,0.1)',
              marginBottom: '24px',
              fontSize: '15px',
              color: '#7643d7',
              fontWeight: 700,
            }}>
              🎯 Применение к Контакт.ИИ
            </div>
            <h2 style={{ fontSize: '44px', fontWeight: 800, marginBottom: '20px', letterSpacing: '-1px' }}>
              Как создать контент, которым <span className="gradient-text">захотят делиться</span>
            </h2>
            <p style={{ fontSize: '18px', color: '#666', maxWidth: '700px', margin: '0 auto' }}>
              Используйте понимание мотиваций для создания эффективного лендинга
            </p>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: '32px' }}>
            
            {/* Для рекомендации руководителю */}
            <div style={{
              backgroundColor: '#FFF',
              borderRadius: '24px',
              padding: '40px',
              border: '1px solid rgba(34,197,94,0.2)',
            }}>
              <div style={{
                display: 'flex',
                alignItems: 'center',
                gap: '16px',
                marginBottom: '24px',
              }}>
                <div style={{
                  width: '56px',
                  height: '56px',
                  borderRadius: '50%',
                  backgroundColor: '#22C55E',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  fontSize: '28px',
                }}>
                  👔
                </div>
                <div>
                  <div style={{ fontSize: '20px', fontWeight: 800, color: '#190750' }}>Для рекомендации руководителю</div>
                  <div style={{ fontSize: '14px', color: '#666' }}>Мотивация: Статус, Карьера</div>
                </div>
              </div>
              
              <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
                <div style={{ padding: '16px', backgroundColor: '#FAF8FF', borderRadius: '12px' }}>
                  <div style={{ fontWeight: 700, marginBottom: '8px', color: '#22C55E', fontSize: '14px' }}>Что должен видеть админ:</div>
                  <ul style={{ fontSize: '14px', color: '#666', lineHeight: 1.8, paddingLeft: '20px', margin: 0 }}>
                    <li>Конкретные цифры ROI для бизнеса</li>
                    <li>Сравнение до/после внедрения</li>
                    <li>Отраслевые кейсы</li>
                  </ul>
                </div>
                <div style={{ padding: '16px', backgroundColor: '#FAF8FF', borderRadius: '12px' }}>
                  <div style={{ fontWeight: 700, marginBottom: '8px', color: '#22C55E', fontSize: '14px' }}>Что админ сможет сказать:</div>
                  <p style={{ fontSize: '14px', color: '#666', lineHeight: 1.6, margin: 0, fontStyle: 'italic' }}>
                    «Я нашёл решение, которое может увеличить нашу выручку на 340%. Вот расчёт ROI и кейсы из нашей отрасли.»
                  </p>
                </div>
              </div>
            </div>

            {/* Для рекомендации коллеге */}
            <div style={{
              backgroundColor: '#FFF',
              borderRadius: '24px',
              padding: '40px',
              border: '1px solid rgba(59,130,246,0.2)',
            }}>
              <div style={{
                display: 'flex',
                alignItems: 'center',
                gap: '16px',
                marginBottom: '24px',
              }}>
                <div style={{
                  width: '56px',
                  height: '56px',
                  borderRadius: '50%',
                  backgroundColor: '#3B82F6',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  fontSize: '28px',
                }}>
                  🤝
                </div>
                <div>
                  <div style={{ fontSize: '20px', fontWeight: 800, color: '#190750' }}>Для рекомендации коллеге</div>
                  <div style={{ fontSize: '14px', color: '#666' }}>Мотивация: Помощь, Взаимность</div>
                </div>
              </div>
              
              <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
                <div style={{ padding: '16px', backgroundColor: '#FAF8FF', borderRadius: '12px' }}>
                  <div style={{ fontWeight: 700, marginBottom: '8px', color: '#3B82F6', fontSize: '14px' }}>Что должен видеть админ:</div>
                  <ul style={{ fontSize: '14px', color: '#666', lineHeight: 1.8, paddingLeft: '20px', margin: 0 }}>
                    <li>Простота настройки (5 минут)</li>
                    <li>Открытые формулы и прозрачность</li>
                    <li>Интеграции с их системами</li>
                  </ul>
                </div>
                <div style={{ padding: '16px', backgroundColor: '#FAF8FF', borderRadius: '12px' }}>
                  <div style={{ fontWeight: 700, marginBottom: '8px', color: '#3B82F6', fontSize: '14px' }}>Что админ сможет сказать:</div>
                  <p style={{ fontSize: '14px', color: '#666', lineHeight: 1.6, margin: 0, fontStyle: 'italic' }}>
                    «Смотри, нашёл штуку, которая сэкономит тебе часы работы. Настройка за 5 минут, все формулы открыты. Попробуй, мне помогло.»
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Ключевые принципы */}
          <div style={{ marginTop: '60px' }}>
            <h3 style={{ fontSize: '28px', fontWeight: 800, textAlign: 'center', marginBottom: '32px', color: '#190750' }}>
              Ключевые принципы виральности
            </h3>
            
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: '20px' }}>
              {[
                { icon: '💎', title: 'Польза', desc: 'Контент должен решать реальную проблему' },
                { icon: '🎯', title: 'Релевантность', desc: 'Соответствие интересам получателя' },
                { icon: '⚡', title: 'Простота', desc: 'Легко переслать за 1 клик' },
                { icon: '🏆', title: 'Социальный капитал', desc: 'Дарит статус тому, кто делится' },
              ].map((p, i) => (
                <div key={i} style={{
                  backgroundColor: '#FFF',
                  borderRadius: '16px',
                  padding: '24px',
                  textAlign: 'center',
                  border: '1px solid rgba(118,67,215,0.1)',
                }}>
                  <div style={{ fontSize: '32px', marginBottom: '12px' }}>{p.icon}</div>
                  <div style={{ fontWeight: 700, marginBottom: '8px', color: '#190750' }}>{p.title}</div>
                  <div style={{ fontSize: '13px', color: '#666' }}>{p.desc}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section style={{ padding: '120px 20px', textAlign: 'center', backgroundColor: '#190750' }}>
        <h2 style={{ fontSize: '44px', fontWeight: 800, marginBottom: '24px', color: '#FFF' }}>
          Создайте контент, которым захотят делиться
        </h2>
        <p style={{ fontSize: '20px', color: 'rgba(255,255,255,0.7)', marginBottom: '48px', maxWidth: '600px', margin: '0 auto 48px' }}>
          Используйте понимание психологии шаринга для создания эффективного лендинга
        </p>
        <div style={{ display: 'flex', gap: '16px', justifyContent: 'center' }}>
          <button className="btn-primary animate-glow" style={{
            padding: '20px 50px',
            borderRadius: '50px',
            border: 'none',
            backgroundColor: '#7643d7',
            color: '#FFF',
            fontWeight: 700,
            fontSize: '18px',
            cursor: 'pointer',
            boxShadow: '0 8px 40px rgba(118,67,215,0.5)',
          }}>
            Начать бесплатно
          </button>
          <button className="hover-lift" style={{
            padding: '20px 50px',
            borderRadius: '50px',
            border: '2px solid rgba(255,255,255,0.3)',
            backgroundColor: 'transparent',
            color: '#FFF',
            fontWeight: 700,
            fontSize: '18px',
            cursor: 'pointer',
          }}>
            Узнать больше
          </button>
        </div>
      </section>

      {/* Footer */}
      <footer style={{ padding: '60px 20px', borderTop: '1px solid rgba(118,67,215,0.1)', backgroundColor: '#FFF' }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto', display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: '40px' }}>
          <div>
            <div style={{ fontSize: '24px', fontWeight: 800, color: '#7643d7', marginBottom: '16px' }}>
              Контакт.ИИ
            </div>
            <div style={{ color: '#666', fontSize: '14px', lineHeight: 1.6 }}>
              Платформа роста выручки через коммуникации.
            </div>
          </div>
          <div>
            <div style={{ fontWeight: 700, marginBottom: '16px', color: '#190750' }}>Продукт</div>
            <div style={{ color: '#666', fontSize: '14px', lineHeight: 2 }}>
              <div>Витрина виджетов</div>
              <div>ИИ-ассистент</div>
              <div>Транскрибация</div>
            </div>
          </div>
          <div>
            <div style={{ fontWeight: 700, marginBottom: '16px', color: '#190750' }}>Компания</div>
            <div style={{ color: '#666', fontSize: '14px', lineHeight: 2 }}>
              <div>О нас</div>
              <div>Карьера</div>
              <div>Блог</div>
            </div>
          </div>
          <div>
            <div style={{ fontWeight: 700, marginBottom: '16px', color: '#190750' }}>Контакты</div>
            <div style={{ color: '#666', fontSize: '14px', lineHeight: 2 }}>
              <div>📞 8 800 123-45-67</div>
              <div>📧 info@contact-ai.ru</div>
            </div>
          </div>
        </div>
        <div style={{ textAlign: 'center', color: '#999', fontSize: '12px', marginTop: '40px' }}>
          © 2026 Контакт.ИИ. Все права защищены.
        </div>
      </footer>
    </div>
  )
}
// ГЛАВНЫЙ КОМПОНЕНТ С ПЕРЕКЛЮЧАТЕЛЕМ
// ============================================
export default function Landing() {
  const [concept, setConcept] = useState(1)

  const conceptNames: Record<number, { short: string; full: string }> = {
    1: { short: 'Хуки', full: 'Кратко • Цепляющие хуки' },
    2: { short: 'Детально', full: 'Развёрнуто • Подробно' },
    3: { short: 'Руководителю', full: 'Для рекомендации руководителю' },
    4: { short: 'Коллеге', full: 'Для рекомендации коллеге' },
    5: { short: 'Объединённый', full: 'Детально + Все аудитории' },
    6: { short: 'Юзер флоу', full: 'Психология шаринга информации' },
  }

  return (
    <div style={{ position: 'relative' }}>
      {/* Toggle Switch */}
      <div style={{
        position: 'fixed',
        bottom: '24px',
        right: '24px',
        zIndex: 1000,
        backgroundColor: '#FFF',
        padding: '16px',
        borderRadius: '20px',
        boxShadow: '0 8px 32px rgba(118,67,215,0.15)',
        border: '1px solid rgba(118,67,215,0.1)',
      }}>
        <div style={{ marginBottom: '12px', fontSize: '12px', fontWeight: 700, color: '#190750', textAlign: 'center' }}>
          Концепт лендинга
        </div>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '8px' }}>
          {[1, 2, 3, 4, 5, 6].map((c) => (
            <button key={c} onClick={() => setConcept(c)} style={{
              padding: '12px 16px',
              borderRadius: '50px',
              border: 'none',
              backgroundColor: concept === c ? '#7643d7' : '#FAF8FF',
              color: concept === c ? '#FFF' : '#190750',
              fontWeight: 600,
              cursor: 'pointer',
              fontSize: '12px',
              transition: 'all 0.3s ease',
              whiteSpace: 'nowrap',
            }}>
              {conceptNames[c].short}
            </button>
          ))}
        </div>
        <div style={{ marginTop: '8px', fontSize: '11px', color: '#999', textAlign: 'center' }}>
          {conceptNames[concept].full}
        </div>
      </div>

      {concept === 1 && <LandingConcept1 />}
      {concept === 2 && <LandingConcept2 />}
      {concept === 3 && <LandingConcept3 />}
      {concept === 4 && <LandingConcept4 />}
      {concept === 5 && <LandingConcept5 />}
      {concept === 6 && <LandingConcept6 />}
    </div>
  )
}
