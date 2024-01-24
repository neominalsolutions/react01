import React, { useState } from 'react'

// rfce
// rcc => class component short cut

interface Person {
    firstname: string;
    lastname: string;
}

function PersonsSample() {

    const [persons, setPersons] = useState<Person[]>([]); // ref type state, referans değişirse, state değişir, render alır
    const [firstName, setFirstName] = useState<string>(''); // value type => value değişirse state değişir render alır
    const [lastName, setLastName] = useState<string>('');

    const addPerson = () => {
        // === kontrollü bir eşitliktir hem değer hem tip eşitliğine bakar bizi hatadan kurtarır.
        
        if(firstName === '' || lastName === '')
        {
            window.alert('Firstname veya LastName boş geçilemez');
        }
        else {
            const isExist = persons.some(x => x.firstname === firstName && x.lastname === lastName);

            if (!isExist) {
                // aynı kişiden var mı kontrolü yapalım
                setPersons([{ firstname: firstName, lastname: lastName }, ...persons]); // state güncellemesi yap.
                setFirstName('');
                setLastName('');
            }
            else {
                window.alert('aynı kişiden listede mevcut!');
            }
        }
        
       

        // Not: Referans type değerler ile çalışırken array,object gibi spread yada map ile referansı koparmaz isek, virtul dom güncellemeyi anlamıyor.
        // persons.push({firstname:firstName, lastname:lastName})
        // setPersons(persons); INVALID Kullanım
    }
    // re-render
    return (
        <div>
            <span>FirstName: {firstName}</span>
            <br></br>
            {/* two binding işlemi */}
            {/* model binding */}
            <input value={firstName} placeholder='firstname' onChange={(event: any) => {
                setFirstName(event.target.value);
            }} />
            <br></br>
            <span>LastName: {lastName}</span>
            <br></br>
            <input value={lastName} placeholder='lastname' onChange={(event: any) => {
                setLastName(event.target.value);
            }} />
            <br></br>
            <button onClick={addPerson}>Ekle</button>
            <hr></hr>
            <ul>
                {persons.map((item: Person, index: number) => {
                    return <li key={index}>{item.firstname} {item.lastname.toUpperCase()}</li>
                })}
            </ul>
        </div>

    )
}

export default PersonsSample