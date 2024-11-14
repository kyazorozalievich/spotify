"use client";
import scss from "./Mediatek.module.scss";
import { TbPlaylistAdd } from "react-icons/tb";
import { useRouter } from "next/navigation";
import { useGetPlayListQuery } from "@/redux/api/playlist";

const Mediatek = () => {
  const { data: play } = useGetPlayListQuery();
  const router = useRouter();

  return (
    <section className={scss.Mediatek}>
      <div className="container">
        <div className={scss.content}>
          <div className={scss.playListIcons}>
            <TbPlaylistAdd />
          </div>
          <div className={scss.playListBlock}>
            <div className={scss.playListBox}>
              {play?.items.map((el) => (
                <div
                  onClick={() => {
                    router.push(`/playList/${el.id}`);
                  }}
                  key={el.id}
                  className={scss.playListBoxBlock}
                >
                  <img src={el.images[0].url} alt={el.name} />
                  <p>{el.name}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Mediatek;
