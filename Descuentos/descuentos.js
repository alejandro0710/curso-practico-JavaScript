// class notes of platzi
const precioOriginal = 100;
const descuento = 15;

const porcentajePrecioConDescuento = 100 - descuento;
const precioConDescuento =
  (precioOriginal * porcentajePrecioConDescuento) / 100;

//console.log({
//    precioOriginal,
//    descuento,
//    porcentajePrecioConDescuento,
//    precioConDescuento
//})

//function of Platzi
function calcularPrecioConDescuento(precio, descuento) {
  const porcentajePrecioConDescuento = 100 - descuento;
  const precioConDescuento = (precio * porcentajePrecioConDescuento) / 100;

  return precioConDescuento;
}

//My function

function valueWithDiscount() {
  const inputPrice = document.getElementById("priceUser");
  const inputDiscount = document.getElementById("discountUser");

  const price = Number(inputPrice.value);
  const discount = Number(inputDiscount.value);

  const priceWithDiscount = (price * (100 - discount)) / 100;
  //alert (`This is the price of your product : ${priceWithDiscount} whit ${discount} % of discount.`)

  //My function with the changes seen in class
  const result = document.getElementById("result");
  result.innerText = `This is the price of your product : ${priceWithDiscount} with ${discount} % of discount.`;

  const couponvalue = valueWithCoupon();
  console.log(couponvalue);
  const resultCoupon = document.getElementById("resultCoupon");
  resultCoupon.innerText = couponvalue;
}

// Cupones Cupones Cupones

function valueWithCoupon() {
  console.log("funciona al principio");

  const inputPrice = document.getElementById("priceUser");
  const price = Number(inputPrice.value);




  const inputCoupon = document.getElementById("inputCoupon");
  const coupon = inputCoupon.value;

  let discountCoupon;

  switch (coupon) {
    case "couponOne":
      discountCoupon = 17;
      break;
    case "couponTwo":
      discountCoupon = 29;
      break;
    case "couponTree":
      discountCoupon = 33;
      break;
    case "couponFour":
      discountCoupon = 50;
      break;
      
  }

  const valueWithTheCoupon = (price * (100 - discountCoupon)) / 100;

  console.log(price);
  console.log(valueWithTheCoupon);
  console.log(discountCoupon);
  console.log(coupon);

  return `This is the price of your product : ${valueWithTheCoupon} with the coupon ${coupon} won ${discountCoupon} % of discount.`;
}
