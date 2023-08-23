import styles from "../css/Product.module.css";
import photo from "../assets/elephant.jpg";

function Product() {
  return (
    <>
      <div className={styles.productContainer}>
        <div className={styles.content}>
          <img
            src={photo}
            alt="an elephant and a girl"
            className={styles.photo}
          />
          <div className={styles.description}>
            <h1>About Walking Man</h1>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam
              labore sed aspernatur blanditiis qui mollitia adipisci aut est, ea
              aliquam unde voluptate veniam quam consectetur necessitatibus
              voluptatem atque sunt quia quibusdam maiores asperiores!
              Consequatur maiores facilis, nihil a tempore numquam sit nam
              nesciunt, saepe distinctio, amet quae quaerat dolores voluptates.
            </p>
          </div>
        </div>
      </div>
    </>
  );
}

export default Product;
