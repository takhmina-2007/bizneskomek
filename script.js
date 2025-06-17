// ✅ Тіл ауыстыру (егер lang.json қолдансаң)
let currentLang = 'kk';

function switchLanguage() {
  currentLang = currentLang === 'kk' ? 'ru' : 'kk';
  fetch('lang.json')
    .then((res) => res.json())
    .then((data) => {
      document.querySelectorAll('[data-i18n]').forEach((el) => {
        const key = el.getAttribute('data-i18n');
        el.textContent = data[currentLang][key];
      });
    });
}

// ✅ Чеклист барлығын белгілеу
function markAllChecklist() {
  const checkboxes = document.querySelectorAll('.checklist input[type="checkbox"]');
  checkboxes.forEach((cb) => (cb.checked = true));
}

// ✅ ROI калькулятор логикасы
function calculateROI() {
  const revenue = parseFloat(document.getElementById('revenue').value) || 0;
  const cost = parseFloat(document.getElementById('cost').value) || 0;
  const result = ((revenue - cost) / cost) * 100;
  const output = document.getElementById('roi-result');
  if (cost === 0) {
    output.textContent = '❗️ Шығын нөлге тең болмауы керек.';
  } else {
    output.textContent = `ROI: ${result.toFixed(2)}%`;
  }
}

// ✅ Идея генерациясы (қолдануға дайын массив)
const ideas = [
  "Онлайн курс ашу",
  "Kaspi QR арқылы төлем",
  "Қолөнер бұйымдарын сату",
  "Delivery қызметін қосу",
  "Instagram арқылы жарнама жасау",
  "Балаларға арналған үйірме ашу",
  "ҰБТ-ға дайындық орталығы",
  "Фриланс графика жасау",
  "Ұялы телефон жөндеу",
  "Мастер-класс өткізу",
  "Қолдан жасалған косметика",
  "Блог жүргізу және монетизация",
  "Жергілікті тауарларды экспорттау"
];

function generateIdea() {
  const randomIndex = Math.floor(Math.random() * ideas.length);
  document.getElementById('idea-output').textContent = ideas[randomIndex];
}
