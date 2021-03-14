// ================== Test.1 ====================
max_i = 5;
for (let i = 0; i < max_i; i++) {
  for (let j = 0; j < i + 1; j++) {
    process.stdout.write("*");
  }
  process.stdout.write("\n");
}
process.stdout.write("\n");

// ================== Test.2 ====================
for (let i = max_i; i > 0; i--) {
  for (let j = 0; j < i; j++) {
    process.stdout.write("*");
  }
  process.stdout.write("\n");
}
process.stdout.write("\n");

// ================== Test.3 ====================
function get_max_j(i, max_i) {
  let max_j = 0;
  if (i < max_i / 2) {
    max_j = i + 1;
  } else {
    max_j = max_i - i;
  }
  return max_j;
}
for (let i = 0; i < max_i; i++) {
  const max_j = get_max_j(i, max_i);
  for (let j = 0; j < max_j; j++) {
    process.stdout.write("*");
  }
  process.stdout.write("\n");
}
process.stdout.write("\n");

// ==============================================

let jooMin = "    910812-1148413      ";
console.log(jooMin.split("-"));
console.log(jooMin.split("-")[1]);
console.log(jooMin.trim());

let phone = "01052692810";
function parse(phone) {
  console.log(phone.slice(0, 7));
  console.log(phone.slice(7, phone.length));
  console.log(phone.slice(0, 3));
  console.log(phone.slice(3, 7));
  return [];
}
parse(phone);

// ==============================================

x = 10;
y = 20;
function add(x, y) {
  return x + y;
}
console.log(add(1, 2));

// ==============================================

function is_even(count) {
  if (count % 2 === 0) {
    return true;
  } else {
    return false;
  }
}
console.log(is_even(1));

// ==============================================

let letter = "2010 FIFA WORLD CUP";
function a(letter) {
  return letter.split(" ")[0];
}
console.log(a(letter));

// ==============================================

let sum = 0;
for (let i = 0; i < 101; i++) {
  sum += i;
}
console.log(sum);
let sum = 0;
for (let i = 0; i < 101; i++) {
  if (i % 2 === 0) sum += i;
}
console.log(sum);

// ==============================================

let sum2 = 0;
let sum3 = 0;
let sum6 = 0;
for (let i = 0; i < 13; i++) {
  if (i % 2 === 0 || i % 3 === 0 || i % 6 === 0) {
    console.log(i);
    if (i % 2 === 0) {
      sum2 += i;
      console.log(sum2);
    }
    if (i % 3 === 0) {
      sum3 += i;
      console.log(sum3);
    }
    if (i % 6 === 0) {
      sum6 += i;
      console.log(sum6);
    }
  }
}
console.log(sum2, sum3, sum6);

// ==============================================

let sum1 = 0;
for (let i = 0; i < 10; i++) {
  if (i % 4 === 0) {
    sum1 += i;
    console.log(sum1 * 3);
  }
}

// ==============================================

let sum3 = 0;
let sum4 = 0;
let sum12 = 0;
for (let i = 0; i < 20; i++) {
  if (i % 3 === 0 || i % 4 === 0 || i % 12 === 0) {
    console.log(i);
    if (i % 3 === 0) {
      sum3 += i;
      console.log(sum3);
    }
    if (i % 4 === 0) {
      sum4 += i;
      console.log(sum4);
    }
    if (i % 12 === 0) {
      sum12 += i;
      console.log(sum12);
    }
  }
}
console.log(sum3, sum4, sum12);

// ==============================================

function get_max_j(i, max_i) {
  let max_j = 0;
  if (i < max_i / 2) {
    max_j = max_i - i;
  } else {
    max_j = i + 1;
  }
  return max_j;
}
max_i = 5;

// ==============================================
for (let i = 0; i < max_i; i++) {
  const max_j = get_max_j(i, max_i);
  for (let j = 0; j < max_j; j++) {
    process.stdout.write("*");
  }
  process.stdout.write("\n");
}
process.stdout.write("\n");
maxI = 4;
for (let i = 0; i < maxI; i++) {
  const maxJ = get_maxJ(i, maxI);
  for (let j = 0; j < maxJ; j++) {
    process.stdout.write("*");
  }
  process.stdout.write("\n");
}
process.stdout.write("\n");
function get_max_j(i, max_i) {
  let max_j = 0;
  if (i < max_i / 2) {
    max_j = i + 1;
  } else {
    max_j = max_i - i;
  }
  return max_j;
}
max_i = 8;
for (let i = 0; i < max_i; i++) {
  const max_j = get_max_j(i, max_i);
  for (let j = 0; j < max_j; j++) {
    process.stdout.write("*");
  }
  process.stdout.write("\n");
}
process.stdout.write("\n");
for (let i = 0; i < 6; i++) {
  for (let j = 6; j > i; j--) {
    process.stdout.write("*");
  }
  process.stdout.write("\n");
}
process.stdout.write("\n");
for (let i = 0; i < 5; i++) {
  for (let j = 4; j > i; j--) {
    process.stdout.write("&nbsp");
  }
  for (let j = 0; j <= i; j++) {
    process.stdout.write("*");
  }
  process.stdout.write("\n");
}
process.stdout.write("\n");
star = 5;
for (star; star >= 1; star--) {
  console.log("*".repeat(star));
}
console.log("*".repeat(star));
let n = 4;
while (n >= -4) {
  console.log("*".repeat(5 - Math.abs(n)));
  n = -2;
}
max_i = 5;
for (let i = 0; i < max_i; i++) {
  for (let j = 0; j < i + 1; j++) {
    process.stdout.write("*");
  }
  process.stdout.write("\n");
}
process.stdout.write("\n");
for (let i = max_i; i > 0; i--) {
  for (let j = 0; j < i; j++) {
    process.stdout.write("*");
  }
  process.stdout.write("\n");
}
process.stdout.write("\n");
function get_max_j(i, max_i) {
  let max_j = 0;
  if (i < max_i / 2) {
    max_j = i + 1;
  } else {
    max_j = max_i - i;
  }
  return max_j;
}
for (let i = 0; i < max_i; i++) {
  const max_j = get_max_j(i, max_i);
  for (let j = 0; j < max_j; j++) {
    process.stdout.write("*");
  }
  process.stdout.write("\n");
}
process.stdout.write("\n");

// ==============================================

let jooMin = "    910812-1148413      ";
console.log(jooMin.split("-"));
console.log(jooMin.split("-")[1]);
console.log(jooMin.trim());
let phone = "01052692810";
function parse(phone) {
  console.log(phone.slice(0, 7));
  console.log(phone.slice(7, phone.length));
  console.log(phone.slice(0, 3));
  console.log(phone.slice(3, 7));
  return [];
}
parse(phone);

// ==============================================

let letter = "2010 FIFA WORLD CUP";
function a(letter) {
  return letter.split(" ")[0];
}
console.log(a(letter));
("부천시원미구");
("울산시북구");
("서울시강서구");
