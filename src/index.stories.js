import('../dist/css/frontend.css');
export default { title: 'Button' };

export const withText = () => '<button class="a">Hello test</button>';

export const withEmoji = () => {
  const button = document.createElement('button');
  button.innerText = '😀 😎 👍 💯';
  return button;
};
