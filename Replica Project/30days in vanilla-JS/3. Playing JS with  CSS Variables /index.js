const inputs = document.querySelectorAll('.controls input');

function handleUpdate() {
  const suffix = this.dataset.sizing || ''; // 설정된 HEX string 값을 받거나
  console.log(this.name, this.value, suffix, this.dataset.sizing);
  document.documentElement.style.setProperty(`--${this.name}`, this.value + suffix);
}
// HTML data-`setName`으로 통해 DOM으로 받은 데이터로 DOM조작을 손쉽게 해냄
//

inputs.forEach(input => input.addEventListener('change', handleUpdate));
