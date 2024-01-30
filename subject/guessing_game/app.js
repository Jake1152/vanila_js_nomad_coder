/**
 * 1.  0부터 시작될 숫자 범위의 최대 숫자겂울 입력받는다
 * 2.  guess할 숫자를 입력받는다
 * 3.  play를 누를 때마다 rand함수가 실행되며 rand로 생성된 숫자를 보여준다
 * 4.  rand로 생성한 값이 guess값이랑 다르면 lost를 화면에 보여주고 맞으면 won을 띄운다
 */

const RANDOM_MIN_VALUE = 0;

function getRandomInt(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  const randValue = Math.floor(Math.random() * (max - min + 1)) + min; //최댓값은 제외, 최솟값은 포함
  //   console.log(`min: ${min}, max: ${max}, randValue: ${randValue}`);
  return randValue;
}

function getInputValue(tagId) {
  try {
    const unrefinedValue = document.getElementById(`${tagId}`).value;
    // console.log(`tagId: ${tagId}, unrefinedValue: ${unrefinedValue}`);
    const value = parseInt(unrefinedValue);
    if (!value) throw new Error("Input value is not a number type");
    return value;
  } catch (error) {
    console.error(error);
  }
}

function doGuess() {
  const randMaxValue = getInputValue("max-num");
  const generatedRandValue = getRandomInt(RANDOM_MIN_VALUE, randMaxValue);
  const guessValue = getInputValue("guess-num");
  //   console.log(
  //     `randMaxValue: ${randMaxValue}, guessValue: ${guessValue}, generatedRandValue : ${generatedRandValue}`
  //   );
  const statusBoard = document.getElementById("status-board");
  statusBoard.textContent = `You chose: ${guessValue}, the machine chose: ${generatedRandValue}`;
  const winLostStatus = document.getElementById("win-lost");
  if (generatedRandValue === guessValue) {
    winLostStatus.textContent = `You won!`;
  } else {
    winLostStatus.textContent = `You lost!`;
  }
}

const playButton = document.getElementById("play-btn");
playButton.addEventListener("click", doGuess);
