import { useState } from "react"

function Dropdown () {
    const dropdownItems = [
        {
          'id': 0,
          'name': 'TECHNOLOGY DEPARTEMENT',
          'location': 'Jl. Lembong No 8 Kel. Braga Kec. Sumur Bandung, Kota Bandung, Jawa Barat'
        },
        {
          'id': 1,
          'name': 'ECONOMY DEPARTEMENT',
          'location': 'Jl. Mampang Prapatan no 19 kel. Pela Mampang, Kota Jakarta, Jakarta'
        },
        {
          'id': 2,
          'name': 'ANOTHER DEPARTEMENT',
          'location': 'Jl. abcdefg No 12 Kel. Braga Kec. Sumur Yogyakarta, Kota Yogyakarta, Jawa Tengah'
        }
    ]

    const [val, setVal] = useState(0);


    return (
        <div>
            <div className='rounded'>
                <select className="m-4 p-4 bg-white border-2 border-slate-100 rounded rounded font-rubik text-sm font-bold text-blue-950 text-center leading-6 md:text-4-xl lg:text-4xl " onChange={(e)=> setVal(e.target.value)}>
                    <option className="font-rubik text-sm font-bold text-blue-950 text-center leading-6 md:text-4-xl lg:text-4xl" value="0">TECHNOLOGY DEPARTEMENT</option>
                    <option className="font-rubik text-sm font-bold text-blue-950 text-center leading-6 md:text-4-xl lg:text-4xl"  value="1">ECONOMY DEPARTEMENT</option>
                    <option className="font-rubik text-sm font-bold text-blue-950 text-center leading-6 md:text-4-xl lg:text-4xl" value="2">ANOTHER DEPARTEMENT</option>
                </select>
            </div>
            <div className="m-7 lg:m-32">
                <h2 className='w-64 font-rubik text-lg font-normal text-sky-500 text-left leading-8 ml-2 mb-4 md:text-2xl md:w-96 lg:text-6xl lg:w-192' >{dropdownItems[val].location}</h2>
            </div>
        </div>
    )
}

export default Dropdown;
