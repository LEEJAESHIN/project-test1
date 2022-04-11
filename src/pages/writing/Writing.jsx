import React from "react";
import styles from "./Writing.module.css";

function Writing() {
  return (
    <div className={styles.container}>
      <div className={styles.main}>
        <div className={styles.contentes}>
          <div className={styles.title}>제목</div>
          <div>
            <input className={styles.contente1}></input>
          </div>
          <div className={styles.list}>사진 업로드</div>
          <div className={styles.list}>
            <button className={styles.fileBtn}>
              <i class="fas fa-solid fa-plus"></i>
            </button>
          </div>
          <div className={styles.list}>내용</div>
          <input className={styles.contente2}></input>
          <div className={styles.list}>카테고리</div>
          <div className={styles.tagBtn}>
            <button className={styles.tagBtns}>서울특별시</button>
            <button className={styles.tagBtns}>경기도</button>
            <button className={styles.tagBtns}>충청도</button>
            <button className={styles.tagBtns}>강원도</button>
          </div>
          <div className={styles.selectBtn}>
            <button className={styles.selectBtns}>등록</button>
            <button className={styles.selectBtns}>취소</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Writing;
