
/* --------------------------- Обработка констант --------------------------- */
document.getElementById("Knife_thrower_title").innerHTML = Knife_thrower_title;
document.getElementById("Knife_thrower_link").setAttribute("href", Knife_thrower_link);

document.getElementById("Erch_title").innerHTML = Erch_title;
document.getElementById("Erch_link").setAttribute("href", Erch_link);


/* ----------------------- Создание экземпляра QRCode ----------------------- */
var qrcode = new QRCode(document.getElementById("QR_Knife_thrower_link"), {
  text: Knife_thrower_link, // Введите здесь текст или URL-адрес, который вы хотите закодировать в QR-код
  width: 250, // Ширина QR-кода в пикселях
  height: 250, // Высота QR-кода в пикселях
  colorDark: "#000000", // Цвет кода
  colorLight: "#ffffff", // Цвет фона
  correctLevel: QRCode.CorrectLevel.H, // уровень исправления ошибок
});

/* ----------------------- Создание экземпляра QRCode ----------------------- */
var qrcode = new QRCode(document.getElementById("QR_Erch_link"), {
  text: Erch_link, // Введите здесь текст или URL-адрес, который вы хотите закодировать в QR-код
  width: 250, // Ширина QR-кода в пикселях
  height: 250, // Высота QR-кода в пикселях
  colorDark: "#000000", // Цвет кода
  colorLight: "#ffffff", // Цвет фона
  correctLevel: QRCode.CorrectLevel.H, // уровень исправления ошибок
});

/* ------------------------- Кому направлять ошибки ------------------------- */
document.getElementById("footer_mail").innerHTML = footer_mail;