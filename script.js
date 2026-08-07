// ===== РАСШИРЕННАЯ БАЗА ПРОДУКТОВ =====
const products = [
    // Овощи
    { name: "огурец", status: "ok", title: "🥒 Огурец", text: "Можно без ограничений. Практически не повышает сахар." },
    { name: "капуста", status: "ok", title: "🥬 Капуста", text: "Отлично подходит (белокочанная, цветная, брокколи)." },
    { name: "кабачок", status: "ok", title: "🥒 Кабачок", text: "Можно тушить, варить или запекать." },
    { name: "помидор", status: "ok", title: "🍅 Помидор", text: "Можно в свежем виде или в салатах." },
    { name: "морковь", status: "limit", title: "🥕 Морковь", text: "Свежую можно, варёную — совсем немного (в суп)." },
    { name: "картофель", status: "limit", title: "🥔 Картошка", text: "Ограниченно! Подавать варёной или в супе, не жарить." },

    // Фрукты и ягоды
    { name: "яблоко", status: "ok", title: "🍎 Яблоко", text: "Можно 1 небольшое зеленое или несладкое яблоко в день." },
    { name: "груша", status: "ok", title: "🍐 Груша", text: "Можно 1 штуку в день, лучше твердых сортов." },
    { name: "банан", status: "no", title: "🍌 Банан", text: "Не рекомендуется! В нем много быстрых углеводов и сахара." },
    { name: "виноград", status: "no", title: "🍇 Виноград", text: "Нельзя. Очень сильно повышает уровень сахара." },

    // Мясо, рыба, яйца
    { name: "курица", status: "ok", title: "🍗 Курица", text: "Отлично подходит! Лучше грудка без кожицы (варёная или запечённая)." },
    { name: "индейка", status: "ok", title: "🦃 Индейка", text: "Отличное диетическое мясо, можно смело есть." },
    { name: "рыба", status: "ok", title: "🐟 Рыба", text: "Очень полезно! Минтай, треска, горбуша, хек (вареная или на пару)." },
    { name: "яйцо", status: "ok", title: "🥚 Яйца", text: "Можно 1-2 штуки в день (вареные или омлет)." },
    { name: "колбаса", status: "no", title: "🥓 Колбаса и сосиски", text: "Не рекомендуется из-за скрытых жиров, соли и химикатов." },

    // Крупы и хлеб
    { name: "гречка", status: "limit", title: "🌾 Гречка", text: "Можно! Порция — 4-5 столовых ложек готовой каши." },
    { name: "овсянка", status: "limit", title: "🥣 Овсянка", text: "Можно на воде или разбавленном молоке без сахара." },
    { name: "хлеб", status: "limit", title: "🍞 Хлеб", text: "Можно 1-2 кусочка ржаного хлеба или с отрубями. Белый нельзя!" },
    { name: "рис", status: "no", title: "🍚 Белый рис", text: "Не рекомендуется. Быстро поднимает уровень сахара." },

    // Молочные продукты
    { name: "кефир", status: "ok", title: "🥛 Кефир", text: "Отлично подходит на ночь или на полдник (без сахара)." },
    { name: "творог", status: "ok", title: "🧀 Творог", text: "Можно нежирный творог (до 5% жирности)." },
    { name: "сыр", status: "limit", title: "🧀 Сыр", text: "Можно пару ломтиков нежирного сыра утром." },

    // Сладости
    { name: "сахар", status: "no", title: "🍭 Сахар", text: "Категорически нельзя! Заменяйте безопасными подсластителями." },
    { name: "торт", status: "no", title: "🍰 Торт", text: "Нельзя из-за сахара и муки высшего сорта." },
    { name: "конфеты", status: "no", title: "🍬 Конфеты", text: "Нельзя. Покупайте только специальные диабетические (редко)." }
];

// ===== ПОИСК =====
const search = document.getElementById("search");
const result = document.getElementById("result");

search.addEventListener("input", function() {
    let value = search.value.toLowerCase().trim();
    result.innerHTML = "";

    if (value.length < 2) return;

    let found = products.find(product =>
        product.name.toLowerCase().includes(value)
    );

    if (found) {
        let color = "";
        let statusText = "";

        if (found.status === "ok") { color = "ok"; statusText = "🟢 Можно"; }
        if (found.status === "no") { color = "no"; statusText = "🔴 Нельзя"; }
        if (found.status === "limit") { color = "limit"; statusText = "🟡 Осторожно (немного)"; }

        result.innerHTML = `
            <div class="product-card">
                <h2>${found.title}</h2>
                <div class="status ${color}">${statusText}</div>
                <p>${found.text}</p>
            </div>
        `;
    } else {
        result.innerHTML = `
            <div class="product-card">
                <p style="color: #777;">Продукт не найден. Попробуйте вбить другое слово.</p>
            </div>
        `;
    }
});

function scrollToContent() {
    document.getElementById("content").scrollIntoView({ behavior: 'smooth' });
}

// ===== КАТЕГОРИИ =====
function showCategory(type) {
    let content = document.getElementById("content");

    if (type === "can") {
        content.innerHTML = `
            <div class="info">
                <h2>✅ Что можно есть</h2>
                <ul>
                    <li>🥒 Огурцы, кабачки, капусту, помидоры</li>
                    <li>🍗 Курицу, индейку, нежирную рыбу</li>
                    <li>🥚 Яйца (1-2 в день)</li>
                    <li>🥛 Кефир, нежирный творог</li>
                    <li>🍎 Несладкие яблоки и груши (1 шт в день)</li>
                </ul>
            </div>
        `;
    }

    if (type === "cant") {
        content.innerHTML = `
            <div class="info">
                <h2>❌ Что нельзя</h2>
                <ul>
                    <li>🍬 Сахар, конфеты, торты, выпечку</li>
                    <li>🍌 Бананы, виноград, изюм</li>
                    <li>🥓 Колбасу, сосиски, жирное мясо</li>
                    <li>🥤 Сладкую газировку и покупные соки</li>
                    <li>🍚 Белый рис и манную кашу</li>
                </ul>
            </div>
        `;
    }
    scrollToContent();
}

// ===== РЕЖИМ И ПОРЦИИ =====
function showPortions() {
    document.getElementById("content").innerHTML = `
        <div class="info">
            <h2>🥣 Сколь и как есть?</h2>
            <p><strong>1. Кушать 5–6 раз в день:</strong><br>
            Ешьте каждые 2,5–3 часа небольшими порциями. Это удержит сахар в норме.</p>
            <br>
            <p><strong>2. Размер порции за 1 раз:</strong></p>
            <ul>
                <li>🥩 <strong>Мясо или рыба:</strong> с ладошку без пальцев (около 100-120 грамм).</li>
                <li>🌾 <strong>Каша или гречка:</strong> 1 небольшая пиала (4-5 столовых ложек).</li>
                <li>🥗 <strong>Овощи:</strong> 1 полный стакан или целая тарелка салата.</li>
                <li>🥛 <strong>Кефир/Молоко:</strong> 1 стакан (200 мл).</li>
            </ul>
        </div>
    `;
    scrollToContent();
}

// ===== МЕНЮ НА 6 РАЗ =====
function showMenu() {
    document.getElementById("content").innerHTML = `
        <div class="info">
            <h2>📅 Пример меню на день (6 приёмов)</h2>
            <ul>
                <li>⏰ <strong>08:00 (Завтрак):</strong> Овсянка или гречка на воде + 1 варёное яйцо + чай без сахара.</li>
                <li>⏰ <strong>10:30 (Перекус 1):</strong> 1 несладкое яблоко или немного творога.</li>
                <li>⏰ <strong>13:00 (Обед):</strong> Овощной суп + кусочек отварной курицы или рыбы + салат из огурцов.</li>
                <li>⏰ <strong>15:30 (Перекус 2):</strong> Стакан кефира или 1 нежирный йогурт без сахара.</li>
                <li>⏰ <strong>18:00 (Ужин):</strong> Запеченная рыба или тушеные кабачки/капуста с грудкой.</li>
                <li>⏰ <strong>20:30 (Перед сном):</strong> 1 стакан теплого кефира (чтобы ночью не падал сахар).</li>
            </ul>
        </div>
    `;
    scrollToContent();
}

// ===== РЕЦЕПТЫ =====
function showRecipes() {
    document.getElementById("content").innerHTML = `
        <div class="info">
            <h2>🍲 Простые рецепты</h2>
            <p><strong>1. Овощной суп:</strong><br>
            Капуста, кабачок, морковка, зелень. Варить 20 минут без зажарки на масле.</p>
            <br>
            <p><strong>2. Рыба на пару / в духовке:</strong><br>
            Филе минтая или трески посолить, сбрызнуть лимоном и запекать в фольге 20 минут.</p>
        </div>
    `;
    scrollToContent();
}

// ===== ОЗВУЧКА БЕЗ СМАЙЛИКОВ =====
function toggleVoice() {
    if (window.speechSynthesis.speaking) {
        window.speechSynthesis.cancel();
        return;
    }

    let textToRead = "";
    const resultElement = document.getElementById("result");
    const contentElement = document.getElementById("content");

    if (resultElement && resultElement.innerText.trim() !== "") {
        textToRead = resultElement.innerText;
    } else if (contentElement) {
        textToRead = contentElement.innerText;
    }

    if (!textToRead) return;

    let cleanText = textToRead
        .replace(/[\u{1F600}-\u{1F64F}\u{1F300}-\u{1F5FF}\u{1F680}-\u{1F6FF}\u{1F700}-\u{1F77F}\u{1F780}-\u{1F7FF}\u{1F800}-\u{1F8FF}\u{1F900}-\u{1F9FF}\u{1FA00}-\u{1FA6F}\u{1FA70}-\u{1FAFF}\u{2600}-\u{26FF}\u{2700}-\u{27BF}]/gu, '')
        .replace(/[✅❌📅🍲❤️🔊🟢🔴🟡🍎🥒🥬🌾🍌🍰🍬🥤🍳🐟🍗🥚🥛💧🚶⏰🩸🥣🍞🧀🥔🥕🍅🍐🍇🥩🥗]/g, '')
        .replace(/\s+/g, ' ')
        .trim();

    let speech = new SpeechSynthesisUtterance(cleanText);
    speech.lang = "ru-RU";
    speech.rate = 0.85;

    window.speechSynthesis.speak(speech);
}
