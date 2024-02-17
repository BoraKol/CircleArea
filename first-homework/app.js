const radius = parseFloat(process.argv[2]);

// Eğer yarıçap geçerli değilse,veri yoksa veya girilen yarıçağ değeri sıfırdan küçükse hata mesajı göndeririz
if (isNaN(radius) || !radius || radius < 0) {
  console.log('Lütfen geçerli bir yarıçap değeri girin.');
} else {
  // Alanı hesaplar ve ekrana çıktıyı verir
  const area = Math.PI * Math.pow(radius,2);
  console.log(`Yarıçapı ${radius} olan dairenin alanı: ${area}`);
}
