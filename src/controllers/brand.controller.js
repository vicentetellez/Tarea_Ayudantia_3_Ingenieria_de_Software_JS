import prisma from '../config/prisma.js';

export const getAllBrands = async (req, res, next) => {
  try {
    const brands = await prisma.brand.findMany({
      include: {
        _count: {
          select: { products: true }
        }
      }
    });

    res.status(200).json({
      total: brands.length,
      data: brands
    });
  } catch (error) {
    next(error);
  }
};

export const createBrand = async (req, res, next) => {
  try {
    const { name, country, website } = req.body;

    const newBrand = await prisma.brand.create({
      data: {
        name,
        country,
        website
      }
    });

    res.status(201).json({
      mensaje: 'Marca creada exitosamente.',
      data: newBrand
    });
  } catch (error) {
    next(error);
  }
};