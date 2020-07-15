import React from 'react'
import Person from './Person'

function NameList({numbers}) {
    const names = ['Bruce', 'Clark', 'Diana', 'Bruce']
    const persons = [
        {
            id:1,
            name:'Bruce',
            age:30,
            skill:'React'
        },
        {
            id:2,
            name:'Diana',
            age:28,
            skill:'Angular'
        },
        {
            id:3,
            name:'Wayne',
            age:35,
            skill:'JavaScript'
        }
    ]

    const personList = persons.map(person => ( <Person key={person.id} person={person}></Person>))
    const nameList = names.map((name, index) => <h2 key={index}>{index} {name}</h2>)
    return (
        <div>
            {nameList}
        </div>
    )
}

export default NameList
