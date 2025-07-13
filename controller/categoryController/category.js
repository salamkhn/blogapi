import { category } from "../../models/catogory.model.js";

export const categoryFunction = async (req, res) => {
  try {
    const { name } = req.body;

    //validation
    if (!name) {
      return res.status(400).json({
        message: "all field are required",
        success: false,
      });
    }
    console.log("category: ", name);

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
  } catch (err) {
    return res.status(500).json({
      message: "internal server error (catch of category)",
      success: false,
    });
  }
};
