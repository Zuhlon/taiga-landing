'use client'

import { useState } from 'react'

// ============================================
// КОНЦЕПТ 1: Краткие цепляющие хуки (Gong Style)
// ============================================
function LandingConcept1() {
  return (
    <div style={{ minHeight: '100vh', backgroundColor: '#0A0A0A', color: '#FFFFFF' }}>
      {/* Header */}
      <header style={{
        position: 'fixed',
        top: 0,
        left: 0,
        right: 0,
        padding: '20px 40px',
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        backgroundColor: 'rgba(10,10,10,0.9)',
        backdropFilter: 'blur(10px)',
        zIndex: 100,
        borderBottom: '1px solid rgba(255,255,255,0.1)',
      }}>
        <div style={{ fontSize: '24px', fontWeight: 'bold', background: 'linear-gradient(90deg, #FFD700, #FFA500)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>
          Контакт.ИИ
        </div>
        <nav style={{ display: 'flex', gap: '32px', alignItems: 'center' }}>
          <a href="#features" style={{ color: '#999', textDecoration: 'none', fontSize: '14px' }}>Возможности</a>
          <a href="#omni" style={{ color: '#999', textDecoration: 'none', fontSize: '14px' }}>Омниканальность</a>
          <a href="#pricing" style={{ color: '#999', textDecoration: 'none', fontSize: '14px' }}>Тарифы</a>
          <button style={{
            padding: '12px 24px',
            borderRadius: '8px',
            border: 'none',
            backgroundColor: '#FFD700',
            color: '#000',
            fontWeight: 'bold',
            cursor: 'pointer',
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
        padding: '160px 20px 80px',
      }}>
        <div style={{
          display: 'inline-block',
          padding: '8px 16px',
          borderRadius: '20px',
          backgroundColor: 'rgba(255,215,0,0.1)',
          border: '1px solid rgba(255,215,0,0.3)',
          marginBottom: '24px',
          fontSize: '14px',
          color: '#FFD700',
        }}>
          🚀 Омниканальный контакт-центр нового поколения
        </div>
        
        <h1 style={{
          fontSize: '72px',
          fontWeight: 'bold',
          lineHeight: 1.1,
          marginBottom: '24px',
          maxWidth: '900px',
          margin: '0 auto 24px',
          background: 'linear-gradient(180deg, #FFFFFF 0%, #999999 100%)',
          WebkitBackgroundClip: 'text',
          WebkitTextFillColor: 'transparent',
        }}>
          Знай. Предвидь. Действуй.
        </h1>
        
        <p style={{
          fontSize: '24px',
          color: '#888',
          maxWidth: '600px',
          margin: '0 auto 40px',
          lineHeight: 1.6,
        }}>
          AI-платформа для колл-центров. Все каналы. Одна система. 30 секунд до истины.
        </p>
        
        <div style={{ display: 'flex', gap: '16px', justifyContent: 'center' }}>
          <button style={{
            padding: '18px 36px',
            borderRadius: '12px',
            border: 'none',
            backgroundColor: '#FFD700',
            color: '#000',
            fontWeight: 'bold',
            fontSize: '18px',
            cursor: 'pointer',
          }}>
            Попробовать 14 дней бесплатно
          </button>
          <button style={{
            padding: '18px 36px',
            borderRadius: '12px',
            border: '1px solid rgba(255,255,255,0.2)',
            backgroundColor: 'transparent',
            color: '#FFF',
            fontWeight: 'bold',
            fontSize: '18px',
            cursor: 'pointer',
          }}>
            Смотреть демо
          </button>
        </div>

        {/* Logos */}
        <div style={{ marginTop: '60px' }}>
          <p style={{ color: '#666', marginBottom: '20px', fontSize: '14px' }}>Нам доверяют лидеры рынка</p>
          <div style={{ display: 'flex', gap: '40px', justifyContent: 'center', opacity: 0.5 }}>
            {['МОС-регистратор', 'АвтоСпецЦентр', 'Телеком Про', 'МедЦентр', 'FinTech'].map((name, i) => (
              <span key={i} style={{ fontSize: '16px', fontWeight: 'bold' }}>{name}</span>
            ))}
          </div>
        </div>
      </section>

      {/* Stats */}
      <section style={{ padding: '60px 20px', backgroundColor: 'rgba(255,255,255,0.02)' }}>
        <div style={{ maxWidth: '1000px', margin: '0 auto', display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: '40px', textAlign: 'center' }}>
          {[
            { value: '340%', label: 'ROI за 3 месяца' },
            { value: '18%', label: 'рост конверсии' },
            { value: '30 сек', label: 'до инсайта' },
            { value: '5 мин', label: 'на настройку' },
          ].map((stat, i) => (
            <div key={i}>
              <div style={{ fontSize: '48px', fontWeight: 'bold', color: '#FFD700' }}>{stat.value}</div>
              <div style={{ fontSize: '16px', color: '#888', marginTop: '8px' }}>{stat.label}</div>
            </div>
          ))}
        </div>
      </section>

      {/* Features Grid */}
      <section id="features" style={{ padding: '100px 20px' }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
          <h2 style={{ fontSize: '48px', fontWeight: 'bold', textAlign: 'center', marginBottom: '60px' }}>
            Всё, что нужно. Ничего лишнего.
          </h2>
          
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '24px' }}>
            {[
              { icon: '🚦', title: 'Светофор метрик', desc: 'Зелёный. Жёлтый. Красный. 3 секунды — и ты знаешь всё.' },
              { icon: '🤖', title: 'AI-ассистент', desc: 'Опиши голосом — виджет готов. Без кода.' },
              { icon: '📱', title: 'Telegram-бот', desc: 'Система придёт к тебе. Не наоборот.' },
              { icon: '📞', title: 'Транскрибация', desc: 'Каждый звонок — текст. AI найдёт инсайты.' },
              { icon: '🎯', title: 'Intent-сигналы', desc: 'Кто готов купить. Кто уходит. Заранее.' },
              { icon: '🛡️', title: 'Защита от фрода', desc: 'AI детектирует попытки увода клиентов.' },
            ].map((f, i) => (
              <div key={i} style={{
                padding: '32px',
                borderRadius: '16px',
                backgroundColor: 'rgba(255,255,255,0.03)',
                border: '1px solid rgba(255,255,255,0.1)',
              }}>
                <div style={{ fontSize: '40px', marginBottom: '16px' }}>{f.icon}</div>
                <h3 style={{ fontSize: '20px', fontWeight: 'bold', marginBottom: '12px' }}>{f.title}</h3>
                <p style={{ fontSize: '16px', color: '#888', lineHeight: 1.6 }}>{f.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Omnichannel */}
      <section id="omni" style={{ padding: '100px 20px', background: 'linear-gradient(180deg, #0A0A0A 0%, #1A1A1A 100%)' }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto', textAlign: 'center' }}>
          <h2 style={{ fontSize: '48px', fontWeight: 'bold', marginBottom: '24px' }}>
            Омниканальность — это не бонус
          </h2>
          <p style={{ fontSize: '24px', color: '#888', marginBottom: '60px' }}>
            Это необходимость. Все каналы в одной системе.
          </p>
          
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(5, 1fr)', gap: '20px' }}>
            {[
              { icon: '📞', title: 'Телефон', desc: 'Входящие, исходящие' },
              { icon: '💬', title: 'Чаты', desc: 'WhatsApp, Telegram, VK' },
              { icon: '📧', title: 'Email', desc: 'Все почтовые клиенты' },
              { icon: '🌐', title: 'Сайт', desc: 'Виджеты, чат-боты' },
              { icon: '📱', title: 'Соцсети', desc: 'Комментарии, Direct' },
            ].map((ch, i) => (
              <div key={i} style={{
                padding: '24px',
                borderRadius: '12px',
                backgroundColor: 'rgba(255,215,0,0.05)',
                border: '1px solid rgba(255,215,0,0.2)',
              }}>
                <div style={{ fontSize: '32px', marginBottom: '12px' }}>{ch.icon}</div>
                <div style={{ fontWeight: 'bold', marginBottom: '4px' }}>{ch.title}</div>
                <div style={{ fontSize: '12px', color: '#888' }}>{ch.desc}</div>
              </div>
            ))}
          </div>

          <div style={{ marginTop: '40px', padding: '24px', backgroundColor: 'rgba(255,255,255,0.03)', borderRadius: '12px', maxWidth: '600px', margin: '40px auto 0' }}>
            <p style={{ fontSize: '18px', color: '#FFD700', fontWeight: 'bold' }}>
              Единая очередь • Единая история • Единый интерфейс
            </p>
          </div>
        </div>
      </section>

      {/* Competitor Features */}
      <section style={{ padding: '100px 20px' }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
          <h2 style={{ fontSize: '48px', fontWeight: 'bold', textAlign: 'center', marginBottom: '60px' }}>
            Фичи, которые есть у конкурентов за $
          </h2>
          
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: '32px' }}>
            <div style={{ padding: '40px', borderRadius: '16px', background: 'linear-gradient(135deg, rgba(255,215,0,0.1) 0%, rgba(255,165,0,0.05) 100%)', border: '1px solid rgba(255,215,0,0.2)' }}>
              <h3 style={{ fontSize: '24px', fontWeight: 'bold', marginBottom: '20px', color: '#FFD700' }}>Как у Gong.io</h3>
              <ul style={{ listStyle: 'none', padding: 0 }}>
                <li style={{ marginBottom: '12px', display: 'flex', alignItems: 'center', gap: '12px' }}>
                  <span style={{ color: '#22C55E' }}>✓</span> Conversation Intelligence
                </li>
                <li style={{ marginBottom: '12px', display: 'flex', alignItems: 'center', gap: '12px' }}>
                  <span style={{ color: '#22C55E' }}>✓</span> AI-анализ разговоров
                </li>
                <li style={{ marginBottom: '12px', display: 'flex', alignItems: 'center', gap: '12px' }}>
                  <span style={{ color: '#22C55E' }}>✓</span> Deal forecasting
                </li>
                <li style={{ marginBottom: '12px', display: 'flex', alignItems: 'center', gap: '12px' }}>
                  <span style={{ color: '#22C55E' }}>✓</span> + Русский язык из коробки
                </li>
              </ul>
            </div>
            
            <div style={{ padding: '40px', borderRadius: '16px', background: 'linear-gradient(135deg, rgba(255,215,0,0.1) 0%, rgba(255,165,0,0.05) 100%)', border: '1px solid rgba(255,215,0,0.2)' }}>
              <h3 style={{ fontSize: '24px', fontWeight: 'bold', marginBottom: '20px', color: '#FFD700' }}>Как у Genesys</h3>
              <ul style={{ listStyle: 'none', padding: 0 }}>
                <li style={{ marginBottom: '12px', display: 'flex', alignItems: 'center', gap: '12px' }}>
                  <span style={{ color: '#22C55E' }}>✓</span> Agent Copilot
                </li>
                <li style={{ marginBottom: '12px', display: 'flex', alignItems: 'center', gap: '12px' }}>
                  <span style={{ color: '#22C55E' }}>✓</span> Customer Journey
                </li>
                <li style={{ marginBottom: '12px', display: 'flex', alignItems: 'center', gap: '12px' }}>
                  <span style={{ color: '#22C55E' }}>✓</span> Real-time analytics
                </li>
                <li style={{ marginBottom: '12px', display: 'flex', alignItems: 'center', gap: '12px' }}>
                  <span style={{ color: '#22C55E' }}>✓</span> + Настройка за 5 минут (не недели)
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section style={{ padding: '100px 20px', textAlign: 'center' }}>
        <h2 style={{ fontSize: '48px', fontWeight: 'bold', marginBottom: '24px' }}>
          Готов к инсайтам?
        </h2>
        <p style={{ fontSize: '20px', color: '#888', marginBottom: '40px' }}>
          14 дней бесплатно. Без карты. Без риска.
        </p>
        <button style={{
          padding: '20px 48px',
          borderRadius: '12px',
          border: 'none',
          backgroundColor: '#FFD700',
          color: '#000',
          fontWeight: 'bold',
          fontSize: '20px',
          cursor: 'pointer',
        }}>
          Начать сейчас
        </button>
      </section>
    </div>
  )
}

// ============================================
// КОНЦЕПТ 2: Развернутые объяснения (AmoCRM Style)
// ============================================
function LandingConcept2() {
  return (
    <div style={{ minHeight: '100vh', backgroundColor: '#FFFFFF', color: '#1A1A1A' }}>
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
        backgroundColor: '#FFFFFF',
        zIndex: 100,
        boxShadow: '0 1px 3px rgba(0,0,0,0.1)',
      }}>
        <div style={{ fontSize: '24px', fontWeight: 'bold', color: '#FFD700' }}>
          Контакт.ИИ
        </div>
        <nav style={{ display: 'flex', gap: '32px', alignItems: 'center' }}>
          <a href="#problems" style={{ color: '#666', textDecoration: 'none', fontSize: '15px' }}>Проблемы</a>
          <a href="#solution" style={{ color: '#666', textDecoration: 'none', fontSize: '15px' }}>Решение</a>
          <a href="#omni" style={{ color: '#666', textDecoration: 'none', fontSize: '15px' }}>Омниканальность</a>
          <a href="#cases" style={{ color: '#666', textDecoration: 'none', fontSize: '15px' }}>Кейсы</a>
          <button style={{
            padding: '12px 24px',
            borderRadius: '8px',
            border: 'none',
            backgroundColor: '#000',
            color: '#FFD700',
            fontWeight: 'bold',
            cursor: 'pointer',
          }}>
            Попробовать бесплатно
          </button>
        </nav>
      </header>

      {/* Hero */}
      <section style={{
        paddingTop: '140px',
        paddingBottom: '80px',
        padding: '140px 20px 80px',
        backgroundColor: '#FAFAFA',
      }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto', display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '60px', alignItems: 'center' }}>
          <div>
            <h1 style={{
              fontSize: '52px',
              fontWeight: 'bold',
              lineHeight: 1.2,
              marginBottom: '24px',
            }}>
              Платформа управления контакт-центром, которая <span style={{ color: '#FFD700' }}>предвидит проблемы</span>
            </h1>
            <p style={{
              fontSize: '20px',
              color: '#666',
              marginBottom: '32px',
              lineHeight: 1.7,
            }}>
              Объедините все каналы связи, получайте AI-инсайты и управляйте командой из одной системы. 
              Настройка за 5 минут. Русский язык. Поддержка 24/7.
            </p>
            <div style={{ display: 'flex', gap: '16px', marginBottom: '32px' }}>
              <button style={{
                padding: '16px 32px',
                borderRadius: '8px',
                border: 'none',
                backgroundColor: '#FFD700',
                color: '#000',
                fontWeight: 'bold',
                fontSize: '16px',
                cursor: 'pointer',
              }}>
                Попробовать 14 дней бесплатно
              </button>
              <button style={{
                padding: '16px 32px',
                borderRadius: '8px',
                border: '2px solid #E0E0E0',
                backgroundColor: '#FFF',
                color: '#000',
                fontWeight: 'bold',
                fontSize: '16px',
                cursor: 'pointer',
              }}>
                Запросить демо
              </button>
            </div>
            <div style={{ display: 'flex', gap: '24px', fontSize: '14px', color: '#888' }}>
              <span>✓ Без привязки карты</span>
              <span>✓ Настройка за 5 минут</span>
              <span>✓ Поддержка на русском</span>
            </div>
          </div>
          
          {/* Dashboard Preview */}
          <div style={{
            backgroundColor: '#FFF',
            borderRadius: '16px',
            padding: '24px',
            boxShadow: '0 20px 60px rgba(0,0,0,0.1)',
            border: '1px solid #E0E0E0',
          }}>
            <div style={{ marginBottom: '16px', display: 'flex', gap: '8px', justifyContent: 'center' }}>
              <div style={{ width: '60px', height: '60px', borderRadius: '50%', backgroundColor: '#22C55E' }} />
              <div style={{ width: '60px', height: '60px', borderRadius: '50%', backgroundColor: '#FFD700', opacity: 0.4 }} />
              <div style={{ width: '60px', height: '60px', borderRadius: '50%', backgroundColor: '#EF4444', opacity: 0.4 }} />
            </div>
            <div style={{ textAlign: 'center', marginBottom: '24px' }}>
              <div style={{ fontSize: '28px', fontWeight: 'bold', color: '#22C55E' }}>✓ Всё хорошо</div>
              <div style={{ color: '#888' }}>62 звонка обработано</div>
            </div>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '12px' }}>
              {[
                { value: '1,247', label: 'Звонков сегодня', trend: '+12%' },
                { value: '94%', label: 'Обработано', trend: '+3%' },
                { value: '2:15', label: 'Среднее время', trend: '-30с' },
              ].map((m, i) => (
                <div key={i} style={{ textAlign: 'center', padding: '12px', backgroundColor: '#FAFAFA', borderRadius: '8px' }}>
                  <div style={{ fontSize: '20px', fontWeight: 'bold' }}>{m.value}</div>
                  <div style={{ fontSize: '12px', color: '#888' }}>{m.label}</div>
                  <div style={{ fontSize: '12px', color: '#22C55E', fontWeight: 'bold' }}>{m.trend}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Problems Section */}
      <section id="problems" style={{ padding: '100px 20px' }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
          <h2 style={{ fontSize: '40px', fontWeight: 'bold', textAlign: 'center', marginBottom: '16px' }}>
            5 проблем, которые решает Контакт.ИИ
          </h2>
          <p style={{ textAlign: 'center', color: '#666', marginBottom: '60px', fontSize: '18px' }}>
            Каждая из них отнимает ваше время и деньги
          </p>
          
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(350px, 1fr))', gap: '24px' }}>
            {[
              { 
                icon: '📊', 
                title: 'Разрозненные данные', 
                problem: 'АТС, CRM, чат-бот — разные системы, разные отчёты. Сбор информации занимает 40 минут каждое утро.',
                solution: 'Единая витрина виджетов — все данные в одном месте, обновляются в реальном времени.'
              },
              { 
                icon: '⏰', 
                title: 'Позднее обнаружение проблем', 
                problem: 'Узнаёте о сбоях, когда клиенты уже ушли. Время реакции — 3 дня.',
                solution: 'Светофор метрик и уведомления в Telegram — проблемы видны за 30 секунд.'
              },
              { 
                icon: '🛡️', 
                title: 'Риск увода клиентов', 
                problem: 'Сотрудники могут переводить клиентов на личное обслуживание. Доказать невозможно.',
                solution: 'Транскрибация + AI-анализ — каждый разговор под контролем.'
              },
              { 
                icon: '📈', 
                title: 'Нет прозрачности KPI', 
                problem: 'Сотрудники не видят прогресс к плану. Мотивация падает.',
                solution: 'Персональные дашборды — каждый видит свои цели и результаты в реальном времени.'
              },
              { 
                icon: '📱', 
                title: 'Много каналов, нет системы', 
                problem: 'Звонки, чаты, email — всё в разных местах. Клиенты теряются.',
                solution: 'Омниканальность — единая очередь и история по всем каналам.'
              },
            ].map((p, i) => (
              <div key={i} style={{
                padding: '32px',
                borderRadius: '16px',
                border: '1px solid #E0E0E0',
                backgroundColor: '#FFF',
              }}>
                <div style={{ fontSize: '40px', marginBottom: '16px' }}>{p.icon}</div>
                <h3 style={{ fontSize: '20px', fontWeight: 'bold', marginBottom: '12px' }}>{p.title}</h3>
                <p style={{ color: '#666', marginBottom: '16px', lineHeight: 1.6 }}>{p.problem}</p>
                <div style={{ padding: '12px', backgroundColor: '#FFF9E6', borderRadius: '8px', fontSize: '14px' }}>
                  <span style={{ fontWeight: 'bold', color: '#000' }}>Решение: </span>
                  <span style={{ color: '#666' }}>{p.solution}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Omnichannel Deep Dive */}
      <section id="omni" style={{ padding: '100px 20px', backgroundColor: '#FAFAFA' }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
          <h2 style={{ fontSize: '40px', fontWeight: 'bold', textAlign: 'center', marginBottom: '16px' }}>
            Омниканальность — единый опыт для клиента
          </h2>
          <p style={{ textAlign: 'center', color: '#666', marginBottom: '60px', fontSize: '18px', maxWidth: '700px', margin: '0 auto 60px' }}>
            Клиент начинает в чате, продолжает по телефону, завершает в email — для вас это один диалог. 
            История сохраняется, контекст не теряется.
          </p>
          
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: '40px', marginBottom: '60px' }}>
            {/* Channels */}
            <div>
              <h3 style={{ fontSize: '24px', fontWeight: 'bold', marginBottom: '24px' }}>Все каналы связи</h3>
              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: '16px' }}>
                {[
                  { icon: '📞', name: 'Телефония', desc: 'Входящие/исходящие, запись' },
                  { icon: '💬', name: 'Мессенджеры', desc: 'WhatsApp, Telegram, VK' },
                  { icon: '📧', name: 'Email', desc: 'Все почтовые клиенты' },
                  { icon: '🌐', name: 'Виджеты сайта', desc: 'Чат, обратный звонок' },
                  { icon: '📱', name: 'Соцсети', desc: 'Комментарии, Direct' },
                  { icon: '🤖', name: 'Чат-боты', desc: 'Автоответы 24/7' },
                ].map((ch, i) => (
                  <div key={i} style={{
                    padding: '16px',
                    borderRadius: '12px',
                    border: '1px solid #E0E0E0',
                    backgroundColor: '#FFF',
                  }}>
                    <div style={{ fontSize: '24px', marginBottom: '8px' }}>{ch.icon}</div>
                    <div style={{ fontWeight: 'bold', marginBottom: '4px' }}>{ch.name}</div>
                    <div style={{ fontSize: '12px', color: '#888' }}>{ch.desc}</div>
                  </div>
                ))}
              </div>
            </div>
            
            {/* Benefits */}
            <div>
              <h3 style={{ fontSize: '24px', fontWeight: 'bold', marginBottom: '24px' }}>Что это даёт</h3>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
                {[
                  { title: 'Единая очередь', desc: 'Звонок или чат — один приоритет, одна маршрутизация' },
                  { title: 'Единая история', desc: 'Все контакты с клиентом в одном месте' },
                  { title: 'Переключение каналов', desc: 'Начал в чате — продолжил по телефону без потери контекста' },
                  { title: 'Единая отчётность', desc: 'Метрики по всем каналам на одном дашборде' },
                ].map((b, i) => (
                  <div key={i} style={{
                    padding: '20px',
                    borderRadius: '12px',
                    backgroundColor: '#FFF',
                    border: '1px solid #E0E0E0',
                  }}>
                    <div style={{ fontWeight: 'bold', marginBottom: '4px', color: '#000' }}>{b.title}</div>
                    <div style={{ fontSize: '14px', color: '#666' }}>{b.desc}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Comparison */}
      <section id="solution" style={{ padding: '100px 20px' }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
          <h2 style={{ fontSize: '40px', fontWeight: 'bold', textAlign: 'center', marginBottom: '60px' }}>
            Сравните с конкурентами
          </h2>
          
          <div style={{ overflowX: 'auto' }}>
            <table style={{ width: '100%', borderCollapse: 'collapse', minWidth: '700px' }}>
              <thead>
                <tr style={{ backgroundColor: '#FFD700' }}>
                  <th style={{ padding: '16px', textAlign: 'left', fontWeight: 'bold' }}>Возможность</th>
                  <th style={{ padding: '16px', textAlign: 'center', fontWeight: 'bold' }}>Контакт.ИИ</th>
                  <th style={{ padding: '16px', textAlign: 'center', fontWeight: 'bold' }}>AmoCRM</th>
                  <th style={{ padding: '16px', textAlign: 'center', fontWeight: 'bold' }}>Genesys</th>
                  <th style={{ padding: '16px', textAlign: 'center', fontWeight: 'bold' }}>Gong</th>
                </tr>
              </thead>
              <tbody>
                {[
                  ['🚦 Светофор метрик', '✅', '❌', '⚠️ Сложно', '❌'],
                  ['📱 Telegram-уведомления', '✅', '⚠️ Интеграции', '⚠️ $', '❌'],
                  ['🤖 AI-ассистент', '✅', '❌', '⚠️ $', '✅'],
                  ['📞 Транскрибация', '✅', '❌', '✅', '✅'],
                  ['🌐 Омниканальность', '✅', '⚠️ Частично', '✅', '❌'],
                  ['🇷🇺 Русский язык', '✅', '✅', '❌', '❌'],
                  ['⏱️ Настройка', '5 минут', '1-2 дня', 'Недели', '1 день'],
                  ['💰 Цена от', 'бесплатно', '$15/мес', '$75/мес', '$100/мес'],
                ].map((row, i) => (
                  <tr key={i} style={{ backgroundColor: i % 2 === 0 ? '#FFF' : '#FAFAFA' }}>
                    <td style={{ padding: '16px', borderBottom: '1px solid #E0E0E0' }}>{row[0]}</td>
                    <td style={{ padding: '16px', textAlign: 'center', borderBottom: '1px solid #E0E0E0', fontWeight: 'bold', color: '#22C55E' }}>{row[1]}</td>
                    <td style={{ padding: '16px', textAlign: 'center', borderBottom: '1px solid #E0E0E0', color: '#666' }}>{row[2]}</td>
                    <td style={{ padding: '16px', textAlign: 'center', borderBottom: '1px solid #E0E0E0', color: '#666' }}>{row[3]}</td>
                    <td style={{ padding: '16px', textAlign: 'center', borderBottom: '1px solid #E0E0E0', color: '#666' }}>{row[4]}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* Cases */}
      <section id="cases" style={{ padding: '100px 20px', backgroundColor: '#FAFAFA' }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
          <h2 style={{ fontSize: '40px', fontWeight: 'bold', textAlign: 'center', marginBottom: '16px' }}>
            Результаты наших клиентов
          </h2>
          <p style={{ textAlign: 'center', color: '#666', marginBottom: '60px', fontSize: '18px' }}>
            Средний ROI — 340% за 3 месяца
          </p>
          
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: '32px' }}>
            {[
              { 
                company: 'МОС-регистратор', 
                result: '+18%', 
                metric: 'конверсия КЦ',
                before: 'Время обнаружения проблем — 3 дня',
                after: '30 минут — и проблема видна',
                image: '🏢'
              },
              { 
                company: 'АвтоСпецЦентр', 
                result: '340%', 
                metric: 'ROI',
                before: '160 часов в год на сбор отчётов',
                after: '0 часов — всё автоматически',
                image: '🚗'
              },
            ].map((c, i) => (
              <div key={i} style={{
                padding: '32px',
                borderRadius: '16px',
                backgroundColor: '#FFF',
                border: '1px solid #E0E0E0',
              }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '16px', marginBottom: '20px' }}>
                  <div style={{ fontSize: '48px' }}>{c.image}</div>
                  <div>
                    <div style={{ fontWeight: 'bold', fontSize: '20px' }}>{c.company}</div>
                    <div style={{ display: 'flex', alignItems: 'baseline', gap: '8px' }}>
                      <span style={{ fontSize: '36px', fontWeight: 'bold', color: '#FFD700' }}>{c.result}</span>
                      <span style={{ color: '#666' }}>{c.metric}</span>
                    </div>
                  </div>
                </div>
                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '16px' }}>
                  <div style={{ padding: '12px', backgroundColor: '#FFF0F0', borderRadius: '8px' }}>
                    <div style={{ fontSize: '12px', fontWeight: 'bold', color: '#CC0000', marginBottom: '4px' }}>До</div>
                    <div style={{ fontSize: '14px', color: '#666' }}>{c.before}</div>
                  </div>
                  <div style={{ padding: '12px', backgroundColor: '#F0FFF0', borderRadius: '8px' }}>
                    <div style={{ fontSize: '12px', fontWeight: 'bold', color: '#22C55E', marginBottom: '4px' }}>После</div>
                    <div style={{ fontSize: '14px', color: '#666' }}>{c.after}</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section style={{ padding: '100px 20px', backgroundColor: '#000', textAlign: 'center' }}>
        <h2 style={{ fontSize: '40px', fontWeight: 'bold', marginBottom: '16px', color: '#FFF' }}>
          Начните контролировать бизнес за 5 минут
        </h2>
        <p style={{ fontSize: '20px', color: '#888', marginBottom: '40px' }}>
          14 дней бесплатно • Без привязки карты • Поддержка 24/7
        </p>
        <button style={{
          padding: '20px 48px',
          borderRadius: '12px',
          border: 'none',
          backgroundColor: '#FFD700',
          color: '#000',
          fontWeight: 'bold',
          fontSize: '18px',
          cursor: 'pointer',
        }}>
          Попробовать бесплатно
        </button>
      </section>
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
        backgroundColor: concept === 1 ? '#0A0A0A' : '#FFF',
        padding: '16px',
        borderRadius: '16px',
        boxShadow: '0 4px 20px rgba(0,0,0,0.3)',
        border: concept === 1 ? '1px solid rgba(255,255,255,0.1)' : '1px solid #E0E0E0',
      }}>
        <div style={{
          marginBottom: '12px',
          fontSize: '12px',
          fontWeight: 'bold',
          color: concept === 1 ? '#888' : '#666',
          textAlign: 'center',
        }}>
          Концепт лендинга
        </div>
        <div style={{ display: 'flex', gap: '8px' }}>
          <button
            onClick={() => setConcept(1)}
            style={{
              padding: '12px 20px',
              borderRadius: '8px',
              border: 'none',
              backgroundColor: concept === 1 ? '#FFD700' : (concept === 1 ? 'rgba(255,255,255,0.1)' : '#F0F0F0'),
              color: concept === 1 ? '#000' : '#888',
              fontWeight: 'bold',
              cursor: 'pointer',
              fontSize: '13px',
            }}
          >
            Хуки
          </button>
          <button
            onClick={() => setConcept(2)}
            style={{
              padding: '12px 20px',
              borderRadius: '8px',
              border: 'none',
              backgroundColor: concept === 2 ? '#000' : (concept === 1 ? 'rgba(255,255,255,0.1)' : '#F0F0F0'),
              color: concept === 2 ? '#FFD700' : '#888',
              fontWeight: 'bold',
              cursor: 'pointer',
              fontSize: '13px',
            }}
          >
            Детально
          </button>
        </div>
        <div style={{
          marginTop: '8px',
          fontSize: '11px',
          color: concept === 1 ? '#666' : '#999',
          textAlign: 'center',
        }}>
          {concept === 1 ? 'Стиль: Gong.io' : 'Стиль: AmoCRM'}
        </div>
      </div>

      {/* Render Selected Concept */}
      {concept === 1 ? <LandingConcept1 /> : <LandingConcept2 />}
    </div>
  )
}
