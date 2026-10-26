// Общие данные и помощники для страниц «Разденься»: контакты, прайс, иконки, шторка «Сообщение Марине», календарь, панель просмотра
(function () {
  var R = window.Razden = {};

  // Контакты — правятся здесь и меняются на всех страницах. Телефон пустой: кнопки звонка скрыты
  R.contacts = {
    vkChat: "https://vk.me/razdensya18",
    vk: "https://vk.com/razdensya18",
    tg: "https://t.me/razdensya18",
    ig: "https://instagram.com/razdensya18",
    phone: "",
    address: "Ижевск, ул. Архитектора Сергея Макарова, 6/1, 2-й подъезд",
    handle: "@razdensya18",
    master: "Гайнуллина Марина Руслановна"
  };

  // Прайс по зонам (цена за одну процедуру на одну зону)
  R.zones = [
    { id: "zhivot", name: "Живот", price: 5000 },
    { id: "boka", name: "Бока", price: 5000 },
    { id: "bedra", name: "Бёдра", price: 5000 },
    { id: "vnutr", name: "Внутренняя поверхность бёдер", price: 4000 },
    { id: "ruki", name: "Руки", price: 4000 },
    { id: "poyasnica", name: "Поясница", price: 4000 },
    { id: "ikry", name: "Икры", price: 4000 },
    { id: "shram", name: "Шрам, шов, рубец", price: 2000, from: true }
  ];
  R.zone = function (id) { return R.zones.filter(function (z) { return z.id === id })[0] };

  // Список вариантов для галереи и панели просмотра
  R.variants = [
    { n: "01", file: "01-калькулятор.html", name: "Калькулятор курса", what: "Отметить зоны на силуэте и сразу увидеть цену курса" },
    { n: "02", file: "02-запись.html", name: "Запись в 3 шага", what: "Зона, день и время, а заявка уходит Марине готовым текстом" },
    { n: "03", file: "03-окна.html", name: "Табло окон", what: "Свободные окна, которые Марина сама отмечает с телефона" },
    { n: "04", file: "04-тест.html", name: "Тест «Мои растяжки»", what: "Пять вопросов, честный ориентир по курсу" },
    { n: "05", file: "05-можно-ли-мне.html", name: "Можно ли мне?", what: "Самопроверка противопоказаний и чек-лист подготовки" },
    { n: "06", file: "06-чат.html", name: "Чат-помощник", what: "Отвечает на частые вопросы и собирает заявку" },
    { n: "07", file: "07-дневник-ухода.html", name: "Дневник ухода", what: "Уход после процедуры по дням, с галочками и напоминаниями" },
    { n: "08", file: "08-фото-прогресс.html", name: "Фото-прогресс", what: "Личный фотодневник зоны со сравнением «было — стало»" },
    { n: "09", file: "09-сертификат.html", name: "Подарочный сертификат", what: "Собрать красивый сертификат и заказать его" },
    { n: "10", file: "10-приложение.html", name: "Мини-приложение", what: "Своё «приложение» на экране телефона: визиты, курс, уход" },
    { n: "11", file: "11-успеть-к-дате.html", name: "Успеть к дате", what: "Когда начать курс, чтобы успеть к морю, свадьбе или лету" },
    { n: "12", file: "12-солнце-сегодня.html", name: "Солнце сегодня", what: "УФ-индекс в Ижевске и что делать с зоной после процедуры" },
    { n: "13", file: "13-как-дойти.html", name: "Как дойти", what: "Маршрут с фото, такси и кнопка «Я на месте»" },
    { n: "14", file: "14-отзыв.html", name: "Отзыв за 30 секунд", what: "Готовый отзыв из плашек, публикуется в один клик" },
    { n: "15", file: "15-голосование.html", name: "Какую услугу добавить", what: "Клиентки голосуют за новые услуги, итоги видны сразу" },
    { n: "16", file: "16-пригласи-подругу.html", name: "Пригласи подругу", what: "Личная ссылка-приглашение с бонусом обеим" },
    { n: "17", file: "17-камера.html", name: "До и после", what: "Фото «до» от Марины и своё «после»: ползунок и, с согласия, фото Марине" },
    { n: "18", file: "18-дни-из-графика.html", name: "Дни приёма из графика", what: "Свободные дни считаются сами по графику 2×2" }
  ];

  // Варианты оформления главной страницы (папка оформление/)
  R.designs = [
    { n: "01", file: "01-шёлк.html", name: "Шёлк", what: "Классика бренда: шёлк, лайн-арт и тонкое золото" },
    { n: "02", file: "02-ночь.html", name: "Ночь", what: "Шоколад и золото, лицо рисуется линией при открытии" },
    { n: "03", file: "03-журнал.html", name: "Журнал", what: "Обложка глянца: буквы падают, рубрики «печатаются»" },
    { n: "04", file: "04-линия.html", name: "Одна линия", what: "Золотая линия ведёт от лица через все разделы" },
    { n: "05", file: "05-арка.html", name: "Арка", what: "Арочное окно открывается, встаёт солнце, арки растут" },
    { n: "06", file: "06-бенто.html", name: "Бенто", what: "Живые виджеты: цена набегает, «до/после» само двигается" },
    { n: "07", file: "07-аура.html", name: "Аура", what: "Дышащее свечение, блоки проявляются из размытия" },
    { n: "08", file: "08-сторис.html", name: "Сторис", what: "Каждый раздел на весь экран, содержимое въезжает" },
    { n: "09", file: "09-приглашение.html", name: "Приглашение", what: "Конверт с сургучной печатью открывается при входе" },
    { n: "10", file: "10-тиснение.html", name: "Тиснение", what: "Пресс выдавливает монограмму, плитки поднимаются из бумаги" }
  ];

  // ---------- иконки ----------
  var P = {
    vk: '<path d="M3.2 7h3.1c.4 2.6 1.8 5 3.5 5.6V7h2.9v3.4c1.6-.2 3.2-1.9 3.8-3.4h2.9c-.5 2.2-2.1 3.9-3.3 4.6 1.2.6 3.1 2 3.8 4.4h-3.2c-.6-1.6-2-2.9-4-3.1V16h-.4C7.2 16 3.7 13 3.2 7z"/>',
    tg: '<path d="M21 4.5 2.9 11.4c-.9.4-.9 1.2 0 1.5l4.6 1.4 1.8 5.4c.2.6.9.8 1.4.4l2.6-2.1 4.7 3.4c.6.4 1.4.1 1.6-.6L22.3 5.8c.2-.9-.5-1.6-1.3-1.3zM9.6 14.2l8-6.3-6.1 7.2-.3 2.6-1.6-3.5z"/>',
    ig: '<rect x="3.5" y="3.5" width="17" height="17" rx="5" fill="none" stroke="currentColor" stroke-width="2"/><circle cx="12" cy="12" r="4" fill="none" stroke="currentColor" stroke-width="2"/><circle cx="17.2" cy="6.8" r="1.2"/>',
    phone: '<path d="M6.6 10.8a15.1 15.1 0 0 0 6.6 6.6l2.2-2.2a1 1 0 0 1 1-.25 11.4 11.4 0 0 0 3.6.6 1 1 0 0 1 1 1V20a1 1 0 0 1-1 1A17 17 0 0 1 3 4a1 1 0 0 1 1-1h3.5a1 1 0 0 1 1 1c0 1.25.2 2.45.6 3.6a1 1 0 0 1-.25 1z"/>',
    pin: '<path d="M12 2.5a7 7 0 0 0-7 7c0 5 7 12 7 12s7-7 7-12a7 7 0 0 0-7-7zm0 9.6a2.6 2.6 0 1 1 0-5.2 2.6 2.6 0 0 1 0 5.2z"/>',
    user: '<path d="M12 12a4 4 0 1 0 0-8 4 4 0 0 0 0 8zm0 2c-4.4 0-8 2.2-8 5v1h16v-1c0-2.8-3.6-5-8-5z"/>',
    spark: '<path d="M12 2.5l1.9 6.1 6.1 1.9-6.1 1.9-1.9 6.1-1.9-6.1L4 10.5l6.1-1.9z"/>',
    drop: '<path d="M12 3s-6 6.6-6 10.5a6 6 0 0 0 12 0C18 9.6 12 3 12 3z"/>',
    shield: '<path d="M12 2.5 4.5 5.5v6c0 4.6 3.2 8.6 7.5 10 4.3-1.4 7.5-5.4 7.5-10v-6zm-1.2 13.2-3.3-3.3 1.4-1.4 1.9 1.9 4.6-4.6 1.4 1.4z"/>',
    clock: '<path d="M12 2.5a9.5 9.5 0 1 0 0 19 9.5 9.5 0 0 0 0-19zm0 17a7.5 7.5 0 1 1 0-15 7.5 7.5 0 0 1 0 15zM13 7h-2v5.4l4.2 2.5 1-1.7-3.2-1.9z"/>',
    cal: '<path d="M7 2.5h2v2h6v-2h2v2h3v16.5H4V4.5h3zM6 9v10h12V9zm2 2h3v3H8z"/>',
    check: '<path d="M9.5 16.2 5.3 12l-1.4 1.4 5.6 5.6L21 7.5l-1.4-1.4z"/>',
    x: '<path d="M19 6.4 17.6 5 12 10.6 6.4 5 5 6.4 10.6 12 5 17.6 6.4 19 12 13.4 17.6 19 19 17.6 13.4 12z"/>',
    left: '<path d="M15.4 7.4 14 6l-6 6 6 6 1.4-1.4L10.8 12z"/>',
    right: '<path d="M8.6 16.6 10 18l6-6-6-6-1.4 1.4 4.6 4.6z"/>',
    heart: '<path d="M12 21s-7.5-4.6-9.6-9.3C.9 8.3 3.1 4.5 6.8 4.5c2 0 3.6 1.1 5.2 3 1.6-1.9 3.2-3 5.2-3 3.7 0 5.9 3.8 4.4 7.2C19.5 16.4 12 21 12 21z"/>',
    grid: '<path d="M4 4h7v7H4zm9 0h7v7h-7zM4 13h7v7H4zm9 0h7v7h-7z"/>',
    copy: '<path d="M8 7V3h12v14h-4v4H4V7zm2 0h6v8h2V5h-8zM6 9v10h8V9z"/>',
    send: '<path d="M3 20.5 21.5 12 3 3.5 3 10l13 2-13 2z"/>',
    camera: '<path d="M9 4 7.2 6H4a2 2 0 0 0-2 2v10a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V8a2 2 0 0 0-2-2h-3.2L15 4zm3 4.5a4.5 4.5 0 1 1 0 9 4.5 4.5 0 0 1 0-9zm0 2a2.5 2.5 0 1 0 0 5 2.5 2.5 0 0 0 0-5z"/>',
    gift: '<path d="M20 7h-2.2A3 3 0 0 0 12 3.8 3 3 0 0 0 6.2 7H4v5h1v9h14v-9h1zM15 5a1 1 0 1 1 0 2h-2a2 2 0 0 1 2-2zM9 5a2 2 0 0 1 2 2H9a1 1 0 1 1 0-2zM6 9h5v1H6zm7 0h5v1h-5zM7 12h4v7H7zm6 0h4v7h-4z"/>',
    home: '<path d="M12 3 2 11.5h3V21h5.5v-6h3v6H19v-9.5h3z"/>',
    plus: '<path d="M11 5h2v6h6v2h-6v6h-2v-6H5v-2h6z"/>',
    bell: '<path d="M12 22a2.5 2.5 0 0 0 2.5-2.5h-5A2.5 2.5 0 0 0 12 22zm7-6V11a7 7 0 0 0-5.5-6.8V3h-3v1.2A7 7 0 0 0 5 11v5l-2 2v1h18v-1z"/>',
    trash: '<path d="M9 3h6l1 2h4v2H4V5h4zM6 9h12l-1 12H7z"/>',
    list: '<path d="M4 5h3v3H4zm5 .5h11v2H9zM4 10.5h3v3H4zm5 .5h11v2H9zM4 16h3v3H4zm5 .5h11v2H9z"/>',
    help: '<path d="M12 2.5a9.5 9.5 0 1 0 0 19 9.5 9.5 0 0 0 0-19zm1 15.5h-2v-2h2zm2.1-7.3-.9.9c-.8.8-1.2 1.4-1.2 2.9h-2v-.5c0-1.1.4-2.1 1.2-2.9l1.2-1.3A1.9 1.9 0 0 0 12 6.5a2 2 0 0 0-2 2H8a4 4 0 0 1 8 0c0 .9-.4 1.6-.9 2.2z"/>',
    chat: '<path d="M4 4h16v12H8l-4 4z"/>',
    image: '<path d="M4 4h16v16H4zm2 2v9.6l3.5-3.6 3 3 2.5-2.5 3 3V6zm9.5 1.5a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3z"/>',
    lock: '<path d="M7 10V7a5 5 0 0 1 10 0v3h1.5v11h-13V10zm2.5 0h5V7a2.5 2.5 0 0 0-5 0z"/>',
    sun: '<path d="M12 7a5 5 0 1 0 0 10 5 5 0 0 0 0-10zM11 1h2v3h-2zm0 19h2v3h-2zM1 11h3v2H1zm19 0h3v2h-3zM4.2 5.6l1.4-1.4 2.1 2.1-1.4 1.4zm12.1 12.1 1.4-1.4 2.1 2.1-1.4 1.4zM4.2 18.4l2.1-2.1 1.4 1.4-2.1 2.1zM16.3 6.3l2.1-2.1 1.4 1.4-2.1 2.1z"/>',
    star: '<path d="M12 2.5l2.9 6 6.6.9-4.8 4.6 1.2 6.5L12 17.4l-5.9 3.1 1.2-6.5L2.5 9.4l6.6-.9z"/>',
    chart: '<path d="M4 20V10h3v10zm6.5 0V4h3v16zM17 20v-7h3v7z"/>',
    users: '<path d="M9 11a3.5 3.5 0 1 0 0-7 3.5 3.5 0 0 0 0 7zm7.5 0a3 3 0 1 0 0-6 3 3 0 0 0 0 6zM2 19c0-3 3.1-5 7-5s7 2 7 5v1H2zm15.5-4.8c2.7.4 4.5 2 4.5 4.3V20h-4v-1c0-1.9-.2-3.4-.5-4.8z"/>',
    route: '<path d="M6 3a3 3 0 0 0-1 5.8V21h2V8.8A3 3 0 0 0 6 3zm12 0a3 3 0 0 0-1 5.8V12c0 1-1 2-2 2H9v2h6c2.2 0 4-1.8 4-4V8.8A3 3 0 0 0 18 3z"/>',
    flag: '<path d="M5 2h2v20H5zm3 1h11l-2.5 4.5L19 12H8z"/>'
  };
  R.icon = function (name, cls) { return '<svg class="' + (cls || "ico") + '" viewBox="0 0 24 24" aria-hidden="true">' + (P[name] || "") + "</svg>" };

  // ---------- мелкие помощники ----------
  R.rub = function (n) { return n.toLocaleString("ru-RU").replace(/\s/g, " ") + " ₽" };
  R.esc = function (s) { return String(s).replace(/[&<>"']/g, function (c) { return { "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" }[c] }) };
  R.get = function (k, d) { try { var v = localStorage.getItem("razden:" + k); return v == null ? d : JSON.parse(v) } catch (e) { return d } };
  R.set = function (k, v) { try { localStorage.setItem("razden:" + k, JSON.stringify(v)) } catch (e) {} };
  R.addDays = function (d, n) { var x = new Date(d); x.setDate(x.getDate() + n); return x };
  R.ymd = function (d) { return d.getFullYear() + "-" + String(d.getMonth() + 1).padStart(2, "0") + "-" + String(d.getDate()).padStart(2, "0") };
  R.parse = function (s) { var p = String(s).split("-"); return new Date(+p[0], +p[1] - 1, +p[2]) };
  R.today = function () { var d = new Date(); d.setHours(0, 0, 0, 0); return d };
  R.date = function (d, o) { return d.toLocaleDateString("ru-RU", o || { day: "numeric", month: "long" }) };
  R.plural = function (n, a, b, c) { n = Math.abs(n) % 100; var m = n % 10; return n > 10 && n < 20 ? c : m > 1 && m < 5 ? b : m === 1 ? a : c };

  R.toast = function (text) {
    var old = document.querySelector(".toast"); if (old) old.remove();
    var t = document.createElement("div"); t.className = "toast"; t.setAttribute("role", "status"); t.textContent = text;
    document.body.appendChild(t);
    setTimeout(function () { t.remove() }, 2600);
  };

  // Копирование сразу в момент нажатия: сначала через выделение текста (срабатывает и на iPhone, пока страница в фокусе),
  // потом Clipboard API. Асинхронная запасная ветка после ухода в другое приложение уже не срабатывает
  R.copy = function (text) {
    var ok = false;
    try {
      var ta = document.createElement("textarea"); ta.value = text; ta.setAttribute("readonly", "");
      ta.style.cssText = "position:fixed;top:0;left:0;width:1px;height:1px;opacity:0;font-size:16px";
      document.body.appendChild(ta); ta.focus({ preventScroll: true }); ta.select(); ta.setSelectionRange(0, text.length);
      ok = document.execCommand("copy"); ta.remove();
    } catch (e) {}
    var api = null;
    try { api = navigator.clipboard.writeText(text).then(function () { return true }, function () { return ok }) } catch (e) {}
    return ok ? Promise.resolve(true) : (api || Promise.resolve(false));
  };

  // Шторка «Сообщение Марине»: Telegram открывается с текстом в ссылке, для ВКонтакте текст копируется и открывается чат
  R.send = function (text, opts) {
    opts = opts || {};
    R.closeSheet();
    var back = document.createElement("div"); back.className = "sheet-back";
    back.innerHTML =
      '<div class="sheet" role="dialog" aria-modal="true" aria-label="Сообщение Марине">' +
      "<h3>" + R.esc(opts.title || "Сообщение Марине") + "</h3>" +
      '<p class="hint">В Telegram сообщение откроется уже вписанным. Во ВКонтакте текст скопируется сам — вставьте его в чат.</p>' +
      '<div class="msg"></div>' +
      '<a class="btn btn-gold" data-go href="' + R.contacts.tg + "?text=" + encodeURIComponent(text) + '" target="_blank" rel="noopener">' + R.icon("tg") + "Открыть в Telegram</a>" +
      '<a class="btn btn-line" data-go href="' + R.contacts.vkChat + '" target="_blank" rel="noopener">' + R.icon("vk") + "Скопировать и открыть ВКонтакте</a>" +
      '<button type="button" class="btn btn-soft" data-copy>' + R.icon("copy") + "Только скопировать</button>" +
      '<button type="button" class="btn" data-close style="min-height:40px;background:none;color:var(--muted);font-weight:700">Закрыть</button>' +
      "</div>";
    back.querySelector(".msg").textContent = text;
    back.addEventListener("click", function (e) {
      if (e.target === back || e.target.closest("[data-close]")) { R.closeSheet(); return }
      if (e.target.closest("[data-go]")) { R.copy(text); R.toast("Текст скопирован. Вставьте его в чат") }
      if (e.target.closest("[data-copy]")) { R.copy(text).then(function () { R.toast("Текст скопирован") }) }
    });
    document.body.appendChild(back);
    var first = back.querySelector("[data-go]"); if (first) first.focus({ preventScroll: true });
  };
  R.closeSheet = function () { var s = document.querySelector(".sheet-back"); if (s) s.remove() };
  document.addEventListener("keydown", function (e) { if (e.key === "Escape") R.closeSheet() });

  // Файл календаря .ics: события с напоминанием
  R.ics = function (events) {
    function t(d) { return d.getFullYear() + String(d.getMonth() + 1).padStart(2, "0") + String(d.getDate()).padStart(2, "0") + "T" + String(d.getHours()).padStart(2, "0") + String(d.getMinutes()).padStart(2, "0") + "00" }
    var L = ["BEGIN:VCALENDAR", "VERSION:2.0", "PRODID:-//Razdensya//RU", "CALSCALE:GREGORIAN"];
    events.forEach(function (ev, i) {
      var end = new Date(ev.start.getTime() + (ev.minutes || 60) * 60000);
      L.push("BEGIN:VEVENT", "UID:" + Date.now() + "-" + i + "@razdensya18", "DTSTAMP:" + t(new Date()), "DTSTART:" + t(ev.start), "DTEND:" + t(end),
        "SUMMARY:" + ev.title, "DESCRIPTION:" + (ev.desc || "").replace(/\n/g, "\\n"), "LOCATION:" + R.contacts.address);
      if (ev.alarm != null) L.push("BEGIN:VALARM", "TRIGGER:-PT" + ev.alarm + "M", "ACTION:DISPLAY", "DESCRIPTION:" + ev.title, "END:VALARM");
      L.push("END:VEVENT");
    });
    L.push("END:VCALENDAR");
    return L.join("\r\n");
  };
  R.saveFile = function (name, text, type) {
    var url = URL.createObjectURL(new Blob([text], { type: type || "text/calendar" }));
    var a = document.createElement("a"); a.href = url; a.download = name; document.body.appendChild(a); a.click(); a.remove();
    setTimeout(function () { URL.revokeObjectURL(url) }, 4000);
  };

  R.contactsHTML = function () {
    var c = R.contacts;
    var h = '<a href="' + c.vkChat + '" target="_blank" rel="noopener"><span class="circ">' + R.icon("vk") + "</span>ВКонтакте</a>" +
      '<a href="' + c.tg + '" target="_blank" rel="noopener"><span class="circ">' + R.icon("tg") + "</span>Telegram</a>" +
      '<a href="' + c.ig + '" target="_blank" rel="noopener"><span class="circ">' + R.icon("ig") + "</span>Instagram</a>";
    if (c.phone) h += '<a href="tel:' + c.phone + '"><span class="circ">' + R.icon("phone") + "</span>Позвонить</a>";
    return h;
  };

  // Просмотрщик переносит прокрутку со страницы на страницу: вариант всегда открываем сверху,
  // а галерею возвращаем туда, где её оставили
  function keepScroll() {
    try { history.scrollRestoration = "manual" } catch (e) {}
    var isVariant = !!document.body.dataset.page, key = "razden:scroll:" + location.pathname, target = 0, touched = false;
    if (!isVariant) { try { target = +sessionStorage.getItem(key) || 0 } catch (e) {} }
    ["touchstart", "wheel", "keydown", "mousedown"].forEach(function (ev) { window.addEventListener(ev, function () { touched = true }, { once: true, passive: true }) });
    function go() { if (!touched) window.scrollTo(0, target) }
    go(); requestAnimationFrame(go); [60, 200, 500, 1000].forEach(function (t) { setTimeout(go, t) });
    window.addEventListener("load", go);
    if (!isVariant) {
      var save = function () { try { sessionStorage.setItem(key, String(window.scrollY)) } catch (e) {} };
      window.addEventListener("pagehide", save);
      document.addEventListener("click", function (e) { if (e.target.closest("a[href]")) save() });
    }
  }

  // Появление блоков при прокрутке: элементам с data-reveal="N" добавляется класс in (N — задержка в шагах)
  R.reveal = function () {
    var els = document.querySelectorAll("[data-reveal]");
    if (!els.length) return;
    if (!("IntersectionObserver" in window) || matchMedia("(prefers-reduced-motion: reduce)").matches) { els.forEach(function (e) { e.classList.add("in") }); return }
    document.documentElement.classList.add("rv");
    var io = new IntersectionObserver(function (es) { es.forEach(function (e) { if (e.isIntersecting) { e.target.classList.add("in"); io.unobserve(e.target) } }) }, { threshold: .12, rootMargin: "0px 0px -6% 0px" });
    els.forEach(function (e) { e.style.setProperty("--i", e.dataset.reveal || 0); io.observe(e) });
  };

  // ---------- при загрузке ----------
  function boot() {
    keepScroll();
    R.reveal();
    document.querySelectorAll(".contacts:empty").forEach(function (el) { el.innerHTML = R.contactsHTML() });
    document.querySelectorAll(".signature:empty").forEach(function (el) { el.textContent = "Специалист: " + R.contacts.master + " · " + R.contacts.handle });
    document.querySelectorAll("[data-icon]").forEach(function (el) { if (!el.querySelector("svg")) el.insertAdjacentHTML("afterbegin", R.icon(el.dataset.icon)) });

    // Полоска на внутренних страницах: назад на главную и чат с Мариной
    if (!document.body.dataset.page) return;
    var bar = document.createElement("nav"); bar.className = "pv-bar"; bar.setAttribute("aria-label", "Навигация");
    bar.innerHTML =
      '<a href="index.html">' + R.icon("left") + "Главная</a>" +
      '<a class="pv-title" href="index.html">Razden’sya</a>' +
      '<a href="' + R.contacts.vkChat + '" target="_blank" rel="noopener" aria-label="Написать Марине во ВКонтакте">' + R.icon("vk") + "</a>";
    document.body.prepend(bar);
    document.body.classList.add("pv");
  }
  if (document.readyState === "loading") document.addEventListener("DOMContentLoaded", boot); else boot();
})();
