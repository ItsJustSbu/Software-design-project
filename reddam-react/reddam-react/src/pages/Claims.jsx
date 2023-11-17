import { useState } from "react";

 const claims = [
  {"name": "John", "surname": "Smith", "class": "4B", "pending": true},
  {"name": "Alice", "surname": "Johnson", "class": "3A", "pending": false},
  {"name": "Bob", "surname": "Williams", "class": "5C", "pending": true},
  {"name": "Emily", "surname": "Davis", "class": "2D", "pending": false},
  {"name": "Michael", "surname": "Taylor", "class": "6E", "pending": true},
  {"name": "Olivia", "surname": "Brown", "class": "1F", "pending": false},
  {"name": "Daniel", "surname": "Jones", "class": "4B", "pending": true},
  {"name": "Sophia", "surname": "Miller", "class": "3A", "pending": false},
  {"name": "Matthew", "surname": "Wilson", "class": "5C", "pending": true},
  {"name": "Emma", "surname": "Moore", "class": "2D", "pending": false},
  {"name": "David", "surname": "Anderson", "class": "6E", "pending": true},
  {"name": "Ava", "surname": "White", "class": "1F", "pending": false},
  {"name": "Christopher", "surname": "Lee", "class": "4B", "pending": true},
  {"name": "Mia", "surname": "Hall", "class": "3A", "pending": false},
  {"name": "Andrew", "surname": "Clark", "class": "5C", "pending": true},
  {"name": "Ella", "surname": "Turner", "class": "2D", "pending": false},
  {"name": "Joshua", "surname": "Baker", "class": "6E", "pending": true},
  {"name": "Avery", "surname": "Garcia", "class": "1F", "pending": false},
  {"name": "Ryan", "surname": "Scott", "class": "4B", "pending": true},
  {"name": "Sophie", "surname": "Carter", "class": "3A", "pending": false},
  {"name": "Nathan", "surname": "Ward", "class": "5C", "pending": true},
  {"name": "Grace", "surname": "Cooper", "class": "2D", "pending": false},
  {"name": "Ethan", "surname": "Fisher", "class": "6E", "pending": true},
  {"name": "Chloe", "surname": "Turner", "class": "1F", "pending": false},
  {"name": "William", "surname": "Smith", "class": "4B", "pending": true},
  {"name": "Madison", "surname": "Taylor", "class": "3A", "pending": false},
  {"name": "James", "surname": "Johnson", "class": "5C", "pending": true},
  {"name": "Aubrey", "surname": "Moore", "class": "2D", "pending": false},
  {"name": "Elijah", "surname": "Williams", "class": "6E", "pending": true},
  {"name": "Lily", "surname": "Davis", "class": "1F", "pending": false},
  {"name": "Benjamin", "surname": "Brown", "class": "4B", "pending": true},
  {"name": "Zoe", "surname": "Wilson", "class": "3A", "pending": false},
  {"name": "Logan", "surname": "Jones", "class": "5C", "pending": true},
  {"name": "Hannah", "surname": "Miller", "class": "2D", "pending": false},
  {"name": "Jackson", "surname": "Anderson", "class": "6E", "pending": true},
  {"name": "Aiden", "surname": "White", "class": "1F", "pending": false},
  {"name": "Abigail", "surname": "Lee", "class": "4B", "pending": true},
  {"name": "Sofia", "surname": "Hall", "class": "3A", "pending": false},
  {"name": "Caleb", "surname": "Clark", "class": "5C", "pending": true},
  {"name": "Aria", "surname": "Turner", "class": "2D", "pending": false},
  {"name": "Luke", "surname": "Baker", "class": "6E", "pending": true},
  {"name": "Stella", "surname": "Garcia", "class": "1F", "pending": false},
  {"name": "Dylan", "surname": "Scott", "class": "4B", "pending": true},
  {"name": "Liam", "surname": "Carter", "class": "3A", "pending": false},
  {"name": "Penelope", "surname": "Ward", "class": "5C", "pending": true},
  {"name": "Victoria", "surname": "Cooper", "class": "2D", "pending": false},
  {"name": "Isaac", "surname": "Fisher", "class": "6E", "pending": true},
  {"name": "Brooklyn", "surname": "Turner", "class": "1F", "pending": false}
]

export default function Claims() {
  const [pending, setPending] = useState(true);
  const [show, setShow] = useState(false);


  return (
    <div className={'mt-[30px]'}>
      <div className={'flex justify-evenly '}>
        <button className={`text-3xl font-bold w-[300px] text-center pb-5 cursor-pointer ${pending? "border-b-2 border-mustard" : ""}`} onClick={()=>setPending(!pending)}>Pending</button>
        <button className={`text-3xl font-bold w-[300px] text-center pb-5 cursor-pointer ${!pending? "border-b-2 border-mustard" : ""}`} onClick={()=>setPending(!pending)}>Completed</button>
      </div>
      <div className={'mt-10'}>
        
        <ul className={'grid grid-cols-3'}>
          {claims
            .filter((item) => item.pending === pending)
            .map((item) => (
            <li key={item.id} className={'flex justify-between border-2 border-gray w-[350px] mb-4  pl-2 p-[20px]'}>
              <div className={'flex gap-5'}>
                <input type="checkbox" className={'pl-2'} />
                <div>
                  <h1>{item.name} { item.surname}</h1>
                  <h1>{item.class}</h1>
                </div>
              </div>
              
              <button className={'text-sm mr-3 rounded border h-[40px] w-[100px]'}>View</button>
            </li>
          ))
          }
        </ul>

      </div>
      <div className={`fixed w-full h-full`}>
        <div>
          className={`fixed w-full h-full`}
        </div>

      </div>
    </div>
  )
}
