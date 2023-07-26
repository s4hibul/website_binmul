import React from 'react'

function zakat_maalForm() {
    return (
        <div className='flex flex-col lg:flex-row pt-8 lg:space-x-10 md:space-y-10 space-y-10 mb-10 '>
        <div>
            <div className="mb-6">
                <label className="block mb-2 text-sm font-medium text-gray-900">Harga Emas</label>
                <input id="harga_emas" className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500  block w-80 p-2.5 " required/>
            </div>
            <div className="mb-6">
                <label className="block mb-2 text-sm font-medium text-gray-900">Nilai Harta Tabungan / Deposito</label>
                <input id="nilai_tabungan/depo" className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500  block w-80 p-2.5 " required/>
            </div>
            <div className="mb-6">
                <label className="block mb-2 text-sm font-medium text-gray-900">Nilai Harta Rumah, Properti, Kendaraan</label>
                <input id="nilai_rumahPropKendaraan" className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500  block w-80 p-2.5 " required/>
            </div>
            <div className="mb-6">
                <label className="block mb-2 text-sm font-medium text-gray-900">Nilai Harta Emas, Perak</label>
                <input id="Nilai_emasPerak" className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500  block w-80 p-2.5 " required/>
            </div>
            <button className="text-white bg-orange hover:border-tosca focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-centera">Hitung Zakat</button>
        </div>
        <div>
            <div className="block pt-10 max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow">
                <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 ">Noteworthy technology acquisitions 2021</h5>
                <p className="font-normal text-gray-700 ">Here are the biggest enterprise technology acquisitions of 2021 so far, in reverse chronological order.</p>
            </div>
        </div>
    </div>
    
    )
}

export default zakat_maalForm