import { Component, ReactNode } from "react";

export default class ClassComponentLifeCycleMethods extends Component {

    state: any = {
        randomNumber: 0
    }

    // name!:string; sttring veya undefined tipinde demek
    timer!:NodeJS.Timer;
    /**
     *
     */
    constructor(props: any) {
        super(props);
        this.generateRandomNumber = this.generateRandomNumber.bind(this);
    }

    generateRandomNumber() {

        this.setState({ randomNumber: Math.round((Math.random() * 5)) })
        // this.setState(this.state,() => {
        //     console.log('guncel-state-callback', this.state);
        // });
    }

    // Component DidMount Component doma ilk yüklendiğinde 1 kereye mahsus çalışır
    // component açılışınca veri çekme işlemleri bu method üzerinde yapılır.
    componentDidMount(): void {
        console.log('componentDidMount')
       this.timer = setInterval(() => {
            console.log('random', Math.round((Math.random() * 5)));
            this.setState({ randomNumber: Math.round((Math.random() * 5)) })
        },1000)
    }
    // state değişimi sonrasında shouldComponentUpdate true dönerse tetiklenir
    // güncel state bilgisine bu method üzerinden erişebilir.
    // bir önceki state ile bir sonraki state kıyaslaması yapabiliriz.
    componentDidUpdate(prevProps: Readonly<{}>, prevState: Readonly<{}>, snapshot?: any): void {
        console.log('guncel', this.state.randomNumber, 'eski', (prevState as any).randomNumber);
        console.log('componentDidUpdate');

        console.log('random değerler arasındaki fark', Number(this.state.randomNumber) - Number((prevState as any).randomNumber));
    }

    // Component domdan ayrıldığında tetiklenen method
    componentWillUnmount(): void {
        console.log('componentWillUnmount');
        clearInterval(this.timer);
        // componentten çıkınca interval değeri temizlenmediği için interval değerini tekrardab sıfırlamamız gerekiyor.
    }

    // componentdeki state değeri update olmadan önce burası tetiklenir.
    // eğer state üzerinde özel bir durum varsa state deki değerin değişimin olup olmayacağına bu method sayesinde karar verebiliriz.
    // randomNumber 3 gelirse state güncelleme durumu için yaptık.
    // 3 değerinin üretimin hiç bir zaman ekrana yansıtmayacak.
    shouldComponentUpdate(nextProps: Readonly<{}>, nextState: Readonly<{}>, nextContext: any): boolean {

        console.log('shouldComponentUpdate');

        if ((nextState as any).randomNumber === 3) {
            return false; // virtual domda güncelleme yapma
        }

        return true;
    }

    render(): ReactNode {
        return <>
            <div>
                LifeCyleMethods
                <p>
                    Random Number: {this.state.randomNumber}
                </p>
                <button onClick={this.generateRandomNumber}>
                    Random Number Generator
                </button>
            </div>
        </>
    }
}