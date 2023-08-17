import React from "react";
import { useQuery } from "react-query";
import queryTop from "../../api/queryTop";
import { AlbumCovers, RowWrap } from "./elements";

const Top = () => {
  const { data, isLoading } = useQuery("top", async () => await queryTop());

  return (
    <RowWrap>
      {!isLoading &&
        data?.items.map((item) => (
          <AlbumCovers
            src={item.album.images[0].url}
            alt="album cover"
            key={item.id}
          />
        ))}
    </RowWrap>
  );
};

export default Top;
