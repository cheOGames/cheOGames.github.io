
/* --------------------------- Обработка констант --------------------------- */
document.getElementById("Knife_thrower_title").innerHTML = Knife_thrower_title;
document.getElementById("Knife_thrower_link").innerHTML = dm_mc_text;

document.getElementById("Erch_title").innerHTML = ;
document.getElementById("Erch_link").innerHTML = dm_mc_text;

/* ----------------------- Создание экземпляра QRCode ----------------------- */
var qrcode = new QRCode(document.getElementById("qr_dm_mc"), {
  text: link_dm_mc, // Введите здесь текст или URL-адрес, который вы хотите закодировать в QR-код
  width: 250, // Ширина QR-кода в пикселях
  height: 250, // Высота QR-кода в пикселях
  colorDark: "#000000", // Цвет кода
  colorLight: "#ffffff", // Цвет фона
  correctLevel: QRCode.CorrectLevel.H, // уровень исправления ошибок
});

/* ----------------------- Создание экземпляра QRCode ----------------------- */
var qrcode = new QRCode(document.getElementById("qr_dm_mc7"), {
  text: link_dm_mc7, // Введите здесь текст или URL-адрес, который вы хотите закодировать в QR-код
  width: 250, // Ширина QR-кода в пикселях
  height: 250, // Высота QR-кода в пикселях
  colorDark: "#000000", // Цвет кода
  colorLight: "#ffffff", // Цвет фона
  correctLevel: QRCode.CorrectLevel.H, // уровень исправления ошибок
});

/* ----------------------- Создание экземпляра QRCode ----------------------- */
var qrcode = new QRCode(document.getElementById("qr_dm_ma"), {
  text: link_dm_ma, // Введите здесь текст или URL-адрес, который вы хотите закодировать в QR-код
  width: 250, // Ширина QR-кода в пикселях
  height: 250, // Высота QR-кода в пикселях
  colorDark: "#000000", // Цвет кода
  colorLight: "#ffffff", // Цвет фона
  correctLevel: QRCode.CorrectLevel.H, // уровень исправления ошибок
});

/* ------------------------- Кому направлять ошибки ------------------------- */
document.getElementById("footer_mail").innerHTML = footer_mail;