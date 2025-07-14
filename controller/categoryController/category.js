import { category } from "../../models/catogory.model.js";

// createCategory function
export const createCategory = async (req, res) => {
  try {
    const { name } = req.body;

    //validation
    if (!name) {
      return res.status(400).json({
        message: "all field are required",
        success: false,
      });
    }

    const exist = await category.findOne({ name });

    // validation for existing
    if (exist) {
      return res.status(400).json({
        message: "Category is present just select",
        success: false,
      });
    }
    // saved to dbs
    await category.create({ name });

    //success response
    return res.status(201).json({
      message: "category name successfully saved",
      name,
      success: true,
    });
  } catch (err) {
    return res.status(500).json({
      message: "internal server error (catch of category)",
      success: false,
    });
  }
};

// read allcateGory function
export const showCategory = async (req, res) => {
  try {
    const allcateGory = await category.find({});

    //validation
    if (!allcateGory) {
      return res.status(400).json({
        message: "not any category present",
        success: false,
      });
    }

    // success response
    return res.status(200).json({
      message: "all category successfully loaded",
      allcateGory,
      success: true,
    });
  } catch (err) {
    return res.status(500).json({
      message: "internal server error (catch of showCategories)",
      error: err.message,
      success: false,
    });
  }
};

// get category by id
export const getCategorybyId = async (req, res) => {
  try {
    const id = req.params.id;

    const exist = await category.findById(id);

    //validation
    if (!exist) {
      return res.status(400).json({
        message: "not any category found with this id",
        success: false,
      });
    }

    // success response if found
    return res.status(200).json({
      message: "this product found by given id",
      success: true,
      category: exist,
    });
  } catch (err) {
    return res.status(500).json({
      message: "internal server error (in getCategorybyId)",
      success: false,
    });
  }
};

//update category by id
export const updateCategorybyId = async (req, res) => {
  const { name } = req.body;
  const id = req.params.id;
  console.log("id :", id);
  try {
    const exist = await category.findByIdAndUpdate(
      id,
      { name },
      {
        new: true,
      }
    );

    console.log("exist :", exist);

    //validation
    if (!exist) {
      return res.status(400).json({
        message: "category with this id is not found",
        success: false,
      });
    }

    // if find than update it's
    return res.status(201).json({
      message: "category updated successfully",
      success: true,
    });
  } catch (err) {
    return res.status(500).json({
      message: "internal server error (updateCategorybyId)",
      error: err.message,
    });
  }
};

// delete category by id
export const deleteCategorybyId = async (req, res) => {
  const id = req.params.id;

  console.log("id :", id);

  try {
    const deleted = await category.findByIdAndDelete(id);

    //validation
    if (!deleted) {
      return res.status.json({
        message: "category not exist with this id",
        success: false,
      });
    }

    //success response
    return res.status(200).json({
      message: "category with this id deleted successfully",
      success: true,
    });
  } catch (err) {
    return res.status(500).json({
      message: "internal server error in (deleteCategorybyId)",
      success: false,
      error: err.message,
    });
  }
};
