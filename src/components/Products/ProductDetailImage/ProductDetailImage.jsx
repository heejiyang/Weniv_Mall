import { useEffect, useState } from "react";
import { ProductDetailImageWrapper } from "./styled";

const ProductDetailImage = ({ locationData }) => {
  // 처음에 객체로 두고 map을 돌면서 찍어낼 것. imageData가 배열로 보인다.
  const [imageData, setImageData] = useState([]);

  useEffect(() => {
    if (locationData) {
      setImageData(locationData.state.data.detailInfoImage);
    }
  }, []);

  return (
    <ProductDetailImageWrapper>
      <h2 className="hidden">상세 이미지</h2>
      {imageData.map((el, idx) => (
        <img src={`https://test.api.weniv.co.kr/${el}`} alt="상세이미지" akey={idx} />
      ))}
    </ProductDetailImageWrapper>
  );
};

export default ProductDetailImage;