import React, { Component } from 'react'
import { Todo } from '../../models/Todo'


// API DTO burada interface


type FetchDataComponentSampleState = {
    todos:Array<Todo> | Todo[] // Union Types ismini veriyoruz.
}

export default class FetchDataClassComponentSample extends Component {
    state:FetchDataComponentSampleState = {
        todos:[]
    }
    componentDidMount(): void { // asenkron api çağrılarının yapıldı lifecycle method, component yüklenirken dolu gelmesi gereken durumlarda kullanırız.
        // async fetch data
        fetch('https://jsonplaceholder.typicode.com/todos').then(response => {
            return response.json();
        }).then(data => {
            console.log('todos', data);
            this.setState({todos:data});
        })
    }
    render() {
        return (
            <div style={{padding:'10px'}}>
                {this.state.todos.map((item:Todo,index:number) => {
                    return <div key={item.id}>{item.title}</div>
                })}
            </div>
        )
    }
}
