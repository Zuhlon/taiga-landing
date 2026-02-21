// ============================================
// КОНЦЕПТ 5: Объединённый (Детально + Руководитель + Коллега + Сотрудники)
// Учитывает все пожелания Артема из транскрибации
// + Акцент на ценность для разных ролей
// + Изображение продукта на iPad
// + Примеры виджетов
// ============================================
function LandingConcept5() {
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
          <a href="#roles" className="hover-lift" style={{ color: '#190750', textDecoration: 'none', fontSize: '15px', fontWeight: 500 }}>Для всех ролей</a>
          <a href="#widgets" className="hover-lift" style={{ color: '#190750', textDecoration: 'none', fontSize: '15px', fontWeight: 500 }}>Виджеты</a>
          <a href="#transparency" className="hover-lift" style={{ color: '#190750', textDecoration: 'none', fontSize: '15px', fontWeight: 500 }}>Прозрачность</a>
          <a href="#integrations" className="hover-lift" style={{ color: '#190750', textDecoration: 'none', fontSize: '15px', fontWeight: 500 }}>Интеграции</a>
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
        
        <h1 style={{
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
        
        <p style={{
          fontSize: '20px',
          color: '#666',
          maxWidth: '700px',
          margin: '0 auto 40px',
          lineHeight: 1.7,
        }}>
          Контакт.ИИ превращает каждый контакт с клиентом в управляемый источник продаж. 
          Платформа для администраторов, руководителей и сотрудников.
        </p>
        
        {/* Кнопки */}
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
            Попробовать 14 дней бесплатно
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
              src="/download/contact_ai_ipad_dashboard.png" 
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
      <section id="roles" style={{ padding: '120px 20px', backgroundColor: '#FFF' }}>
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
            <h2 style={{ fontSize: '48px', fontWeight: 800, marginBottom: '20px', letterSpacing: '-1px' }}>
              Что <span className="gradient-text">получит администратор</span> и что <span className="gradient-text">увидит руководитель</span>
            </h2>
            <p style={{ fontSize: '18px', color: '#666', maxWidth: '700px', margin: '0 auto' }}>
              Руководитель сможет оценить заслуги администратора и работу сервиса в реальном времени
            </p>
          </div>

          {/* Сравнение АДМИНИСТРАТОР vs РУКОВОДИТЕЛЬ */}
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '40px', marginBottom: '60px' }}>
            
            {/* АДМИНИСТРАТОР */}
            <div style={{
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
            <div style={{
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

      {/* БЛОК: Ценность для других сотрудников */}
      <section style={{ padding: '120px 20px', backgroundColor: '#FAF8FF' }}>
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
      <section id="widgets" style={{ padding: '120px 20px', backgroundColor: '#FFF' }}>
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
              src="/download/contact_ai_widgets.png" 
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
      <section id="transparency" style={{ padding: '120px 20px', backgroundColor: '#FAF8FF' }}>
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
      <section id="integrations" style={{ padding: '120px 20px', backgroundColor: '#FFF' }}>
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

      {/* CTA */}
      <section style={{ padding: '120px 20px', textAlign: 'center', backgroundColor: '#190750' }}>
        <h2 style={{ fontSize: '48px', fontWeight: 800, marginBottom: '24px', color: '#FFF' }}>
          Готовы к росту выручки?
        </h2>
        <p style={{ fontSize: '20px', color: 'rgba(255,255,255,0.7)', marginBottom: '20px', maxWidth: '600px', margin: '0 auto 20px' }}>
          Платформа роста выручки через коммуникации
        </p>
        <p style={{ fontSize: '16px', color: 'rgba(255,255,255,0.6)', marginBottom: '48px', maxWidth: '500px', margin: '0 auto 48px' }}>
          14 дней бесплатно. Без привязки карты. Настройка за 5 минут.
        </p>
        <div style={{ display: 'flex', gap: '16px', justifyContent: 'center' }}>
          <button className="btn-primary animate-glow" style={{
            padding: '20px 50px',
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
            padding: '20px 50px',
            borderRadius: '50px',
            border: '2px solid rgba(255,255,255,0.3)',
            backgroundColor: 'transparent',
            color: '#FFF',
            fontWeight: 700,
            fontSize: '18px',
            cursor: 'pointer',
          }}>
            Начать бесплатно
          </button>
        </div>
        <div style={{ marginTop: '24px', display: 'flex', justifyContent: 'center', gap: '40px', color: 'rgba(255,255,255,0.5)', fontSize: '14px' }}>
          <span>✓ Настройка за 5 минут</span>
          <span>✓ Интеграция с AmoCRM</span>
          <span>✓ Прозрачные метрики</span>
          <span>✓ Поддержка 24/7</span>
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
            <div style={{ fontWeight: 700, marginBottom: '16px', color: '#190750' }}>Интеграции</div>
            <div style={{ color: '#666', fontSize: '14px', lineHeight: 2 }}>
              <div>Asterisk</div>
              <div>AmoCRM</div>
              <div>Битрикс24</div>
              <div>FreePBX</div>
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
