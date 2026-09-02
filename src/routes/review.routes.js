import { Router } from 'express';
import { getReviewsByProduct, createReview } from '../controllers/review.controller.js';
import { validate } from '../middlewares/validate.middleware.js';
import { createReviewSchema } from '../schemas/review.schema.js';

const router = Router();

router.get('/:id/reviews', getReviewsByProduct);
router.post('/:id/reviews', validate(createReviewSchema, 'body'), createReview);

export default router;