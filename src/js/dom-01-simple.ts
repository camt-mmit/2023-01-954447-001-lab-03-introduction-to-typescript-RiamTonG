document.addEventListener("DOMContentLoaded", () => {
  const inputElements = [
    ...document.querySelectorAll<HTMLInputElement>('input[type="number"].app-cmp-input'),
  ];

  inputElements.forEach((element) => {
    element.addEventListener("change", () => {
      const result = inputElements.reduce(
        (carry, elem) => carry + elem.valueAsNumber,
        0
      );

      const output = document.querySelector<HTMLOutputElement>(
        "output.app-cmp-result",
      );
      if(output) {
        output.value = `${result.toLocaleString()}`;
      }
    });
  });
});

// for(const element of inputElements) {
// จะคล้ายๆกันกับ forEach
// }

// วิธีที่ 1 ใส่หลังบรรทัด 7
// let result = 0;
// for(const elem of inputElements) {
//     result += elem.valueAsNumber;
// }
