import { useState } from "react";

 const claims = [
  {
    "name": "John",
    "surname": "Smith",
    "class": "4B",
    "activity": "Donations",
    "pending": true
  },
  {
    "name": "Jane",
    "surname": "Doe",
    "class": "3A",
    "activity": "Blankets",
    "pending": false
  },
  {
    "name": "Robert",
    "surname": "Johnson",
    "class": "5C",
    "activity": "67 hours",
    "pending": true
  },
  {
    "name": "Emily",
    "surname": "Williams",
    "class": "2D",
    "activity": "External",
    "pending": false
  },
  {
    "name": "Michael",
    "surname": "Brown",
    "class": "6A",
    "activity": "Bottle tops and tags (50)",
    "pending": true
  },
  {
    "name": "Sophia",
    "surname": "Davis",
    "class": "1B",
    "activity": "Elandsvlei",
    "pending": false
  },
  {
    "name": "Daniel",
    "surname": "Taylor",
    "class": "4C",
    "activity": "Eco bricks(50)",
    "pending": true
  },
  {
    "name": "Olivia",
    "surname": "Anderson",
    "class": "3D",
    "activity": "External",
    "pending": false
  },
  {
    "name": "James",
    "surname": "Moore",
    "class": "5B",
    "activity": "External",
    "pending": true
  },
  {
    "name": "Ava",
    "surname": "Thomas",
    "class": "2A",
    "activity": "Jars of hope",
    "pending": false
  },
  {
    "name": "Ethan",
    "surname": "White",
    "class": "6D",
    "activity": "Sandwiches",
    "pending": true
  },
  {
    "name": "Isabella",
    "surname": "Hall",
    "class": "1C",
    "activity": "Santa shoebox",
    "pending": false
  },
  {
    "name": "Alexander",
    "surname": "Young",
    "class": "4A",
    "activity": "Squares (50)",
    "pending": true
  },
  {
    "name": "Mia",
    "surname": "Harris",
    "class": "3B",
    "activity": "Tutoring",
    "pending": false
  },
  {
    "name": "William",
    "surname": "Clark",
    "class": "5D",
    "activity": "Donations",
    "pending": true
  },
  {
    "name": "Grace",
    "surname": "Walker",
    "class": "2C",
    "activity": "Blankets",
    "pending": false
  },
  {
    "name": "Liam",
    "surname": "Ward",
    "class": "6B",
    "activity": "67 hours",
    "pending": true
  },
  {
    "name": "Abigail",
    "surname": "Fisher",
    "class": "1D",
    "activity": "External",
    "pending": false
  },
  {
    "name": "Benjamin",
    "surname": "Turner",
    "class": "4D",
    "activity": "Bottle tops and tags (50)",
    "pending": true
  },
  {
    "name": "Avery",
    "surname": "Perry",
    "class": "3C",
    "activity": "Elandsvlei",
    "pending": false
  },
  {
    "name": "Henry",
    "surname": "Scott",
    "class": "5A",
    "activity": "Eco bricks(50)",
    "pending": true
  },
  {
    "name": "Ella",
    "surname": "Roberts",
    "class": "2B",
    "activity": "External",
    "pending": false
  },
  {
    "name": "Logan",
    "surname": "Evans",
    "class": "6C",
    "activity": "External",
    "pending": true
  },
  {
    "name": "Aria",
    "surname": "Hill",
    "class": "1A",
    "activity": "Jars of hope",
    "pending": false
  },
  {
    "name": "Jackson",
    "surname": "Baker",
    "class": "4B",
    "activity": "Sandwiches",
    "pending": true
  },
  {
    "name": "Scarlett",
    "surname": "Lopez",
    "class": "3D",
    "activity": "Santa shoebox",
    "pending": false
  },
  {
    "name": "Lucas",
    "surname": "Cooper",
    "class": "5C",
    "activity": "Squares (50)",
    "pending": true
  },
  {
    "name": "Chloe",
    "surname": "Gonzalez",
    "class": "2A",
    "activity": "Tutoring",
    "pending": false
  },
  {
    "name": "Owen",
    "surname": "Morgan",
    "class": "6D",
    "activity": "Donations",
    "pending": true
  },
  {
    "name": "Aiden",
    "surname": "Harrison",
    "class": "3B",
    "activity": "Blankets",
    "pending": false
  },
  {
    "name": "Penelope",
    "surname": "Lloyd",
    "class": "1C",
    "activity": "67 hours",
    "pending": true
  },
  {
    "name": "Carter",
    "surname": "Fletcher",
    "class": "4A",
    "activity": "External",
    "pending": false
  },
  {
    "name": "Madison",
    "surname": "Ferguson",
    "class": "5B",
    "activity": "Bottle tops and tags (50)",
    "pending": true
  },
  {
    "name": "Lily",
    "surname": "Hayes",
    "class": "2D",
    "activity": "Elandsvlei",
    "pending": false
  },
  {
    "name": "Nathan",
    "surname": "Peters",
    "class": "6A",
    "activity": "Eco bricks(50)",
    "pending": true
  },
  {
    "name": "Hudson",
    "surname": "Wells",
    "class": "3C",
    "activity": "External",
    "pending": false
  },
  {
    "name": "Leah",
    "surname": "Barnes",
    "class": "1B",
    "activity": "External",
    "pending": true
  },
  {
    "name": "Elijah",
    "surname": "Hunt",
    "class": "4C",
    "activity": "Jars of hope",
    "pending": false
  },
  {
    "name": "Stella",
    "surname": "Long",
    "class": "5D",
    "activity": "Sandwiches",
    "pending": true
  },
  {
    "name": "Gabriel",
    "surname": "Sullivan",
    "class": "2C",
    "activity": "Santa shoebox",
    "pending": false
  },
  {
    "name": "Sofia",
    "surname": "Fisher",
    "class": "6B",
    "activity": "Squares (50)",
    "pending": true
  },
  {
    "name": "Dylan",
    "surname": "Richardson",
    "class": "3A",
    "activity": "Tutoring",
    "pending": false
  },
  {
    "name": "Claire",
    "surname": "Ford",
    "class": "1D",
    "activity": "Donations",
    "pending": true
  },
  {
    "name": "Mason",
    "surname": "Cruz",
    "class": "4D",
    "activity": "Blankets",
    "pending": false
  },
  {
    "name": "Zoe",
    "surname": "Gibson",
    "class": "2B",
    "activity": "67 hours",
    "pending": true
  },
  {
    "name": "Connor",
    "surname": "Hudson",
    "class": "5A",
    "activity": "External",
    "pending": false
  },
  {
    "name": "Aubrey",
    "surname": "Gardner",
    "class": "3D",
    "activity": "Bottle tops and tags (50)",
    "pending": true
  },
  {
    "name": "Hazel",
    "surname": "Palmer",
    "class": "6C",
    "activity": "Elandsvlei",
    "pending": false
  },
  {
    "name": "Nolan",
    "surname": "Kennedy",
    "class": "1A",
    "activity": "Eco bricks(50)",
    "pending": true
  },
  {
    "name": "Alyssa",
    "surname": "Holland",
    "class": "4B",
    "activity": "External",
    "pending": false
  },
  {
    "name": "Gavin",
    "surname": "Bowman",
    "class": "3B",
    "activity": "External",
    "pending": true
  },
  {
    "name": "Evelyn",
    "surname": "Dean",
    "class": "5C",
    "activity": "Jars of hope",
    "pending": false
  },
  {
    "name": "Jaxon",
    "surname": "Simpson",
    "class": "2A",
    "activity": "Sandwiches",
    "pending": true
  },
  {
    "name": "Aiden",
    "surname": "Newton",
    "class": "6D",
    "activity": "Santa shoebox",
    "pending": false
  },
  {
    "name": "Taylor",
    "surname": "Holmes",
    "class": "1C",
    "activity": "Squares (50)",
    "pending": true
  },
  {
    "name": "Peyton",
    "surname": "Bryant",
    "class": "4A",
    "activity": "Tutoring",
    "pending": false
  },
  {
    "name": "Brooklyn",
    "surname": "Wagner",
    "class": "3C",
    "activity": "Donations",
    "pending": true
  },
  {
    "name": "Colton",
    "surname": "Gill",
    "class": "5B",
    "activity": "Blankets",
    "pending": false
  },
  {
    "name": "Sienna",
    "surname": "Robinson",
    "class": "2D",
    "activity": "67 hours",
    "pending": true
  },
  {
    "name": "Ezra",
    "surname": "Cross",
    "class": "6A",
    "activity": "External",
    "pending": false
  },
  {
    "name": "Luna",
    "surname": "Bates",
    "class": "1B",
    "activity": "Bottle tops and tags (50)",
    "pending": true
  },
  {
    "name": "Asher",
    "surname": "Rhodes",
    "class": "4C",
    "activity": "Elandsvlei",
    "pending": false
  },
  {
    "name": "Lydia",
    "surname": "Owens",
    "class": "3A",
    "activity": "Eco bricks(50)",
    "pending": true
  },
  {
    "name": "Gabriel",
    "surname": "Soto",
    "class": "5D",
    "activity": "External",
    "pending": false
  },
  {
    "name": "Layla",
    "surname": "Walsh",
    "class": "2C",
    "activity": "External",
    "pending": true
  },
  {
    "name": "Ryder",
    "surname": "Ball",
    "class": "6B",
    "activity": "Jars of hope",
    "pending": false
  },
  {
    "name": "Zara",
    "surname": "Chapman",
    "class": "3B",
    "activity": "Sandwiches",
    "pending": true
  },
  {
    "name": "Elliot",
    "surname": "Fowler",
    "class": "1D",
    "activity": "Santa shoebox",
    "pending": false
  },
  {
    "name": "Lillian",
    "surname": "Howell",
    "class": "4D",
    "activity": "Squares (50)",
    "pending": true
  },
  {
    "name": "Jordan",
    "surname": "Moss",
    "class": "2B",
    "activity": "Tutoring",
    "pending": false
  },
  // ... continue with more entries
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
            <li key={item.id} className={'flex justify-between border-2 border-gray w-[360px] mb-4  pl-2 p-[20px] rounded-xl'}>
              <div className={'flex gap-5'}>
              
                <div>
                  <h1 className={`text-xl`}>{item.name} { item.surname}</h1>
                  <h1 className={`text-base`}>{item.class}</h1>
                  <h1 className={`text-sm`}>{item.activity}</h1>
                </div>
              </div>
              
              <button className={'text-sm mr-3 rounded border h-[40px] w-[100px]'} onClick={ ()=> setShow(!show)}>View</button>
            </li>
          ))}
        </ul>

      </div>
      <div className={`fixed w-full h-full`}>
        <div className={`absolute left-`}>
          
        </div>

      </div>
    </div>
  )
}
