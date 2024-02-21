import React from "react";
import { useFetchCateQuery } from "../../service/categories";
import { useFetchColorQuery } from "../../service/color";
import { useFetchKThuocQuery } from "../../service/kthuoc";
import { useFetchLogoQuery } from "../../service/thuonghieu";

const AddPrd = () => {
  const { data: cates } = useFetchCateQuery();
  const { data: colors } = useFetchColorQuery();
  const { data: kthuocs } = useFetchKThuocQuery();
  const { data: logos } = useFetchLogoQuery();
  console.log(cates, colors, kthuocs, logos);

  return <div>AddPrd</div>;
};

export default AddPrd;
