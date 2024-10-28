import React, { useState } from 'react';

function Form() {
  const [selectedOption, setSelectedOption] = useState('');

  return (
    <div className="min-h-screen flex items-center justify-center bg-white py-10">
      {/* Form Container */}
      <form className="bg-blue-200 p-20 rounded-lg shadow-lg w-full max-w-5xl space-y-12">
        
        {/* Alamat */}
        <div className="flex items-center justify-between">
          <label className="text-gray-700 font-bold w-1/4" htmlFor="alamat">
            Alamat
          </label>
          <input
            className="w-3/4 px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            type="text"
            id="alamat"
            placeholder="alamat"
          />
        </div>

        {/* No Telpn/Hp */}
        <div className="flex items-center justify-between">
          <label className="text-gray-700 font-bold w-1/4" htmlFor="telepon">
            No Telpn./Hp
          </label>
          <input
            className="w-3/4 px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            type="tel"
            id="telepon"
            placeholder="number"
          />
        </div>

        {/* Tinggal dengan... */}
        <div className="flex items-center justify-between">
          <label className="text-gray-700 font-bold w-1/4" htmlFor="tempatTinggal">
            Tinggal dengan Orang Tua/ Saudara/ Asrama/ di Kost
          </label>
          <select
            className={`w-3/4 px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 ${
              !selectedOption ? 'text-gray-400' : 'text-black'
            }`}
            id="tempatTinggal"
            value={selectedOption}
            onChange={(e) => setSelectedOption(e.target.value)}
          >
            <option value="" disabled hidden>
              menu
            </option>
            <option value="Orang Tua">Orang Tua</option>
            <option value="Saudara">Saudara</option>
            <option value="Asrama">Asrama</option>
            <option value="Kost">Kost</option>
          </select>
        </div>

        {/* Jarak Tempat Tinggal */}
        <div className="flex items-center justify-between">
          <label className="text-gray-700 font-bold w-1/4" htmlFor="jarak">
            Jarak Tempat Tinggal ke Sekolah
          </label>
          <input
            className="w-3/4 px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            type="text"
            id="jarak"
            placeholder="... km"
          />
        </div>

        {/* Buttons */}
        <div className="flex justify-between mt-6">
          <button
            type="button"
            className="bg-gray-400 hover:bg-gray-600 text-white font-bold py-2 px-10 rounded-lg focus:outline-none focus:ring-2 focus:ring-gray-300"
          >
            Kembali
          </button>
          <button
            type="submit"
            className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-10 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-300"
          >
            Lanjut
          </button>
        </div>
      </form>
    </div>
  );
}

export default Form;
