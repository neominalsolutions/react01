import { useState } from "react";
 // state tanımlarını hook adını verdiğimiz özel func ile yapıyoruz.
    // getter,setter
    // props.counter componente dışarıdan gönderilen başlangıç değeri olurdu
    // array deconstruction yöntemi uyguladık
    // this keyword yok
    // constructor yok, super yok
    // method bind işlemi yok

type CounterSampleProps = {
    counter: number
}
function CounterSample(props: CounterSampleProps) {

    console.log('props', props);
   
    // propstan state intial değer geçme işlemi
    // value type state ile çalışma
    const [counter, setCounter] = useState<number>(props.counter);

    const increase = () => {
        setCounter(counter + 1);
    }

    return <>
        <p> Counter: {counter}</p>
        <button onClick={increase}>(+)</button>
    </>

}

// render methodu yok bunun yerine direkt olarak return edebiliriz.
export default CounterSample;