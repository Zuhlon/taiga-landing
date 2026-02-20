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
// КОНЦЕПТ 1: Краткие цепляющие хуки
// ============================================
function LandingConcept1() {
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
        backgroundColor: 'rgba(255,255,255,0.95)',
        backdropFilter: 'blur(10px)',
        zIndex: 100,
        borderBottom: '1px solid rgba(118,67,215,0.1)',
      }}>
        <div style={{ fontSize: '24px', fontWeight: 800, color: '#7643d7' }}>
          Контакт.ИИ
        </div>
        <nav style={{ display: 'flex', gap: '32px', alignItems: 'center' }}>
          <a href="#features" className="hover-lift" style={{ color: '#190750', textDecoration: 'none', fontSize: '15px', fontWeight: 500 }}>Возможности</a>
          <a href="#revenue" className="hover-lift" style={{ color: '#190750', textDecoration: 'none', fontSize: '15px', fontWeight: 500 }}>Рост выручки</a>
          <a href="#pricing" className="hover-lift" style={{ color: '#190750', textDecoration: 'none', fontSize: '15px', fontWeight: 500 }}>Тарифы</a>
          <button className="btn-primary" style={{
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
      <section style={{
        paddingTop: '160px',
        paddingBottom: '80px',
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
        
        <p style={{
          fontSize: '22px',
          color: '#666',
          maxWidth: '650px',
          margin: '0 auto 48px',
          lineHeight: 1.7,
        }}>
          ИИ, который увеличивает выручку, а не отчёты. Превращает каждый контакт с клиентом в управляемый источник продаж.
        </p>
        
        <div style={{ display: 'flex', gap: '16px', justifyContent: 'center' }}>
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
            Смотреть демо
          </button>
        </div>

        <div style={{ marginTop: '80px' }}>
          <p style={{ color: '#999', marginBottom: '24px', fontSize: '14px', fontWeight: 500 }}>Нам доверяют лидеры рынка</p>
          <div style={{ display: 'flex', gap: '48px', justifyContent: 'center', opacity: 0.6 }}>
            {['МОС-регистратор', 'АвтоСпецЦентр', 'Телеком Про', 'МедЦентр', 'FinTech'].map((name, i) => (
              <span key={i} style={{ fontSize: '16px', fontWeight: 600, color: '#190750' }}>{name}</span>
            ))}
          </div>
        </div>
      </section>

      {/* Stats */}
      <section style={{ padding: '80px 20px', backgroundColor: '#7643d7' }}>
        <div style={{ maxWidth: '1000px', margin: '0 auto', display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: '40px', textAlign: 'center' }}>
          {[
            { value: '340%', label: 'Рост выручки за 3 месяца' },
            { value: '+18%', label: 'Конверсия продаж' },
            { value: '30 сек', label: 'До инсайта' },
            { value: '5 мин', label: 'На настройку' },
          ].map((stat, i) => (
            <div key={i} className="animate-float" style={{ animationDelay: `${i * 0.1}s` }}>
              <div style={{ fontSize: '56px', fontWeight: 800, color: '#FFF' }}>{stat.value}</div>
              <div style={{ fontSize: '16px', color: 'rgba(255,255,255,0.8)', marginTop: '8px', fontWeight: 500 }}>{stat.label}</div>
            </div>
          ))}
        </div>
      </section>

      {/* Features Grid */}
      <section id="features" style={{ padding: '120px 20px', backgroundColor: '#FAF8FF' }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
          <h2 style={{ fontSize: '52px', fontWeight: 800, textAlign: 'center', marginBottom: '20px', letterSpacing: '-1px' }}>
            Диалоги, которые <span className="gradient-text">приносят деньги</span>
          </h2>
          <p style={{ textAlign: 'center', color: '#666', marginBottom: '60px', fontSize: '18px' }}>
            Управляйте продажами через коммуникации
          </p>
          
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '24px' }}>
            {[
              { icon: '🚦', title: 'Светофор метрик', desc: 'Зелёный. Жёлтый. Красный. 3 секунды — и ты знаешь, где деньги.' },
              { icon: '💰', title: 'Рост выручки', desc: 'Каждый контакт превращается в управляемый источник продаж.' },
              { icon: '📱', title: 'Телеграм-бот', desc: 'Алерты о продажах и проблемах прямо в мессенджер.' },
              { icon: '📞', title: 'Транскрибация', desc: 'Каждый звонок — текст. ИИ найдёт упущенные продажи.' },
              { icon: '🎯', title: 'Сигналы намерений', desc: 'Кто готов купить. Кто думает уйти. Действуйте на опережение.' },
              { icon: '🛡️', title: 'Защита выручки', desc: 'ИИ обнаруживает попытки увода клиентов и денег.' },
            ].map((f, i) => (
              <div key={i} className="card-shine hover-lift" style={{
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
      <section id="revenue" style={{ padding: '120px 20px', background: 'linear-gradient(180deg, #FFFFFF 0%, #FAF8FF 100%)' }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto', textAlign: 'center' }}>
          <h2 style={{ fontSize: '52px', fontWeight: 800, marginBottom: '20px', letterSpacing: '-1px' }}>
            Омниканальность — <span className="gradient-text">это продажи</span>
          </h2>
          <p style={{ fontSize: '20px', color: '#666', marginBottom: '60px' }}>
            Все каналы в одной системе. Все контакты — в продажах.
          </p>
          
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(5, 1fr)', gap: '20px' }}>
            {[
              { icon: '📞', title: 'Телефон', desc: 'Звонки = продажи' },
              { icon: '💬', title: 'Чаты', desc: 'Ватсап, Телеграм' },
              { icon: '📧', title: 'Почта', desc: 'Коммерческие' },
              { icon: '🌐', title: 'Сайт', desc: 'Лиды и боты' },
              { icon: '📱', title: 'Соцсети', desc: 'Комментарии' },
            ].map((ch, i) => (
              <div key={i} className="hover-lift" style={{
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
      <section style={{ padding: '120px 20px', textAlign: 'center', backgroundColor: '#190750' }}>
        <h2 style={{ fontSize: '52px', fontWeight: 800, marginBottom: '24px', color: '#FFF' }}>
          Готовы к росту выручки?
        </h2>
        <p style={{ fontSize: '20px', color: 'rgba(255,255,255,0.7)', marginBottom: '48px' }}>
          14 дней бесплатно. Без карты. Без риска.
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
          Начать сейчас
        </button>
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
                  <div style={{ width: '48px', height: '48px', borderRadius: '12px', backgroundColor: 'rgba(118,67,215,0.1)', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '24px', flexShrink: 0 }}>📝</div>
                  <div>
                    <div style={{ fontWeight: 700, marginBottom: '4px', color: '#190750' }}>Конкретные примеры</div>
                    <div style={{ fontSize: '14px', color: '#666', lineHeight: 1.5 }}>Список звонков, сообщений, событий, вошедших в расчёт</div>
                  </div>
                </div>
              </div>
            </div>

            <div style={{ position: 'relative' }}>
              {/* Виджет до клика */}
              <div style={{
                padding: '32px',
                borderRadius: '24px',
                backgroundColor: '#FAF8FF',
                border: '1px solid rgba(118,67,215,0.15)',
                marginBottom: '24px',
                position: 'relative',
              }}>
                <div style={{ fontSize: '13px', color: '#999', marginBottom: '8px', fontWeight: 600 }}>Виджет «Конверсия продаж»</div>
                <div style={{ fontSize: '48px', fontWeight: 800, color: '#22C55E', marginBottom: '8px' }}>78%</div>
                <div style={{ fontSize: '14px', color: '#666' }}>звонков завершились продажей</div>
                
                <div style={{
                  position: 'absolute',
                  top: '16px',
                  right: '16px',
                  padding: '6px 12px',
                  borderRadius: '50px',
                  backgroundColor: 'rgba(118,67,215,0.1)',
                  fontSize: '11px',
                  color: '#7643d7',
                  fontWeight: 600,
                  display: 'flex',
                  alignItems: 'center',
                  gap: '4px',
                }}>
                  <span>Нажмите</span>
                  <span style={{ fontSize: '14px' }}>→</span>
                </div>
              </div>

              <div style={{ textAlign: 'center', marginBottom: '24px' }}>
                <div style={{ fontSize: '32px', color: '#7643d7' }}>↓</div>
              </div>

              {/* Детализация после клика */}
              <div className="card-shine" style={{
                padding: '32px',
                borderRadius: '24px',
                backgroundColor: '#FFF',
                border: '2px solid #7643d7',
                boxShadow: '0 10px 40px rgba(118,67,215,0.15)',
              }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '20px' }}>
                  <div style={{ fontSize: '16px', fontWeight: 700, color: '#190750' }}>🔍 Детализация расчёта</div>
                  <div style={{ fontSize: '12px', color: '#7643d7', fontWeight: 600 }}>за сегодня</div>
                </div>

                <div style={{
                  padding: '16px',
                  backgroundColor: '#FAF8FF',
                  borderRadius: '12px',
                  marginBottom: '20px',
                  border: '1px solid rgba(118,67,215,0.1)',
                }}>
                  <div style={{ fontSize: '11px', color: '#999', marginBottom: '8px', fontWeight: 600 }}>ФОРМУЛА</div>
                  <div style={{ fontSize: '14px', color: '#190750', fontFamily: 'monospace' }}>
                    Конверсия = Продажи / Звонки × 100%
                  </div>
                  <div style={{ fontSize: '13px', color: '#666', marginTop: '8px' }}>
                    = 156 / 200 × 100% = <strong style={{ color: '#22C55E' }}>78%</strong>
                  </div>
                </div>

                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '12px', marginBottom: '20px' }}>
                  <div style={{ padding: '12px', backgroundColor: 'rgba(34,197,94,0.08)', borderRadius: '10px', textAlign: 'center' }}>
                    <div style={{ fontSize: '24px', fontWeight: 800, color: '#22C55E' }}>156</div>
                    <div style={{ fontSize: '11px', color: '#666' }}>продаж</div>
                  </div>
                  <div style={{ padding: '12px', backgroundColor: 'rgba(118,67,215,0.08)', borderRadius: '10px', textAlign: 'center' }}>
                    <div style={{ fontSize: '24px', fontWeight: 800, color: '#7643d7' }}>200</div>
                    <div style={{ fontSize: '11px', color: '#666' }}>звонков</div>
                  </div>
                </div>

                <div style={{
                  padding: '12px',
                  backgroundColor: '#FAF8FF',
                  borderRadius: '10px',
                  fontSize: '12px',
                  color: '#666',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '8px',
                }}>
                  <span style={{ fontSize: '16px' }}>🔗</span>
                  <span>Источник: <strong style={{ color: '#190750' }}>AmoCRM API</strong> • обновлено 2 мин назад</span>
                </div>

                <div style={{ marginTop: '16px', textAlign: 'center' }}>
                  <button style={{
                    padding: '10px 20px',
                    borderRadius: '50px',
                    border: '1px solid #7643d7',
                    backgroundColor: 'transparent',
                    color: '#7643d7',
                    fontWeight: 600,
                    fontSize: '13px',
                    cursor: 'pointer',
                  }}>
                    Посмотреть список звонков →
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Блок: Все выигрывают */}
      <section id="wins" style={{ padding: '120px 20px', backgroundColor: '#FAF8FF' }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
          <h2 style={{ fontSize: '48px', fontWeight: 800, textAlign: 'center', marginBottom: '20px', letterSpacing: '-1px' }}>
            Все <span className="gradient-text">выигрывают</span> от роста выручки
          </h2>
          <p style={{ textAlign: 'center', color: '#666', marginBottom: '80px', fontSize: '18px', maxWidth: '600px', margin: '0 auto 80px' }}>
            Уникальная ценность для каждой роли в компании
          </p>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '32px' }}>
            {/* Руководитель */}
            <div className="card-shine hover-lift" style={{
              padding: '40px',
              borderRadius: '24px',
              background: 'linear-gradient(180deg, rgba(118,67,215,0.08) 0%, #FFF 100%)',
              border: '2px solid rgba(118,67,215,0.2)',
            }}>
              <div style={{ fontSize: '48px', marginBottom: '20px' }}>👔</div>
              <h3 style={{ fontSize: '26px', fontWeight: 800, marginBottom: '20px', color: '#190750' }}>Руководитель</h3>
              <ul style={{ listStyle: 'none', padding: 0 }}>
                {[
                  'Видит рост выручки за 30 секунд',
                  'Понимает, откуда приходят деньги',
                  'Защищает выручку от утечек',
                  'Экономит 160 часов в год',
                ].map((item, i) => (
                  <li key={i} style={{ marginBottom: '12px', display: 'flex', gap: '12px', alignItems: 'flex-start' }}>
                    <span style={{ color: '#22C55E', fontSize: '18px' }}>✓</span>
                    <span style={{ color: '#666', lineHeight: 1.5 }}>{item}</span>
                  </li>
                ))}
              </ul>
              <div style={{ marginTop: '24px', padding: '20px', backgroundColor: '#7643d7', borderRadius: '16px', textAlign: 'center' }}>
                <div style={{ fontSize: '36px', fontWeight: 800, color: '#FFF' }}>340%</div>
                <div style={{ fontSize: '13px', color: 'rgba(255,255,255,0.8)' }}>рост выручки за 3 месяца</div>
              </div>
            </div>

            {/* Администратор */}
            <div className="card-shine hover-lift" style={{
              padding: '40px',
              borderRadius: '24px',
              backgroundColor: '#FFF',
              border: '1px solid rgba(118,67,215,0.1)',
            }}>
              <div style={{ fontSize: '48px', marginBottom: '20px' }}>⚙️</div>
              <h3 style={{ fontSize: '26px', fontWeight: 800, marginBottom: '20px', color: '#190750' }}>Администратор</h3>
              <ul style={{ listStyle: 'none', padding: 0 }}>
                {[
                  'Настройка за 5 минут',
                  'Узнаёт о проблемах мгновенно',
                  'Автоматические отчёты',
                  'Интеграции с АТС, CRM',
                ].map((item, i) => (
                  <li key={i} style={{ marginBottom: '12px', display: 'flex', gap: '12px', alignItems: 'flex-start' }}>
                    <span style={{ color: '#22C55E', fontSize: '18px' }}>✓</span>
                    <span style={{ color: '#666', lineHeight: 1.5 }}>{item}</span>
                  </li>
                ))}
              </ul>
              <div style={{ marginTop: '24px', padding: '20px', backgroundColor: '#FAF8FF', borderRadius: '16px', textAlign: 'center', border: '1px solid rgba(118,67,215,0.1)' }}>
                <div style={{ fontSize: '36px', fontWeight: 800, color: '#7643d7' }}>×3</div>
                <div style={{ fontSize: '13px', color: '#666' }}>быстрее реакция на проблемы</div>
              </div>
            </div>

            {/* Оператор */}
            <div className="card-shine hover-lift" style={{
              padding: '40px',
              borderRadius: '24px',
              backgroundColor: '#FFF',
              border: '1px solid rgba(118,67,215,0.1)',
            }}>
              <div style={{ fontSize: '48px', marginBottom: '20px' }}>🎧</div>
              <h3 style={{ fontSize: '26px', fontWeight: 800, marginBottom: '20px', color: '#190750' }}>Оператор</h3>
              <ul style={{ listStyle: 'none', padding: 0 }}>
                {[
                  'Видит свой вклад в выручку',
                  'Вся история клиента под рукой',
                  'ИИ-подсказки для закрытия',
                  'Рейтинг продаж и геймификация',
                ].map((item, i) => (
                  <li key={i} style={{ marginBottom: '12px', display: 'flex', gap: '12px', alignItems: 'flex-start' }}>
                    <span style={{ color: '#22C55E', fontSize: '18px' }}>✓</span>
                    <span style={{ color: '#666', lineHeight: 1.5 }}>{item}</span>
                  </li>
                ))}
              </ul>
              <div style={{ marginTop: '24px', padding: '20px', backgroundColor: '#FAF8FF', borderRadius: '16px', textAlign: 'center', border: '1px solid rgba(118,67,215,0.1)' }}>
                <div style={{ fontSize: '36px', fontWeight: 800, color: '#22C55E' }}>+18%</div>
                <div style={{ fontSize: '13px', color: '#666' }}>рост личных продаж</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Блок: Польза для отраслей */}
      <section id="industries" style={{ padding: '120px 20px', backgroundColor: '#FFF' }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
          <h2 style={{ fontSize: '48px', fontWeight: 800, textAlign: 'center', marginBottom: '20px', letterSpacing: '-1px' }}>
            Рост выручки для <span className="gradient-text">вашей отрасли</span>
          </h2>
          <p style={{ textAlign: 'center', color: '#666', marginBottom: '60px', fontSize: '18px', maxWidth: '600px', margin: '0 auto 60px' }}>
            Специализированные решения под особенности вашего бизнеса
          </p>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: '24px' }}>
            {/* E-commerce */}
            <div className="card-shine hover-lift" style={{
              padding: '40px',
              borderRadius: '24px',
              backgroundColor: '#FAF8FF',
              border: '1px solid rgba(118,67,215,0.1)',
            }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '16px', marginBottom: '20px' }}>
                <div style={{ fontSize: '40px' }}>🛒</div>
                <h3 style={{ fontSize: '22px', fontWeight: 800, color: '#190750' }}>Интернет-магазины и E-commerce</h3>
              </div>
              <p style={{ color: '#666', lineHeight: 1.7, marginBottom: '24px' }}>
                Каждый пропущенный звонок — потерянная продажа. Отслеживайте конверсию звонков в заказы, выявляйте упущенные допродажи.
              </p>
              <div style={{ display: 'flex', gap: '16px' }}>
                <div style={{ flex: 1, padding: '20px', backgroundColor: 'rgba(34,197,94,0.08)', borderRadius: '16px', textAlign: 'center' }}>
                  <div style={{ fontSize: '28px', fontWeight: 800, color: '#22C55E' }}>+23%</div>
                  <div style={{ fontSize: '12px', color: '#666' }}>конверсия звонков</div>
                </div>
                <div style={{ flex: 1, padding: '20px', backgroundColor: 'rgba(118,67,215,0.08)', borderRadius: '16px', textAlign: 'center' }}>
                  <div style={{ fontSize: '28px', fontWeight: 800, color: '#7643d7' }}>-40%</div>
                  <div style={{ fontSize: '12px', color: '#666' }}>брошенные корзины</div>
                </div>
              </div>
            </div>

            {/* Финансы */}
            <div className="card-shine hover-lift" style={{
              padding: '40px',
              borderRadius: '24px',
              backgroundColor: '#FAF8FF',
              border: '1px solid rgba(118,67,215,0.1)',
            }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '16px', marginBottom: '20px' }}>
                <div style={{ fontSize: '40px' }}>🏦</div>
                <h3 style={{ fontSize: '22px', fontWeight: 800, color: '#190750' }}>Финансы и банки</h3>
              </div>
              <p style={{ color: '#666', lineHeight: 1.7, marginBottom: '24px' }}>
                Полная транскрибация для регулятора. Автоматическое выявление жалоб, запросов на возврат, подозрительных схем.
              </p>
              <div style={{ display: 'flex', gap: '16px' }}>
                <div style={{ flex: 1, padding: '20px', backgroundColor: 'rgba(34,197,94,0.08)', borderRadius: '16px', textAlign: 'center' }}>
                  <div style={{ fontSize: '28px', fontWeight: 800, color: '#22C55E' }}>100%</div>
                  <div style={{ fontSize: '12px', color: '#666' }}>запись разговоров</div>
                </div>
                <div style={{ flex: 1, padding: '20px', backgroundColor: 'rgba(118,67,215,0.08)', borderRadius: '16px', textAlign: 'center' }}>
                  <div style={{ fontSize: '28px', fontWeight: 800, color: '#7643d7' }}>-65%</div>
                  <div style={{ fontSize: '12px', color: '#666' }}>время на аудит</div>
                </div>
              </div>
            </div>

            {/* Телеком */}
            <div className="card-shine hover-lift" style={{
              padding: '40px',
              borderRadius: '24px',
              backgroundColor: '#FAF8FF',
              border: '1px solid rgba(118,67,215,0.1)',
            }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '16px', marginBottom: '20px' }}>
                <div style={{ fontSize: '40px' }}>📡</div>
                <h3 style={{ fontSize: '22px', fontWeight: 800, color: '#190750' }}>Телеком и связь</h3>
              </div>
              <p style={{ color: '#666', lineHeight: 1.7, marginBottom: '24px' }}>
                Мониторинг качества связи в реальном времени. Прогноз оттока абонентов на основе анализа разговоров.
              </p>
              <div style={{ display: 'flex', gap: '16px' }}>
                <div style={{ flex: 1, padding: '20px', backgroundColor: 'rgba(34,197,94,0.08)', borderRadius: '16px', textAlign: 'center' }}>
                  <div style={{ fontSize: '28px', fontWeight: 800, color: '#22C55E' }}>-35%</div>
                  <div style={{ fontSize: '12px', color: '#666' }}>отток клиентов</div>
                </div>
                <div style={{ flex: 1, padding: '20px', backgroundColor: 'rgba(118,67,215,0.08)', borderRadius: '16px', textAlign: 'center' }}>
                  <div style={{ fontSize: '28px', fontWeight: 800, color: '#7643d7' }}>30 мин</div>
                  <div style={{ fontSize: '12px', color: '#666' }}>реакция на сбои</div>
                </div>
              </div>
            </div>

            {/* Медицина */}
            <div className="card-shine hover-lift" style={{
              padding: '40px',
              borderRadius: '24px',
              backgroundColor: '#FAF8FF',
              border: '1px solid rgba(118,67,215,0.1)',
            }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '16px', marginBottom: '20px' }}>
                <div style={{ fontSize: '40px' }}>🏥</div>
                <h3 style={{ fontSize: '22px', fontWeight: 800, color: '#190750' }}>Медицина и здравоохранение</h3>
              </div>
              <p style={{ color: '#666', lineHeight: 1.7, marginBottom: '24px' }}>
                Запись разговоров для защиты от претензий. Контроль качества обслуживания и напоминания о записи.
              </p>
              <div style={{ display: 'flex', gap: '16px' }}>
                <div style={{ flex: 1, padding: '20px', backgroundColor: 'rgba(34,197,94,0.08)', borderRadius: '16px', textAlign: 'center' }}>
                  <div style={{ fontSize: '28px', fontWeight: 800, color: '#22C55E' }}>+45%</div>
                  <div style={{ fontSize: '12px', color: '#666' }}>явка на приём</div>
                </div>
                <div style={{ flex: 1, padding: '20px', backgroundColor: 'rgba(118,67,215,0.08)', borderRadius: '16px', textAlign: 'center' }}>
                  <div style={{ fontSize: '28px', fontWeight: 800, color: '#7643d7' }}>-80%</div>
                  <div style={{ fontSize: '12px', color: '#666' }}>жалобы пациентов</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Блок: Выиграй больше - промо игры */}
      <section style={{ padding: '120px 20px', background: 'linear-gradient(135deg, #FAF8FF 0%, #FFF 50%, #FAF8FF 100%)' }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '80px', alignItems: 'center' }}>
            <div>
              <div style={{
                display: 'inline-block',
                padding: '10px 24px',
                borderRadius: '50px',
                backgroundColor: 'rgba(255,165,0,0.1)',
                marginBottom: '24px',
                fontSize: '14px',
                color: '#FF8C00',
                fontWeight: 600,
              }}>
                🍯 Эксклюзивная акция
              </div>
              <h2 style={{ fontSize: '44px', fontWeight: 800, marginBottom: '24px', lineHeight: 1.2, letterSpacing: '-1px' }}>
                Выиграйте больше с{' '}
                <span style={{ background: 'linear-gradient(90deg, #FFD700, #FFA500)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>
                  ростом выручки
                </span>
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
// ГЛАВНЫЙ КОМПОНЕНТ С ПЕРЕКЛЮЧАТЕЛЕМ
// ============================================
export default function Landing() {
  const [concept, setConcept] = useState(1)

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
        <div style={{ display: 'flex', gap: '8px' }}>
          <button onClick={() => setConcept(1)} style={{
            padding: '12px 24px',
            borderRadius: '50px',
            border: 'none',
            backgroundColor: concept === 1 ? '#7643d7' : '#FAF8FF',
            color: concept === 1 ? '#FFF' : '#190750',
            fontWeight: 600,
            cursor: 'pointer',
            fontSize: '13px',
            transition: 'all 0.3s ease',
          }}>
            Хуки
          </button>
          <button onClick={() => setConcept(2)} style={{
            padding: '12px 24px',
            borderRadius: '50px',
            border: 'none',
            backgroundColor: concept === 2 ? '#7643d7' : '#FAF8FF',
            color: concept === 2 ? '#FFF' : '#190750',
            fontWeight: 600,
            cursor: 'pointer',
            fontSize: '13px',
            transition: 'all 0.3s ease',
          }}>
            Детально
          </button>
        </div>
        <div style={{ marginTop: '8px', fontSize: '11px', color: '#999', textAlign: 'center' }}>
          {concept === 1 ? 'Кратко • Цепляющие хуки' : 'Развёрнуто • Подробно'}
        </div>
      </div>

      {concept === 1 ? <LandingConcept1 /> : <LandingConcept2 />}
    </div>
  )
}
