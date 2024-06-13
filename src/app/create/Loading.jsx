import React from "react";
import Lottie from "lottie-react";
import loadingAnimation from "../../assets/loadingAnimation.json";

const Loading = () => {
  return (
    <div className="fixed top-0 left-0 w-full h-full flex items-center justify-center bg-gray-800 bg-opacity-75 z-50">
      <div className="bg-white p-5 rounded-lg shadow-lg">
        <div className="flex items-center justify-center mb-4">
          <Lottie animationData={loadingAnimation} style={{ height: 64, width:64 }} />
          <span className="text-lg text-[#ECB159]">Yükleniyor...</span>
        </div>
        <p className="text-gray-700 text-center">Lütfen bekleyiniz</p>
      </div>
    </div>
  );
};

export default Loading;
// Normalde next loading işlemi böyle yapılmıyor. Bu uygulama içinde loading işlemi gereksiz çünkü asenkron bir işlem yok ama eklemek istedim.