import { useState } from "react";

function useCounter(initialValue) {
    const [count, setCount] = useState(initialValue);

    const increaseCount = () => setCount((count) => count + 1);
    // Math.max 두 수를 비교해서 최대값을 출력함
    // (해당 기능은 카운트가 음수로 내려가지 않기 위해 설정)
    const decreaseCount = () => setCount((count) => Math.max(count - 1, 0));

    return [count, increaseCount, decreaseCount];
}

export default useCounter;
