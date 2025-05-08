import React from "react";
import logoskintalk from "../../public/logoskintalk.png"; // sesuaikan path

const HomePage = () => {
  return (
    <section className="bg-gradient-to-br from-purple-50 to-white p-10 text-center flex flex-col items-center">
      <h2 className="text-3xl font-bold text-purple-800 mb-4">SkinTalk</h2>
      <p className="text-gray-700 max-w-xl mb-6">
        ✨ Your skin, your rules! ✨ Dari skincare hacks, tren terbaru, sampai review jujur tanpa drama—kita bahas semuanya di sini!
      </p>
      <img src="/logoskintalk.png" alt="Skincare Illustration" className="w-64 h-auto" />
    </section>
  );
};

export default HomePage;
