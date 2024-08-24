import { useRouter } from 'next/router';
import styles from '../../styles/Product.module.css';
import React, { useEffect, useState } from 'react';

function ProductPage() {
  const router = useRouter();
  const { id } = router.query; // Récupère l'ID du produit à partir de l'URL
  const [product, setProduct] = useState(null);
  
  // Simuler la récupération des données du produit
  useEffect(() => {
    if (id) {
      // Remplacez ceci par une vraie requête d'API ou une récupération de données
      const productData = {
        id: id,
        name: "Nom du Produit",
        price: 20.80,
        description: "Description détaillée du produit ici.",
        relatedProducts: [
          { id: '2', name: 'Produit Connexe 1' },
          { id: '3', name: 'Produit Connexe 2' }
        ]
      };
      setProduct(productData);
    }
  }, [id]);

  if (!product) {
    return <div>Chargement...</div>;
  }

  return (
    <div className={styles.productPage}>
      <h1>{product.name}</h1>
      <p>Prix: {product.price}€</p>
      <p>{product.description}</p>
      <button>Ajouter au panier</button>

      <h2>Articles en rapport :</h2>
      <ul>
        {product.relatedProducts.map((relatedProduct) => (
          <li key={relatedProduct.id}>
            <a href={`/products/${relatedProduct.id}`}>{relatedProduct.name}</a>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default ProductPage;
