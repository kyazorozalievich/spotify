"use client";
import scss from "./Mediatek.module.scss";
import { useGetPlayListQuery } from "@/redux/api/playlist";
import { useRouter } from "next/navigation";

const Mediatek = () => {
  const { data } = useGetPlayListQuery();
  const router = useRouter();

  return (
    <div className={scss.mediatek}>
      <div className="container">
        <div className={scss.content}>Mediatek</div>
      </div>
    </div>
  );
};

export default Mediatek;
