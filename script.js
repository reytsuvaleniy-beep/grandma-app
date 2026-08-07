// ===== БАЗА ПРОДУКТОВ =====

const products = [
    {
        name: "яблоко",
        status: "ok",
        title: "🍎 Яблоко",
        text: "Можно. Лучше выбирать несладкие сорта. Обычно подходит небольшая порция."
    },

    {
        name: "огурец",
        status: "ok",
        title: "🥒 Огурец",
        text: "Можно. В огурцах мало углеводов."
    },

    {
        name: "капуста",
        status: "ok",
        title: "🥬 Капуста",
        text: "Можно. Хорошо подходит для диеты №9."
    },

    {
        name: "гречка",
        status: "limit",
        title: "🌾 Гречка",
        text: "Можно в умеренном количестве. Следите за размером порции."
    },

    {
        name: "банан",
        status: "limit",
        title: "🍌 Банан",
        text: "Лучше редко и небольшими порциями, так как много углеводов."
    },

    {
        name: "торт",
        status: "no",
        title: "🍰 Торт",
        text: "Не рекомендуется. Много сахара и быстрых углеводов."
    },

    {
        name: "конфеты",
        status: "no",
        title: "🍬 Конфеты",
        text: "Не рекомендуется из-за большого количества сахара."
    },

    {
        name: "газировка",
        status: "no",
        title: "🥤 Газировка",
        text: "Не рекомендуется. Обычно содержит много сахара."
    }
];


// ===== ПОИСК =====

const search = document.getElementById("search");
const result = document.getElementById("result");


search.addEventListener("input", function(){

    let value = search.value.toLowerCase();

    result.innerHTML = "";

    if(value.length < 2){
        return;
    }


    let found = products.find(product =>
        product.name.includes(value)
    );


    if(found){

        let color = "";

        let statusText = "";

        if(found.status === "ok"){
            color = "ok";
            statusText = "🟢 Можно";
        }

        if(found.status === "no"){
            color = "no";
            statusText = "🔴 Нельзя";
        }

        if(found.status === "limit"){
            color = "limit";
            statusText = "🟡 Осторожно";
        }


        result.innerHTML = `

        <div class="product-card">

            <h2>${found.title}</h2>

            <div class="status ${color}">
                ${statusText}
            </div>

            <p>
                ${found.text}
            </p>

        </div>

        `;
    }

});



// ===== КНОПКИ =====


function showCategory(type){

    let content = document.getElementById("content");


    if(type==="can"){

        content.innerHTML = `

        <div class="info">

        <h2>✅ Что можно есть</h2>

        <ul>
        <li>🥒 Огурцы</li>
        <li>🥬 Капуста</li>
        <li>🐟 Рыба</li>
        <li>🍗 Курица</li>
        <li>🥚 Яйца</li>
        <li>🥛 Кефир без сахара</li>
        </ul>

        </div>

        `;
    }


    if(type==="cant"){

        content.innerHTML = `

        <div class="info">

        <h2>❌ Что нельзя</h2>

        <ul>
        <li>🍬 Конфеты</li>
        <li>🍰 Торты</li>
        <li>🥤 Сладкая газировка</li>
        <li>🍭 Сахар</li>
        </ul>

        </div>

        `;
    }

}



// ===== МЕНЮ =====

function showMenu(){

document.getElementById("content").innerHTML = `

<div class="info">

<h2>📅 Меню на день</h2>

<ul>

<li>🍳 Завтрак: омлет, овощи, чай без сахара</li>

<li>🍲 Обед: суп, курица, гречка</li>

<li>🍎 Полдник: яблоко</li>

<li>🐟 Ужин: рыба и овощи</li>

</ul>

</div>

`;

}



// ===== РЕЦЕПТЫ =====

function showRecipes(){

document.getElementById("content").innerHTML = `

<div class="info">

<h2>🍲 Овощной суп</h2>

<p>
Капуста, морковь, лук, кабачок.
</p>

<br>

<p>
1. Нарезать овощи.<br>
2. Варить 20 минут.<br>
3. Добавить зелень.
</p>

</div>

`;

}



// ===== СОВЕТЫ =====

function showTips(){

document.getElementById("content").innerHTML = `

<div class="info">

<h2>❤️ Полезные советы</h2>

<ul>

<li>💧 Пейте воду</li>

<li>🚶 Гуляйте каждый день</li>

<li>⏰ Ешьте примерно в одно время</li>

<li>🩸 Следите за сахаром</li>

</ul>

</div>

`;

}



// ===== ОЗВУЧКА =====

function toggleVoice(){

let text = document.body.innerText;

let speech = new SpeechSynthesisUtterance(text);

speech.lang = "ru-RU";

speech.rate = 0.9;


speechSynthesis.cancel();

speechSynthesis.speak(speech);

}