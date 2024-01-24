import { Component, ReactNode } from "react";

// componente özgü state tanımı
type ClassComponentSampleState = {
    headerText:string;
    counter:number;
}

// componente özgü olması sebebi ile ComponentİsmiProps şeklinde bir tanım yaptık
type ClassComponentSampleProps = { 
    sx?: React.CSSProperties // componente dışarıdan bir stil tanımlası yapmak istiyoruz
    // ? ile stil geçişini opsiyonel olarak bıraktık
}
// props yapısı ise componenti çağırırken dışarıdan attribute olarak componete geçilen değerleri temsil eder.
class ClassComponentSample extends Component<ClassComponentSampleProps> {
    // headerText:string = 'Header';
    // Component içerisinde kullanıcı etkileşimi sonucunda arayüze yansayacak bir değer değişikliğinde state kullanmı gerekmektedir.
    state:ClassComponentSampleState = {
        headerText:'Header',
        counter:0
    }
    constructor(props:ClassComponentSampleProps) {
        super(props);
        // Not: eğer class componentlerde bir methodu class bağlamak istersek aşağıdaki gibi bir binding kodu yazmamız gerekiyor
        this.showMessage = this.showMessage.bind(this);
        // showMessage iilgili method içerisinde state değişikliği yapmamıza izin veriyor. Component base'den gelen setState methodunu çağırabiliyoruz.
        // method bind işlemleri class componentlerin constructor'ında yapılıyor.
        this.increase = this.increase.bind(this);        
    }
    increase():void {
        this.state.counter = this.state.counter + 1;
        this.setState(this.state,() => {
            // console.log('state-2', this.state);
            if(this.state.counter == 10){
                window.alert("Counter 10 sınırında");
                
            }
        });
    }

    showMessage():void{
        window.alert('Clicked');
        // this.headerText = 'Header2'; // invalid kullanım setState ile yapmalıydık.
        this.state.headerText = 'Header2';
        this.setState(this.state); // bu komut sonrası virtual dom update oluyor ve render methodu çalışıyor.
    }
    // state bir değişiklik olduğunda tekrar tetiklenir. (Auto olarak tetiklenen bir component life cycle method)
    // Component ilk doma girerken 1 kereye mahsus tetiklenir. Bundan sonraki tüm tetiklemeler state değişikliği ile meydana gelir.
    render(): ReactNode {
        console.log('...rendering')
        return <>
        {/* style={this.props.sx} dışarıdan component props olarak gönderilen stil değerini componentin içerisine props olarak geçtik. bu props değerini div'e verdik. */}
            <div style={this.props.sx}>
                <h1>{this.state.headerText}</h1>
                {/* model binding */}
                <p>
                    ClassComponent Sample10
                    <br></br>
                    <button onClick={this.showMessage}>Show message</button>
                    {/* event binding */}
                    <p>
                        Sayac: {this.state.counter}
                    </p>
                    <button onClick={this.increase}>(+)</button>

                </p>
            </div>
        </>
    }
}

export default ClassComponentSample;