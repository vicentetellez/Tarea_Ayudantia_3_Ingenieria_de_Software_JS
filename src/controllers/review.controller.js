import prisma from '../config/prisma.js';

export const getReviewsByProduct = async (req, res, next) => {
  try {
    const productId = Number(req.params.id);

    const product = await prisma.product.findUnique({
      where: { id: productId },
      include: {
        reviews: true
      }
    });

    if (!product) {
      return res.status(404).json({
        error: 'Producto no encontrado.'
      });
    }

    const totalReviews = product.reviews.length;
    const averageRating = totalReviews === 0
      ? 0
      : product.reviews.reduce((sum, review) => sum + review.rating, 0) / totalReviews;

    res.status(200).json({
      ...product,
      averageRating: Number(averageRating.toFixed(1))
    });
  } catch (error) {
    next(error);
  }
};

export const createReview = async (req, res, next) => {
  try {
    const { author, rating, comment } = req.body;
    const productId = Number(req.params.id);

    const product = await prisma.product.findUnique({
      where: { id: productId }
    });

    if (!product) {
      return res.status(404).json({
        error: 'Producto no encontrado.'
      });
    }

    const newReview = await prisma.review.create({
      data: {
        author,
        rating,
        comment,
        productId
      }
    });

    res.status(201).json({
      mensaje: 'Reseña creada exitosamente.',
      data: newReview
    });
  } catch (error) {
    next(error);
  }
};
