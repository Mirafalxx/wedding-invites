import React, { memo, useContext, useEffect } from "react";
import PhotoCard from "../../components/PhotoCard/PhotoCard";
import "./styles.scss";
import { useDispatch, useSelector } from "react-redux";
import { downloadImage, getImages } from "../../api/uploadApi";
import { Link, useParams } from "react-router-dom";
import Spinner from "../../components/Spinner/Spinner";
import { PopupContext } from "../../utils/ModalContenxt";

const Gallery = () => {
  const params = useParams();
  const dispatch = useDispatch();
  const images = useSelector((state) => state.images.images);
  const loading = useSelector((state) => state.images.loading);
  const isAdmin = params.id === 'alina';

  useEffect(() => {
    dispatch(getImages());
  }, [dispatch]);

  const { setLoading } = useContext(PopupContext);

  useEffect(() => {
    if (!loading) setLoading(false);
  }, [loading, setLoading]);

  const handler = async () => {
    await dispatch(downloadImage(setLoading));
  };

  return (
    <div className="gallery">
      <Link className={'gallery__link'} to={'/'}>
        Вернуться назад
      </Link>
      <button className={'admin__btn admin__btn-download'} onClick={handler}>
        Скачать все картинки
      </button>
      {images.length
        ? images.map((item, index) => <PhotoCard id={item.id} isAdmin={isAdmin} key={index} src={item.url} images={images} />)
        : null}
      {loading && <Spinner />}
    </div>
  );
};

export default memo(Gallery);
